let worksHeaderSpan = new Letterize({
  targets: ".worksHeading",
  wrapper: "span",
  className: "worksHeaderSpan",
});

let headerAnimation = gsap.timeline();
headerAnimation.from(".worksHeaderSpan", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "expo",
  stagger: 0.02,
});
headerAnimation.from(".worksPageHeading", {
  scale: 1.1,
  y: 250,
  duration: 1,
  ease: "power4",
});
headerAnimation.from(
  ".aboutSection",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo",
  },
  1.8
);
