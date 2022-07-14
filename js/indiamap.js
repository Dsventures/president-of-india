drawIndiaMap(".indiamap", "cases", []);

var marker =
  "M9,0c1.5,0,2.9,0.4,4.3,1.1c0.6,0.3,1.2,0.8,1.8,1.2c0.8,0.7,1.5,1.6,2,2.6c0.5,0.9,0.8,1.9,0.9,2.9 C18,8.4,18,8.9,18,9.5c0,0.5-0.2,1.1-0.3,1.6c-0.3,0.9-0.6,1.8-1,2.6c-0.7,1.5-1.5,3-2.4,4.4c-0.6,1-1.2,2-1.8,2.9 c-0.7,1.2-1.5,2.3-2.3,3.4c-0.2,0.3-0.4,0.6-0.7,0.9c-0.2,0.3-0.7,0.3-1,0c-0.3-0.4-0.7-0.9-1-1.4c-0.5-0.7-1-1.5-1.5-2.3 c-0.9-1.4-1.8-2.8-2.7-4.3c-0.6-1-1.1-2-1.6-3c-0.5-1-0.9-1.9-1.2-3c-0.2-0.6-0.4-1.3-0.5-2c0-0.4,0-0.8,0-1.2 c0-0.7,0.2-1.3,0.4-2c0.4-1.2,0.9-2.2,1.7-3.1c0.7-0.9,1.6-1.5,2.5-2.1c0.9-0.5,1.9-0.8,2.9-1C8.1,0,8.5,0,9,0z M9,12.2 c1.7,0,3.2-1.4,3.3-3.2c0-1.8-1.5-3.2-3.2-3.2C7.2,5.7,5.8,7.2,5.8,9C5.7,10.8,7.3,12.2,9,12.2z";

function drawIndiaMap(selector, type, dataformap) {
  var width = 300,
    height = 332,
    scale = 580,
    center = [82.8, 23.4];
  var source = "map/india_2019.json";
  d3.select(selector).html(null);
  var svg = d3
    .select(selector)
    .append("svg")
    .attr("class", "india map")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMin");

  var colorScaleCases = d3
    .scaleThreshold()
    .domain([0, 2000, 10000, 20000, 40000, 70000, 90000, 100000, 120000])
    .range([
      "#fff5f0",
      "#fee0d2",
      "#fcbba1",
      "#fc9272",
      "#fb6a4a",
      "#ef3b2c",
      "#cb181d",
      "#a50f15",
      "#67000d",
    ]);

  var colorScaleVaccine = d3
    .scaleThreshold()
    .domain([
      0, 500000, 700000, 2000000, 5000000, 7000000, 15000000, 35000000,
      50000000,
    ])
    .range([
      "#fff5f0",
      "#fee0d2",
      "#fcbba1",
      "#fc9272",
      "#fb6a4a",
      "#ef3b2c",
      "#cb181d",
      "#a50f15",
      "#67000d",
    ]);

  var tool_tip = d3
    .tip()
    .attr("class", "d3-tipforline")
    .offset([-150, 150])
    .html(function (d) {
      // console.log(d[1]);
      var fd = mlaData.filter(function (itm) {
        return itm.stateCode === d[1];
      });
      console.log(fd[0]);
      console.log(fd[0]["noSeatsLAS"]);
      var html = '<div class="tooltip__content">';
      html += "    <p>" + fd[0]["stateName"] + "</p>";
      html += "    <ul>";
      html += "    <li>";
      html +=
        '        No of<br /> Seats <span id="noSeats"> ' +
        fd[0]["noSeatsLAS"] +
        "</span>";
      html += "    </li>";
      html += "    <li>";
      html +=
        '        Value of <br />each MLA <span id="eachMLAVal">' +
        fd[0]["eachMLAVal"] +
        "</span>";
      html += "   </li>";
      html += "    <li>";
      html +=
        '        Total value<br /> of state <span id="stateTotVal">' +
        fd[0]["totalValState"] +
        "</span>";
      html += "    </li>";
      html += "    </ul>";
      html += "</div>";

      return html;
    });
  svg.call(tool_tip);
  var g = svg.append("g");
  var projection = d3
    .geoMercator()
    .scale(scale)
    .center(center)
    .translate([width / 2, height / 2]);

  var geoPath = d3.geoPath().projection(projection);

  function centroids(boundarydata) {
    return boundarydata.map(function (d) {
      return projection(d3.geoCentroid(d));
    });
  }

  d3.json(source, function (error, mapboundary) {
    var statewise = topojson.feature(
      mapboundary,
      mapboundary.objects.collection
    ).features;

    var centroids = statewise
      .map(function (stateFeature) {
        // console.log(stateFeature.properties);
        var tmp = [];
        tmp.push(projection(d3.geoCentroid(stateFeature)));
        tmp.push(stateFeature.properties.ST_CODE);
        return tmp;
      })
      .filter(function (r) {
        return [
          "S01",
          "S02",
          "S03",
          "S04",
          "S26",
          "U05",
          "S05",
          "S06",
          "S07",
          "S08",
          "S27",
          "S10",
          "S11",
          "S12",
          "S13",
          "S14",
          "S15",
          "S16",
          "S17",
          "S18",
          "U07",
          "S19",
          "S20",
          "S21",
          "S22",
          "S29",
          "S23",
          "S24",
          "S28",
          "S25",
        ].includes(r[1]);
      });
    // .filter(function (r) {
    //   return r[1] !== "";
    // });

    console.log(centroids);

    // var stateCentroid = centroids(statewise);
    g.selectAll(".state")
      .data(statewise)
      .enter()
      .append("path")
      .attr("d", geoPath)
      .attr("class", function (d, i) {
        // console.log(d.properties.ST_CODE, d.properties.ST_NM)
        return "state " + d.properties.ST_CODE;
      })
      .attr("stroke", "#000000")
      .attr("stroke-width", 0.2)
      .attr("fill", "#FFF");
    // .on("click", function (d, i) {
    //   console.log(d);
    // });

    var planes = svg
      .selectAll(".marker")
      .data(centroids)
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        // console.log(d);
        return (
          "translate(" + (d[0][0] - 4) + "," + (d[0][1] - 10) + ") scale(0.8)"
        );
      })
      .append("path")
      .attr("d", marker)
      .style("fill", "#69b3a2");

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      planes.on("mouseover", tool_tip.show).on("mouseout", tool_tip.hide);
    } else {
      planes.on("click", function (d, i) {
        console.log(d[1]);
        var fd = mlaData.filter(function (itm) {
          return itm.stateCode === d[1];
        });
        document.getElementById("mapIndia").style.marginTop = "160px";
        document.getElementById("tooltip").style.marginTop = "-148px";
        document.getElementById("tooltip").style.display = "block";
        document.getElementById("stateMob").innerHTML = fd[0]["stateName"];
        document.getElementById("noSeatsMob").innerHTML = fd[0]["noSeatsLAS"];
        document.getElementById("eachMLAValMob").innerHTML =
          fd[0]["eachMLAVal"];
        document.getElementById("stateTotValMob").innerHTML =
          fd[0]["totalValState"];
      });
    }
  });
}

document.getElementById("closeBtn").on("click", function () {
  document.getElementById("mapIndia").style.marginTop = "0";
  document.getElementById("tooltip").style.marginTop = "0";
  document.getElementById("tooltip").style.display = "none";
});
