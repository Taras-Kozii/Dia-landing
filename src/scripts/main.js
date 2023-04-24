'use strict';

const form = document.getElementById('form-message');

form.addEventListener(
  'submit', function(event) {
    event.preventDefault();
    form.reset();
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const swiperBody = new Swiper('.swiper__body', {
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },

  loop: true,
  speed: 1500,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

});
