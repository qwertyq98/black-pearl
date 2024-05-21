import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination.scss'

export const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  speed: 700,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 7,
      slidesPerGroup: 1,
    },
    1000: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
})

export const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  speed: 700,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 7,
      slidesPerGroup: 1,
    },
    1000: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
})

export const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  speed: 700,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 7,
      slidesPerGroup: 1,
    },
    1000: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
})
