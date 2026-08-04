import { Mic, Target, Zap, Globe, MessageSquare, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>{t('services.title')}</h2>
        <p>{t('services.subtitle')}</p>
      </div>

      <div className="grid">
        <div className="glass-card feature-card">
          <div className="feature-icon" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
            <Mic size={24} />
          </div>
          <h3 style={{ fontSize: '1.5rem' }}>{t('services.dubbing.title')}</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {t('services.dubbing.desc')}
          </p>
          <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#cbd5e1' }}>
              <Zap size={16} color="#38bdf8" /> {t('services.dubbing.feature1')}
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#cbd5e1' }}>
              <Globe size={16} color="#38bdf8" /> {t('services.dubbing.feature2')}
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
              <Briefcase size={16} color="#38bdf8" /> {t('services.dubbing.feature3')}
            </li>
          </ul>
        </div>

        <div className="glass-card feature-card">
          <div className="feature-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
            <Target size={24} />
          </div>
          <h3 style={{ fontSize: '1.5rem' }}>{t('services.leadgen.title')}</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {t('services.leadgen.desc')}
          </p>
          <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#cbd5e1' }}>
              <Zap size={16} color="#a855f7" /> {t('services.leadgen.feature1')}
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#cbd5e1' }}>
              <MessageSquare size={16} color="#a855f7" /> {t('services.leadgen.feature2')}
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
              <Briefcase size={16} color="#a855f7" /> {t('services.leadgen.feature3')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
