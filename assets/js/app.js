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

window.addEventListener('resize', checkScreenSize);
