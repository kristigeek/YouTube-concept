const channelSlider = new Swiper('#channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerViewaa: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-slider-button-next',
    prevEl: '.channel-slider-button-prev',
  },
});

const recommendedSlider = new Swiper('#recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 80,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerViewaa: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-slider-button-next',
    prevEl: '.recommended-slider-button-prev',
  },
});

const foodSlider = new Swiper('#food-slider', {
  // Optional parameters
  loop: true,
slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerViewaa: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.food-slider-button-next',
    prevEl: '.food-slider-button-prev',
  },
});