document.addEventListener("DOMContentLoaded", function (){

    /*----------------------------------------- header -----------------------------------------*/

    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');

        if (window.scrollY > 0) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const menuIcon = document.querySelector('.nav-menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const removeMenuButton = document.querySelector('.nav-menu-remove');
  
    menuIcon.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
  
    removeMenuButton.addEventListener('click', function() {
      navMenu.classList.remove('open');
    });
      

    /*----------------------------------------- banner -----------------------------------------*/

    const banners = document.querySelectorAll(".banner");
    let currentIndex = 0;
    
    function showNextBanner() {
        banners[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].classList.add("active");
    }
    setInterval(showNextBanner, 5000);

    /*----------------------------------------- banner mobile-----------------------------------------*/

    const bannersMobile = document.querySelectorAll(".banner-mobile");
    let currentIndexMobile = 0;
    
    function showNextBannerMobile() {
        bannersMobile[currentIndexMobile].classList.remove("active");
        currentIndexMobile = (currentIndexMobile + 1) % bannersMobile.length;
        bannersMobile[currentIndexMobile].classList.add("active");
    }
    setInterval(showNextBannerMobile, 5000);


    /*----------------------------------------- arrivals -----------------------------------------*/


    document.querySelectorAll('.arrivals-product').forEach((item, index)=>{
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    const swiper = new Swiper('.arrivals-wrapper', {

        loop: true,
        grabCursor: true,
        spaceBetween: 15,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 5,
            }
        }
    });
    
    /*----------------------------------------- search -----------------------------------------*/

    function setupToggle() {
        
        var md = window.matchMedia("(max-width: 1024px)").matches;
        var iconId = md ? "#search-menu-icon" : "#search-icon";

        document.querySelector(iconId).addEventListener('click', function () {
            document.querySelector('#search-panel').style.display = 'block';
        
            const categories = [
                { image: './prod-1.JPG', name: 'Drop Shoulder' },
                { image: './prod-2.JPG', name: 'Baggy Joggers' },
                { image: './prod-3.JPG', name: 'Baggy Shirts' },
                { image: './prod-4.JPG', name: 'Cargo Pants' },
                { image: './prod-5.JPG', name: 'Head Wear' },
                { image: './prod-6.JPG', name: 'Baggy Shorts' }
            ];
        
            const searchContent = document.querySelector('.search-content');
        
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('search-category');
            
                categoryDiv.innerHTML = `
                    <div class="search-category">
                        <img src="${category.image}" width="200" height="250">
                        <h2>${category.name}</h2>
                    </div>`;
            
                searchContent.appendChild(categoryDiv);
            }
        });
    }

    setupToggle();
    window.addEventListener('resize', setupToggle);

    document.querySelector('#search-close').addEventListener('click', function () {
        document.querySelector('#search-panel').style.display = 'none';
        document.querySelector('.search-content').innerHTML = '';
    });

    window.onclick = function (event) {
        if (event.target == document.querySelector('#search-panel')) {
            document.querySelector('#search-panel').style.display = 'none';
        }
    };

    /*----------------------------------------- cart -----------------------------------------*/

    document.getElementById("cart-icon").addEventListener("click", function () {
        document.getElementById("cart-panel").classList.toggle("cart-open");
    });

    document.getElementById("cart-menu-icon").addEventListener("click", function () {
        document.getElementById("cart-panel").classList.toggle("cart-open");
    });

    document.getElementById("cart-close").addEventListener("click", function () {
        navMenu.classList.remove('open');
        document.getElementById("cart-panel").classList.remove("cart-open");
    });

    /*----------------------------------------- log -----------------------------------------*/

    document.getElementById("log-icon").addEventListener("click", function () {
        document.getElementById("log-panel").classList.toggle("log-open");
    });

    document.getElementById("log-menu-icon").addEventListener("click", function () {
        document.getElementById("log-panel").classList.toggle("log-open");
    });

    document.getElementById("log-close").addEventListener("click", function () {
        navMenu.classList.remove('open');
        document.getElementById("log-panel").classList.remove("log-open");
    });

    /*----------------------------------------- sign -----------------------------------------*/

    document.getElementById("sign-in").addEventListener("click", function () {
        document.getElementById("log-panel").classList.remove("log-open");
        document.getElementById("sign-panel").classList.toggle("sign-open");
    });

    document.getElementById("sign-close").addEventListener("click", function () {
        document.getElementById("sign-panel").classList.remove("sign-open");
    });

    /*----------------------------------------- reset email -----------------------------------------*/

    document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("log-panel").classList.remove("log-open");
        document.getElementById("sign-panel").classList.remove("sign-open");
        document.getElementById("reset-panel").classList.toggle("reset-open");
    });

    document.getElementById("reset-close").addEventListener("click", function () {
        document.getElementById("reset-panel").classList.remove("reset-open");
    });

    /*----------------------------------------- reset link -----------------------------------------*/

    document.getElementById("reset-link").addEventListener("click", function () {
        document.getElementById("log-panel").classList.remove("log-open");
        document.getElementById("sign-panel").classList.remove("sign-open");
        document.getElementById("reset-panel").classList.remove("reset-open");
        document.getElementById("reset-link-panel").classList.toggle("reset-link-open");
    });

    document.getElementById("reset-link-close").addEventListener("click", function () {
        document.getElementById("reset-link-panel").classList.remove("reset-link-open");
    });

});
