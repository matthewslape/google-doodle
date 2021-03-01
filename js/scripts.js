console.log("OK");

// Greensock Coming Soon!
// TIMELINE

//Day and Night Toggle
const changeDisplay = document.querySelector("#triggergrid");

const thingToChange = document.querySelector("#day");

changeDisplay.addEventListener("click", () => {
  console.log("hi");

  thingToChange.classList.toggle("day");
});

/*Growth of tree*/
gsap.to("#treeTop", { x: 0, y: -50, repeat: -1, duration: 25, yoyo: true });

/*Radomization of Smoke on fire*/
gsap.fromTo(
  "#smoke1",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);

gsap.fromTo(
  "#smoke2",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);

gsap.fromTo(
  "#smoke3",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);

gsap.fromTo(
  "#smoke4",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);

gsap.fromTo(
  "#smoke5",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);

gsap.fromTo(
  "#smoke6",

  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  },
  {
    x: 0,
    y: 0,
    repeat: -1,
    duration: "random(1, 7)",
    opacity: "random(0, 1)",
    yoyo: true
  }
);
