var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 12
        
        
            
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 12
            
            
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    }
});

