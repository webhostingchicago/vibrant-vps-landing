
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small websites and applications",
      monthlyCost: 15,
      annualCost: 12,
      cpu: "2 vCPU",
      ram: "2 GB RAM",
      storage: "50 GB NVMe SSD",
      transfer: "2 TB Bandwidth",
      features: [
        "99.9% Uptime SLA",
        "Basic DDoS Protection",
        "24/7 Support",
        "1 Snapshot"
      ]
    },
    {
      name: "Business",
      description: "Ideal for growing businesses and e-commerce",
      monthlyCost: 35,
      annualCost: 29,
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "100 GB NVMe SSD",
      transfer: "4 TB Bandwidth",
      features: [
        "99.95% Uptime SLA",
        "Advanced DDoS Protection",
        "Priority Support",
        "3 Snapshots",
        "Free Backups"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For high-traffic applications requiring maximum performance",
      monthlyCost: 75,
      annualCost: 65,
      cpu: "8 vCPU",
      ram: "16 GB RAM",
      storage: "200 GB NVMe SSD",
      transfer: "8 TB Bandwidth",
      features: [
        "99.99% Uptime SLA",
        "Enterprise DDoS Protection",
        "Dedicated Account Manager",
        "Unlimited Snapshots",
        "Daily Automated Backups",
        "Private Networking"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block mb-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Simple Pricing
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Choose the perfect plan for your needs
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Transparent pricing with no hidden fees. All plans include our Chicago-based infrastructure with premium network connectivity.
          </p>
          
          <div className={`inline-flex items-center p-1 bg-secondary rounded-full transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white shadow-sm' : 'hover:bg-white/50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                isAnnual ? 'bg-white shadow-sm' : 'hover:bg-white/50'
              }`}
            >
              Annual <span className="text-xs text-primary font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-500 ${
                plan.popular ? 'md:-mt-4 md:mb-4 ring-2 ring-primary shadow-highlight' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-xs font-medium py-1.5 text-center">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-10' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualCost : plan.monthlyCost}</span>
                  <span className="text-muted-foreground">/mo</span>
                  {isAnnual && <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Billed annually</span>}
                </div>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full mb-8"
                >
                  Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="font-mono text-primary">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="font-mono text-primary">{plan.ram}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="font-mono text-primary">{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="font-mono text-primary">{plan.transfer}</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">Plan includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
