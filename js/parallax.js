document.addEventListener('DOMContentLoaded', function() {
    // Get the background overlay element
    const backgroundOverlay = document.querySelector('.background-overlay');
    
    // Set initial background position
    let yPos = 0;
    
    // Function to update the background position based on scroll
    function updateParallax() {
        // Get scroll position
        const scrollPosition = window.pageYOffset;
        
        // Calculate new background position (slower movement for parallax effect)
        // The 0.5 value controls the speed - lower is slower
        yPos = scrollPosition * 0.5;
        
        // Apply the new background position
        backgroundOverlay.style.backgroundPosition = `center ${-yPos}px`;
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateParallax);
    
    // Initialize position
    updateParallax();
});