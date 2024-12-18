// document.addEventListener('DOMContentLoaded', function() {
//     const loader = document.getElementById('loader');
//     const landmarksContainer = document.getElementById('landmarks');
//     const detailsContainer = document.getElementById('details');

//     // Функция для загрузки данных с сервера
//     function loadLandmarks(url) {
//         showLoader();
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 landmarksContainer.innerHTML = ''; // Очищаем контейнер

//                 data.forEach(landmark => {
//                     const landmarkElement = document.createElement('div');
//                     landmarkElement.className = 'landmark';
//                     landmarkElement.textContent = landmark.name;
//                     landmarkElement.addEventListener('click', () => showDetails(landmark.id));
//                     landmarksContainer.appendChild(landmarkElement);
//                 });

//                 hideLoader();
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 hideLoader();
//             });
//     }

//     // Функция для отображения подробной информации о достопримечательности
//     function showDetails(landmarkId) {
//         showLoader();
//         fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/:endpoint${landmarkId}`)
//             .then(response => response.json())
//             .then(data => {
//                 detailsContainer.innerHTML = `
//                     <h2>${data.name}</h2>
//                     <p>${data.description}</p>
//                     <img src="${data.image}" alt="${data.name}">
//                 `;
//                 hideLoader();
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 hideLoader();
//             });
//     }

//     // Функция для отображения loader
//     function showLoader() {
//         loader.style.display = 'block';
//     }

//     // Функция для скрытия loader
//     function hideLoader() {
//         loader.style.display = 'none';
//     }

//     // Загружаем достопримечательности при загрузке страницы
//     loadLandmarks('https://67320e867aaf2a9aff134756.mockapi.io/api/1/');

//     // Пример фильтрации, сортировки, поиска и пагинации
//     const filterInput = document.createElement('input');
//     filterInput.type = 'text';
//     filterInput.placeholder = 'Фильтр по имени';
//     filterInput.addEventListener('input', function() {
//         const filterValue = filterInput.value.toLowerCase();
//         loadLandmarks(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks?name=${filterValue}`);
//     });
//     document.body.appendChild(filterInput);

//     const sortSelect = document.createElement('select');
//     sortSelect.innerHTML = `
//         <option value="">Сортировка</option>
//         <option value="name">По имени</option>
//         <option value="id">По ID</option>
//     `;
//     sortSelect.addEventListener('change', function() {
//         const sortValue = sortSelect.value;
//         loadLandmarks(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks?sortBy=${sortValue}`);
//     });
//     document.body.appendChild(sortSelect);

//     const pagination = document.createElement('div');
//     pagination.innerHTML = `
//         <button id="prev">Предыдущая</button>
//         <button id="next">Следующая</button>
//     `;
//     let currentPage = 1;
//     pagination.querySelector('#prev').addEventListener('click', function() {
//         if (currentPage > 1) {
//             currentPage--;
//             loadLandmarks(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks?page=${currentPage}&limit=10`);
//         }
//     });
//     pagination.querySelector('#next').addEventListener('click', function() {
//         currentPage++;
//         loadLandmarks(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks?page=${currentPage}&limit=10`);
//     });
//     document.body.appendChild(pagination);
// });




// document.addEventListener('DOMContentLoaded', function() {
//     const loader = document.getElementById('loader');
//     const landmarksContainer = document.getElementById('landmarks');
//     const detailsContainer = document.getElementById('details');
//     const paginationContainer = document.getElementById('pagination');

//     let currentPage = 1;
//     const itemsPerPage = 2; // Количество элементов на странице

//     // Функция для загрузки данных с сервера
//     function loadLandmarks(page) {
//         showLoader();
//         fetch(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks?page=${page}&limit=${itemsPerPage}`)
//             .then(response => response.json())
//             .then(data => {
//                 landmarksContainer.innerHTML = ''; // Очищаем контейнер

//                 data.forEach(landmark => {
//                     const landmarkElement = document.createElement('div');
//                     landmarkElement.className = 'landmark';
//                     landmarkElement.textContent = landmark.name;
//                     landmarkElement.addEventListener('click', () => showDetails(landmark.id));
//                     landmarksContainer.appendChild(landmarkElement);
//                 });

//                 hideLoader();
//                 generatePagination(data.length);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 hideLoader();
//             });
//     }

