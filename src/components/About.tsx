
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, BrainCircuit } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="tag bg-gray-100 mb-4">About Me</div>
          <h2 className="heading-lg mb-12 max-w-2xl">Passionate about turning data into actionable insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="body-md text-gray-600">
                Welcome to my portfolio! I'm a Machine Learning Engineer and Python expert with a passion 
                for developing intelligent solutions. My journey in tech began with a fascination for how 
                data can be used to solve complex problems and make better decisions.
              </p>
              <p className="body-md text-gray-600">
                I specialize in developing end-to-end machine learning systems, from data collection and 
                preprocessing to model development and deployment. My expertise extends to creating 
                web applications that integrate these models, making AI accessible to users.
              </p>
              <p className="body-md text-gray-600">
                Currently, I'm working on several projects that showcase my skills in Python, machine learning, 
                and web development. I'm always eager to collaborate on new challenges and push the 
                boundaries of what's possible with technology.
              </p>
              
              <div className="pt-4">
                <Button variant="outline" className="rounded-full">
                  Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-morphism rounded-xl p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-50 rounded-md text-blue-500">
                    <BrainCircuit size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Machine Learning</h3>
                    <p className="body-sm text-gray-600">
                      Experienced in developing predictive models, natural language processing, 
                      computer vision, and recommendation systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-purple-50 rounded-md text-purple-500">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Python Development</h3>
                    <p className="body-sm text-gray-600">
                      Proficient in Python for data analysis, scientific computing, 
                      automation, and web application development.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-green-50 rounded-md text-green-500">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Data Engineering</h3>
                    <p className="body-sm text-gray-600">
                      Skilled in data pipeline development, ETL processes, 
                      database design, and big data technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
