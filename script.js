gsap.registerPlugin(ScrollTrigger)

let t = gsap.timeline({
    defaults: { Easings: Expo.Easeout }
});
t.from(".hero-text", 1, { y: "50%", ease: "power4.easeOut", opacity: 0, delay: 1 }, 0.15)
    .from(".nav-text-reveal", { rotationY: 36, opacity: 0, duration: .5, yPercent: -100, stagger: 0.1, ease: "Expo.easeOut" })
    .from(".down-links-text-reveal", .5, { y: "50%", ease: "power4.easeOut", opacity: 0, delay: .5 })

gsap.from(".second-section-text-container", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".second-section-text-container",
        scrub: true,
        start: "top 80%",
    }
})

gsap.from(".my-pic", {
    x: -100,
    duration: 2.5,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".my-pic",
        toggleActions: "play reset play reset",
        start: "top 90%",
    }
})

gsap.from(".title-heading", {
    opacity: 0,
    duration: .5,
    scrollTrigger: {
        trigger: ".title-heading",
        scrub: true,
        start: "top 90%",
    }
})

gsap.from(".third-section-paragragh", {
    opacity: 0,
    duration: .2,
    scrollTrigger: {
        trigger: ".third-section-paragragh",
        scrub: true,
    }
})