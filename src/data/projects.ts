import { Project, Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    icon: '💻',
    description: 'Soluções web e mobile sob medida'
  },
  {
    id: 'design',
    title: 'Design',
    icon: '🎨',
    description: 'Identidade visual e interfaces incríveis'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: '📢',
    description: 'Estratégias digitais que convertem'
  }
];

export const PROJECTS: Project[] = [
  // EXEMPLO 1: Projeto com múltiplos autores e TODOS os links
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce',
    category: 'desenvolvimento',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
    description: 'Plataforma completa de vendas online com painel administrativo',
    year: 2024,
    authors: [
      {
        name: 'João Silva',
        role: 'Full Stack Developer',
        avatar: 'https://i.pravatar.cc/150?img=12',
        linkedin: 'https://linkedin.com/in/joaosilva',
        github: 'https://github.com/joaosilva',
        instagram: 'https://instagram.com/mariasantos.design',
        portfolio: 'https://joaosilva.dev'
      },
      {
        name: 'Maria Santos',
        role: 'UI/UX Designer',
        avatar: 'https://i.pravatar.cc/150?img=5',
        linkedin: 'https://linkedin.com/in/mariasantos',
        instagram: 'https://instagram.com/mariasantos.design',
        portfolio: 'https://mariasantos.design'
      },
      {
        name: 'Pedro Costa',
        role: 'Backend Developer',
        avatar: 'https://i.pravatar.cc/150?img=8',
        github: 'https://github.com/pedrocosta',
        email: 'pedro.costa@example.com'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    fullDescription: 'Desenvolvemos uma plataforma robusta de e-commerce com recursos avançados de gestão de produtos, pedidos e clientes. Sistema de pagamento integrado e painel administrativo completo.',
    gallery: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    ],
    client: 'TechStore Brasil',
    link: 'https://example.com'
  },

  // EXEMPLO 2: Projeto com 2 autores, alguns SEM avatar
  {
    id: 'app-mobile',
    title: 'App Mobile de Delivery',
    category: 'desenvolvimento',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    description: 'Aplicativo de delivery com rastreamento em tempo real',
    year: 2024,
    authors: [
      {
        name: 'Ana Lima',
        role: 'Mobile Developer',
        github: 'https://github.com/analima',
        linkedin: 'https://linkedin.com/in/analima'
      },
      {
        name: 'Carlos Ferreira',
        role: 'Backend Developer',
        avatar: 'https://i.pravatar.cc/150?img=13',
        github: 'https://github.com/carlosferreira'
      }
    ],
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    fullDescription: 'Aplicativo mobile completo para delivery de alimentos com GPS tracking, notificações push e sistema de avaliações.',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800'
    ],
    client: 'FoodExpress'
  },

  // EXEMPLO 3: Projeto com UM autor - apenas nome e role
  {
    id: 'brand-identity',
    title: 'Identidade Visual Premium',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    description: 'Criação completa de identidade visual para startup',
    year: 2024,
    authors: [
      {
        name: 'Beatriz Oliveira',
        role: 'Brand Designer'
      }
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'After Effects'],
    fullDescription: 'Desenvolvimento completo de identidade visual incluindo logo, paleta de cores, tipografia e manual de marca.',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800'
    ],
    client: 'StartHub'
  },

  // EXEMPLO 4: Projeto com autor ÚNICO e DETALHADO
  {
    id: 'ui-dashboard',
    title: 'Dashboard Analytics',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    description: 'Interface moderna para plataforma de analytics',
    year: 2023,
    authors: [
      {
        name: 'Rafael Mendes',
        role: 'Product Designer',
        avatar: 'https://i.pravatar.cc/150?img=33',
        linkedin: 'https://linkedin.com/in/rafaelmendes',
        instagram: 'https://instagram.com/rafael.design',
        portfolio: 'https://rafaelmendes.com',
        email: 'rafael@example.com'
      }
    ],
    technologies: ['Figma', 'Adobe XD', 'Principle'],
    fullDescription: 'Design de interface completa com foco em UX e visualização de dados complexos de forma intuitiva.',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    ],
    client: 'DataViz Pro'
  },

  // EXEMPLO 5: Projeto MINIMALISTA - apenas nome
  {
    id: 'social-campaign',
    title: 'Campanha Redes Sociais',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    description: 'Estratégia completa de marketing digital',
    year: 2024,
    authors: [
      {
        name: 'Equipe Marketing Zatas'
      }
    ],
    technologies: ['Meta Ads', 'Google Analytics', 'Canva'],
    fullDescription: 'Campanha completa de marketing digital resultando em 300% de aumento em conversões e engajamento.',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800'
    ],
    client: 'Fashion Brand'
  },

  // EXEMPLO 6: Projeto com MÚLTIPLOS autores e MIX de informações
  {
    id: 'content-strategy',
    title: 'Estratégia de Conteúdo',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
    description: 'Planejamento e execução de conteúdo para 6 meses',
    year: 2024,
    authors: [
      {
        name: 'Juliana Costa',
        role: 'Content Strategist',
        avatar: 'https://i.pravatar.cc/150?img=45',
        linkedin: 'https://linkedin.com/in/julianacosta'
      },
      {
        name: 'Felipe Rocha',
        role: 'SEO Specialist',
        github: 'https://github.com/feliperocha'
      },
      {
        name: 'Camila Souza',
        role: 'Copywriter'
      }
    ],
    technologies: ['SEO', 'Content Writing', 'Analytics'],
    fullDescription: 'Estratégia completa de conteúdo com foco em SEO, resultando em crescimento orgânico de 250%.',
    gallery: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
    ],
    client: 'Tech Blog'
  },

  // REAIS

  //DESIGN
  {
    id: 'luiz-gustavo-adv',
    title: 'Luiz Gustavo Advogado - Social Media Design',
    category: 'design',
    image: 'https://i.postimg.cc/vB20tRq7/capa-luiz-gustavo-adv.png',
    description: 'Projeto de Social Media – Direito do Passageiro Aéreo',
    year: 2025,
    authors: [
      {
        name: 'Thiago Bryan',
        role: 'CMO - Head of Marketing & Design',
        avatar: 'https://i.postimg.cc/pTm67XFP/perfil-bryan.jpg',
        linkedin: 'https://linkedin.com/in/thbryann',
      }
    ],
    technologies: ['Canva', 'Freepik'],
    fullDescription: 'Este projeto de social media foi desenvolvido para um advogado especializado em Direito do Passageiro Aéreo, com o objetivo de fortalecer sua presença digital e transmitir confiança ao público. Criado em 2025, o design foi produzido utilizando Canva e recursos do Freepik, explorando uma paleta de tons de azul e dourado, que remetem à credibilidade, profissionalismo e excelência. O resultado é uma identidade visual moderna e coerente com o nicho jurídico, reforçando autoridade e clareza na comunicação com os seguidores.',
    gallery: [
      'https://i.postimg.cc/qRN5YM3B/luiz-gustavo01.png',
      'https://i.postimg.cc/765WcY24/luiz-gustavo04.png',
      'https://i.postimg.cc/638mS5vt/luiz-gustavo02.png',
      'https://i.postimg.cc/bJZBMNtj/luiz-gustavo05.png',
      'https://i.postimg.cc/50XRGNCV/luiz-gustavo06.png',
      'https://i.postimg.cc/3Rkc6Jv5/luiz-gustavo03.png'
    ],
    client: 'Luiz Gustavo Advogado'
  },
  {
    id: 'montela-brand',
    title: 'MONTELA - Identidade Visual de Marca',
    category: 'design',
    image: 'https://i.postimg.cc/2yMbwTfD/montela-capa.jpg',
    description: 'Projeto de Identidade Visual – MONTELA, Inteligência que trabalha por você',
    year: 2025,
    authors: [
      {
        name: 'Antony Brito',
        role: 'CPO - Head of Growth & Product',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        linkedin: 'https://linkedin.com/in/britoantony',
        github: 'https://github.com/antonybrito'
      }
    ],
    technologies: ['Photoshop', 'Illustrator'],
    fullDescription: `Este projeto de identidade visual foi desenvolvido para a marca MONTELA, 
uma empresa focada em inteligência e inovação. O conceito nasce da fusão entre “MONTE”, que representa solidez e excelência, 
e “LA”, o laboratório de ideias e tecnologia. A proposta visual reflete o equilíbrio entre sabedoria e inovação, 
traduzidos nos tons de roxo, preto, branco e cinza, que reforçam elegância, confiança e sofisticação.`,
    gallery: [
      'https://i.postimg.cc/L5wYTvM9/montela01.jpg',
      'https://i.postimg.cc/NGzHBGrq/montela02.jpg',
      'https://i.postimg.cc/pV6FRVnH/montela03.jpg',
      'https://i.postimg.cc/T24Df25F/montela04.jpg'
    ],
    client: 'MONTELA'
  },
  {
    id: 'zatas',
    title: 'ZATAS - Identidade Visual de Marca',
    category: 'design',
    image: 'https://i.postimg.cc/fy9gWzZq/zatas-capa.jpg',
    description: 'Projeto de Identidade Visual – ZATAS, sua visão em tecnologia e sua tecnologia em resultados',
    year: 2025,
    authors: [
      {
        name: 'Antony Brito',
        role: 'CPO - Head of Growth & Product',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        linkedin: 'https://linkedin.com/in/britoantony',
        github: 'https://github.com/antonybrito'
      }
    ],
    technologies: ['Photoshop', 'Illustrator'],
    fullDescription: `A identidade visual da ZATAS foi desenvolvida com base em precisão, estratégia e inovação. 
Inspirada em Monte Carlo, a marca nasce com a filosofia de trabalhar “do Z ao A”: 
partindo do objetivo final para construir estratégias completas desde o início. As cores escolhidas — preto, cinza, branco e tons de azul — representam confiança, tecnologia e estabilidade, 
traduzindo a união entre sofisticação e eficiência. 
A tipografia Montserrat, em variações Regular e Medium, reforça a clareza e o equilíbrio geométrico, 
simbolizando a fusão entre design e performance. O resultado é uma marca moderna, tecnológica e de forte presença visual, 
que comunica solidez, inovação e propósito em cada detalhe.`,
    gallery: [
      'https://i.postimg.cc/5yCk941D/zatas01.jpg',
      'https://i.postimg.cc/hvd34Dgk/zatas02.jpg',
      'https://i.postimg.cc/FzLnFrmq/zatas03.jpg'
    ],
    client: 'ZATAS'
  },
  {
    id: 'aureni-brito-fisioterapeuta',
    title: 'Aureni Brito Fisioterapeuta - Logotipo e Cartão de Visitas',
    category: 'design',
    image: 'https://i.postimg.cc/52bYmsHK/aureni-capa.jpg',
    description: 'Desenvolvida para a Fisioterapeuta Aureni Brito, com foco em leveza, confiança e profissionalismo.',
    year: 2025,
    authors: [
      {
        name: 'Antony Brito',
        role: 'CPO - Head of Growth & Product',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        linkedin: 'https://linkedin.com/in/britoantony',
        github: 'https://github.com/antonybrito'
      }
    ],
    technologies: ['Photoshop', 'Illustrator'],
    fullDescription: 'Este projeto foi desenvolvido para a fisioterapeuta Aureni Brito, com o objetivo de criar uma identidade visual que transmitisse bem-estar, cuidado e confiança — valores essenciais à área da saúde. O logotipo foi desenhado com formas orgânicas e tipografia suave, representando movimento, equilíbrio e leveza. A paleta de cores combina tons de dourado e verde, simbolizando tranquilidade, vitalidade e harmonia. O cartão de visitas segue a mesma linguagem visual, garantindo unidade entre o material impresso e a presença digital. O resultado é uma identidade moderna e acolhedora, que comunica profissionalismo e empatia de forma clara e elegante.',
    gallery: [
      'https://i.postimg.cc/FHpfC03X/aureni01.jpg',
      'https://i.postimg.cc/HkzJvb5f/aureni02.jpg',
      'https://i.postimg.cc/Cx7ZrbDt/aureni03.jpg',
    ],
    client: 'Souza e Vilela'
  },
  {
    id: 'carlos-advogado',
    title: 'Carlos Advogado - Social Media Design',
    category: 'design',
    image: 'https://i.postimg.cc/bJtwPnDd/Capa-Carlos-1.png',
    description: 'Projeto de Social Media – Advocacia',
    year: 2025,
    authors: [
      {
        name: 'Thiago Bryan',
        role: 'CMO - Head of Marketing & Design',
        avatar: 'https://i.postimg.cc/pTm67XFP/perfil-bryan.jpg',
        linkedin: 'https://linkedin.com/in/thbryann',
      }
    ],
    technologies: ['Canva', 'Freepik'],
    fullDescription: 'Este projeto de social media foi criado para um advogado especializado no setor jurídico, com foco em transmitir autoridade, confiança e profissionalismo por meio do design.',
    gallery: [
      'https://i.postimg.cc/d1yVFC7b/10.png',
      'https://i.postimg.cc/s28gbmXy/12.png',
      'https://i.postimg.cc/Pxw5HDLB/18.png',
      'https://i.postimg.cc/HLKkFzxY/19.png',
      'https://i.postimg.cc/tgf48kT9/20.png',
      'https://i.postimg.cc/fL9RsdtT/4.png',
      'https://i.postimg.cc/W3k1VZF2/5.png',
      'https://i.postimg.cc/9M7Q29RV/6.png',
      'https://i.postimg.cc/HxykmMcC/9.png',
      'https://i.postimg.cc/PJ6XzQ0w/23.png',
      'https://i.postimg.cc/j28xQ4By/Carlos-Advogados11.png',
      'https://i.postimg.cc/nrVVDPSq/Carlos-Advogadosc2.png',
    ],
    client: 'Carlos'
  }


];