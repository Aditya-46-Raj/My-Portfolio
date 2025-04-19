
import React from 'react';
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, Twitter, Database, FileDown, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/3 w-60 h-60 bg-teal-100 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="tag bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 mb-4 backdrop-blur-sm">Contact</div>
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="body-md text-gray-600 max-w-2xl mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-morphism rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full transition-all focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full transition-all focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] transition-all focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block">Connect with me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:adityaraj21103@gmail.com"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Mail className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>adityaraj21103@gmail.com</span>
                  </a>
                  
                  <a
                    href="https://github.com/Aditya-46-Raj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Github className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>github.com/Aditya-46-Raj</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/aditya-46-raj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Linkedin className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>linkedin.com/in/aditya-46-raj</span>
                  </a>
                  
                  <a
                    href="https://x.com/Aditya_Raj_0211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Twitter className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>x.com/Aditya_Raj_0211</span>
                  </a>
                  
                  <a
                    href="https://www.kaggle.com/aditya46raj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Database className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>kaggle.com/aditya46raj</span>
                  </a>
                  
                  <a
                    href="https://huggingface.co/Aditya-46-Raj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <MessageSquare className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    <span>huggingface.co/Aditya-46-Raj</span>
                  </a>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/70 to-white/50">
                <h3 className="heading-sm mb-3">Looking for collaboration?</h3>
                <p className="body-sm text-gray-600 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a 
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Aditya_Raj_Resume.pdf"
                  className="inline-block"
                >
                  <Button 
                    variant="outline" 
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                  >
                    Download Resume
                    <FileDown className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
