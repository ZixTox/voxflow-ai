import { LayoutDashboard, Video, Users, Settings } from 'lucide-react';

export default function Portal() {
  return (
    <div style={{ display: 'flex', minHeight: '80vh', borderTop: '1px solid var(--glass-border)' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', borderRight: '1px solid var(--glass-border)', padding: '2rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', fontWeight: 600, padding: '0.75rem', background: 'var(--glass-border)', borderRadius: '8px' }}>
            <LayoutDashboard size={20} /> Overview
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', padding: '0.75rem', cursor: 'pointer' }}>
            <Video size={20} /> Dubbing Projects
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', padding: '0.75rem', cursor: 'pointer' }}>
            <Users size={20} /> Lead Campaigns
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', padding: '0.75rem', cursor: 'pointer' }}>
            <Settings size={20} /> Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Welcome back, Partner.</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Active Videos</h4>
            <div style={{ fontSize: '2.5rem', fontFamily: 'Outfit', fontWeight: 700 }}>4</div>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>+2 this week</p>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Leads Generated</h4>
            <div style={{ fontSize: '2.5rem', fontFamily: 'Outfit', fontWeight: 700 }}>128</div>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem' }}>+15% vs last month</p>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Next Payment</h4>
            <div style={{ fontSize: '2.5rem', fontFamily: 'Outfit', fontWeight: 700 }}>$1,299</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Due in 14 days</p>
          </div>

        </div>

        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
          <p style={{ color: 'var(--text-muted)' }}>We are currently migrating this section to n8n for live automated updates.</p>
        </div>
      </div>
    </div>
  );
}
