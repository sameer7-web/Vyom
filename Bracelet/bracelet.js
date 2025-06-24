document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("bracelet-grid");
  const goBack = document.getElementById("go-back-btn");
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const braceletData = [
    {
      id: 31,
      name: "Beaded Charm Bracelet",
      image: "https://source.unsplash.com/300x200/?bracelet1",
      price: 499,
      rating: 4.4,
      description: "Colorful bracelet with fun charms."
    },
    {
      id: 32,
      name: "Minimal Gold Bracelet",
      image: "https://source.unsplash.com/300x200/?gold-bracelet",
      price: 799,
      rating: 4.6,
      description: "Elegant bracelet with subtle gold shine."
    },
    {
      id: 33,
      name: "Leather Wrap Bracelet",
      image: "https://source.unsplash.com/300x200/?leather-bracelet",
      price: 599,
      rating: 4.2,
      description: "Boho style leather wrap for daily wear."
    },
    {
      id: 34,
      name: "Crystal Cuff Bracelet",
      image: "https://source.unsplash.com/300x200/?crystal-bracelet",
      price: 999,
      rating: 4.7,
      description: "Crystal cuff that dazzles in light."
    }
  ];

  braceletData.forEach(product => {
    const isWishlisted = wishlist.includes(product.id);
    const card = document.createElement("div");
    card.className = "bracelet-card";

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
