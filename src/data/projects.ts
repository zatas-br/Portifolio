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
    icon: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
    description: 'Estratégias digitais que convertem'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce',
    category: 'desenvolvimento',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
    description: 'Plataforma completa de vendas online com painel administrativo',
    year: 2024,
    author: 'Equipe Zatas',
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
  {
    id: 'app-mobile',
    title: 'App Mobile de Delivery',
    category: 'desenvolvimento',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    description: 'Aplicativo de delivery com rastreamento em tempo real',
    year: 2024,
    author: 'Equipe Zatas',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    fullDescription: 'Aplicativo mobile completo para delivery de alimentos com GPS tracking, notificações push e sistema de avaliações.',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800'
    ],
    client: 'FoodExpress'
  },
  {
    id: 'brand-identity',
    title: 'Identidade Visual Premium',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    description: 'Criação completa de identidade visual para startup',
    year: 2024,
    author: 'Designer Zatas',
    technologies: ['Figma', 'Adobe Illustrator', 'After Effects'],
    fullDescription: 'Desenvolvimento completo de identidade visual incluindo logo, paleta de cores, tipografia e manual de marca.',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800'
    ],
    client: 'StartHub'
  },
  {
    id: 'ui-dashboard',
    title: 'Dashboard Analytics',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    description: 'Interface moderna para plataforma de analytics',
    year: 2023,
    author: 'Designer Zatas',
    technologies: ['Figma', 'Adobe XD', 'Principle'],
    fullDescription: 'Design de interface completa com foco em UX e visualização de dados complexos de forma intuitiva.',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    ],
    client: 'DataViz Pro'
  },
  {
    id: 'social-campaign',
    title: 'Campanha Redes Sociais',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    description: 'Estratégia completa de marketing digital',
    year: 2024,
    author: 'Equipe Marketing',
    technologies: ['Meta Ads', 'Google Analytics', 'Canva'],
    fullDescription: 'Campanha completa de marketing digital resultando em 300% de aumento em conversões e engajamento.',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800'
    ],
    client: 'Fashion Brand'
  },
  {
    id: 'content-strategy',
    title: 'Estratégia de Conteúdo',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
    description: 'Planejamento e execução de conteúdo para 6 meses',
    year: 2024,
    author: 'Equipe Marketing',
    technologies: ['SEO', 'Content Writing', 'Analytics'],
    fullDescription: 'Estratégia completa de conteúdo com foco em SEO, resultando em crescimento orgânico de 250%.',
    gallery: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
    ],
    client: 'Tech Blog'
  }
];