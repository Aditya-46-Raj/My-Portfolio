
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useImageLoad } from '@/lib/animations';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Project } from '@/lib/types';
import { SentimentAnalysisContent } from '@/components/project-details/SentimentAnalysisContent';
import { AIChatbotContent } from '@/components/project-details/AIChatbotContent';
import { FaceMaskDetectionContent } from '@/components/project-details/FaceMaskDetectionContent';
import { DefaultProjectContent } from '@/components/project-details/DefaultProjectContent';

// Import the sample project data from the Projects component
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

  // Render the project content based on the slug
  const renderProjectContent = () => {
    switch (slug) {
      case 'sentiment-analysis-tool':
        return <SentimentAnalysisContent />;
      case 'ai-chatbot-gemini':
        return <AIChatbotContent />;
      case 'face-mask-detection':
        return <FaceMaskDetectionContent />;
      default:
        return <DefaultProjectContent project={project} />;
    }
  };

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
            
            {slug === 'sentiment-analysis-tool' && (
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">2023 - 2024</span>
              </div>
            )}
            
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
              {renderProjectContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
