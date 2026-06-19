document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    // window.smooth = ScrollSmoother.create({
    //     wrapper: '.wrapper',
    //     content: '.content',
    //     smooth: 1,
    //     clean: 1,
    //     results: true,
    //     normalizeScroll: true,
    //     ingoreMobileResize: true,
    //     effects: true,
    //     preventDefault: true,
    //     ignore: '.modal, .modal *, .products-row'
    // })

    let mainTl = gsap.timeline()


    const textSplit = document.querySelectorAll("[text-split]");

    const lettersSlideUp = document.querySelectorAll("[letters-slide-up]");

    gsap.set(textSplit, { opacity: 1 });

    textSplit.forEach((e) => {
        new SplitType(e, {
            types: "words, chars",
            tagName: "span",
        });
    });


    lettersSlideUp.forEach((e) => {
        let tl = gsap.timeline({ paused: true });
        const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
        const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.2;

        tl.from(e.querySelectorAll(".char"), {
            yPercent: 130,
            duration: customDuration,
            ease: "power1.out",
            stagger: { amount: 0.6 },
            delay: customDelay,
        });
        createScrollTrigger(e, tl);
    });

    mainTl.from('.main-screen .main-screen__img', {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out"
    })

    mainTl.from('.main-screen .btn', {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    })

    mainTl.from('header, section:not(.main-screen, .line)', {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    })

    mainTl.from('.line', {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out"
    })


    function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0).pause();
            },
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 80%",
            onEnter: () => timeline.play(),
        });
    }
})