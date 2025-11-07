import { CategoryStatic, ProjectStatic } from "@/types";

export const CATEGORIES_STATIC: CategoryStatic[] = [
  { id: "desenvolvimento" },
  { id: "design" },
  { id: "marketing" },
];

export const PROJECTS_STATIC: ProjectStatic[] = [
  {
    id: "zatas-website",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/YSsDjFWp/z1.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Motion"],
    link: "https://zatas.com.br",
    gallery: [
      "https://i.postimg.cc/YSsDjFWp/z1.png",
      "https://i.postimg.cc/1tVCFzGV/z2.png",
      "https://i.postimg.cc/Tw57bPVV/z3.png",
      "https://i.postimg.cc/jjF3Cf7R/z4.png",
      "https://i.postimg.cc/76JszL3C/z5.png",
    ],
    authorIds: ["thiago-bryan", "bruno-santiago", "antony-brito", "gabriel-cardoso"]
  },
  {
    id: "personal-app",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/pXJSxQgk/capa-deusmar.png",
    technologies: ["React Native", "Expo", "Java", "Spring Boot", "MySQL"],
    link: null,
    gallery: [
      "https://i.postimg.cc/4xnzySbz/d1.png",
      "https://i.postimg.cc/y8WFxbXm/d2.png",
      "https://i.postimg.cc/jSCz2FQQ/d3.png",
      "https://i.postimg.cc/13TDqrJ8/d4.png",
      "https://i.postimg.cc/htNpHxTt/10.png",
      "https://i.postimg.cc/t482LPWC/7.png",
      "https://i.postimg.cc/RZ2XjfKF/8.png",
      "https://i.postimg.cc/bw43KbkY/9.png",
    ],
    authorIds: ["bruno-santiago", "antony-brito", "gabriel-cardoso"]
  },
  {
    id: "gerenciador-de-alunos",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/P57PRFkR/g1.jpg",
    technologies: ["Java", "Gradlew", "SQLite", "JUnit", "Swing", "Flatlaf"],
    link: null,
    gallery: [
      "https://i.postimg.cc/P57PRFkR/g1.jpg",
      "https://i.postimg.cc/7ZRfWQyQ/g2.jpg",
      "https://i.postimg.cc/fRPJrgh2/g3.jpg",
      "https://i.postimg.cc/sgLvN0R8/g4.jpg",
    ],
    authorIds: ["bruno-santiago", "jose"]
  },
  {
    id: "trainingSec",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/Qd73j67s/n1.jpg",
    technologies: [
      "Java", "Gradlew", "Spring", "JUnit", "PostgreSQL", "H2 Database",
      "NextJS", "TypeScript", "Tailwind", "Radix"
    ],
    link: null,
    gallery: [
      "https://i.postimg.cc/Qd73j67s/n1.jpg",
      "https://i.postimg.cc/htmBKCmS/n2.jpg",
      "https://i.postimg.cc/9Q9hcx9z/n3.jpg",
      "https://i.postimg.cc/DwGT7CGh/n4.jpg",
      "https://i.postimg.cc/vZnsGPnw/n5.jpg",
      "https://i.postimg.cc/52zVfPzM/n6.jpg",
    ],
    authorIds: ["bruno-santiago", "luigi"]
  },
  {
    id: "EPI-stock",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/gkF9NVQp/s1.jpg",
    technologies: [
      "TypeScript", "JavaScript", "Node", "MySQL", "Vite", "React", "Tailwind"
    ],
    link: null,
    gallery: [
      "https://i.postimg.cc/gkF9NVQp/s1.jpg",
      "https://i.postimg.cc/YqKcb6Zw/s2.jpg",
      "https://i.postimg.cc/WbLRXGCL/s3.jpg",
      "https://i.postimg.cc/kXx0ZV3h/s4.jpg",
    ],
    authorIds: ["bruno-santiago"]
  },
  {
    id: "cash-flow",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/bYLbRgd6/c1.png",
    technologies: [
      "Java", "H2DB", "Spring", "JUnit", "Thymeleaf",
      "expo GO", "React Native", "JavaScript"
    ],
    link: null,
    gallery: [
      "https://i.postimg.cc/bYLbRgd6/c1.png",
      "https://i.postimg.cc/yxfZY1wh/c2.png",
      "https://i.postimg.cc/pr0FXWgf/c3.png",
      "https://i.postimg.cc/Kj9MvGdr/c4.png",
    ],
    authorIds: ["bruno-santiago", "jose", "willson", "gustavo", "camila", "roberto"]
  },
  {
    id: "carlos-advogado",
    category: "design",
    image: "https://i.postimg.cc/bJtwPnDd/Capa-Carlos-1.png",
    technologies: ["Canva", "Freepik"],
    link: null,
    gallery: [
      "https://i.postimg.cc/nrVVDPSq/Carlos-Advogadosc2.png",
      "https://i.postimg.cc/j28xQ4By/Carlos-Advogados11.png",
      "https://i.postimg.cc/PJ6XzQ0w/23.png",
      "https://i.postimg.cc/HxykmMcC/9.png",
      "https://i.postimg.cc/fL9RsdtT/4.png",
      "https://i.postimg.cc/W3k1VZF2/5.png",
      "https://i.postimg.cc/Pxw5HDLB/18.png",
      "https://i.postimg.cc/HLKkFzxY/19.png",
      "https://i.postimg.cc/s28gbmXy/12.png",
    ],
    authorIds: ["thiago-bryan"]
  },
  {
    id: "souzaevilela",
    category: "design",
    image: "https://i.postimg.cc/fLXbxdvJ/E-ESSE-AQUI-OO.png",
    technologies: ["Canva", "Freepik"],
    link: null,
    gallery: [
      "https://i.postimg.cc/vmrjfHV8/Bancario-Souza-e-Vilela5ed-1.png",
      "https://i.postimg.cc/Y2sX4msQ/Bancario-Souza-e-Vilela3.png",
      "https://i.postimg.cc/SR2fLDvW/Bancario-Souza-e-Vilela2-1.png",
      "https://i.postimg.cc/WbmX5f4w/Bancario-Souza-e-Vilelae-1.png",
      "https://i.postimg.cc/FHR30PkZ/Bancario-Souza-e-Vilela12.png",
      "https://i.postimg.cc/T37ScHkQ/Bancario-Souza-e-Vilela9.png",
      "https://i.postimg.cc/4NXSRTqW/Bancario-Souza-e-Vilela7-1.png",
      "https://i.postimg.cc/h4s0xQZ6/Bancario-Souza-e-Vilela6-1.png",
    ],
    authorIds: ["thiago-bryan"]
  },
  {
    id: "luiz-gustavo",
    category: "design",
    image: "https://i.postimg.cc/Qt8gXyH5/Apresentacoes-Portifolio1-1.png",
    technologies: ["Canva", "Freepik"],
    link: null,
    gallery: [
      "https://i.postimg.cc/7ZXYFtr4/75-1.png",
      "https://i.postimg.cc/kgwX0YPm/82-1.png",
      "https://i.postimg.cc/kgwX0YP6/Maio-Luiz-Gustavo.png",
      "https://i.postimg.cc/L8v6cQFK/Maio-Luiz-Gustavo-1-1.png",
      "https://i.postimg.cc/pLkXwcMy/Maio-Luiz-Gustavo-2.png",
      "https://i.postimg.cc/13M5k71Z/Maio-Luiz-Gustavo-234-1.png",
    ],
    authorIds: ["thiago-bryan"]
  },
  {
    id: "montela-brand",
    category: "design",
    image: "https://i.postimg.cc/2yMbwTfD/montela-capa.jpg",
    technologies: ["Photoshop", "Illustrator"],
    link: null,
    gallery: [
      "https://i.postimg.cc/L5wYTvM9/montela01.jpg",
      "https://i.postimg.cc/NGzHBGrq/montela02.jpg",
      "https://i.postimg.cc/pV6FRVnH/montela03.jpg",
      "https://i.postimg.cc/T24Df25F/montela04.jpg",
    ],
    authorIds: ["antony-brito"]
  },
  {
    id: "lyria",
    category: "desenvolvimento",
    image: "https://i.postimg.cc/HnJSQkbQ/l1.png",
    technologies: ["React", "Python", "PostgreSQL", "Vite"],
    link: null,
    gallery: [
      "https://i.postimg.cc/HnJSQkbQ/l1.png",
      "https://i.postimg.cc/sxBnpg5m/l2.png",
      "https://i.postimg.cc/QCRfSZqp/l3.png",
    ],
    authorIds: ["raissa", "antony-brito", "gabriel-cardoso", "juliana", "joao-gabriel", "vitoria"]
  },
  {
    id: "zatas",
    category: "design",
    image: "https://i.postimg.cc/fy9gWzZq/zatas-capa.jpg",
    technologies: ["Photoshop", "Illustrator"],
    link: null,
    gallery: [
      "https://i.postimg.cc/5yCk941D/zatas01.jpg",
      "https://i.postimg.cc/hvd34Dgk/zatas02.jpg",
      "https://i.postimg.cc/FzLnFrmq/zatas03.jpg",
    ],
    authorIds: ["antony-brito"]
  },
  {
    id: "aureni-brito",
    category: "design",
    image: "https://i.postimg.cc/52bYmsHK/aureni-capa.jpg",
    technologies: ["Photoshop", "Illustrator"],
    link: null,
    gallery: [
      "https://i.postimg.cc/FHpfC03X/aureni01.jpg",
      "https://i.postimg.cc/HkzJvb5f/aureni02.jpg",
      "https://i.postimg.cc/Cx7ZrbDt/aureni03.jpg",
    ],
    authorIds: ["antony-brito", "thiago-bryan"]
  },
  {
    id: "jersey-hub",
    category: "marketing",
    image: "https://i.postimg.cc/bJHGMbkX/jh-capa.png",
    technologies: [
      "Social Media", "Content Strategy", "Organic Growth",
      "Analytics", "Engagement"
    ],
    link: "https://x.com/jerseyhubBR",
    gallery: [
      "https://i.postimg.cc/vBL1j9fF/jh-05.jpg",
      "https://i.postimg.cc/L6mkH48W/jh-04.jpg",
      "https://i.postimg.cc/7YX3bv5t/jh-02.jpg",
      "https://i.postimg.cc/5Nf5x92Z/jh-03.png",
      "https://i.postimg.cc/YqtNp2Cn/jh-07.png",
      "https://i.postimg.cc/tCD370sS/jh01.jpg",
    ],
    authorIds: ["antony-brito", "thiago-bryan"]
  },
  {
    id: "vulcan-films",
    category: "marketing",
    image: "https://i.postimg.cc/QxC6GLJp/vulcan.png",
    technologies: [
      "Social Media", "Content Strategy", "Organic Growth",
      "Analytics", "Engagement"
    ],
    link: "https://www.instagram.com/vulcan.filmes?igsh=dGlhbDRobGE3YmJm",
    gallery: [
      "https://i.postimg.cc/NFgzr5Xz/i1.jpg",
      "https://i.postimg.cc/wM6Gs7N0/i2.jpg",
      "https://i.postimg.cc/Gtc5sHDg/i3.jpg",
      "https://i.postimg.cc/VsGt5wvQ/v.png"
    ],
    authorIds: ["thiago-bryan"]
  },
];