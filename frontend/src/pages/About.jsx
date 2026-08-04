import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>{t('about.title')}</h2>
        <p>{t('about.subtitle')}</p>
      </div>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('about.mission_title')}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
          {t('about.mission_desc')}
        </p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('about.tech_title')}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          {t('about.tech_desc')}
        </p>
      </div>
    </div>
  );
}
