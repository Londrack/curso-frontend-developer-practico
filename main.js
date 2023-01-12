const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const toogleDesktopMenu = () => desktopMenu.classList.toggle('inactive');

navbarEmail.addEventListener('click', toogleDesktopMenu);
