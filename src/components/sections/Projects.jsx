import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, Tag, Calendar, Users,
  ArrowRight, Filter, Star, Award, TrendingUp, Globe
} from 'lucide-react';
import { projects } from '../../data/portfolioData';

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

  const stats = [
    { icon: Star, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "50+", label: "Happy Clients" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  // Project images mapping
  const projectImages = {
    'E-commerce Platform': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center',
    'Healthcare Management System': 'https://images.unsplash.com/photo-1576091160399-112f8f6a03b7?w=800&h=400&fit=crop&crop=center',
    'Real Estate Platform': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&crop=center',
    'Education Platform': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center',
    'Financial Dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center',
    'Food & Beverage App': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop&crop=center',
    'Mobile Banking App': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center',
    'Travel Booking Platform': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop&crop=center',
    'Social Media Dashboard': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop&crop=center'
  };

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
            <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Our Portfolio
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Showcasing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that demonstrate our expertise 
              and commitment to delivering exceptional digital solutions.
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

      {/* Filter Section */}
      <div className="py-20 lg:py-32">
        <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Filter className="w-4 h-4" />
              <span>Browse Projects</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Work
          </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our latest projects across different industries and technologies.
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
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
                const colorClasses = {
                  'Web Development': "from-blue-500 to-blue-600",
                  'E-commerce': "from-green-500 to-green-600",
                  'Mobile App': "from-purple-500 to-purple-600",
                  'UI/UX Design': "from-pink-500 to-pink-600",
                  'Cloud Solutions': "from-indigo-500 to-indigo-600",
                  'Digital Marketing': "from-orange-500 to-orange-600"
                };
                
                const colorClass = colorClasses[project.category] || "from-blue-500 to-blue-600";
                const projectImage = projectImages[project.title] || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center`;
              
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                    className="group"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  >
                    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={projectImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                  {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center space-x-4"
                          >
                              <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-colors duration-200 shadow-lg">
                              <Eye className="w-5 h-5" />
                            </button>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-colors duration-200 shadow-lg"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-colors duration-200 shadow-lg"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                      <div className="p-6">
                        <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                            {project.client}
                          </p>
                        </div>

                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                                className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                            {project.technologies.length > 3 && (
                              <span className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-medium">
                                +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Features */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                        <div className="space-y-1">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* View Project Button */}
                        <div className="pt-4 mt-6 border-t border-gray-200 dark:border-dark-700">
                          <button className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group">
                          <span>View Project</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        </div>
                      </div>
                    </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and see how we can help bring your vision to life.
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
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Projects; 