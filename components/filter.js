
document.addEventListener("DOMContentLoaded", function() {
  const apiUrl1 = './https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
  const attractionsContainer1 = document.getElementById('attractions1');
  const categoryFilter = document.getElementById('category');

  let attractionsData9 = [];


  function displayAttractions1(data) {
      attractionsContainer1.innerHTML = '';
      data.forEach(attraction => {
          const card12 = document.createElement('div');
          card12.className = 'card';
          card12.innerHTML = `
              <a class="filter-title" href="http://127.0.0.1:5500/index.html?page=catalog&id=${attraction.id}"</a>   <h3>${attraction.name}</h3>
              <p>${attraction.description}</p>
          `;
          attractionsContainer1.appendChild(card12);
      });
  }

  // Получение данных с MockAPI
  fetch(apiUrl1)
      .then(response => response.json())
      .then(data => {
          attractionsData9 = data;
          displayAttractions1(attractionsData9);
      })
      .catch(error => console.error('Ошибка при получении данных:', error));

  // Обработка события изменения фильтра
  categoryFilter.addEventListener('change', function() {
      const selectedCategory = categoryFilter.value;
      if (selectedCategory) {
          const filteredData = attractionsData9.filter(attraction => attraction.category === selectedCategory);
          displayAttractions1(filteredData);
      } else {
          displayAttractions1(attractionsData9);
      }
  });
});