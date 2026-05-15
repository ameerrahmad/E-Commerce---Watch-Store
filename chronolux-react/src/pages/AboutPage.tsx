import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    { icon: '⏱️', t: 'Precision', d: 'Every movement is regulated to ±2 seconds per day — exceeding COSC chronometer standards.' },
    { icon: '🤝', t: 'Integrity', d: 'We use only ethically sourced materials and operate with full transparency across our supply chain.' },
    { icon: '🌿', t: 'Sustainability', d: 'Carbon-neutral since 2022. Our ateliers run on 100% renewable energy from Swiss hydropower.' },
    { icon: '🎨', t: 'Artistry', d: 'Each dial is hand-finished by artisans who spend years mastering their craft before joining our team.' },
  ];

  const timeline = [
    { year: '1889', title: 'Foundation', text: 'Henri Lux establishes the first ChronoLux atelier in Le Locle, Switzerland, with a team of six craftsmen.' },
    { year: '1924', title: 'First Chronograph', text: 'Launch of the CL-1, our first in-house chronograph movement, winning a gold medal at the Geneva Watchmaking Exhibition.' },
    { year: '1968', title: 'Global Expansion', text: 'ChronoLux opens its first international boutique in Paris, followed by London and New York within a decade.' },
    { year: '2001', title: 'The Skeleton Era', text: 'Introduction of our skeleton movement collection, revealing the artistry of our movements through open dials.' },
    { year: '2024', title: '135th Anniversary', text: 'ChronoLux celebrates 135 years with a limited edition collection of 135 individually numbered pieces.' },
  ];

  const team = [
    { avatar: '👨‍💼', name: 'Marc Lux', role: 'CEO & President', bio: '4th generation of the founding Lux family. Leads global strategy with a deep respect for heritage.' },
    { avatar: '👩‍🔬', name: 'Sophie Renard', role: 'Master Watchmaker', bio: '40 years of watchmaking experience. Oversees all movement development and quality assurance.' },
    { avatar: '👨‍🎨', name: 'Kenji Tanaka', role: 'Creative Director', bio: 'Former Patek Philippe designer. Brings a fusion of Eastern minimalism and Swiss tradition to each collection.' },
  ];

  const secTitle = "text-center text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2";
  const secH2 = "text-center text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3";
  const secLine = "w-[60px] h-0.5 bg-[var(--color-brand-gold)] mx-auto mb-10 rounded-sm";
  const card = "flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--color-brand-gold)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(201,168,76,0.18)]";

  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--color-brand-primary)] py-20 px-[10%] border-b border-[var(--color-border-muted)] flex gap-15 flex-wrap items-center max-sm:px-4 max-sm:py-12 max-sm:gap-8">
        <div className="flex-1 min-w-[260px]">
          <h4 className="text-base font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">Est. 1889</h4>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[var(--color-text-primary)] mb-4">A Legacy Measured in <span className="text-[var(--color-brand-gold)]">Seconds</span></h1>
          <p className="text-[var(--color-text-secondary)] mb-4">Born in the Jura mountains of Switzerland, ChronoLux has been defining the art of fine watchmaking for over 135 years.</p>
          <Link to="/products"><button className="py-3 px-7 text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">Explore Collection</button></Link>
        </div>
        <img src="/images/image2.png" alt="Master watchmaker" className="flex-1 min-w-[260px] max-w-[520px] rounded-lg object-cover w-full" />
      </div>

      {/* Values */}
      <section className="flex flex-col items-center py-20 px-12 max-sm:px-4 max-sm:py-12">
        <h4 className={secTitle}>What We Stand For</h4>
        <h2 className={secH2}>Our Core Values</h2>
        <div className={secLine} />
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((v, i) => (
            <div key={i} className={card + " items-center text-center p-8 gap-3 max-w-[280px]"}>
              <div className="text-5xl">{v.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{v.t}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm m-0">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-brand-primary)] py-20 px-[10%] border-t border-[var(--color-border-muted)] max-sm:px-4 max-sm:py-12">
        <h4 className={secTitle}>Our History</h4>
        <h2 className={secH2}>Milestones in Time</h2>
        <div className={secLine} />
        <div className="flex flex-col max-w-[700px] mx-auto">
          {timeline.map((t, i) => (
            <div key={i} className={`flex gap-6 items-start py-6 ${i < timeline.length - 1 ? 'border-b border-[var(--color-border-muted)]' : ''}`}>
              <div className="min-w-[80px] text-right text-[var(--color-brand-gold)] font-bold text-lg pt-1">{t.year}</div>
              <div className="w-0.5 bg-[var(--color-brand-gold)] min-h-[60px] mt-1.5 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0 mb-2">{t.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] m-0">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col items-center py-20 px-12 max-sm:px-4 max-sm:py-12">
        <h4 className={secTitle}>The People</h4>
        <h2 className={secH2}>Meet Our Leadership</h2>
        <div className={secLine} />
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((m, i) => (
            <div key={i} className={card + " items-center text-center p-8 gap-3 max-w-[240px]"}>
              <div className="w-20 h-20 rounded-full bg-[var(--color-brand-secondary)] border-2 border-[var(--color-brand-gold)] flex items-center justify-center text-3xl">{m.avatar}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text-secondary)] m-0">{m.name}</h3>
              <h4 className="text-sm font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)] m-0">{m.role}</h4>
              <p className="text-sm text-[var(--color-text-secondary)] m-0">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-brand-secondary)] py-20 px-6 text-center border-t border-[var(--color-border-muted)]">
        <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-[var(--color-text-primary)] mb-3">Ready to Own a Piece of History?</h2>
        <p className="max-w-[480px] mx-auto mb-8 text-[var(--color-text-secondary)]">Discover our full collection and find the watch that tells your story.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/products"><button className="py-4 px-10 text-base font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-[var(--color-brand-gold)] text-[var(--color-brand-primary)] transition-all duration-300 hover:bg-[var(--color-brand-accent)]">Browse Collection</button></Link>
          <Link to="/contact"><button className="py-4 px-10 text-base font-semibold tracking-[0.1em] uppercase cursor-pointer border border-[var(--color-brand-gold)] rounded-md bg-transparent text-[var(--color-brand-gold)] transition-all duration-300 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-primary)]">Contact Us</button></Link>
        </div>
      </section>
    </>
  );
}
