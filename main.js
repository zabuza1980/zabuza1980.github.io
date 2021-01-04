// humburger toggle
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");
const tabaActive = document.querySelectorAll("a");
// pojewianie sie na scroolu
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});
// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});
// czcionka i odstępy pomiędzy liniami
function increaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 1) + 'px';
  style = window.getComputedStyle(txt, null).getPropertyValue('line-height');
  currentSize = parseFloat(style);
  txt.style.lineHeight = (currentSize + 2) + 'px';
}
function decreaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 1) + 'px';
  style = window.getComputedStyle(txt, null).getPropertyValue('line-height');
  currentSize = parseFloat(style);
  txt.style.lineHeight = (currentSize + -2) + 'px';
}
// fadeout img
window.addEventListener('scroll', function(){
  document.querySelector('.home-intro').style.opacity = 1 - +window.pageYOffset/700+"";
} )
// kontrast
document.getElementById('kontrast').addEventListener('click', function (){
  document.body.classList.toggle('contrasting');
  document.querySelector('header').classList.toggle('contrasting');
  document.querySelector('.mega-menu').classList.toggle('contrasting');
  document.querySelector('.mega-menu.akt.expandable').classList.toggle('contrasting');
  document.querySelector('.mega-menu.ksi.expandable').classList.toggle('contrasting');
  document.querySelector('.mega-menu.dos.expandable').classList.toggle('contrasting');
  document.querySelector('.home-intro').classList.toggle('contrasting');
  document.querySelector('.home-about').classList.toggle('contrasting');
  document.querySelector('.swiper-container.swiper-container-coverflow.swiper-container-3d.swiper-container-initialized.swiper-container-horizontal').classList.toggle('contrasting'); 
  document.querySelector('.home-more-stuff').classList.toggle('contrasting');
});
// swiper
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 60,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});
// ruchome elementy intro
let bg = document.getElementById("bg");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    text.style.top = value * 0.7 + 'px';
})