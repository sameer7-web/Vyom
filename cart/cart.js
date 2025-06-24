document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("cart-grid");
  const sortFilter = document.getElementById("sort-filter");
  const goBackBtn = document.getElementById("go-back-button");

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const dummy = [
    { id: 0, name: "Anti-Tarnish Earrings", image: "/assets/circle1.png", price: 799, rating: 4.5, description: "Elegant anti-tarnish earrings for daily wear." },
    { id: 1, name: "Chunky Gold Hoops", image: "/assets/circle2.png", price: 999, rating: 4.2, description: "Timeless gold hoops to level up your outfit." },
    { id: 2, name: "Silver Chain Necklace", image: "/assets/circle3.png", price: 1199, rating: 4.8, description: "A bold silver chain that speaks confidence." },
    { id: 3, name: "Boho Bracelet Set", image: "https://source.unsplash.com/300x200/?bracelet", price: 499, rating: 4.0, description: "Colorful and quirky — perfect for summer." },
    { id: 4, name: "Statement Bag", image: "https://source.unsplash.com/300x200/?fashion-bag", price: 1599, rating: 3.9, description: "Trendy mini bag to carry the essentials." },
    { id: 5, name: "Velvet Scrunchie", image: "https://source.unsplash.com/300x200/?scrunchie", price: 199, rating: 4.3, description: "Soft, stylish scrunchie that won’t pull hair." },
    { id: 6, name: "Crystal Pendant", image: "https://source.unsplash.com/300x200/?pendant", price: 899, rating: 4.6, description: "Minimalist crystal pendant for everyday glam." },
    { id: 7, name: "Layered Necklace", image: "https://source.unsplash.com/300x200/?necklace", price: 1399, rating: 4.4, description: "Double-layer chain for stacked look." },
    { id: 8, name: "Pearl Studs", image: "https://source.unsplash.com/300x200/?pearl-earrings", price: 699, rating: 4.1, description: "Classy pearl studs for all occasions." },
    { id: 9, name: "Tote Bag", image: "https://source.unsplash.com/300x200/?tote-bag", price: 1799, rating: 4.7, description: "Roomy and sustainable fabric tote." },
    { id: 10, name: "Rose Gold Anklet", image: "https://source.unsplash.com/300x200/?anklet", price: 599, rating: 4.2, description: "Delicate anklet with a floral charm." },
    { id: 11, name: "Sapphire Ring", image: "https://source.unsplash.com/300x200/?ring", price: 1299, rating: 4.9, description: "Royal blue stone with elegant finish." },
    { id: 12, name: "Geometric Hoops", image: "https://source.unsplash.com/300x200/?jewelry-hoop", price: 899, rating: 4.1, description: "Modern design with clean lines." },
    { id: 13, name: "Mini Crossbody", image: "https://source.unsplash.com/300x200/?crossbody-bag", price: 1499, rating: 4.0, description: "Compact and perfect for travel days." },
    { id: 14, name: "Wired Choker", image: "https://source.unsplash.com/300x200/?choker", price: 999, rating: 3.8, description: "Bold neckwear to elevate basics." },
    { id: 15, name: "Heart Pendant", image: "https://source.unsplash.com/300x200/?heart-necklace", price: 649, rating: 4.5, description: "Romantic charm with gold polish." },
    { id: 16, name: "Crystal Studs", image: "https://source.unsplash.com/300x200/?crystal-earrings", price: 749, rating: 4.2, description: "Add sparkle without being too loud." },
    { id: 17, name: "Bohemian Rings", image: "https://source.unsplash.com/300x200/?boho-rings", price: 999, rating: 4.3, description: "Wear them stacked or alone." },
    { id: 18, name: "Leather Strap Watch", image: "https://source.unsplash.com/300x200/?watch", price: 1899, rating: 4.8, description: "Vintage look with modern finish." },
    { id: 19, name: "Turquoise Anklet", image: "https://source.unsplash.com/300x200/?turquoise-anklet", price: 699, rating: 4.4, description: "Beach vibes in one accessory." }
  ];

  let filteredProducts = [...dummy];

  function render(products) {
    grid.innerHTML = "";
    products.forEach(p => {
      const isWishlisted = wishlist.includes(p.id);
      const div = document.createElement("div");
      div.className = "cart-card";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3 class="cart-title">${p.name}</h3>
        <p class="cart-desc">${p.description}</p>
        <p class="cart-price">₹${p.price}</p>
        <div class="cart-rating">
          ${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))}
          <span> ${p.rating}</span>
        </div>
        <button class="wishlist-btn" data-id="${p.id}">
          ${isWishlisted ? "❤️" : "🤍"}
        </button>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;
      grid.appendChild(div);
    });

    gsap.from(".cart-card", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    });

    document.querySelectorAll(".wishlist-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        if (wishlist.includes(id)) {
          wishlist = wishlist.filter(item => item !== id);
        } else {
          wishlist.push(id);
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        render(filteredProducts);
      });
    });
  }

  sortFilter.addEventListener("change", () => {
    const v = sortFilter.value;
    if (v === "low") filteredProducts.sort((a, b) => a.price - b.price);
    else if (v === "high") filteredProducts.sort((a, b) => b.price - a.price);
    else filteredProducts = [...dummy];
    render(filteredProducts);
  });

  goBackBtn.addEventListener("click", () => window.history.back());

  render(filteredProducts);
});
