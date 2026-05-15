import { useState } from 'react';
import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

export default function ProductDetailPage() {
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState('/images/image3.png');
  const thumbs = ['/images/image3.png', '/images/image5.png', '/images/image6.png'];

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const ex = cart.find((i: { id: string }) => i.id === 'prod-1');
    if (ex) ex.qty = (ex.qty || 1) + qty;
    else cart.push({ id: 'prod-1', name: 'Chronograph Pro', price: 2850, image: '/images/image3.png', qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    showToast('Added to cart!');
  };

  const specs = [
    ['Movement', 'Swiss ETA 7750 Automatic'], ['Case Diameter', '42mm'], ['Case Material', '316L Stainless Steel'],
    ['Crystal', 'Scratch-resistant Sapphire'], ['Water Resistance', '100 metres / 10 ATM'], ['Power Reserve', '42 hours'],
    ['Dial Colour', 'Matte Black'], ['Lug Width', '20mm'], ['Weight', '145g (with bracelet)'], ['Warranty', '5 Years International'],
  ];

  const related = [
    { cat: 'Diver', name: 'Diver X1', price: '$3,400', img: '/images/image5.png' },
    { cat: 'Pilot', name: 'Aviator GMT', price: '$4,100', img: '/images/image3.png' },
    { cat: 'Ladies', name: 'Lady Diamond', price: '$5,200', img: '/images/image6.png' },
  ];

  const sel = "appearance-none w-full py-2.5 px-3.5 text-sm text-[var(--color-text-primary)] bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-md cursor-pointer hover:border-[var(--color-brand-gold)] focus:outline-none focus:border-[var(--color-brand-accent)] pr-9 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23C9A84C%27%20stroke-width=%271.5%27%20fill=%27none%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center]";

  return (
    <>
      {/* Breadcrumb */}
      <div className="py-4 px-12 bg-[var(--color-bg-card)] border-b border-[var(--color-border-muted)] text-sm text-[var(--color-text-muted)] max-md:px-5">
        <Link to="/" className="text-[var(--color-brand-gold)] no-underline">Home</Link> &nbsp;/&nbsp;
        <Link to="/products" className="text-[var(--color-brand-gold)] no-underline">Collection</Link> &nbsp;/&nbsp;
        <span className="text-[var(--color-brand-gold)]">Chronograph Pro</span>
      </div>

      <div className="max-w-[1280px] mx-auto py-12 px-6 max-sm:py-7 max-sm:px-4">
        {/* Product Layout */}
        <div className="flex gap-15 flex-wrap items-start max-sm:gap-8">
          {/* Gallery */}
          <div className="flex-1 min-w-[280px] max-w-[520px]">
            <img src={mainImg} alt="Chronograph Pro" className="w-full rounded-lg border border-[var(--color-border-primary)]" />
            <div className="flex gap-3 mt-3">
              {thumbs.map((img, i) => (
                <img key={i} src={img} alt={`View ${i + 1}`} onClick={() => setMainImg(img)}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${mainImg === img ? 'border-[var(--color-brand-gold)]' : 'border-[var(--color-border-primary)] opacity-60'}`} />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-[280px] flex flex-col gap-4">
            <div>
              <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0 mb-1">Chronograph Collection</h4>
              <h1 className="text-3xl font-bold text-[var(--color-text-primary)] m-0 mb-2">Chronograph Pro</h1>
              <p className="text-[var(--color-text-secondary)] m-0">Ref. CL-CH-001 &nbsp;|&nbsp; <span className="text-[var(--color-brand-gold)]">In Stock</span></p>
            </div>
            <p className="text-3xl font-bold text-[var(--color-brand-gold)] m-0">$2,850</p>
            <p className="text-[var(--color-text-secondary)]">A masterpiece of precision engineering. The Chronograph Pro features a triple sub-dial layout, Swiss ETA 7750 movement, and a scratch-resistant sapphire crystal.</p>

            <div>
              <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1.5">Strap Option</label>
              <select className={sel}><option>Brown Leather</option><option>Black Leather</option><option>Steel Bracelet</option><option>Black Rubber</option></select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)]">Quantity</label>
              <div className="flex items-center border border-[var(--color-border-primary)] rounded-md overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="py-2 px-3.5 border-none rounded-none bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] cursor-pointer font-bold">−</button>
                <input type="number" value={qty} readOnly className="w-12 text-center border-none bg-[var(--color-bg-card)] py-2 text-[var(--color-text-primary)]" />
                <button onClick={() => setQty(qty + 1)} className="py-2 px-3.5 border-none rounded-none bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] cursor-pointer font-bold">+</button>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button onClick={addToCart} className="flex-1 py-4 px-10 text-base font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">Add to Cart</button>
              <button onClick={() => showToast('Saved to wishlist ♡')} className="py-4 px-10 text-base font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">♡ Wishlist</button>
            </div>

            <div className="flex gap-5 py-4 border-t border-b border-[var(--color-border-muted)] flex-wrap">
              <span className="text-sm text-[var(--color-text-muted)]">🚚 Free shipping worldwide</span>
              <span className="text-sm text-[var(--color-text-muted)]">🛡️ 5-year warranty</span>
              <span className="text-sm text-[var(--color-text-muted)]">↩ 30-day returns</span>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-15">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Technical Specifications</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />
          <div className="w-full overflow-x-auto">
            <table className="w-full max-w-[720px] border-collapse rounded-lg overflow-hidden text-sm bg-[var(--color-bg-card)]">
              <thead className="bg-[var(--color-brand-secondary)] border-b-2 border-[var(--color-brand-gold)]">
                <tr><th className="py-3.5 px-4 text-left text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-brand-gold)]">Specification</th><th className="py-3.5 px-4 text-left text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-brand-gold)]">Detail</th></tr>
              </thead>
              <tbody>
                {specs.map(([s, d], i) => (
                  <tr key={i} className="border-b border-[var(--color-border-muted)] odd:bg-[var(--color-bg-card)] even:bg-[var(--color-brand-primary)]">
                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">{s}</td>
                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related */}
        <div className="mt-15">
          <h2 className="text-center text-xl font-semibold text-[var(--color-text-primary)] mb-3">You May Also Like</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm" />
          <div className="flex flex-wrap justify-center gap-6">
            {related.map((r, i) => (
              <div key={i} className="flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg overflow-hidden w-[280px] transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)]">
                <img src={r.img} alt={r.name} className="w-full h-auto object-contain rounded-md" />
                <div className="p-4 flex flex-col gap-1.5">
                  <h4 className="text-sm font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0">{r.cat}</h4>
                  <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{r.name}</h3>
                  <p className="text-[var(--color-brand-gold)] font-bold m-0">{r.price}</p>
                  <Link to="/product-detail"><button className="w-full py-2 px-3 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-accent)]">View Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
