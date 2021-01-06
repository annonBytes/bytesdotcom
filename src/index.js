// preloader
const preloaderTL = gsap.timeline();
preloaderTL.to("#logo", { yPercent: -20, opacity: 0, delay: 8 });
preloaderTL.to(".preloader", {
  transform: "scaleY(0)",
  transformOrigin: "top",
  delay: "-=3",
});

//Getting the exact sizes of the outlines
// const logo = document.querySelectorAll("#logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(` ${i} is ${logo[i].getTotalLength()}`);
// }
// console.log(logo);
