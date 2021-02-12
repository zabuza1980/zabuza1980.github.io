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
// pomysł na kolejne sekcje z ruchomymi napisami
// let bg1 = document.getElementById("bg1");
// let text1 = document.getElementById("text1");

// window.addEventListener('scroll', function(){
//     var value1 = window.scrollY;

//     bg1.style.top = (value1-1450) * 0.5 + 'px';
//     text1.style.top = (value1-1250) * 0.7 + 'px';
// })
// let bg2 = document.getElementById("bg2");
// let text2 = document.getElementById("text2");

// window.addEventListener('scroll', function(){
//     var value1 = window.scrollY;

//     bg2.style.top = (value1-1950) * 0.5 + 'px';
//     text2.style.top = (value1-1850) * 0.7 + 'px';
// })
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
  $( ".tile-container.row" ).addClass( "contrasting" );
  $( ".tile-header" ).addClass( "contrasting" );
  $( ".main-section-header" ).addClass( "contrasting" );
  $( ".tile-circle-content-wrapper" ).addClass( "contrasting" );
  $( "#anno" ).addClass( "contrasting" );
  $( "#fb" ).addClass( "contrasting" );
  $( "#polona" ).addClass( "contrasting" );
  $( ".p-tile-l" ).addClass( "contrasting" );
  $( "#polona-blog" ).addClass( "contrasting" );
  $( "footer" ).addClass( "contrasting" );
  $( ".pracownicy" ).addClass( "contrasting" );
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
  $( ".tile-container.row" ).removeClass( "contrasting" );
  $( ".tile-header" ).removeClass( "contrasting" );
  $( ".main-section-header" ).removeClass( "contrasting" );
  $( ".tile-circle-content-wrapper" ).removeClass( "contrasting" );
  $( "#anno" ).removeClass( "contrasting" );
  $( "#fb" ).removeClass( "contrasting" );
  $( "#polona" ).removeClass( "contrasting" );
  $( ".p-tile-l" ).removeClass( "contrasting" );
  $( "#polona-blog" ).removeClass( "contrasting" );
  $( "footer" ).removeClass( "contrasting" );
  $( ".pracownicy" ).removeClass( "contrasting" );
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
     $( "#test1" ).toggleClass( "teraz" );
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  }).keydown(function(event) {
    switch (event.which) {
        case 32: // Space
        $( "#test1" ).toggleClass( "teraz" );   
            return false;
    }
}) .keydown(function(event) {
  switch (event.which) {
      case 13: // Enter
          window.location = this.href;
          return false;
  }
});
});
jQuery(function($) {
  $('#golink2').click(function() {
    $( "#test2" ).toggleClass( "teraz" );
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  }).keydown(function(event) {
    switch (event.which) {
        case 32: // Space
        $( "#test2" ).toggleClass( "teraz" );   
            return false;
    }
}) .keydown(function(event) {
  switch (event.which) {
      case 13: // Enter
          window.location = this.href;
          return false;
  }
});
});
jQuery(function($) {
  $('#golink3').click(function() {
    $( "#test3" ).toggleClass( "teraz" );
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  }).keydown(function(event) {
    switch (event.which) {
        case 32: // Space
        $( "#test3" ).toggleClass( "teraz" );   
            return false;
    }
}) .keydown(function(event) {
  switch (event.which) {
      case 13: // Enter
          window.location = this.href;
          return false;
  }
});
});
jQuery(function($) {
  $('#golink4').click(function() {
    $( "#test4" ).toggleClass( "teraz" );
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  }).keydown(function(event) {
      switch (event.which) {
          case 32: // Space
          $( "#test4" ).toggleClass( "teraz" );   
              return false;
      }
  }) .keydown(function(event) {
    switch (event.which) {
        case 13: // Enter
            window.location = this.href;
            return false;
    }
});
});

// galeria bootstrap
baguetteBox.run('.compact-gallery', { animation: 'slideIn'});

// slajderuniwersalny

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const pause=document.querySelector(".pause");
const play=document.querySelector(".play");
const indicator=document.querySelector(".indicator");
let index=0;


  prev.addEventListener("click",function(){
      prevSlide();
      updateCircleIndicator(); 
 
  })
  prev.addEventListener("keydown",function(){
    if (event.keyCode === 13)
   prevSlide();
   updateCircleIndicator(); 

  })

  next.addEventListener("click",function(){
     nextSlide(); 
     updateCircleIndicator();
    
     
  })
  next.addEventListener("keydown",function(){
    if (event.keyCode === 13)
   nextSlide(); 
   updateCircleIndicator();
  
   
  })
  play.addEventListener("click",function(){
     playSlide();
     updateCircleIndicator(); 
     resetTimer();      
  })
  play.addEventListener("keydown",function(){
    if (event.keyCode === 13)
   playSlide();
   updateCircleIndicator(); 
   resetTimer();
  })
  pause.addEventListener("click",function(){
   pauseSlide();
   updateCircleIndicator(); 
   
  })
  pause.addEventListener("keydown",function(){
    if (event.keyCode === 13) 
   pauseSlide();
   updateCircleIndicator(); 

  })

  // create circle indicators
   function circleIndicator(){
       for(let i=0; i< slides.length; i++){
         const div=document.createElement("div");
               div.innerHTML=i+1;
               div.setAttribute("onclick","indicateSlide(this)")
               div.id=i;
               if(i==0){
                 div.className="active";
               }
              indicator.appendChild(div);
       }
   }
   circleIndicator();

   function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicator();
        
   }
    
   function updateCircleIndicator(){
     for(let i=0; i<indicator.children.length; i++){
       indicator.children[i].classList.remove("active");
     }
     indicator.children[index].classList.add("active");
   }

  function prevSlide(){
     if(index==0){
       index=slides.length-1;
     }
     else{
       index--;
     }
     changeSlide();
  }

  function nextSlide(){
     if(index==slides.length-1){
       index=0;
     }
     else{
       index++;
     }
     changeSlide();
  }
  function pauseSlide(){
   clearInterval(timer);
   }
  function playSlide(){
   timer=setInterval(autoPlay,2000);   
    }

   function nextSlide(){
     if(index==slides.length-1){
         index=0;
     }
     else{
         index++;
     }
     changeSlide();
   }

  function changeSlide(){
           for(let i=0; i<slides.length; i++){
              slides[i].classList.remove("active");
           }

      slides[index].classList.add("active");
  }

  function resetTimer(){
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      timer=setInterval(autoPlay,8000);
  }

 
 function autoPlay(){
     nextSlide();
     updateCircleIndicator();
 }

 let timer=setInterval(autoPlay,8000);



