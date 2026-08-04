import { LayoutDashboard, Video, Users, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Portal() {
  const { t } = useLanguage();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', minHeight: 'calc(100vh - 80px)' }}>
      {/* Sidebar */}
      <div style={{ borderRight: '1px solid var(--glass-border)', padding: '2rem' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>Menu</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="#" className="portal-nav-link active" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: '#fff', background: 'rgba(255,255,255,0.1)', textDecoration: 'none' }}>
            <LayoutDashboard size={18} /> {t('portal.overview')}
          </a>
          <a href="#" className="portal-nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none' }}>
            <Video size={18} /> {t('portal.dubbing_proj')}
          </a>
          <a href="#" className="portal-nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none' }}>
            <Users size={18} /> {t('portal.lead_camp')}
          </a>
          <a href="#" className="portal-nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: 'var(--text-muted)', textDecoration: 'none' }}>
            <Settings size={18} /> {t('portal.settings')}
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem 3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('portal.welcome')}</h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '3rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{t('portal.stat1')}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>14</div>
            <div style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '0.5rem' }}>{t('portal.stat1_sub')}</div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{t('portal.stat2')}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,248</div>
            <div style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '0.5rem' }}>{t('portal.stat2_sub')}</div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{t('portal.stat3')}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$3,499</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{t('portal.stat3_sub')}</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3>{t('portal.activity_title')}</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
            {t('portal.activity_desc')}
          </p>
        </div>
      </div>
    </div>
  );
}
