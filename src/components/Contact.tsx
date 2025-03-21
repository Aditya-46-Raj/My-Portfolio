
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

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
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="tag bg-gray-100 mb-4">Contact</div>
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="body-md text-gray-600 max-w-2xl mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-morphism rounded-xl p-8">
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
                    className="w-full"
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
                    className="w-full"
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
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm mb-4">Connect with me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center hover:text-gray-600 transition-colors"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    <span>your.email@example.com</span>
                  </a>
                  
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-600 transition-colors"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    <span>github.com/yourusername</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    <span>linkedin.com/in/yourusername</span>
                  </a>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="heading-sm mb-3">Looking for collaboration?</h3>
                <p className="body-sm text-gray-600 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Button variant="outline" className="rounded-full">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
