import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Portal from './pages/Portal';

function App() {
  // Use basename for GitHub pages support
  return (
    <Router basename="/voxflow-ai">
      <div className="glow-bg"></div>
      <Navbar />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
