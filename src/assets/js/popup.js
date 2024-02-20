export const popup = () => {
    try {
        const body = document.querySelector('body');
        const openBtns = document.querySelectorAll('.btn[data-popup]');
        const popup = document.querySelector('.popup');
        const close = popup.querySelector('.popup__close');

        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!popup.classList.contains('popup_active')) {
                    openPopup()
                }
            })
        })
        close.addEventListener('click', () => {
            closePopup()
        })


        //not working properly on mobiles when focusing on input
        // window.addEventListener('resize', () => {
        //     closePopup()
        // })

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup_active')) {
                closePopup();
            }
        })

        function openPopup() {
            popup.classList.add('popup_active');
            body.style.overflow = 'hidden';
            body.style.marginRight = removeTwitching() + 'px';

        }
        function closePopup() {
            popup.classList.remove('popup_active');
            body.style.overflow = 'auto';
            body.style.marginRight = 'unset';
        }
        function removeTwitching() {
            let div = document.createElement('div');
            div.style.width = '50px;';
            div.style.height = '50px;';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            body.appendChild(div);
            let offset = div.offsetWidth - div.clientWidth;
            div.remove();
            return offset;
        }
    } catch (error) {
        console.log(error)
    }
}