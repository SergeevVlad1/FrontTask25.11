// const cardsContainer = document.getElementById('cards-container');
// const currentPageSpan = document.getElementById('current-page');
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');

// let currentPage = 1;
// const itemsPerPage = 3; // Количество карточек на странице

// // Функция для загрузки данных с сервера MockAPI
// function loadData(page) {
//     return fetch(`https://653485e2e1b6f4c59046c7c7.mockapi.io/api/v1/items?page=${page}&limit=${itemsPerPage}`)
//         .then(response => response.json());
// }

// // Функция для отображения карточек
// function displayCards(data) {
//     cardsContainer.innerHTML = ''; // Очищаем контейнер
//     data.forEach(item => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = `
//             <h3>${item.name}</h3>
//             <p>${item.description}</p>
//         `;
//         cardsContainer.appendChild(card);
//     });
// }

// // Функция для обновления пагинации
// function updatePagination(page) {
//     currentPageSpan.textContent = page;
//     prevPageButton.disabled = page === 1;
//     // Здесь можно добавить проверку на последнюю страницу, если известно общее количество элементов
// }

// // Загрузка данных при загрузке страницы
// loadData(currentPage).then(data => {
//     displayCards(data);
//     updatePagination(currentPage);
// });

// // Обработчик для кнопки "Previous"
// prevPageButton.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         loadData(currentPage).then(data => {
//             displayCards(data);
//             updatePagination(currentPage);
//         });
//     }
// });

// // Обработчик для кнопки "Next"
// nextPageButton.addEventListener('click', () => {
//     currentPage++;
//     loadData(currentPage).then(data => {
//         displayCards(data);
//         updatePagination(currentPage);
//     });
// });





document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
    const attractionsContainer = document.getElementById('attractions');
    const categoryFilter = document.getElementById('category');
    const searchInput = document.getElementById('searchInput');
    const currentPageSpan = document.getElementById('current-page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const sortBySelect = document.getElementById('sortBySelect'); 
    const ImgSearch = document.getElementById('ImgSearch');
    const InputSearch = document.getElementById('searchInput');
    
    const toggleInputVisibility = () => {
        if (InputSearch.style.display === 'none' || InputSearch.style.display === '') {
            InputSearch.style.display = 'flex'; 
        } else {
            InputSearch.style.display = 'none'; 
        }
    };
    
    ImgSearch.addEventListener('click', (event) => {
        event.stopPropagation(); 
        toggleInputVisibility();
    });
    
    window.addEventListener('click', () => {
        if (ImgSearch.style.display === 'flex') {
            InputSearch.style.display = 'none'; 
        }
    });
   
   
        

        let currentPage = 1;
        const itemsPerPage = 2;
        let attractionsData = [];
    
        async function fetchAttractions(page) {
            try {
                const response = await fetch(`${apiUrl}?page=${page}&limit=${itemsPerPage}`);
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
                                <img class='containerId__img' src='${attraction.imageUrl}'>
                                <div class='what'> 
                                <a class="main__search" href="#">${attraction.name}</a>
                                </div>
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
        }

        categoryFilter.addEventListener('change', function() {
            const selectedCategory = categoryFilter.value;
            if (selectedCategory) {
                const filteredData = attractionsData.filter(attraction => attraction.category === selectedCategory);
                displayAttractions(filteredData);
            } else {
                fetchAttractions(currentPage);
            }
        });


            // const attractionsContainer = document.getElementById('attractions1');
            
        
        
            
        
            
        
            // Функция для выполнения запроса на сервер
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
        
            // Функция для отображения данных
            // function displayAttractions(data) {
            //     attractionsContainer.innerHTML = '';
            //     data.forEach(attraction => {
            //         const card = document.createElement('div');
            //         card.className = 'card';
            //         card.innerHTML = `
            //             <div class="container" id='container'>
            //                 <div class="card" id='card'>
            //                     <a class="filter-title" href="http://127.0.0.1:5500/index.html?page=catalog&id=${attraction.id}">
            //                         <h3>${attraction.name}</h3>
            //                     </a>
            //                 </div>
            //             </div>
                            
            //                 <p>${attraction.description}</p>
            //         `;
            //         attractionsContainer.appendChild(card);
            //     });
            // }
        
            // Функция для сортировки данных
            function sortAttractionsByCategory(data, sortBy) {
                if (!sortBy) return data;
        
                const [field, order] = sortBy.split('_');
                return data.sort((a, b) => {
                    if (order === 'asc') {
                        return a[field] > b[field] ? 1 : -1;
                    } else {
                        return a[field] < b[field] ? 1 : -1;
                    }
                });
            }
        
            // Обработчик изменения выбора сортировки
            sortBySelect.addEventListener('change', function () {
                const sortBy = sortBySelect.value;
                const sortedData = sortAttractionsByCategory(attractionsData, sortBy);
                displayAttractions(sortedData);
            });
        
            // Загрузка данных при загрузке страницы
            fetchAttractions();



    
        
// Модад


      
        
        
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
    
        // Загрузка данных при загрузке страницы
        fetchAttractions(currentPage).then(() => {
            updatePagination(currentPage);
        });
    
        function showDetails(attractionId) {
            fetch(`${apiUrl}/${attractionId}`)
                .then(response => response.json())
                .then(attraction => {
                    const detailsContainer = document.getElementById('attractions');
                    detailsContainer.innerHTML = `
                        <div id="loader" class="details"></div>
                        <div class="containerId">
                            <div class='containerId__title'> <h1>${attraction.name}</h1></div>
                        <div class="containerId">
                        <div class='containerId_text'>
                            <h2>${attraction.description}</h2>
                        </div>
                        </div>
                        </div>
                        <button id='modalOpen'>dede</button>
                            <div class='containerId__map'> ${attraction.location}</div>
                            <div id="output"></div>
 <div id="comment">
                            <div id="reviews">
<img src="https://media.tenor.com/zj3-WWIRT5kAAAAM/cat-scream-lll.gif" alt="img" id="modalOpen" class="openModal">
    <div class="modal" id="modal">
        <div class="modal_content" id="modal-content">
            <span class="close" id="modalClose">&times</span>
            <div class="slider">
                <div class="slides">
                    <div class="slide"><img src="https://media.tenor.com/zj3-WWIRT5kAAAAM/cat-scream-lll.gif" alt="cats"></div>
                    <div class="slide"><img src="https://media.tenor.com/euuDGxwTva8AAAAM/happy-birthday-wishes-happy-birthday.gif" alt="cats"></div>
                    <div class="slide"><img src="" alt="cats"></div>
                </div>
            </div>

                <button class="prev">&#10094</button>
                <button class="next">&#10095</button>
        </div>       
    </div>

                            
            <!-- Отзывы будут отображаться здесь -->    
        </div>
        

<button id='modalOpen'>Modal</button>
   
        
                        <a href="./index.html?page=catalog" class="main__button">Вернуться</a>
                    `;


                    





    
                    const commentCard = document.getElementById('comment');
                    commentCard.addEventListener('click', () => {
                    });
    
                    const userInput = document.getElementById('inputComment');
                    userInput.addEventListener('input', function () {
                        output.textContent = userInput.value;
                    });
                })
        }
    
        
        const attractionId = new URLSearchParams(window.location.search).get('id');
        if (attractionId) {
            showDetails(attractionId);
        }
    });
    // const inner = document.getElementById('testmodal');


