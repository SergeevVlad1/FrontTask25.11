document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
    const attractionsContainer = document.getElementById('attractions1');
    const categoryFilter = document.getElementById('category');
    const categorySearch = document.getElementById('categorySearch');

    let attractionsData = [];

    async function fetchAttractions() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            attractionsData = await response.json();
            displayAttractions(attractionsData);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }

    function displayAttractions(data) {
        attractionsContainer.innerHTML = '';
        data.forEach(attraction => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <a class="filter-title" href="http://127.0.0.1:5500/index.html?page=catalog&id=${attraction.id}">
                    <h3>${attraction.name}</h3>
                </a>
                <p>${attraction.description}</p>
            `;
            attractionsContainer.appendChild(card);
        });
    }

    
    

    categoryFilter.addEventListener('change', function() {
        const selectedCategory = categoryFilter.value;
        if (selectedCategory) { 
            const filteredData = attractionsData.filter(attraction => attraction.category === selectedCategory);
            displayAttractions(filteredData);
        } else {
            displayAttractions(attractionsData);
        }
    });

    categorySearch.addEventListener('change', function() {
        const selectedCategory = categorySearch.value;
        if (selectedCategory) {
            const filteredData = attractionsData.filter(attraction => attraction.category === selectedCategory);    
            displayAttractions(filteredData)
        } else {
            displayAttractions(attractionsData);
        }
    });

    fetchAttractions();
});









