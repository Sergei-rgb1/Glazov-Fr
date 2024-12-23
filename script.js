const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Удаляем active со всех ссылок
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Добавляем active только на выбранную ссылку
        this.classList.add("active");
    });
});



ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [56.841, 53.2], // Координаты центра карты (Глазов)
        zoom: 12,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    });

    // Добавление метки на карту
    const placemark = new ymaps.Placemark(
        [56.841, 53.2],
        {
            hintContent: 'Привет, Глазов!',
            balloonContent: 'Точка встречи'
        },
        {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }
    );

    map.geoObjects.add(placemark);
}
