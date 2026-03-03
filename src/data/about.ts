/**
 * Configurações de conteúdo para a página "Sobre" (About Page).
 * Aqui você pode alterar textos, links e caminhos de imagens.
 */
export const ABOUT_PAGE_DATA = { 
  // URL do vídeo (se houver). Se for null, exibirá um placeholder.
  videoUrl: null, 
  // Texto que aparece ao lado do botão de play no placeholder do vídeo.
  videoLabel: 'Precisa de uma ideia?', 
  // Rótulo do botão de contato no card principal.
  contactButtonLabel: 'Entrar em contato', 
  // Link para onde o botão de contato redireciona.
  contactHref: '/contact', 
  
  // Título da seção "Time Estratégico".
  strategicTeamTitle: 
    'O TIME ESTRATÉGICO PARA MARCAS QUE QUEREM CRESCER COM CLAREZA E DIREÇÃO.', 
  // Primeiro parágrafo da descrição do time estratégico.
  strategicTeamDescription1: 
    'Na Zatas, unimos design, desenvolvimento e marketing para transformar ideias em presença digital sólida. Trabalhamos com empresas que entendem que posicionamento não é detalhe — é estratégia.', 
  // Segundo parágrafo da descrição do time estratégico.
  strategicTeamDescription2: 
    'Seja construindo uma identidade do zero, desenvolvendo um site de alta performance ou estruturando campanhas digitais, nosso foco é simples: criar soluções inteligentes, bem executadas e orientadas a resultado.', 
  
  // Título da seção de compromisso.
  commitmentTitle: 'NOSSO COMPROMISSO', 
  // Lista de itens de compromisso (exibidos como parágrafos).
  commitmentItems: [ 
    'Clareza no processo.', 
    'Precisão na execução.', 
    'Consistência no crescimento.', 
  ], 
  // Texto de rodapé da seção de compromisso.
  commitmentFooter: 
    'Não acreditamos em promessas exageradas. Acreditamos em estratégia, método e evolução contínua.', 
  
  // Título da seção de serviços em destaque.
  servicesTitle: 'SERVIÇOS EM DESTAQUE', 
  // Lista de serviços. Cada serviço possui descrição, tags, imagem e alt text.
  services: [ 
    { 
      description: 
        'Website institucional estratégico. Desenvolvimento completo com foco em performance, identidade visual forte e estrutura pensada para conversão.', 
      tags: ['Responsive', 'UI Design', 'UX Strategy'], 
      image: '/images/about/site-zatas.png', 
      imageAlt: 'Criação de Website', 
    }, 
    { 
      description: 
        'Solução completa desenvolvida sobre medida para sua necessidade, composta por aplicativo mobile e integração robusta.', 
      tags: ['Android', 'IOS'], 
      image: '/images/about/app-zatas.png', 
      imageAlt: 'Aplicativo Mobile', 
    }, 
    { 
      description: 
        'Rebranding e posicionamento digital. Criação de identidade moderna e consistente, alinhando comunicação, presença online e estratégia de marca.', 
      tags: ['Visual Identity', 'Logo Design', 'Brand Strategy'], 
      image: '/images/about/bykatino.png', 
      imageAlt: 'Identidade Visual', 
    }, 
    { 
      description: 
        'Design de impressos estratégicos. Desenvolvimento de materiais gráficos como cartões de visita, papelaria e peças institucionais com identidade visual forte, acabamento profissional e comunicação pensada para gerar credibilidade e impacto.', 
      tags: ['Graphic Assets', 'Print'], 
      image: '/images/about/zatas-cartao.png', 
      imageAlt: 'Design de Impressos', 
    }, 
    { 
      description: 
        'Campanhas estratégicas focadas em posicionamento, geração de leads e aumento de vendas. Planejamento completo com criativos, segmentação e análise de performance para maximizar resultados.', 
      tags: ['Perfomance', 'Conversão'], 
      image: '/images/about/potencialize-sua-marca.png', 
      imageAlt: 'Campanhas de Marketing', 
    }, 
    { 
      description: 
        'Gestão estratégica de redes sociais com foco em crescimento, autoridade e engajamento. Planejamento de conteúdo, identidade visual consistente e comunicação alinhada à marca.', 
      tags: ['Engajamento', 'Branding', 'Conteúdo'], 
      image: '/images/about/zatas-marketing.png', 
      imageAlt: 'Redes Sociais', 
    }, 
  ], 
  // Rótulo do botão para ver mais serviços.
  othersButtonLabel: 'Outros trabalhos', 
  // Link para a página de serviços.
  othersButtonHref: '/services', 
  
  // Título da seção "Nossa História".
  historyTitle: 'NOSSA HISTÓRIA', 
  // Parágrafos que compõem o texto da história.
  historyParagraphs: [ 
    'A Zatas nasceu da união de profissionais com habilidades complementares e uma visão em comum: desenvolver soluções digitais inteligentes e estratégicas.', 
    'Ao longo dos primeiros projetos, crescemos juntos, fortalecemos nossa experiência e decidimos elevar nosso nível de atuação, estruturando a empresa de forma profissional e focada em resultados.', 
    'Hoje, a Zatas transforma desafios em soluções completas, unindo tecnologia, design e estratégia.', 
  ], 
  // Rótulo do botão da seção história.
  historyButtonLabel: 'Conhecer equipe', 
  // Link para a página da equipe.
  historyButtonHref: '/team', 
  // Imagem lateral da seção história.
  historyImage: '/images/about/nossa-historia.png', 
  // Texto alternativo da imagem da história.
  historyImageAlt: 'Nossa História - Zatas', 
};