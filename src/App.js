import React, { useState } from 'react';
import './App.css';
import { products } from './data';

// --- NEW COMPONENT: Home Page (Index) ---
const Home = ({ navigateToShop }) => (
  <div className="home-container">
    {/* Hero Section */}
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Discover True Brilliance</h1>
        <p>Hand-crafted luxury for moments that last forever.</p>
        <button className="cta-btn" onClick={navigateToShop}>Shop Collection</button>
      </div>
    </section>

    {/* Featured Categories */}
    <section className="featured-section">
      <h2>Browse by Category</h2>
      <div className="category-cards">
        <div className="cat-card" onClick={navigateToShop}>
          <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400" alt="Necklaces" />
          <span>Necklaces</span>
        </div>
        <div className="cat-card" onClick={navigateToShop}>
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" alt="Rings" />
          <span>Rings</span>
        </div>
        <div className="cat-card" onClick={navigateToShop}>
          <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" alt="Earrings" />
          <span>Earrings</span>
        </div>
      </div>
    </section>

    {/* Value Props */}
    <section className="values-section">
      <div className="value-item">💎 <span>Certified Authentic</span></div>
      <div className="value-item">🚚 <span>Free Shipping</span></div>
      <div className="value-item">🎁 <span>Gift Packaging</span></div>
    </section>
  </div>
);

// --- PREVIOUS COMPONENTS (Shop & Cart) ---

const Navbar = ({ cartCount, setView }) => (
  <nav className="navbar">
    <div className="logo" onClick={() => setView('home')}>✨ LuxeGems</div>
    <div className="nav-links">
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('shop')}>Shop</button>
      <button onClick={() => setView('cart')} className="cart-btn">
        Cart ({cartCount})
      </button>
    </div>
  </nav>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <div className="price-row">
        <span className="price">${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  </div>
);

const Shop = ({ addToCart }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filteredProducts = categoryFilter === "All"
    ? products
    : products.filter(p => p.category === categoryFilter);

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h2>Our Collection</h2>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={categoryFilter === cat ? 'active' : ''}
              onClick={() => setCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const Cart = ({ cart, removeFromCart, total }) => (
  <div className="cart-container">
    <h2>Your Shopping Bag</h2>
    {cart.length === 0 ? <p>Your cart is empty.</p> : (
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item)} className="remove-btn">Remove</button>
          </div>
        ))}
        <div className="cart-total"><h3>Total: ${total}</h3></div>
      </div>
    )}
  </div>
);

// --- MAIN APP ---

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // 'home', 'shop', or 'cart'

  const addToCart = (product) => setCart([...cart, { ...product, cartId: Date.now() }]);
  const removeFromCart = (item) => setCart(cart.filter(i => i.cartId !== item.cartId));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setView={setView} />

      {view === 'home' && <Home navigateToShop={() => setView('shop')} />}
      {view === 'shop' && <Shop addToCart={addToCart} />}
      {view === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} total={total} />}

      {/* Footer for all pages */}
      <footer className="footer">
        <p>&copy; 2024 LuxeGems Jewelry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;