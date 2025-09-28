import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

// Reusable hover animation
function addHoverAnimation(element) {
    hover(element, () => {
        animate(element, { x: 10, y: 10 }, { duration: 0.1 });
        return () => animate(element, { x: 0, y: 0 }, { duration: 0.1 });
    });
}

// Apply to all cards
document.querySelectorAll('.card').forEach(addHoverAnimation);
