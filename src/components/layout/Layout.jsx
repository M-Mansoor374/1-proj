import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import SectionNavigation from './SectionNavigation';
import MobileSectionNav from './MobileSectionNav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-all duration-500">
      {/* Header Section */}
      <Header />
      
      {/* Navigation Components */}
      <SectionNavigation />
      <MobileSectionNav />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout; 