
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
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

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="md:flex">
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience premium Chicago VPS hosting?</h2>
              <p className="text-muted-foreground mb-6">
                Deploy your virtual server in under 60 seconds with our instant provisioning system. No credit card required for a 7-day trial.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
            
            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-primary to-primary/80 text-white p-12">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Why customers choose us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="bg-white/20 rounded-full p-0.5 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">Chicago-based data center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/20 rounded-full p-0.5 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">NVMe SSD storage on all plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/20 rounded-full p-0.5 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">10Gbps network connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/20 rounded-full p-0.5 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">24/7 expert technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/20 rounded-full p-0.5 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">Up to 99.99% uptime SLA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