// Backend end


// Frontend start
const CatalogPage = () => {
    mainPage.innerHTML = ''  
    fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
    
    const attractionId = new URLSearchParams(window.location.search).get('id');
    const page12 = attractionId === null ? 

    
    `    
    
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
       
        


    </div>
        </div>

            <ul id="itemList" class="header__menu-list">
            
                <li class="header__menu-link">
                    <a href="./index.html">На главную</a>
                </li>
                <li class="header__menu-link">
                    <a href="./index.html?page=contacts">Контакты</a>
                </li>
                <li id='ImgSearch' class="header__menu-link1">
                    <a href="#"><img src="./assets/img/catalog.lupa.png" alt="Img"></a>
                </li>
                <li class="header__menu-link">
                    <input class ='review__input_search' type="text" id="searchInput" placeholder="Поиск достопримечательностей...">
                </li>
                <li class="category_label">
                <div class="filter">
                <label for="category">Категория:</label>
                    <select class='review__label' id="category">
                        <option value="">Все</option>
                        <option value="category1">Храмы и музеи</option>
                        <option value="category2">Парки</option>
                        <option value="cate xgory3">Другое</option>
                    </select>
                <label for="sortBy">Сортировать по:</label>
                    <select class='review__label' id="sortBySelect">
                        <option value="">-- Выберите критерий --</option>
                        <option value="popularity_asc">Популярность (возрастание)</option>
                        <option value="popularity_desc">Популярность (убывание)</option>
                        <option value="name_asc">Имя (А-Я)</option>
                        <option value="name_desc">Имя (Я-А)</option>
                    </select>
                </div>
            </ul>

        <nav class="menu__body">
            <li class="header__menu-link2">
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


 <div id="details" class="details"></div>
    <h1></h1>
    <div id="details" class="details"></div>


    <section class="str">
    <div class="str__str">
    </div>
    </section> 


<div id="categorySearch"></div>
       <div id="cards-container"></div>
    
        

    
<div id="resultsContainer"></div>
<div id="attractions"></div>

<div class="category" id="category"></div>
<div id="output"></div>
   
    <div id="attractions" class="detaifls"></div>
    <div id="details" class="detaifls"></div>
    <main id="mainPage"></main>
    <div id="map"></div>

    <div class="filter">
        
        <div id="reviews">
            <!-- Отзывы будут отображаться здесь -->    
        </div>
        <form class='review__form' id="reviewForm">
        <h1 class='review__title'>Ваши впечатления</h1>
            <label class='review__label' for="name">Имя:</label>
            <input class ='review__input' type="text" id="name" name="name" required>
            
            <br>
            <label class='review__label' for="text">Текст отзыва:</label>
            <textarea class ='review__input' id="text" name="text" required></textarea>
            <br>
            
            <button class='main__button' type="submit">Оставить отзыв</button>
        </form>
        
        
    

    </div>
    <div id="attractions"></div>
    <div id="catalog-page12"></div>

    

    
    <div id="cards-container"></div>

    

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
 
        <div id="cards-container"></div>
        <div class="pagination">
            <button class="previousBtn" id="prev-page">Previous</button>
            <span class="currentPage" id="current-page">1</span>
            <button class="nextBtn" id="next-page">Next</button>
    </div>  

    


     <div style='display: none;' class="slider-controls">
        <button class="prev-btn">Предыдущий</button>
        <div class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <button class="next-btn">Следующий</button>
    </div>
    
       
    <div class='slider'></div>
    

<input type="text" id="inputComment" placeholder="Введите комментарий...">

    
    
</section>
    
`: innerHTML = `


<li id='ImgSearch' class="header__menu-link1">
                    <a href="#"><img src="./assets/img/catalog.lupa.png" alt="Img"></a>
                </li>



<img src="https://media.tenor.com/zj3-WWIRT5kAAAAM/cat-scream-lll.gif" alt="img" id="modalOpen" class="openModal">
    <button id="modalOpen2">Modal</button> <!-- Изменили id, чтобы избежать дублирования -->
    <div class="modal" id="modal">
        <div class="modal_content" id="modal-content">
            <span class="close" id="modalClose">&times;</span>
            <div class="slider">
                <div class="slides">
                    <div class="slide"><img src="https://media.tenor.com/zj3-WWIRT5kAAAAM/cat-scream-lll.gif" alt="cats"></div>
                    <div class="slide"><img src="https://media.tenor.com/euuDGxwTva8AAAAM/happy-birthday-wishes-happy-birthday.gif" alt="cats"></div>
                    <div class="slide"><img src="" alt="cats"></div>
                </div>
            </div>
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
        </div>       
    </div>
<div class="demoPreloader" id="demoPreloader"></div>
    
<div id="resultsContainer"></div>
<div id="attractions"></div>
<div id="attractions1"></div>
<select id="category">
    <option  value="">Все категории</option>    
    <option value="category1">Парки</option>
    <option value="category2">Категория 2</option>
</select>




<div class="category" id="category"></div>
<input type="text" id="inputComment" placeholder="Введите комментарий...">
<div id="output"></div>
   
    <div id="attractions" class="detaifls"></div>
    <div id="details" class="detaifls"></div>
    <main id="mainPage"></main>
    <div id="map"></div>

    <div class="filter">
        <input  type="text" id="searchInput" placeholder="Поиск достопримечательностей...">
        
        <label for="category">Категория:</label>
        <select id="category">
            <option value="">Все</option>
            <option value="category1">Храмы и музеи</option>
            <option value="category2">Парки</option>
            <option value="category3">Другое</option>
        </select>
        
        <div id="reviews">
            <!-- Отзывы будут отображаться здесь -->    
        </div>
        <form id="reviewForm">
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="text">Текст отзыва:</label>
            <textarea id="text" name="text" required></textarea>
            <br>
            <button type="submit">Оставить отзыв</button>
        </form>
    

    </div>
    <div id="attractions"></div>
    <div id="attractions1"></div>
    <div id="catalog-page12"></div>

    <div class="slider">
    <div class="slide" style="background-color: red;">1</div>
    <div class="slide" style="background-color: green;">2</div>
    <div class="slide" style="background-color: blue;">3</div>
</div>
<div class="slider-controls">
    <button class="prev-btn">Предыдущий</button>
    <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <button class="next-btn">Следующий</button>
</div>
    
    <div id="cards-container"></div>
        <div class="pagination">
            <button class="previousBtn" id="prev-page">Previous</button>
            <span class="currentPage" id="current-page">1</span>
            <button class="nextBtn" id="next-page">Next</button>
    </div>`


        if (document.getElementById('catalog-page12')) {
            document.body.innerHTML = ''
            document.body.innerHTML += page12
        }
        // else (innerHTML = '')
    
    
        window.onload = function() {
            document.querySelector('#demoPreloader').style.display = 'none';
            };
            
    // const contactBtn = document.getElementById('contactBtn')

    // contactBtn.addEventListener('click', () => {
    //     window.location.href = '?page=contact'  
    //     checkPathAndRenderPage()
    // })
}

