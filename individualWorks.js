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
  ".descriptionSection",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo",
  },
  1.8
);
headerAnimation.from(".imagesSection", {
  opacity: 0,
  duration: 2,
  ease: "expo",
});
headerAnimation.from(
  ".arrowContainer",
  {
    opacity: 0,
    duration: 2,
    ease: "expo",
  },
  2
);

let tl = gsap.timeline({ repeat: -1 });
tl.to(".arrowContainer", {
  y: 50,
  duration: 2,
  ease: "power1.inOut",
});
tl.to(".arrowContainer", {
  y: 0,
  duration: 2,
  ease: "power1.inOut",
});
