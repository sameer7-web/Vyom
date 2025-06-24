document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("scrunchies-grid");
  const goBack = document.getElementById("go-back-btn");
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const scrunchiesData = [
    {
      id: 30,
      name: "Velvet Scrunchie",
      image: "https://source.unsplash.com/300x200/?velvet-scrunchie",
      price: 199,
      rating: 4.3,
      description: "Soft, luxurious velvet that won’t snag your hair."
    },
    {
      id: 31,
      name: "Floral Scrunchie Pack",
      image: "https://source.unsplash.com/300x200/?floral-scrunchie",
      price: 299,
      rating: 4.4,
      description: "Set of 3 floral designs for everyday cuteness."
    },
    {
      id: 32,
      name: "Satin Night Scrunchie",
      image: "https://source.unsplash.com/300x200/?satin-scrunchie",
      price: 249,
      rating: 4.5,
      description: "Smooth satin to protect your hair overnight."
    },
    {
      id: 33,
      name: "Animal Print Scrunchie",
      image: "https://source.unsplash.com/300x200/?animal-print-scrunchie",
      price: 219,
      rating: 4.1,
      description: "Bold prints for a wild style statement."
    }
  ];

  scrunchiesData.forEach(product => {
    const isWishlisted = wishlist.includes(product.id);
    const card = document.createElement("div");
    card.className = "scrunchies-card";

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
