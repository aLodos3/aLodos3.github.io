// header.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
});
