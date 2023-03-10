const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{x: 100, y: -20}, {x:300, y:10},{x:400,y:90},
    {x:window.innerWidth,y:120}]
};

const tween = new TimelineLite();


tween.add(
    TweenLite.to('.wand', 1 ,{
         bezier: flightPath,
         ease: Power1.easeInOut
    } )
);
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene(

{
    triggerElement:".animation",
    duration: 90000,
})
.setTween(tween)
.addIndicators()

.addTo(controller)
;