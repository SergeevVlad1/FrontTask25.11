window.onload = function() {
  document.querySelector('#demoPreloader').style.display = 'none';
};

async function ContactsPage() {
    mainPage.innerHTML = ''
    let attractions = []
    const resp = await fetch('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/id')
    attractions = resp.data

    const page = `
    <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/contacts.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=LXGW+WenKai+TC:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <title>Contact/CityDiscvoreries</title>
</head>
<body>

    <section class="load">
        <div class='demoPreloader' id='demoPreloader'>
            <img src='/assets/img/728.gif' alt='preloader'>
        </div>
    </section>


    <header class="header">
       
        <div class="header__logo">
            <a href="/index.html"><img src="/assets/img/black.logo.png" class="header__logo" alt="img"></a>
        </div>
        <div class="container">
            <div class="header__menu menu">
                div class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
            <nav class="header__nav">
                <li class="header__link">
                    <a href="/index.html">На главную</a>
                </li>
                <li class="header__link">
                    <a href="/catalog.html">Достопримечательности</a>
                </li>
                </nav>
                </div>
            </div> 

            <!-- <div class="header__mini-background">
                <img src="/assets/img/contacts.back.jpg" alt="Img" height="300px" width="1900px">
            </div>   -->
            
    </header>





    


    <section class="main">
        <div class="wrapper">
            <div class="main__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415264.3601562437!2d139.55951292915526!3d35.596829862495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1728894705989!5m2!1sru!2sru" width="1920px" width1="375px" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
                <div class="about__title-box">
                    <h1>Немного о нас:</h1>
                    <h2> <font size="4px" >Наша</font>  команда состоит из профессионалов в области туризма, журналистики и местных жителей, которые знают город как свои пять пальцев. Мы постоянно исследуем новые места и обновляем информацию, чтобы вы всегда получали самые свежие и актуальные данные. <br>  <font size="4px" >Наша</font> команда состоит из профессионалов в области туризма, журналистики и местных жителей, которые знают город как свои пять пальцев. Мы постоянно исследуем новые места и обновляем информацию, чтобы вы всегда получали самые свежие и актуальные данные.</h2>
                </div>
                <div class="about__contact-text-box">
                    <h1>Контакты</h1>
                    
                    <div class="about__img-txt">
                        <div class="about__img-txt1">
                        
                    
                    <div class="about__img-txt1">
                        <img src="/assets/img/icons.mob.png" alt="Img" class="about__img1">
                        <a href="#" class="ab">+7(9)777-77-77</a>
                        
                        <div class="about__img-txt2">
                            <img src="/assets/img/icons.mail.png" alt="Img" class="about__img2">
                            <a href="#" class="ab">svv.kaz@mail.ru</a>
                        <div class="about__img-txt3">
                            <img src="/assets/img/icons.tg.png" alt="Img" class="about__img3">
                            <a href="#" class="ab">@Volody_a</a>
                            <div class="about__img-txt4">
                                <img src="/assets/img/icons.vk.png" alt="Img" class="about__img4">
                                <a href="#" class="ab">id:653067750</a>
                            </div>
                                </div>
                                </div>
                        </div>
                        
                        <div class="about__qst-box">
                            <h1 class="about__title">Ответы на популярные вопросы</h1>
                            <div class="about__all-texts">
                            <div class="about__text-1">
                                <h1>Как найти жилье по доступной цене?</h1>
                                <p>Чтобы найти жилье по доступной цене, бронируйте заранее, используйте поисковые системы для сравнения цен, выбирайте недорогие отели или хостелы, рассматривайте варианты проживания в пригороде или вдали от центра города.</p>  
                            </div>
                            <div class="about__text-2">
                                <h1>Какая валюта используется в Японии?</h1>
                                <p>Иена (JPY)</p>
                            </div>
                            <div class="about__text-3">
                                <h1>Где обменять валюту?</h1>
                                <p>Валюту можно обменять в банках, обменных пунктах, в аэропортах или в отелях. </p>
                            </div>
                            <div class="about__text-4">
                                <h1>Какие меры предосторожности нужно соблюдать?</h1>
                                <p> Будьте осторожны с деньгами, документами, не носите с собой крупные суммы наличных, храните документы в безопасном месте. </p>
                            </div>
                        </div>
                                
                           

                        <!-- <button id="myBtn">Сообщение:</button> -->

                        <div id="myModadel" class="modal">
                        
                        
                          <div class="modal-content">
                            <span class="close">&times;</span>
                            <div class="modal__input-title1">
                            <input type="text"  value size="40" class="modal__input_title"  placeholder="Ваше имя">
                            <input type="email"  value size="40" class="modal__input_title"  placeholder="Ваша почта">
                            <input type="text"  value size="40" class="modal__input_title1"  placeholder="Сообщение">
                        </div>
                          </div>
                        
                        </div>


        <style>
        body1 {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        }
            
        .open-modal-btn {
        background-color: #333;
        color: white;
        position: relative;
        left: 225px;
        top: 10px;
        padding: 15px 20px;
        border: none;
        align-items: center;
        max-width: 220px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-size: 15px;
        transition: background-color 0.3s ease;
        }
                    
        .open-modal-btn:hover {
            background-color: #45a049;
            }
                    
    .modal {
         display: none;
         position: fixed;
        z-index: 1;
         left: 0;
         top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
                            }
                    
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
         width: 80%;
         max-width: 600px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
        }
            
    .close-modal-btn {
        color: #aaa;
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
                    
                            .close-modal-btn:hover,
                            .close-modal-btn:focus {
                                color: #000;
                                text-decoration: none;
                            }
                        </style>

 
 <button class="open-modal-btn" onclick="openModal()">Открыть модальное окно</button>


 <div id="myModal" class="modal">
     <div class="modal-content">
         <span class="close-modal-btn" onclick="closeModal()">&times;</span>
         <h2>Если вам нужно помощь, не стесняйтесь и заполните модальное окно</h2>
         <input type="text"  value size="40" class="modal__input_title"  placeholder="Ваше имя">
                            <input type="email"  value size="40" class="modal__input_title"  placeholder="Ваша почта">
                            <input type="text"  value size="40" class="modal__input_title1"  placeholder="Сообщение">

    <button class="success-btn" onclick="showSuccessMessage()">Отправить</button>
     </div>
 </div>

                            
    </div>
     

    <section class="footer">
        
        <div class="footer__box">
            <ul class="footer__contacts">
                <img src="/assets/img/black.logo.png" alt="img">
            </ul>
        </div>
        
        <div class="cc">
            <a href="#" class="footer__logo">
            <img src="./assets/img/logo.spotify.png" alt="Img" class="footer__img">
            <img src="/assets/img/logo.inst.png" alt="Img" class="footer__img1">
            <img src="/assets/img/logo.ds.png" alt="Img" class="footer__img2">
        </a>
    </div>
    <div class="footer__text">
    <h1>© 2024 SityDiscoverires. All Rights Reserved. Design by @Vol0dy_a</h1>\
</div>
</section>
    `

    mainPage.innerHTML = page

    const catalogBtn = document.getElementById('catalogBtn')

    catalogBtn.addEventListener('click', () => {
        window.location.href = '?page=catalog'
        checkPathAndRenderPage()
    })
}