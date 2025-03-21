
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/lib/animations';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Portfolio.
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick('about')}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Contact
          </button>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <Button size="sm" className="rounded-full">
            Resume <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover:text-gray-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white pt-20 px-6 transition-transform duration-300 ease-in-out transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6">
          <button
            onClick={() => handleNavClick('about')}
            className="text-xl font-medium hover:text-gray-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-xl font-medium hover:text-gray-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="text-xl font-medium hover:text-gray-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-xl font-medium hover:text-gray-600 transition-colors"
          >
            Contact
          </button>
          
          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <Button size="lg" className="mt-4 rounded-full">
            Resume <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
