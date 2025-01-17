import { Award, Camera, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premiado",
      description: "Vários prêmios e reconhecimentos em fotografia",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mais de 500 Clientes",
      description: "Confiado por centenas de clientes satisfeitos",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "10 Anos de Experiência",
      description: "Especialização profissional em fotografia",
    },
  ];

  const testimonials = [
    {
      text: "Um olhar incrível para detalhes e composição. As fotos superaram nossas expectativas!",
      author: "Sarah Johnson",
      role: "Cliente de Casamento",
    },
    {
      text: "Profissional, criativo e um prazer de trabalhar. Altamente recomendado!",
      author: "Michael Chen",
      role: "Cliente Corporativo",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?auto=format&fit=crop&q=80"
              alt="Fotógrafo"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-gray-600 mb-8">
              Com mais de uma década de experiência em fotografia, desenvolvi uma paixão
              por capturar os momentos mais preciosos da vida. Minha jornada começou com uma câmera simples
              e evoluiu para uma dedicação ao longo da vida à arte de contar histórias visuais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-800 mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">O que os Clientes Dizem</h3>
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="border-l-4 border-gray-900 pl-4">
                  <p className="text-gray-600 italic mb-2">{testimonial.text}</p>
                  <footer>
                    <strong className="text-gray-900">{testimonial.author}</strong>
                    <span className="text-gray-500"> — {testimonial.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
