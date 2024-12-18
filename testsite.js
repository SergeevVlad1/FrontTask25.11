// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
//     const attractionsContainer = document.getElementById('attractions');
//     const categoryFilter = document.getElementById('category');
//     const searchInput = document.getElementById('searchInput');
//     const currentPageSpan = document.getElementById('current-page');
//     const prevPageButton = document.getElementById('prev-page');
//     const nextPageButton = document.getElementById('next-page');
    

//     let currentPage = 1;
//     const itemsPerPage = 8; // Уменьшено для демонстрации
//     let allAttractionsData = []; // Хранит все данные
//     let filteredData = []; // Хранит отфильтрованные данные

//     // Функция для загрузки данных
//     async function fetchAttractions() {
//         try {
//             const response = await fetch(`${apiUrl}?page=1&limit=100`); // Загружаем все данные
//             if (!response.ok) {
//                 throw new Error('Ошибка при получении данных');
//             }
//             allAttractionsData = await response.json();
//             filteredData = allAttractionsData; // Изначально отфильтрованные данные равны всем данным
//             updateDisplay();
//         } catch (error) {
//             console.error('Ошибка при получении данных:', error);
//         }
//     }

//     // Функция для отображения данных
//     function displayAttractions(data) {
//         attractionsContainer.innerHTML = '';
//         data.forEach(attraction => {
//             const attractionElement = document.createElement('div');
//             attractionElement.className = 'attractioN';
//             attractionElement.innerHTML = `
//                 <div class="search-box">
//                     <button class="btn-search"><i class="fas fa-search"></i></button>
//                 </div>
//                 <ul class="main__all-sections">
//                     <li class="main__card">
//                         <div class="main__container-section">
//                             <img onclick="download" class='containerId__img' src='${attraction.imageUrl}'>
//                             <a class="main__search" href="#">${attraction.name}</a>
//                         </div>
//                     </li>
//                 </ul>
//             `;

//             attractionElement.addEventListener('click', () => {
//                 const url = new URL(window.location.href);
//                 url.searchParams.set('id', attraction.id);
//                 window.history.pushState({}, '', url);
//                 showDetails(attraction.id);
//             });
//             attractionsContainer.appendChild(attractionElement);
//         });
//     }

//     // Функция для обновления отображения данных
//     function updateDisplay() {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         const paginatedData = filteredData.slice(startIndex, endIndex);
//         displayAttractions(paginatedData);
//         updatePagination();
//     }

//     // Функция для обновления пагинации
//     function updatePagination() {
//         currentPageSpan.textContent = currentPage;
//         prevPageButton.disabled = currentPage === 1;
//         nextPageButton.disabled = currentPage * itemsPerPage >= filteredData.length;
//     }

//     // Обработчик изменения фильтра категории
//     document.addEventListener("DOMContentLoaded", function() {
        
//         let attractionsData = [];
    
//         async function fetchAttractions() {
//             try {
//                 const response = await fetch(apiUrl);
//                 if (!response.ok) {
//                     throw new Error('Ошибка при получении данных');
//                 }
//                 attractionsData = await response.json();
//                 displayAttractions(attractionsData);
//             } catch (error) {
//                 console.error('Ошибка при получении данных:', error);
//             }
//         }
    
//         function displayAttractions(data) {
//             attractionsContainer.innerHTML = '';
//             data.forEach(attraction => {
//                 const card = document.createElement('div');
//                 card.className = 'card';
//                 card.innerHTML = `
//                     <a class="filter-title" href="http://127.0.0.1:5500/index.html?page=catalog&id=${attraction.id}">
//                         <h3>${attraction.name}</h3>
//                     </a>
//                     <p>${attraction.description}</p>
//                 `;
//                 attractionsContainer.appendChild(card);
//             });
//         }
    
//         categoryFilter.addEventListener('change', function() {
//             const selectedCategory = categoryFilter.value;
//             if (selectedCategory) {
//                 const filteredData = attractionsData.filter(attraction => attraction.category === selectedCategory);
//                 displayAttractions(filteredData);
//             } else {
//                 displayAttractions(attractionsData);
//             }
//         });
    
//         // Загрузка данных при загрузке страницы
//         fetchAttractions();
//     });
    

//     // Обработчик изменения поискового запроса
//     searchInput.addEventListener('input', function () {
//         const query = searchInput.value.trim().toLowerCase();
//         if (query) {
//             filteredData = allAttractionsData.filter(attraction => attraction.name.toLowerCase().includes(query));
//         } else {
//             filteredData = allAttractionsData; // Если запрос пустой, показываем все данные
//         }
//         currentPage = 1; // Сбрасываем страницу на первую
//         updateDisplay();
//     });

//     // Обработчик нажатия на кнопку "Предыдущая страница"
//     prevPageButton.addEventListener('click', () => {
//         if (currentPage > 1) {
//             currentPage--;
//             updateDisplay();
//         }
//     });

