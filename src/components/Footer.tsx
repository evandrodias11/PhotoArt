import { Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8" />
              <span className="text-xl font-bold">PhotoArt</span>
            </div>
            <p className="text-gray-400">
              Capturando os momentos preciosos da vida através da arte e emoção.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Fotografia de Casamento</li>
              <li className="text-gray-400">Sessões de Retrato</li>
              <li className="text-gray-400">Fotografia Comercial</li>
              <li className="text-gray-400">Cobertura de Eventos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PhotoArt. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
