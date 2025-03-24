
import { useState, useEffect, useRef } from 'react';
import { Terminal, Database, Network, HardDrive, Zap, CloudCog } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const features = [
    {
      title: "Full Root Access",
      description: "Complete control over your virtual server with root access. Install any software, configure custom services, and optimize your environment exactly how you need it.",
      icon: Terminal
    },
    {
      title: "NVMe SSD Storage",
      description: "Blazing-fast NVMe SSD storage with read/write speeds up to 3500/3000 MB/s. Perfect for database-heavy applications, content delivery, and high-traffic websites.",
      icon: HardDrive
    },
    {
      title: "10Gbps Network",
      description: "Ultra-low latency connectivity with our 10Gbps network infrastructure. Directly connected to major internet exchanges for optimal routing to your users worldwide.",
      icon: Network
    },
    {
      title: "Managed Databases",
      description: "Easily deploy and scale MySQL, PostgreSQL, Redis, and MongoDB databases with automatic backups, monitoring, and optimization tools included.",
      icon: Database
    },
    {
      title: "Instant Provisioning",
      description: "Deploy your VPS in under 60 seconds. Our automated provisioning system ensures your server is ready when you are, with your choice of OS and configuration.",
      icon: Zap
    },
    {
      title: "Cloud Management",
      description: "Intuitive control panel for managing all aspects of your VPS. Monitor resources, scale with one click, and automate routine maintenance tasks.",
      icon: CloudCog
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block mb-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Powerful Features
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Enterprise-grade infrastructure at your fingertips
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Our Chicago data center delivers exceptional performance and reliability with cutting-edge hardware and networking technology.
          </p>
        </div>
        
        <div className={`max-w-6xl mx-auto transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          {/* Feature tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeTab === index 
                    ? 'bg-primary text-white shadow-subtle' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
          
          {/* Feature details */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="h-full flex flex-col justify-center">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-6">
                  {features.map((feature, index) => (
                    <feature.icon
                      key={index}
                      className={`h-6 w-6 text-primary transition-opacity duration-300 ${
                        activeTab === index ? 'block' : 'hidden'
                      }`}
                    />
                  ))}
                </div>
                
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-300 ${
                      activeTab === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 absolute -z-10'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="glass-card p-8 rounded-2xl shadow-card overflow-hidden">
                {/* This would be a visualization of the feature */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl p-10 h-80 flex items-center justify-center">
                  {features.map((feature, index) => (
                    <feature.icon
                      key={index}
                      className={`h-24 w-24 text-primary/70 transition-all duration-500 ${
                        activeTab === index 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-50 absolute'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