// const searchInput = document.querySelector('.main__input')
// const cardsList = document.querySelector('main__all-sections')
// const cards = document.querySelectorAll('.main__card')

// searchInput.addEventListener('input', (event) => {
//     console.log(event.target.value)
//     if(event.target.value.length) {
//         cards.forEach(card => {
//             card.style.display = 'none'
            
//             if(card.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
//                 card.style.display = 'block'
                
//                 console.log('true')
//             }
//         })
//     } else {
//         cards.forEach(card => {
//             card.style.display = 'block'
//         })
//     }
    
// })

// function createSearchFunction(searchInputId, resultsContainerId, apiUrl) {
//     const searchInput = document.getElementById(searchInputId);
//     const resultsContainer = document.getElementById(resultsContainerId);

//     searchInput.addEventListener('input', function() {
//         const query = searchInput.value.trim();
//         if (query.length > 0) {
//             searchAttractions(query, apiUrl, resultsContainer);
//         } else {
//             resultsContainer.innerHTML = '';
//         }
//     });
// }

// function searchAttractions(query, apiUrl, resultsContainer) {
//     fetch(`${apiUrl}?search=${encodeURIComponent(query)}`)
//         .then(response => response.json())
//         .then(data => {
//             displayResults(data, resultsContainer);
//         })
//         .catch(error => {
//             console.error('Ошибка при поиске достопримечательностей:', error);
//         });
// }

