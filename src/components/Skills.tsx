
import { useInView } from '@/lib/animations';
import { Code, Database, Laptop, Layers, Server, Terminal, Layout, BookOpen, Award, Library, Tool, Cpu } from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  const technicalSkills = {
    languages: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Preprocessing', 'Model Evaluation'],
    frameworks: ['Numpy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Scikit-Learn', 'Keras', 'Seaborn', 'Tkinter'],
    tools: ['Docker', 'Visual Studio Code', 'Jupyter Notebook', 'Git'],
    libraries: ['Hugging Face', 'Ollama', 'LLaMA', 'Gemini API', 'FastAPI', 'Flask'],
    interests: ['Competitive Programming', 'AI/ML', 'Data Science', 'Model Optimization']
  };

  // Function to generate a random color from a predefined set for skill tags
  const getSkillTagColor = (index: number) => {
    const colors = [
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="section-padding px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="tag bg-gray-100 dark:bg-gray-800 mb-4">Technical Skills</div>
          <h2 className="heading-lg mb-12 max-w-2xl text-gray-900 dark:text-gray-100">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skills Categories */}
            <div className="space-y-8">
              {/* Languages */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-50 dark:bg-blue-900/50 rounded-md text-blue-500 dark:text-blue-300">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.languages.map((skill, index) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-purple-50 dark:bg-purple-900/50 rounded-md text-purple-500 dark:text-purple-300">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.technologies.map((skill, index) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index + 1)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-green-50 dark:bg-green-900/50 rounded-md text-green-500 dark:text-green-300">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.frameworks.map((skill, index) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index + 2)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Tools */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-yellow-50 dark:bg-yellow-900/50 rounded-md text-yellow-600 dark:text-yellow-300">
                    <Tool size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.tools.map((skill, index) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index + 3)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Libraries */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-red-50 dark:bg-red-900/50 rounded-md text-red-500 dark:text-red-300">
                    <Library size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.libraries.map((skill, index) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index + 4)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="glass-morphism rounded-xl p-6 dark:bg-gray-800/40">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-indigo-50 dark:bg-indigo-900/50 rounded-md text-indigo-500 dark:text-indigo-300">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 text-gray-900 dark:text-gray-100">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.interests.map((interest, index) => (
                        <span key={interest} className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillTagColor(index + 5)}`}>
                          {interest}
                        </span>
                      ))}
                    </div>
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

export default Skills;
