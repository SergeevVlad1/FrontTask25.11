// fetch 
// const searchInput = document.querySelector('.main__input')
// const cardsList = document.querySelector('main__container-section')
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


//   div id='attractionS' innerHTML



// document.addEventListener('DOMContentLoaded', function() {
//     const attractionsContainer = document.getElementById('attractions');

//     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(attraction => {
//                 const attractionElement = document.createElement('div');
//                 // attractionElement.textContent = 'Пожалуйста выведись!(';
//                 // let parent = document.getElementById('attraction')
//                 // parent.appendChild(newDiv)
//                 attractionElement.className = 'attraction';
//                 attractionElement.textContent = attraction.name;
//                 attractionElement.addEventListener('click', () => {
//                     // Обновление URL с query параметром без перезагрузки страницы
//                     const url = new URL(window.location.href);
//                     url.searchParams.set('id', attraction.id);
//                     window.history.pushState({}, '', url);

                    
//                     showDetails(attraction.id);
//                 });
//                 attractionsContainer.appendChild(attractionElement);
//             });

//             // query 
//             const attractionId = new URLSearchParams(window.location.search).get('id');
//             if (attractionId) {
//                 showDetails(attractionId);
//             }
//         })
//         .catch(error => console.error('Ошибка при загрузке данных:', error));
//     function showDetails(attractionId) {
//         let isloading = true
//         fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
//             isloading = false
//         })
//             .then(response => response.json())
//             .then(attraction => {
//                 const detailsContainer = document.getElementById('loader');
                
//                 detailsContainer.innerHTML = `
//                 <div id='myModal' class='modal'
//                 <div class='modal__title__img'>
//                     <h1 class='modal__title'>${attraction.description}</h1>
//                     <img class='modal__img' src=${attraction.imageUrl}>
//                 </div>
//                     <img src=${attraction.coord_x}>
//                     <img src=${attraction.coord_y}>
//                     <h2 class='modal__text'>${attraction.other}</h2>

//                     </div>
//                 `;
//                 window.onload = function() {
// changeLanguage();
// };
//                 //карта map
//                 const map = new google.maps.Map(document.getElementById('map'), {
//                     center: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     zoom: 15
//                 });

//                 new google.maps.Marker({
//                     position: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     map: map,
//                     title: attraction.name
//                 });
//             })
//             .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
//     }
// });




// const search = document.querySelector('.main__input')
// const menuLink = document.querySelector('.header__menu-link1')

// menuLink.addEventListener('click', () => { 
//     search.toggleAttribute('form');
//     if (search.style.display === 'none') {
//         search.style.display = 'block';
//       } else {
//         search.style.display = 'none';
        
//       }
//     });










    //     <section class="load">
    //     <div class='demoPreloader' id='demoPreloader'>
    // <img src='/assets/img/728.gif' alt='preloader'>
    // </div>
    // </section>

        // window.onload = function() {
        //     document.querySelector('#demoloader').style.display = 'none';
        // };


        // Все карточки на catalog (без css)
        // async function fetchAttractions() {
        //     const attractionsContainer = document.getElementById('attractions');
        //     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
        //     .then((response) => response.json())
        //     .then(data => {   
        //       data.forEach(attraction => {
        //         const attractionElement = document.createElement('div');
        //         attractionElement.addEventListener('click', () => showDetails(attraction));
        //         attractionElement.innerHTML = `
        //          <div id="attractions" class="details"></div>
        //              <div class="main__container-section">
        //             <h1 class="main__card">${attraction.name}</h1>
        //             <a onclick="openModal()" class="main__button">Узнать больше</a>
        //             <img class="main__img" src="${attraction.imageUrl}" alt="Img">
        //             <p class="main__info">${attraction.description}</p>
        //             <img class="main__info"><strong>Местоположение:</strong>${attraction.location}</img>
        //             </li>
        //             </div>
        //         `;
        //         attractionsContainer.appendChild(attractionElement);
                
        //     });
        //   })  
        //   }
        //   function showDetails(attraction) {
        //     detailsContainer.innerHTML = `
        //         <h2>${attraction.name}</h2>
        //         <p>${attraction.description}</p>
        //     `;
        //   }
        
          
        //   fetchAttractions();
        
        //   div id='dama' innerHTML

