
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const Hero = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-10 py-20 relative z-30">
      {/* Reduced opacity for floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div 
        ref={ref}
        className={`max-w-6xl w-full mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100/20 backdrop-blur-sm font-medium mb-2 animate-pulse">
              Machine Learning & AI Engineer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Aditya Raj</span>
              <br />
              Building intelligent systems that shape the future
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Passionate ML engineer crafting AI solutions that transform industries. Specializing in deep learning, 
              computer vision, and natural language processing to solve complex real-world problems through data-driven innovation.
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <p className="text-gray-300">Developing scalable ML models that deliver actionable insights</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                <p className="text-gray-300">Bridging the gap between cutting-edge research and practical applications</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                <p className="text-gray-300">Empowering businesses with AI to automate and optimize workflows</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                onClick={() => scrollTo('projects')}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                onClick={() => scrollTo('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl transition-all hover:shadow-blue-500/20">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <img 
                  src="/lovable-uploads/60cd379d-9991-4338-b6bd-e07ec4892b4d.png" 
                  alt="Aditya Raj Profile Image" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    console.error("Image failed to load", e);
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-500"></div>
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
