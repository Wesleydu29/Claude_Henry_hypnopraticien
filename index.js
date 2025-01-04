const baliseHeader = document.getElementById("header");

const baliseNav = document.createElement("nav");
baliseNav.className = "nav-container";

const baliseH1 = document.createElement("h1");
baliseH1.innerText = "Claude Henry - Hypnopraticien";
baliseH1.className = "title";

const lienModal = document.createElement("a");
lienModal.innerText = "contactez moi";
lienModal.className = "contact-link"

const lienModalPrice = document.createElement("a");
lienModalPrice.innerText = "Tarifs";
lienModalPrice.className = "price-link"

lienModal.addEventListener("click", openModal)


baliseHeader.appendChild(baliseH1);
baliseNav.appendChild(lienModal);
baliseNav.appendChild(lienModalPrice);
baliseHeader.appendChild(baliseNav);

// gestion de l'ouverture et fermeture de la modal

const modalTitle = document.querySelector(".modal-title");
modalTitle.innerText = "Claude Henry Hypnopraticien";


const openModalBtn = document.querySelector(".contact-link");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.querySelector(".fa-xmark");
closeModalBtn.addEventListener("click", closeModal);


const modal = document.querySelector(".modal-container");
modal.addEventListener("click", clickOutsideModal);

function openModal() {
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

function clickOutsideModal(event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}

const paragrapheModal = document.querySelector(".modal-paragraphe");
paragrapheModal.innerText = "Diplômé de l'Université de Bretagne Occidentale (DIU) <<hypnose médicale et clinique>>"


