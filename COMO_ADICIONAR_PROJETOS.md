# Como Adicionar Novos Projetos ao Site

Adicionar um novo projeto ao site envolve **duas etapas simples**:

1.  **Adicionar os dados do projeto (imagem, link, tecnologias, etc.)** no arquivo `src/data/projects.ts`.
2.  **Adicionar os textos traduzidos (título, descrição, cliente)** nos arquivos de idioma, como `messages/pt-br/Projects.json` (e também no `en-us` se o site tiver inglês).

Abaixo estão 3 exemplos práticos para você copiar, colar e alterar conforme a necessidade.

---

## Exemplo 1: Site Web (Mostrando no Macbook)

Este é o formato ideal para sites. Usaremos `mockupType: "macbook"`.

**Passo 1: No arquivo `src/data/projects.ts` (Adicione dentro do array `PROJECTS_STATIC`):**
```typescript
  {
    id: "meu-novo-site-web", // Este ID DEVE ser exatamente o mesmo no arquivo JSON
    category: "desenvolvimento", // "desenvolvimento", "design" ou "marketing"
    image: "https://minha-imagem-aqui.com/capa.png", // Imagem principal
    technologies: ["React", "Next.js", "TailwindCSS"], // Ícones que vão aparecer
    link: "https://meusite.com.br", // Se preenchido, o site real abre dentro do mockup!
    gallery: [
      "https://minha-imagem-aqui.com/foto1.png",
      "https://minha-imagem-aqui.com/foto2.png"
    ],
    authorIds: ["thiago-bryan", "bruno-santiago"], // IDs dos membros da equipe
    mockupType: "macbook" // MOSTRA DENTRO DE UM COMPUTADOR
  },
```

**Passo 2: No arquivo `messages/pt-br/Projects.json`:**
```json
  "meu-novo-site-web": {
    "title": "Sistema Completo para Clínicas",
    "description": "Sistema de agendamento web responsivo e painel administrativo.",
    "fullDescription": "Este projeto foi desenvolvido para revolucionar o agendamento de consultas. Conta com um painel administrativo poderoso, dashboard financeiro e sistema de notificação por WhatsApp.",
    "client": "Clínica Saúde",
    "year": "2025"
  },
```

---

## Exemplo 2: Aplicativo Mobile (Mostrando no iPhone)

Este é o formato para aplicativos. Você pode usar `mockupType: "iphone"` ou simplesmente omitir essa linha (o padrão já é o iPhone).

**Passo 1: No arquivo `src/data/projects.ts`:**
```typescript
  {
    id: "app-de-entregas",
    category: "desenvolvimento",
    image: "https://minha-imagem-aqui.com/app-capa.png",
    technologies: ["React Native", "Expo", "Node"],
    link: null, // Deixando null, ele vai mostrar a "image" da capa dentro do celular
    gallery: [
      "https://minha-imagem-aqui.com/tela1.png",
      "https://minha-imagem-aqui.com/tela2.png",
      "https://minha-imagem-aqui.com/tela3.png"
    ],
    authorIds: ["antony-brito"],
    mockupType: "iphone" // MOSTRA DENTRO DO CELULAR (Opcional, pois é o padrão)
  },
```

**Passo 2: No arquivo `messages/pt-br/Projects.json`:**
```json
  "app-de-entregas": {
    "title": "Delivery App Rápido",
    "description": "Aplicativo de entregas locais com rastreamento em tempo real.",
    "fullDescription": "Aplicativo multiplataforma criado para conectar restaurantes locais a entregadores de forma eficiente. Utiliza geolocalização avançada para calcular as melhores rotas.",
    "client": "Fast Delivery Express",
    "year": "2024"
  },
```

---

## Exemplo 3: Sistema Híbrido (Alternando entre Macbook e iPhone! ✨)

Esta é a **nova funcionalidade**! Se você colocar `mockupType: "both"`, a página do projeto vai animar e trocar a tela de um computador para um celular a cada 10 segundos!

**Passo 1: No arquivo `src/data/projects.ts`:**
```typescript
  {
    id: "plataforma-ecommerce-magico",
    category: "desenvolvimento",
    image: "https://minha-imagem-aqui.com/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://meu-ecommerce-teste.com",
    gallery: [
      "https://minha-imagem-aqui.com/ecommerce1.png",
      "https://minha-imagem-aqui.com/ecommerce2.png"
    ],
    authorIds: ["gabriel-cardoso", "luigi"],
    mockupType: "both" // TROCA AUTOMATICAMENTE ENTRE MACBOOK E IPHONE A CADA 10 SEGUNDOS!
  },
```

**Passo 2: No arquivo `messages/pt-br/Projects.json`:**
```json
  "plataforma-ecommerce-magico": {
    "title": "E-commerce de Alta Performance",
    "description": "Loja virtual ultrarrápida com painel de vendas e gestão de estoque.",
    "fullDescription": "Plataforma de vendas online desenvolvida com foco total em SEO e conversão de vendas. O sistema é 100% responsivo, funcionando perfeitamente tanto em computadores quanto em dispositivos móveis.",
    "client": "Loja Mágica",
    "year": "2025"
  },
```

---

## Bônus: Exemplo 4: Projeto de Design ou Marketing (Sem Mockup)

Se for um projeto de marca, identidade visual, ou gestão de redes sociais, geralmente você não quer que a imagem fique "presa" dentro de um celular.

Para isso, usamos `mockup: false`. A imagem (ou vídeo) ficará do tamanho original na tela.

**Passo 1: No arquivo `src/data/projects.ts`:**
```typescript
  {
    id: "identidade-visual-padaria",
    category: "design", // Categoria design
    image: "https://minha-imagem-aqui.com/logo-padaria.jpg",
    technologies: ["Photoshop", "Illustrator"],
    link: null,
    gallery: [
      "https://minha-imagem-aqui.com/padaria-1.jpg",
      "https://minha-imagem-aqui.com/padaria-2.jpg"
    ],
    authorIds: ["thiago-bryan"],
    mockup: false // REMOVE O APARELHO (Celular/PC) e mostra só a arte!
  },
```

**Passo 2: No arquivo `messages/pt-br/Projects.json`:**
```json
  "identidade-visual-padaria": {
    "title": "Padaria Pão Quentinho - Branding",
    "description": "Criação de logotipo, paleta de cores e uniformes.",
    "fullDescription": "Redesign completo da marca focando em transmitir uma sensação acolhedora e tradicional, mas com toques modernos nas redes sociais.",
    "client": "Pão Quentinho",
    "year": "2025"
  }
```

---

### Dicas Importantes:
*   As imagens da **galeria** (`gallery`) são as que aparecem lá embaixo na página do projeto.
*   Os `authorIds` devem corresponder aos IDs da equipe encontrados no arquivo `src/data/team.ts`.
*   O campo `link` é especial. Se você colocar um link válido e seguro (`https://...`), o celular ou o macbook vão exibir o **site real funcionando e navegável** dentro da tela do aparelho! Se deixar `null`, ele exibe a foto do campo `image`.