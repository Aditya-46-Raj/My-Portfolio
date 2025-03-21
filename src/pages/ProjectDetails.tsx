
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useImageLoad } from '@/lib/animations';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Project } from '@/lib/types';

// Import the sample project data from the Projects component
// In a real app, this would come from an API or database
import { projectsData } from '@/components/Projects';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { loaded, onLoad, className } = useImageLoad();

  useEffect(() => {
    // Simulate fetching project data
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projectsData.find((p) => p.slug === slug);
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="heading-lg mb-4">Project Not Found</h1>
        <p className="body-md text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center mb-8 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>

          <div className="space-y-8 animate-fadeIn">
            <h1 className="heading-lg">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 my-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="glass-morphism rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover ${className}`}
                  onLoad={onLoad}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </Button>
                </a>
              )}
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
            </div>
            
            <h2 className="heading-md mt-12 mb-4">Project Overview</h2>
            <p className="body-md text-gray-600 whitespace-pre-line">{project.description}</p>
            
            <div className="prose max-w-none mt-8">
              {/* In a real app, you would render the content with markdown or rich text */}
              <h2>Project Details</h2>
              <p>{project.content}</p>
              
              {/* Additional sections - these would be populated from real content */}
              <h3>Technologies Used</h3>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
                <li>Additional related technologies would be listed here</li>
              </ul>
              
              <h3>Challenges and Solutions</h3>
              <p>
                This section would describe the challenges faced during the project development
                and the innovative solutions implemented to overcome them.
              </p>
              
              <h3>Results and Impact</h3>
              <p>
                This section would detail the outcomes of the project, including metrics,
                user feedback, and the overall impact achieved.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
