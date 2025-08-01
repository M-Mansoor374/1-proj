import { motion } from 'framer-motion';
import { 
  Code, ShoppingCart, Smartphone, Palette, Cloud, TrendingUp,
  CheckCircle, ArrowRight, Sparkles, Globe, Shield, Zap, Users, Star
} from 'lucide-react';
import { services } from '../../data/portfolioData';
import { useScrollAnimation } from '../../utils/useScrollAnimation';

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

  const serviceCategories = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: Code,
      color: "blue"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration",
      icon: ShoppingCart,
      color: "green"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      color: "purple"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience",
      icon: Palette,
      color: "pink"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: Cloud,
      color: "indigo"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your business",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  const benefits = [
    { icon: Shield, title: "Quality Assurance", description: "Rigorous testing and quality checks" },
    { icon: Zap, title: "Fast Delivery", description: "Quick turnaround times without compromising quality" },
    { icon: Users, title: "Expert Team", description: "Experienced professionals at your service" },
    { icon: Star, title: "Premium Support", description: "Ongoing support and maintenance" }
  ];

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32">
        <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end digital services designed to transform your business 
              and drive measurable results in the digital landscape.
            </p>
          </motion.div>
        </div>
      </div>

        {/* Services Grid */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600", 
                purple: "from-purple-500 to-purple-600",
                pink: "from-pink-500 to-pink-600",
                indigo: "from-indigo-500 to-indigo-600",
                orange: "from-orange-500 to-orange-600"
              };
            
            return (
              <motion.div
                  key={index}
                variants={cardVariants}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[category.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {services[index]?.features?.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 lg:py-32 bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Why Choose Us
                </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Sets Us Apart
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We combine technical expertise with business acumen to deliver solutions 
              that not only work flawlessly but also drive real business growth.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="text-center group"
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Our Process
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How We Work
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our proven methodology ensures successful project delivery 
              and exceptional results every time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and business goals" },
              { step: "02", title: "Planning", description: "Detailed project planning and architecture design" },
              { step: "03", title: "Development", description: "Agile development with regular updates" },
              { step: "04", title: "Launch", description: "Testing, deployment, and ongoing support" }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center group"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together. 
                Our team is ready to bring your vision to life.
            </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.button 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              
                <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                Schedule Consultation
                </motion.button>
              </motion.div>
          </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Services; 