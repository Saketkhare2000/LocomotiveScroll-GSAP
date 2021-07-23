
// let circle = document.querySelector(".cursor");

// TweenLite.set(circle, {
//     xPercent: -50,
//     yPercent: -50
// });

// window.addEventListener("mousemove", moveCircle);

// function moveCircle(e) {
//     TweenLite.to(circle, 0.1, {
//         x: e.clientX,
//         y: e.clientY
//     });
// }

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".scrollContainer"),
//     smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);


// // tell ScrollTrigger to use these proxy methods for the ".scrollContainer" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".scrollContainer", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
// });


// gsap.from('.hero', {
//     y: '300px',
//     opacity: 0,
//     duration: 1,
//     skewY: '5deg',
// })



// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.hero',
//         // markers: true,
//         scroller: ".scrollContainer",
//         start: 'top 150px',
//         end: 'bottom 500px',
//         scrub: true
//     }
// })
// tl.to('.hero-text h1, .hero-text p', {
//     skewY: "3deg",
//     y: '-60px',
//     duration: 1,
//     opacity: 0
// })



// const tlTitle = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects',
//         // markers: true,
//         scroller: ".scrollContainer",
//         start: '-100px 150px',
//         end: '700px 500px',
//         scrub: true,
//     }
// })

// const tlImg = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects',
//         // markers: true,
//         scroller: ".scrollContainer",
//         start: '50px 150px',
//         end: '1100px 500px',
//         scrub: true,
//     }
// })

// tlTitle.from('.projects h1', {
//     opacity: 0,
//     y: '100px',
//     x: '600px'
// })

// tlImg.fromTo('.img', {
//     opacity: 0,
//     y: '100px',
//     skewY: '5deg'
// }, {
//     opacity: 1,
//     y: '80px',
//     skewY: '0deg'
// }).to('.img img', {
//     scale: 1.2
// })


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();





gsap.from('.hero', {
    y: '300px',
    opacity: 0,
    duration: 1,
    skewY: '5deg',
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        markers: true,
        start: '125px 150px',
        end: 'bottom 500px',
        scrub: true
    }
})
tl.to('.hero-text h1, .hero-text p', {
    skewY: "3deg",
    y: '-60px',
    duration: 1,
    opacity: 0
})
const tlTitle = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '-100px 150px',
        end: '700px 500px',
        scrub: true,
    }
})

const tlImg = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '50px 150px',
        end: '1100px 500px',
        scrub: true,
    }
})

tlTitle.from('.projects h1', {
    opacity: 0,
    y: '100px',
    x: '600px'
})

tlImg.fromTo('.img', {
    opacity: 0,
    y: '100px',
    skewY: '5deg'
}, {
    opacity: 1,
    y: '80px',
    skewY: '0deg'
}).to('.img img', {
    scale: 1.2
})