//         const cardsContainer = document.getElementById('cards-container');
// const currentPageSpan = document.getElementById('current-page');
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');

// let currentPage = 1;
// const itemsPerPage = 2; 


// async function loadData(page) {
//     const response = await fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places?page=${page}&limit=${itemsPerPage}`);
//     const data = await response.json();
//     return data;
// 





// function d () {
//     const btn = document.querySelector('.filter__btn')
//     btn.click(function() {
//         alert 
//     }) () => {
//         prompt ('fefefe', 'grgrgr')
//     }
//     }

// const cart = document.querySelectorAll('.main__card')
// document.getElementById('fil_btn').addEventListener('click', function() {
//     if (cart)
//     cart.style.display = 'none';
//     prompt('fefe', 'fefef')
// }
    
// );


  
    //   function showDetails(attraction) {
    //     detailsContainer.innerHTML = `
    //         <h2>${attraction.name}</h2>
    //         <p>${attraction.description}</p>
            
    //     `;
    //   }
        
    
    // document.addEventListener('DOMContentLoaded', function() {
    //     const attractionsContainer = document.getElementById('attractions');
    
    //     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
    //         .then(response => response.json())
    //         .then(data => {
    //             data.forEach(attraction => {
    //                 const attractionElement = document.createElement('div');
    //                 // attractionElement.textContent = 'Пожалуйста выведись!(';
    //                 // let parent = document.getElementById('attraction')
    //                 // parent.appendChild(newDiv)
    //                 attractionElement.className = 'attraction';
    //                 attractionElement.textContent = attraction.name;
    //                 attractionElement.addEventListener('click', () => {
    //                     // Обновление URL с query параметром без перезагрузки страницы
    //                     const url = new URL(window.location.href);
    //                     url.searchParams.set('id', attraction.id);
    //                     window.history.pushState({}, '', url);
    
                        
    //                     showDetails(attraction.id);
    //                 });
    //                 attractionsContainer.appendChild(attractionElement);
    //             });
    
    //             // query 
    //             const attractionId = new URLSearchParams(window.location.search).get('id');
    //             if (attractionId) {
    //                 showDetails(attractionId);
    //             }
    //         })
    //         .catch(error => console.error('Ошибка при загрузке данных:', error));
    //     function showDetails(attractionId) {
    //         let isloading = true
    //         fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
    //             isloading = false
    //         })
    //             .then(response => response.json())
    //             .then(attraction => {
    //                 const detailsContainer = document.getElementById('loader');
                    
    //                 detailsContainer.innerHTML = `
    //                 <div id='myModal' class='modal'
    //                 <div class='modal__title__img'>
    //                     <h1 class='modal__title'>${attraction.description}</h1>
    //                     <img class='modal__img' src=${attraction.imageUrl}>
    //                 </div>
    //                     <img src=${attraction.coord_x}>
    //                     <img src=${attraction.coord_y}>
    //                     <h2 class='modal__text'>${attraction.other}</h2>
    
    //                     </div>
    //                 `;
    //                 window.onload = function() {
    // changeLanguage();
    // };
    //                 //карта map
    //                 const map = new google.maps.Map(document.getElementById('map'), {
    //                     center: { lat: attraction.coord_x, lng: attraction.coord_y},
    //                     zoom: 15
    //                 });
    
    //                 new google.maps.Marker({
    //                     position: { lat: attraction.coord_x, lng: attraction.coord_y},
    //                     map: map,
    //                     title: attraction.name
    //                 });
    //             })
    //             .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
    //     }
    // });
    
    

// function filterItems() {
//     const selectedCategory = document.querySelector('.filter-select').value;
//     const items = document.querySelectorAll('#itemList li');
//     const ww = document.getElementById('Bla')

//     ww.addEventListener('change', function() {
//         const selectedOption = selectElement.options[selectElement.selectedIndex];

//         alert('feefe' + selectedOption);
//     });


//     items.forEach(item => {
//         if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
//             item.classList.remove('hidden');
//         } else {
//             item.classList.add('hidden');
//         }
//     });
// }





// // ауауау


//   fetchAttractions();

// //   div id='dama' innerHTML



// document.addEventListener('DOMContentLoaded', function() {
//     const attractionsContainer = document.getElementById('attractions');

