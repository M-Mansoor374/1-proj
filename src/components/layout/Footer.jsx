import { motion } from 'framer-motion';
import { 
  Code, Mail, Phone, MapPin, Linkedin, Github, Twitter,
  Facebook, Instagram, ArrowRight, Send, Clock, Shield, Award
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
      description: 'Round the clock assistance for your projects'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for all solutions'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in web development'
    }
  ];

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${highTechBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Main Footer Content */}
      <div className="py-16 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  {companyData.name}
                </span>
              </button>
              
              <p className="text-blue-200 mb-6 leading-relaxed">
                We are a leading web development company specializing in creating innovative, 
                scalable, and user-centric digital solutions that drive business growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">{companyData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">{companyData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">{companyData.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-blue-200 hover:text-blue-300 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-blue-200 hover:text-blue-300 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              
              <form className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-200"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-white/20 py-12 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-blue-200">{feature.description}</p>
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
            <div className="text-blue-200 text-sm">
              © {currentYear} {companyData.name}. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-blue-200 hover:text-blue-300 transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 