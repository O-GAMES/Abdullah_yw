let swiperTestimonial = new Swiper(".swiper", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true, 
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
  });


const sr = ScrollReveal({
    distance: "50px",
    duration: 2500,
    delay: 110,
    // rest: true
});

// sr.reveal(``, {})

sr.reveal(`#hero-img, .title, .story-text`, { delay: 200, origin: "left"});

// sr.reveal(``, { origin: "top"});


sr.reveal(`#hero-text-p, #hero-text-h4, #hero-text-h1, #about-img`, { origin: "rigth", interval: 100 });

    sr.reveal(`.socil-icon, a, li, .logo, .project_card`, { origin: "bottom", interval: 100 });



let mixerPortfolio = mixitup('.project_container', {
    selectors: {
        target: '.project_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.projects_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('activ_item '))
    this.classList.add('activ_item')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork()))