//     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(attraction => {
//                 const attractionElement = document.createElement('div');
//                 // attractionElement.textContent = 'Пожалуйста выведись!(';
//                 // let parent = document.getElementById('attraction')
//                 // parent.appendChild(newDiv)
//                 attractionElement.className = 'attraction';
//                 attractionElement.textContent = attraction.name;
//                 attractionElement.addEventListener('click', () => {
//                     // Обновление URL с query параметром без перезагрузки страницы
//                     const url = new URL(window.location.href);
//                     url.searchParams.set('id', attraction.id);
//                     window.history.pushState({}, '', url);

                    
//                     showDetails(attraction.id);
//                 });
//                 attractionsContainer.appendChild(attractionElement);
//             });

//             // query 
//             const attractionId = new URLSearchParams(window.location.search).get('id');
//             if (attractionId) {
//                 showDetails(attractionId);
//             }
//         })
//         .catch(error => console.error('Ошибка при загрузке данных:', error));
//     function showDetails(attractionId) {
//         let isloading = true
//         fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
//             isloading = false
//         })
//             .then(response => response.json())
//             .then(attraction => {
//                 const detailsContainer = document.getElementById('loader');
                
//                 detailsContainer.innerHTML = `
//                 <div id='myModal' class='modal'
//                 <div class='modal__title__img'>
//                     <h1 class='modal__title'>${attraction.description}</h1>
//                     <img class='modal__img' src=${attraction.imageUrl}>
//                 </div>
//                     <img src=${attraction.coord_x}>
//                     <img src=${attraction.coord_y}>
//                     <h2 class='modal__text'>${attraction.other}</h2>

//                     </div>
//                 `;
//                 window.onload = function() {
// changeLanguage();
// };
//                 //карта map
//                 const map = new google.maps.Map(document.getElementById('map'), {
//                     center: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     zoom: 15
//                 });

//                 new google.maps.Marker({
//                     position: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     map: map,
//                     title: attraction.name
//                 });
//             })
//             .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
//     }
// });






// function openModal() {
//     document.getElementById('myModal').style.display = 'block';
// }
  
// function closeModal() {
// document.getElementById('myModal').style.display = 'none';
// }
  
// window.onclick = function(event) {
//     if (event.target == document.getElementById('myModal')) {
//         closeModal();
//     }
// }
  
// function showSuccessMessage() {
//     const successMessage = document.getElementById('successMessage');
//     alert('Успешно')
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');

//     let currentIndex = 0;

//     // Функция для обновления слайдера
//     function updateSlider() {
//         // Вычисляем смещение слайдера на основе текущего индекса
//         const offset = -currentIndex * 500;
//         // Применяем смещение к слайдеру
//         slider.style.transform = `translateX(${offset}px)`;

//         // Обновляем активный dot
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
//     }

//     // Обработчик клика на кнопку "Предыдущий"
//     prevBtn.addEventListener('click', () => {
//         // Уменьшаем индекс текущего слайда, если он больше 0
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateSlider();
//         }
//     });

//     // Обработчик клика на кнопку "Следующий"
//     nextBtn.addEventListener('click', () => {
//         // Увеличиваем индекс текущего слайда, если он меньше количества слайдов минус один
//         if (currentIndex < slides.length - 1) {
//             currentIndex++;
//             updateSlider();
//         }
//     });

//     // Обработчик клика на dot
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             // Устанавливаем текущий индекс на индекс выбранного dot
//             currentIndex = index;
//             updateSlider();
//         });
//     });

//     // Инициализация слайдера
//     updateSlider();
// });




