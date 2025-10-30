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
    image: '/images/projects/personal-app/hero.jpg',
    technologies: ['Java', 'Gradlew', 'SQLite', 'JUnit', "Swing", "Flatlaf"],
    link: null,
    gallery:  [],
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
    image: '/images/projects/personal-app/hero.jpg',
    technologies: ['Java', 'Gradlew', 'Spring', 'JUnit', "PostgreSQL", "H2 Database", "NextJS", "TypeScript", "Tailwind", "Radix"],
    link: null,
    gallery:  [],
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
    image: '/images/projects/personal-app/hero.jpg',
    technologies: ['TypeScript', 'JavaScript', 'Node', 'MySQL', "Vite", "React", "Tailwind"],
    link: null,
    gallery:  [],
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
    image: '/images/projects/personal-app/hero.jpg',
    technologies: ['Java', 'H2DB', 'Spring', 'JUnit', "Thymeleaf", "expo GO", "React Native", "JavaScript"],
    link: null,
    gallery:  [],
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