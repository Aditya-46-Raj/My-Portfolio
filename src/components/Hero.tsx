
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Twitter, ExternalLink, Code, Database, MessageSquare } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const Hero = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 relative overflow-hidden">
      {/* Floating planetary elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full opacity-50 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full opacity-40 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div 
        ref={ref}
        className={`max-w-6xl w-full mx-auto staggered-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'} z-10`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100/20 backdrop-blur-sm font-medium mb-2 animate-pulse">
              Machine Learning & Python Expert
            </div>
            
            <h1 className="heading-xl text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Aditya Raj</span>
              <br />
              Transforming data into intelligent solutions
            </h1>
            
            <p className="body-lg text-gray-300 max-w-2xl">
              Passionate about creating AI systems that solve real-world challenges. 
              Specializing in machine learning models, neural networks, and data-driven applications 
              with a vision to make AI accessible and impactful.
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <p className="text-gray-300">Creating intelligent systems that learn and adapt</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                <p className="text-gray-300">Building bridges between data science and web technologies</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                <p className="text-gray-300">Exploring the frontiers of AI and its practical applications</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => scrollTo('projects')}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => scrollTo('contact')}>
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://kaggle.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="Kaggle Profile"
              >
                <Database size={24} />
              </a>
              <a
                href="https://huggingface.co/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="Hugging Face Profile"
              >
                <MessageSquare size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-white transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="glass-morphism rounded-2xl p-4 hover-effect backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl transition-all hover:shadow-blue-500/20">
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <img 
                  src="/lovable-uploads/6da4841f-8a5a-4595-a772-f855fccef3de.png" 
                  alt="Profile Image" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={() => scrollTo('about')}
            aria-label="Scroll down"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
