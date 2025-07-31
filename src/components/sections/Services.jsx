import { motion } from 'framer-motion';
import { 
  Code, ShoppingCart, Smartphone, Palette, Cloud, TrendingUp,
  CheckCircle, ArrowRight, Sparkles
} from 'lucide-react';
import { services } from '../../data/portfolioData';
import { useScrollAnimation } from '../../utils/useScrollAnimation';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconMap = {
    Code,
    ShoppingCart,
    Smartphone,
    Palette,
    Cloud,
    TrendingUp,
  };

  return (
    <section 
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${highTechBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full opacity-30 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full opacity-30 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Expertise</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We offer comprehensive web development services tailored to your business needs. 
            From concept to deployment, we ensure excellence at every step.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            const colorSchemes = [
              {
                gradient: "from-emerald-500/20 to-teal-600/20",
                border: "border-emerald-500/30",
                iconBg: "from-emerald-500 to-teal-600",
                textColor: "text-emerald-300",
                hoverBg: "hover:bg-emerald-500/20",
                buttonColor: "text-emerald-300",
                buttonHover: "group-hover:text-emerald-200",
                pulseColor: "border-emerald-400",
                cornerGradient: "from-emerald-600 to-teal-600"
              },
              {
                gradient: "from-violet-500/20 to-purple-600/20",
                border: "border-violet-500/30",
                iconBg: "from-violet-500 to-purple-600",
                textColor: "text-violet-300",
                hoverBg: "hover:bg-violet-500/20",
                buttonColor: "text-violet-300",
                buttonHover: "group-hover:text-violet-200",
                pulseColor: "border-violet-400",
                cornerGradient: "from-violet-600 to-purple-600"
              },
              {
                gradient: "from-amber-500/20 to-orange-600/20",
                border: "border-amber-500/30",
                iconBg: "from-amber-500 to-orange-600",
                textColor: "text-amber-300",
                hoverBg: "hover:bg-amber-500/20",
                buttonColor: "text-amber-300",
                buttonHover: "group-hover:text-amber-200",
                pulseColor: "border-amber-400",
                cornerGradient: "from-amber-600 to-orange-600"
              },
              {
                gradient: "from-pink-500/20 to-rose-600/20",
                border: "border-pink-500/30",
                iconBg: "from-pink-500 to-rose-600",
                textColor: "text-pink-300",
                hoverBg: "hover:bg-pink-500/20",
                buttonColor: "text-pink-300",
                buttonHover: "group-hover:text-pink-200",
                pulseColor: "border-pink-400",
                cornerGradient: "from-pink-600 to-rose-600"
              },
              {
                gradient: "from-indigo-500/20 to-blue-600/20",
                border: "border-indigo-500/30",
                iconBg: "from-indigo-500 to-blue-600",
                textColor: "text-indigo-300",
                hoverBg: "hover:bg-indigo-500/20",
                buttonColor: "text-indigo-300",
                buttonHover: "group-hover:text-indigo-200",
                pulseColor: "border-indigo-400",
                cornerGradient: "from-indigo-600 to-blue-600"
              },
              {
                gradient: "from-cyan-500/20 to-blue-600/20",
                border: "border-cyan-500/30",
                iconBg: "from-cyan-500 to-blue-600",
                textColor: "text-cyan-300",
                hoverBg: "hover:bg-cyan-500/20",
                buttonColor: "text-cyan-300",
                buttonHover: "group-hover:text-cyan-200",
                pulseColor: "border-cyan-400",
                cornerGradient: "from-cyan-600 to-blue-600"
              }
            ];
            
            const colors = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border-2 ${colors.border} rounded-xl p-6 lg:p-8 group cursor-pointer transition-all duration-300`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(var(--${colors.iconBg.split('-')[0]}-500), 0.2)`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient.replace('/20', '/40')} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}></div>
                
                <div className="relative z-10">
                  {/* Icon with Enhanced Animation */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${colors.iconBg} backdrop-blur-md border-2 ${colors.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: `0 10px 30px rgba(var(--${colors.iconBg.split('-')[0]}-500), 0.4)`
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Pulse Ring Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl border-2 ${colors.pulseColor} opacity-0 group-hover:opacity-100`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3 
                      className={`text-xl font-bold text-white group-hover:text-white transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features with Staggered Animation */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-blue-200 group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button with Magnetic Effect */}
                    <motion.div 
                      className="pt-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button className={`inline-flex items-center space-x-2 ${colors.buttonColor} font-medium ${colors.buttonHover} transition-all duration-300 hover:space-x-3`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${colors.cornerGradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative elements */}
                <div className={`absolute top-3 right-3 w-2 h-2 bg-${colors.iconBg.split('-')[0]}-400 rounded-full animate-ping opacity-60`}></div>
                <div className={`absolute bottom-3 left-3 w-1 h-1 bg-${colors.iconBg.split('-')[0]}-300 rounded-full animate-pulse`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Let's discuss your requirements and create something amazing together. 
                Our team is ready to bring your vision to life.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.button 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2 hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Call
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 