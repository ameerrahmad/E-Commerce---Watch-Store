import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

const products = [
  { id: 'prod-1', cat: 'Chronograph', name: 'Chronograph Pro', desc: 'Triple sub-dial precision with sapphire crystal glass.', price: 2850, img: '/images/image3.png' },
  { id: 'prod-2', cat: 'Diver', name: 'Diver X1', desc: '300m water resistant with luminous dial.', price: 3400, img: '/images/image5.png' },
  { id: 'prod-3', cat: 'Ladies', name: 'Lady Diamond', desc: 'Diamond-set bezel with mother-of-pearl dial.', price: 5200, img: '/images/image6.png' },
  { id: 'prod-4', cat: 'Pilot', name: 'Aviator GMT', desc: 'Dual timezone with anti-reflective sapphire.', price: 4100, img: '/images/image3.png' },
  { id: 'prod-5', cat: 'Sport', name: 'Stealth Black', desc: 'Full PVD black case with tactical green dial.', price: 2300, img: '/images/image5.png' },
  { id: 'prod-6', cat: 'Dress', name: 'Rose Eternal', desc: '18K rose gold with champagne dial & Roman numerals.', price: 7800, img: '/images/image6.png' },
  { id: 'prod-7', cat: 'Skeleton', name: 'Skeleton One', desc: 'Open-heart movement, hand-finished gold bridges.', price: 6400, img: '/images/image3.png' },
  { id: 'prod-8', cat: 'Diver', name: 'Ocean Master', desc: '500m professional dive watch with helium escape valve.', price: 4950, img: '/images/image5.png' },
];

export default function ProductsPage() {
  const addToCart = (id: string, name: string, price: number, image: string) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const ex = cart.find((i: { id: string }) => i.id === id);
    if (ex) ex.qty = (ex.qty || 1) + 1;
    else cart.push({ id, name, price, image, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    showToast(name + ' added to cart!');
  };

  const sel = "appearance-none w-full py-2.5 px-3.5 text-sm text-[var(--color-text-primary)] bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-md cursor-pointer transition-all duration-300 hover:border-[var(--color-brand-gold)] focus:outline-none focus:border-[var(--color-brand-accent)] pr-9 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23C9A84C%27%20stroke-width=%271.5%27%20fill=%27none%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center]";

  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-brand-primary)] py-15 px-12 text-center border-b border-[var(--color-border-muted)] max-sm:py-10 max-sm:px-4">
        <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Swiss Craftsmanship</h4>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">The <span className="text-[var(--color-brand-gold)]">Collection</span></h1>
        <p className="max-w-[500px] mx-auto text-[var(--color-text-secondary)]">Every timepiece is a testament to over a century of horological mastery.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center py-6 px-12 bg-[var(--color-bg-card)] border-b border-[var(--color-border-muted)] max-md:px-5">
        <div className="min-w-[180px]">
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1">Category</label>
          <select className={sel}><option>All Categories</option><option>Chronograph</option><option>Diver</option><option>Dress Watch</option><option>Pilot / Aviation</option><option>Ladies</option><option>Skeleton</option></select>
        </div>
        <div className="min-w-[180px]">
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1">Price Range</label>
          <select className={sel}><option>All Prices</option><option>Under $2,000</option><option>$2,000 – $4,000</option><option>$4,000 – $7,000</option><option>Above $7,000</option></select>
        </div>
        <div className="min-w-[180px]">
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1">Sort By</label>
          <select className={sel}><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest First</option></select>
        </div>
        <button onClick={() => showToast('Filters applied')} className="mt-5 py-2 px-5 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">Apply Filters</button>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1280px] mx-auto py-9 px-6 max-sm:px-4">
        <div className="flex flex-wrap justify-center gap-6 max-sm:gap-4">
          {products.map(p => (
            <div key={p.id} className="flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg overflow-hidden w-[280px] transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)] max-sm:w-full max-sm:max-w-[340px]">
              <img src={p.img} alt={p.name} className="w-full h-auto object-contain rounded-md" />
              <div className="p-4 flex flex-col gap-1.5 flex-1">
                <h4 className="text-sm font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0">{p.cat}</h4>
                <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{p.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] m-0">{p.desc}</p>
                <p className="text-[var(--color-brand-gold)] font-bold m-0">${p.price.toLocaleString()}</p>
                <div className="flex gap-2 mt-auto">
                  <Link to="/product-detail" className="flex-1"><button className="w-full py-2 px-3 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-accent)]">View</button></Link>
                  <button onClick={() => addToCart(p.id, p.name, p.price, p.img)} className="py-2 px-3 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">+ Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
