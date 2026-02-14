document.addEventListener("DOMContentLoaded", () => {
  const gridCards = document.querySelector(".product-grid");
  const cartCountModal = document.querySelector(".cart-count-modal");
  const modalBody = document.querySelector(".modal-shopping-bag-body");
  const openModalButton = document.querySelector(".open-modal-button");

  let cartCount = 0;

  gridCards.addEventListener("click", (e) => {
    const button = e.target.closest(".primary-button");
    if (!button) return;

    const card = button.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const price = card.querySelector(".card-price").textContent;

    const isAdded = card.classList.toggle("added");

    if (isAdded) {
      button.textContent = "Added";
      cartCount++;
      addItemToModal(title, price);
    } else {
      button.textContent = "Add to Cart";
      cartCount--;
      removeItemFromModal(title);
    }

    updateCartCount();
    toggleEmptyMessage();
  });

  modalBody.addEventListener("click", (e) => {
    const removeButton = e.target.closest(".icon-button");
    if (!removeButton) return;

    const cartItem = removeButton.closest(".cart-item");
    const title = cartItem.dataset.title;

    removeItemFromModal(title);

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const cardTitle = card.querySelector(".card-title").textContent;

      if (cardTitle === title) {
        card.classList.remove("added");
        card.querySelector(".primary-button").textContent = "Add to Cart";
      }
    });

    cartCount--;
    updateCartCount();
    toggleEmptyMessage();
  });

  const addItemToModal = (title, price) => {
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.dataset.title = title;

    item.innerHTML = `
      <div class="cart-item-header">
        <p>${title}</p>
        <button type="button" class="icon-button">
          <img src="assets/icons/trash.svg" alt="Remove item" />
        </button>
      </div>
      <small>${price}</small>
    `;

    modalBody.appendChild(item);
  };

  const removeItemFromModal = (title) => {
    const item = modalBody.querySelector(`[data-title="${title}"]`);

    if (item) {
      item.remove();
    }
  };

  const updateCartCount = () => {
    cartCountModal.textContent = cartCount;

    let badgeCount = openModalButton.querySelector(".cart-count-button");

    if (cartCount > 0) {
      if (!badgeCount) {
        badgeCount = document.createElement("span");
        badgeCount.classList.add("cart-count-button");
        openModalButton.appendChild(badgeCount);
      }

      badgeCount.textContent = cartCount;
    } else {
      if (badgeCount) {
        badgeCount.remove();
      }
    }
  };

  const toggleEmptyMessage = () => {
    const emptyMessage = modalBody.querySelector(".empty-cart");

    if (cartCount === 0) {
      if (!emptyMessage) {
        const message = document.createElement("p");
        message.classList.add("empty-cart");
        message.textContent = "No items in cart";
        modalBody.appendChild(message);
      }
    } else {
      if (emptyMessage) {
        emptyMessage.remove();
      }
    }
  };
});
