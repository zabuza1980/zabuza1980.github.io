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
  setCookie('czcionka',"courentSize",7);
}
function decreaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 1) + 'px';
  style = window.getComputedStyle(txt, null).getPropertyValue('line-height');
  currentSize = parseFloat(style);
  txt.style.lineHeight = (currentSize + -2) + 'px';
  setCookie('czcionka',"courentSize",7);
}
// fadeout img
window.addEventListener('scroll', function(){
  document.querySelector('.home-intro').style.opacity = 1 - +window.pageYOffset/700+"";
} )
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
// cookie logick + kontrast

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  // the following code allows multiple cookie values and splits them apart
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}
function enableDarkMode() {
  $( "body" ).addClass( "contrasting" );
  // document.body.classList.toggle('contrasting');
  $( "header" ).addClass( "contrasting" );
  // document.querySelector('header').classList.toggle('contrasting');
  $( ".dropdown-menu" ).addClass( "contrasting" );
  // document.querySelector('.dropdown-menu').classList.toggle('contrasting');
  $( ".menu-right" ).addClass( "contrasting" );
  // document.querySelector('.menu-right').classList.toggle('contrasting');
  $( ".mega-menu" ).addClass( "contrasting" );
  // document.querySelector('.mega-menu').classList.toggle('contrasting');
  $( ".mega-menu.blog.expandable" ).addClass( "contrasting" );
  // document.querySelector('.mega-menu.blog.expandable').classList.toggle('contrasting');
  $( "acc" ).addClass( "contrasting" );
  // document.getElementById('acc').classList.toggle('contrasting');
  $( ".home-intro" ).addClass( "contrasting" );
  // document.querySelector('.home-intro').classList.toggle('contrasting');
  $( ".home-about" ).addClass( "contrasting" );
  // document.querySelector('.home-about').classList.toggle('contrasting');
  $( ".home-more-stuff" ).addClass( "contrasting" );
  // document.querySelector('.home-more-stuff').classList.toggle('contrasting');
  // $( ".card" ).addClass( "contrasting" );
  // // document.querySelector('.card').classList.toggle('contrasting');
  // $( ".card2" ).addClass( "contrasting" );
  // // document.querySelector('.card2').classList.toggle('contrasting');
  // $( ".literatura" ).addClass( "contrasting" );
  // // document.querySelector('.literatura').classList.toggle('contrasting');
  $( ".swiper-container.swiper-container-coverflow.swiper-container-3d.swiper-container-initialized.swiper-container-horizontal" ).addClass( "contrasting" );
  // document.querySelector('.swiper-container.swiper-container-coverflow.swiper-container-3d.swiper-container-initialized.swiper-container-horizontal').classList.toggle('contrasting');
  setCookie('darkMode',"1",7);
}

function disableDarkMode() {
$( "body" ).removeClass( "dark" );
$( "body" ).removeClass( "contrasting" );
  // document.body.classList.toggle('contrasting');
  $( "header" ).removeClass( "contrasting" );
  // document.querySelector('header').classList.toggle('contrasting');
  $( ".dropdown-menu" ).removeClass( "contrasting" );
  // document.querySelector('.dropdown-menu').classList.toggle('contrasting');
  $( ".menu-right" ).removeClass( "contrasting" );
  // document.querySelector('.menu-right').classList.toggle('contrasting');
  $( ".mega-menu" ).removeClass( "contrasting" );
  // document.querySelector('.mega-menu').classList.toggle('contrasting');
  $( ".mega-menu.blog.expandable" ).removeClass( "contrasting" );
  // document.querySelector('.mega-menu.blog.expandable').classList.toggle('contrasting');
  $( "acc" ).removeClass( "contrasting" );
  // document.getElementById('acc').classList.toggle('contrasting');
  $( ".home-intro" ).removeClass( "contrasting" );
  // document.querySelector('.home-intro').classList.toggle('contrasting');
  $( ".home-about" ).removeClass( "contrasting" );
  // document.querySelector('.home-about').classList.toggle('contrasting');
  $( ".home-more-stuff" ).removeClass( "contrasting" );
  // document.querySelector('.home-more-stuff').classList.toggle('contrasting');
  // $( ".card" ).removeClass( "contrasting" );
  // // document.querySelector('.card').classList.toggle('contrasting');
  // $( ".card2" ).removeClass( "contrasting" );
  // // document.querySelector('.card2').classList.toggle('contrasting');
  // $( ".literatura" ).removeClass( "contrasting" );
  // // document.querySelector('.literatura').classList.toggle('contrasting');
  $( ".swiper-container.swiper-container-coverflow.swiper-container-3d.swiper-container-initialized.swiper-container-horizontal" ).removeClass( "contrasting" );
  // document.querySelector('.swiper-container.swiper-container-coverflow.swiper-container-3d.swiper-container-initialized.swiper-container-horizontal').classList.toggle('contrasting');
  setCookie('darkMode',"0",7);
}
document.getElementById('kontrast').addEventListener('click', function () {
  if( $( "body" ).hasClass( "contrasting" )) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
document.addEventListener("DOMContentLoaded", function(){
var darkMode = getCookie('darkMode');
if (darkMode == "1") {
    // use darkmode
    enableDarkMode();
} else {
    // no darkmode
    disableDarkMode();
}
});
// link po dwukrotnym kliknieńciu myszka
jQuery(function($) {
  $('#golink').click(function() {
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  }).keydown(function(event) {
      switch (event.which) {
          case 13: // Enter
          case 32: // Space
              window.location = this.href;
              return false;
      }
  });
});
