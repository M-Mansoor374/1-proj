import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  Star, Quote, ArrowRight
} from 'lucide-react';
import { companyData, testimonials } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${highTechBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Your Project
              </h3>
              <p className="text-blue-200">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-6 text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-green-300 mb-2">
                  Thank You!
                </h4>
                <p className="text-green-200">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white placeholder-blue-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white placeholder-blue-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white placeholder-blue-200"
                    placeholder="Your company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white"
                    >
                      <option value="">Select budget</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="2-4months">2-4 months</option>
                      <option value="4-6months">4-6 months</option>
                      <option value="6+months">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 backdrop-blur-md text-white placeholder-blue-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 w-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-blue-200">
                Get in touch with us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-blue-200">{companyData.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-blue-200">{companyData.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-blue-200">{companyData.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-blue-200">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">Need Immediate Help?</h4>
              <p className="text-blue-200 mb-4">
                Schedule a free consultation call with our team.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2">
                <span>Schedule Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => {
              const colorSchemes = [
                {
                  gradient: "from-emerald-500/20 to-teal-600/20",
                  border: "border-emerald-500/30",
                  iconBg: "from-emerald-500 to-teal-600",
                  textColor: "text-emerald-300",
                  buttonColor: "text-emerald-300",
                  buttonHover: "group-hover:text-emerald-200",
                  badgeBg: "bg-emerald-600",
                  cornerGradient: "from-emerald-600 to-teal-600",
                  starColor: "text-emerald-400"
                },
                {
                  gradient: "from-violet-500/20 to-purple-600/20",
                  border: "border-violet-500/30",
                  iconBg: "from-violet-500 to-purple-600",
                  textColor: "text-violet-300",
                  buttonColor: "text-violet-300",
                  buttonHover: "group-hover:text-violet-200",
                  badgeBg: "bg-violet-600",
                  cornerGradient: "from-violet-600 to-purple-600",
                  starColor: "text-violet-400"
                },
                {
                  gradient: "from-amber-500/20 to-orange-600/20",
                  border: "border-amber-500/30",
                  iconBg: "from-amber-500 to-orange-600",
                  textColor: "text-amber-300",
                  buttonColor: "text-amber-300",
                  buttonHover: "group-hover:text-amber-200",
                  badgeBg: "bg-amber-600",
                  cornerGradient: "from-amber-600 to-orange-600",
                  starColor: "text-amber-400"
                }
              ];
              
              const colors = colorSchemes[index % colorSchemes.length];
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border-2 ${colors.border} rounded-xl p-6 group cursor-pointer transition-all duration-300`}
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
                    {/* Quote Icon with Enhanced Animation */}
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${colors.iconBg} backdrop-blur-md border-2 ${colors.border} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        boxShadow: `0 10px 30px rgba(var(--${colors.iconBg.split('-')[0]}-500), 0.4)`
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Quote className="w-7 h-7 text-white" />
                      
                      {/* Pulse Ring Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 ${colors.starColor} opacity-0 group-hover:opacity-100`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Client Info */}
                    <div className="mb-4">
                      <motion.h4 
                        className="font-bold text-white text-lg group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.name}
                      </motion.h4>
                      <p className={`text-sm ${colors.textColor} group-hover:text-white transition-colors duration-300`}>
                        {testimonial.position}
                      </p>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className={`w-5 h-5 ${colors.starColor} fill-current group-hover:text-white transition-colors duration-300`} />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <motion.p 
                      className="text-blue-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      "{testimonial.content}"
                    </motion.p>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 