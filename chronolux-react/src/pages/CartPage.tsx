import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function showToast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-gold)', color: 'var(--color-brand-primary)', padding: '14px 32px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', zIndex: '9999', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(201,168,76,0.35)' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

type CartItem = { id: string; name: string; price: number; image: string; qty: number };

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = () => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  };

  useEffect(() => { loadCart(); }, []);

  const saveCart = (c: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(c));
    setCart(c);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const changeQty = (id: string, delta: number) => {
    const c = [...cart];
    const item = c.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, (item.qty || 1) + delta);
    saveCart(c);
  };

  const removeItem = (id: string) => {
    saveCart(cart.filter(i => i.id !== id));
    showToast('Item removed');
  };

  const clearCart = () => { saveCart([]); showToast('Cart cleared'); };

  const subtotal = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const btnOut = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]";
  const btnFill = "py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]";

  return (
    <div className="min-h-[calc(100vh-72px)] max-w-[1280px] mx-auto py-12 px-6 max-sm:py-7 max-sm:px-4">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">Your <span className="text-[var(--color-brand-gold)]">Cart</span></h1>
      <div className="w-[60px] h-0.5 bg-[var(--color-brand-gold)] mb-6 rounded-sm" />

      <div className="flex gap-8 flex-wrap items-start">
        {/* Cart Items */}
        <div className="flex-[2] min-w-[280px]">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm bg-[var(--color-bg-card)] min-w-[480px]">
              <thead className="bg-[var(--color-brand-secondary)] border-b-2 border-[var(--color-brand-gold)]">
                <tr>
                  {['Item', 'Price', 'Qty', 'Subtotal', 'Remove'].map(h => (
                    <th key={h} className="py-3.5 px-4 text-left text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-brand-gold)] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr><td colSpan={5} className="text-center text-[var(--color-text-muted)] py-10 italic">Your cart is empty. <Link to="/products" className="text-[var(--color-brand-gold)]">Shop now →</Link></td></tr>
                ) : cart.map(item => (
                  <tr key={item.id} className="border-b border-[var(--color-border-muted)] hover:bg-[rgba(201,168,76,0.1)]">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-[54px] h-[54px] object-cover rounded-md border border-[var(--color-border-primary)]" />
                        <span className="text-[var(--color-text-secondary)]">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">${item.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <button onClick={() => changeQty(item.id, -1)} className="py-1 px-2.5 text-xs border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">−</button>
                        <span className="min-w-[24px] text-center text-[var(--color-text-secondary)]">{item.qty || 1}</span>
                        <button onClick={() => changeQty(item.id, 1)} className="py-1 px-2.5 text-xs border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">+</button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-brand-gold)] font-semibold">${(item.price * (item.qty || 1)).toLocaleString()}</td>
                    <td className="py-3 px-4"><button onClick={() => removeItem(item.id)} className="py-1 px-2.5 text-xs border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-5 flex-wrap gap-3">
            <Link to="/products"><button className={btnOut}>← Continue Shopping</button></Link>
            {cart.length > 0 && <button className={btnOut} onClick={clearCart}>Clear Cart</button>}
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1 min-w-[260px] bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg p-7 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] m-0">Order Summary</h2>
          <div className="flex flex-col gap-3 border-b border-[var(--color-border-muted)] pb-4">
            <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Subtotal</span><span className="text-[var(--color-text-secondary)]">${subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Shipping</span><span className="text-[var(--color-brand-gold)]">Free</span></div>
            <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Tax (8%)</span><span className="text-[var(--color-text-secondary)]">${tax.toFixed(0)}</span></div>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span className="text-[var(--color-text-primary)]">Total</span><span className="text-[var(--color-brand-gold)]">${total.toFixed(0)}</span>
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1.5">Promo Code</label>
            <div className="flex gap-2 mt-1">
              <input type="text" placeholder="CHRONO10" className="flex-1 py-2.5 px-3 text-sm text-[var(--color-text-primary)] bg-[var(--color-brand-primary)] border border-[var(--color-border-primary)] rounded-md focus:outline-none focus:border-[var(--color-brand-accent)]" />
              <button onClick={() => showToast('Promo code applied!')} className="py-2 px-4 text-xs font-semibold tracking-wider uppercase border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] cursor-pointer hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">Apply</button>
            </div>
          </div>
          <button onClick={() => showToast('Redirecting to secure checkout…')} className={btnFill + " w-full mt-2"}>Proceed to Checkout →</button>
          <p className="text-xs text-center text-[var(--color-text-muted)] m-0">🔒 Secure SSL checkout. Free insured shipping.</p>
        </div>
      </div>
    </div>
  );
}
