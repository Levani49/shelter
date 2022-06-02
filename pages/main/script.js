const hamburgerButton = document.querySelector('.hamburger-menu')[0];
const navLinks = document.querySelector('.links')[0];

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})