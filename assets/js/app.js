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

    const nav = document.querySelector(".nav__row")

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


    nav.addEventListener("click", function (e) {
        if (this.contains(e.target) && e.target !== this) {
            menu.classList.remove("active")
            openClose()
        }
    })

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
        // window.smooth.paused(true);
    } else {
        document.querySelector("body").style.overflow = `auto`
        // window.smooth.paused(false);

    }
}

function closeModal() {
    const modal = document.querySelector('.modal')
    const cross = document.querySelector('.modal .modal-cross')

    cross.addEventListener('click', () => {
        modal.classList.remove("active")
        checkModalIsOpen()
    })

    modal.addEventListener("click", function (e) {
        if (this.contains(e.target) && e.target == this) {
            modal.classList.remove("active")
            checkModalIsOpen()
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("active")
            checkModalIsOpen()
        }
    })

}




function openModal() {
    const items = document.querySelectorAll('.product-item')
    const modal = document.querySelector('.modal')

    const dropdownMenu = document.querySelector('.dropdown-menu')

    items.forEach(item => {
        item.addEventListener("click", () => {
            modal.classList.add("active")
            dropdownMenu.style.zIndex = `15`
            checkModalIsOpen()
        })
    })
}

closeModal()
openModal()

function cookie() {
    const cookie = document.querySelector(".cookie")
    window.addEventListener("load", () => {
        setTimeout(() => {
            cookie.classList.add("none")
        }, 1000)
    })
}

cookie()

// document.querySelectorAll('.nav-item').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault()
//         const header = document.querySelector('header')

//         const target = this.getAttribute("href")
//         const targetEl = document.querySelector(target)

//         if (targetEl) {
//             const headerHeight = header.offsetHeight

//             const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight

//             window.scrollTo({
//                 top: targetPos,
//                 behavior: 'smooth'
//             })
//         }
//     })
// })



function scrollPadding() {
    const html = document.querySelector('html')
    const headerHeight = document.querySelector('header').offsetHeight

    // html.style.scrollPaddingTop = `calc(${headerHeight}px + var(--space-5))`

    // if (window.matchMedia('(max-width: 768px)').matches) {
    //     html.style.scrollPaddingTop = `calc(${headerHeight}px + var(--space-5))`
    // }
}


function activeAnchor() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Удаляем active у всех пунктов меню
                navItems.forEach(item => item.classList.remove('active'));

                // Находим соответствующий nav-item
                // Ищем ссылку внутри nav-item, у которой href совпадает с #id секции
                const activeItem = document.querySelector(
                    `.nav-item a[href="#${entry.target.id}"]`
                );

                if (activeItem) {
                    activeItem.closest('.nav-item').classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.9 // 50% блока должно быть видноx`
    });

    sections.forEach(section => observer.observe(section));
}

activeAnchor()





function categoryAnchor() {
    document.querySelectorAll('.categories-row .btn').forEach(button => {
        button.addEventListener('click', function () {
            const categoryId = this.dataset.category

            const targetEl = document.getElementById(categoryId)

            const container = document.querySelector('.category-products')


            const headerHeight = document.querySelector('header').offsetHeight
            if (window.matchMedia('(max-width: 992px)').matches) {
                const headerHeight = document.querySelector('header').offsetHeight
                const categoriesRowHeight = document.querySelector('.categories-row').offsetHeight
                const targetRect = targetEl.getBoundingClientRect();
                const offsetPosition = targetRect.top + window.pageYOffset - headerHeight - categoriesRowHeight
                window.scrollTo({
                    behavior: 'smooth',
                    top: offsetPosition,
                })
            } else {

                if (targetEl && container) {
                    const containerRect = container.getBoundingClientRect()
                    const targetRect = targetEl.getBoundingClientRect()

                    const scrollOffset = container.scrollTop + (targetRect.top - containerRect.top)


                    container.scrollTo({
                        top: scrollOffset,
                        behavior: 'smooth'
                    })
                }
            }
        })
    })
}

categoryAnchor()



