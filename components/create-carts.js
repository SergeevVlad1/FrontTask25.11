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
