import React from 'react';
import { Camera, Users, Image, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Fotografia de Casamento",
      description: "Capturando seu dia especial com elegância e emoção",
      price: "A partir de R$10.000",
      features: [
        "Cobertura do dia inteiro",
        "Edição profissional",
        "Galeria online",
        "Imagens em alta resolução",
      ],
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Sessões de Retrato",
      description: "Retratos profissionais que capturam sua personalidade",
      price: "A partir de R$1.500",
      features: [
        "Sessão de 1 hora",
        "Múltiplas locações",
        "Troca de roupas",
        "10 fotos editadas",
      ],
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Fotografia Comercial",
      description: "Imagens de alta qualidade para as necessidades do seu negócio",
      price: "A partir de R$2.500",
      features: [
        "Fotografia de produtos",
        "Eventos corporativos",
        "Fotografias arquitetônicas",
        "Licença comercial",
      ],
    },
    {
      icon: <Image className="h-12 w-12" />,
      title: "Cobertura de Eventos",
      description: "Documentando seus eventos especiais de forma profissional",
      price: "A partir de R$4.000",
      features: [
        "Cobertura de 4 horas",
        "Destaques do evento",
        "Entrega rápida",
        "Entrega digital",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-gray-800 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">{service.price}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="mt-8 inline-block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Reserve Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
