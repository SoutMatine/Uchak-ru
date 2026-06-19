var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
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

var modalSwiper = new Swiper(".modal-swiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
        el: ".modal-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".modal-button-next",
        prevEl: ".modal-button-prev",
    },
});


