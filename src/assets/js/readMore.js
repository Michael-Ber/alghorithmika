export const readMore = () => {
    try {
        const linksMore = document.querySelectorAll('.readmore');

        linksMore.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                link.nextElementSibling.style.display = 'inline';
                link.previousElementSibling.style.display = 'none'
                link.style.display = 'none';
            })
        })

    } catch (error) {
        console.log(error)
    }
}