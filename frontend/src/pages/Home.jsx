import { Link } from 'react-router-dom';
import { Play, Sparkles, Target, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="page-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '2rem' }}>
          <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
          The Future of Automated Scaling
        </div>
        <h1 style={{ fontSize: '5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Scale Your Agency <br />
          Without Hiring <span className="gradient-text">More People.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem' }}>
          We use cutting-edge AI to dub your content into 15+ languages and generate highly qualified B2B leads on autopilot. Zero effort required.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Start Scaling Today
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            <Play size={18} /> View Platform Demo
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="page-section" style={{ borderTop: '1px solid var(--glass-border)', textAlign: 'center', paddingTop: '4rem' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Trusted by innovative brands worldwide
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.6, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 700 }}>
            <Target size={28} /> Horizon
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 700 }}>
            <Zap size={28} /> OmniMedia
          </div>
        </div>
      </section>
    </div>
  );
}
