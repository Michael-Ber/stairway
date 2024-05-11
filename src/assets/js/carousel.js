import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const carousel = () => {
    try {
        const swiper = new Swiper('.examples-swiper', {
            loop: true,
            spaceBetween: 17,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },

            breakpoints: {
                992: {
                    slidesPerView: 3
                },
                576: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1
                }
            },

            pagination: {
                el: '.examples-swiper__pagination',
                bulletClass: 'examples-swiper__pagination-bullet',
                bulletActiveClass: 'examples-swiper__pagination-bullet--active',
                clickable: true
            },  
            
            
              // Navigation arrows
            navigation: {
                nextEl: '.examples-swiper__next',
                prevEl: '.examples-swiper__prev',
            },
            modules: [Navigation, Pagination, Autoplay]
        });
    } catch (error) {
        console.log(error)
    }
}