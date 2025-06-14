
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import OptimizedImage from './OptimizedImage';
import { useResponsive } from '@/hooks/useResponsive';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Programmes', href: '/programmes' },
    { name: 'Investir', href: '/investir' },
    { name: 'À propos', href: '/a-propos' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container flex h-16 sm:h-18 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-kerma-brown focus:ring-offset-2 rounded-lg p-2 transition-all duration-200"
          aria-label="Retour à l'accueil - KĒRMA Developments"
        >
          <OptimizedImage
            src="/lovable-uploads/8a248a4e-db11-46c5-aa58-42e802640f3c.png" 
            alt="KĒRMA Developments - Logo" 
            className={`${isMobile ? 'h-8' : isTablet ? 'h-10' : 'h-12'} w-auto transition-all duration-200`}
            lazy={false}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => handleSmoothScroll(item.href)}
              className={`relative text-sm font-medium transition-all duration-200 hover:text-kerma-brown ${
                isActive(item.href) 
                  ? 'text-kerma-brown' 
                  : 'text-gray-600'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.name}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-kerma-brown rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2 hover:bg-gray-100 transition-colors rounded-lg"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </Button>
          </SheetTrigger>
          
          <SheetContent 
            side="right" 
            className="w-full sm:w-80 bg-white p-0"
            aria-label="Menu de navigation mobile"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <OptimizedImage
                src="/lovable-uploads/8a248a4e-db11-46c5-aa58-42e802640f3c.png" 
                alt="KĒRMA Developments" 
                className="h-8 w-auto"
                lazy={false}
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col p-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    handleSmoothScroll(item.href);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive(item.href) 
                      ? 'text-kerma-brown' 
                      : 'text-gray-700 hover:text-kerma-brown'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
