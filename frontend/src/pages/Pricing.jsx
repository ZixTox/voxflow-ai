import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>Simple, Transparent Pricing</h2>
        <p>Invest in automated systems that pay for themselves.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        
        <div className="glass-card">
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Dubbing Pro</h3>
          <div style={{ fontSize: '4rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
            $999<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
            Perfect for YouTubers & Course Creators.
          </p>
          <Link to="/portal" className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Get Started</Link>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Up to 8 Videos / Month</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 2 Languages Included</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Dedicated Account Manager</li>
          </ul>
        </div>

        <div className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(255,255,255,0.03) 100%)', borderColor: 'rgba(59,130,246,0.3)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase' }}>
            Most Popular
          </div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Growth Engine</h3>
          <div style={{ fontSize: '4rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
            $1,299<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
            For Agencies & B2B SaaS wanting scale.
          </p>
          <Link to="/portal" className="btn btn-primary" style={{ width: '100%', marginBottom: '2rem' }}>Get Started</Link>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 500 Qualified Leads / Month</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Custom AI Outreach Scripts</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Weekly Strategy Calls</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
