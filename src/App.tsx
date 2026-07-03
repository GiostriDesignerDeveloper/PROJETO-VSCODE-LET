import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen relative">
          
          {/* A Layer mais funda (z-0) entra aqui */}
          <InteractiveBackground />
          
          {/* Todo o resto do site envelopado numa Layer acima (z-10) e transparente! */}
          <div className="relative z-10 flex flex-col flex-grow bg-transparent">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>

        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;