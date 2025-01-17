import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "+55 (11) 91234-5678",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: "contact@photoart.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização do Estúdio",
      content: "123 Rua da Fotografia, Cidade das Artes, AC 12345",
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, href: "#" },
    { icon: <Facebook className="h-6 w-6" />, href: "#" },
    { icon: <Twitter className="h-6 w-6" />, href: "#" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-gray-800 mr-4">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