// function displayResults(data, resultsContainer) {
//     resultsContainer.innerHTML = '';
//     if (data.length === 0) {
//         resultsContainer.innerHTML = '<p>Ничего не найдено.</p>';
//         return;
//     }

//     data.forEach(attraction => {
//         const attractionElement = document.createElement('div');
//         attractionElement.classList.add('attraction');
//         attractionElement.innerHTML = `
//             <h3>${attraction.name}</h3>
//             <p>${attraction.description}</p>
//         `;
//         resultsContainer.appendChild(attractionElement);
//     });
// }

// // Пример использования функции
// createSearchFunction('searchInput', 'resultsContainer', 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places');






document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviews');
    

    // Функция для загрузки отзывов с сервера
    async function loadReviews() {
        try {
            const response = await fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/comments');
            const reviews = await response.json();
            reviewsContainer.innerHTML = ''; // Очищаем контейнер
            reviews.forEach(review => {
                addReviewToPage(review);
            });
        } catch (error) {
            console.error('Ошибка при загрузке отзывов:', error);
        }
    }

    // Функция для добавления отзыва на страницу
    function addReviewToPage(review) {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        if (reviewElement == 'undefined')
            reviewElement.style.display = 'none';   
        else
        reviewElement.innerHTML = `
            <p><strong>${review.name}</strong></p>
            <p>${review.text}</p>
            <button class="deleteReview" data-id="${review.id}">Удалить</button>
        `;
        reviewsContainer.appendChild(reviewElement);
    }

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

    

    // Обработчик отправки формы
    reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const text = document.getElementById('text').value;

        if (!name || !text) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        try {
            const response = await fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, text })
            });

            if (response.ok) {
                const newReview = await response.json();
                addReviewToPage(newReview);
                reviewForm.reset();
            } else {
                alert('Ошибка при добавлении отзыва.');
            }
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
        }
    });

    reviewsContainer.addEventListener('click', async (event) => {
        if (event.target.classList.contains('deleteReview')) {
            const reviewId = event.target.getAttribute('data-id');
            try {
                const response = await fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/comments/${reviewId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    loadReviews(); // Перезагружаем отзывы после удаления
                } else {
                    alert('Ошибка при удалении отзыва.');
                }
            } catch (error) {
                console.error('Ошибка при удалении отзыва:', error);
            }
        }
    });
    

    loadReviews();
});

// 471<div id="attractions" class="detaifls"></div>

// <div id="catalog-page12"></div>
//     <div id="attractions"></div>
