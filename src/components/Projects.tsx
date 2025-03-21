
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types';

// Sample project data
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Tool',
    slug: 'sentiment-analysis-tool',
    description: 'A machine learning model that analyzes text sentiment for customer feedback.',
    shortDescription: 'NLP model for real-time sentiment analysis of customer feedback.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['NLP', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/yourusername/sentiment-analysis',
    demoUrl: 'https://demo-sentiment-analysis.example.com',
    content: 'Detailed explanation about the sentiment analysis project...',
    featured: true
  },
  {
    id: '2',
    title: 'Image Classification API',
    slug: 'image-classification-api',
    description: 'REST API for image classification using deep learning models.',
    shortDescription: 'Computer vision API for classifying images with high accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['Computer Vision', 'API', 'Deep Learning'],
    githubUrl: 'https://github.com/yourusername/image-classification',
    content: 'Detailed explanation about the image classification project...',
    featured: true
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    slug: 'data-visualization-dashboard',
    description: 'Interactive dashboard for visualizing complex datasets.',
    shortDescription: 'Interactive web-based dashboard for exploring and visualizing complex datasets.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Data Visualization', 'Web Development', 'D3.js'],
    demoUrl: 'https://data-viz-dashboard.example.com',
    content: 'Detailed explanation about the data visualization project...'
  },
  {
    id: '4',
    title: 'Predictive Maintenance System',
    slug: 'predictive-maintenance-system',
    description: 'ML system that predicts equipment failures before they occur.',
    shortDescription: 'ML-powered system for predicting industrial equipment failures.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    tags: ['Time Series', 'IoT', 'Industry 4.0'],
    githubUrl: 'https://github.com/yourusername/predictive-maintenance',
    content: 'Detailed explanation about the predictive maintenance project...'
  },
  {
    id: '5',
    title: 'Recommendation Engine',
    slug: 'recommendation-engine',
    description: 'Content-based recommendation system for personalized suggestions.',
    shortDescription: 'Personalized recommendation engine using collaborative filtering.',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['Recommendation Systems', 'Python', 'Flask'],
    githubUrl: 'https://github.com/yourusername/recommendation-engine',
    demoUrl: 'https://recommender-demo.example.com',
    content: 'Detailed explanation about the recommendation engine project...'
  },
  {
    id: '6',
    title: 'Natural Language Query System',
    slug: 'natural-language-query-system',
    description: 'System that translates natural language questions into database queries.',
    shortDescription: 'NLP system for converting natural language to database queries.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['NLP', 'SQL', 'Database'],
    githubUrl: 'https://github.com/yourusername/nl-query',
    content: 'Detailed explanation about the natural language query project...'
  }
];

const Projects = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  
  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projectsData.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;
  
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleProjects.length < filteredProjects.length;
  
  return (
    <section id="projects" className="section-padding px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="tag bg-gray-100 mb-4">Projects</div>
          <h2 className="heading-lg mb-4">Recent Work</h2>
          <p className="body-md text-gray-600 max-w-2xl mb-12">
            Explore my latest projects showcasing machine learning, Python development, 
            and data engineering skills.
          </p>
          
          {/* Tags filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              className={`tag transition-colors ${
                selectedTag === null
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag transition-colors ${
                  selectedTag === tag
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Load more button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
