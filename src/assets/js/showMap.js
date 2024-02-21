export const showMap = () => {
    try {
        const mapImg = document.querySelector('#map');
        const body = document.querySelector('body');

        const map = document.createElement('div');
        map.classList.add('modal-map');
        const mapScript = document.createElement('div');
        mapScript.classList.add('modal-map__script');
        mapScript.innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa10fbb640e6ba5fd618bbc52b24833beac883e0e5036130f525f73a31502bd09&amp;source=constructor" width="748" height="400" frameborder="0"></iframe>`;

        mapImg.addEventListener('click', () => {
            map.appendChild(mapScript);
            body.appendChild(map);
        })
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-map')) {
                body.removeChild(map);
            }
        })
    } catch (error) {
        console.log(error)
    }
}