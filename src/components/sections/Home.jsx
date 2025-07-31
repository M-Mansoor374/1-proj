import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Code, Zap, Globe, Shield } from 'lucide-react';
import { companyData, stats } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // 3D floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotateY: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced building animation variants
  const buildingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotateY: [0, 360, 0],
      scale: [1, 1.1, 1],
      x: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${highTechBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/30 rounded-lg"
          variants={floatingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 border-2 border-purple-400/30 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d', animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-20 h-20 border-2 border-green-400/30 transform rotate-45"
          variants={floatingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d', animationDelay: '2s' }}
        />
        
        {/* Enhanced 3D Building-like structures with movement */}
        <motion.div
          className="absolute top-32 right-32 w-8 h-24 bg-gradient-to-b from-blue-500/20 to-transparent"
          variants={buildingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-6 h-20 bg-gradient-to-b from-purple-500/20 to-transparent"
          variants={buildingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d', animationDelay: '2s' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-4 h-16 bg-gradient-to-b from-green-500/20 to-transparent"
          variants={buildingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d', animationDelay: '4s' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-10 h-28 bg-gradient-to-b from-yellow-500/20 to-transparent"
          variants={buildingVariants}
          animate="animate"
          style={{ transformStyle: 'preserve-3d', animationDelay: '6s' }}
        />
        
        {/* Pulsing energy orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400/40 rounded-full"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* 3D Animated Badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className={`inline-flex items-center space-x-3 px-5 py-2 rounded-full text-sm lg:text-base font-semibold transition-all duration-500 ${
                  isDark 
                    ? 'bg-white/20 text-white border border-white/30 backdrop-blur-md' 
                    : 'bg-blue-800 text-blue-100 border border-blue-600 backdrop-blur-md'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                </motion.div>
                <span>Leading Web Development Company</span>
              </motion.div>
              
              {/* 3D Animated Title */}
              <motion.h1 
                variants={itemVariants}
                className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight transition-all duration-500 ${
                  isDark ? 'text-white' : 'text-blue-50'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span 
                  className="block mb-1"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    textShadow: "0 0 30px rgba(255,255,255,0.6)"
                  }}
                >
                  {companyData.tagline}
                </motion.span>
                <motion.span 
                  className={`block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold transition-all duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: -5,
                    textShadow: "0 0 40px rgba(59,130,246,0.9)"
                  }}
                >
                  Digital Solutions
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className={`text-base sm:text-lg lg:text-xl leading-relaxed transition-all duration-500 max-w-3xl mx-auto font-medium ${
                  isDark ? 'text-blue-100' : 'text-blue-100'
                }`}
              >
                {companyData.description}
              </motion.p>
            </motion.div>

            {/* 3D Animated Button - Only Get Started */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`inline-flex items-center space-x-2 font-medium py-3 px-6 rounded-lg transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-100 focus:ring-white' 
                      : 'bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white focus:ring-blue-600'
                  }`}
                >
                  <span>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>

            {/* 3D Animated Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                    z: 50,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className={`text-2xl lg:text-3xl xl:text-4xl font-black transition-all duration-500 ${
                      isDark ? 'text-white' : 'text-blue-500'
                    }`}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: ["0 0 0px", "0 0 20px", "0 0 0px"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className={`text-sm lg:text-base font-medium transition-all duration-500 ${
                    isDark ? 'text-white/80' : 'text-blue-300'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 3D Feature Cards */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
            >
              {[
                { 
                  icon: Code, 
                  title: "Modern Development", 
                  desc: "Cutting-edge technologies",
                  gradient: "from-emerald-500 to-teal-600",
                  glow: "emerald",
                  border: "emerald"
                },
                { 
                  icon: Globe, 
                  title: "Global Reach", 
                  desc: "Worldwide solutions",
                  gradient: "from-violet-500 to-purple-600",
                  glow: "violet",
                  border: "violet"
                },
                { 
                  icon: Shield, 
                  title: "Secure & Reliable", 
                  desc: "Enterprise-grade security",
                  gradient: "from-amber-500 to-orange-600",
                  glow: "amber",
                  border: "amber"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`relative p-6 rounded-xl backdrop-blur-xl border-2 overflow-hidden group ${
                    isDark 
                      ? `bg-white/5 border-${feature.border}-500/30 text-white` 
                      : `bg-${feature.border}-900/10 border-${feature.border}-600/30 text-${feature.border}-100`
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 50,
                    boxShadow: `0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(var(--${feature.glow}-500), 0.3)`
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`flex justify-center mb-4 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 10px 30px rgba(var(--${feature.glow}-500), 0.4)`
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg lg:text-xl font-bold mb-2 text-center group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-90 text-center group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute top-2 right-2 w-2 h-2 bg-${feature.glow}-400 rounded-full animate-ping opacity-60`}></div>
                  <div className={`absolute bottom-2 left-2 w-1 h-1 bg-${feature.glow}-300 rounded-full animate-pulse`}></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 