import { burgerInteraction } from "./burger.js";
import { paymentSlider } from "./paymentSlider.js";
import { teachersSlider } from "./teachersSlider.js";
import { commentsSlider } from "./commentsSlider.js";
import { accordion } from "./accordion.js";
import { popup } from "./popup.js";
import { titleAnimation } from "./titleAnimation.js";
import { headerAfterScroll } from "./headerAfterScroll.js";
import { readMore } from "./readMore.js";


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