// wdwdwdwdw
// const attractionId = fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/places');

    // function createPageContent() {
    //     if(attractionId !== null) {
    //         // logic
    //         // else if (attractionId == 1) {
    //         //     return 
    //         // }
    //         return `

    //         `
    //     } else return `<p>dwdw</p>`
    // }

    // if (attractionId == 3) {
        
    // };
    // efefefefe




    const searchInput = document.querySelector('.main__input');
    //     const cardsList = document.querySelector('.main__container-section');
    
    
    // async function fetchCards() {
    //     try {
    //         const response = await fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places');
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Ошибка при загрузке данных:', error);
    //     }
    // }
    
    // // Функция для отображения карточек на странице
    // function displayCards(cardsData) {
    //     cardsList.innerHTML = ''; // Очищаем список перед добавлением новых карточек
    //     cardsData.forEach(cardData => {
    //         card.className = 'main__card';
    //         card.textContent = cardData.name; // Предположим, что у вас есть поле name в данных
    //         cardsList.appendChild(card);
    //     });
    // }
    
    // // Функция для фильтрации карточек
    // function filterCards() {
    //     const searchValue = searchInput.value.toLowerCase();
    //     const cards = document.querySelectorAll('.main__card');
    
    //     cards.forEach(card => {
    //         const cardText = card.textContent.toLowerCase();
    //         if (cardText.includes(searchValue)) {
    //             card.style.display = 'block';
    //         } else {
    //             card.style.display = 'none';
    //         }
    //     });
    // }
    
    
    // async function init() {
    //     const cardsData = await fetchCards();
    //     displayCards(cardsData);
    //     searchInput.addEventListener('input', filterCards);
    // }
    
    // init();



    // const filter1 = getElementById("bla");
// filter1.addEventListener('onclick', () => {
//     window.location.href = 'http://127.0.0.1:5501/?page=catalog&id=2', 'http://127.0.0.1:5501/?page=catalog&id=9'
// })




// catalog js





// function openModal() {
//   document.getElementById('myModal').style.display = 'block';
// }

// function closeModal() {
//   document.getElementById('myModal').style.display = 'none';
// }

// window.onclick = function(event) {
//   if (event.target == document.getElementById('myModal')) {
//       closeModal();
//   }
// }

// function showSuccessMessage() {
//   const successMessage = document.getElementById('successMessage');
//   alert('Успешно')
// }


// async function fetchAttractions() {
//     const attractionsContainer = document.getElementById('attractions');
//     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//     .then((response) => response.json())
//     .then(data => {   
//       data.forEach(attraction => {  
//         const attractionElement = document.createElement('div');
//         attractionElement.addEventListener('click', () => showDetails(attraction));
//         attractionElement.innerHTML = ` 
//              <div class="main__container-section">
//             <h1 class="main__card">${attraction.name}</h1>
//             <a onclick="openModal()" class="main__button">Узнать больше</a>
//             <img class="main__img" src="${attraction.imageUrl}" alt="Img">
//             <p class="main__info">${attraction.description}</p>
//             <p class="main__info"><strong>Местоположение:</strong>${attraction.location}</p>
//             </li>
//             </div>
//         `;
//         attractionsContainer.appendChild(attractionElement);
        
//     });
//   })  
//   }
//   function showDetails(attraction) {
//     detailsContainer.innerHTML = `
//         <h2>${attraction.name}</h2>
//         <p>${attraction.description}</p>
        
//     `;
//   }

  
//   fetchAttractions();

//   div id='dama' innerHTML



// document.addEventListener('DOMContentLoaded', function() {
//     const attractionsContainer = document.getElementById('attractions');

//     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(attraction => {
//                 const attractionElement = document.createElement('div');
//                 // attractionElement.textContent = 'Пожалуйста выведись!(';
//                 // let parent = document.getElementById('attraction')
//                 // parent.appendChild(newDiv)
//                 attractionElement.className = 'attraction';
//                 attractionElement.textContent = attraction.name;
//                 attractionElement.addEventListener('click', () => {
//                     // Обновление URL с query параметром без перезагрузки страницы
//                     const url = new URL(window.location.href);
//                     url.searchParams.set('id', attraction.id);
//                     window.history.pushState({}, '', url);

                    
//                     showDetails(attraction.id);
//                 });
//                 attractionsContainer.appendChild(attractionElement);
//             });

//             // query 
//             const attractionId = new URLSearchParams(window.location.search).get('id');
//             if (attractionId) {
//                 showDetails(attractionId);
//             }
//         })
//         .catch(error => console.error('Ошибка при загрузке данных:', error));
//     function showDetails(attractionId) {
//         let isloading = true
//         fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
//             isloading = false
//         })
//             .then(response => response.json())
//             .then(attraction => {
//                 const detailsContainer = document.getElementById('loader');
                
//                 detailsContainer.innerHTML = `
//                 <div id='myModal' class='modal'
//                 <div class='modal__title__img'>
//                     <h1 class='modal__title'>${attraction.description}</h1>
//                     <img class='modal__img' src=${attraction.imageUrl}>
//                 </div>
//                     <img src=${attraction.coord_x}>
//                     <img src=${attraction.coord_y}>
//                     <h2 class='modal__text'>${attraction.other}</h2>

