// 📁 src/data/team.ts

import { TeamMember, Job } from '@/types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'joao-silva',
    name: 'João Silva',
    role: 'CEO & Co-fundador',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Empreendedor serial com mais de 15 anos de experiência em tecnologia. Apaixonado por criar soluções que impactam milhões de pessoas.',
    skills: ['Estratégia', 'Liderança', 'Produto', 'Visão de Negócio'],
    education: [
      {
        institution: 'MIT - Massachusetts Institute of Technology',
        degree: 'MBA em Gestão de Tecnologia',
        year: '2015'
      },
      {
        institution: 'USP - Universidade de São Paulo',
        degree: 'Engenharia da Computação',
        year: '2010'
      }
    ],
    experience: [
      {
        company: 'Zatas',
        role: 'CEO & Co-fundador',
        period: '2020 - Presente',
        description: 'Liderando a visão estratégica e crescimento da empresa, expandindo para 5 países.'
      },
      {
        company: 'TechCorp Brasil',
        role: 'Diretor de Produto',
        period: '2015 - 2020',
        description: 'Responsável por lançar 3 produtos que geraram R$50M em receita.'
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/joaosilva',
      twitter: 'https://twitter.com/joaosilva'
    }
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    role: 'CTO & Co-fundadora',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Engenheira de software com especialização em arquitetura de sistemas escaláveis. Líder técnica com foco em inovação e qualidade.',
    skills: ['Arquitetura de Software', 'Cloud Computing', 'DevOps', 'Gestão Técnica'],
    education: [
      {
        institution: 'Stanford University',
        degree: 'Mestrado em Ciência da Computação',
        year: '2014'
      },
      {
        institution: 'UNICAMP',
        degree: 'Engenharia de Software',
        year: '2012'
      }
    ],
    experience: [
      {
        company: 'Zatas',
        role: 'CTO & Co-fundadora',
        period: '2020 - Presente',
        description: 'Liderando time de 50+ engenheiros, construindo infraestrutura que atende 1M+ usuários.'
      },
      {
        company: 'Amazon Web Services',
        role: 'Senior Solutions Architect',
        period: '2016 - 2020',
        description: 'Consultoria para empresas Fortune 500 em migração para cloud.'
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/mariasantos',
      github: 'https://github.com/mariasantos'
    }
  },
  {
    id: 'pedro-oliveira',
    name: 'Pedro Oliveira',
    role: 'CPO & Co-fundador',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'Designer de produto com foco em experiência do usuário. Acredita que design é sobre resolver problemas, não apenas estética.',
    skills: ['Product Design', 'UX Research', 'Design Systems', 'Prototipagem'],
    education: [
      {
        institution: 'Parsons School of Design - NYC',
        degree: 'Mestrado em Design Interaction',
        year: '2016'
      },
      {
        institution: 'ESPM',
        degree: 'Design Gráfico',
        year: '2013'
      }
    ],
    experience: [
      {
        company: 'Zatas',
        role: 'CPO & Co-fundador',
        period: '2020 - Presente',
        description: 'Liderando a visão de produto e design, criando experiências premiadas.'
      },
      {
        company: 'Nubank',
        role: 'Lead Product Designer',
        period: '2017 - 2020',
        description: 'Responsável pelo redesign do app usado por 40M+ clientes.'
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/pedrooliveira',
      twitter: 'https://twitter.com/pedrooliv'
    }
  },
  {
    id: 'ana-costa',
    name: 'Ana Costa',
    role: 'CMO & Co-fundadora',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Especialista em growth marketing e branding. Construiu estratégias de marketing que geraram crescimento de 300% em startups.',
    skills: ['Growth Marketing', 'Branding', 'Analytics', 'Estratégia de Conteúdo'],
    education: [
      {
        institution: 'Harvard Business School',
        degree: 'MBA em Marketing',
        year: '2015'
      },
      {
        institution: 'FGV',
        degree: 'Administração de Empresas',
        year: '2011'
      }
    ],
    experience: [
      {
        company: 'Zatas',
        role: 'CMO & Co-fundadora',
        period: '2020 - Presente',
        description: 'Liderando todas as iniciativas de marketing e crescimento da marca.'
      },
      {
        company: 'Rock Content',
        role: 'Diretora de Marketing',
        period: '2016 - 2020',
        description: 'Responsável por crescimento de 10x na base de clientes.'
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/anacosta',
      twitter: 'https://twitter.com/anacosta'
    }
  }
];

export const JOBS: Job[] = [
  {
    id: 'senior-frontend',
    title: 'Desenvolvedor(a) Frontend Sênior',
    department: 'Engenharia',
    location: 'São Paulo, SP (Híbrido)',
    type: 'full-time',
    description: 'Buscamos um(a) desenvolvedor(a) frontend sênior para liderar o desenvolvimento de interfaces modernas e escaláveis.',
    requirements: [
      '5+ anos de experiência com React e TypeScript',
      'Experiência com Next.js e SSR',
      'Conhecimento profundo de performance web',
      'Experiência com testes automatizados',
      'Inglês avançado'
    ],
    benefits: [
      'Salário competitivo + equity',
      'Home office flexível',
      'Plano de saúde e odontológico',
      'Budget para cursos e eventos',
      'Ambiente de aprendizado contínuo'
    ]
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remoto',
    type: 'full-time',
    description: 'Procuramos um(a) designer de produto para criar experiências incríveis para nossos usuários.',
    requirements: [
      '3+ anos de experiência em product design',
      'Portfólio demonstrando processos de UX',
      'Domínio de Figma e ferramentas de prototipagem',
      'Experiência com design systems',
      'Mentalidade de dados e testes'
    ],
    benefits: [
      'Trabalho 100% remoto',
      'Equipamento top de linha',
      'Plano de saúde premium',
      'Licença Creative Cloud',
      'Cultura de feedback e crescimento'
    ]
  },
  {
    id: 'marketing-analyst',
    title: 'Analista de Marketing Digital',
    department: 'Marketing',
    location: 'São Paulo, SP',
    type: 'full-time',
    description: 'Estamos em busca de um(a) analista para gerenciar nossas campanhas digitais e estratégias de growth.',
    requirements: [
      '2+ anos em marketing digital',
      'Experiência com Google Ads e Meta Ads',
      'Conhecimento em SEO e analytics',
      'Habilidade com dados e métricas',
      'Criatividade e proatividade'
    ],
    benefits: [
      'Salário + bônus por performance',
      'Vale alimentação e refeição',
      'Gympass',
      'Day off no aniversário',
      'Ambiente jovem e colaborativo'
    ]
  }
];