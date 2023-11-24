import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const commentsSlider = () => {
    try {
        const swiper = new Swiper('.comments__carousel', {
            loop: false,
            grabCursor: true,
            spaceBetween: 20,
            modules: [Navigation],
            breakpoints: {
                1400: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3.5,
                },
                660: {
                    slidesPerView: 2.5,
                },
                576: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1.6,
                },
                375: {
                    slidesPerView: 1.2,
                },

            },

            // Navigation arrows
            navigation: {
                nextEl: '.carousel-comments__next',
                prevEl: '.carousel-comments__prev',
            },
        });
    } catch (error) {
        console.log(error)
    }
}