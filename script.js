// Food Dataset Matching Carousel Items
const menuItems = [
  {
    title: "Classic Beef Burger",
    desc: "A mouth-watering, juicy beef patty stacked with fresh lettuce, tomatoes, melted cheddar cheese, and signature sauce between toasted artisan buns.",
    image: "./img/img 2.png"
  },
  {
    title: "Classic Cheese Pizza",
    desc: "Freshly baked thin crust pizza topped with rich tomato passata, creamy melted mozzarella cheese, fresh cherry tomatoes, and aromatic basil leaves.",
    image: "./img/img 3.png"
  },
  {
    title: "Crispy French Fries",
    desc: "Golden crunchy fries loaded with savory seasonings, rich melted cheese sauce, topped with crispy bacon bits and drizzled garlic mayo.",
   image: "./img/img 4.png"
  },
  {
    title: "Creamy Chocolate Shake",
    desc: "Rich dark chocolate milkshake topped with fluffy whipped cream, chocolate drizzle, crushed cookies, and a crispy wafer stick.",
    image: "./img/img 5.png"
  },
  {
    title: "Fresh Strawberry Shake",
    desc: "Delightfully sweet strawberry milkshake blended with fresh organic strawberries, topped with whipped cream and strawberry syrup.",
    image: "./img/img 6.png"
  },
  {
    title: "Creamy Pista Shake",
    desc: "Authentic pistachio milkshake rich in flavor, topped with whipped cream, roasted crushed pistachios, and pistachio drizzle.",
    image: "./img/img 7.png"
  }
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const itemTitle = document.getElementById("itemTitle");
  const itemDesc = document.getElementById("itemDesc");
  const itemImg = document.getElementById("itemImg");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const heroImageBox = document.querySelector(".hero-image-box");

  // Slide Switcher Function with Fade Transition
  function updateSlide(index) {
    if (!itemTitle || !itemDesc || !itemImg) return;

    itemImg.classList.add("fade-out");
    itemTitle.classList.add("fade-out");
    itemDesc.classList.add("fade-out");

    setTimeout(() => {
      itemTitle.textContent = menuItems[index].title;
      itemDesc.textContent = menuItems[index].desc;
      itemImg.src = menuItems[index].image;
      itemImg.alt = menuItems[index].title;

      itemImg.classList.remove("fade-out");
      itemTitle.classList.remove("fade-out");
      itemDesc.classList.remove("fade-out");

      itemImg.classList.add("fade-in");
      itemTitle.classList.add("fade-in");
      itemDesc.classList.add("fade-in");
    }, 300);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % menuItems.length;
      updateSlide(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      updateSlide(currentIndex);
    });
  }

  // Mouse Parallax Effect on Hero Image
  if (heroImageBox) {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      heroImageBox.style.transform = `translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0px)`;
    });
  }
});


