import { Menu, X, Camera } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Início', href: '#home' },
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Sobre', href: '#about' },
    { title: 'Serviços', href: '#services' },
    { title: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">PhotoArt</span>
          </div>

          {/* Navegação para Desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Navegação para Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
