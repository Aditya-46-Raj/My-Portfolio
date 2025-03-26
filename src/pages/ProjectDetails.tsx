
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code, FileCode, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useImageLoad } from '@/lib/animations';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Project } from '@/lib/types';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

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
              {slug === 'sentiment-analysis-tool' ? (
                <div className="space-y-8">
                  <div>
                    <h2 className="heading-md mb-4 flex items-center">
                      <Code className="mr-2 h-5 w-5" /> Features
                    </h2>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                            <span>Preprocessing Pipeline for text data</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                            <span>Multiple Machine Learning Models</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                            <span>Deep Learning Integration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                            <span>Model Saving & Loading</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                            <span>Performance Evaluation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h2 className="heading-md mb-4 flex items-center">
                      <FileCode className="mr-2 h-5 w-5" /> Project Structure
                    </h2>
                    <Card className="overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-left whitespace-pre-line">
{`📂 movie_review_classifier/
│── 📂 data/                    # Dataset & Processed Data
│── 📂 models/                   # Saved Trained Models
│── 📂 results/                   # Evaluation Metrics
│── 📂 notebooks/                 # Jupyter Notebooks for Analysis
│── 📂 src/                        # Source Code`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h2 className="heading-md mb-4 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" /> Model Performance
                    </h2>
                    <Card className="overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Model</TableHead>
                                <TableHead>Accuracy</TableHead>
                                <TableHead>Precision</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Linear SVC</TableCell>
                                <TableCell>51.31%</TableCell>
                                <TableCell>51.36%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Random Forest</TableCell>
                                <TableCell>53.88%</TableCell>
                                <TableCell>53.94%</TableCell>
                              </TableRow>
                              <TableRow className="bg-green-50">
                                <TableCell className="font-medium">Neural Network</TableCell>
                                <TableCell className="font-medium">88.05%</TableCell>
                                <TableCell className="font-medium">88.05%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Logistic Regression</TableCell>
                                <TableCell>51.31%</TableCell>
                                <TableCell>51.36%</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">The Neural Network model significantly outperforms other models with 88.05% accuracy.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h2 className="heading-md mb-4">Future Improvements</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Implement XGBoost or Gradient Boosting for better accuracy</li>
                      <li>Add Hyperparameter tuning</li>
                      <li>Deploy the model as a web application</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <h2>Project Details</h2>
                  <p>{project.content}</p>
                  
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
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
