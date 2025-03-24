
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-subtle' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <span className="font-display font-semibold text-lg">ChicagoVPS</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link text-sm font-medium">Features</a>
            <a href="#pricing" className="nav-link text-sm font-medium">Pricing</a>
            <a href="#testimonials" className="nav-link text-sm font-medium">Testimonials</a>
            <a href="#faq" className="nav-link text-sm font-medium">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="text-sm font-medium">Contact</a>
            <Button size="sm" className="shadow-subtle">Get Started</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block py-2 text-sm font-medium">Features</a>
            <a href="#pricing" className="block py-2 text-sm font-medium">Pricing</a>
            <a href="#testimonials" className="block py-2 text-sm font-medium">Testimonials</a>
            <a href="#faq" className="block py-2 text-sm font-medium">FAQ</a>
            <a href="#contact" className="block py-2 text-sm font-medium">Contact</a>
            <Button className="w-full mt-2 shadow-subtle">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
