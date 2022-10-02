"use strict";

gsap.set(".header", {
  opacity: 0,
});
gsap.to(".header", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".js-feature",
    start: "top center",
  },
});
gsap.set(".js-hero-ttl", {
  x: -200,
  opacity: 0,
});
gsap.set(".js-hero-txt", {
  y: 50,
  opacity: 0,
});
gsap.to(".js-hero-ttl", {
  x: 0,
  opacity: 1,
  delay: 0.5,
  ease: "elastic.out(1, 0.1)",
});
gsap.to(".js-hero-txt", {
  y: 0,
  delay: 1,
  opacity: 1,
  ease: "power3.out",
});
gsap.set(".js-feature-ttl", {
  x: -200,
  opacity: 0,
});
gsap.to(".js-feature-ttl", {
  x: 0,
  opacity: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".js-feature",
    start: "top center",
  },
});
gsap.set(".js-policy-item", {
  y: 200,
  opacity: 0,
});
gsap.to(".js-policy-item", {
  y: 0,
  opacity: 1,
  stagger: 0.1,
  delay: 0.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".js-feature-ttl",
    start: "top center",
  },
});
gsap.set(".js-service-ttl", {
  x: -200,
  opacity: 0,
});
gsap.to(".js-service-ttl", {
  x: 0,
  opacity: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".js-service",
    start: "top center",
  },
});
gsap.set([".js-card-item01", ".js-card-item02", ".js-card-item03"], {
  y: 100,
  opacity: 0,
});
gsap.to(".js-card-item01", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-service-ttl",
    start: "top center",
  },
});
gsap.set(
  [".js-card-ttl01", ".js-card-ttl03", ".js-card-txt01", ".js-card-txt03"],
  {
    x: 200,
    opacity: 0,
  }
);
gsap.set([".js-card-ttl02", ".js-card-txt02"], {
  x: -200,
  opacity: 0,
});
gsap.to(".js-card-ttl01", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-card-item01",
    start: "top center",
  },
});
gsap.to(".js-card-txt01", {
  x: 0,
  opacity: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".js-card-item01",
    start: "top center",
  },
});
gsap.to(".js-card-item02", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-card-item01",
    start: "center center",
  },
});
gsap.to(".js-card-ttl02", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-card-item02",
    start: "top center",
  },
});
gsap.to(".js-card-txt02", {
  x: 0,
  opacity: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".js-card-item02",
    start: "top center",
  },
});
gsap.to(".js-card-item03", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-card-item02",
    start: "center center",
  },
});
gsap.to(".js-card-ttl03", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".js-card-item03",
    start: "top center",
  },
});
gsap.to(".js-card-txt03", {
  x: 0,
  opacity: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".js-card-item03",
    start: "top center",
  },
});
gsap.set(".js-slider-item", {
  y: 200,
  opacity: 0,
});
gsap.to(".js-slider-item", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".works",
    start: "top center",
  },
});
