const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".main-content.a", 1, {x: 800, opacity: 0});
const scene = new ScrollMagic.Scene({
  triggerElement: ".main-content.a"
}).setTween(tl).addTo(controller);

const tl2 = new TimelineMax();

tl2.from(".main-content.b", 1, {x: 800, opacity: 0});
const scene2 = new ScrollMagic.Scene({
  triggerElement: ".main-content.b"
}).setTween(tl2).addTo(controller);
