import React, { useState } from 'react';

const Portfolio = () => {
  const categories = ['Todos', 'Retratos', 'Paisagens', 'Eventos', 'Comercial'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      category: 'Retratos',
      title: 'Retrato com Luz Natural',
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      category: 'Paisagens',
      title: 'Vista da Montanha',
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      category: 'Eventos',
      title: 'Cerimônia de Casamento',
    },
    {
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      category: 'Comercial',
      title: 'Fotografia de Produto',
    },
    {
      url: 'https://images.unsplash.com/photo-1469504512102-900f29606341',
      category: 'Paisagens',
      title: 'Vista do Pôr do Sol',
    },
    {
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      category: 'Retratos',
      title: 'Foto Profissional',
    },
  ];

  const filteredImages = activeCategory === 'Todos'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Portfólio</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