//     // Функция для отображения подробной информации о достопримечательности
//     function showDetails(landmarkId) {
//         showLoader();
//         fetch(`https://64f732e69d775408495348ae.mockapi.io/api/v1/landmarks/${landmarkId}`)
//             .then(response => response.json())
//             .then(data => {
//                 detailsContainer.innerHTML = `
//                     <h2>${data.name}</h2>
//                     <p>${data.description}</p>
//                     <img src="${data.image}" alt="${data.name}">
//                 `;
//                 hideLoader();
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 hideLoader();
//             });
//     }

//     // Функция для отображения loader
//     function showLoader() {
//         loader.style.display = 'block';
//     }

//     // Функция для скрытия loader
//     function hideLoader() {
//         loader.style.display = 'none';
//     }

//     // Функция для генерации пагинации
//     function generatePagination(totalItems) {
//         const totalPages = Math.ceil(totalItems / itemsPerPage);
//         paginationContainer.innerHTML = ''; // Очищаем контейнер пагинации

//         for (let i = 1; i <= totalPages; i++) {
//             const button = document.createElement('button');
//             button.textContent = i;
//             button.addEventListener('click', () => {
//                 currentPage = i;
//                 loadLandmarks(currentPage);
//             });
//             paginationContainer.appendChild(button);
//         }
//     }

//     // Загружаем достопримечательности при загрузке страницы
//     loadLandmarks(currentPage);
// });



// async function fetchAttractions() {
//   const attractionsContainer = document.getElementById('attractions');
//   fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//   .then((response) => response.json())
//   .then(data => {   
//     data.forEach(attraction => {
//       const attractionElement = document.createElement('div');
//       attractionElement.addEventListener('click', () => showDetails(attraction));
//       attractionElement.innerHTML = `
//            <div class="main__container-section">
//           <li class="main__card">
//           <h1 class="main__card">${attraction.name}</h1>
//           <a href="#" onclick="openModal()" class="main__button">${attraction.button}</a>
//           <img class="main__img" src="${attraction.imageUrl}" alt="Img">
//           <p class="main__info">${attraction.description}</p>
//           <p class="main__info"><strong>Местоположение:</strong>${attraction.location}</p>
          
//           </li>
//           </div>
//       `;
//       attractionsContainer.appendChild(attractionElement);
      
//   });
// })  
// }
// //   function showDetails(attraction) {
// //     detailsContainer.innerHTML = `
// //         <h2>${attraction.name}</h2>
// //         <p>${attraction.description}</p>
      
// //     `;
// //   }

  
// fetchAttractions();

// //   div id='dama' innerHTML



// document.addEventListener('DOMContentLoaded', function() {
//   const attractionsContainer = document.getElementById('attractions');

//   fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
//       .then(response => response.json())
//       .then(data => {
//           data.forEach(attraction => {
//               const attractionElement = document.createElement('div');
//               // attractionElement.textContent = 'Пожалуйста выведись!(';
//               // let parent = document.getElementById('attraction')
//               // parent.appendChild(newDiv)
//               attractionElement.className = 'attraction';
//               attractionElement.textContent = attraction.name;
//               attractionElement.addEventListener('click', () => {
//                   // URL
//                   const url = new URL(window.location.href);
//                   url.searchParams.set('id', attraction.id);
//                   window.history.pushState({}, '', url);
                  

//                   showDetails(attraction.id);
//               });
//               attractionsContainer.appendChild(attractionElement);
//           });

//           // query
//           const attractionId = new URLSearchParams(window.location.search).get('id');
//           if (attractionId) {
//               showDetails(attractionId);
//           }
//       })
//       .catch(error => console.error('Ошибка при загрузке данных:', error));

//   function showDetails(attractionId) {
//       let isloading = true
//       fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`).finally(function () {
//           isloading = false
//       })
//           .then(response => response.json())
//           .then(attraction => {
//               const detailsContainer = document.getElementById('loader');
//               detailsContainer.innerHTML = `
//               <div id='myModal' class='modal'
//                   <h1>${attraction.description}</h1>
//                   <img src=${attraction.imageUrl}>
//                   <img src=${attraction.coord_x}>
//                   <img src=${attraction.coord_y}>
//                   <h2>${attraction.other}</h2>
//                   </div>
//               `;
//               window.onload = function() {
// changeLanguage();
// };
//               //карта map
//               const map = new google.maps.Map(document.getElementById('map'), {
//                   center: { lat: attraction.coord_x, lng: attraction.coord_y},
//                   zoom: 15
//               });

