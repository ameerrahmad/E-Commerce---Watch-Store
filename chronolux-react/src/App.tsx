import './App.css'

function App() {

  const showToast = (message: string) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  const getCart = (): { id: string; name: string; price: number; image: string; qty: number }[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  };

  const addToCart = (id: string, name: string, price: number, image: string) => {
    const cart = getCart();
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ id, name, price, image, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast(name + ' added to cart!');
  };

  const updateCartBadge = () => {
    const cart = getCart();
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const total = cart.reduce((sum: number, item: { qty: number }) => sum + (item.qty || 1), 0);
      badge.textContent = String(total);
      badge.style.display = total > 0 ? 'flex' : 'none';
    }
  };

  const toggleMenu = () => {
    const menu = document.getElementById('nav-menu');
    if (menu) menu.classList.toggle('open');
  };

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? '' : 'dark');
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav>
        <a href="index.html">ChronoLux</a>

        <button
          className="menu-toggle"
          id="hamburger"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        <ul id="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="pages/products.html">Collection</a></li>
          <li className="dropdown">
            <a href="#">Discover ▾</a>
            <div className="dropdown-menu">
              <a href="pages/services.html">Services</a>
              <a href="pages/about.html">Our Story</a>
            </div>
          </li>
          <li><a href="pages/contact.html">Contact</a></li>
          <li>
            <a href="pages/cart.html" className="cart-link">
              🛒 <span id="cart-badge" className="cart-badge">0</span>
            </a>
          </li>
          <li>
            <button
              id="dark-mode-btn"
              className="tiny-button border-button"
              onClick={toggleDarkMode}
            >
              🌙
            </button>
          </li>
          <li><a href="pages/login.html"><button className="sm-button">Sign In</button></a></li>
        </ul>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('sources/image1.png')" }}
        ></div>
        <div className="hero-content">
          <h4>Swiss Precision Since 1889</h4>
          <h1>Time Is Your <span className="accent-text">Masterpiece</span></h1>
          <p className="hero-subtitle">
            Handcrafted mechanical watches that transcend generations. Where art meets engineering.
          </p>
          <div className="hero-actions">
            <a href="pages/products.html"><button className="lg-button">Explore Collection</button></a>
            <a href="pages/about.html"><button className="lg-button border-button">Our Story</button></a>
          </div>
        </div>
      </section>

      {/* ===== FEATURED COLLECTION ===== */}
      <section className="section">
        <h4 className="section-title">Featured Timepieces</h4>
        <h2 className="section-title">Crafted for the Extraordinary</h2>
        <div className="section-line"></div>

        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src="sources/image3.png" alt="Chronograph Pro" />
            <div className="card-body">
              <h4>Chronograph Pro</h4>
              <h3>The Racing Edition</h3>
              <p>Triple sub-dial precision chronograph with sapphire crystal.</p>
              <p className="card-price">$2,850</p>
              <div className="card-actions">
                <a href="pages/product-detail.html"><button className="sm-button flex-1">View Details</button></a>
                <button
                  className="sm-button border-button"
                  onClick={() => addToCart('prod-1', 'Chronograph Pro', 2850, 'sources/image3.png')}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="sources/image5.png" alt="Diver X1" />
            <div className="card-body">
              <h4>Diver X1</h4>
              <h3>Deep Ocean Edition</h3>
              <p>300m water resistant with uni-directional rotating bezel.</p>
              <p className="card-price">$3,400</p>
              <div className="card-actions">
                <a href="pages/product-detail.html"><button className="sm-button flex-1">View Details</button></a>
                <button
                  className="sm-button border-button"
                  onClick={() => addToCart('prod-2', 'Diver X1', 3400, 'sources/image5.png')}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="sources/image6.png" alt="Lady Diamond" />
            <div className="card-body">
              <h4>Lady Diamond</h4>
              <h3>Elegance Series</h3>
              <p>Diamond-set bezel with mother-of-pearl dial.</p>
              <p className="card-price">$5,200</p>
              <div className="card-actions">
                <a href="pages/product-detail.html"><button className="sm-button flex-1">View Details</button></a>
                <button
                  className="sm-button border-button"
                  onClick={() => addToCart('prod-3', 'Lady Diamond', 5200, 'sources/image6.png')}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <img src="sources/image3.png" alt="Aviator GMT" />
            <div className="card-body">
              <h4>Aviator GMT</h4>
              <h3>Pilot Collection</h3>
              <p>Dual timezone GMT hand with anti-reflective crystal.</p>
              <p className="card-price">$4,100</p>
              <div className="card-actions">
                <a href="pages/product-detail.html"><button className="sm-button flex-1">View Details</button></a>
                <button
                  className="sm-button border-button"
                  onClick={() => addToCart('prod-4', 'Aviator GMT', 4100, 'sources/image3.png')}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <a href="pages/products.html"><button className="border-button">View Full Collection →</button></a>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="brand-story">
        <img src="sources/image2.png" alt="Master watchmaker" className="brand-story-img" />
        <div className="brand-story-content">
          <h4>Our Heritage</h4>
          <h2>Over a Century of Swiss Mastery</h2>
          <div className="section-line section-line--left"></div>
          <p>Born in the Swiss Jura mountains, ChronoLux has been creating extraordinary timepieces since 1889. Every watch is assembled by hand by master craftsmen who dedicate their lives to the art of horology.</p>
          <p>Each movement undergoes over 200 quality tests before it earns the ChronoLux signature.</p>
          <a href="pages/about.html"><button className="border-button btn-mt">Discover Our Story</button></a>
        </div>
      </section>

      {/* ===== SERVICES STRIP ===== */}
      <section className="section">
        <h4 className="section-title">Why ChronoLux</h4>
        <h2 className="section-title">The Promise of Perfection</h2>
        <div className="section-line"></div>

        <div className="card-container">
          <div className="card service-card">
            <div className="service-icon">⚙️</div>
            <h3>Swiss Movement</h3>
            <p>Every calibre is certified by independent Swiss testing institutes.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">🛡️</div>
            <h3>5-Year Warranty</h3>
            <p>Comprehensive coverage on all mechanical and cosmetic components.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">📦</div>
            <h3>Free Delivery</h3>
            <p>Complimentary express delivery worldwide in our signature gift box.</p>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <h4>Stay In Time</h4>
        <h2>Join the ChronoLux Circle</h2>
        <p className="newsletter-text">Be first to discover new collections, exclusive events, and watchmaking insights.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); showToast('Welcome to ChronoLux Circle!'); }}
          className="newsletter-form"
        >
          <input type="email" placeholder="Your email address" required className="newsletter-input" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-container">
          <div>
            <h1>ChronoLux</h1>
            <p>Swiss luxury watches since 1889.</p>
            <p>Crafted with passion, worn with pride.</p>
          </div>
          <div>
            <h2>Collection</h2>
            <a href="pages/products.html">All Watches</a>
            <a href="pages/products.html">Chronographs</a>
            <a href="pages/products.html">Divers</a>
            <a href="pages/products.html">Ladies</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href="pages/about.html">Our Story</a>
            <a href="pages/services.html">Services</a>
            <a href="pages/contact.html">Contact</a>
            <a href="pages/dashboard.html">My Account</a>
          </div>
          <div>
            <h2>Support</h2>
            <a href="pages/contact.html">Help Center</a>
            <a href="#">Warranty</a>
            <a href="#">Returns</a>
            <a href="#">Track Order</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ChronoLux. All rights reserved. Swiss Made.</p>
        </div>
      </footer>
    </>
  )
}

export default App
