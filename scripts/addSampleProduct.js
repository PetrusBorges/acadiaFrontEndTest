document.addEventListener("DOMContentLoaded", () => {
  const addSampleProductButton = document.querySelector(".add-sample-button");

  addSampleProductButton.addEventListener("click", () => {
    const gridCards = document.querySelector(".product-grid");
    const newProductArticle = document.createElement("article");
    newProductArticle.classList.add("card");

    newProductArticle.innerHTML = `
      <div class="card-image">
        <img src="assets/products/product-1.webp" alt="Sample Product" />
      </div>
      <div class="card-content">
        <h2 class="card-title">Sample Product</h2>
        <p class="card-description">
          This is a dynamically added sample product.
        </p>
        <div class="card-content-price">
          <span class="card-price">$59.99</span>
          <button type="button" class="primary-button">
            Add to Cart
          </button>
        </div>
      </div>
    `;

    gridCards.appendChild(newProductArticle);
  });
});
