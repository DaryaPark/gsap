let tl = gsap.timeline();
tl.to(".close", {
  opacity:1,
  duration:0.9,
  ease:"expo"
})
// черная шапка меню
.from(".menu__top", {
  opacity:0.2,
 y:-650,
  duration:0.9,
  ease:"expo"
})

.to(".menu__top", {
  opacity:1,
  duration:0.9,
  stagger:0.3,
  ease:"expo"
})


// цвет основного меню
.from(".menu__container", {
  opacity:0,
  y:150,
  duration:0.2,
  ease:"expo"
})

.from(".nav__list", {
  opacity:-1,
  y:30,
  duration:0.9,
  ease:"power4"
})

.from(".social", {
  opacity:-1,
  y:30,
  duration:0.9,
  ease:"power4"
})

.from(".menu__right", {
  opacity:-1,
  y:10,
  duration:0.9,
  ease:"power4"
})


let first = gsap.timeline();

first.from(".hero__title", {
    opacity:-1,
   y:250,
    duration:1,
  })

  .from(".hero__btn", {
    opacity:-1,
    y:250,
     duration:1,
  }, "-=1")

  .from(".hero__descr",{
    opacity:-1,
     duration:0.5,
  })

  .from(".photos-wrap-1",{
    opacity:-1,
     duration:0.5,
  })

  .from(".photos-wrap-2",{
    opacity:-1,
     duration:0.5,
  })

  .from(".photos-wrap-3",{
    opacity:-1,
     duration:0.5,
  })

  .from(".photos__author",{
    opacity:-1,
     duration:0.5,
  }, "-=0.5")
