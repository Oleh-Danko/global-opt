window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu__links'),
        link = document.querySelectorAll('.menu__link');

    function replacingStyles (e) {
        e.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('menu__links-active');
                hamburger.classList.toggle('hamburger-active');
                document.body.style.overflow = ""; 
            });
        });
    };

    function clickHamburger (e) {
        e.addEventListener('click', () => {
            menu.classList.toggle('menu__links-active');
            hamburger.classList.toggle('hamburger-active');
            if (document.body.style.overflow == "hidden") {
                document.body.style.overflow = "";
            } else {
                document.body.style.overflow = "hidden"
            }
        });
    };

    replacingStyles(link);
    clickHamburger(hamburger);

    new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        // mousewheel: {
        //     sensitivity: 1,
        // },
        centeredSlides: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 700,

        breakpoints: {
            1199: {
                slidesPerView: 3,
                spaceBetween: 100
            },
        }

    });

    //scroll
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView ({
                behavior: "smooth",
                block: "start"               
            });
        });
    }

    //scrollUp
    const offset = 100,
        scrollUp = document.querySelector('.scroll-up'),
        scrollUpSvgPatch = document.querySelector('.scroll-up__svg-path');
        pathLength = scrollUpSvgPatch.getTotalLength();

        scrollUpSvgPatch.style.strokeDasharray = `${pathLength} ${pathLength}`;
        scrollUpSvgPatch.style.transition = 'stroke-dashoffset 20ms';

        const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
        // const getTop = () => window.scrollY || document.documentElement.scrollTop;

        //updateDashoffset
        const updateDashoffset = () => {
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const dashoffset = pathLength - (getTop() * pathLength / height);

            scrollUpSvgPatch.style.strokeDashoffset = dashoffset;
        };

        //onScroll
        window.addEventListener('scroll', () => {
            updateDashoffset();

            if (getTop() > offset) {
                scrollUp.classList.add('scroll-up-active')
            } else {
                scrollUp.classList.remove('scroll-up-active')
            }
        });

        //click
        scrollUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    //scrollUp-hide
    // window.onscroll = () => {
    //     if (window.scrollY > 700) {
    //         pageUp.classList.toggle('pageUp-active');
    //     }
    // };

    const btnMenu = document.querySelectorAll('.click'),
          overlay = document.querySelector('.overlay'),
          close = document.querySelector('.modal__close');

    btnMenu.forEach (item => {
        item.addEventListener('click', () => {
            overlay.style.display = "block";
            document.body.style.overflow = "hidden"; 
        });
    }) ;

    close.addEventListener('click', () => {
        overlay.style.display = "none";
        document.body.style.overflow = ""; 
    });

    overlay.addEventListener('click', (e) => {
        if (e.target == overlay) {
            overlay.style.display = "none";
        }
    });

});

