import { motion } from 'framer-motion';
import { 
  Target, Users, Award, Zap, CheckCircle, ArrowRight,
  Heart, Shield, Lightbulb, TrendingUp
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
      title: "Passion",
      description: "We're passionate about creating exceptional digital experiences that make a difference."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on quality, ensuring every project meets the highest standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality."
    }
  ];

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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to 
            creating exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Our Story
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Founded in {companyData.founded}, {companyData.name} started with a simple mission: 
              to create exceptional digital experiences that help businesses thrive in the digital age. 
              What began as a small team of passionate developers has grown into a full-service 
              web development company serving clients across the globe.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Today, we're proud to have delivered {companyData.projects} successful projects 
              for {companyData.clients} satisfied clients. Our team of {companyData.employees} 
              professionals brings together expertise in design, development, and digital strategy 
              to create solutions that not only look great but also drive real business results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-2xl"></div>
              
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 lg:p-12 shadow-2xl">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-x-16 translate-y-16"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500/10 rounded-full blur-2xl -translate-x-12 -translate-y-12"></div>
                
                <div className="relative z-10 space-y-8">
                  {/* Mission */}
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                          <Target className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          Our Mission
                        </div>
                        <div className="text-blue-200 leading-relaxed">
                          To empower businesses through innovative digital solutions that drive growth and success
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Vision */}
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          Our Vision
                        </div>
                        <div className="text-blue-200 leading-relaxed">
                          To be the leading digital partner for growing businesses worldwide
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Promise */}
                  <motion.div 
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                          <Zap className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg mb-2 group-hover:text-green-300 transition-colors duration-300">
                          Our Promise
                        </div>
                        <div className="text-blue-200 leading-relaxed">
                          Quality, innovation, and results-driven solutions that exceed expectations
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-6 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Our Values
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-blue-200 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our talented team of professionals brings together diverse expertise to deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-300 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
              <span>Meet Full Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 