function categorySelect() {
    if (window.matchMedia('(min-width: 992px)').matches) {
        const categoryBtns = document.querySelectorAll('.categories-row .btn')
        const categoryEl = document.querySelectorAll('.products__wrapper')

        categoryBtns.forEach(button => {
            button.addEventListener('click', function () {
                const categoryId = this.dataset.category
                const targetEl = document.getElementById(categoryId)

                categoryBtns.forEach(otherBtns => {
                    otherBtns.classList.remove("active")
                })

                categoryEl.forEach(otherEl => {
                    otherEl.classList.remove("active")
                })

                button.classList.add("active")

                targetEl.classList.add('active')
            })
        })
    } else {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY + 250;
            let found = false;

            // Находим все блоки с id, которые начинаются на "category"
            document.querySelectorAll('[id^="category"]').forEach(block => {
                const blockTop = block.offsetTop;
                const blockBottom = blockTop + block.offsetHeight;
                const blockId = block.id;

                if (scrollPosition >= blockTop && scrollPosition < blockBottom) {
                    // Находим кнопку с таким же data-category
                    const targetButton = document.querySelector(
                        `.btn[data-category="${blockId}"]`
                    );

                    if (targetButton && !targetButton.classList.contains('active')) {
                        // Убираем active у всех кнопок
                        document.querySelectorAll('.btn.active')
                            .forEach(btn => btn.classList.remove('active'));

                        // Добавляем active на найденную кнопку
                        targetButton.classList.add('active');
                    }
                    found = true;
                }
            });

            // Если блок не найден — убираем active
            if (!found) {
                document.querySelectorAll('.btn.active')
                    .forEach(btn => btn.classList.remove('active'));
            }

            const activeButton = document.querySelector('.categories-row .btn.active');
            const container = document.querySelector('.categories-row');

            if (activeButton && container) {
                const buttonLeft = activeButton.offsetLeft;
                const containerWidth = container.offsetWidth;
                const buttonWidth = activeButton.offsetWidth;

                const scroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2)

                container.scrollTo({
                    left: scroll,
                    behavior: 'smooth'
                });
            }
        });


    }
}

categorySelect()


function dropdownMenu() {
    const dropdown = document.querySelector('.dropdown-menu')

    document.querySelectorAll('.dropdown').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const productId = this.dataset.productId;
            const rect = this.getBoundingClientRect();

            const dropdownHeight = dropdown.offsetHeight || 60; // Замените на реальную высоту
            const dropdownWidth = dropdown.offsetWidth || 60;   // Замените на реальную ширину

            // Проверяем доступное место снизу и сверху
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            // Вычисляем позицию по вертикали
            let topPosition;
            if (spaceBelow >= dropdownHeight) {
                // Если снизу достаточно места - показываем вниз
                topPosition = rect.bottom + window.scrollY;
            } else if (spaceAbove >= dropdownHeight) {
                // Если снизу не хватает, но сверху есть место - показываем вверх
                topPosition = rect.top + window.scrollY - dropdownHeight;
            } else {
                // Если места нет ни сверху, ни снизу - показываем с приоритетом вниз
                // и уменьшаем размер меню (или добавляем скролл)
                topPosition = Math.max(10, rect.bottom + window.scrollY);
                dropdown.style.maxHeight = (window.innerHeight - 20) + 'px';
                dropdown.style.overflowY = 'auto';
            }

            // Вычисляем позицию по горизонтали (чтобы не выходило за правый край)
            let leftPosition = rect.left + window.scrollX;
            if (leftPosition + dropdownWidth > window.innerWidth) {
                leftPosition = window.innerWidth - dropdownWidth - 10;
            }
            if (leftPosition < 10) {
                leftPosition = 10;
            }

            // Применяем позиционирование
            dropdown.style.top = topPosition + 'px';
            dropdown.style.left = leftPosition + 'px';

            // Переключаем видимость
            const isOpen = dropdown.classList.contains('active') && activeProductId === productId;
            dropdown.classList.toggle('active', !isOpen);
            activeProductId = isOpen ? null : productId;

            // Сбрасываем ограничения, если меню закрывается
            if (isOpen) {
                dropdown.style.maxHeight = '';
                dropdown.style.overflowY = '';
            }
        });
    });

    // Закрываем при клике вне dropdown
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !e.target.classList.contains('dropdown')) {
            dropdown.classList.remove('active');
            activeProductId = null;
        }
    });
}

dropdownMenu()

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
});

let timeout;
window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        checkScreenSize()
        spaceTop()

        openMobMenu()

        scrollPadding()

        categorySelect()


    }, 150)
})