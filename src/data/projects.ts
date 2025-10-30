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
    image: '/images/projects/zatas-website/hero.jpg',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'GSAP'],
    link: 'https://zatas.com.br',
    gallery: [
      '/images/projects/zatas-website/gallery-1.jpg',
      '/images/projects/zatas-website/gallery-2.jpg'
    ],
    // A estrutura de autores já parece estar correta e desacoplada.
    authors: [ 
      { 
        name: 'Thiago Bryan', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      },
      { 
        name: 'Bruno Santiago', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b',
        instagram: 'https://www.instagram.com/bruno_s4nt',
      },
      { 
        name: 'Antony Brito', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      },
      { 
        name: 'Gabriel Cardoso', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/gabriel-cardoso-torres-b76a59328',
        instagram: 'https://www.instagram.com/gabrielcardos095',
      }
    ]
  },
  {
    id: 'personal-app',
    category: 'desenvolvimento',
    image: '/images/projects/personal-app/hero.jpg',
    technologies: ['React Native', 'Expo', 'Java', 'Spring Boot', 'MySQL'],
    link: null,
    gallery: [],
    authors: [
       { 
        name: 'Bruno Santiago', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/bruno-santiago-b8169637b',
        instagram: 'https://www.instagram.com/bruno_s4nt',
      },
      { 
        name: 'Antony Brito', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: 'https://www.linkedin.com/in/britoantony',
        instagram: 'https://www.instagram.com/antonybriito',
      },
      { 
        name: 'Gabriel Cardoso', 
        avatar: '/images/team/bruno.jpg', 
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
    gallery:  [
      'https://i.postimg.cc/P57PRFkR/g1.jpg',
      'https://i.postimg.cc/7ZRfWQyQ/g2.jpg',
      'https://i.postimg.cc/fRPJrgh2/g3.jpg',
      'https://i.postimg.cc/sgLvN0R8/g4.jpg'
    ],
    authors: [
      { 
        name: 'Bruno', 
        avatar: '/images/team/bruno.jpg', 
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
    gallery:  [
      'https://i.postimg.cc/Qd73j67s/n1.jpg',
      'https://i.postimg.cc/htmBKCmS/n2.jpg',
      'https://i.postimg.cc/9Q9hcx9z/n3.jpg',
      'https://i.postimg.cc/DwGT7CGh/n4.jpg',
      'https://i.postimg.cc/vZnsGPnw/n5.jpg',
      'https://i.postimg.cc/52zVfPzM/n6.jpg'
    ],
    authors: [
      { 
        name: 'Bruno', 
        avatar: '/images/team/bruno.jpg', 
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
    gallery:  [
      'https://i.postimg.cc/gkF9NVQp/s1.jpg',
      'https://i.postimg.cc/YqKcb6Zw/s2.jpg',
      'https://i.postimg.cc/WbLRXGCL/s3.jpg', 
      'https://i.postimg.cc/kXx0ZV3h/s4.jpg',
    ],
    authors: [
      { 
        name: 'Bruno', 
        avatar: '/images/team/bruno.jpg', 
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
    gallery:  [
      'https://i.postimg.cc/bYLbRgd6/c1.png',
      'https://i.postimg.cc/yxfZY1wh/c2.png',
      'https://i.postimg.cc/pr0FXWgf/c3.png', 
      'https://i.postimg.cc/Kj9MvGdr/c4.png',
    ],
    authors: [
      { 
        name: 'Bruno', 
        avatar: '/images/team/bruno.jpg', 
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
        avatar: '/images/team/bruno.jpg', 
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  },{
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
        avatar: '/images/team/bruno.jpg', 
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  },{
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
        avatar: '/images/team/bruno.jpg', 
        role: 'Head of marketing and design',
        linkedin: 'https://www.linkedin.com/in/thbryann',
        instagram: 'https://www.instagram.com/thbryann',
      }
    ]
  },
  // ... outros projetos
];