const cardsContainer = document.getElementById('cards-container');
const currentPageSpan = document.getElementById('current-page');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let currentPage = 1;
const itemsPerPage = 3; 

function loadData(page) {
    return fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places?page=${page}&limit=${itemsPerPage}`)
        .then(response => response.json());
}

function displayCards(data) {
    cardsContainer.innerHTML = ''; 
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        
            <h3>${item.name}</h3>
        `;
        cardsContainer.appendChild(card);
    });
}

function updatePagination(page) {
    currentPageSpan.textContent = page;
    prevPageButton.disabled = page === 1;
}

loadData(currentPage).then(data => {
    displayCards(data);
    updatePagination(currentPage);
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadData(currentPage).then(data => {
            displayCards(data);
            updatePagination(currentPage);
        });
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    loadData(currentPage).then(data => {
        displayCards(data);
        updatePagination(currentPage);
    });
});
