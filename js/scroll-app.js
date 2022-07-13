var timlineCriteria = gsap.timeline();

timlineCriteria
  .from(".criteria__point_pt1", { opacity: 0 }, "one-0")
  .to(".criteria__point_pt1", { opacity: 1 }, "one-1")
  .to(".criteria__point_pt1", { opacity: 1 }, "one-2")
  .to(".criteria__point_pt1", { opacity: 0 }, "one-3");

timlineCriteria
  .from(".criteria__point_pt2", { opacity: 0 }, "two-0")
  .to(".criteria__point_pt2", { opacity: 1 }, "two-1")
  .to(".criteria__point_pt2", { opacity: 1 }, "two-2")
  .to(".criteria__point_pt2", { opacity: 0 }, "two-3");

timlineCriteria
  .from(".criteria__point_pt3", { opacity: 0 }, "three-0")
  .to(".criteria__point_pt3", { opacity: 1 }, "three-1")
  .to(".criteria__point_pt3", { opacity: 1 }, "three-2")
  .to(".criteria__point_pt3", { opacity: 0 }, "three-3");

timlineCriteria
  .from(".criteria__point_pt4", { opacity: 0 }, "four-0")
  .to(".criteria__point_pt4", { opacity: 1 }, "four-1")
  .to(".criteria__point_pt4", { opacity: 1 }, "four-2")
  .to(".criteria__point_pt4", { opacity: 0 }, "four-3");

timlineCriteria
  .from(".criteria__point_pt5", { opacity: 0 }, "five-0")
  .to(".criteria__point_pt5", { opacity: 1 }, "five-1")
  .to(".criteria__point_pt5", { opacity: 1 }, "five-2");

var pinCriteria = ScrollTrigger.create({
  animation: timlineCriteria,
  trigger: "#criteria",
  pin: true,
  scrub: true,
  start: "top 100px",
  end: "+=600%",
  pinSpacing: true,
  toggleClass: { targets: "#criteria", className: "is-active" },
  markers: false,
});

var timlineBallotBox = gsap.timeline();

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
  .from(
    "#arrow",
    { opacity: 0, rotate: -45, transformOrigin: "50% 50%" },
    "four-0"
  )
  .to("#arrow", { opacity: 1 }, "four-1");

timlineBallotBox
  .to("#votingSlip", { x: "400px" }, "five-0")
  .to("#votingSlip", { scale: "0.7", x: "500px" }, "five-1")
  .to("#votingSlip", { scale: "0.3", x: "500px", y: 120 }, "five-2")
  .to("#votingSlip", { opacity: 0 }, "five-2");
timlineBallotBox.to("#ballotBox", { x: "-350px" }, "five-0");

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