//               new google.maps.Marker({
//                   position: { lat: attraction.coord_x, lng: attraction.coord_y},
//                   map: map,
//                   title: attraction.name
//               });
//           })
//           .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
//   }
// });




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
// const cardsContainer = document.getElementById('cards-container');
// const currentPageSpan = document.getElementById('current-page');
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');

// let currentPage = 1;
// const itemsPerPage = 2; 


// async function loadData(page) {
//     fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places`);
//     const data = await response.json();
//     return data;
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


// dwdws 

    // function initMaps() {
    //     fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places')
    //       .then(response => response.json())
    //       .then(data => {
    //         const sections = [
    //           { mapId: 'map-historical', category: 'historical' },
    //           { mapId: 'map-natural', category: 'natural' },
    //           // Add more sections as needed
    //         ];
      
    //         sections.forEach(section => {
    //           const landmarks = data.filter(landmark => landmark.category === section.category);
    //           initializeMap(section.mapId, landmarks);
    //         });
    //       })
    //       .catch(error => console.error('Error fetching data:', error));
    //   }
      
    //   function initializeMap(mapId, landmarks) {
    //     const mapContainer = document.getElementById(mapId);
    //     if (!mapContainer) return;
      
    //     const map = new google.maps.Map(mapContainer, {
    //       center: { lat: 0, lng: 0 },
    //       zoom: 2
    //     });
      
    //     landmarks.forEach(landmark => {
    //       const marker = new google.maps.Marker({
    //         position: { lat: landmark.latitude, lng: landmark.longitude },
    //         map: map,
    //         title: landmark.name
    //       });
      
    //       const infowindow = new google.maps.InfoWindow({
    //         content: `<h3>${landmark.name}</h3><p>${landmark.description}</p>`
    //       });
      
    //       marker.addListener('click', () => {
    //         infowindow.open(map, marker);
    //       });
    //     });
    //   }




    // document.addEventListener("DOMContentLoaded", function() {
    //   const apiUrl1 = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
    //   const attractionsContainer = document.getElementById('attractions');
    //   const categoryFilter = document.getElementById('category');
  
    //   let attractionsData = [];
  
      // Функция для отображения карточек
      // function displayAttractions(data) {
      //     attractionsContainer.innerHTML = '';
      //     data.forEach(attraction => {
      //         const card = document.createElement('div');
      //         card.className = 'card';
      //         card.innerHTML = `
      //             <h3>${attraction.name}</h3>
      //             <p>${attraction.description}</p>
      //         `;
      //         attractionsContainer.appendChild(card);
      //     });
      // }
  
      // Получение данных с MockAPI
    //   function showDetails(attractionId) {
    //     let isLoading = true;
    
    //     fetch(`https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/${attractionId}`)
    //         .then(response => response.json())
    //         .then(attraction => {
    //             const detailsContainer = document.getElementById('attractions');
    
    //             detailsContainer.innerHTML = `
    //                 <div class="containerId">
    //                     <div class='containerId__title'>
    //                         <h1>${attraction.name}</h1>
    //                     </div>
    //                     <img class='containerId__img' src=${attraction.imageUrl}>
    //                     <h2 class='containerId__text'>${attraction.description}</h2>
    //                     <div id="map"></div>
    //                 </div>
    //             `;
    
    //             // Инициализация карты
    //             ymaps.ready(function() {
    //                 const map = new ymaps.Map('map', {
    //                     center: [attraction.latitude, attraction.longitude],
    //                     zoom: 15
    //                 });
    
    //                 const placemark = new ymaps.Placemark([attraction.latitude, attraction.longitude], {
    //                     balloonContent: attraction.name
    //                 });
    
    //                 map.geoObjects.add(placemark);
    //             });
    //         })
    //         .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error))
    //         .finally(() => {
    //             isLoading = false;
    //         });
    // }
    

    
    // // Пример вызова функции showDetails с ID достопримечательности
    // showDetails(1);


    // const map1 = document.getElementById('vs1')




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

    

    
    // window.onload = function() {
    //     document.querySelector('#demoPreloader').style.display = 'none';
    // };

