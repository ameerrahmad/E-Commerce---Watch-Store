import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

export default function ServicesPage() {
  const services = [
    { icon: '🔧', t: 'Watch Servicing', d: 'Full movement overhaul, cleaning, lubrication and regulation by our certified Swiss watchmakers. Recommended every 3–5 years.', btn: 'Book Service' },
    { icon: '🛡️', t: 'Warranty & Repair', d: 'All ChronoLux watches carry a 5-year international warranty covering manufacturing defects and movement performance.', btn: 'Register Watch' },
    { icon: '✍️', t: 'Personal Engraving', d: 'Add a personal message or monogram to the caseback of any ChronoLux watch. A truly timeless gift.', btn: 'Request Engraving' },
    { icon: '🔍', t: 'Authentication', d: 'Verify the authenticity of any ChronoLux timepiece through our official authentication programme.', btn: 'Authenticate' },
    { icon: '📦', t: 'Gift Packaging', d: 'Every order ships in our signature dark navy gift box with gold ribbon, certificate and polishing cloth.', btn: 'Learn More' },
    { icon: '💎', t: 'Bespoke Commission', d: 'Design a one-of-a-kind watch with our ateliers. From dial colour to strap material — fully personalised.', btn: 'Enquire Now' },
  ];

  const steps = [
    { n: '1', t: 'Request', d: 'Submit a service request online or visit one of our boutiques.' },
    { n: '2', t: 'Ship', d: 'Send your watch using our free insured pre-paid shipping label.' },
    { n: '3', t: 'Service', d: 'Our master watchmakers perform the service and quality checks.' },
    { n: '4', t: 'Return', d: 'Receive your serviced watch, renewed and certified.' },
  ];

  const pricing = [
    ['Basic Service', 'Clean, oil, regulate', '2–3 weeks', 'From $280'],
    ['Full Overhaul', 'Complete movement strip & rebuild', '4–6 weeks', 'From $580'],
    ['Crystal Replacement', 'Sapphire crystal swap', '1 week', 'From $120'],
    ['Strap Replacement', 'OEM strap fitting', 'Same day', 'From $60'],
    ['Engraving', 'Caseback laser engraving', '1 week', 'From $80'],
  ];

  const card = "flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)]";

  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-brand-primary)] py-18 px-12 text-center border-b border-[var(--color-border-muted)] max-sm:py-12 max-sm:px-4">
        <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">What We Offer</h4>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">Beyond the <span className="text-[var(--color-brand-gold)]">Timepiece</span></h1>
        <p className="max-w-[520px] mx-auto text-[var(--color-text-secondary)]">From expert servicing to personal engraving — we care for your watch throughout its lifetime.</p>
      </div>

      {/* Core Services */}
      <section className="flex flex-col items-center py-20 px-12 max-sm:px-4 max-sm:py-12">
        <h4 className="text-center text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Our Services</h4>
        <h2 className="text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Craftsmanship at Every Stage</h2>
        <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm" />
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <div key={i} className={card + " items-center text-center p-8 gap-3 max-w-[300px]"}>
              <div className="text-5xl">{s.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{s.t}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] m-0">{s.d}</p>
              <button onClick={() => showToast(s.btn + ' request sent')} className="py-2 px-5 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">{s.btn}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--color-brand-primary)] py-20 px-[10%] border-t border-[var(--color-border-muted)] max-sm:px-4 max-sm:py-12">
        <h4 className="text-center text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">How It Works</h4>
        <h2 className="text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">The Service Journey</h2>
        <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm" />
        <div className="flex gap-6 flex-wrap justify-center mt-4">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 min-w-[200px] max-w-[260px] text-center p-6">
              <div className="w-13 h-13 rounded-full border-2 border-[var(--color-brand-gold)] flex items-center justify-center mx-auto mb-4 text-xl text-[var(--color-brand-gold)] font-bold">{s.n}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0 mb-2">{s.t}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] m-0">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="flex flex-col items-center py-20 px-12 max-sm:px-4 max-sm:py-12">
        <h2 className="text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Service Pricing</h2>
        <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm" />
        <div className="w-full overflow-x-auto">
          <table className="w-full max-w-[800px] mx-auto border-collapse rounded-lg overflow-hidden text-sm bg-[var(--color-bg-card)]">
            <thead className="bg-[var(--color-brand-secondary)] border-b-2 border-[var(--color-brand-gold)]">
              <tr>{['Service Type', 'Includes', 'Duration', 'Price'].map(h => (<th key={h} className="py-3.5 px-4 text-left text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-brand-gold)]">{h}</th>))}</tr>
            </thead>
            <tbody>
              {pricing.map((r, i) => (
                <tr key={i} className="border-b border-[var(--color-border-muted)] odd:bg-[var(--color-bg-card)] even:bg-[var(--color-brand-primary)]">
                  <td className="py-3 px-4 text-[var(--color-text-secondary)]">{r[0]}</td>
                  <td className="py-3 px-4 text-[var(--color-text-secondary)]">{r[1]}</td>
                  <td className="py-3 px-4 text-[var(--color-text-secondary)]">{r[2]}</td>
                  <td className="py-3 px-4 text-[var(--color-brand-gold)] font-semibold">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/contact" className="mt-8"><button className="py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">Contact Us for a Quote</button></Link>
      </section>
    </>
  );
}
