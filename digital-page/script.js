// var circle = document.querySelector("#circle");
// var frame = document.querySelector(".frame");

// const lerp = (x, y, a) => x * (1 - a) + y * a;

// // window.addEventListener("mousemove", function (dets) {
// //   circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
// // });

// window.addEventListener("mousemove", function (dets) {
//   gsap.to(circle, {
//     x: dets.clientX,
//     y: dets.clientY,
//     duration: 0.2,
//     ease: Expo,
//   });
// });

// frame.addEventListener("mousemove", function (dets) {
//   var dims = frame.getBoundingClientRect();

//   var xstart = dims.x;
//   var xend = dims.x + dims.width;

//   //   gsap.utils.clamp(xstart, xend);
//   var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

//   gsap.to(circle, {
//     scale: 8,
//   });

//   gsap.to(".frame span", {
//     color: "#fff",
//     duration: 0.2,
//     y: "-5vw",
//   });

//   gsap.to(".frame span", {
//     x: lerp(-50, 50, zeroone),
//     duration: 0.3,
//   });
// });

// frame.addEventListener("mouseleave", function (dets) {
//   gsap.to(circle, {
//     scale: 1,
//   });

//   gsap.to(".frame span", {
//     color: "#111",
//     duration: 0.4,
//     y: 0,
//   });

//   gsap.to(".frame span", {
//     x: 0,
//     duration: 0.3,
//   });
// });

gsap.from("#img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60,
});

gsap.from("#img2", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: 60,
});

gsap.from("#img3", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from("#main h1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
});
