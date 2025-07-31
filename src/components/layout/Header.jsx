import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine current section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const projectsSection = document.getElementById('projects');
      const teamSection = document.getElementById('team');
      const contactSection = document.getElementById('contact');

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setCurrentSection('contact');
      } else if (teamSection && scrollPosition >= teamSection.offsetTop) {
        setCurrentSection('team');
      } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
        setCurrentSection('projects');
      } else if (servicesSection && scrollPosition >= servicesSection.offsetTop) {
        setCurrentSection('services');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setCurrentSection('about');
      } else {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Services', section: 'services' },
    { name: 'Projects', section: 'projects' },
    { name: 'Team', section: 'team' },
    { name: 'Contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const isActive = (section) => currentSection === section;

  return (
    <header className="relative z-50">
      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
                  <div className="container-custom">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            {/* Logo */}
            <motion.button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/Tech 2 Design-01.png" 
                  alt="Tech 2 Design Logo" 
                  className="h-16 sm:h-20 lg:h-24 w-auto"
                />
              </motion.div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative font-medium text-sm lg:text-base transition-all duration-300 ${
                    isActive(item.section)
                      ? 'text-gray-900' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {isActive(item.section) && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gray-900`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2.5 sm:p-3 rounded-lg transition-all duration-300 shadow-lg bg-gray-200/50 text-gray-700 hover:bg-gray-300/50`}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.4 }}
            className={`lg:hidden backdrop-blur-md border-t overflow-hidden rounded-b-lg shadow-xl bg-white/95 border-gray-200/50`}
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.section)
                      ? 'text-gray-900 bg-gray-100/90 border-l-4 border-gray-400' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 