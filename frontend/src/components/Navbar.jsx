import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        VoxFlow<span className="gradient-text">.ai</span>
      </Link>
      <div className="nav-links">
        <Link to="/services" className={isActive('/services')}>Services</Link>
        <Link to="/pricing" className={isActive('/pricing')}>Pricing & Calculator</Link>
        <Link to="/case-studies" className={isActive('/case-studies')}>Case Studies</Link>
        <Link to="/about" className={isActive('/about')}>About Us</Link>
      </div>
      <div>
        <Link to="/portal" className="btn btn-primary">Client Portal</Link>
      </div>
    </nav>
  );
}
