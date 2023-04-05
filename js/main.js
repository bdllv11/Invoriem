$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 32,
        loop: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        // stagePadding: 90,
      },
      // breakpoint from 480 up
      601: {
        items: 3,
        margin: 32,
        loop: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      // breakpoint from 768 up
      1001: {
        items: 3,
        margin: 48,
        loop: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause:true,
      },
    },
  });
});

/* video */

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

/* Open mobile nav */

const openNavBtn = document.querySelector("#openMobileNav");
const clolseNavBtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavBtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};

clolseNavBtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:3,
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:1000,
//     margin:10,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

// autoplay:true
// autoplayTimeout:5000
// autoplayHoverPause:false