//                     </div>
//                 `;
//                 window.onload = function() {
// changeLanguage();
// };
//                 //карта map
//                 const map = new google.maps.Map(document.getElementById('map'), {
//                     center: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     zoom: 15
//                 });

//                 new google.maps.Marker({
//                     position: { lat: attraction.coord_x, lng: attraction.coord_y},
//                     map: map,
//                     title: attraction.name
//                 });
//             })
//             .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
//     }
// });






// const mainPageELement = document.getElementById('mainPage')

// const createMainPage = () => {
//   mainPageELement.innerHTML = ''
//   const page = `
//          <div class="slider-container">
//         <div class="slider">
//             <div class="slide"><img src="/assets/img/images.1.svg" alt="Slide 1"></div>
//             <div class="slide"><img src="/assets/img/images.2.svg" alt="Slide 2"></div>
//             <div class="slide"><img src="/assets/img/images.3.svg" alt="Slide 3"></div>
//             <div class="slide"><img src="/assets/img/images.1.svg" alt="Slide 4"></div>
//         </div>
//         <div class="slider-controls">
//             <button class="prev-btn">←</button>
//             <div class="pagination">
//                 <span class="dot"></span>
//                 <span class="dot"></span>
//                 <span class="dot"></span>
//                 <span class="dot"></span>
//             </div>
//             <button class="next-btn">→</button>
//         </div>
//     </div>
//     <script src="index.js"></script>
    

        

//     <section class="visit">
        
//             <div class="visit__section">
                
//                 <ul class="visit__box1">
//                     <div class="visit__mini-container">
//                         <div class="visit__img">
//                     <img src="./assets/img/img1.svg" class="visit__img" alt="img" width="950px">
//                 </div>
//                     <div class="visit__text-box">
//                     <div class="visit__title"><h3>Места которые вы можете посетить:</h3>    </div>
//                     <div class="visit__text"><h1>Храм Сенсодзи (浅草寺): Самый старый храм в Токио, построенный в 645 году. Помимо красочных ворот Каминаримон, посетители могут пройти по оживленной улице Накамисе-дори, полной сувенирных лавок и ресторанов, и насладиться тишиной храмового комплекса.</h1></div>  
//                         <a href="#" class="visit__btn">Узнать больше</a>
                        
//                 </div>
//             </div>
//                 </ul>
//                 <ul class="visit__box2">
//                     <div class="visit__mini-container1">
//                     <div class="visit__text-box2">
//                     <div class="visit__title1"> <h2>Рынок Цукидзи (筑地市场):</h2></div>
//                     <div class="visit__text1"><h1>Рынок Цукидзи - это огромный оптовый рынок морепродуктов, расположенный в Токио. Известен своей энергичной атмосферой, свежайшими морепродуктами и знаменитым аукционом тунца. Туристы могут посетить рынок, чтобы полюбоваться на аукцион, попробовать свежий суши и морепродукты, а также купить свежую рыбу, овощи и фрукты.</h1></div>
//                     <a href="#" class="visit__btn1">Узнать больше</a>
//                 </div>
//                 <div class="visit_img1">
//                     <img src="./assets/img/img2.svg" class="visit__img2" alt="img" width="950px" >
//                 </div>
//                 </div>
            
//             </ul>
//                 <ul class="visit__box3">
//                     <div class="visit__mini-container2">
//                     <img src="./assets/img/img3.svg" alt="img" class="visit__img3" width="950px">
//                     <div class="visit__text-box1">
//                     <div class="visit__title"><h2>Токийская башня (东京塔 ):</h2></div>
//                     <div class="visit__text"><h1>Самое высокое сооружение в Японии, с которого открывается захватывающий панорамный вид на Токио. Посетители могут полюбоваться видом с смотровых площадок на высоте 350 и 450 метров. Известна своей архитектурой, панорамным видом на город и несколькими обзорными площадками.</h1></div>
//                     <a href="#" class="visit__btn">Узнать больше</a>
//                 </div>
//             </div>  
//             </ul>
//             </div>
        
    
//     </section>

