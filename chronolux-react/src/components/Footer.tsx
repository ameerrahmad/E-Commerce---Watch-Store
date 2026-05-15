import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary)] border-t border-[var(--color-border-primary)] pt-15 pb-8 mt-20">
      <div className="flex flex-wrap justify-between gap-10 max-w-[1280px] mx-auto px-12 max-lg:px-6 max-sm:flex-col max-sm:px-5">

        {/* Brand */}
        <div className="flex flex-col gap-3 min-w-[160px]">
          <h1 className="text-2xl text-[var(--color-brand-gold)] tracking-[0.14em] uppercase m-0 font-bold">ChronoLux</h1>
          <p className="text-[var(--color-text-muted)] text-sm m-0">Swiss luxury watches since 1889.</p>
          <p className="text-[var(--color-text-muted)] text-sm m-0">Crafted with passion, worn with pride.</p>
        </div>

        {/* Collection */}
        <div className="flex flex-col gap-3 min-w-[160px]">
          <h2 className="text-xs text-[var(--color-brand-gold)] tracking-[0.1em] uppercase m-0 mb-2 font-semibold">Collection</h2>
          <Link to="/products" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">All Watches</Link>
          <Link to="/products" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Chronographs</Link>
          <Link to="/products" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Divers</Link>
          <Link to="/products" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Ladies</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3 min-w-[160px]">
          <h2 className="text-xs text-[var(--color-brand-gold)] tracking-[0.1em] uppercase m-0 mb-2 font-semibold">Company</h2>
          <Link to="/about" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Our Story</Link>
          <Link to="/services" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Services</Link>
          <Link to="/contact" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Contact</Link>
          <Link to="/reviews" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Reviews</Link>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-3 min-w-[160px]">
          <h2 className="text-xs text-[var(--color-brand-gold)] tracking-[0.1em] uppercase m-0 mb-2 font-semibold">Account</h2>
          <Link to="/dashboard" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Dashboard</Link>
          <Link to="/profile" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">My Profile</Link>
          <Link to="/cart" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Cart</Link>
          <Link to="/login" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Sign In</Link>
          <Link to="/register" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Register</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3 min-w-[160px]">
          <h2 className="text-xs text-[var(--color-brand-gold)] tracking-[0.1em] uppercase m-0 mb-2 font-semibold">Support</h2>
          <Link to="/contact" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Help Center</Link>
          <Link to="/services" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Warranty</Link>
          <Link to="/contact" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Returns</Link>
          <Link to="/dashboard" className="text-[var(--color-text-muted)] text-sm no-underline transition-colors duration-300 hover:text-[var(--color-brand-gold)]">Track Order</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-center border-t border-[var(--color-border-muted)] mt-10 pt-6">
        <p className="text-[var(--color-text-muted)] text-sm m-0">© 2025 ChronoLux. All rights reserved. Swiss Made.</p>
      </div>
    </footer>
  );
}
