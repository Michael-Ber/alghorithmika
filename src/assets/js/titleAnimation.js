export const titleAnimation = () => {
    try {
        const blocksToAnimate = document.querySelectorAll('.block-anim');
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        window.addEventListener('scroll', () => {
            animateBlock()
        })
        animateBlock()
        function animateBlock() {
            try {
                blocksToAnimate.forEach(block => {
                    if (block.getBoundingClientRect().top <= window.innerHeight) {
                        block.classList.add('block-anim_active')
                    }
                    if (scrollY - block.getBoundingClientRect().top > -100) {
                        block.classList.add('block-anim_active')
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
}