// ===================================================
// 1. MENU DATA SOURCE
// ===================================================
const ALL_MENU_ITEMS = [
  {
    id: 1,
    title: "Double Bacon Smash",
    category: "burgers",
    badge: "Bestseller",
    badgeClass: "",
    desc: "Two grass-fed smashed patties, crispy smoked bacon, double American cheese, caramelized onions & house sauce.",
    price: "349",
   image: "./img/img 8.png"
  },
  {
    id: 2,
    title: "Spicy Jalapeno Crunch",
    category: "burgers",
    badge: "Spicy",
    badgeClass: "spicy",
    desc: "Double smashed patties, pepper jack, grilled jalapenos, crispy onion straw crunch, and spicy chipotle mayo.",
    price: "299",
    image: "./img/img 9.png"
  },
  {
    id: 3,
    title: "Truffle Mushroom Melt",
    category: "burgers",
    badge: "Chef Choice",
    badgeClass: "chef",
    desc: "Single smash patty, sauteed wild mushrooms, swiss cheese, and aioli truffle garlic on a roasted brioche.",
    price: "329",
    image: "./img/img 10.png"
  },
  {
    id: 4,
    title: "Animal Loaded Fries",
    category: "fries",
    badge: "Popular",
    badgeClass: "",
    desc: "Handcut waffle fries topped with liquid cheddar, grilled chopped onions, bacon bits & smash sauce drizzle.",
    price: "249",
    image: "./img/img 21.png"
  },
  {
    id: 5,
    title: "Truffle Parmesan Fries",
    category: "fries",
    badge: "Crispy",
    badgeClass: "crispy",
    desc: "Skin-on skinny fries tossed in white truffle oil, grated parmesan cheese, and fresh parsley.",
    price: "279",
    image: "./img/img 12.png"
  },
  {
    id: 6,
    title: "Margherita Pizza",
    category: "pizzas",
    badge: "Bestseller",
    badgeClass: "",
    desc: "A classic Italian-style pizza with rich tomato sauce, creamy mozzarella, fresh basil, and perfectly baked golden crust.",
    price: "249",
    image: "./img/img 13.png"
  },
  {
    id: 7,
    title: "Pepperoni Pizza",
    category: "pizzas",
    badge: "Bestseller",
    badgeClass: "",
    desc: "A delicious pizza topped with rich tomato sauce, melted mozzarella, and spicy pepperoni slices. Baked until crispy and cheesy.",
    price: "299",
    image: "./img/img 14.png"
  },
  {
    id: 8,
    title: "Nutella Overload Shake",
    category: "shakes",
    badge: "Ultra Thick",
    badgeClass: "thick",
    desc: "Whole milk gelato blended with heavy Nutella, topped with chocolate drizzle and brownie crumbles.",
    price: "349",
    image: "./img/img 15.png"
  },
  {
    id: 9,
    title: "Salted Caramel Pretzel Shake",
    category: "shakes",
    badge: "Bestseller",
    badgeClass: "",
    desc: "Vanilla bean gelato churned with salted butter caramel and crunchy crushed pretzels.",
    price: "249",
    image: "./img/img 16.png"
  },
  {
    id: 10,
    title: "Strawberry Bliss Shake",
    category: "shakes",
    badge: "Bestseller",
    badgeClass: "",
    desc: "A creamy and refreshing shake blended with sweet strawberries, chilled milk, and ice cream, finished with a smooth strawberry flavor.",
    price: "199",
    image: "./img/img 17.png"
  },
  {
    id: 11,
    title: "Pista Crunch Shake",
    category: "shakes",
    badge: "Bestseller",
    badgeClass: "",
    desc: "A rich and creamy pistachio shake blended with chilled milk and premium pistachios, offering a smooth, nutty flavor with a deliciously refreshing blend.",
    price: "219",
    image: "./img/img 18.png"
  },
  {
    id: 12,
    title: "The Ultimate Smash Combo",
    category: "combos",
    badge: "Save 15%",
    badgeClass: "save",
    desc: "Includes Double Bacon Smash + Animal Loaded Fries + Choice of Classic Milkshake.",
    price: "489",
    image:"./img/img 19.png"
  }
];

// ===================================================
// 2. ABOUT US SECTION DATA
// ===================================================
const ABOUT_DATA_CONFIG = {
  title: "About Us",
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80",
  paragraphs: [
    "Welcome to Neon Nectar, where great taste meets a vibrant and modern experience. We are a food and beverage brand dedicated to serving delicious favorites made to satisfy every craving. Our goal is to bring together great food, refreshing drinks, and a memorable dining experience in one place.",
    "From juicy burgers and cheesy pizzas to crispy French fries and creamy shakes, our menu offers a variety of flavorful choices for every mood. Whether you're looking for a quick snack, a filling meal, or a refreshing drink, Neon Nectar has something delicious waiting for you.",
    "We believe that good food starts with quality ingredients and great preparation. Every item on our menu is carefully prepared to deliver a delicious combination of taste, freshness, and presentation. We also focus on creating a welcoming and enjoyable experience that makes every visit special."
  ]
};

// ===================================================
// 3. UI RENDER FUNCTIONS
// ===================================================

