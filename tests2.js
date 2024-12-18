document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
    // paginate(attraction);    
    const attractionsContainer = document.getElementById('attractions');
    const categoryFilter = document.getElementById('category');
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.getElementById('cards-container');
    const currentPageSpan = document.getElementById('current-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');






let currentPage = 1;
const itemsPerPage = 3;


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

function displayAttractions(data) {
    attractionsContainer.innerHTML = '';
    data.forEach(attraction => {
        const attractionElementPageCatalog = document.createElement('div');
        attractionElementPageCatalog.className = 'attractioN';
        attractionElementPageCatalog.textContent = attraction.name;
        attractionElementPageCatalog.innerHTML = `
            <div class="search-box">
                <button class="btn-search"><i class="fas fa-search"></i></button>
            </div>
            <ul class="main__all-sections">
                <li class="main__card">
                    <div class="main__container-section">
                        <img onclick="download" class='containerId__img' src='${attraction.imageUrl}'>
                        <a class="main__search" href="#">${attraction.name}</a>
                    </div>
                </li>
            </ul>
        `;
    

    attractionElementPageCatalog.addEventListener('click', () => {
        const url = new URL(window.location.href);
        url.searchParams.set('id', attraction.id);
        window.history.pushState({}, '', url);
        showDetails(attraction.id);
    });
    attractionsContainer.appendChild(attractionElementPageCatalog);
});

categoryFilter.addEventListener('change', function() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        const filteredData = attractionsData.filter(attraction => attraction.category === selectedCategory);
        displayAttractions(filteredData);
    } else {
        fetchAttractions(currentPage);
    }
});

searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        const filteredData = attractionsData.filter(attraction => attraction.name.toLowerCase().includes(query.toLowerCase()));
        displayAttractions(filteredData);
    } else {
        fetchAttractions(currentPage);
    }
});

function updatePagination(page) {
    currentPageSpan.textContent = page;
    prevPageButton.disabled = page === 1;
}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchAttractions(currentPage).then(() => {
            updatePagination(currentPage);
        });
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    fetchAttractions(currentPage).then(() => {
        updatePagination(currentPage);
    });
});

    }});
