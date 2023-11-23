import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const paymentSlider = () => {
    try {
        const swiper = new Swiper('.payment__carousel', {
            loop: true,
            grabCursor: true,
            wrapperClass: 'carousel-payment__wrapper',
            slideClass: 'carousel-payment__slide',
            slideActiveClass: 'carousel-payment__slide_active',
            modules: [Navigation, Pagination],
            pagination: {
                el: '.carousel-payment__pagination',
                type: 'bullets'
              },
            
              // Navigation arrows
              navigation: {
                nextEl: '.carousel-payment__next',
                prevEl: '.carousel-payment__prev',
              },
        });
    } catch (error) {
        console.log(error)
    }
}