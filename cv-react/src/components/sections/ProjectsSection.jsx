import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { projects, filterCategories } from '../../constants/portfolioData';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Projects section with vibrant, colorful design
 */
const ProjectsSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [ref, isVisible] = useScrollAnimation();

    const filteredProjects = useProjectFilter(projects, searchTerm, activeFilter);

    const colorSchemes = ['purple', 'blue', 'green', 'orange', 'rainbow'];

    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle subtitle="Showcasing my work in AI/ML, Data Science, and Web Development">
                    Projects
                </SectionTitle>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                    {filterCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${activeFilter === category.id
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-colorful scale-105'
                                : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 shadow-lg'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="max-w-md mx-auto mb-12 sm:mb-16">
                    <div className="relative">
                        <i className="fas fa-search absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all duration-300 text-gray-800 placeholder-purple-300"
                        />
                    </div>
                    <p className="text-center mt-4 text-gray-600">
                        Showing <span className="font-bold text-purple-600">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Projects Grid */}
                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={project.id}
                            glowEffect
                            colorScheme={colorSchemes[index % colorSchemes.length]}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index % 5 === 0 ? 'from-purple-500 to-pink-500' :
                                index % 5 === 1 ? 'from-blue-500 to-cyan-500' :
                                    index % 5 === 2 ? 'from-green-500 to-cyan-500' :
                                        index % 5 === 3 ? 'from-orange-500 to-pink-500' :
                                            'from-purple-500 via-pink-500 to-cyan-500'
                                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-colorful`}>
                                <i className={`fas ${project.icon} text-3xl text-white`}></i>
                            </div>

                            <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-lg font-medium border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <i className="fas fa-search text-6xl text-purple-300 mb-6"></i>
                        <p className="text-2xl text-gray-600">No projects found matching your criteria</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
