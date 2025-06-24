document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("wishlist-grid");
  const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  if (wishlistItems.length === 0) {
    grid.innerHTML = "<p class='empty'>No items in wishlist yet ❤️</p>";
    return;
  }

  wishlistItems.forEach(p => {
    const div = document.createElement("div");
    div.className = "wishlist-card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p class="price">₹${p.price}</p>
      <div class="rating">
        ${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))}
        <span>${p.rating}</span>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    `;
    grid.appendChild(div);
  });

  gsap.from(".wishlist-card", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1
  });
});
