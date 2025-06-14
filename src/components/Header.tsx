
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/', id: 'accueil' },
    { name: 'Nos programmes', href: '/programmes', id: 'programmes' },
    { name: 'Investir', href: '/investir', id: 'investir' },
    { name: 'À propos', href: '/a-propos', id: 'apropos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'accueil';
    if (path === '/programmes') return 'programmes';
    if (path === '/investir') return 'investir';
    if (path === '/a-propos') return 'a-propos';
    return 'accueil';
  };

  const activeSection = getActiveSection();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo KĒRMA plus visible */}
          <div className="flex-shrink-0">
            <Link
              to="/accueil"
              className="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-lg p-2"
              aria-label="Retour à l'accueil"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/f543da29-a9a9-4cd9-b721-e17c365929ad.png" 
                  alt="KĒRMA DEVELOPMENTS" 
                  className="h-12 sm:h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                />
                <div className="hidden sm:block">
                  <div className="text-brown-900 font-bold text-lg lg:text-xl tracking-wide">
                    KĒRMA
                  </div>
                  <div className="text-sky-700 font-medium text-xs lg:text-sm uppercase tracking-wider">
                    Developments
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 ${
                    activeSection === item.id
                      ? 'text-brown-900 bg-sky-300/20'
                      : 'text-gray-700 hover:text-brown-900 hover:bg-white/60'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 font-poppins font-medium whitespace-nowrap">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brown-900 group-hover:w-3/4 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-brown-900 transition-colors duration-300 rounded-lg hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-sky-300"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menu principal"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl m-4 p-4 space-y-2 shadow-lg border border-gray-200/50">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-sky-300 ${
                  activeSection === item.id
                    ? 'text-brown-900 bg-sky-300/20'
                    : 'text-gray-700 hover:text-brown-900 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;