import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination.scss'

export default new Swiper('.swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
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
