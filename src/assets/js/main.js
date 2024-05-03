import { burgerInteraction } from "./burger.js";
import { paymentSlider } from "./paymentSlider.js";
import { teachersSlider } from "./teachersSlider.js";
import { commentsSlider } from "./commentsSlider.js";
import { accordion } from "./accordion.js";
import { popup } from "./popup.js";
import { elementAnimation } from "./elementAnimation.js";
import { headerAfterScroll } from "./headerAfterScroll.js";
import { readMore } from "./readMore.js";
import { showMap } from "./showMap.js";


window.addEventListener('DOMContentLoaded', () => {
    burgerInteraction();
    paymentSlider();
    teachersSlider();
    commentsSlider();
    accordion();
    popup();
    elementAnimation();
    headerAfterScroll();
    readMore();
    showMap();
})
