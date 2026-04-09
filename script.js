// Sample data
const restaurants = [
    { id: 1, name: "Burger King", category: "Fast Food", rating: 4.2, description: "American fast food chain", image: "🍔" },
    { id: 2, name: "Punjabi Tadka", category: "Desi", rating: 4.5, description: "Authentic Punjabi cuisine", image: "🍛" },
    { id: 3, name: "Wok This Way", category: "Chinese", rating: 4.0, description: "Delicious Chinese food", image: "🥡" },
    { id: 4, name: "Sweet Dreams", category: "Desserts", rating: 4.3, description: "Heavenly desserts", image: "🍰" },
    { id: 5, name: "Pizza Hut", category: "Fast Food", rating: 4.1, description: "World-famous pizza", image: "🍕" },
    { id: 6, name: "Biryani House", category: "Desi", rating: 4.4, description: "Mouthwatering biryani", image: "🍚" },
    { id: 7, name: "Pasta Paradise", category: "Italian", rating: 4.6, description: "Authentic Italian pasta dishes", image: "🍝" },
    { id: 8, name: "Green Eats", category: "Healthy", rating: 4.3, description: "Fresh and healthy meals", image: "🥗" },
    { id: 9, name: "Beverage Bar", category: "Beverages", rating: 4.0, description: "Refreshing drinks and smoothies", image: "🥤" },
    { id: 10, name: "Taco Town", category: "Mexican", rating: 4.2, description: "Spicy Mexican cuisine", image: "🌮" },
    { id: 11, name: "Sushi Spot", category: "Japanese", rating: 4.5, description: "Fresh sushi and Japanese delicacies", image: "🍱" },
    { id: 12, name: "Coffee Corner", category: "Beverages", rating: 4.1, description: "Premium coffee and pastries", image: "☕" }
];

