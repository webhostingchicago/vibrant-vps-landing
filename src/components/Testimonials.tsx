
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "Switching to ChicagoVPS was a game-changer for our e-commerce platform. The NVMe storage and 10Gbps network made our site load times drop by over 40%.",
      author: "Jessica Chen",
      role: "CTO, ShopWave",
      rating: 5
    },
    {
      quote: "As a developer, I appreciate the full root access and the reliability of their infrastructure. I've been using their VPS for both development and production for over 3 years now.",
      author: "Michael Rodriguez",
      role: "Senior Developer, CodeStack",
      rating: 5
    },
    {
      quote: "The proximity to Chicago's financial district gives us the low latency we need for our trading algorithms. Their uptime has been exceptional, with zero unplanned downtime in 18 months.",
      author: "Robert Keller",
      role: "IT Director, FinTech Solutions",
      rating: 5
    },
    {
      quote: "Customer support has been outstanding. When we needed to scale our resources during a traffic spike, their team helped us upgrade in minutes without any downtime.",
      author: "Sarah Johnson",
      role: "Product Manager, MediaGroup",
      rating: 5
    },
    {
      quote: "The performance-to-price ratio is unbeatable. We're running multiple websites and applications on their Business plan and the performance has been stellar.",
      author: "Daniel Park",
      role: "Founder, WebSolutions",
      rating: 5
    },
    {
      quote: "The automated backups and snapshots have saved us multiple times during development. Restoring to previous states is seamless and takes seconds.",
      author: "Emily Taylor",
      role: "Lead Developer, AppWorks",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block mb-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Customer Testimonials
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            What our clients have to say
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Join hundreds of satisfied customers who trust ChicagoVPS for their mission-critical applications and websites.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-subtle hover:shadow-card transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="mb-4 text-sm md:text-base">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
