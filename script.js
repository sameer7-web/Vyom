document.addEventListener('DOMContentLoaded', () => {
  // Animate navbar
  gsap.from('.nav-container', {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Nav link animation
  gsap.from('.nav-links a', {
    y: 10,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    delay: 0.4
  });

  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const dropdown = document.querySelector('.mobile-dropdown');

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    gsap.fromTo(dropdown, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".circle-item").forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: i * 0.05,
      ease: "power2.out"
    });
  });
});
 const products = [
      {
        name: 'Scrunchies',
        price: '2,499',
        description: 'Elegant handcrafted gold-plated rings.',
        images: ['assets/circle1.png', 'assets/circle3.png', 'assets/circle4.png', 'assets/circle5.png']
      },
      {
        name: 'Anti Tarnish Bracelet',
        price: '3,999',
        description: 'Luxurious pearl necklace for special events.',
        images: ['assets/circle1.png', 'assets/circle3.png', 'assets/circle4.png', 'assets/circle5.png']
      },
      {
        name: 'Chain',
        price: '4,599',
        description: 'Sparkling diamond bracelet with adjustable fit.',
        images: ['assets/circle1.png', 'assets/circle3.png', 'assets/circle4.png', 'assets/circle5.png']
      },
      {
        name: 'Anti Tarnish Earrings',
        price: '1,299',
        description: 'Trendy gold hoops perfect for daily wear.',
        images: ['assets/circle1.png', 'assets/circle3.png', 'assets/circle4.png', 'assets/circle5.png']
      },
      {
        name: 'Artificial Earrings',
        price: '999',
        description: 'Boho floral anklet for casual style.',
        images: ['assets/circle1.png', 'assets/circle3.png', 'assets/circle4.png', 'assets/circle5.png']
      }
    ];

    let rowsToShow = 2;
    const rowsContainer = document.getElementById('rowsContainer');
    const showMoreBtn = document.getElementById('showMoreBtn');

    function createCard(product) {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = product.images[0];
      let index = 0;
      let interval;

      card.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
          index = (index + 1) % product.images.length;
          gsap.to(img, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              img.src = product.images[index];
              gsap.to(img, { opacity: 1, duration: 0.3 });
            }
          });
        }, 1000);
      });

      card.addEventListener('mouseleave', () => {
        clearInterval(interval);
        index = 0;
        gsap.to(img, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            img.src = product.images[0];
            gsap.to(img, { opacity: 1, duration: 0.3 });
          }
        });
      });

      card.appendChild(img);

      const title = document.createElement('h3');
      title.textContent = product.name;
      card.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = product.description;
      card.appendChild(desc);

      const footer = document.createElement('div');
      footer.className = 'price-button';

      const price = document.createElement('span');
      price.className = 'price';
      price.textContent = `₹${product.price}`;

      const btn = document.createElement('button');
      btn.textContent = 'Add to Cart';

      footer.appendChild(price);
      footer.appendChild(btn);
      card.appendChild(footer);

      return card;
    }

    function renderRows() {
      rowsContainer.innerHTML = '';
      for (let i = 0; i < rowsToShow; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        products.forEach(p => row.appendChild(createCard(p)));
        rowsContainer.appendChild(row);
      }
    }

    showMoreBtn.addEventListener('click', () => {
      rowsToShow++;
      renderRows();
    });

    renderRows();
    const reviews = [
      {
        name: 'Priya Sharma',
        text: 'Absolutely stunning designs! I wore their set to my wedding and received endless compliments.',
        image: '/assets/circle1.png'
      },
      {
        name: 'Anjali Mehta',
        text: 'Elegant and high-quality jewelry. Quick delivery and great service.',
        image: '/assets/circle1.png'
      },
      {
        name: 'Sneha Kapoor',
        text: 'Loved the detailing in every piece. Will definitely shop again!',
        image: '/assets/circle1.png'
      },
      {
        name: 'Riya Verma',
        text: 'Perfect gifting options and beautiful packaging. Very impressed!',
        image: '/assets/circle1.png'
      },
    ];

    const wrapper = document.getElementById('reviewsWrapper');

    // Create cards twice for infinite scroll effect
    [...reviews, ...reviews].forEach((review) => {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="review-header">
          <img src="${review.image}" alt="${review.name}" />
          <div>
            <p><strong>${review.name}</strong></p>
            <div class="stars">${'<span>★</span>'.repeat(5)}</div>
          </div>
        </div>
        <div class="review-text">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" fill="currentColor">
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h40l-24.6 98.3c-4.5 18 3.5 36.9 19.9 45.8 7.2 3.9 15.1 5.9 22.9 5.9 9.8 0 19.5-3.1 27.7-9.2l64-48C507.2 354.3 512 343.6 512 332.4V80c0-26.5-21.5-48-48-48z"/>
          </svg>
          <p>"${review.text}"</p>
        </div>
      `;
      wrapper.appendChild(card);
    });

    // GSAP entry animations
    gsap.from(".review-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".reviews-section",
        start: "top 80%",
      },
    });
    gsap.from('.gsap-left', { opacity: 0, x: -50, duration: 1, scrollTrigger: '.gsap-left' });
    gsap.from('.gsap-right', { opacity: 0, x: 50, duration: 1, scrollTrigger: '.gsap-right' });
     gsap.from(".left", {
      opacity: 0,
      x: -50,
      duration: 1
    });

    gsap.from(".right", {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3
    });

    gsap.from(".contact-footer", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6
    });