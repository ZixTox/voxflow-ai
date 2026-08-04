import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="container">
        <h3 style={{ fontFamily: 'Outfit', fontWeight: 900, marginBottom: '1rem' }}>
          VoxFlow<span className="gradient-text">.ai</span>
        </h3>
        <p style={{ color: 'var(--text-muted)' }}>{t('footer.tagline')}</p>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2rem' }}>
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
