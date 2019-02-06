const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".main-content.a", 1, {x: 800, opacity: 0, ease: Power4.easeOut});
const scene = new ScrollMagic.Scene({
  triggerElement: ".main-content.a"
}).setTween(tl).addTo(controller);

const tl2 = new TimelineMax();

tl2.from(".main-content.b p, .main-content.b h3", 1, {x: -800, opacity: 0, ease: Power4.easeOut});
tl2.from(".main-content.b h2", 1, {y: -200, opacity: 0, ease: Power4.easeOut})
tl2.from(".carousel, .main-content.b button", 1.4, {y: 400, x: 200, opacity: 0, ease: Power4.easeOut})
const scene2 = new ScrollMagic.Scene({
  triggerElement: ".main-content.b"
}).setTween(tl2).addTo(controller);

const tl3 = new TimelineMax();

tl3.from("header nav a, .top-section", 1.2, {opacity: 0});
