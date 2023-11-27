import { burgerInteraction } from "./burger";
import { paymentSlider } from "./paymentSlider";
import { teachersSlider } from "./teachersSlider";
import { commentsSlider } from "./commentsSlider";
import { accordion } from "./accordion";
import { popup } from "./popup";
import { titleAnimation } from "./titleAnimation";
import { headerAfterScroll } from "./headerAfterScroll";
import { readMore } from "./readMore";


window.addEventListener('DOMContentLoaded', () => {
    burgerInteraction();
    paymentSlider();
    teachersSlider();
    commentsSlider();
    accordion();
    popup();
    titleAnimation();
    headerAfterScroll();
    readMore();
})