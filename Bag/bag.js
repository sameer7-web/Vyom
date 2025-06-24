// bag.js

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("bag-grid");
  const goBack = document.getElementById("go-back-btn");
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const bagData = [
    {
      id: 51,
      name: "Mini Shoulder Bag",
      image: "https://source.unsplash.com/300x200/?mini-bag",
      price: 1499,
      rating: 4.5,
      description: "Compact shoulder bag for your essentials."
    },
    {
      id: 52,
      name: "Boho Sling Bag",
      image: "https://source.unsplash.com/300x200/?sling-bag",
      price: 1699,
      rating: 4.2,
      description: "Chic and comfortable bohemian sling."
    },
    {
      id: 53,
      name: "Structured Tote",
      image: "https://source.unsplash.com/300x200/?tote",
      price: 1899,
      rating: 4.6,
      description: "Roomy tote bag for everyday needs."
    },
    {
      id: 54,
      name: "Elegant Clutch",
      image: "https://source.unsplash.com/300x200/?clutch",
      price: 999,
      rating: 4.3,
      description: "Perfect clutch for a night out."
    }
  ];

  bagData.forEach(product => {
    const isWishlisted = wishlist.includes(product.id);
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">₹${product.price}</p>
      <div class="rating">
        ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
        <span>${product.rating}</span>
      </div>
      <button class="wishlist-btn" data-id="${product.id}">${isWishlisted ? "❤️" : "🤍"}</button>
      <button class="cart-btn">Add to Cart</button>
    `;

    card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
      } else {
        wishlist.push(id);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      location.reload();
    });

    grid.appendChild(card);
  });

  goBack.addEventListener("click", () => window.history.back());
});
