import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const teachersSlider = () => {
    try {
        const swiper = new Swiper('.teachers__carousel', {
            loop: true,
            grabCursor: true,
            spaceBetween: 30,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.carousel-teachers__pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 1,
                },

            },

            // Navigation arrows
            navigation: {
                nextEl: '.carousel-teachers__next',
                prevEl: '.carousel-teachers__prev',
            },
        });
    } catch (error) {
        console.log(error)
    }
}