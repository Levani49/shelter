const hamburgerButton = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('links')[0];

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})