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

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] py-12 px-5">
      <div className="text-center mb-8">
        <Link to="/" className="text-3xl font-bold tracking-[0.12em] text-[var(--color-brand-gold)] uppercase no-underline">ChronoLux</Link>
        <p className="mt-2 text-[var(--color-text-muted)] text-sm">Create your account</p>
      </div>

      <form
        onSubmit={e => { e.preventDefault(); showToast('Account created! Welcome to ChronoLux.'); }}
        className="bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg p-10 w-full max-w-[460px] max-sm:p-7"
      >
        <div className="flex gap-3 flex-wrap mb-4">
          <div className="flex-1 min-w-[140px]">
            <label htmlFor="first-name" className={lbl}>First Name</label>
            <input type="text" id="first-name" placeholder="Jean" required className={inp} />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label htmlFor="last-name" className={lbl}>Last Name</label>
            <input type="text" id="last-name" placeholder="Dupont" required className={inp} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="signup-email" className={lbl}>Email Address</label>
          <input type="email" id="signup-email" placeholder="you@example.com" required className={inp} />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className={lbl}>Phone Number</label>
          <input type="tel" id="phone" placeholder="+1 (555) 000-0000" className={inp} />
        </div>
        <div className="mb-4">
          <label htmlFor="reg-password" className={lbl}>Password</label>
          <input type="password" id="reg-password" placeholder="Min. 8 characters" required className={inp} />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className={lbl}>Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Repeat password" required className={inp} />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className={lbl}>Country</label>
          <select id="country" className={"appearance-none " + inp + " cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23C9A84C%27%20stroke-width=%271.5%27%20fill=%27none%27%20stroke-linecap=%27round%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] pr-9"}>
            <option value="">Select country…</option>
            <option>Switzerland</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>France</option>
            <option>Germany</option>
            <option>Japan</option>
            <option>UAE</option>
            <option>Pakistan</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="flex items-start gap-2 text-sm cursor-pointer text-[var(--color-text-secondary)]">
            <input type="checkbox" required className="w-auto mt-1" />
            <span>I agree to the <a href="#" className="text-[var(--color-brand-gold)] no-underline">Terms of Service</a> &amp; <a href="#" className="text-[var(--color-brand-gold)] no-underline">Privacy Policy</a></span>
          </label>
        </div>
        <button type="submit" className="w-full py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,168,76,0.35)]">
          Create Account
        </button>
        <p className="text-center mt-5 text-sm text-[var(--color-text-secondary)]">
          Already have an account? <Link to="/login" className="text-[var(--color-brand-gold)] no-underline hover:text-[var(--color-brand-accent)]">Sign in →</Link>
        </p>
      </form>
    </div>
  );
}
