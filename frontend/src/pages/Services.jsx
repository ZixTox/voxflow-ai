import { Mic2, Users, Bot, Globe2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>Supercharge Your Reach</h2>
        <p>Choose the engine that drives your growth.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        
        {/* Dubbing Service */}
        <div className="glass-card" style={{ position: 'relative' }}>
          <div style={{ background: 'rgba(59,130,246,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--accent-primary)' }}>
            <Mic2 size={32} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>AI Video Localization</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Don't let language barriers limit your revenue. We clone your exact voice, translate your content, and perfectly sync lip movements in 15+ languages.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Globe2 size={20} color="var(--accent-primary)"/> Perfect Voice Cloning</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Globe2 size={20} color="var(--accent-primary)"/> 15+ Supported Languages</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Globe2 size={20} color="var(--accent-primary)"/> 24-Hour Turnaround</li>
          </ul>
        </div>

        {/* Lead Gen Service */}
        <div className="glass-card" style={{ position: 'relative' }}>
          <div style={{ background: 'rgba(139,92,246,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>
            <Users size={32} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>B2B Lead Generation</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Stop wasting time on cold calls. Our AI agents scrape hyper-targeted leads and run personalized outreach campaigns that actually convert into meetings.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Bot size={20} color="var(--accent-secondary)"/> Automated Data Scraping</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Bot size={20} color="var(--accent-secondary)"/> AI Personalized Emails</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Bot size={20} color="var(--accent-secondary)"/> CRM Integration</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
