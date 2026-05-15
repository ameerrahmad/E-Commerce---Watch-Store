import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

export default function DashboardPage() {
  const stats = [
    { val: '4', label: 'Total Orders' },
    { val: '2', label: 'Watches Owned' },
    { val: '$8,250', label: 'Total Spent' },
    { val: '1', label: 'Active Service' },
  ];

  const orders = [
    { id: '#CL-20240112', watch: 'Chronograph Pro', date: '12 Jan 2024', amount: '$2,850', status: 'Delivered', color: 'rgba(50,180,100,0.15)', textColor: '#50B464' },
    { id: '#CL-20231025', watch: 'Diver X1', date: '25 Oct 2023', amount: '$3,400', status: 'Delivered', color: 'rgba(50,180,100,0.15)', textColor: '#50B464' },
    { id: '#CL-20240305', watch: 'Lady Diamond', date: '05 Mar 2024', amount: '$5,200', status: 'In Transit', color: 'rgba(201,168,76,0.15)', textColor: 'var(--color-brand-gold)' },
    { id: '#CL-20240418', watch: 'Skeleton One', date: '18 Apr 2024', amount: '$6,400', status: 'Processing', color: 'rgba(100,140,255,0.15)', textColor: '#6480FF' },
  ];

  const card = "bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg";
  const btnOut = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]";

  return (
    <div className="min-h-[calc(100vh-72px)] max-w-[1280px] mx-auto py-12 px-6 animate-[fadeSlideIn_0.5s_ease-out] max-sm:py-7 max-sm:px-4">
      {/* Welcome Banner */}
      <div className="bg-[var(--color-brand-secondary)] border border-[var(--color-border-primary)] rounded-lg py-8 px-9 flex items-center justify-between flex-wrap gap-5 mb-10">
        <div>
          <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0 mb-2">Welcome back</h4>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] m-0 mb-2">Jean Dupont</h1>
          <p className="text-[var(--color-text-secondary)] m-0">Member since January 2023 &nbsp;|&nbsp; <span className="text-[var(--color-brand-gold)]">Gold Circle Member</span></p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link to="/products"><button className={btnOut}>Browse Collection</button></Link>
          <Link to="/cart"><button className="py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">View Cart</button></Link>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-5 flex-wrap mb-10">
        {stats.map((s, i) => (
          <div key={i} className={card + " flex-1 min-w-[160px] p-6 flex flex-col items-center text-center gap-2"}>
            <div className="text-3xl text-[var(--color-brand-gold)] font-bold">{s.val}</div>
            <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0">{s.label}</h4>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Recent Orders</h2>
      <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />
      <div className="w-full overflow-x-auto mt-5">
        <table className="w-full border-collapse rounded-lg overflow-hidden text-sm bg-[var(--color-bg-card)]">
          <thead className="bg-[var(--color-brand-secondary)] border-b-2 border-[var(--color-brand-gold)]">
            <tr>
              {['Order ID', 'Watch', 'Date', 'Amount', 'Status', 'Action'].map(h => (
                <th key={h} className="py-3.5 px-4 text-left text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-brand-gold)] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i} className="border-b border-[var(--color-border-muted)] hover:bg-[rgba(201,168,76,0.1)] cursor-pointer odd:bg-[var(--color-bg-card)] even:bg-[var(--color-brand-primary)]">
                <td className="py-3 px-4 text-[var(--color-text-secondary)] whitespace-nowrap">{o.id}</td>
                <td className="py-3 px-4 text-[var(--color-text-secondary)] whitespace-nowrap">{o.watch}</td>
                <td className="py-3 px-4 text-[var(--color-text-secondary)] whitespace-nowrap">{o.date}</td>
                <td className="py-3 px-4 text-[var(--color-brand-gold)] font-semibold whitespace-nowrap">{o.amount}</td>
                <td className="py-3 px-4 whitespace-nowrap"><span className="py-1 px-2.5 rounded-full text-xs font-semibold" style={{ background: o.color, color: o.textColor }}>{o.status}</span></td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button onClick={() => showToast(o.status === 'In Transit' ? 'Tracking: FX-882-CHX' : o.status === 'Processing' ? 'Order is being processed' : 'View order details')} className="py-1 px-3 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">
                    {o.status === 'In Transit' ? 'Track' : o.status === 'Processing' ? 'Details' : 'View'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Account Details */}
      <div className="flex gap-6 flex-wrap mt-12">
        <div className={card + " flex-1 min-w-[260px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Account Details</h2>
          <div className="flex flex-col gap-3">
            {[['Full Name', 'Jean Dupont'], ['Email', 'jean.dupont@example.com'], ['Phone', '+41 79 123 4567'], ['Country', 'Switzerland']].map(([l, v]) => (
              <div key={l}><label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1">{l}</label><p className="my-1 text-[var(--color-text-primary)]">{v}</p></div>
            ))}
          </div>
          <button className={btnOut} onClick={() => showToast('Edit profile coming soon')}>Edit Profile</button>
        </div>

        <div className={card + " flex-1 min-w-[260px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Saved Address</h2>
          <div className="flex flex-col gap-2">
            <p className="m-0 text-[var(--color-text-primary)]">Jean Dupont</p>
            <p className="m-0 text-[var(--color-text-secondary)]">14 Rue de la Paix</p>
            <p className="m-0 text-[var(--color-text-secondary)]">Geneva, 1201</p>
            <p className="m-0 text-[var(--color-text-secondary)]">Switzerland</p>
          </div>
          <button className={btnOut} onClick={() => showToast('Address updated')}>Change Address</button>
        </div>

        <div className={card + " flex-1 min-w-[260px] p-7 flex flex-col gap-4"}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Preferences</h2>
          <div className="flex flex-col gap-3">
            {['Email newsletters', 'New collection alerts', 'SMS notifications'].map((l, i) => (
              <label key={l} className="flex items-center gap-2.5 text-sm cursor-pointer text-[var(--color-text-secondary)]">
                <input type="checkbox" defaultChecked={i < 2} className="w-auto" /> {l}
              </label>
            ))}
          </div>
          <button className={btnOut} onClick={() => showToast('Preferences saved')}>Save Preferences</button>
        </div>
      </div>
    </div>
  );
}
