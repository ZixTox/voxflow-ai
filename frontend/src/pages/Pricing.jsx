import { useState } from 'react';
import { Check, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('dubbing');
  
  // Calculator State
  const [calcVideos, setCalcVideos] = useState(4);
  const [calcLanguages, setCalcLanguages] = useState(2);
  const [calcLeads, setCalcLeads] = useState(500);
  
  // Simple pricing logic for the calculator
  const dubbingPrice = (calcVideos * 100) + (calcLanguages * 50);
  const leadPrice = Math.floor(calcLeads * 1.5); // $1.50 per lead

  return (
    <div className="container">
      <div className="section-header page-section" style={{ paddingBottom: '2rem' }}>
        <h2>Simple, Transparent Pricing</h2>
        <p>Invest in automated systems that pay for themselves.</p>
      </div>

      {/* Toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: '999px', padding: '0.25rem' }}>
          <button 
            onClick={() => setActiveTab('dubbing')}
            style={{ padding: '0.75rem 2rem', borderRadius: '999px', border: 'none', background: activeTab === 'dubbing' ? 'var(--accent-primary)' : 'transparent', color: activeTab === 'dubbing' ? '#fff' : 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
          >
            AI Dubbing
          </button>
          <button 
            onClick={() => setActiveTab('leadgen')}
            style={{ padding: '0.75rem 2rem', borderRadius: '999px', border: 'none', background: activeTab === 'leadgen' ? 'var(--accent-secondary)' : 'transparent', color: activeTab === 'leadgen' ? '#fff' : 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
          >
            Lead Generation
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      {activeTab === 'dubbing' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto 4rem' }}>
          
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Starter</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $499<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              For emerging creators testing global waters.
            </p>
            <Link to="/portal" className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Choose Starter</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 4 Videos / Month</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 1 Language</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 48-hour Turnaround</li>
            </ul>
          </div>

          <div className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(255,255,255,0.03) 100%)', borderColor: 'rgba(59,130,246,0.3)', position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase' }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Pro</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $999<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              Perfect for YouTubers & Course Creators.
            </p>
            <Link to="/portal" className="btn btn-primary" style={{ width: '100%', marginBottom: '2rem' }}>Choose Pro</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 10 Videos / Month</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 3 Languages</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 24-hour Turnaround</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Enterprise</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $2,499<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              For media companies localizing everything.
            </p>
            <Link to="/portal" className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Contact Sales</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> 30 Videos / Month</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Unlimited Languages</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-primary)"/> Dedicated Manager</li>
            </ul>
          </div>

        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto 4rem' }}>
          
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Launch</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $799<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              Fill your calendar with initial meetings.
            </p>
            <Link to="/portal" className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Choose Launch</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> 200 Qualified Leads</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> Standard Scraping</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> Basic Email Copy</li>
            </ul>
          </div>

          <div className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.1) 0%, rgba(255,255,255,0.03) 100%)', borderColor: 'rgba(139,92,246,0.3)', position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-secondary)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase' }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Scale</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $1,499<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              For Agencies & B2B SaaS wanting serious growth.
            </p>
            <Link to="/portal" className="btn btn-primary" style={{ width: '100%', marginBottom: '2rem', background: 'var(--accent-secondary)', color: '#fff' }}>Choose Scale</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> 600 Qualified Leads</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> Custom AI Hyper-Personalization</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> CRM Integration</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Dominate</h3>
            <div style={{ fontSize: '3.5rem', fontFamily: 'Outfit', fontWeight: 900, margin: '1rem 0', lineHeight: 1 }}>
              $3,999<span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
              Full outbound sales department replacement.
            </p>
            <Link to="/portal" className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Contact Sales</Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> 2000+ Qualified Leads</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> Omni-channel (Email + LinkedIn)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-secondary)"/> Weekly Strategy Calls</li>
            </ul>
          </div>

        </div>
      )}

      {/* Calculator Section */}
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto 4rem', padding: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
          <Calculator size={32} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '2rem', margin: 0 }}>Custom Plan Calculator</h2>
        </div>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Need something specific? Build your own package and see the estimated cost instantly.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Dubbing Calc */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>AI Dubbing Needs</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Videos per month</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{calcVideos}</span>
              </div>
              <input 
                type="range" min="0" max="50" value={calcVideos} 
                onChange={(e) => setCalcVideos(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Languages</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{calcLanguages}</span>
              </div>
              <input 
                type="range" min="0" max="15" value={calcLanguages} 
                onChange={(e) => setCalcLanguages(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Lead Gen Calc */}
          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Lead Generation Needs</h4>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Qualified Leads per month</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-secondary)' }}>{calcLeads}</span>
              </div>
              <input 
                type="range" min="0" max="5000" step="100" value={calcLeads} 
                onChange={(e) => setCalcLeads(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Total */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', marginTop: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Estimated Custom Monthly Plan</div>
            <div style={{ fontSize: '4rem', fontFamily: 'Outfit', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1, marginBottom: '1.5rem' }}>
              ${dubbingPrice + leadPrice}
            </div>
            <Link to="/portal" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Build This Plan
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
