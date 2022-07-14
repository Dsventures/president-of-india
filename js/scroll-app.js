var timlineOpening = gsap.timeline();
var pinOpening = ScrollTrigger.create({
  animation: timlineOpening,
  trigger: "#cover",
  pin: false,
  scrub: true,
  start: "top 100px",
  end: "+=400%",
  toggleClass: { targets: "#cover", className: "is-active" },
  markers: false,
});

// Section: Criteria

var timlineCriteria = gsap.timeline();

timlineCriteria
  .from("#mainCand", { opacity: 0, y: "-50px" }, "one-0")
  .from("#mainCand1", { opacity: 0, x: "50px" }, "one-0")
  .from("#mainCand2", { opacity: 0, x: "-50px" }, "one-0")
  .from(".critieria__points", { opacity: 0 }, "one-1");

timlineCriteria
  .from(".criteria__point_pt1", { opacity: 0 }, "one-2")
  .to(".criteria__point_pt1", { opacity: 1 }, "one-3")
  .to(".criteria__point_pt1", { opacity: 1 }, "one-4")
  .to(".criteria__point_pt1", { opacity: 0 }, "one-5");

timlineCriteria
  .to(".critieria__points", { backgroundColor: "#B2C8DF" }, "two-0")
  .from(".criteria__point_pt2", { opacity: 0 }, "two-0")
  .to(".criteria__point_pt2", { opacity: 1 }, "two-1")
  .to(".criteria__point_pt2", { opacity: 1 }, "two-2")
  .to(".criteria__point_pt2", { opacity: 0 }, "two-3");

timlineCriteria
  .to(".critieria__points", { backgroundColor: "#C9BBCF" }, "three-0")
  .from(".criteria__point_pt3", { opacity: 0 }, "three-0")
  .to(".criteria__point_pt3", { opacity: 1 }, "three-1")
  .to(".criteria__point_pt3", { opacity: 1 }, "three-2")
  .to(".criteria__point_pt3", { opacity: 0 }, "three-3");

timlineCriteria
  .to(".critieria__points", { backgroundColor: "#90C8AC" }, "four-0")
  .from(".criteria__point_pt4", { opacity: 0 }, "four-0")
  .to(".criteria__point_pt4", { opacity: 1 }, "four-1")
  .to(".criteria__point_pt4", { opacity: 1 }, "four-2")
  .to(".criteria__point_pt4", { opacity: 0 }, "four-3");

timlineCriteria
  .to(".critieria__points", { backgroundColor: "#DEB6AB" }, "five-0")
  .from(".criteria__point_pt5", { opacity: 0 }, "five-0")
  .to(".criteria__point_pt5", { opacity: 1 }, "five-1")
  .to(".criteria__point_pt5", { opacity: 1 }, "five-2");

var pinCriteria = ScrollTrigger.create({
  animation: timlineCriteria,
  trigger: "#criteria",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=300%",
  pinSpacing: true,
  toggleClass: { targets: "#criteria", className: "is-active" },
  markers: false,
});

// ==================================
// Section: Electors
// ==================================

var timlineElectors = gsap.timeline();

timlineElectors.from(".electors-who__one", { delay: 1, opacity: 0 }, "one-0");

timlineElectors.from(".electors-who__two", { opacity: 0 }, "two-0");

timlineElectors.from(".electors-who__note", { opacity: 0 }, "three-0");

var pinElectors = ScrollTrigger.create({
  animation: timlineElectors,
  trigger: ".electors",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=200%",
  pinSpacing: true,
  toggleClass: { targets: ".electors", className: "is-active" },
  markers: false,
});

// mlavotevalue

var pinMla = ScrollTrigger.create({
  trigger: ".mlavotevalue",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=100%",
  pinSpacing: true,
  toggleClass: { targets: ".mlavotevalue", className: "is-active" },
  markers: false,
});
// mpvotevalue

var pinMP = ScrollTrigger.create({
  trigger: ".mpvotevalue",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=100%",
  pinSpacing: true,
  toggleClass: { targets: ".mpvotevalue", className: "is-active" },
  markers: false,
});

var timlineBallotBox = gsap.timeline();

