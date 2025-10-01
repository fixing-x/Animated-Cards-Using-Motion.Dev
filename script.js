import { animate, press, hover, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

// Reusable press animation
function addPressAnimation(element) {
    const card = element.querySelector(".card");
    const shadow = element.querySelector(".shadow");
    var distance = 5;
var timing = 0.1;

    const Pressed = [
        [
            card, 
            { 
                x: distance, 
                y: distance 
            }, { 
                duration: timing 
            }
        ], [
            shadow, 
            { 
                x: -distance, 
                y: -distance 
            }, { 
                duration: timing,
                start: 0, 
                at: 0 
            }
        ]
    ]
    const Released = [
        [
            card, 
            { 
                x: 0, 
                y: 0 
            }, { 
                duration: timing 
            }
        ], [
            shadow, 
            { 
                x: 0,
                y: 0 
            }, 
            { 
                duration: timing, 
                start: 0, 
                at: 0 
            }
        ]
    ]
    if (!card) return;
    hover(card, () => {
        animate([[card, { x: -2, y: -2, borderWidth: '2px' }, { duration: 0.05 }], [shadow, { x: 2, y: 2 }, { duration: 0.05, start: 0, at: 0 }]]);
        return () => animate([[card, { x: 0, y: 0, borderWidth: '1px' }, { duration: 0.05 }], [shadow, { x: 0, y: 0 }, { duration: 0.05 }]]);
    });

    press(element, () => {
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
