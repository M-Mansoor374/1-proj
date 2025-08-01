import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { companyData } from '../../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-dark-700/30' 
        : 'bg-gradient-to-r from-white/10 to-white/5 dark:from-dark-800/10 dark:to-dark-800/5 backdrop-blur-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
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
               className="relative z-10 p-3 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
               whileHover={{ 
                 rotate: 8,
                 scale: 1.15
               }}
               transition={{ duration: 0.3 }}
             >
               <Code className="w-6 h-6 text-white drop-shadow-lg" />
             </motion.div>
             <span className="relative z-10 text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent group-hover:from-primary-600 group-hover:to-primary-700 dark:group-hover:from-primary-400 dark:group-hover:to-primary-300 transition-all duration-300">
               {companyData.name}
             </span>
           </motion.button>

                     {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center space-x-6">
             {navItems.map((item) => (
               <motion.button
                 key={item.name}
                 onClick={() => scrollToSection(item.section)}
                 className={`relative font-semibold transition-all duration-300 group px-4 py-2 rounded-xl overflow-hidden ${
                   isActive(item.section)
                     ? 'text-primary-600 dark:text-primary-400'
                     : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
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
                     className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full shadow-lg"
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

                     {/* Theme Toggle & Mobile Menu Button */}
           <div className="flex items-center space-x-3">
             <motion.button
               onClick={toggleTheme}
               className="relative p-3 rounded-xl bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-dark-700/80 dark:to-dark-600/80 backdrop-blur-sm border border-white/20 dark:border-dark-600/30 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group"
               aria-label="Toggle theme"
               whileHover={{ 
                 scale: 1.1,
                 rotate: 180,
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
               
               {isDark ? (
                 <motion.div
                   className="relative z-10"
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 0.5 }}
                 >
                   <Sun className="w-5 h-5 text-yellow-500 drop-shadow-lg" />
                 </motion.div>
               ) : (
                 <motion.div
                   className="relative z-10"
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 0.5 }}
                 >
                   <Moon className="w-5 h-5 text-gray-700 drop-shadow-lg" />
                 </motion.div>
               )}
             </motion.button>

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
                   <X className="w-5 h-5 text-gray-700 dark:text-gray-300 drop-shadow-lg" />
                 </motion.div>
               ) : (
                 <motion.div
                   className="relative z-10"
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 0 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300 drop-shadow-lg" />
                 </motion.div>
               )}
             </motion.button>
           </div>
        </div>

                 {/* Mobile Menu */}
         <AnimatePresence mode="wait">
           {isOpen && (
             <motion.div
               key="mobile-menu"
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: 'auto' }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.3 }}
               className="lg:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-white/20 dark:border-dark-700/30 shadow-xl"
             >
               <div className="py-4 space-y-2 px-4">
                 {navItems.map((item, index) => (
                   <motion.button
                     key={item.name}
                     onClick={() => scrollToSection(item.section)}
                     className={`block w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-xl relative overflow-hidden group ${
                       isActive(item.section)
                         ? 'text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-50/80 to-primary-100/80 dark:from-primary-900/40 dark:to-primary-800/40'
                         : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-white/60 hover:to-white/40 dark:hover:from-dark-700/60 dark:hover:to-dark-600/40'
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
           )}
         </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 