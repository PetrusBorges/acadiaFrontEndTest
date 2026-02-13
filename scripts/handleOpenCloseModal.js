document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.querySelector(".open-modal-button");
  const closeModalButton = document.querySelector(".close-modal-button");

  openModalButton.addEventListener("click", () => {
    const modalShoppingBad = document.querySelector(".modal-shopping-bag");

    modalShoppingBad.style.display = "block";
  });

  closeModalButton.addEventListener("click", () => {
    const modalShoppingBad = document.querySelector(".modal-shopping-bag");

    modalShoppingBad.style.display = "none";
  });
});