// Render About Us Card
function renderAboutCard() {
  const container = document.getElementById("about-card");
  if (!container) return;

  const imageHTML = `
    <div class="about-image-wrapper">
      <img src="${ABOUT_DATA_CONFIG.image}" alt="${ABOUT_DATA_CONFIG.title}" />
    </div>
  `;

  const paragraphsHTML = ABOUT_DATA_CONFIG.paragraphs
    .map(p => `<p>${p}</p>`)
    .join("");

  const contentHTML = `
    <div class="about-content-wrapper">
      <h2>${ABOUT_DATA_CONFIG.title}</h2>
      ${paragraphsHTML}
    </div>
  `;

  container.innerHTML = imageHTML + contentHTML;
}

// Render Filtered Menu Items to Grid
function renderMenuItems(itemsToDisplay) {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return;
  
  menuGrid.innerHTML = itemsToDisplay.map(item => `
    <article class="menu-card">
      <div class="card-image-container">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="badge ${item.badgeClass}">${item.badge}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹ ${item.price}</span>
          <button class="add-btn">Add <i class="fa-regular fa-square-plus"></i></button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Filter Setup
function setupCategoryFilter() {
  const filterButtons = document.querySelectorAll('.tab-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Remove active state from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      
      // 2. Set clicked button as active
      btn.classList.add('active');

      // 3. Filter using ALL_MENU_ITEMS
      const selectedCategory = btn.dataset.category;

      if (selectedCategory === 'all') {
        renderMenuItems(ALL_MENU_ITEMS);
      } else {
        const filteredItems = ALL_MENU_ITEMS.filter(item => item.category === selectedCategory);
        renderMenuItems(filteredItems);
      }
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderAboutCard();
  renderMenuItems(ALL_MENU_ITEMS);
  setupCategoryFilter();
});



// Services Data
const SERVICES_DATA = [
  {
    id: 1,
    icon: "fa-regular fa-clock",
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door"
  },
  {
    id: 2,
    icon: "fa-solid fa-cart-shopping",
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering"
  },
  {
    id: 3,
    icon: "fa-solid fa-gift",
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodie Gift Cards"
  }
];

// Testimonials Data
const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Everything we tried was absolutely delicious! The burgers were juicy, the fries were crispy, the pizza was cheesy, and the shakes were rich and creamy. Definitely coming back for more!",
    author: "Arjun K.",
    role: "Restaurant Captain",
    image: "./img/img 20.png"
  },
  {
    id: 2,
    quote: "Neon Nectar has the best loaded fries and thickest Nutella shake in town. The vibe is fantastic and delivery was super quick!",
    author: "Rohan M.",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "The truffle mushroom burger is out of this world. Excellent quality, great packaging, and top-tier service every time.",
    author: "Priya S.",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80"
  }
];

// Render Services
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(service => `
    <div class="service-card">
      <div class="service-icon-wrapper">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');
}

// Render Testimonial
function renderTestimonial(index) {
  const container = document.getElementById("testimonial-card");
  if (!container) return;

  const data = TESTIMONIALS_DATA[index];

  const dotsHTML = TESTIMONIALS_DATA.map((_, i) => `
    <span class="dot ${i === index ? 'active' : ''}" onclick="switchTestimonial(${i})"></span>
  `).join('');

  container.innerHTML = `
    <div class="testimonial-image-wrapper">
      <img src="${data.image}" alt="${data.author}" />
      <div class="testimonial-dots">
        ${dotsHTML}
      </div>
    </div>
    <div class="testimonial-content-wrapper">
      <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
      <p class="testimonial-text">"${data.quote}"</p>
      <div class="testimonial-divider"></div>
      <h4 class="author-name">${data.author}</h4>
      <span class="author-role">${data.role}</span>
    </div>
  `;
}

function switchTestimonial(index) {
  renderTestimonial(index);
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderTestimonial(0);
});


// Form Handling Script
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message")
  };

  console.log("Submitted Contact Info:", data);

  alert(`Thank you ${data.firstName}! Your message has been sent successfully.`);
  form.reset();
}




document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for footer navigation links
  const footerAnchors = document.querySelectorAll('.footer a[href^="#"]');

  footerAnchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId !== "#" && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});