const menuItems = {
    1: [
        { id: 1, name: "Whopper", price: 5.99, description: "Classic burger with beef patty", image: "🍔" },
        { id: 2, name: "Chicken Nuggets", price: 3.99, description: "Crispy chicken nuggets", image: "🍗" },
        { id: 3, name: "Fries", price: 2.49, description: "Golden crispy fries", image: "🍟" },
        { id: 19, name: "Onion Rings", price: 3.49, description: "Crispy battered onion rings", image: "🧅" }
    ],
    2: [
        { id: 4, name: "Butter Chicken", price: 12.99, description: "Creamy and rich butter chicken", image: "🍛" },
        { id: 5, name: "Naan", price: 1.99, description: "Fresh baked naan bread", image: "🫓" },
        { id: 6, name: "Rajma Chawal", price: 8.99, description: "Kidney beans with rice", image: "🍛" },
        { id: 20, name: "Paneer Tikka", price: 10.99, description: "Grilled paneer skewers", image: "🍢" }
    ],
    3: [
        { id: 7, name: "Sweet and Sour Chicken", price: 10.99, description: "Tangy and sweet chicken", image: "🥡" },
        { id: 8, name: "Fried Rice", price: 7.99, description: "Vegetable fried rice", image: "🍚" },
        { id: 9, name: "Spring Rolls", price: 4.99, description: "Crispy vegetable rolls", image: "🥢" },
        { id: 21, name: "Kung Pao Chicken", price: 11.99, description: "Spicy Sichuan chicken", image: "🍗" }
    ],
    4: [
        { id: 10, name: "Chocolate Cake", price: 6.99, description: "Rich chocolate cake", image: "🍰" },
        { id: 11, name: "Ice Cream Sundae", price: 4.99, description: "Vanilla ice cream with toppings", image: "🍨" },
        { id: 12, name: "Cheesecake", price: 7.99, description: "Creamy New York cheesecake", image: "🍰" },
        { id: 22, name: "Tiramisu", price: 8.99, description: "Classic Italian dessert", image: "🍰" }
    ],
    5: [
        { id: 13, name: "Margherita Pizza", price: 9.99, description: "Classic tomato and cheese pizza", image: "🍕" },
        { id: 14, name: "Pepperoni Pizza", price: 11.99, description: "Spicy pepperoni pizza", image: "🍕" },
        { id: 15, name: "Garlic Bread", price: 3.99, description: "Buttery garlic bread", image: "🍞" },
        { id: 23, name: "Chicken Supreme", price: 13.99, description: "Loaded with chicken and veggies", image: "🍕" }
    ],
    6: [
        { id: 16, name: "Chicken Biryani", price: 13.99, description: "Aromatic chicken biryani", image: "🍚" },
        { id: 17, name: "Raita", price: 2.99, description: "Cool yogurt side", image: "🥛" },
        { id: 18, name: "Salad", price: 3.99, description: "Fresh mixed salad", image: "🥗" },
        { id: 24, name: "Mutton Biryani", price: 15.99, description: "Tender mutton biryani", image: "🍖" }
    ],
    7: [
        { id: 25, name: "Spaghetti Carbonara", price: 11.99, description: "Creamy pasta with bacon", image: "🍝" },
        { id: 26, name: "Margherita Pizza", price: 10.99, description: "Tomato, mozzarella, basil", image: "🍕" },
        { id: 27, name: "Lasagna", price: 12.99, description: "Layered pasta with meat sauce", image: "🍝" },
        { id: 28, name: "Tiramisu", price: 7.99, description: "Coffee-flavored dessert", image: "🍰" }
    ],
    8: [
        { id: 29, name: "Quinoa Salad", price: 9.99, description: "Healthy quinoa bowl", image: "🥗" },
        { id: 30, name: "Grilled Chicken Wrap", price: 8.99, description: "Lean protein wrap", image: "🌯" },
        { id: 31, name: "Smoothie Bowl", price: 6.99, description: "Fruit and yogurt bowl", image: "🥣" },
        { id: 32, name: "Veggie Stir Fry", price: 10.99, description: "Mixed vegetable stir fry", image: "🥦" }
    ],
    9: [
        { id: 33, name: "Fresh Orange Juice", price: 3.99, description: "Freshly squeezed OJ", image: "🍊" },
        { id: 34, name: "Green Smoothie", price: 4.99, description: "Spinach and fruit blend", image: "🥤" },
        { id: 35, name: "Iced Coffee", price: 2.99, description: "Cold brewed coffee", image: "🧊" },
        { id: 36, name: "Fruit Punch", price: 3.49, description: "Mixed fruit drink", image: "🍹" }
    ],
    10: [
        { id: 37, name: "Beef Tacos", price: 8.99, description: "Three soft beef tacos", image: "🌮" },
        { id: 38, name: "Chicken Quesadilla", price: 9.99, description: "Cheesy chicken quesadilla", image: "🫓" },
        { id: 39, name: "Guacamole", price: 4.99, description: "Fresh avocado dip", image: "🥑" },
        { id: 40, name: "Chili Con Carne", price: 11.99, description: "Spicy meat chili", image: "🍲" }
    ],
    11: [
        { id: 41, name: "California Roll", price: 12.99, description: "Crab, avocado, cucumber", image: "🍱" },
        { id: 42, name: "Salmon Sashimi", price: 14.99, description: "Fresh salmon slices", image: "🍣" },
        { id: 43, name: "Tempura Udon", price: 10.99, description: "Noodle soup with tempura", image: "🍜" },
        { id: 44, name: "Green Tea Ice Cream", price: 5.99, description: "Matcha flavored ice cream", image: "🍨" }
    ],
    12: [
        { id: 45, name: "Espresso", price: 2.49, description: "Strong Italian coffee", image: "☕" },
        { id: 46, name: "Cappuccino", price: 3.49, description: "Coffee with steamed milk", image: "☕" },
        { id: 47, name: "Croissant", price: 2.99, description: "Buttery French pastry", image: "🥐" },
        { id: 48, name: "Blueberry Muffin", price: 3.99, description: "Fresh baked muffin", image: "🧁" }
    ]
};

const reviews = {
    1: [
        { user: "John D.", rating: 5, comment: "Best burgers in town!" },
        { user: "Sarah M.", rating: 4, comment: "Love the fries, but service could be faster." }
    ],
    2: [
        { user: "Raj K.", rating: 5, comment: "Authentic Punjabi flavors!" },
        { user: "Priya S.", rating: 4, comment: "Butter chicken is amazing." }
    ],
    // Add more reviews as needed
};

