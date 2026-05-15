import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

const inp = "w-full py-3 px-3.5 text-base text-[var(--color-text-primary)] bg-[var(--color-brand-primary)] border border-[var(--color-border-primary)] rounded-md transition-all duration-300 focus:outline-none focus:border-[var(--color-brand-accent)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.2)]";
const lbl = "block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1.5";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] py-10 px-5">
      <div className="text-center mb-8">
        <Link to="/" className="text-3xl font-bold tracking-[0.12em] text-[var(--color-brand-gold)] uppercase no-underline">ChronoLux</Link>
        <p className="mt-2 text-[var(--color-text-muted)] text-sm">Welcome back. Please sign in.</p>
      </div>

      <form
        onSubmit={e => { e.preventDefault(); showToast('Signed in successfully!'); }}
        className="bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg p-10 w-full max-w-[460px] max-sm:p-7"
      >
        <div className="mb-4">
          <label htmlFor="email" className={lbl}>Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" required className={inp} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={lbl}>Password</label>
          <input type="password" id="password" placeholder="••••••••" required className={inp} />
        </div>
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer text-[var(--color-text-secondary)]">
            <input type="checkbox" className="w-auto" /> Remember me
          </label>
          <a href="#" className="text-sm text-[var(--color-brand-gold)] no-underline hover:text-[var(--color-brand-accent)]">Forgot password?</a>
        </div>
        <button type="submit" className="w-full py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,168,76,0.35)]">
          Sign In
        </button>
        <p className="text-center mt-5 text-sm text-[var(--color-text-secondary)]">
          Don't have an account? <Link to="/register" className="text-[var(--color-brand-gold)] no-underline hover:text-[var(--color-brand-accent)]">Create one →</Link>
        </p>
      </form>
    </div>
  );
}
