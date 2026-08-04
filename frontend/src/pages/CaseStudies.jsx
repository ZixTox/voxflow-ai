import { ArrowRight, BarChart } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>Customer Success Stories</h2>
        <p>See how agencies and creators use VoxFlow to multiply their revenue.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
            <BarChart size={24} />
            <h4 style={{ fontSize: '1.2rem', margin: 0 }}>Horizon Media</h4>
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>300% ROI in 60 Days</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Horizon transitioned from manual SDR outreach to VoxFlow's AI Lead Gen engine. They closed 12 high-ticket clients in their first two months without hiring additional sales staff.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '0.75rem', borderRadius: '8px', flex: 1 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>New Clients</div>
            </div>
            <div style={{ background: 'var(--bg-dark)', padding: '0.75rem', borderRadius: '8px', flex: 1 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>$0</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SDR Salaries</div>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
            <BarChart size={24} />
            <h4 style={{ fontSize: '1.2rem', margin: 0 }}>TechEdu Creators</h4>
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Global Expansion</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A prominent tech education channel used our AI dubbing to launch in Spanish and German. Their international revenue overtook their English revenue within 4 months.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-dark)', padding: '0.75rem', borderRadius: '8px', flex: 1 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>2.5M</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>New Views</div>
            </div>
            <div style={{ background: 'var(--bg-dark)', padding: '0.75rem', borderRadius: '8px', flex: 1 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>+140%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AdSense Rev</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
