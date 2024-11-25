
const cardsContainer = document.getElementById('cards-container');
const currentPageSpan = document.getElementById('current-page');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let currentPage = 1;
const itemsPerPage = 2; // Количество карточек на странице

// Функция для загрузки данных с сервера MockAPI
async function loadData(page) {
    const response = await fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places?page=${page}&limit=${itemsPerPage}`);
    const data = await response.json();
    return data;
}

// Функция для отображения карточек
function displayCards(data) {
    cardsContainer.innerHTML = ''; // Очищаем контейнер
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

// Функция для обновления пагинации
function updatePagination(page) {
    currentPageSpan.textContent = page;
    prevPageButton.disabled = page === 1;
    // Здесь можно добавить проверку на последнюю страницу, если известно общее количество элементов
}

// Загрузка данных при загрузке страницы
loadData(currentPage).then(data => {
    displayCards(data);
    updatePagination(currentPage);
});

// Обработчик для кнопки "Previous"
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadData(currentPage).then(data => {
            displayCards(data);
            updatePagination(currentPage);
        });
    }
});

// Обработчик для кнопки "Next"
nextPageButton.addEventListener('click', () => {
    currentPage++;
    loadData(currentPage).then(data => {
        displayCards(data);
        updatePagination(currentPage);
    });
});


// Фильтр
function displayCards(data) {
    cardsContainer.innerHTML = ''; 
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            
        `;
        cardsContainer.appendChild(card);
    });
}   