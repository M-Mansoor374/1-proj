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
                gradient: "from-emerald-500/20 to-teal-600/20",
                border: "border-emerald-500/30",
                iconBg: "from-emerald-500 to-teal-600",
                textColor: "text-emerald-300",
                skillBg: "bg-emerald-500/20",
                skillBorder: "border-emerald-500/30",
                socialBg: "bg-emerald-500/20",
                socialBorder: "border-emerald-500/30",
                socialHover: "hover:bg-emerald-500/30"
              },
              {
                gradient: "from-violet-500/20 to-purple-600/20",
                border: "border-violet-500/30",
                iconBg: "from-violet-500 to-purple-600",
                textColor: "text-violet-300",
                skillBg: "bg-violet-500/20",
                skillBorder: "border-violet-500/30",
                socialBg: "bg-violet-500/20",
                socialBorder: "border-violet-500/30",
                socialHover: "hover:bg-violet-500/30"
              },
              {
                gradient: "from-amber-500/20 to-orange-600/20",
                border: "border-amber-500/30",
                iconBg: "from-amber-500 to-orange-600",
                textColor: "text-amber-300",
                skillBg: "bg-amber-500/20",
                skillBorder: "border-amber-500/30",
                socialBg: "bg-amber-500/20",
                socialBorder: "border-amber-500/30",
                socialHover: "hover:bg-amber-500/30"
              },
              {
                gradient: "from-pink-500/20 to-rose-600/20",
                border: "border-pink-500/30",
                iconBg: "from-pink-500 to-rose-600",
                textColor: "text-pink-300",
                skillBg: "bg-pink-500/20",
                skillBorder: "border-pink-500/30",
                socialBg: "bg-pink-500/20",
                socialBorder: "border-pink-500/30",
                socialHover: "hover:bg-pink-500/30"
              },
              {
                gradient: "from-indigo-500/20 to-blue-600/20",
                border: "border-indigo-500/30",
                iconBg: "from-indigo-500 to-blue-600",
                textColor: "text-indigo-300",
                skillBg: "bg-indigo-500/20",
                skillBorder: "border-indigo-500/30",
                socialBg: "bg-indigo-500/20",
                socialBorder: "border-indigo-500/30",
                socialHover: "hover:bg-indigo-500/30"
              },
              {
                gradient: "from-cyan-500/20 to-blue-600/20",
                border: "border-cyan-500/30",
                iconBg: "from-cyan-500 to-blue-600",
                textColor: "text-cyan-300",
                skillBg: "bg-cyan-500/20",
                skillBorder: "border-cyan-500/30",
                socialBg: "bg-cyan-500/20",
                socialBorder: "border-cyan-500/30",
                socialHover: "hover:bg-cyan-500/30"
              }
            ];
            
            const colors = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
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
                  {/* Member Avatar */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className={`w-24 h-24 bg-gradient-to-br ${colors.iconBg} backdrop-blur-md border-2 ${colors.border} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        boxShadow: `0 10px 30px rgba(var(--${colors.iconBg.split('-')[0]}-500), 0.4)`
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className={`${colors.textColor} font-medium group-hover:text-white transition-colors duration-300`}>
                      {member.position}
                    </p>
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
                        <span
                          key={skillIndex}
                          className={`${colors.skillBg} backdrop-blur-md border ${colors.skillBorder} text-white px-3 py-1 rounded-full text-xs font-medium group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-lg flex items-center justify-center text-white ${colors.socialHover} transition-all duration-200 group-hover:bg-white/20 group-hover:border-white/30`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-lg flex items-center justify-center text-white ${colors.socialHover} transition-all duration-200 group-hover:bg-white/20 group-hover:border-white/30`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@techcraftsolutions.com`}
                      className={`w-10 h-10 ${colors.socialBg} backdrop-blur-md border ${colors.socialBorder} rounded-lg flex items-center justify-center text-white ${colors.socialHover} transition-all duration-200 group-hover:bg-white/20 group-hover:border-white/30`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute top-3 right-3 w-2 h-2 bg-${colors.iconBg.split('-')[0]}-400 rounded-full animate-ping opacity-60`}></div>
                <div className={`absolute bottom-3 left-3 w-1 h-1 bg-${colors.iconBg.split('-')[0]}-300 rounded-full animate-pulse`}></div>
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