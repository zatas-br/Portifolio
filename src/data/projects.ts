// 📁 src/data/projects.ts
// (Você precisará definir estes tipos em seu arquivo types.ts)
import { CategoryStatic, ProjectStatic } from '@/types';

/**
 * Contém apenas dados estáticos de categorias (ID e ícone).
 * O conteúdo (title, description) virá do i18n.
 */
export const CATEGORIES_STATIC: CategoryStatic[] = [
  { id: 'desenvolvimento' },
  { id: 'design' },
  { id: 'marketing' }
];

/**
 * Contém apenas dados estáticos de projetos.
 * O conteúdo (title, description, client, etc.) virá do i18n.
 */
export const PROJECTS_STATIC: ProjectStatic[] = [
  {
    id: 'zatas-website',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/YSsDjFWp/z1.png',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'GSAP'],
    link: 'https://zatas.com.br',
    gallery: [
      'https://i.postimg.cc/YSsDjFWp/z1.png',
      'https://i.postimg.cc/1tVCFzGV/z2.png',
      'https://i.postimg.cc/Tw57bPVV/z3.png',
      'https://i.postimg.cc/jjF3Cf7R/z4.png',
      'https://i.postimg.cc/76JszL3C/z5.png',
    ],
    // A estrutura de autores já parece estar correta e desacoplada.
    authors: [
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      },
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b',
        instagram: 'https://www.instagram.com/bruno_s4nt',
      },
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      },
      {
        name: 'Gabriel Cardoso',
        avatar: 'https://i.postimg.cc/1XYgw9sY/brya.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/gabriel-cardoso-torres-b76a59328',
        instagram: 'https://www.instagram.com/gabrielcardos095',
      }
    ]
  },
  {
    id: 'personal-app',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/4xnzySbz/d1.png',
    technologies: ['React Native', 'Expo', 'Java', 'Spring Boot', 'MySQL'],
    link: null,
    gallery: [
      'https://i.postimg.cc/4xnzySbz/d1.png',
      'https://i.postimg.cc/y8WFxbXm/d2.png',
      'https://i.postimg.cc/jSCz2FQQ/d3.png',
      'https://i.postimg.cc/13TDqrJ8/d4.png',
      'https://i.postimg.cc/nhMvrPY9/dm1.jpg',
      'https://i.postimg.cc/8zshc0B6/dm2.jpg',
      'https://i.postimg.cc/RZqchDQn/dm3.jpg',
      'https://i.postimg.cc/7ZbghWMz/dm4.jpg',
    ],
    authors: [
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b',
        instagram: 'https://www.instagram.com/bruno_s4nt',
      },
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      },
      {
        name: 'Gabriel Cardoso',
        avatar: 'https://i.postimg.cc/1XYgw9sY/brya.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/gabriel-cardoso-torres-b76a59328',
        instagram: 'https://www.instagram.com/gabrielcardos095',
      }
    ]
  },
  {
    id: 'gerenciador-de-alunos',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/P57PRFkR/g1.jpg',
    technologies: ['Java', 'Gradlew', 'SQLite', 'JUnit', "Swing", "Flatlaf"],
    link: null,
    gallery: [
      'https://i.postimg.cc/P57PRFkR/g1.jpg',
      'https://i.postimg.cc/7ZRfWQyQ/g2.jpg',
      'https://i.postimg.cc/fRPJrgh2/g3.jpg',
      'https://i.postimg.cc/sgLvN0R8/g4.jpg'
    ],
    authors: [
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b'
      },
      {
        name: 'Jose',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      }
    ]
  },
  {
    id: 'trainingSec',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/Qd73j67s/n1.jpg',
    technologies: ['Java', 'Gradlew', 'Spring', 'JUnit', "PostgreSQL", "H2 Database", "NextJS", "TypeScript", "Tailwind", "Radix"],
    link: null,
    gallery: [
      'https://i.postimg.cc/Qd73j67s/n1.jpg',
      'https://i.postimg.cc/htmBKCmS/n2.jpg',
      'https://i.postimg.cc/9Q9hcx9z/n3.jpg',
      'https://i.postimg.cc/DwGT7CGh/n4.jpg',
      'https://i.postimg.cc/vZnsGPnw/n5.jpg',
      'https://i.postimg.cc/52zVfPzM/n6.jpg'
    ],
    authors: [
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b'
      },
      {
        name: 'Luigi',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      }
    ]
  },
  {
    id: 'EPI-stock',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/gkF9NVQp/s1.jpg',
    technologies: ['TypeScript', 'JavaScript', 'Node', 'MySQL', "Vite", "React", "Tailwind"],
    link: null,
    gallery: [
      'https://i.postimg.cc/gkF9NVQp/s1.jpg',
      'https://i.postimg.cc/YqKcb6Zw/s2.jpg',
      'https://i.postimg.cc/WbLRXGCL/s3.jpg',
      'https://i.postimg.cc/kXx0ZV3h/s4.jpg',
    ],
    authors: [
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b'
      }
    ]
  },
  {
    id: 'cash-flow',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/bYLbRgd6/c1.png',
    technologies: ['Java', 'H2DB', 'Spring', 'JUnit', "Thymeleaf", "expo GO", "React Native", "JavaScript"],
    link: null,
    gallery: [
      'https://i.postimg.cc/bYLbRgd6/c1.png',
      'https://i.postimg.cc/yxfZY1wh/c2.png',
      'https://i.postimg.cc/pr0FXWgf/c3.png',
      'https://i.postimg.cc/Kj9MvGdr/c4.png',
    ],
    authors: [
      {
        name: 'Bruno Santiago',
        avatar: 'https://i.postimg.cc/HnPJXpdv/runo.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b'
      },
      {
        name: 'Jose',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
      {
        name: 'Willson',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
      {
        name: 'Gustavo',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
      {
        name: 'Camila',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
      {
        name: 'Roberto',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
    ]
  },

  {
    id: 'carlos-advogado',
    category: 'design',
    image: 'https://i.postimg.cc/bJtwPnDd/Capa-Carlos-1.png',
    technologies: ['Canva', 'Freepik'],
    link: null,
    gallery: [
      'https://i.postimg.cc/nrVVDPSq/Carlos-Advogadosc2.png',
      'https://i.postimg.cc/j28xQ4By/Carlos-Advogados11.png',
      'https://i.postimg.cc/PJ6XzQ0w/23.png',
      'https://i.postimg.cc/HxykmMcC/9.png',
      'https://i.postimg.cc/fL9RsdtT/4.png',
      'https://i.postimg.cc/W3k1VZF2/5.png',
      'https://i.postimg.cc/Pxw5HDLB/18.png',
      'https://i.postimg.cc/HLKkFzxY/19.png',
      'https://i.postimg.cc/s28gbmXy/12.png',
    ],
    authors: [
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  }, {
    id: 'souzaevilela',
    category: 'design',
    image: 'https://i.postimg.cc/fLXbxdvJ/E-ESSE-AQUI-OO.png',
    technologies: ['Canva', 'Freepik'],
    link: null,
    gallery: [
      'https://i.postimg.cc/vmrjfHV8/Bancario-Souza-e-Vilela5ed-1.png',
      'https://i.postimg.cc/Y2sX4msQ/Bancario-Souza-e-Vilela3.png',
      'https://i.postimg.cc/SR2fLDvW/Bancario-Souza-e-Vilela2-1.png',
      'https://i.postimg.cc/WbmX5f4w/Bancario-Souza-e-Vilelae-1.png',
      'https://i.postimg.cc/FHR30PkZ/Bancario-Souza-e-Vilela12.png',
      'https://i.postimg.cc/T37ScHkQ/Bancario-Souza-e-Vilela9.png',
      'https://i.postimg.cc/4NXSRTqW/Bancario-Souza-e-Vilela7-1.png',
      'https://i.postimg.cc/h4s0xQZ6/Bancario-Souza-e-Vilela6-1.png',
    ],
    authors: [
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  }, {
    id: 'luiz-gustavo',
    category: 'design',
    image: 'https://i.postimg.cc/Qt8gXyH5/Apresentacoes-Portifolio1-1.png',
    technologies: ['Canva', 'Freepik'],
    link: null,
    gallery: [
      'https://i.postimg.cc/7ZXYFtr4/75-1.png',
      'https://i.postimg.cc/kgwX0YPm/82-1.png',
      'https://i.postimg.cc/kgwX0YP6/Maio-Luiz-Gustavo.png',
      'https://i.postimg.cc/L8v6cQFK/Maio-Luiz-Gustavo-1-1.png',
      'https://i.postimg.cc/pLkXwcMy/Maio-Luiz-Gustavo-2.png',
      'https://i.postimg.cc/13M5k71Z/Maio-Luiz-Gustavo-234-1.png',
    ],
    authors: [
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  },
  {
    id: 'montela-brand',
    category: 'design',
    image: 'https://i.postimg.cc/2yMbwTfD/montela-capa.jpg',
    technologies: ['Photoshop', 'Illustrator'],
    link: null,
    gallery: [
      'https://i.postimg.cc/L5wYTvM9/montela01.jpg',
      'https://i.postimg.cc/NGzHBGrq/montela02.jpg',
      'https://i.postimg.cc/pV6FRVnH/montela03.jpg',
      'https://i.postimg.cc/T24Df25F/montela04.jpg',
    ],
    authors: [
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Head of Growth & Product',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      }
    ]
  },
  {
    id: 'lyria',
    category: 'desenvolvimento',
    image: 'https://i.postimg.cc/HnJSQkbQ/l1.png',
    technologies: ['React', 'Python', "PostgreSQL", "Vite"],
    link: null,
    gallery: [
      'https://i.postimg.cc/HnJSQkbQ/l1.png',
      'https://i.postimg.cc/sxBnpg5m/l2.png',
      'https://i.postimg.cc/QCRfSZqp/l3.png',
    ],
    authors: [
      {
        name: 'Raissa',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...',
      },
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Head of Growth & Product',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      },
      {
        name: 'Gabriel Cardoso',
        avatar: 'https://i.postimg.cc/1XYgw9sY/brya.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/gabriel-cardoso-torres-b76a59328',
        instagram: 'https://www.instagram.com/gabrielcardos095',
      },
      {
        name: 'Juliana',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...',
      },
      {
        name: 'João Gabriel',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...',
      },
      {
        name: 'Vitoria',
        avatar: '/images/team/bruno.jpg',
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...',
      }
    ]
  },
  {
    id: 'zatas',
    category: 'design',
    image: 'https://i.postimg.cc/fy9gWzZq/zatas-capa.jpg',
    technologies: ['Photoshop', 'Illustrator'],
    link: null,
    gallery: [
      'https://i.postimg.cc/5yCk941D/zatas01.jpg',
      'https://i.postimg.cc/hvd34Dgk/zatas02.jpg',
      'https://i.postimg.cc/FzLnFrmq/zatas03.jpg',
    ],
    authors: [
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Head of Growth & Product',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      }
    ]
  },
  {
    id: 'aureni-brito',
    category: 'design',
    image: 'https://i.postimg.cc/52bYmsHK/aureni-capa.jpg',
    technologies: ['Photoshop', 'Illustrator'],
    link: null,
    gallery: [
      'https://i.postimg.cc/FHpfC03X/aureni01.jpg',
      'https://i.postimg.cc/HkzJvb5f/aureni02.jpg',
      'https://i.postimg.cc/Cx7ZrbDt/aureni03.jpg'
    ],
       authors: [
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Head of Growth & Product',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
        email: 'brito@zatas.com.br'
      },
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
        email: 'bryan@zatas.com.br'
      }
    ]
  },
  {
    id: 'jersey-hub',
    category: 'marketing',
    image: 'https://i.postimg.cc/bJHGMbkX/jh-capa.png',
    technologies: ['Social Media', 'Content Strategy', 'Organic Growth', 'Analytics', 'Engagement'],
    link: 'https://x.com/jerseyhubBR',
    gallery: [
      'https://i.postimg.cc/vBL1j9fF/jh-05.jpg',
      'https://i.postimg.cc/L6mkH48W/jh-04.jpg',
      'https://i.postimg.cc/7YX3bv5t/jh-02.jpg',
      'https://i.postimg.cc/5Nf5x92Z/jh-03.png',
      'https://i.postimg.cc/YqtNp2Cn/jh-07.png',
      'https://i.postimg.cc/tCD370sS/jh01.jpg'
    ],
    authors: [
      {
        name: 'Antony Brito',
        avatar: 'https://i.postimg.cc/C1DKj84K/perfil-antony.jpg',
        role: 'Head of Growth & Product',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
        email: 'brito@zatas.com.br'
      },
      {
        name: 'Thiago Bryan',
        avatar: 'https://i.postimg.cc/fyg3mwD2/gabel.jpg',
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
        email: 'bryan@zatas.com.br'
      }
    ]
  },
  // ... outros projetos
];