import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Settings, Briefcase, Users, Phone } from 'lucide-react';

const MobileSectionNav = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
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

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border-t border-gray-200 dark:border-dark-700">
            <div className="flex items-center justify-around px-4 py-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 ${
                      currentSection === section.id
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{section.label}</span>
                    
                    {/* Active indicator */}
                    {currentSection === section.id && (
                      <motion.div
                        className="absolute -top-1 w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                        layoutId="mobileActiveIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSectionNav; 