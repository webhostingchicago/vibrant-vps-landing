
import { useState, useEffect } from 'react';
import { ArrowRight, Server, Cpu, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className={`glass-panel py-1.5 px-3 rounded-full text-xs font-medium inline-flex items-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-subtle"></span>
              Enterprise-grade VPS hosting in Chicago
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 transition-all duration-700 text-balance ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Premium <span className="text-primary">Chicago-based</span> VPS Hosting for Uncompromising Performance
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 text-balance ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Experience lightning-fast connectivity, dedicated resources, and exceptional reliability with our Chicago data center VPS solutions.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <Button size="lg" className="shadow-subtle w-full sm:w-auto" onClick={() => window.open('https://webhostingchicago.duoservers.com/', '_blank')}>
              Deploy Your VPS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://webhostingchicago.duoservers.com/', '_blank')}>
              View Plans
            </Button>
          </div>
        </div>
        
        <div className={`mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="glass-card p-6 rounded-xl card-hover-effect">
            <Server className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Dedicated Resources</h3>
            <p className="text-sm text-muted-foreground">100% allocated CPU and RAM for your applications</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl card-hover-effect">
            <Cpu className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">High Performance</h3>
            <p className="text-sm text-muted-foreground">Latest-gen processors and NVMe SSD storage</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl card-hover-effect">
            <Globe className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">99.99% Uptime</h3>
            <p className="text-sm text-muted-foreground">Redundant network and power infrastructure</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl card-hover-effect">
            <Lock className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Advanced Security</h3>
            <p className="text-sm text-muted-foreground">DDoS protection and regular security audits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
