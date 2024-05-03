export const accordion = () => {
    try {
        const items = document.querySelectorAll('.accordion-questions__item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                const control = item.querySelector('.accordion-questions__question')
                const content = item.querySelector('.accordion-questions__answer');
                item.classList.toggle('accordion-questions__item_active');

                if(item.classList.contains('accordion-questions__item_active')) {
                    content.style.maxHeight = content.scrollHeight + 25 + 'px';
                    content.setAttribute('aria-hidden', false);
                    control.setAttribute('aria-expanded', true);

                }else {
                    content.style.maxHeight = 0 + 'px';
                    content.setAttribute('aria-hidden', true);
                    control.setAttribute('aria-expanded', false);
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}