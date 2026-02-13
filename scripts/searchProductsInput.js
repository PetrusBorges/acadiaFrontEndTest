const searchInput = document.querySelector(".search-products-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
