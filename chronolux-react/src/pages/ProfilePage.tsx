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
const card = "bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg";
const btnOut = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]";
const btnFill = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]";

export default function ProfilePage() {
  return (
    <div className="max-w-[1280px] mx-auto py-12 px-6 animate-[fadeSlideIn_0.5s_ease-out] max-sm:py-7 max-sm:px-4">
      {/* Profile Header */}
      <div className="bg-[var(--color-brand-secondary)] border border-[var(--color-border-primary)] rounded-lg py-10 px-9 flex items-center gap-6 flex-wrap mb-10 max-sm:px-6">
        <div className="w-24 h-24 rounded-full bg-[var(--color-bg-card)] border-2 border-[var(--color-brand-gold)] flex items-center justify-center text-4xl">👤</div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] m-0 mb-1">Jean Dupont</h1>
          <p className="text-[var(--color-text-secondary)] m-0">jean.dupont@example.com</p>
          <p className="text-sm text-[var(--color-text-muted)] m-0 mt-1">Member since January 2023 · <span className="text-[var(--color-brand-gold)]">Gold Circle Member</span></p>
        </div>
        <Link to="/dashboard"><button className={btnOut}>View Dashboard</button></Link>
      </div>

      <div className="flex gap-6 flex-wrap">
        {/* Personal Info */}
        <div className={card + " flex-1 min-w-[320px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Personal Information</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] rounded-sm" />
          <form onSubmit={e => { e.preventDefault(); showToast('Profile updated successfully!'); }} className="flex flex-col gap-4">
            <div className="flex gap-3 flex-wrap">
              <div className="flex-1 min-w-[140px]"><label htmlFor="pf" className={lbl}>First Name</label><input type="text" id="pf" defaultValue="Jean" className={inp} /></div>
              <div className="flex-1 min-w-[140px]"><label htmlFor="pl" className={lbl}>Last Name</label><input type="text" id="pl" defaultValue="Dupont" className={inp} /></div>
            </div>
            <div><label htmlFor="pe" className={lbl}>Email</label><input type="email" id="pe" defaultValue="jean.dupont@example.com" className={inp} /></div>
            <div><label htmlFor="pp" className={lbl}>Phone</label><input type="tel" id="pp" defaultValue="+41 79 123 4567" className={inp} /></div>
            <div><label htmlFor="pc" className={lbl}>Country</label><input type="text" id="pc" defaultValue="Switzerland" className={inp} /></div>
            <button type="submit" className={btnFill}>Save Changes</button>
          </form>
        </div>

        {/* Security */}
        <div className="flex-1 min-w-[320px] flex flex-col gap-6">
          <div className={card + " p-7 flex flex-col gap-4"}>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Change Password</h2>
            <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] rounded-sm" />
            <form onSubmit={e => { e.preventDefault(); showToast('Password updated!'); }} className="flex flex-col gap-4">
              <div><label htmlFor="cp" className={lbl}>Current Password</label><input type="password" id="cp" placeholder="••••••••" required className={inp} /></div>
              <div><label htmlFor="np" className={lbl}>New Password</label><input type="password" id="np" placeholder="Min. 8 characters" required className={inp} /></div>
              <div><label htmlFor="cnp" className={lbl}>Confirm New Password</label><input type="password" id="cnp" placeholder="Repeat new password" required className={inp} /></div>
              <button type="submit" className={btnFill}>Update Password</button>
            </form>
          </div>

          {/* Addresses */}
          <div className={card + " p-7 flex flex-col gap-4"}>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Saved Addresses</h2>
            <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] rounded-sm" />
            <div className="border border-[var(--color-border-muted)] rounded-md p-4 flex justify-between items-start">
              <div>
                <p className="m-0 text-[var(--color-text-primary)] font-semibold">Home</p>
                <p className="m-0 text-sm text-[var(--color-text-secondary)]">14 Rue de la Paix, Geneva 1201, Switzerland</p>
              </div>
              <span className="text-xs py-1 px-2 rounded-full bg-[rgba(201,168,76,0.15)] text-[var(--color-brand-gold)] font-semibold">Default</span>
            </div>
            <button className={btnOut} onClick={() => showToast('Add address form coming soon')}>+ Add New Address</button>
          </div>
        </div>
      </div>

      {/* Notification Preferences & Account Actions */}
      <div className="flex gap-6 flex-wrap mt-6">
        <div className={card + " flex-1 min-w-[320px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Notification Preferences</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] rounded-sm" />
          <div className="flex flex-col gap-3">
            {[
              ['Email newsletters', true], ['New collection alerts', true], ['Order status updates', true],
              ['SMS notifications', false], ['Promotional offers', false],
            ].map(([l, checked]) => (
              <label key={l as string} className="flex items-center gap-2.5 text-sm cursor-pointer text-[var(--color-text-secondary)]">
                <input type="checkbox" defaultChecked={checked as boolean} className="w-auto" /> {l as string}
              </label>
            ))}
          </div>
          <button className={btnFill} onClick={() => showToast('Notification preferences saved')}>Save Preferences</button>
        </div>

        <div className={card + " flex-1 min-w-[320px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Account Actions</h2>
          <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] rounded-sm" />
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[var(--color-text-secondary)] m-0">Manage your account security and data.</p>
            <button className={btnOut} onClick={() => showToast('Download started')}>📥 Download My Data</button>
            <Link to="/login"><button className={btnOut + " w-full"} onClick={() => showToast('Signed out successfully')}>🚪 Sign Out</button></Link>
            <button className="py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-red-500 rounded-md bg-transparent text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white" onClick={() => showToast('Please contact support to delete your account')}>⚠️ Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
