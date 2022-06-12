const hamburgerButton = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('links')[0];

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

async function getPets() {
    const response = await fetch("../../assets/pets.json");
    var data = await response.json();
    await petsData(data);
}

function petsData(data) {
    data.forEach((element) => {
        console.log(element.name)
    });
}
getPets();

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}