export default function About() {
  return (
    <div className="container">
      <div className="section-header page-section">
        <h2>About VoxFlow AI</h2>
        <p>Built for the modern agency that refuses to slow down.</p>
      </div>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          We realized that the biggest bottleneck for content creators and B2B agencies is manual labor. Hiring voice actors for dubbing takes weeks. Hiring SDRs for outreach is expensive and unpredictable. 
          We built VoxFlow AI to replace these archaic processes with intelligent, automated systems.
        </p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Technology</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Our proprietary engines leverage state-of-the-art LLMs, Voice Synthesis models, and scalable scraping infrastructure to deliver results that used to require a team of 10 people—now done instantly by software.
        </p>
      </div>
    </div>
  );
}
