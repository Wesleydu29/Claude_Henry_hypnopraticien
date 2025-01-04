const modalHeader = document.querySelector(".modal2-header");

const modal2Title = document.querySelector(".modal2-title");
modalTitle.innerText = "Tarifs";

modalHeader.appendChild(modalTitle)


const sectionPrice = document.querySelector(".sectionPrice");

const infosPrice = document.createElement("div");
infosPrice.className = "infos-price";

const detailPrice1 = document.createElement("p");
detailPrice1.innerText = "Consultation au cabinet, 50€ la séance d'une durée, pouvant varier de 45 minutes à 1h30 "

const detailPrice2 = document.createElement("p");
detailPrice2.innerText = "Consultation à domicile, 60€ la séance d'une durée, pouvant varier de 45 minutes à 1h30 "

//const closeIcon = doucment

infosPrice.appendChild(detailPrice1);
infosPrice.appendChild(detailPrice2);

sectionPrice.appendChild(infosPrice);



const btnOpenModal2 = document.querySelector(".price-link");
btnOpenModal2.addEventListener("click", openModal);

const btnCloseModal2 = document.querySelector(".closeIcon");
btnCloseModal2.addEventListener("click", closeModal);


const modal2 = document.querySelector(".modal2-container");
modal2.addEventListener("click", clickOutsideModal);

function openModal() {
    modal2.style.display = "flex"
}

function closeModal() {
    modal2.style.display = "none"
}

function clickOutsideModal(event) {
    if (event.target === modal2) {
        modal2.style.display = "none"
    }
}