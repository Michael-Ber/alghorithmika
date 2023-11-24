export const accordion = () => {
    try {
        const items = document.querySelectorAll('.accordion-questions__item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.querySelector('.accordion-questions__answer');
                item.classList.toggle('accordion-questions__item_active');

                if(item.classList.contains('accordion-questions__item_active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }else {
                    content.style.maxHeight = 0 + 'px'
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}