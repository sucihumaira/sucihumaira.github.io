// Loading screen - only for home page
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        // Lepas 2.5s, hide loading screen
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 2500);
    }
});

// Scroll controls
function scrollPage(direction) {
    const scrollAmount = window.innerHeight * 0.8;
    if (direction === 'up') {
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'down') {
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
}