//     // Обработчик нажатия на кнопку "Следующая страница"
//     nextPageButton.addEventListener('click', () => {
//         if (currentPage * itemsPerPage < filteredData.length) {
//             currentPage++;
//             updateDisplay();
//         }
//     });

    // Функция для отображения деталей достопримечательности
    function showDetails(attractionId) {
        fetch(`${apiUrl}/${attractionId}`)
            .then(response => response.json())
            .then(attraction => {
                const detailsContainer = document.getElementById('attractions');
                detailsContainer.innerHTML = `
                    <div id="loader" class="details"></div>
                    <div class="containerId">
                        <div class='containerId__title'> <h1>${attraction.name}</h1></div>
                        <img class='containerId__img' src='${attraction.imageUrl}'>
                        <h2 class='containerId__text'>${attraction.description}</h2>
                        <div class='containerId__map'> ${attraction.location}</div>
                        <button id='comment'>Оставить отзыв</button>
                        <input id='inputComment'/>
                        <div id="output"></div>
                        <div class='modal__title__img'>
                            <div id='myModal' class='modal'></div>
                        </div>
                    </div>
                    <a href="./index.html?page=catalog" class="main__button">Вернуться</a>
                `;

                const commentCard = document.getElementById('comment');
                commentCard.addEventListener('click', () => {
                    // Добавьте логику для обработки комментариев
                });

                const userInput = document.getElementById('inputComment');
                const output = document.getElementById('output');
                userInput.addEventListener('input', function () {
                    output.textContent = userInput.value;
                });
            })
            .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
    }

    // Загрузка данных при загрузке страницы
    fetchAttractions();

    // Проверка наличия параметра id в URL
    const attractionId = new URLSearchParams(window.location.search).get('id');
    if (attractionId) {
        showDetails(attractionId);
    }







// 3333333333333333333333333333333





const CatalogPage = () => {
    // mainPage.innerHTML = ''  
    fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
    
    const attractionId = new URLSearchParams(window.location.search).get('id');
    const page12 = attractionId === null ? 

    
    `    
    ${ImportLinksAttractions()}
    
    <section class="load">
        <div class='demoPreloader' id='demoPreloader'>
    <img src='./assets/img/728.gif' alt='preloader'>
    </div>
    </section>

    <header class="header">
        <div class="header__logo">
            <a href="./index.html"><img src="./assets/img/black.logo.png" alt="img"></a>
        </div>

        <div class="container">
            <div class="header__icon">
                <span></span>
                <span></span>
                <span></span>   
            </div>

        <nav class="header__menu-body">
        <div class="filter">
        <label for="category">Категория:</label>
        <select id="category">
            <option value="">Все</option>
            <option value="category1">Храмы и музеи</option>
            <option value="category2">Парки</option>
            <option value="category3">Другое</option>
        </select>
            <ul id="itemList" class="header__menu-list">
            
                <li class="header__menu-link">
                    <a href="./index.html">На главную</a>
                </li>
                <li class="header__menu-link">
                    <a href="./index.html?page=contacts">Контакты</a>
                </li>
                <li class="header__menu-link1">
                    <a href="#"><img src="./assets/img/catalog.lupa.png" alt="Img"></a>
                </li>
            </ul>

        <nav class="menu__body">
            <li class="header__menu-link2">
                <a href="#"><img src="./assets/img/catalog.filter2.png" alt="Img"></a>        
                    <ul class="menu__list">
                        <li class="menu__item"><a href="#" class="menu__link">уауауа</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">акак</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">как</a></li>
                    </ul>          
                </li>
            </ul>
        </nav>
    </nav>             
</header>

 



<section class="filter">
    <div class="filter__container">
        <div class="filter__main">
            <button class="filter__btn" onclick="filterFunction()"><img src="./assets/img/catalog.filter2.png" alt="Img"></button>
                <div class="filter__nav-content" id="filter__cont">
                    <select id="mySelect" class="filter-select" onchange="filterItems()">
                        <option id="all" value="all">Все категории</option>
                        <option id="Bla" value="category1">Парки</option>
                        <option value="category2">Категория 2</option>
                        <option value="category3">Категория 3</option>
                    </select>
                </div>  
        </section>

    <div class='attractions' id="attractions"></div>
    <div class='attractionsBtn' id="attractionsBtn"></div>
    <div id="map"></div>

    <div id='loader'>
    </div>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close-modal-btn" onclick="closeModal()">&times;</span>
                <h2>Если вам нужно помощь, не стесняйтесь и заполните модальное окно</h2>
            <button class="success-btn" onclick="showSuccessMessage()">Отправить</button>
        </div>
    </div>

 <div id="details" class="details"></div>
    <h1></h1>
    <div id="details" class="details"></div>

attr
    <section class="str">
    <div class="str__str">
        <button class="str__btn"></button>
    </div>
    </section> 

    

    <section class="footer">
        <div class="footer__box">
            <ul class="footer__contacts">
                <img src="./assets/img/black.logo.png" alt="img">
                </ul>
            </div>
        <a class='cancelBtn' id='cancelBtn'</a>
            <div class="cc">
                <a href="#" class="footer__logo">
                <img src="./assets/img/logo.spotify.png" alt="Img" class="footer__img">
                <img src="./assets/img/logo.inst.png" alt="Img" class="footer__img1">
                <img src="./assets/img/logo.ds.png" alt="Img" class="footer__img2">
            </div>
        </a>
    
    <div class="footer__text">
        <h1>© 2024 SityDiscoverires. All Rights Reserved. Design by @Vol0dy_a</h1>\
    </div>
</section>
    
    ` : 




       
    
    
        window.onload = function() {
            document.querySelector('#demoPreloader').style.display = 'none';
            };
        }   