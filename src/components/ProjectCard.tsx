
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { useImageLoad } from '@/lib/animations';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { loaded, onLoad, className } = useImageLoad();

  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover-effect">
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover ${className}`}
          onLoad={onLoad}
          loading="lazy"
        />
        <div className="absolute top-0 right-0 p-3 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag bg-gray-100 text-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="heading-sm mb-2">{project.title}</h3>
        <p className="body-sm text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
        <Link 
          to={`/project/${project.slug}`} 
          className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center"
        >
          View Project <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
