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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-dark-700/30' 
          : 'bg-gradient-to-r from-white/10 to-white/5 dark:from-dark-800/10 dark:to-dark-800/5 backdrop-blur-md'
      }`}>
                  <div className="container-custom">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            {/* Logo */}
            <motion.button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 group relative overflow-hidden rounded-xl p-2"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
            >
              {/* White hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="relative z-10 flex items-center"
                whileHover={{ 
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Simple Text Logo */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                    TECH
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    2
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                    DESIGN
                  </span>
                </div>
              </motion.div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative font-semibold text-sm lg:text-base transition-all duration-300 group px-4 py-2 rounded-xl overflow-hidden ${
                    isActive(item.section)
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }}
                >
                  {/* White hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Subtle border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Text with enhanced glow effect */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 font-medium">
                  {item.name}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive(item.section) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white rounded-full shadow-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover underline effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-white/60 to-white/40 rounded-full opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative p-3 rounded-xl bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-dark-700/80 dark:to-dark-600/80 backdrop-blur-sm border border-white/20 dark:border-dark-600/30 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group"
                aria-label="Toggle menu"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90,
                  y: -2
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }}
              >
                {/* White hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                
                {isOpen ? (
                  <motion.div
                    className="relative z-10"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 drop-shadow-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative z-10"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 drop-shadow-lg" />
                  </motion.div>
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
            className="lg:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-white/20 dark:border-dark-700/30 shadow-xl"
          >
            <div className="py-4 space-y-2 px-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-xl relative overflow-hidden group ${
                    isActive(item.section)
                      ? 'text-gray-900 dark:text-white bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-dark-700/60 dark:to-dark-600/60' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gradient-to-r hover:from-white/60 hover:to-white/40 dark:hover:from-dark-700/60 dark:hover:to-dark-600/40'
                  }`}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                >
                  {/* White hover background for mobile */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                  {item.name}
                  </span>
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