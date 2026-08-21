document.addEventListener("DOMContentLoaded", () => {
    
    // Function to create glowing falling petals
    function createPetals() {
        const petalsContainer = document.querySelector('.petals-container');
        
        // Number of petals to generate
        const petalCount = 35;

        for (let i = 0; i < petalCount; i++) {
            let petal = document.createElement('div');
            petal.classList.add('petal');
            
            // Randomize size between 8px and 16px
            let size = Math.random() * 8 + 8;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            
            // Randomize starting position across the screen width
            petal.style.left = `${Math.random() * 100}vw`;
            
            // Randomize animation duration (falling speed) and delay
            petal.style.animationDuration = `${Math.random() * 8 + 5}s`;
            petal.style.animationDelay = `${Math.random() * 5}s`;
            
            petalsContainer.appendChild(petal);
        }
    }

    // Initialize petals on load
    createPetals();
// Make sure GSAP ScrollTrigger is registered (if not already done)
    gsap.registerPlugin(ScrollTrigger);

    // Page 2: Left Sticky Header Reveal
    gsap.from(".timeline-header", {
        scrollTrigger: {
            trigger: "#page2",
            start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // Page 2: Timeline Cards Reveal (Alternating animations)
    const timelineCards = document.querySelectorAll('.timeline-item');
    
    timelineCards.forEach((card, index) => {
        // Left cards slide from left, right cards slide from right
        let xDirection = card.classList.contains('left') ? -50 : 50;
        
        gsap.from(card.querySelector('.timeline-card'), {
            scrollTrigger: {
                trigger: card,
                start: "top 80%", // Triggers when the top of the card hits 80% of the viewport height
            },
            x: xDirection,
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        });
        
        // Make the timeline dots pop in
        gsap.from(card.querySelector('.timeline-dot'), {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            },
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(2)"
        });
    });
// Page 3: Header and Moon Reveal
    gsap.from(".page3-header", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    gsap.from(".moon-large", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top 50%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    });

    // Page 3: Video Player Card Reveal
    gsap.from(".video-player-card", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top 60%",
        },
        scale: 0.95,
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.2)"
    });

    // Page 3: Projector & Props Reveal
    gsap.from(".projector-area", {
        scrollTrigger: {
            trigger: ".projector-area",
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
    // Page 4: Top Promise Card Reveal
    gsap.from(".promise-card", {
        scrollTrigger: {
            trigger: "#page4",
            start: "top 75%",
        },
        y: -50,
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // Page 4: Floating Ring Drop-in
    gsap.from(".floating-ring-container", {
        scrollTrigger: {
            trigger: ".gift-scene",
            start: "top 70%",
        },
        y: -150,
        opacity: 0,
        duration: 2.5,
        ease: "elastic.out(1, 0.4)",
        delay: 0.2
    });

    // Page 4: Birthday Cake Slide-up
    gsap.from(".cake-container", {
        scrollTrigger: {
            trigger: ".gift-scene",
            start: "top 65%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 0.5
    });

    // Page 4: Bottom Gift Box Reveal
    gsap.from(".gift-description-card", {
        scrollTrigger: {
            trigger: ".gift-description-card",
            start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1
    });
});