import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        VoxFlow<span className="gradient-text">.ai</span>
      </Link>
      <div className="nav-links">
        <Link to="/services" className={isActive('/services')}>{t('nav.services')}</Link>
        <Link to="/pricing" className={isActive('/pricing')}>{t('nav.pricing')}</Link>
        <Link to="/case-studies" className={isActive('/case-studies')}>{t('nav.case_studies')}</Link>
        <Link to="/about" className={isActive('/about')}>{t('nav.about')}</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          style={{ background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--glass-border)', padding: '0.4rem', borderRadius: '4px', cursor: 'pointer', outline: 'none', fontFamily: 'Inter' }}
        >
          <option value="en" style={{ color: '#000' }}>🇺🇸 EN</option>
          <option value="uk" style={{ color: '#000' }}>🇺🇦 UA</option>
          <option value="de" style={{ color: '#000' }}>🇩🇪 DE</option>
          <option value="es" style={{ color: '#000' }}>🇪🇸 ES</option>
        </select>
        <Link to="/portal" className="btn btn-primary">{t('nav.portal')}</Link>
      </div>
    </nav>
  );
}