timlineBallotBox
  .from("#candname3", { opacity: 0 }, "zero-2")
  .from("#candname2", { opacity: 0 }, "zero-1")
  .from("#candname1", { opacity: 0 }, "zero-0");

timlineBallotBox
  .from("#pref1", { opacity: 0 }, "one-0")
  .to("#pref1", { opacity: 1 }, "one-1");

timlineBallotBox
  .from("#pref2", { opacity: 0 }, "two-0")
  .to("#pref2", { opacity: 1 }, "two-1");

timlineBallotBox
  .from("#pref3", { opacity: 0 }, "three-0")
  .to("#pref3", { opacity: 1 }, "three-1");

timlineBallotBox
  .to("#votingSlip", { scale: "0.5", x: "125px" }, "four-0")
  .to("#votingSlip", { scale: "0.2", x: "200px" }, "four-2")
  .to(
    "#votingSlip",
    { scale: "0.1", x: "225px", y: "300px", opacity: 0 },
    "four-3"
  );

var pinBallotBox = ScrollTrigger.create({
  animation: timlineBallotBox,
  trigger: "#votingProcess1",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=600%",
  pinSpacing: true,
  toggleClass: { targets: "#votingProcess1", className: "is-active" },
  markers: false,
});

var timlineCandSelect = gsap.timeline();

timlineCandSelect
  .from("#cand1", { opacity: 0 }, "zero-0")
  .from("#candtxt1", { opacity: 0 }, "zero-0");

timlineCandSelect
  .from("#cand2", { opacity: 0 }, "zero-1")
  .from("#candtxt2", { opacity: 0 }, "zero-1");

timlineCandSelect
  .from("#cand3", { opacity: 0 }, "zero-2")
  .from("#candtxt3", { opacity: 0 }, "zero-2");

timlineCandSelect.from("#cuttoff-50", { opacity: 0 }, "one-3");

timlineCandSelect
  .from("#Bar1", { opacity: 0 }, "one-0")
  .from("#bar11", { width: 0 }, "one-0")
  .from("#bar12", { width: 0 }, "one-01")
  .from("#bar13", { width: 0 }, "one-02")
  .from("#Bar2", { opacity: 0 }, "one-1")
  .from("#bar21", { width: 0 }, "one-1")
  .from("#bar22", { width: 0 }, "one-11")
  .from("#bar23", { width: 0 }, "one-12")
  .from("#Bar3", { opacity: 0 }, "one-2")
  .from("#bar31", { width: 0 }, "one-2")
  .from("#bar32", { width: 0 }, "one-21")
  .from("#bar33", { width: 0 }, "one-22");

timlineCandSelect.from("#eliminated3", { opacity: 0 }, "two-0");

timlineCandSelect.to("#cand3", { opacity: 0 }, "two-1");
timlineCandSelect.to("#eliminated3", { opacity: 0 }, "two-1");
timlineCandSelect.to("#candtxt3", { opacity: 0 }, "two-1");
timlineCandSelect.to("#Bar3", { y: -150, opacity: 0 }, "two-1");
timlineCandSelect.to("#bar22", { x: 0, width: 100 }, "two-1");
timlineCandSelect.to("#bar23", { x: 20, width: 50 }, "two-1");
timlineCandSelect.to("#bar11", { width: 190 }, "two-1");
timlineCandSelect.to("#bar12", { x: 20, width: 80 }, "two-1");
timlineCandSelect.to("#bar13", { x: 20, width: 50 }, "two-1");

timlineCandSelect.to("#cand1-group", { scale: 1.1, y: 50 }, "four-0");

timlineCandSelect.to("#cand2-group", { scale: 1.1, y: 100 }, "four-0");

timlineCandSelect.from("#eliminated2", { delay: 1, opacity: 0 }, "five-0");

timlineCandSelect.to("#cand2-group", { delay: 1, opacity: 0 }, "five-1");

timlineCandSelect.to("#cand1-group", { scale: 1.3, x: -50, y: 100 }, "five-2");

timlineCandSelect.to("#cuttoff-50", { opacity: 0 }, "five-2");

var pinCandSelect = ScrollTrigger.create({
  animation: timlineCandSelect,
  trigger: "#votingProcess2",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=600%",
  pinSpacing: true,
  toggleClass: { targets: "#votingProcess2", className: "is-active" },
  markers: true,
});
