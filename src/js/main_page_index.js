// import 'swiper/swiper-bundle.min.css'
import '../style/main_page_style.css'
import Swiper from 'swiper'
import { fallMenu } from './main_page_fallMenu.js'
import { splitWords } from './main_page_animationLetters.js'
import { feedback } from './main_page_feedback.js'
import { swiper } from './main_page_swiperSettings.js'

import './swiper-bundle.min.js'
import { preloader } from './main_page_preloader.js'


fallMenu()
splitWords()
feedback()
preloader()
swiper
