function openModal() {
    // Показываем модальное окно
    const modal = document.getElementById('mapModal');
    modal.style.display = 'flex';

    // Инициализация карты
    ymaps.ready(function () {
        const myMap = new ymaps.Map("map", {
            center: [58.144710, 52.673610], // Центр карты между двумя точками
            zoom: 14
        });

        // Добавляем маршрут
        const multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                [58.144710, 52.693818], // Улица Карла Маркса, 1
                [58.143518, 52.653610]  // Парк имени Горького
            ],
            params: {
                routingMode: 'auto' // Автомобильный маршрут
            }
        }, {
            boundsAutoApply: true // Автоматическая подстройка карты
        });

        // Добавляем маршрут на карту
        myMap.geoObjects.add(multiRoute);
    });
}

function closeModal() {
    // Закрываем модальное окно
    const modal = document.getElementById('mapModal');
    modal.style.display = 'none';

    // Очищаем содержимое карты, чтобы избежать повторной инициализации
    document.getElementById('map').innerHTML = '';
}
