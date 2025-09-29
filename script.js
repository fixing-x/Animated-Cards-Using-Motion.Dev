import { animate, hover, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

// Reusable hover animation
function addHoverAnimation(element) {
    const card = element.querySelector(".card");
    if (!card) return;

    hover(card, () => {
        animate(card, { x: 10, y: 10 }, { duration: 0.1 });
        return () => animate(card, { x: 0, y: 0 }, { duration: 0.1 });
    });
}
document.querySelectorAll('.container').forEach(addHoverAnimation);

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
