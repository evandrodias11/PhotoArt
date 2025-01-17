import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Capture os Momentos da Vida</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Fotografia profissional que conta sua história através da arte
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            Ver Portfólio
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
