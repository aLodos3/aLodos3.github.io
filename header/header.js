// header.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            if (navList) navList.classList.toggle('active');
            if (dropdownMenu) dropdownMenu.classList.toggle('show');
        });
    }
});
