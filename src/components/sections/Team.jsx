import { motion } from 'framer-motion';
import { 
  Linkedin, Github, Mail, Users, Star, Award,
  ArrowRight, ExternalLink, Globe, Zap, Shield, TrendingUp
} from 'lucide-react';
import { team } from '../../data/portfolioData';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: Users, value: "25+", label: "Team Members" },
    { icon: Star, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "200+", label: "Projects Delivered" }
  ];

  const values = [
    { icon: Shield, title: "Trust & Reliability", description: "We build lasting relationships through transparency and consistent delivery" },
    { icon: Zap, title: "Innovation", description: "Constantly pushing boundaries with cutting-edge technologies and creative solutions" },
    { icon: TrendingUp, title: "Excellence", description: "Committed to delivering exceptional quality in every project we undertake" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
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
            <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Our Team
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our talented team of professionals brings together diverse expertise in design, 
              development, and digital strategy to deliver exceptional results.
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
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Our Values
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Us
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our core values guide everything we do and shape our approach to every project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
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
      <div className="py-20 lg:py-32 bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Leadership Team
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Meet the experts who lead our company and drive innovation across all projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => {
              const colorClasses = {
                'CEO & Founder': "from-blue-500 to-blue-600",
                'CTO': "from-purple-500 to-purple-600",
                'Lead Designer': "from-pink-500 to-pink-600",
                'Senior Developer': "from-green-500 to-green-600",
                'Project Manager': "from-orange-500 to-orange-600",
                'UI/UX Designer': "from-indigo-500 to-indigo-600"
              };
              
              const colorClass = colorClasses[member.role] || "from-blue-500 to-blue-600";
              
              return (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Member Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                        <div className="text-6xl font-bold text-white/80">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Social Links */}
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {member.role}
                          </p>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Skills */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.slice(0, 3).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                            {member.skills.length > 3 && (
                              <span className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-medium">
                                +{member.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team.
              Let's build amazing things together.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team; 