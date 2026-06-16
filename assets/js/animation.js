document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    window.smooth = ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.3,
        clean: 1,
        results: true,
        normalizeScroll: true,
        ingoreMobileResize: true,
        ignore: '.modal, .modal *'
    })

    const textSplit = document.querySelectorAll("[text-split]");

    const lettersSlideUp = document.querySelectorAll("[letters-slide-up]");
    const lettersSlideDown = document.querySelectorAll("[letters-slide-down]");

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