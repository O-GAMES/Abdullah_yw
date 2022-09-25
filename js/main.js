
let icon = document.querySelector(".icon");
let list = document.getElementById("phone-list")

icon.onclick = function () {
    list.classList.toggle("active")
}


let swiperTestimonial = new Swiper(".swiper", {
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
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
    duration: 3000,
    delay: 110,
    // rest: true
});

// sr.reveal(``, {})

sr.reveal(`#hero-img, .title, .story-text, .contact_card, .copyright, .footer-socil-icon`, { interval: 100, origin: "left"});

// sr.reveal(``, { origin: "top"});


sr.reveal(`#hero-text-p, #hero-text-h4, #hero-text-h1, #about-img, .text-title, .contact_form, .contact_title`, { origin: "rigth", interval: 100 });

    sr.reveal(`.socil-icon, .hero, .project_card, .btn, .swiper, .projects_filters, .contact_content, .sponsor, .sponsor-img`, { origin: "bottom", interval: 100 });



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


