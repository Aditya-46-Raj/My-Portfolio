
import { Github, Linkedin, Mail, Twitter, Database, Code, MessageSquare } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const Footer = () => {
  const { scrollTo } = useSmoothScroll();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-display font-bold tracking-tight mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block">
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
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollTo('projects')} 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollTo('skills')} 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Contact
                </button>
              </nav>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Aditya-46-Raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-46-raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/Aditya_Raj_0211"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.kaggle.com/aditya46raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaggle Profile"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <Database size={20} />
                </a>
                <a
                  href="https://huggingface.co/Aditya-46-Raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hugging Face Profile"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <MessageSquare size={20} />
                </a>
                <a
                  href="mailto:adityaraj21103@gmail.com"
                  aria-label="Email"
                  className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transition-transform"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Aditya Raj. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block">Designed and built with care</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
