// header.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav-list');

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
});
