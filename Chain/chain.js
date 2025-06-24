document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("chain-grid");
  const goBack = document.getElementById("go-back-btn");

  // Full product list
  const chainData = [
    {
      id: 21,
      name: "Layered Gold Chain",
      image: "https://source.unsplash.com/300x200/?gold-chain",
      price: 1299,
      rating: 4.6,
      description: "Stylish layered chain for elegant looks."
    },
    {
      id: 22,
      name: "Silver Link Chain",
      image: "https://source.unsplash.com/300x200/?silver-chain",
      price: 1099,
      rating: 4.4,
      description: "Bold silver links for a modern edge."
    },
    {
      id: 23,
      name: "Choker Chain",
      image: "https://source.unsplash.com/300x200/?choker-chain",
      price: 899,
      rating: 4.3,
      description: "Close-fitting choker with sleek shine."
    },
    {
      id: 24,
      name: "Minimal Rope Chain",
      image: "https://source.unsplash.com/300x200/?rope-chain",
      price: 999,
      rating: 4.2,
      description: "Delicate rope design for everyday wear."
    }
  ];

  let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  chainData.forEach(product => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    const card = document.createElement("div");
    card.className = "chain-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">₹${product.price}</p>
      <div class="rating">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))} <span>${product.rating}</span></div>
      <button class="wishlist-btn" data-id="${product.id}">${isWishlisted ? "❤️" : "🤍"}</button>
      <button class="cart-btn">Add to Cart</button>
    `;

    card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const isInWishlist = wishlist.some(item => item.id === id);

      if (isInWishlist) {
        wishlist = wishlist.filter(item => item.id !== id);
      } else {
        const productToAdd = chainData.find(p => p.id === id);
        if (productToAdd) wishlist.push(productToAdd);
      }

      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
      location.reload();
    });

    grid.appendChild(card);
  });

  goBack.addEventListener("click", () => window.history.back());
});
