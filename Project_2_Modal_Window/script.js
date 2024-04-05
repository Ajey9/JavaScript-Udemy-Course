"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModel = document.querySelector(".close-modal");
const buttonShowModal = document.querySelectorAll(".show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener("click", openModal);
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
buttonCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
