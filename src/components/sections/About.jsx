import { motion } from 'framer-motion';
import { 
  Target, Users, Award, Zap, CheckCircle, ArrowRight,
  Heart, Shield, Lightbulb, TrendingUp, Globe, Clock, Star, Code
} from 'lucide-react';
import { companyData, team, stats } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "We put our clients first, understanding their needs and delivering solutions that exceed expectations."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and quality checks to ensure flawless delivery."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, ensuring seamless communication and project success."
    }
  ];

  const achievements = [
    { icon: Globe, label: "Global Reach", value: "50+ Countries" },
    { icon: Clock, label: "Years Experience", value: "8+ Years" },
    { icon: Star, label: "Client Satisfaction", value: "98%" },
    { icon: Code, label: "Projects Delivered", value: "500+" }
  ];

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              About {companyData.name}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses through 
              cutting-edge technology and exceptional design.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Our Story
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  From Vision to Reality
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Founded in {companyData.founded}, {companyData.name} began with a simple yet powerful vision: 
                  to democratize technology and make exceptional digital experiences accessible to businesses of all sizes.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Today, we're proud to have delivered {companyData.projects} successful projects 
                  for {companyData.clients} satisfied clients across {companyData.countries || '50+'} countries. 
                  Our team of {companyData.employees} professionals brings together expertise in design, 
                  development, and digital strategy to create solutions that drive real business results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 opacity-90"></div>
                <div className="relative p-8 lg:p-12 text-white">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                        <p className="text-white/90 leading-relaxed">
                          To empower businesses through innovative digital solutions that drive growth, 
                          efficiency, and competitive advantage in the digital age.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                        <p className="text-white/90 leading-relaxed">
                          To be the most trusted digital partner for growing businesses worldwide, 
                          known for delivering exceptional value and transformative results.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Promise</h3>
                        <p className="text-white/90 leading-relaxed">
                          Quality, innovation, and results-driven solutions that exceed expectations 
                          and deliver measurable business impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 lg:py-32 bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Our Values
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Us Forward
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              These core values guide everything we do and shape the way we work with our clients 
              to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Our Team
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet the Experts
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our talented team of professionals brings together diverse expertise to deliver 
              exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-center">
                    {member.position}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group">
              <span>Meet Full Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 