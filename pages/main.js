window.onload = function() {
    document.querySelector('#demoPreloader').style.display = 'none';
};


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    
    function updateSlider() {
        
    const offset = -currentIndex * 500;
    
    slider.style.transform = `translateX(${offset}px)`;

    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevBtn.addEventListener('click', () => {
    
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        
        currentIndex = index;
        updateSlider();
    });
});

updateSlider();
});



const mainPage = document.getElementById('mainPage')
const createMainPage = () => {
    // mainPage.innerHTML = ''

    const page = `
            <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


    <title>CityDiscvoreries</title>
</head>
<body>


    <section class="load">
    <div class='demoPreloader' id='demoPreloader'> -->
    <img src='/assets/img/728.gif' alt='preloader'>
    </div>
    </section>


    <header class="header">
        
        <div class="header__logo">
        <a href="/index.html" class="heder__logo"><img src="/assets/img/logo.svg" alt="img"></a>
    </div>
        <div class="container">
            <div class="header__menu menu">
                <div class="menu__icon">
                    <span></span>
                  </div>
                  <nav class="menu__body">
            <ul class="menu__list">
                <li class="menu__item">
                     <a id='contactBtn' class="menu__link" href="#">Контакты</a> 




                     <!-- /////////////////////// -->
                    
                </li>
                <li class="menu__item">
                    <a class="menu__link"  href="http://127.0.0.1:5500/index.html?page=catalog">Достопримечательности</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="header__texts">
            <div class="header__title">
                <h1>Токио</h1>
            </div>
            <div class="header__text">
                <h2>Ваш ключ к <br> незабываемым <br> приключениям.</h2>
            </div> 
            
        </div>
        </div>
    </header>

    <main id="mainPage">

    </main>
    
    <div class="slider-container">
        <div class="slider">
            <div class="slide"><img src="/assets/img/images.1.svg" alt="Slide 1"></div>
            <div class="slide"><img src="/assets/img/images.2.svg" alt="Slide 2"></div>
            <div class="slide"><img src="/assets/img/images.3.svg" alt="Slide 3"></div>
            <div class="slide"><img src="/assets/img/images.1.svg" alt="Slide 4"></div>
        </div>
        <div class="slider-controls">
            <button class="prev-btn">←</button>
            <div class="pagination">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <button class="next-btn">→</button>
        </div>
    </div>
        
    <section class="visit">
            <div class="visit__section">
                <ul class="visit__box1">
                    <div class="visit__mini-container">
                        <div class="visit__img">
                    <img src="./assets/img/img1.png" class="visit__img" alt="img" width="950px">
                </div>
                    <div class="visit__text-box">
                    <div class="visit__title"><h3>Места которые вы можете посетить:</h3>    </div>
                    <div class="visit__text"><h1>Храм Сенсодзи (浅草寺): Самый старый храм в Токио, построенный в 645 году. Помимо красочных ворот Каминаримон, посетители могут пройти по оживленной улице Накамисе-дори, полной сувенирных лавок и ресторанов, и насладиться тишиной храмового комплекса.</h1></div>  
                        <a href="#" class="visit__btn">Узнать больше</a>
                        
                </div>
            </div>
                </ul>
                <ul class="visit__box2">
                    <div class="visit__mini-container1">
                    <div class="visit__text-box2">
                    <div class="visit__title1"> <h2>Рынок Цукидзи (筑地市场):</h2></div>
                    <div class="visit__text1"><h1>Рынок Цукидзи - это огромный оптовый рынок морепродуктов, расположенный в Токио. Известен своей энергичной атмосферой, свежайшими морепродуктами и знаменитым аукционом тунца. Туристы могут посетить рынок, чтобы полюбоваться на аукцион, попробовать свежий суши и морепродукты, а также купить свежую рыбу, овощи и фрукты.</h1></div>
                    <a href="#" class="visit__btn1">Узнать больше</a>
                </div>
                <div class="visit_img1">
                    <img src="./assets/img/img2.png" class="visit__img2" alt="img" width="950px" >
                </div>
                </div>
            
            </ul>
                <ul class="visit__box3">
                    <div class="visit__mini-container2">
                    <img src="./assets/img/img3.png" alt="img" class="visit__img3" width="950px">
                    <div class="visit__text-box1">
                    <div class="visit__title"><h2>Токийская башня (东京塔 ):</h2></div>
                    <div class="visit__text"><h1>Самое высокое сооружение в Японии, с которого открывается захватывающий панорамный вид на Токио. Посетители могут полюбоваться видом с смотровых площадок на высоте 350 и 450 метров. Известна своей архитектурой, панорамным видом на город и несколькими обзорными площадками.</h1></div>
                    <a href="#" class="visit__btn">Узнать больше</a>
                </div>
            </div>  
            </ul>
            </div>
    </section>

    <section class="map">
           <div class="map__title">
            <h1>Карта Токио</h1>
           </div>   
           <div class="map__map">
            <iframe class="map__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415264.3601562437!2d139.55951292915526!3d35.596829862495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1728894705989!5m2!1sru!2sru" width="1180" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
           </div>
    </section>

    <footer class="footer">
            <div class="footer__box">
                <ul class="footer__contacts">
                    <h1>Контакты:</h1>
                    <div class="aa">
                        <a class="footer__btn" href="http://127.0.0.1:5500/index.html?page=contacts">Подробная информация</a>
                    </div>
                    <li class="footer__contact1">
                        <img src="./assets/img/vol.png" alt="img" class="footer__vol">
                        <h2>8 (906) 076-543-64-61</h2>
                    </li>
                    <li class="footer__contact2">
                        <img src="./assets/img/vklogo.png" alt="img" class="footer__vK">
                        <a href="https://vk.com/@id653067750" class="vk_link">id653067750</a>
                    </li>
                    <li class="footer__contact">
                        <img src="./assets/img/tglogo.png" alt="img" class="footer__tg">
                        <a class="footer__tg" href="https://t.me/Vol0dy_a">Vol0dy_a</a>
                    </li>
                </ul>
            </div>
            <div class="cc">
                <a href="#" class="footer__logo">
                <img src="./assets/img/logo.spotify.png" alt="Img" class="footer__img">
                <img src="/assets/img/logo.inst.png" alt="Img" class="footer__img1">
                <img src="/assets/img/logo.ds.png" alt="Img" class="footer__img2">
            </a>
        </div> 
    </footer>
    <script src="/slider.js"></script>
    <script src="/pages/index.js"></script>
    <script src="/pages/contacts.js"></script>
    <script src="/pages/catalog.js"></script>
</body>
</html>
    `

    mainPage.innerHTML = page

    const contactBtn = document.getElementById('contactBtn');

    contactBtn.addEventListener('click', () => {
        window.location.href = '?page=contacts'
        checkPathAndRenderPage()
    })
}









