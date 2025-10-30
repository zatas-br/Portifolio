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
        name: 'Bruno', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
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
        linkedin: '...'
      },
      { 
        name: 'Antony Brito', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
      },
      { 
        name: 'Gabriel Cardoso', 
        avatar: '/images/team/bruno.jpg', 
        role: 'Desenvolvedor Full-Stack',
        linkedin: '...'
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
        linkedin: '...'
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
        linkedin: '...'
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
        linkedin: '...'
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
        linkedin: '...'
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
  // ... outros projetos
];