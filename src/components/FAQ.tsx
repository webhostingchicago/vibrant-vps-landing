
import { useState, useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

  const faqs = [
    {
      question: "What is a VPS and how does it differ from shared hosting?",
      answer: "A Virtual Private Server (VPS) is a virtualized server that mimics a dedicated server within a shared hosting environment. Unlike shared hosting where resources are shared among all users, a VPS provides dedicated CPU, RAM, and storage resources exclusively for your use. This results in better performance, improved security, and greater control over your hosting environment."
    },
    {
      question: "Why choose Chicago for VPS hosting?",
      answer: "Chicago is a major internet hub with extensive connectivity to both East and West coast networks, offering excellent latency across North America. Our Chicago data center provides low-latency connections to major financial markets, robust infrastructure with multiple redundancies, and strategic geographic positioning that minimizes latency for users across the United States and Canada."
    },
    {
      question: "How quickly can I deploy a new VPS?",
      answer: "Our automated provisioning system allows you to deploy a new VPS in under 60 seconds. Once your payment is processed, you'll receive instant access to your control panel where you can choose your operating system and configuration. Your server will be ready for use within a minute."
    },
    {
      question: "Can I upgrade my VPS plan later?",
      answer: "Yes, you can easily upgrade your VPS plan as your needs grow. Our scalable infrastructure allows seamless upgrades with minimal downtime. You can increase CPU, RAM, storage, and bandwidth through your control panel, and the changes will be applied within minutes."
    },
    {
      question: "What operating systems do you support?",
      answer: "We support a wide range of operating systems including Ubuntu, Debian, CentOS, Rocky Linux, AlmaLinux, Fedora, and Windows Server. We regularly update our OS templates to ensure you have access to the latest versions with all security patches applied."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support through ticket system, live chat, and phone. Our support team consists of experienced system administrators who can assist with server issues, network problems, and general inquiries. Business and Enterprise plans include priority support with faster response times."
    },
    {
      question: "Do you offer a backup solution?",
      answer: "Yes, we offer both automated and manual backup solutions. Our Business and Enterprise plans include free automated backups, while all plans support manual snapshots. Backups are stored in a separate storage cluster to ensure data safety even in case of hardware failure."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We offer up to 99.99% uptime SLA depending on your plan. Our infrastructure is built with multiple redundancies, including power, network, and cooling systems. In the unlikely event that we fail to meet our SLA, you'll receive service credits as compensation."
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block mb-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Questions & Answers
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Frequently asked questions
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            Find answers to common questions about our Chicago VPS hosting services and infrastructure.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-6 md:p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
