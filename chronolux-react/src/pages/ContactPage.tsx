function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

const inp = "w-full py-3 px-3.5 text-base text-[var(--color-text-primary)] bg-[var(--color-brand-primary)] border border-[var(--color-border-primary)] rounded-md transition-all duration-300 focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.2)]";
const lbl = "block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1.5";
const card = "bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg";

export default function ContactPage() {
  const sel = "appearance-none " + inp + " cursor-pointer pr-9 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23C9A84C%27%20stroke-width=%271.5%27%20fill=%27none%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center]";

  const contacts = [
    { icon: '📍', t: 'Head Office', lines: ['14 Rue de la Paix', 'Geneva 1201, Switzerland'] },
    { icon: '📞', t: 'Phone', lines: ['+41 22 123 4567'], sub: 'Mon–Fri, 9am – 6pm CET' },
    { icon: '✉️', t: 'Email', lines: ['hello@chronolux.com'], sub: 'Reply within 24 hours' },
    { icon: '🏬', t: 'Boutiques', lines: ['Geneva · Paris · Dubai · Tokyo · New York'] },
  ];

  return (
    <>
      <div className="bg-[var(--color-brand-primary)] py-18 px-12 text-center border-b border-[var(--color-border-muted)] max-sm:py-12 max-sm:px-4">
        <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Get In Touch</h4>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">We're Here to <span className="text-[var(--color-brand-gold)]">Help</span></h1>
        <p className="max-w-[500px] mx-auto text-[var(--color-text-secondary)]">Our team of experts is available Monday to Friday, 9am – 6pm CET.</p>
      </div>

      <div className="max-w-[1280px] mx-auto py-12 px-6 max-sm:py-7 max-sm:px-4">
        <div className="flex gap-12 flex-wrap items-start">
          {/* Form */}
          <div className="flex-[2] min-w-[280px]">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Send a Message</h2>
            <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />
            <form onSubmit={e => { e.preventDefault(); showToast("Message sent! We'll reply within 24 hours."); }} className={card + " p-9 max-w-full max-sm:p-6"}>
              <div className="flex gap-4 flex-wrap mb-4">
                <div className="flex-1 min-w-[140px]"><label htmlFor="cf" className={lbl}>First Name</label><input type="text" id="cf" placeholder="Jean" required className={inp} /></div>
                <div className="flex-1 min-w-[140px]"><label htmlFor="cl" className={lbl}>Last Name</label><input type="text" id="cl" placeholder="Dupont" required className={inp} /></div>
              </div>
              <div className="mb-4"><label htmlFor="ce" className={lbl}>Email Address</label><input type="email" id="ce" placeholder="you@example.com" required className={inp} /></div>
              <div className="mb-4">
                <label htmlFor="cs" className={lbl}>Subject</label>
                <select id="cs" className={sel}><option>General Enquiry</option><option>Order &amp; Shipping</option><option>Watch Service</option><option>Warranty Claim</option><option>Press &amp; Partnership</option></select>
              </div>
              <div className="mb-4">
                <label htmlFor="cm" className={lbl}>Message</label>
                <textarea id="cm" placeholder="Tell us how we can help…" required className={inp + " resize-y min-h-[120px]"} />
              </div>
              <button type="submit" className="w-full py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-5">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Contact Details</h2>
            <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-2 rounded-sm" />
            {contacts.map((c, i) => (
              <div key={i} className={card + " p-6 flex flex-col gap-2.5"}>
                <div className="text-2xl">{c.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{c.t}</h3>
                {c.lines.map((l, j) => <p key={j} className="m-0 text-[var(--color-text-secondary)]">{l}</p>)}
                {c.sub && <p className="m-0 text-xs text-[var(--color-text-muted)]">{c.sub}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-15">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Find Us</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />
          <div className="w-full h-80 bg-[var(--color-brand-secondary)] border border-[var(--color-border-primary)] rounded-lg flex items-center justify-center flex-col gap-3">
            <div className="text-5xl">🗺️</div>
            <p className="text-[var(--color-text-muted)] m-0">Interactive map — 14 Rue de la Paix, Geneva, Switzerland</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"><button className="py-2 px-5 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)] transition-all duration-300">Open in Google Maps</button></a>
          </div>
        </div>
      </div>
    </>
  );
}
