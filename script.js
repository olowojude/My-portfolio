// clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

let tl = gsap.timeline({ defaults: { Easings: Expo.Easeout } });
tl.from(".hero-text", 1, { y: "50%", ease: "power4.easeOut", opacity: 0, delay: 1 }, 0.15)
    // .from(".nav-text-reveal", 1, { y: "100%", ease: "power4.easeOut", opacity: 0, delay: 1 }, 0.15)
    .from(".nav-text-reveal", { rotationY: 36, opacity: 0, duration: .8, yPercent: -100, stagger: 0.1, ease: "Expo.easeOut" })
    .from(".down-links-text-reveal", 1, { y: "50%", ease: "power4.easeOut", opacity: 0, delay: .5 })
    .from(".second-section-text-container", 1, { opacity: 0 })