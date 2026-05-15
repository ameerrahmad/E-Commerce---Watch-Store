import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum: number, item: { qty: number }) => sum + (item.qty || 1), 0);
    setCartCount(total);
  }, [location]);

  useEffect(() => {
    const handleStorage = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const total = cart.reduce((sum: number, item: { qty: number }) => sum + (item.qty || 1), 0);
      setCartCount(total);
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('cart-updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('cart-updated', handleStorage);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLink = (to: string, label: string) => (
    <li>
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className={`
          text-[var(--color-text-secondary)] no-underline text-sm tracking-wider uppercase font-medium
          transition-colors duration-300 py-1 border-b border-transparent
          hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)]
          ${isActive(to) ? 'text-[var(--color-brand-gold)]! border-[var(--color-brand-gold)]!' : ''}
          max-md:block max-md:py-3.5 max-md:px-6 max-md:text-base max-md:border-b max-md:border-[var(--color-border-muted)]
        `}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="flex items-center justify-between px-12 h-[72px] bg-[rgba(7,9,15,0.96)] backdrop-blur-xl border-b border-[var(--color-border-muted)] sticky top-0 z-[1000] max-md:px-5">
      <Link to="/" className="text-2xl font-bold tracking-[0.12em] text-[var(--color-brand-gold)] no-underline uppercase">
        ChronoLux
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        className="hidden max-md:flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1.5 shadow-none hover:bg-transparent hover:shadow-none hover:transform-none"
      >
        <span className="block w-6 h-0.5 bg-[var(--color-brand-gold)] rounded-sm transition-all duration-300" />
        <span className="block w-6 h-0.5 bg-[var(--color-brand-gold)] rounded-sm transition-all duration-300" />
        <span className="block w-6 h-0.5 bg-[var(--color-brand-gold)] rounded-sm transition-all duration-300" />
      </button>

      <ul className={`
        flex items-center gap-8 list-none m-0 p-0
        max-md:absolute max-md:top-[72px] max-md:left-0 max-md:right-0 max-md:flex-col max-md:bg-[rgba(7,9,15,0.98)]
        max-md:py-5 max-md:gap-0 max-md:border-b max-md:border-[var(--color-border-primary)]
        ${menuOpen ? 'max-md:flex' : 'max-md:hidden'}
      `}>
        {navLink('/', 'Home')}
        {navLink('/products', 'Collection')}

        {/* Discover Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-[var(--color-text-secondary)] text-sm tracking-wider uppercase font-medium
              bg-transparent border-none p-0 py-1 cursor-pointer shadow-none
              hover:text-[var(--color-brand-gold)] hover:bg-transparent hover:shadow-none hover:transform-none
              max-md:block max-md:py-3.5 max-md:px-6 max-md:text-base max-md:w-full max-md:text-left max-md:border-b max-md:border-[var(--color-border-muted)]"
          >
            Discover ▾
          </button>
          <div className={`
            absolute top-[calc(100%+12px)] left-0 bg-[var(--color-bg-card)] border border-[var(--color-border-primary)]
            rounded-lg min-w-[180px] flex-col py-2 shadow-[0_12px_32px_rgba(0,0,0,0.5)] z-50
            max-md:static max-md:shadow-none max-md:border-none max-md:bg-[var(--color-brand-primary)] max-md:rounded-none max-md:min-w-full
            ${dropdownOpen ? 'flex' : 'hidden'}
          `}>
            <Link
              to="/services"
              onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
              className="block py-2.5 px-5 text-[var(--color-text-secondary)] text-sm no-underline
                hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-brand-gold)]"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
              className="block py-2.5 px-5 text-[var(--color-text-secondary)] text-sm no-underline
                hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-brand-gold)]"
            >
              Our Story
            </Link>
          </div>
        </li>

        {navLink('/dashboard', 'Dashboard')}
        {navLink('/reviews', 'Reviews')}
        {navLink('/contact', 'Contact')}

        {/* Cart */}
        <li>
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative text-[var(--color-text-secondary)] no-underline text-sm tracking-wider uppercase font-medium
              hover:text-[var(--color-brand-gold)]
              max-md:block max-md:py-3.5 max-md:px-6"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] rounded-full w-[18px] h-[18px] text-[0.65rem] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <button
            onClick={toggleTheme}
            className="py-1 px-3 text-xs bg-transparent text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] rounded-md cursor-pointer
              hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)] hover:transform-none hover:shadow-none transition-all duration-300"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>

        {/* Sign In */}
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="py-2 px-5 text-xs font-semibold tracking-wider uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)]">
              Sign In
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
