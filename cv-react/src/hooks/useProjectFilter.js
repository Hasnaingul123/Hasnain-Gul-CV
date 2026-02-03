import { useMemo } from 'react';

/**
 * Custom hook for filtering and searching projects
 * @param {Array} projects - Array of project objects
 * @param {string} searchTerm - Search query string
 * @param {string} activeFilter - Active filter category
 * @returns {Array} filteredProjects - Filtered and searched projects
 */
export const useProjectFilter = (projects, searchTerm, activeFilter) => {
    return useMemo(() => {
        return projects.filter(project => {
            // Filter by category
            const matchesFilter = activeFilter === 'all' || project.category === activeFilter;

            // Search in title, description, and tech stack
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch =
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.tech.some(tech => tech.toLowerCase().includes(searchLower));

            return matchesFilter && matchesSearch;
        });
    }, [projects, searchTerm, activeFilter]);
};