// Global variables
let currentUser = null;
let cart = [];
let orders = [];
let currentRestaurant = null;
let currentFilter = '';
let selectedRating = 0;

// DOM elements
const cartCount = document.getElementById('cart-count');
const authLink = document.getElementById('auth-link');
const adminLink = document.getElementById('admin-link');
const authModal = document.getElementById('auth-modal');
const authTitle = document.getElementById('auth-title');
const loginForm = document.getElementById('login-form');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    showSection('home');
    renderRestaurants();
    setupEventListeners();
});

// Load data from localStorage
function loadData() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    orders = JSON.parse(localStorage.getItem('orders')) || [];
    const savedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (savedReviews) {
        Object.assign(reviews, savedReviews);
    }
    updateUI();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('reviews', JSON.stringify(reviews));
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
}

// Update UI based on user state
function updateUI() {
    updateCartCount();
    if (currentUser) {
        authLink.textContent = 'Logout';
        if (currentUser.role === 'admin') {
            adminLink.style.display = 'block';
        }
    } else {
        authLink.textContent = 'Login';
        adminLink.style.display = 'none';
    }
}

// Show section by scrolling to it
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Auth modal
    authLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser) {
            logout();
        } else {
            showAuthModal();
        }
    });

    // Modal closes
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Star rating
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
            selectedRating = parseInt(e.target.dataset.rating);
            document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
            for (let i = 0; i < selectedRating; i++) {
                document.querySelectorAll('.star')[i].classList.add('active');
            }
        });
    });

    // Search and filter
    document.getElementById('search-input').addEventListener('input', filterRestaurants);
    document.getElementById('filter-rating').addEventListener('change', filterRestaurants);
}

// Render restaurants
function renderRestaurants(filter = '') {
    const restaurantsList = document.getElementById('restaurants-list');
    let filteredRestaurants = restaurants;

    if (filter) {
        filteredRestaurants = restaurants.filter(r => r.category === filter);
    }

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filteredRestaurants = filteredRestaurants.filter(r => 
            r.name.toLowerCase().includes(searchTerm) || 
            r.description.toLowerCase().includes(searchTerm)
        );
    }

    const ratingFilter = document.getElementById('filter-rating').value;
    if (ratingFilter) {
        filteredRestaurants = filteredRestaurants.filter(r => r.rating >= parseInt(ratingFilter));
    }

    restaurantsList.innerHTML = filteredRestaurants.map(restaurant => `
        <div class="restaurant-card" onclick="showMenu(${restaurant.id})">
            <div class="restaurant-image">${restaurant.image}</div>
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <div class="restaurant-rating">⭐ ${restaurant.rating}</div>
                <p>${restaurant.description}</p>
                <p>${restaurant.category}</p>
            </div>
        </div>
    `).join('');
}

// Filter restaurants
function filterRestaurants(category = '') {
    currentFilter = category;
    renderRestaurants(category);
}

// Show menu for restaurant
function showMenu(restaurantId) {
    currentRestaurant = restaurants.find(r => r.id === restaurantId);
    document.getElementById('restaurant-name').textContent = currentRestaurant.name;
    renderMenu(restaurantId);
    renderReviews(restaurantId);
    showSection('menu');
}

// Render menu items
function renderMenu(restaurantId) {
    const menuItemsDiv = document.getElementById('menu-items');
    const items = menuItems[restaurantId] || [];
    
    menuItemsDiv.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">${item.image}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
            <button class="btn-primary add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(itemId) {
    const item = Object.values(menuItems).flat().find(i => i.id === itemId);
    const cartItem = cart.find(c => c.id === itemId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveData();
    updateCartCount();
    alert('Item added to cart!');
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart
function showCart() {
    showSection('cart');
    renderCart();
}

// Render cart
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty</p>';
        totalPrice.textContent = '0.00';
        return;
    }
    
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.textContent = total.toFixed(2);
}

// Update item quantity in cart
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== itemId);
    } else {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
        }
    }
    saveData();
    updateCartCount();
    renderCart();
}

