import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, Tag, Calendar, Users,
  ArrowRight, Filter
} from 'lucide-react';
import { projects } from '../../data/portfolioData';
import highTechBackground from '../../assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries. 
            Each project showcases our expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const colorSchemes = [
                {
                  gradient: "from-emerald-500/20 to-teal-600/20",
                  border: "border-emerald-500/30",
                  iconBg: "from-emerald-500 to-teal-600",
                  textColor: "text-emerald-300",
                  buttonColor: "text-emerald-300",
                  buttonHover: "group-hover:text-emerald-200",
                  badgeBg: "bg-emerald-600",
                  cornerGradient: "from-emerald-600 to-teal-600"
                },
                {
                  gradient: "from-violet-500/20 to-purple-600/20",
                  border: "border-violet-500/30",
                  iconBg: "from-violet-500 to-purple-600",
                  textColor: "text-violet-300",
                  buttonColor: "text-violet-300",
                  buttonHover: "group-hover:text-violet-200",
                  badgeBg: "bg-violet-600",
                  cornerGradient: "from-violet-600 to-purple-600"
                },
                {
                  gradient: "from-amber-500/20 to-orange-600/20",
                  border: "border-amber-500/30",
                  iconBg: "from-amber-500 to-orange-600",
                  textColor: "text-amber-300",
                  buttonColor: "text-amber-300",
                  buttonHover: "group-hover:text-amber-200",
                  badgeBg: "bg-amber-600",
                  cornerGradient: "from-amber-600 to-orange-600"
                },
                {
                  gradient: "from-pink-500/20 to-rose-600/20",
                  border: "border-pink-500/30",
                  iconBg: "from-pink-500 to-rose-600",
                  textColor: "text-pink-300",
                  buttonColor: "text-pink-300",
                  buttonHover: "group-hover:text-pink-200",
                  badgeBg: "bg-pink-600",
                  cornerGradient: "from-pink-600 to-rose-600"
                },
                {
                  gradient: "from-indigo-500/20 to-blue-600/20",
                  border: "border-indigo-500/30",
                  iconBg: "from-indigo-500 to-blue-600",
                  textColor: "text-indigo-300",
                  buttonColor: "text-indigo-300",
                  buttonHover: "group-hover:text-indigo-200",
                  badgeBg: "bg-indigo-600",
                  cornerGradient: "from-indigo-600 to-blue-600"
                },
                {
                  gradient: "from-cyan-500/20 to-blue-600/20",
                  border: "border-cyan-500/30",
                  iconBg: "from-cyan-500 to-blue-600",
                  textColor: "text-cyan-300",
                  buttonColor: "text-cyan-300",
                  buttonHover: "group-hover:text-cyan-200",
                  badgeBg: "bg-cyan-600",
                  cornerGradient: "from-cyan-600 to-blue-600"
                }
              ];
              
              const colors = colorSchemes[index % colorSchemes.length];
              
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border-2 ${colors.border} rounded-xl group cursor-pointer transition-all duration-300 h-80 sm:h-96`}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
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
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project Image */}
                    <div className={`relative h-32 bg-gradient-to-br ${colors.iconBg} overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center space-x-4"
                          >
                            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
                              <Eye className="w-5 h-5" />
                            </button>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`${colors.badgeBg} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-blue-200 flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {project.client}
                          </p>
                        </div>

                        <p className="text-blue-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2 py-1 rounded text-xs font-medium">
                              +{project.technologies.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-1">
                          <h4 className="text-xs font-semibold text-white">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-1">
                                <div className={`w-1 h-1 bg-${colors.iconBg.split('-')[0]}-400 rounded-full`} />
                                <span className="text-xs text-blue-200 group-hover:text-white transition-colors duration-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* View Project Button */}
                      <div className="pt-3 mt-auto">
                        <button className={`inline-flex items-center space-x-2 ${colors.buttonColor} font-medium ${colors.buttonHover} transition-all duration-300 text-sm`}>
                          <span>View Project</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <motion.div
                    className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${colors.cornerGradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Decorative elements */}
                  <div className={`absolute top-2 right-2 w-1.5 h-1.5 bg-${colors.iconBg.split('-')[0]}-400 rounded-full animate-ping opacity-60`}></div>
                  <div className={`absolute bottom-2 left-2 w-1 h-1 bg-${colors.iconBg.split('-')[0]}-300 rounded-full animate-pulse`}></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 