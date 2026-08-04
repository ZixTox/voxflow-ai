import { useState } from 'react';
import { Check, Settings2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('dubbing');
  const [videosPerMonth, setVideosPerMonth] = useState(4);
  const [languages, setLanguages] = useState(1);
  const [leadsPerMonth, setLeadsPerMonth] = useState(200);

  const calculateCustomPrice = () => {
    if (activeTab === 'dubbing') {
      return (videosPerMonth * 150) + (languages * 50);
    } else {
      return leadsPerMonth * 1.5;
    }
  };

  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>{t('pricing.title')}</h2>
        <p>{t('pricing.subtitle')}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', border: '1px solid var(--glass-border)' }}>
          <button 
            className={`btn ${activeTab === 'dubbing' ? 'btn-primary' : ''}`}
            style={{ background: activeTab === 'dubbing' ? '' : 'transparent', color: activeTab === 'dubbing' ? '' : 'var(--text-muted)' }}
            onClick={() => setActiveTab('dubbing')}
          >
            {t('pricing.tab_dubbing')}
          </button>
          <button 
            className={`btn ${activeTab === 'leadgen' ? 'btn-primary' : ''}`}
            style={{ background: activeTab === 'leadgen' ? '' : 'transparent', color: activeTab === 'leadgen' ? '' : 'var(--text-muted)' }}
            onClick={() => setActiveTab('leadgen')}
          >
            {t('pricing.tab_leadgen')}
          </button>
        </div>
      </div>

      <div className="grid" style={{ marginBottom: '5rem' }}>
        {activeTab === 'dubbing' ? (
          <>
            <PricingCard 
              name={t('pricing.dubbing.starter.name')}
              price="$599" 
              desc={t('pricing.dubbing.starter.desc')}
              features={[t('pricing.dubbing.starter.f1'), t('pricing.dubbing.starter.f2'), t('pricing.dubbing.starter.f3')]}
              t={t}
            />
            <PricingCard 
              name={t('pricing.dubbing.pro.name')}
              price="$1,299" 
              desc={t('pricing.dubbing.pro.desc')}
              features={[t('pricing.dubbing.pro.f1'), t('pricing.dubbing.pro.f2'), t('pricing.dubbing.pro.f3')]} 
              isPopular 
              t={t}
            />
            <PricingCard 
              name={t('pricing.dubbing.enterprise.name')}
              price="$3,499" 
              desc={t('pricing.dubbing.enterprise.desc')}
              features={[t('pricing.dubbing.enterprise.f1'), t('pricing.dubbing.enterprise.f2'), t('pricing.dubbing.enterprise.f3')]}
              t={t}
            />
          </>
        ) : (
          <>
            <PricingCard 
              name={t('pricing.leadgen.launch.name')}
              price="$399" 
              desc={t('pricing.leadgen.launch.desc')}
              features={[t('pricing.leadgen.launch.f1'), t('pricing.leadgen.launch.f2'), t('pricing.leadgen.launch.f3')]}
              t={t}
            />
            <PricingCard 
              name={t('pricing.leadgen.scale.name')}
              price="$899" 
              desc={t('pricing.leadgen.scale.desc')}
              features={[t('pricing.leadgen.scale.f1'), t('pricing.leadgen.scale.f2'), t('pricing.leadgen.scale.f3')]} 
              isPopular 
              t={t}
            />
            <PricingCard 
              name={t('pricing.leadgen.dominate.name')}
              price="$2,499" 
              desc={t('pricing.leadgen.dominate.desc')}
              features={[t('pricing.leadgen.dominate.f1'), t('pricing.leadgen.dominate.f2'), t('pricing.leadgen.dominate.f3')]}
              t={t}
            />
          </>
        )}
      </div>

      {/* Calculator Section */}
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto 4rem', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Settings2 size={32} style={{ color: 'var(--brand-primary)', marginBottom: '1rem' }} />
          <h3>{t('pricing.calc.title')}</h3>
          <p style={{ color: 'var(--text-muted)' }}>{t('pricing.calc.subtitle')}</p>
        </div>

        {activeTab === 'dubbing' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>{t('pricing.calc.videos_mo')}</span>
                <span style={{ fontWeight: 'bold' }}>{videosPerMonth}</span>
              </label>
              <input 
                type="range" 
                min="1" max="100" 
                value={videosPerMonth} 
                onChange={(e) => setVideosPerMonth(parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>{t('pricing.calc.languages')}</span>
                <span style={{ fontWeight: 'bold' }}>{languages}</span>
              </label>
              <input 
                type="range" 
                min="1" max="15" 
                value={languages} 
                onChange={(e) => setLanguages(parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>{t('pricing.calc.leads_mo')}</span>
                <span style={{ fontWeight: 'bold' }}>{leadsPerMonth}</span>
              </label>
              <input 
                type="range" 
                min="100" max="5000" step="100"
                value={leadsPerMonth} 
                onChange={(e) => setLeadsPerMonth(parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{t('pricing.calc.est_title')}</p>
          <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
            ${calculateCustomPrice().toLocaleString()} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{t('pricing.mo')}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>{t('pricing.calc.btn')}</button>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, desc, features, isPopular, t }) {
  return (
    <div className="glass-card" style={{ position: 'relative', border: isPopular ? '1px solid var(--brand-primary)' : '' }}>
      {isPopular && (
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--brand-primary)', color: '#fff', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 'bold' }}>
          {t('pricing.most_popular')}
        </div>
      )}
      <h3 style={{ fontSize: '1.5rem' }}>{name}</h3>
      <p style={{ color: 'var(--text-muted)', minHeight: '48px', marginTop: '0.5rem', fontSize: '0.9rem' }}>{desc}</p>
      <div style={{ fontSize: '2.5rem', fontWeight: 900, margin: '1.5rem 0', fontFamily: 'Outfit' }}>
        {price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>{t('pricing.mo')}</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <Check size={20} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem' }}>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`btn ${isPopular ? 'btn-primary' : ''}`} style={{ width: '100%', background: isPopular ? '' : 'rgba(255,255,255,0.05)' }}>
        {isPopular ? t('pricing.btn_primary') : t('pricing.btn_secondary')}
      </button>
    </div>
  );
}
