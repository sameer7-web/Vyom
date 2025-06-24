document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("earrings-grid");
    const goBack = document.getElementById("go-back-btn");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const earringsData = [
      {
        id: 1,
        name: "Crystal Stud Earrings",
        image: "/assets/circle1.png",
        price: 599,
        rating: 4.5,
        description: "Stylish studs with crystal shimmer."
      },
      {
        id: 2,
        name: "Pearl Drop Earrings",
        image: "https://source.unsplash.com/300x200/?pearl-earrings",
        price: 749,
        rating: 4.2,
        description: "Elegant drop earrings with pearls."
      },
      {
        id: 3,
        name: "Boho Feather Earrings",
        image: "https://source.unsplash.com/300x200/?feather-earrings",
        price: 499,
        rating: 4.0,
        description: "Feather earrings with bohemian vibes."
      },
      {
        id: 4,
        name: "Gold Hoop Earrings",
        image: "https://source.unsplash.com/300x200/?hoop-earrings",
        price: 999,
        rating: 4.8,
        description: "Classic gold hoops for all outfits."
      }
    ];

    earringsData.forEach(product => {
      const isWishlisted = wishlist.includes(product.id);
      const card = document.createElement("div");
      card.className = "earrings-card";

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