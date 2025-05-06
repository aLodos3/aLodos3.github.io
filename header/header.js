// header.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const dropdownMenu = document.getElementById('dropdown-menu');
    let menuOpen = false;

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            menuOpen = !menuOpen;
            dropdownMenu.style.display = menuOpen ? 'block' : 'none';
            hamburgerMenu.querySelectorAll('.bar')[0].style.transform = menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)';
            hamburgerMenu.querySelectorAll('.bar')[1].style.opacity = menuOpen ? '0' : '1';
            hamburgerMenu.querySelectorAll('.bar')[2].style.transform = menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)';
            hamburgerMenu.classList.toggle('active');
            if (navList) navList.classList.toggle('active');
            if (dropdownMenu) dropdownMenu.classList.toggle('show');
        });
    }
});
