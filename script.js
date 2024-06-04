// Simple JavaScript to add active class to current page link
const currentUrl = window.location.href;
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});
