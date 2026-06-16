function headerMobChange() {

    const headerMob = document.querySelector('.header__row-mob')
    const el1 = document.querySelector('nav')
    const el2 = el1.nextElementSibling

    headerMob.appendChild(el1)
    headerMob.appendChild(el2)

}

function headerDesktopChange() {
    const headerRow = document.querySelector('.header__row')
    const el1 = document.querySelector('nav')
    const el2 = el1.nextElementSibling

    headerRow.appendChild(el1)
    headerRow.appendChild(el2)
}

function checkScreenSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        headerMobChange()
    } else {
        headerDesktopChange()
    }
}

checkScreenSize()



function spaceTop() {
    const header = document.querySelector(".header__row")
    const mainSection = document.querySelector(".main-screen")
    const categoriesRow = document.querySelector(".categories-row")

    let space = header.offsetHeight

    mainSection.style.marginTop = `${space}px`
    categoriesRow.style.top = `${space}px`

}

spaceTop()




function openMobMenu() {
    const header = document.querySelector("header")
    const headerRow = document.querySelector(".header__row")
    const burger = document.querySelector(".burger-menu")
    const menu = document.querySelector(".header__row-mob")

    const close = document.querySelector(".close-menu")

    const darkBg = document.querySelector(".dark-bg")

    let space = headerRow.offsetHeight
    let menuSpace = menu.offsetHeight


    header.style.height = `calc(${space}px + 1px)`

    function openClose() {

        if (menu.classList.contains("active")) {
            menu.style.transform = `translateY(0)`
            header.style.height = `calc(${space}px + ${menuSpace}px + 1px)`
            header.style.transition = `height 0.7s var(--transition-bounce)`


            burger.classList.add("close")
            burger.classList.remove("open")

            darkBg.classList.add("active")


        } else {
            menu.style.transform = `translateY(-101%)`
            header.style.height = `calc(${space}px + 1px)`
            header.style.transition = `height 0.4s var(--transtition-ease-soft)`


            burger.classList.add("open")
            burger.classList.remove("close")

            darkBg.classList.remove("active")
        }


    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        burger.addEventListener("click", () => {
            menu.classList.toggle("active")
            openClose()
        })
        document.addEventListener("click", (e) => {
            if (!header.contains(e.target)) {
                menu.classList.remove("active")
                openClose()
            }
        })
    } else {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active")
        }

        if (darkBg.classList.contains("acitve")) {
            darkBg.classList.remove("active")
        }

        openClose()
    }
}

openMobMenu()


function checkModalIsOpen() {
    const modal = document.querySelector('.modal')
    if (modal.classList.contains("active")) {
        document.querySelector("body").style.overflow = `hidden`
        window.smooth.paused(true);
    } else {
        document.querySelector("body").style.overflow = `auto`
        window.smooth.paused(false);

    }
}

function closeModal() {
    const modal = document.querySelector('.modal')
    const cross = document.querySelector('.modal .modal-cross')

    cross.addEventListener('click', () => {
        modal.classList.remove("active")
        checkModalIsOpen()
    })
}




function openModal() {
    const items = document.querySelectorAll('.product-item')
    const modal = document.querySelector('.modal')
    items.forEach(item => {
        item.addEventListener("click", () => {
            modal.classList.add("active")
            checkModalIsOpen()
        })
    })
}

closeModal()
openModal()

let timeout;
window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        checkScreenSize()
        spaceTop()

        openMobMenu()

    }, 150)
})