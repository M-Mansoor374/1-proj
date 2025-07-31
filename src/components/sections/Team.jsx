import { motion } from 'framer-motion';
import { 
  Linkedin, Github, Mail, Users, Star, Award,
  ArrowRight, ExternalLink
} from 'lucide-react';
import { team } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

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
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our talented team of professionals brings together diverse expertise in design, 
            development, and digital strategy to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {team.map((member, index) => {
            const colorSchemes = [
              {
                gradient: "from-emerald-400 via-teal-500 to-cyan-600",
                border: "border-emerald-400/50",
                iconBg: "from-emerald-400 via-teal-500 to-cyan-600",
                textColor: "text-emerald-200",
                skillBg: "bg-emerald-400/30",
                skillBorder: "border-emerald-400/50",
                socialBg: "bg-emerald-400/30",
                socialBorder: "border-emerald-400/50",
                socialHover: "hover:bg-emerald-400/50",
                glow: "shadow-emerald-400/50",
                pulseColor: "bg-emerald-400"
              },
              {
                gradient: "from-violet-400 via-purple-500 to-pink-600",
                border: "border-violet-400/50",
                iconBg: "from-violet-400 via-purple-500 to-pink-600",
                textColor: "text-violet-200",
                skillBg: "bg-violet-400/30",
                skillBorder: "border-violet-400/50",
                socialBg: "bg-violet-400/30",
                socialBorder: "border-violet-400/50",
                socialHover: "hover:bg-violet-400/50",
                glow: "shadow-violet-400/50",
                pulseColor: "bg-violet-400"
              },
              {
                gradient: "from-amber-400 via-orange-500 to-red-600",
                border: "border-amber-400/50",
                iconBg: "from-amber-400 via-orange-500 to-red-600",
                textColor: "text-amber-200",
                skillBg: "bg-amber-400/30",
                skillBorder: "border-amber-400/50",
                socialBg: "bg-amber-400/30",
                socialBorder: "border-amber-400/50",
                socialHover: "hover:bg-amber-400/50",
                glow: "shadow-amber-400/50",
                pulseColor: "bg-amber-400"
              },
              {
                gradient: "from-pink-400 via-rose-500 to-red-600",
                border: "border-pink-400/50",
                iconBg: "from-pink-400 via-rose-500 to-red-600",
                textColor: "text-pink-200",
                skillBg: "bg-pink-400/30",
                skillBorder: "border-pink-400/50",
                socialBg: "bg-pink-400/30",
                socialBorder: "border-pink-400/50",
                socialHover: "hover:bg-pink-400/50",
                glow: "shadow-pink-400/50",
                pulseColor: "bg-pink-400"
              },
              {
                gradient: "from-indigo-400 via-blue-500 to-cyan-600",
                border: "border-indigo-400/50",
                iconBg: "from-indigo-400 via-blue-500 to-cyan-600",
                textColor: "text-indigo-200",
                skillBg: "bg-indigo-400/30",
                skillBorder: "border-indigo-400/50",
                socialBg: "bg-indigo-400/30",
                socialBorder: "border-indigo-400/50",
                socialHover: "hover:bg-indigo-400/50",
                glow: "shadow-indigo-400/50",
                pulseColor: "bg-indigo-400"
              },
              {
                gradient: "from-cyan-400 via-blue-500 to-indigo-600",
                border: "border-cyan-400/50",
                iconBg: "from-cyan-400 via-blue-500 to-indigo-600",
                textColor: "text-cyan-200",
                skillBg: "bg-cyan-400/30",
                skillBorder: "border-cyan-400/50",
                socialBg: "bg-cyan-400/30",
                socialBorder: "border-cyan-400/50",
                socialHover: "hover:bg-cyan-400/50",
                glow: "shadow-cyan-400/50",
                pulseColor: "bg-cyan-400"
              }
            ];
            
            const colors = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className={`relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 ${colors.border} rounded-xl p-6 group cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl`}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: `0 25px 50px rgba(0,0,0,0.4), 0 0 40px ${colors.glow}`
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Enhanced gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-40 transition-all duration-500 blur-md`}></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute top-4 right-4 w-2 h-2 ${colors.pulseColor} rounded-full animate-ping opacity-70`}></div>
                  <div className={`absolute bottom-6 left-6 w-1 h-1 ${colors.pulseColor} rounded-full animate-pulse`}></div>
                  <div className={`absolute top-1/2 right-2 w-1.5 h-1.5 ${colors.pulseColor} rounded-full animate-bounce`}></div>
                </div>
                
                <div className="relative z-10">
                  {/* Member Avatar */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className={`relative w-28 h-28 bg-gradient-to-br ${colors.iconBg} backdrop-blur-md border-2 ${colors.border} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl`}
                      whileHover={{ 
                        rotate: 360,
                        boxShadow: `0 15px 35px ${colors.glow}`
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {/* Pulse ring effect */}
                      <div className={`absolute inset-0 rounded-full border-2 ${colors.border} animate-ping opacity-30`}></div>
                      <div className={`absolute inset-0 rounded-full border-2 ${colors.border} animate-pulse opacity-50`}></div>
                      
                      <Users className="w-14 h-14 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className={`${colors.textColor} font-medium group-hover:text-white transition-colors duration-300`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.position}
                    </motion.p>
                  </div>

                  {/* Bio */}
                  <p className="text-blue-200 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`${colors.skillBg} backdrop-blur-md border ${colors.skillBorder} text-white px-3 py-1 rounded-full text-xs font-medium group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300`}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            boxShadow: `0 4px 12px ${colors.glow}`
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-xl flex items-center justify-center text-white ${colors.socialHover} transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        y: -3,
                        rotate: 5,
                        boxShadow: `0 8px 20px ${colors.glow}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-xl flex items-center justify-center text-white ${colors.socialHover} transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        y: -3,
                        rotate: -5,
                        boxShadow: `0 8px 20px ${colors.glow}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@techcraftsolutions.com`}
                      className={`w-12 h-12 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-xl flex items-center justify-center text-white ${colors.socialHover} transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        y: -3,
                        rotate: 5,
                        boxShadow: `0 8px 20px ${colors.glow}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mail className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className={`absolute top-4 right-4 w-3 h-3 ${colors.pulseColor} rounded-full animate-ping opacity-80`}></div>
                <div className={`absolute bottom-4 left-4 w-2 h-2 ${colors.pulseColor} rounded-full animate-pulse`}></div>
                <div className={`absolute top-1/3 left-2 w-1.5 h-1.5 ${colors.pulseColor} rounded-full animate-bounce`}></div>
                <div className={`absolute bottom-1/3 right-3 w-1 h-1 ${colors.pulseColor} rounded-full animate-pulse`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-blue-200">Team Members</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">6+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology 
              and innovation. Join us in creating amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                <span>Send Resume</span>
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 