import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
    background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)',
    padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600',
    zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

export default function HomePage() {
  const addToCart = (id: string, name: string, price: number, image: string) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const ex = cart.find((i: { id: string }) => i.id === id);
    if (ex) ex.qty = (ex.qty || 1) + 1;
    else cart.push({ id, name, price, image, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    showToast(name + ' added to cart!');
  };

  const prods = [
    { id: 'prod-1', name: 'Chronograph Pro', sub: 'The Racing Edition', desc: 'Triple sub-dial precision chronograph with sapphire crystal.', price: 2850, img: '/images/image3.png' },
    { id: 'prod-2', name: 'Diver X1', sub: 'Deep Ocean Edition', desc: '300m water resistant with uni-directional rotating bezel.', price: 3400, img: '/images/image5.png' },
    { id: 'prod-3', name: 'Lady Diamond', sub: 'Elegance Series', desc: 'Diamond-set bezel with mother-of-pearl dial.', price: 5200, img: '/images/image6.png' },
    { id: 'prod-4', name: 'Aviator GMT', sub: 'Pilot Collection', desc: 'Dual timezone GMT hand with anti-reflective crystal.', price: 4100, img: '/images/image3.png' },
  ];

  const btn = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md transition-all duration-300";
  const btnFill = btn + " bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,168,76,0.35)]";
  const btnOut = btn + " bg-transparent text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]";
  const secTitle = "text-center text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2";
  const secH2 = "text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold tracking-[0.03em] text-[var(--color-text-primary)] mb-3";
  const secLine = "w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm";

  return (
    <>
      {/* HERO */}
      <section className="flex items-center justify-center flex-col text-center min-h-[90vh] relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.35]" style={{ backgroundImage: "url('/images/image1.png')" }} />
        <div className="relative z-10">
          <h4 className={secTitle}>Swiss Precision Since 1889</h4>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[0.04em] text-[var(--color-text-primary)] mb-4 leading-tight">
            Time Is Your <span className="text-[var(--color-brand-gold)]">Masterpiece</span>
          </h1>
          <p className="max-w-[540px] mx-auto mb-9 text-lg text-[var(--color-text-secondary)]">
            Handcrafted mechanical watches that transcend generations. Where art meets engineering.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products"><button className={btnFill + " py-4 px-10 text-base"}>Explore Collection</button></Link>
            <Link to="/about"><button className={btnOut + " py-4 px-10 text-base"}>Our Story</button></Link>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="flex flex-col items-center py-20 px-12 max-lg:px-6 max-sm:px-4 max-sm:py-12">
        <h4 className={secTitle}>Featured Timepieces</h4>
        <h2 className={secH2}>Crafted for the Extraordinary</h2>
        <div className={secLine} />
        <div className="flex flex-wrap justify-center gap-6 my-9 max-sm:gap-4">
          {prods.map(p => (
            <div key={p.id} className="flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg overflow-hidden w-[280px] transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)] max-sm:w-full max-sm:max-w-[340px]">
              <img src={p.img} alt={p.name} className="w-full h-auto object-contain rounded-md" />
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0">{p.sub}</h4>
                <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{p.name}</h3>
                <p className="text-[var(--color-text-secondary)] text-base m-0">{p.desc}</p>
                <p className="text-[var(--color-brand-gold)] text-lg font-bold m-0">${p.price.toLocaleString()}</p>
                <div className="flex gap-2.5 mt-auto">
                  <Link to="/product-detail" className="flex-1"><button className="w-full py-2 px-4 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-accent)]">View Details</button></Link>
                  <button onClick={() => addToCart(p.id, p.name, p.price, p.img)} className="py-2 px-4 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/products"><button className={btnOut}>View Full Collection →</button></Link>
      </section>

      {/* BRAND STORY */}
      <section className="flex items-center gap-15 py-20 px-[10%] flex-wrap bg-[var(--color-brand-primary)] max-sm:px-4 max-sm:py-12 max-sm:gap-8">
        <img src="/images/image2.png" alt="Watchmaker" className="w-full max-w-[480px] rounded-lg object-cover flex-1 min-w-[280px]" />
        <div className="flex-1 min-w-[260px]">
          <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Our Heritage</h4>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Over a Century of Swiss Mastery</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />
          <p className="text-[var(--color-text-secondary)] mb-3">Born in the Swiss Jura mountains, ChronoLux has been creating extraordinary timepieces since 1889.</p>
          <p className="text-[var(--color-text-secondary)] mb-3">Each movement undergoes over 200 quality tests before it earns the ChronoLux signature.</p>
          <Link to="/about"><button className={btnOut + " mt-3"}>Discover Our Story</button></Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="flex flex-col items-center py-20 px-12 max-sm:px-4 max-sm:py-12">
        <h4 className={secTitle}>Why ChronoLux</h4>
        <h2 className={secH2}>The Promise of Perfection</h2>
        <div className={secLine} />
        <div className="flex flex-wrap justify-center gap-6 my-9">
          {[
            { icon: '⚙️', t: 'Swiss Movement', d: 'Every calibre is certified by independent Swiss testing institutes.' },
            { icon: '🛡️', t: '5-Year Warranty', d: 'Comprehensive coverage on all mechanical and cosmetic components.' },
            { icon: '📦', t: 'Free Delivery', d: 'Complimentary express delivery worldwide in our signature gift box.' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg w-[280px] p-8 transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)]">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0 mb-2">{s.t}</h3>
              <p className="text-[var(--color-text-secondary)] m-0">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[var(--color-brand-secondary)] py-20 px-6 text-center">
        <h4 className={secTitle}>Stay In Time</h4>
        <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Join the ChronoLux Circle</h2>
        <p className="max-w-[480px] mx-auto mb-8 text-[var(--color-text-secondary)]">Be first to discover new collections, exclusive events, and watchmaking insights.</p>
        <form onSubmit={e => { e.preventDefault(); showToast('Welcome to ChronoLux Circle!'); }} className="flex gap-3 justify-center flex-wrap max-w-[480px] mx-auto bg-transparent border-none p-0">
          <input type="email" placeholder="Your email address" required className="flex-1 min-w-[220px] py-3 px-3.5 text-base text-[var(--color-text-primary)] bg-[var(--color-brand-primary)] border border-[var(--color-border-primary)] rounded-md focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.2)] transition-all duration-300" />
          <button type="submit" className={btnFill}>Subscribe</button>
        </form>
      </section>
    </>
  );
}
