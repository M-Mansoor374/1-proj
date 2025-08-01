import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Twitter,
  Facebook, Instagram, ArrowRight, Send, Clock, Shield, Award,
  Heart, Sparkles, Zap, Star
} from 'lucide-react';
import { companyData } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', section: 'about' },
      { name: 'Our Team', section: 'team' },
      { name: 'Careers', section: 'team' },
      { name: 'Contact', section: 'contact' },
    ],
    services: [
      { name: 'Web Development', section: 'services' },
      { name: 'Mobile Apps', section: 'services' },
      { name: 'UI/UX Design', section: 'services' },
      { name: 'Cloud Solutions', section: 'services' },
    ],
    resources: [
      { name: 'Blog', section: 'home' },
      { name: 'Case Studies', section: 'projects' },
      { name: 'Documentation', section: 'services' },
      { name: 'Support', section: 'contact' },
    ],
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/techcraft-solutions' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/techcraft-solutions' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/techcraft_sol' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/techcraftsolutions' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/techcraft_solutions' },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round the clock assistance for your projects',
      color: 'from-emerald-400 to-teal-600',
      glow: 'shadow-emerald-400/50'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for all solutions',
      color: 'from-violet-400 to-purple-600',
      glow: 'shadow-violet-400/50'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in web development',
      color: 'from-amber-400 to-orange-600',
      glow: 'shadow-amber-400/50'
    }
  ];

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85)), url(${highTechBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>
      {/* Main Footer Content */}
      <div className="py-16 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.button 
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-3 mb-8 hover:opacity-80 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="/Tech 2 Design-01.png" 
                    alt="Tech 2 Design Logo" 
                    className="h-12 w-auto drop-shadow-lg"
                  />
                  {/* Pulse ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Tech 2 Design
                  </span>
                  <span className="text-sm text-blue-200 font-medium">
                    Crafting Digital Excellence
                  </span>
                </div>
              </motion.button>
              
              <p className="text-blue-200 mb-6 leading-relaxed">
                We are a leading web development company specializing in creating innovative, 
                scalable, and user-centric digital solutions that drive business growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-200 font-medium">{companyData.email}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-200 font-medium">{companyData.phone}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-200 font-medium">{companyData.location}</span>
                </motion.div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.section)}
                      className="text-blue-200 hover:text-blue-300 transition-all duration-300 text-left flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.section)}
                      className="text-blue-200 hover:text-blue-300 transition-all duration-300 text-left flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-amber-400" />
                Stay Updated
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              
              <form className="space-y-4">
                <motion.div 
                  className="flex shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200 focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-r-lg transition-all duration-300 flex items-center space-x-2 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </motion.div>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 text-white flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-pink-400" />
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
                        whileHover={{ 
                          scale: 1.15,
                          y: -3,
                          rotate: 5,
                          boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-white/20 py-16 relative z-10">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech 2 Design</span>
            </h3>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              We deliver exceptional results with cutting-edge technology and innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <motion.div 
                    className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} backdrop-blur-md border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: `0 15px 35px ${feature.glow}`
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Pulse ring effect */}
                    <div className={`absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-30`}></div>
                    <div className={`absolute inset-0 rounded-full border-2 border-white/20 animate-pulse opacity-50`}></div>
                    
                    <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-8 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-blue-200 text-sm flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-4 h-4 text-pink-400" />
              <span>© {currentYear} Tech 2 Design. All rights reserved.</span>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 