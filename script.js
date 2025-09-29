import { animate, press,hover, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

// Reusable press animation
function addPressAnimation(element) {
    const card = element.querySelector(".card");
    const shadow = element.querySelector(".shadow");

    const Pressed = [
        [card,{x: 5, y: 5},{duration: 0.1}], [shadow,{x: -5, y: -5}, {duration: 0.1, start: 0, at: 0}]
    ]
    const Released = [
        [card,{x: 0, y: 0},{duration: 0.1}], [shadow,{x: 0, y: 0},{duration: 0.1, start: 0, at: 0}]
    ]
    if (!card) return;
    // hover(card, () => {
    //     animate(card, { backgroundImage: "url('bg.mp4')" }, { duration: 0.2 });
    //     return () => animate(card, { backgroundImage: "linear-gradient(to bottom, #000, #fff)" }, { duration: 0.1 });
    // });

    hover(card, () => {
        animate(Pressed);
    
        return () => animate(Released);
    });
}
document.querySelectorAll('.container').forEach(addPressAnimation);

// Entrance animation for cards
animate(".cards .container", 
    { opacity: [0, 1], y: [50, 0] }, 
    { 
         ease: "easeOut", 
        // stiffness: 80,
        // damping: 10,
        // mass: 1,
         duration: 0.5, 
        delay: stagger(0.1) 
    });
// Apply to all cards
