# PhotoArt Portfolio

Este é um projeto de portfólio para fotógrafos, desenvolvido com foco em modernidade, responsividade e usabilidade. Ele apresenta seções para exibir serviços, portfólio, depoimentos e contato.

## Acesso ao Projeto

O projeto está disponível online e pode ser acessado em:

[https://photoart-portfolio.netlify.app/](https://photoart-portfolio.netlify.app/)

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework para estilização com classes utilitárias.
- **Vite**: Ferramenta de build rápida para projetos front-end.

## Funcionalidades

### 1. Página Inicial (Hero)
- Apresentação impactante com um título e chamadas para ação.

### 2. Sobre
- Destaques sobre a experiência do fotógrafo.
- Depoimentos de clientes satisfeitos.

### 3. Portfólio
- Exibição de categorias como "Retratos", "Paisagens", "Eventos", e "Comercial".
- Galeria de imagens interativas com efeitos de hover.

### 4. Serviços
- Descrição detalhada de serviços oferecidos, como fotografia de casamento e eventos.
- Preços iniciais e características principais.

### 5. Contato
- Formulário para envio de mensagens.
- Informações de contato, incluindo telefone, e-mail e redes sociais.

## Como Executar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/evandrodias11/photoart-portfolio.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd photoart-portfolio
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acesse o projeto**:
   Abra o navegador e acesse `http://localhost:5173`.

## Estrutura de Pastas

```
photoart-portfolio/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas principais
│   ├── styles/             # Arquivos de estilo
│   └── assets/             # Imagens e outros recursos
├── public/                 # Arquivos estáticos
├── package.json            # Gerenciamento de dependências
├── tailwind.config.js      # Configuração do Tailwind CSS
└── vite.config.ts          # Configuração do Vite
```

## Deploy

O projeto foi hospedado na Netlify. Para publicar novas alterações:

1. Faça o build do projeto:
   ```bash
   npm run build
   ```

2. Faça o upload dos arquivos da pasta `dist/` para o painel do Netlify.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests no repositório.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

