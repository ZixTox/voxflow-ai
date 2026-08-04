import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users } from 'lucide-react';

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>{t('case_studies.title')}</h2>
        <p>{t('case_studies.subtitle')}</p>
      </div>
      
      <div className="grid" style={{ marginBottom: '4rem' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>
                {t('case_studies.cs1.name')}
              </span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{t('case_studies.cs1.title')}</h3>
            </div>
            <TrendingUp size={32} color="#38bdf8" />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {t('case_studies.cs1.desc')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{t('case_studies.cs1.stat1_val')}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('case_studies.cs1.stat1_lbl')}</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{t('case_studies.cs1.stat2_val')}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('case_studies.cs1.stat2_lbl')}</div>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: 600, textTransform: 'uppercase' }}>
                {t('case_studies.cs2.name')}
              </span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{t('case_studies.cs2.title')}</h3>
            </div>
            <Users size={32} color="#a855f7" />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {t('case_studies.cs2.desc')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{t('case_studies.cs2.stat1_val')}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('case_studies.cs2.stat1_lbl')}</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{t('case_studies.cs2.stat2_val')}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('case_studies.cs2.stat2_lbl')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
