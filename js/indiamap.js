drawIndiaMap(".indiamap", "cases", []);

function drawIndiaMap(selector, type, dataformap) {
  var width = 300,
    height = 332,
    scale = 580,
    center = [82.8, 23.4];
  var source = "/map/india_2019.json";
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

  var legend = d3.select(".legend");
  legend.html(null);

  if (type === "cases") {
    legend
      .selectAll(".legend-items")
      .data(colorScaleCases.domain())
      .enter()
      .append("li")
      .attr("class", "legend-items")
      .html(function (d, i) {
        // console.log(d)
        return (
          '<span style="background-color: ' +
          colorScaleCases.range()[i] +
          '"></span>' +
          d
        );
      });
  } else if (type === "vaccine") {
    legend
      .selectAll(".legend-items")
      .data(colorScaleVaccine.domain())
      .enter()
      .append("li")
      .attr("class", "legend-items")
      .html(function (d, i) {
        // console.log(d)
        return (
          '<span style="background-color: ' +
          colorScaleVaccine.range()[i] +
          '"></span>' +
          d
        );
      });
  }

  //   var tool_tip = d3
  //     .tip()
  //     .attr("class", "d3-tipforline")
  //     .offset([-15, 0])
  //     .html(function (d) {
  //       var fd = _.filter(dataformap, function (items) {
  //         return items.stateId === d.properties.ST_CODE;
  //       });

  //       var fdjk = _.filter(dataformap, function (items) {
  //         return items.stateId === "U08";
  //       });

  //       var html;
  //       html = "<p>" + d.properties.ST_NM + "</p> ";

  //       if (fd[0] !== undefined) {
  //         if (type === "cases") {
  //           html +=
  //             "<p>Total Confirmed Cases: <span>" +
  //             parseInt(fd[0]["totalIndianCases"]).toLocaleString("en-IN") +
  //             "</span></p>";
  //         } else if (type === "vaccine") {
  //           html +=
  //             "<p>Total Doses: <span>" +
  //             parseInt(fd[0]["total_doses"]).toLocaleString("en-IN") +
  //             "</span></p>";
  //         }
  //         return html;
  //       } else {
  //         if (type === "cases") {
  //           html += "<p>Total Confirmed Cases: <span>-</span></p>";
  //         } else if (type === "vaccine") {
  //           html +=
  //             "<p>Total Doses: <span>" +
  //             parseInt(fd[0]["total_doses"]).toLocaleString("en-IN") +
  //             "</span>-</p>";
  //         }
  //         return html;
  //       }
  //     });
  //   svg.call(tool_tip);
  var g = svg.append("g");
  var projection = d3
    .geoMercator()
    .scale(scale)
    .center(center)
    .translate([width / 2, height / 2]);

  var geoPath = d3.geoPath().projection(projection);

  d3.json(source, function (error, mapboundary) {
    var statewise = topojson.feature(
      mapboundary,
      mapboundary.objects.collection
    ).features;

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
  });
}
