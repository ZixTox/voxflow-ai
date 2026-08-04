export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h3 style={{ fontFamily: 'Outfit', fontWeight: 900, marginBottom: '1rem' }}>
          VoxFlow<span className="gradient-text">.ai</span>
        </h3>
        <p style={{ color: 'var(--text-muted)' }}>Automating growth for the modern internet.</p>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2rem' }}>
          &copy; 2026 VoxFlow AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
