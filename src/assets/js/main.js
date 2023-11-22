const a = document.querySelector('.wrapper');
const body = document.querySelector('body');
console.log(a)

window.addEventListener('scroll', () => {
    console.log(a.getBoundingClientRect().top)
    if(a.getBoundingClientRect().top <= 0) {
        body.style.overflow = 'hidden';
        a.addEventListener('scroll', () => {
            console.log('scroll')
        })
    }else {
        body.style.overflow = 'auto';
    }
})