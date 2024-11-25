function filterFunction() {
    document.getElementById('filter__cont').classList.toggle("show");
    
}

// setTimeout(function(download) {console.log('Загрузка...'); },  8000);

window.onload = function() {
    document.querySelector('#demoPreloader').style.display = 'none';
};

const cardsContainer = document.getElementById('cards-container');
const currentPageSpan = document.getElementById('current-page');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let currentPage = 1;
const itemsPerPage = 2;

async function loadData(page) {
    const response = await fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places?page=${page}&limit=${itemsPerPage}`);
    const data = await response.json();
    return data;
}

// function displayCards(data) {
//     // cardsContainer.innerHTML = '';
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


// все секции catalog (css) 
document.addEventListener('DOMContentLoaded', function() {
    const attractionsContainer = document.getElementById('attractions');
    // attractionsContainer.innerHTML = ''; 
    fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')

        .then(response => response.json())
        .then(data => {

            data.forEach(attraction => {

                const attractionElementPageCatalog = document.createElement('div');
                attractionElementPageCatalog.className = 'attractioN';
                attractionElementPageCatalog.textContent = attraction.name;
                // document.body.innerHTML = ''
                // document.body.innerHTML += attractionElementPageCatalog
                attractionElementPageCatalog.innerHTML =  `
                                    
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input class="main__input" placeholder="Найти...">
                </div>

                <ul class="main__all-sections">
                
                <li class="main__card">
                <div class="main__container-section">
                <img onclick="download" class='containerId__img' src=${attraction.imageUrl}> 
                
                <a class="main__search" href="#">${attraction.name}</a>
                    </li>
                </ul>
                </div>
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8a2946d35bd7706e85ae695793af5773de8985ce103013f41d11e145a0344ee3&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
                `;

                attractionElementPageCatalog.addEventListener('click', () => {
                    //URL обнов.
                    const url = new URL(window.location.href);
                    url.searchParams.set('id', attraction.id);
                    window.history.pushState({}, '', url);
                    
                    showDetails(attraction.id);
                });
                attractionsContainer.appendChild(attractionElementPageCatalog);
            });            

            // query 
            const attractionId = new URLSearchParams(window.location.search).get('id');
            if (attractionId) {
                showDetails(attractionId);
            }
        })
        
        .catch(error => console.error('Ошибка при загрузке данных:', error));
            function showDetails(attractionId) {
        let isloading = true
        fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
            isloading = false
        })

        // css 1 стр обновленная 
.then(response => response.json())
.then(attraction => {
const detailsContainer = document.getElementById('attractions');
    detailsContainer.innerHTML = `
    <div id="loader" class="details"></div>
        <div class="containerId">
                <div class='containerId__title'> <h1>${attraction.name}</h1>
                </div>
                <img class='containerId__img' src=${attraction.imageUrl}>
                <h2 class='containerId__text'>${attraction.description}</h2>
                    <div class='containerId__map'> ${attraction.location}</div>
            <div class='modal__title__img'>
                <div id='myModal' class='modal' 
    </div>
        </div>
                    
                </div>
        <a href="http://127.0.0.1:5500/index.html?page=catalog" class="main__button">Вернуться</a> 
    `;
    
window.onload = function() {
changeLanguage();
};  

                //карта map
const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng},
    zoom: 15
    });

new google.maps.Marker({
    position: { lat: lat, lng: lng},
    map: map.location,
    title: attraction.name
    });
})
.catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
    }
});


const CatalogPage = () => {
    mainPage.innerHTML = ''
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/places')
    
    const attractionId = new URLSearchParams(window.location.search).get('id');
    const page12 = attractionId === null ? 

    `    


<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/catalog.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
    <section class="load">
        <div class='demoPreloader' id='demoPreloader'>
    <img src='/assets/img/728.gif' alt='preloader'>
    </div>
    </section>

    <header class="header">
        <div class="header__logo">
            <a href="/index.html"><img src="/assets/img/black.logo.png" alt="img"></a>
        </div>
        <div class="container">
            <div class="header__icon">
                <span></span>
                <span></span>
                <span></span>   
            </div>
        <nav class="header__menu-body">
            <ul id="itemList" class="header__menu-list">
                
                <li class="header__menu-link">
                    <a href="/index.html">На главную</a>
                </li>
                <li class="header__menu-link">
                    <a href="/contacts.html">Контакты</a>
                </li>
                <li class="header__menu-link1">
                    <a href="#"><img src="/assets/img/catalog.lupa.png" alt="Img"></a>
                </li>
        <nav class="menu__body">
            <li class="header__menu-link2">
                <a href="#"><img src="/assets/img/catalog.filter2.png" alt="Img"></a>        
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
            <button class="filter__btn" onclick="filterFunction()"><img src="/assets/img/catalog.filter2.png" alt="Img"></button>
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
    <h1>Подробная информация</h1>
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
                <img src="/assets/img/black.logo.png" alt="img">
                </ul>
            </div>
        <a class='cancelBtn' id='cancelBtn'</a>
            <div class="cc">
                <a href="#" class="footer__logo">
                <img src="./assets/img/logo.spotify.png" alt="Img" class="footer__img">
                <img src="/assets/img/logo.inst.png" alt="Img" class="footer__img1">
                <img src="/assets/img/logo.ds.png" alt="Img" class="footer__img2">
            </div>
        </a>
    
    <div class="footer__text">
        <h1>© 2024 SityDiscoverires. All Rights Reserved. Design by @Vol0dy_a</h1>\
    </div>
</section>
    
    ` :
    document.body.innerHTML = ''     // 1 без css 
    ` 
    <h1>${attraction.description}</h1>
    <img src="${attraction.imageUrl}"
    <h2>fefe</h2>   
    `;

    

    if (document.getElementById('catalog-page12')) {
        document.body.innerHTML = ''
        document.body.innerHTML += page12
    }
    else (innerHTML = '')
 
    

    const catalogBtn = document.getElementById('contactBtn')

    contactBtn.addEventListener('click', () => {
        window.location.href = '?page=dw'  
        checkPathAndRenderPage()
    })
}

const searchInput = document.querySelector('.main__input')
const cardsList = document.querySelector('main__all-sections')
const cards = document.querySelectorAll('.main__card')

searchInput.addEventListener('input', (event) => {
    console.log(event.target.value)
    if(event.target.value.length) {
        cards.forEach(card => {
            card.style.display = 'none'
            
            if(card.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                card.style.display = 'block'
                
                console.log('true')
            }
        })
    } else {
        cards.forEach(card => {
            card.style.display = 'block'
        })
    }
    
})

