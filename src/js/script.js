import $ from 'jquery';
import Swiper from 'swiper';

 // Import Swiper styles



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initializeScripts() {
  // jQuery event handlers
  

  // Swiper initialization
  new Swiper(".testimonialSwiper", {
    navigation: {
      nextEl: ".test-swiper-button-next",
      prevEl: ".test-swiper-button-prev",
    },
  });

  new Swiper(".certificatesSlider", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cert-swiper-button-next",
      prevEl: ".cert-swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
}
