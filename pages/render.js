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
    <div id='loader'></div>
    <div id="details" class="details"></div>

    <div id="categorySearch"></div>
    <div id="cards-container"></div>
    <div id="resultsContainer"></div>
    <div id="attractions"></div>

    <div class="category" id="category"></div>
    <div id="output"></div>
   
    <div id="attractions" class="detaifls"></div>
    <main id="mainPage"></main>

    <div class="filter"> 
        <div id="reviews"><!-- Отзывы будут отображаться здесь --></div>
        
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
                        </div>
        
                    <button id='modalOpen'>Modal</button>
    
       
        <div class='slider'></div>
        <input type="text" id="inputComment" placeholder="Введите комментарий...">
</section>
    
`: innerHTML = 
`
        <li id='ImgSearch' class="header__menu-link1">
            <a href="#"><img src="./assets/img/catalog.lupa.png" alt="Img"></a>
        </li>


        <div id="comment">
                                


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
        
            <div id="details" class="detaifls"></div>
            <main id="mainPage"></main>

            <div class="filter">
                <input  type="text" id="searchInput" placeholder="Поиск достопримечательностей...">
                
                <label for="category">Категория:</label>
                <select id="category">
                    <option value="">Все</option>
                    <option value="category1">Храмы и музеи</option>
                    <option value="category2">Парки</option>
                    <option value="category3">Другое</option>
                </select>
                
                
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
            </div>
                `

        if (document.getElementById('catalog-page12')) {
            document.body.innerHTML = ''
            document.body.innerHTML += page12
        }
        // else (innerHTML = '')
    
        window.onload = function() {
            document.querySelector('#demoPreloader').style.display = 'none';
            };
}