import { useState } from 'react';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

const reviews = [
  { name: 'Alexander Chen', watch: 'Chronograph Pro', rating: 5, date: 'March 2024', text: 'Absolutely stunning timepiece. The craftsmanship is extraordinary — you can feel the quality the moment you hold it. The triple sub-dial layout is both functional and beautiful.' },
  { name: 'Isabella Moretti', watch: 'Lady Diamond', rating: 5, date: 'February 2024', text: 'I received this as a birthday gift and it has become my most treasured possession. The diamond bezel catches light perfectly and the mother-of-pearl dial is mesmerizing.' },
  { name: 'James Crawford', watch: 'Diver X1', rating: 4, date: 'January 2024', text: 'Excellent dive watch. Took it to 60m on my last dive trip and it performed flawlessly. The luminous markers are incredibly bright. Only wish the strap had quick-release.' },
  { name: 'Sofia Andersson', watch: 'Skeleton One', rating: 5, date: 'December 2023', text: 'The open-heart design is a work of art. I find myself constantly admiring the visible mechanism. The gold bridges are hand-finished to perfection.' },
  { name: 'Raj Patel', watch: 'Aviator GMT', rating: 4, date: 'November 2023', text: 'Perfect for my frequent travels between London and Mumbai. The dual timezone is extremely practical and the pilot-style design gets compliments everywhere.' },
  { name: 'Emma Laurent', watch: 'Rose Eternal', rating: 5, date: 'October 2023', text: 'The rose gold finish is absolutely gorgeous. It elevates every outfit. ChronoLux has outdone themselves with this dress watch — pure elegance.' },
];

const card = "bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)]";
const inp = "w-full py-3 px-3.5 text-base text-[var(--color-text-primary)] bg-[var(--color-brand-primary)] border border-[var(--color-border-primary)] rounded-md transition-all duration-300 focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.2)]";
const lbl = "block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1.5";

export default function ReviewsPage() {
  const [userRating, setUserRating] = useState(0);
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <div className="bg-[var(--color-brand-primary)] py-18 px-12 text-center border-b border-[var(--color-border-muted)] max-sm:py-12 max-sm:px-4">
        <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Customer Stories</h4>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">What Our <span className="text-[var(--color-brand-gold)]">Clients</span> Say</h1>
        <p className="max-w-[500px] mx-auto text-[var(--color-text-secondary)]">Real experiences from ChronoLux owners around the world.</p>
      </div>

      <div className="max-w-[1280px] mx-auto py-12 px-6 max-sm:py-7 max-sm:px-4">
        {/* Average Rating */}
        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          <div className="text-center">
            <div className="text-5xl font-bold text-[var(--color-brand-gold)]">{avg}</div>
            <div className="text-2xl mt-1">{'★'.repeat(Math.round(Number(avg)))}{'☆'.repeat(5 - Math.round(Number(avg)))}</div>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">Based on {reviews.length} reviews</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {reviews.map((r, i) => (
            <div key={i} className={card + " p-7 w-[380px] max-sm:w-full flex flex-col gap-3"}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] m-0">{r.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] m-0 mt-1">Purchased: {r.watch}</p>
                </div>
                <span className="text-xs text-[var(--color-text-muted)]">{r.date}</span>
              </div>
              <div className="text-lg text-[var(--color-brand-gold)]">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              <p className="text-sm text-[var(--color-text-secondary)] m-0 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Write a Review */}
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Write a Review</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm" />
          <form onSubmit={e => { e.preventDefault(); showToast('Thank you for your review!'); }} className={card + " p-9 max-sm:p-6"}>
            <div className="mb-4"><label htmlFor="rn" className={lbl}>Your Name</label><input type="text" id="rn" placeholder="Your name" required className={inp} /></div>
            <div className="mb-4"><label htmlFor="rw" className={lbl}>Watch Purchased</label><input type="text" id="rw" placeholder="e.g. Chronograph Pro" required className={inp} /></div>
            <div className="mb-4">
              <label className={lbl}>Rating</label>
              <div className="flex gap-1 text-3xl cursor-pointer">
                {[1, 2, 3, 4, 5].map(n => (
                  <span key={n} onClick={() => setUserRating(n)} className={`transition-colors duration-200 ${n <= userRating ? 'text-[var(--color-brand-gold)]' : 'text-[var(--color-border-primary)]'}`}>★</span>
                ))}
              </div>
            </div>
            <div className="mb-4"><label htmlFor="rt" className={lbl}>Your Review</label><textarea id="rt" placeholder="Share your experience…" required className={inp + " resize-y min-h-[120px]"} /></div>
            <button type="submit" className="w-full py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">Submit Review</button>
          </form>
        </div>
      </div>
    </>
  );
}
