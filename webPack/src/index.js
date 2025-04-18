import productsBuilder from "./app/views/products.js";
import homeBuilder from "./app/views/home.js";
import createProductBuilder from "./app/views/create.js";
import servicesBuilder from "./app/views/services.js";
import twitter from './asset/twitter.svg';
import contactBuilder from './app/views/contact.ejs';
import aboutBuilder from './app/views/about.ejs';

let container = document.querySelector('main');

// Update the active nav link based on the current path
function updateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const path = location.pathname;

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else if (path === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        }
    });
}

// Router function to handle page changes
function router() {
    const path = location.pathname;

    // Update the page content based on the path
    if (path === '/contact') {
        container.innerHTML = contactBuilder();
    } else if (path === '/about') {
        container.innerHTML = aboutBuilder();
    } else if (path === '/products') {
        container.innerHTML = productsBuilder();
    } else if (path === '/create') {
        container.innerHTML = createProductBuilder();
    } else if (path === '/services') {
        container.innerHTML = servicesBuilder();
    } else {
        // Default to home
        container.innerHTML = homeBuilder();
    }

    // Update the active navigation link
    updateNavLinks();

    // Initialize Bootstrap components if needed
    if (path === '/' && typeof bootstrap !== 'undefined') {
        // Initialize carousel
        const carouselElement = document.querySelector('#carouselExample');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement);
        }
    }
}

// Set up the footer social media icons
let footImgs = document.querySelector('.ms-3 a');
if (footImgs) {
    const svgElement = document.createElement('img');
    svgElement.src = twitter;
    svgElement.width = 24; // width in pixels
    svgElement.height = 24; // height in pixels
    footImgs.appendChild(svgElement);
}

// Set up event listeners for navigation
document.addEventListener("DOMContentLoaded", () => {
    // Set the copyright year
    const yearElement = document.getElementById('copyrightYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Handle navigation clicks
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router(); // Use the router function instead of reloading
        }
    });

    // Initial routing
    router();
});

// Handle browser back/forward buttons
window.addEventListener("popstate", router);
