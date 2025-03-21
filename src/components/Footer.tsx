
import { Github, Linkedin, Mail } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const Footer = () => {
  const { scrollTo } = useSmoothScroll();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-display font-bold tracking-tight mb-4">
              Portfolio.
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Machine Learning Engineer and Python Expert, building intelligent solutions
              that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-4">Navigate</h4>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollTo('about')} 
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollTo('projects')} 
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollTo('skills')} 
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  aria-label="Email"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Designed and built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
