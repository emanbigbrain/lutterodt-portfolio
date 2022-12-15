let bodyContainer = document.getElementById("bodyContainer");
let heroContainer = document.getElementById("heroContainer");
let worksButton = document.getElementById("worksButton");
let hoverMouse = false;
let aboutButton = document.getElementById("aboutButtonId");

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

window.addEventListener("load", (event) => {
  let welcomeSpan = new Letterize({
    targets: ".welcomeText",
    wrapper: "span",
    className: "welcomeSpan",
  });

  let toMySpan = new Letterize({
    targets: ".toMyText",
    wrapper: "span",
    className: "toMySpan",
  });

  let portfolioSpan = new Letterize({
    targets: ".portfolioText",
    wrapper: "span",
    className: "portfolioSpan",
  });

  let openingTimeout = setTimeout(openingFunction, 4500);
  function openingFunction() {
    gsap.to(".openingBackground", {
      opacity: 0,
      duration: 1.5,
      ease: "expo",
    });
    gsap.to(".openingBackground", {
      display: "none",
    });
    gsap.from(".navBar", {
      y: 25,
      opacity: 0,
      duration: 2,
      ease: "expo",
      delay: 0.25,
    });
    gsap.from(
      ".shape",
      {
        y: 17,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
      },
      "+4.7"
    );
    gsap.from(".welcomeSpan", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo",
      stagger: 0.05,
      delay: 1,
    });
    gsap.from(
      ".toMySpan",
      {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo",
        stagger: 0.05,
      },
      "+5.5"
    );
    gsap.from(
      ".portfolioSpan",
      {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo",
        stagger: 0.05,
      },
      "+5.5"
    );
  }
  gsap.from(
    ".heroImageContainer",
    {
      scaleX: 0,
      duration: 1.5,
      ease: "expo",
    },
    "+6.5"
  );
});

worksButton.addEventListener("mouseover", (event) => {
  gsap.to(".triangle", {
    x: -15,
    y: -20,
    rotation: 150,
    duration: 2,
    ease: "power4",
  });
  gsap.to(".circle", {
    x: -5,
    y: 20,
    rotation: 150,
    duration: 2,
    ease: "power4",
  });
  gsap.to(".square", {
    x: 15,
    y: -5,
    rotation: -150,
    duration: 2,
    ease: "power4",
  });
});

worksButton.addEventListener("mouseout", (event) => {
  gsap.to(".triangle", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 1.4,
    ease: "power4",
  });
  gsap.to(".circle", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 1.4,
    ease: "power4",
  });
  gsap.to(".square", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 1.4,
    ease: "power4",
  });
});
