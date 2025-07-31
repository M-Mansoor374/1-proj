import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SectionNavigation = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Get all sections
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const projectsSection = document.getElementById('projects');
      const teamSection = document.getElementById('team');
      const contactSection = document.getElementById('contact');

      // Determine current section based on scroll position
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

      // Show navigation after scrolling down
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {/* Section Navigation Dots */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="section-nav"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
          >
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative group p-3 rounded-full transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg">{section.icon}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {section.label}
                  </div>
                  
                  {/* Active indicator */}
                  {currentSection === section.id && (
                    <motion.div
                      className="absolute -right-1 -top-1 w-3 h-3 bg-primary-400 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top/Bottom Buttons */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="scroll-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed right-6 bottom-6 z-50 flex flex-col space-y-3"
          >
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Scroll to Top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={scrollToBottom}
              className="p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Scroll to Bottom"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-blue-600"
          style={{
            scaleX: 0,
            transformOrigin: "0%",
          }}
          animate={{
            scaleX: (() => {
              const scrollTop = window.scrollY;
              const docHeight = document.body.scrollHeight - window.innerHeight;
              return Math.min(scrollTop / docHeight, 1);
            })(),
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </>
  );
};

export default SectionNavigation; 