// const all = document.getElementById('burger_elements')

// all.addEventListener('click') {
//     displayCards
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const commentInput = document.getElementById('commentInput');
//     const addCommentBtn = document.getElementById('addCommentBtn');
//     const commentsContainer = document.getElementById('comments');
//     // const commentInputDescription = document.getAnimations.getElementById('commentInputDescription')    



//     const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';

//     // Загрузка комментариев при загрузке страницы
//     loadComments();

//     // Обработчик события для добавления комментария
//     addCommentBtn.addEventListener('click', function () {
//         const commentText = commentInput.value.trim();
//         if (commentText) {
//             addComment(commentText);
//             commentInput.value = '';
//         }
//     });

//     // Добавление комментария
//     async function addComment(commentText) {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: commentText })
//         });

//         if (response.ok) {
//             loadComments();
//         } else {
//             alert('Ошибка при добавлении комментария');
//         }
//     }

//     // Загрузка комментариев
//     async function loadComments() {
//         const response = await fetch(apiUrl);
//         const comments = await response.json();
//         displayComments(comments);
//     }

//     // Отображение комментариев
//     function displayComments(comments) {
//         commentsContainer.innerHTML = '';
//         comments.forEach(comment => {
//             const commentElement = document.createElement('div');
//             commentElement.className = 'comment';
//             commentElement.innerHTML = `
//                 <p>${comment.text}</p>
//                 <h1>${comment.description}</h1>
//                 <h1>${comment.text}</h1>
//                 <button class="delete-btn" data-id="${comment.id}">Удалить</button>
//             `;
//             commentsContainer.appendChild(commentElement);
//         });

    

//         // Добавление обработчиков для кнопок удаления
//         const deleteButtons = document.querySelectorAll('.delete-btn');
//         deleteButtons.forEach(button => {
//             button.addEventListener('click', function () {
//                 const commentId = button.getAttribute('data-id');
//                 deleteComment(commentId);
//             });
//         });
//     }



//     // Удаление комментария
//     async function deleteComment(commentId) {
//         const response = await fetch(`${apiUrl}/${commentId}`, {
//             method: 'DELETE'
//         });

//         if (response.ok) {
//             loadComments();
//         } else {
//             alert('Ошибка при удалении комментария');
//         }
//     }
// });









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

    // Обработчик удаления отзыва
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

    // Загружаем отзывы при загрузке страницы
    loadReviews();
});







document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';
    const attractionsContainer = document.getElementById('attractions');
    const attractionsContainer1 = document.getElementById('attractions1');
    const categoryFilter = document.getElementById('category');
    const searchInput = document.getElementById('searchInput');
    const output = document.getElementById('output');
    const userInput = document.getElementById('inputComment');

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
        attractionsContainer1.innerHTML = '';
        data.forEach(attraction => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <a class="filter-title" href="http://127.0.0.1:5500/index.html?page=catalog&id=${attraction.id}">
                    <h3>${attraction.name}</h3>
                </a>
                <p>${attraction.description}</p>
                <img onclick="download" class='containerId__img' src='${attraction.imageUrl}'>
            `;
            card.addEventListener('click', () => {
                const url = new URL(window.location.href);
                url.searchParams.set('id', attraction.id);
                window.history.pushState({}, '', url);
                showDetails(attraction.id);
            });
            attractionsContainer.appendChild(card);
            attractionsContainer1.appendChild(card.cloneNode(true));
        });
    }

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
                        <div class='containerId__map'>${attraction.location}</div>
                        <button id='comment'>Оставить отзыв</button>
                        <p>${attraction.comments}</p>
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
                    // Логика для добавления комментария
                });
            })
            .catch(error => console.error('Ошибка при загрузке данных о достопримечательности:', error));
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

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            const filteredData = attractionsData.filter(attraction => attraction.name.toLowerCase().includes(query.toLowerCase()));
            displayAttractions(filteredData);
        } else {
            displayAttractions(attractionsData);
        }
    });

    userInput.addEventListener('input', function() {
        output.textContent = userInput.value;
    });

    // Загрузка данных при загрузке страницы
    fetchAttractions();

    // Обработка параметра id в URL
    const attractionId = new URLSearchParams(window.location.search).get('id');
    if (attractionId) {
        showDetails(attractionId);
    }
});