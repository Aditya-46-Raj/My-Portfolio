
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const Hero = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div 
        ref={ref}
        className={`max-w-6xl w-full mx-auto staggered-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 font-medium mb-2">
              Machine Learning & Python Expert
            </div>
            
            <h1 className="heading-xl">
              Building intelligent solutions with data & code
            </h1>
            
            <p className="body-lg text-gray-600 max-w-2xl">
              I specialize in developing machine learning models and Python applications 
              that solve real-world problems. Currently working on projects
              focused on bringing AI to web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full" onClick={() => scrollTo('projects')}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" onClick={() => scrollTo('contact')}>
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="glass-morphism rounded-2xl p-6 hover-effect">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                {/* Replace with your profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Profile Image
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={() => scrollTo('about')}
            aria-label="Scroll down"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