//     <section class="map">
//            <div class="map__title">
//             <h1>Карта Токио</h1>
//            </div>   
//            <div class="map__map">
//             <iframe class="map__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415264.3601562437!2d139.55951292915526!3d35.596829862495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1728894705989!5m2!1sru!2sru" width="1180" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

//             </iframe>
//            </div>




//     </section>

//     `

//     mainPageELement.innerHTML = page

//     document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');

//     let currentIndex = 0;

//     
//     function updateSlider() {
//         // Вычисляем смещение слайдера на основе текущего индекса
//         const offset = -currentIndex * 500;
//         // Применяем смещение к слайдеру
//         slider.style.transform = `translateX(${offset}px)`;

//        
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
//     }


//     prevBtn.addEventListener('click', () => {
//         // Уменьшаем индекс текущего слайда, если он больше 0
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateSlider();
//         }
//     });

//     
//     nextBtn.addEventListener('click', () => {
//         // Увеличиваем индекс текущего слайда, если он меньше количества слайдов минус один
//         if (currentIndex < slides.length - 1) {
//             currentIndex++;
//             updateSlider();
//         }
//     });

//    
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             // Устанавливаем текущий индекс на индекс выбранного dot
//             currentIndex = index;
//             updateSlider();
//         });
//     });

//     
//     updateSlider();
// });
// }




// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// важно




// function filterFunction() {
//     document.getElementById('filter__cont').classList.toggle("show");
    
// }

// // setTimeout(function(download) {console.log('Загрузка...'); },  8000);

// window.onload = function() {
//     document.querySelector('#demoPreloader').style.display = 'none';
// };

// const cardsContainer = document.getElementById('cards-container');
// const currentPageSpan = document.getElementById('current-page');
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');

// let currentPage = 1;
// const itemsPerPage = 2;

// async function loadData(page) {
//     const response = await fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places?page=${page}&limit=${itemsPerPage}`);
//     const data = await response.json();
//     return data;
// }

// fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
// .then(res => res.json())
// .then(res => console.log(json))

// function displayCards(data) {
//     cardsContainer.innerHTML = '';
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


// // Фильтр
// function displayCards(data) {
//     cardsContainer.innerHTML = ''; 
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


// // все секции catalog (css) 
// document.addEventListener('DOMContentLoaded', function() {
//     const attractionsContainer = document.getElementById('attractions');
//     attractionsContainer.innerHTML = ''; 
//     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')

//         .then(response => response.json())
//         .then(data => {

//             data.forEach(attraction => {

//                 const attractionElement = document.createElement('div');
//                 attractionElement.className = 'attraction';
//                 attractionElement.textContent = attraction.name;
//                 attractionElement.innerHTML = `
                                    
//                 <div class="search-box">
//                     <button class="btn-search"><i class="fas fa-search"></i></button>
//                     <input class="main__input" placeholder="Найти...">
//                 </div>

//                 <ul class="main__all-sections">
                
//                 <li class="main__card">
//                 <div class="main__container-section">
//                 <img onclick="download" class='containerId__img' src=${attraction.imageUrl}> 
                
//                 <a class="main__search" href="#">${attraction.name}</a>
//                     </li>
//                 </ul>
//                 </div>
//                 <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8a2946d35bd7706e85ae695793af5773de8985ce103013f41d11e145a0344ee3&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
//                 `;

//                 attractionElement.addEventListener('click', () => {
//                     //URL обнов.
//                     const url = new URL(window.location.href);
//                     url.searchParams.set('id', attraction.id);
//                     window.history.pushState({}, '', url);
                    
//                     showDetails(attraction.id);
//                 });
//                 attractionsContainer.appendChild(attractionElement);
//             });







// <section class="filter">
//     <div class="filter__container">
//         <div class="filter__main">
//             <button class="filter__btn" onclick="filterFunction()"><img src="/assets/img/catalog.filter2.png" alt="Img"></button>
//                 <div class="filter__nav-content" id="filter__cont">
//                     <select id="mySelect" class="filter-select" onchange="filterItems()">
//                         <option id="all" value="all">Все категории</option>
//                         <option id="Bla" value="category1">Парки</option>
//                         <option value="category2">Категория 2</option>
//                         <option value="category3">Категория 3</option>
//                     </select>
//                 </div>  
//         </section>






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