document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const popup = document.getElementById('launchPopup');

    ctaButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });
});

function closePopup() {
    document.getElementById('launchPopup').style.display = 'none';
}