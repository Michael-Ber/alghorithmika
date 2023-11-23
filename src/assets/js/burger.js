export const burgerInteraction = () => {
    try {
        const burgerBtn = document.querySelector('.header-burger__btn');
        const menu = document.querySelector('.header-burger__menu');

        burgerBtn.addEventListener('click', () => {
            menu.classList.toggle('header-burger__menu_active');
            burgerBtn.classList.toggle('header-burger__btn_active')
        })
        window.addEventListener('resize', () => {
            menu.classList.remove('header-burger__menu_active');
            burgerBtn.classList.remove('header-burger__btn_active');
        })
    } catch (error) {
        console.log(error)
    }
}