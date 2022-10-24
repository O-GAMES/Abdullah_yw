
let icon = document.querySelector(".icon");
let list = document.getElementById("phone-list")

icon.onclick = function () {
    list.classList.toggle("active")
}

// with fetch



 
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://linktr.ee/Abdullah_yw')}`)
.then(
    function(response) {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')

    }).then(function (data) {

        
        let linkTer  = data.contents;
        
for (let i = 0; i < linkTer.length; i++) {

    let myLinks = document.createElement('a');
    let myLinksTitle = linkTer.slice(i, i + 250).split("<")[0].slice(4);
    let myLinksText = document.createTextNode(myLinksTitle);

    if (linkTer.slice(i, i+ 4) === 'rP">') {
        
        myLinks.className = "links";

        myLinks.appendChild(myLinksText)

        document.getElementById('links-cards').appendChild(myLinks)

        myLinks.setAttribute("href", getLinks)
        myLinks.setAttribute("target", "_blank")

        myLinks.style.cssText = `
        padding: 1.5rem;
        box-shadow: rgb(0 0 0 / 3%) 0px 0px 20px 9px;
        display: flex;
        border-radius: 1rem;
        color: var(--second-color);
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        `;

        

    }

    if (linkTer.slice(i, i+ 14) === '<a href="http:') {

        var getLinks = linkTer.slice(i, i + 200).split(`"`)[1].split(' ')[0]

    }
    
}

    })  






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

    sr.reveal(`.socil-icon, .hero, .project_card, .btn, .swiper, .projects_filters, .contact_content, .sponsor, .sponsor-img, .links`, { origin: "bottom", interval: 100 });



let mixerPortfolio = mixitup('.project_container', {
    selectors: {
        target: '.project_card'
    },
    animation: {
        duration: 300
    }
});

// /* Link active work */ 
// const linkWork = document.querySelectorAll('.projects_item')

// function activeWork(){
//     linkWork.forEach(l=> l.classList.remove('activ_item '))
//     this.classList.add('activ_item')
// }

// linkWork.forEach(l=> l.addEventListener('click', activeWork()))


