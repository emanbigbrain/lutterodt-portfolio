let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let aboutButton = document.getElementById("aboutButtonId");

gsap.registerPlugin(ScrollTrigger);

aboutButton.addEventListener("mouseover", (event) => {
  gsap.to(".aboutButtonDiv", {
    scale: 1.1,
    duration: 0.3,
    ease: "expo",
  });
});

aboutButton.addEventListener("mouseout", (event) => {
  gsap.to(".aboutButtonDiv", {
    scale: 1,
    duration: 0.3,
    ease: "expo",
  });
});

window.addEventListener("load", () => {
  let worksHeaderSpan = new Letterize({
    targets: ".worksHeading",
    wrapper: "span",
    className: "worksHeaderSpan",
  });

  gsap.from(".worksHeaderSpan", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo",
    stagger: 0.1,
  });
  gsap.from(
    ".cardContainer",
    {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: "expo",
      stagger: 0.1,
    },
    "+1"
  );
});

card1.addEventListener("mouseover", (event) => {
  gsap.to(".cc1", {
    scale: 1.05,
    opacity: 1,
    duration: 0.4,
    ease: "expo",
  });
});

card1.addEventListener("mouseout", (event) => {
  gsap.to(".cc1", {
    scale: 1,
    opacity: 0.5,
    duration: 0.4,
    ease: "expo",
  });
});

card2.addEventListener("mouseover", (event) => {
  gsap.to(".cc2", {
    scale: 1.05,
    opacity: 1,
    duration: 0.4,
    ease: "expo",
  });
});

card2.addEventListener("mouseout", (event) => {
  gsap.to(".cc2", {
    scale: 1,
    opacity: 0.5,
    duration: 0.4,
    ease: "expo",
  });
});

card3.addEventListener("mouseover", (event) => {
  gsap.to(".cc3", {
    scale: 1.05,
    opacity: 1,
    duration: 0.4,
    ease: "expo",
  });
});

card3.addEventListener("mouseout", (event) => {
  gsap.to(".cc3", {
    scale: 1,
    opacity: 0.5,
    duration: 0.4,
    ease: "expo",
  });
});

card4.addEventListener("mouseover", (event) => {
  gsap.to(".cc4", {
    scale: 1.05,
    opacity: 1,
    duration: 0.4,
    ease: "expo",
  });
});

card4.addEventListener("mouseout", (event) => {
  gsap.to(".cc4", {
    scale: 1,
    opacity: 0.5,
    duration: 0.4,
    ease: "expo",
  });
});

card5.addEventListener("mouseover", (event) => {
  gsap.to(".cc5", {
    scale: 1.05,
    opacity: 1,
    duration: 0.4,
    ease: "expo",
  });
});

card5.addEventListener("mouseout", (event) => {
  gsap.to(".cc5", {
    scale: 1,
    opacity: 0.5,
    duration: 0.4,
    ease: "expo",
  });
});

gsap.to(".headingFlex", {
  scrollTrigger: {
    trigger: ".cc1",
    start: "top 30%",
    end: "top 20%",
    scrub: 1,
  },
  y: -80,
  scale: 0.2,
  ease: "none",
  duration: 1,
});
