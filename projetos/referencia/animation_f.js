gsap.registerPlugin(ScrollTrigger) ;


gsap.from("#hero", {
    opacity: 0,
    y: -200,
    duration: 5,
    ease: "power1.out", 
});
gsap.from("#about .about_content", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power1.out",
});