// Place order
function placeOrder() {
    if (!currentUser) {
        alert('Please login to place an order');
        showAuthModal();
        return;
    }
    
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: 'Preparing',
        date: new Date().toISOString()
    };
    
    orders.push(order);
    cart = [];
    saveData();
    updateCartCount();
    alert('Order placed successfully!');
    showSection('orders');
    renderOrders();
}

// Render orders
function renderOrders() {
    const ordersList = document.getElementById('orders-list');
    
    if (!currentUser) {
        ordersList.innerHTML = '<p>Please login to view your orders</p>';
        return;
    }
    
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p>No orders yet</p>';
        return;
    }
    
    ordersList.innerHTML = userOrders.map(order => `
        <div class="order-item">
            <h3>Order #${order.id}</h3>
            <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
            <p>Status: ${order.status}</p>
            <p>Total: $${order.total.toFixed(2)}</p>
            <ul>
                ${order.items.map(item => `<li>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render reviews
function renderReviews(restaurantId) {
    const reviewsList = document.getElementById('reviews-list');
    const restaurantReviews = reviews[restaurantId] || [];
    
    if (restaurantReviews.length === 0) {
        reviewsList.innerHTML = '<p>No reviews yet. Be the first to review!</p>';
        return;
    }
    
    reviewsList.innerHTML = restaurantReviews.map(review => `
        <div class="review-item">
            <div class="rating">${'⭐'.repeat(review.rating)}</div>
            <strong>${review.user}</strong>
            <p>${review.comment}</p>
        </div>
    `).join('');
}

// Show review form
function showReviewForm() {
    if (!currentUser) {
        alert('Please login to write a review');
        showAuthModal();
        return;
    }
    document.getElementById('review-modal').style.display = 'block';
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    document.getElementById('review-comment').value = '';
}

// Submit review
function submitReview(event) {
    event.preventDefault();
    if (!currentUser || selectedRating === 0) {
        alert('Please login and select a rating');
        return;
    }
    
    const comment = document.getElementById('review-comment').value;
    const newReview = {
        user: currentUser.name,
        rating: selectedRating,
        comment: comment
    };
    
    if (!reviews[currentRestaurant.id]) {
        reviews[currentRestaurant.id] = [];
    }
    reviews[currentRestaurant.id].push(newReview);
    
    // Save reviews to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    renderReviews(currentRestaurant.id);
    document.getElementById('review-modal').style.display = 'none';
    alert('Review submitted successfully!');
}

// Auth functions
function showAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
    showAuthTab('login');
}

function showAuthTab(tab) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    document.querySelectorAll('#auth-tabs button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tab + '-form').classList.add('active');
    document.getElementById(tab + '-tab').classList.add('active');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login (in real app, this would be server-side)
    if (email === 'admin@foodiehub.com' && password === 'admin') {
        currentUser = { id: 1, name: 'Admin', email, role: 'admin' };
    } else {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            currentUser = { id: user.id, name: user.name, email: user.email, role: 'user' };
        } else {
            alert('Invalid credentials');
            return;
        }
    }
    
    saveData();
    updateUI();
    document.getElementById('auth-modal').style.display = 'none';
    alert('Logged in successfully!');
}

function register(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        alert('User already exists');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In real app, this would be hashed
        phone
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = { id: newUser.id, name: newUser.name, email: newUser.email, role: 'user' };
    saveData();
    updateUI();
    document.getElementById('auth-modal').style.display = 'none';
    alert('Registered successfully!');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUI();
    showSection('home');
}

// Admin functions
function showAdminTab(tab) {
    const adminContent = document.getElementById('admin-content');
    document.querySelectorAll('.admin-tabs button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    switch(tab) {
        case 'restaurants':
            adminContent.innerHTML = '<p>Manage restaurants functionality would be implemented here</p>';
            break;
        case 'menu':
            adminContent.innerHTML = '<p>Manage menu items functionality would be implemented here</p>';
            break;
        case 'orders':
            adminContent.innerHTML = '<p>Manage orders functionality would be implemented here</p>';
            break;
    }
}