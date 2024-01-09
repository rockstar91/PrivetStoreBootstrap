import { createApp } from 'vue'
import App from './PrivetStoreApp.vue'

// Custom progress bar
import ProgressRing from './ProgressRing.js'
window.customElements.define('progress-ring', ProgressRing);

// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

createApp(App).mount('#app')

// Create an example popover
//document.querySelectorAll('[data-bs-toggle="popover"]')
//  .forEach(popover => {
//    new Popover(popover)
//  })


  
// import Swiper JS
import Swiper from 'swiper'; //Pagination, Pagination
import { Navigation, Scrollbar, Pagination, Grid, Thumbs, Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/controller';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/thumbs';

const swiperModules = [Scrollbar, Pagination, Navigation, Grid, Thumbs, Autoplay];


// Index Banner Slider (Navigation by Thumbnails)
const swiperBannerSliderThumbs = new Swiper(".banner-slider-thumbs", {
    spaceBetween: 10,
    autoScrollOffset: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 8,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 12,
        spaceBetween: 20
      }
    },
    modules: swiperModules,
});

// Index Banner Slider (main)
const swiperBannerSliderSlides = new Swiper(".banner-slider-slides", {   
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    spaceBetween: 10,
    watchSlidesProgress: true,
    thumbs: {
      swiper: swiperBannerSliderThumbs,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'+  "</span>";
      },
    },
    modules: swiperModules,
});


swiperBannerSliderSlides.on('autoplay', function (s) {
  // Удаляем ProgressRing у неактивных элементов 
  let elements = document.querySelectorAll('.banner-slider-thumbs .swiper-slide:not(.swiper-slide-thumb-active) > progress-ring');

  for (let elem of elements) {
    elem.remove();
    console.log(elem); // "тест", "пройден"
  }
});

swiperBannerSliderSlides.on('autoplayTimeLeft', function (s, time, progress) {
  // Процент прогресса
  //let percent = Math.ceil((1-progress) * 100); // 0 - 100
  let percent = Math.ceil((progress) * 100); // 100 - 0

  const activeElm = document.querySelector('.banner-slider-thumbs .swiper-slide-thumb-active');
  const progressElm = activeElm.querySelector('progress-ring')

  // Добавляем ProgressRing, только если его еще нет 
  if(progressElm === null) {
    const progressRing = new ProgressRing();
    progressRing.setAttribute("color", '#3D03B7');
    progressRing.setAttribute('progress', percent);
    activeElm.appendChild(progressRing)
  }
  else {
    progressElm.setAttribute('progress', percent);
  }
});


// Products Grid Slider
const swiperPopularProducts = new Swiper(".swiper-popular-products", {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    watchOverflow: false,
    //grabCursor: true,
    //centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    grid: {            //added
      rows: 2,         //added
    },  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-popular-products-next',
      prevEl: '.swiper-popular-products-prev',
    },
    modules: swiperModules,
});