import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/theme/theme-provider';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SkillsPage from './components/pages/SkillsPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/layout/Footer';
import MobileMenu from './components/layout/MobileMenu';
import './lib/i18n';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar toggleMobileMenu={toggleMobileMenu} />
          
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            currentPage={window.location.pathname.slice(1) || ''} 
            toggleMobileMenu={toggleMobileMenu}
          />
          
          <main className="flex-grow">
            <Routes>
              {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;