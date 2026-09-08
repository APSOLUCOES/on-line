import { ServiceItem, ProcessStep, AdvantageItem, FAQItem, SEODossier } from '../types';

export const WHATSAPP_PHONE = '5591986177569';
export const WHATSAPP_BASE_URL = 'https://wa.me/5591986177569';
export const WHATSAPP_DISPLAY_PHONE = '+55 (91) 98617-7569';

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Audiovisual & Mídia
  {
    id: 'edicao-de-videos',
    title: 'Edição de Vídeos',
    category: 'audiovisual',
    categoryName: 'Audiovisual & Mídia',
    shortDesc: 'Cortes dinâmicos, color grading e sound design cinematográfico que retêm a atenção e elevam o padrão de autoridade da sua marca.',
    longDesc: 'Transformamos materiais brutos em peças audiovisuais magnéticas para o YouTube, cursos e lançamentos. Aplicamos cortes de ritmo preciso, legendagem estilizada, sonorização imersiva e correção cromática profissional.',
    deliverables: [
      'Tratamento de cor (Color Grading profissional)',
      'Sound design e mixagem acústica de voz e trilha',
      'Inserção de motion graphics, legendas e b-rolls estratégicos',
      'Exportação em 4K/Full HD otimizada para cada plataforma'
    ],
    toolsAndMethods: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design'],
    targetAudience: 'Infoprodutores, criadores de conteúdo e empresas que demandam autoridade em vídeo.',
    customWhatsAppMessage: 'Olá! Gostaria de um orçamento para Edição de Vídeos com a AP Soluções.',
    iconName: 'Film',
    tag: 'Mais Solicitado'
  },
  {
    id: 'gestao-de-conteudo-de-video',
    title: 'Gestão de Conteúdo de Vídeo',
    category: 'audiovisual',
    categoryName: 'Audiovisual & Mídia',
    shortDesc: 'Calendário editorial estratégico, curadoria de temas e pós-produção integrada para manter sua presença consistente sem demandar seu tempo.',
    longDesc: 'Operação de ponta a ponta: desde a ideação baseada em dados de busca até a entrega final organizada. Você apenas grava o conteúdo e nossa equipe assume o planejamento, edição e distribuição.',
    deliverables: [
      'Calendário de postagens com pautas de alta relevância',
      'Estruturação de ganchos (hooks) e roteirização prévia',
      'Gestão do pipeline de aprovação e arquivos na nuvem',
      'Consistência visual e editorial contínua'
    ],
    toolsAndMethods: ['Notion Workspace', 'Google Drive Enterprise', 'Data Trends', 'Pipeline Ágil'],
    targetAudience: 'Executivos, especialistas e negócios que precisam de consistência sem sobrecarga.',
    customWhatsAppMessage: 'Olá! Gostaria de entender como funciona a Gestão de Conteúdo de Vídeo da AP Soluções.',
    iconName: 'Clapperboard',
    tag: 'Operação Completa'
  },
  {
    id: 'videos-curtos-dinamicos',
    title: 'Vídeos Curtos Dinâmicos (Reels/TikTok/Kwai)',
    category: 'audiovisual',
    categoryName: 'Audiovisual & Mídia',
    shortDesc: 'Ritmo acelerado, legendas magnéticas e ganchos nos primeiros 3 segundos projetados para maximizar alcance e retenção algorítmica.',
    longDesc: 'Engenharia de retenção aplicada a vídeos verticais. Extraímos os melhores cortes de podcasts, aulas ou gravações originais e os transformamos em pílulas virais de autoridade com alto índice de compartilhamento.',
    deliverables: [
      'Ganchos visuais e textuais (primeiros 3 segundos)',
      'Legendas dinâmicas sincronizadas palavra por palavra',
      'Efeitos sonoros pontuais e trilhas em alta',
      'Formatos adaptados nativamente para Reels, TikTok, Kwai e Shorts'
    ],
    toolsAndMethods: ['CapCut Pro', 'Premiere Pro', 'Motion Typography', 'Hooks Framework'],
    targetAudience: 'Marcas e criadores que desejam tráfego orgânico exponencial e engajamento veloz.',
    customWhatsAppMessage: 'Olá! Quero estruturar uma linha de produção de Vídeos Curtos (Reels/TikTok) com a AP Soluções.',
    iconName: 'Smartphone',
    tag: 'Escala Rápida'
  },
  {
    id: 'otimizacao-seo-youtube',
    title: 'Otimização (SEO) para YouTube',
    category: 'audiovisual',
    categoryName: 'Audiovisual & Mídia',
    shortDesc: 'Títulos com intenção de busca, tags estratégicas, thumbnails clicáveis e roteirização para ranquear seus vídeos nas primeiras posições.',
    longDesc: 'O YouTube é o segundo maior buscador do mundo. Posicionamos seus vídeos para responder às buscas exatas do seu público-alvo, gerando visualizações qualificadas e novos clientes continuamente por anos.',
    deliverables: [
      'Pesquisa aprofundada de palavras-chave e intenção de busca',
      'Elaboração de títulos magnéticos e de alto CTR',
      'Descrições semânticas ricas com timestamps e links de conversão',
      'Tags estruturadas e estratégia de thumbnails de alto contraste'
    ],
    toolsAndMethods: ['VidIQ Enterprise', 'TubeBuddy', 'Google Trends', 'Search Intent Mapping'],
    targetAudience: 'Canais corporativos e especialistas que buscam views orgânicas duradouras.',
    customWhatsAppMessage: 'Olá! Preciso de Otimização de SEO e Thumbnails para meu canal no YouTube com a AP Soluções.',
    iconName: 'Youtube',
    tag: 'Tráfego Perene'
  },
  {
    id: 'producao-podcasts-audio',
    title: 'Produção de Podcasts em Áudio',
    category: 'audiovisual',
    categoryName: 'Audiovisual & Mídia',
    shortDesc: 'Tratamento acústico profissional, limpeza de ruídos e masterização balanceada para distribuição nas principais plataformas de streaming.',
    longDesc: 'Qualidade sonora impecável com padrão broadcast. Removemos chiados, respirações excessivas, eco e equalizamos todas as vozes para uma experiência auditiva prazerosa e cristalina no Spotify e Apple Podcasts.',
    deliverables: [
      'Redução cirúrgica de ruído de fundo, estalos e reverb',
      'Normalização de volume segundo os padrões LUFS das plataformas',
      'Inserção de vinhetas, trilhas de fundo e inserções comerciais',
      'Entrega de arquivos masterizados e cortes promocionais'
    ],
    toolsAndMethods: ['iZotope RX Suite', 'Adobe Audition', 'LUFS Metering', 'Podcast Mastering'],
    targetAudience: 'Podcasters, marcas corporativas e criadores com programas em áudio.',
    customWhatsAppMessage: 'Olá! Gostaria de um orçamento para Tratamento e Produção de Podcasts com a AP Soluções.',
    iconName: 'Mic',
    tag: 'Qualidade Estúdio'
  },

  // 2. Design & Vendas
  {
    id: 'identidade-visual-artes-redes-sociais',
    title: 'Identidade Visual & Artes para Redes Sociais',
    category: 'design',
    categoryName: 'Design & Vendas',
    shortDesc: 'Peças gráficas de alto impacto visual e congruência estética para posicionar sua empresa como líder incontestável de mercado.',
    longDesc: 'Design comercial estratégico focado em percepção de valor. Criamos sistemas visuais coesos, carrosséis educativos, criativos de anúncios para tráfego pago e layouts institucionais que inspiram credibilidade imediata.',
    deliverables: [
      'Manual de identidade e paleta cromática de alta conversão',
      'Templates editáveis e artes definitivas para feed e stories',
      'Carrosséis persuasivos estruturados em storytelling visual',
      'Criativos para campanhas de Meta Ads e Google Ads'
    ],
    toolsAndMethods: ['Figma Enterprise', 'Photoshop', 'Illustrator', 'Visual Hierarchy'],
    targetAudience: 'Empresas, consultores e e-commerces que exigem um visual corporativo de elite.',
    customWhatsAppMessage: 'Olá! Preciso renovar a Identidade Visual e Criativos de Redes Sociais com a AP Soluções.',
    iconName: 'Palette',
    tag: 'Alto Valor Percebido'
  },
  {
    id: 'estruturacao-estrategias-funis-de-vendas',
    title: 'Estruturação de Estratégias e Funis de Vendas',
    category: 'design',
    categoryName: 'Design & Vendas',
    shortDesc: 'Desenho e implementação de rotas de conversão previsíveis para transformar tráfego qualificado em clientes pagantes.',
    longDesc: 'Da primeira impressão ao fechamento no WhatsApp ou checkout. Mapeamos jornadas de compra completas, estruturamos automações de e-mail/mensagens e desenhamos landing pages com copywriting persuasivo orientado a ROI.',
    deliverables: [
      'Mapeamento arquitetural de jornada de compra e etapas de qualificação',
      'Roteirização de mensagens para SDR e atendimento no WhatsApp',
      'Estruturação de ofertas irresistíveis e esteira de produtos',
      'Diretrizes de métricas de conversão (CAC, LTV e taxa de fechamento)'
    ],
    toolsAndMethods: ['Funnel Mapping', 'Direct Response Copy', 'CRM Integrations', 'Conversion Rate Optimization'],
    targetAudience: 'Prestadores de serviços, agências e negócios que buscam vendas diárias previsíveis.',
    customWhatsAppMessage: 'Olá! Gostaria de conversar sobre Estruturação de Funis de Vendas com a equipe da AP Soluções.',
    iconName: 'GitMerge',
    tag: 'Foco em Faturamento'
  },

  // 3. Inteligência & Tecnologia
  {
    id: 'gestao-implementacao-ia',
    title: 'Gestão e Implementação de Ferramentas de IA',
    category: 'tech',
    categoryName: 'Inteligência & Tecnologia',
    shortDesc: 'Automação de processos repetitivos, agentes inteligentes e fluxos de produtividade com IA para reduzir custos operacionais.',
    longDesc: 'Modernize sua operação sem complexidade desnecessária. Integramos modelos de linguagem (LLMs), automações no Make/n8n, robôs de triagem no WhatsApp e fluxos geradores de relatórios que poupam dezenas de horas semanais.',
    deliverables: [
      'Auditoria de gargalos operacionais passíveis de automação',
      'Implementação de fluxos automatizados (Make, Zapier, n8n)',
      'Agentes e assistentes customizados com a base de conhecimento da sua empresa',
      'Treinamento prático da sua equipe para uso contínuo das ferramentas'
    ],
    toolsAndMethods: ['OpenAI / Gemini APIs', 'n8n & Make', 'WhatsApp Business API', 'Prompt Engineering'],
    targetAudience: 'Empresas que desejam escalar operações reduzindo tempo e folha de custos.',
    customWhatsAppMessage: 'Olá! Gostaria de entender as soluções de Automação e Inteligência Artificial da AP Soluções.',
    iconName: 'Cpu',
    tag: 'Inovação & Eficiência'
  },

  // 4. Soluções Estruturais & Carreira
  {
    id: 'servicos-contabilidade-digital',
    title: 'Serviços de Contabilidade Digital',
    category: 'estrutural',
    categoryName: 'Soluções Estruturais & Carreira',
    shortDesc: 'Gestão fiscal, abertura/regularização de CNPJ e conformidade tributária simplificada para blindar financeiramente seu negócio.',
    longDesc: 'Segurança fiscal e economia tributária sem dores de cabeça. Assessoramos prestadores de serviços, criadores e empresas na emissão correta de notas fiscais, enquadramento no Simples Nacional e cumprimento rigoroso das obrigações.',
    deliverables: [
      'Planejamento tributário para redução legal de impostos',
      'Abertura, alteração e regularização cadastral de CNPJ',
      'Emissão e controle de guias fiscais mensais (DAS, DARF)',
      'Assessoria e suporte fiscal direto via WhatsApp'
    ],
    toolsAndMethods: ['Contabilidade Ágil', 'Receita Federal', 'Emissores Fiscais', 'Compliance Tributário'],
    targetAudience: 'Empreendedores, PJ, freelancers e criadores de conteúdo que buscam paz com o fisco.',
    customWhatsAppMessage: 'Olá! Preciso de assessoria em Contabilidade Digital para o meu negócio com a AP Soluções.',
    iconName: 'Calculator',
    tag: 'Blindagem Fiscal'
  },
  {
    id: 'formatacao-consultoria-academica',
    title: 'Formatação e Consultoria Acadêmica',
    category: 'estrutural',
    categoryName: 'Soluções Estruturais & Carreira',
    shortDesc: 'Adequação rigorosa às normas ABNT/APA, revisão técnica e mentoria metodológica para artigos, monografias e teses.',
    longDesc: 'Rigor acadêmico absoluto para você ser aprovado com honras. Formatamos seu trabalho científico conforme as diretrizes da sua instituição ou periódicos internacionais, revisando citações, referências e estrutura lógica.',
    deliverables: [
      'Formatação completa segundo normas ABNT, APA, Vancouver ou Vancouver',
      'Revisão gramatical, ortográfica e coerência textual técnica',
      'Ajuste fino de sumários automáticos, figuras, tabelas e equações',
      'Relatório de conformidade metodológica e checagem anti-plágio'
    ],
    toolsAndMethods: ['Normas ABNT NBR 14724', 'Manual APA 7th', 'Mendeley & Zotero', 'Revisão Técnica'],
    targetAudience: 'Graduandos, mestrandos, doutorandos e pesquisadores que exigem perfeição técnica.',
    customWhatsAppMessage: 'Olá! Gostaria de um orçamento para Formatação e Consultoria Acadêmica com a AP Soluções.',
    iconName: 'GraduationCap',
    tag: 'Rigor Metodológico'
  },
  {
    id: 'elaboracao-curriculos-estrategicos',
    title: 'Elaboração de Currículos Estratégicos',
    category: 'estrutural',
    categoryName: 'Soluções Estruturais & Carreira',
    shortDesc: 'Posicionamento de carreira otimizado para softwares ATS e recrutadores executivos, destacando competências decisivas.',
    longDesc: 'Destaque-se na triagem inicial das melhores oportunidades. Redigimos seu currículo e perfil do LinkedIn com palavras-chave estratégicas do seu setor, estrutura escaneável e narrativa executiva voltada para resultados tangíveis.',
    deliverables: [
      'Estrutura 100% legível por robôs de recrutamento (ATS-friendly)',
      'Reescrita focada em conquistas quantitativas e métricas de impacto',
      'Otimização semântica do perfil campeão no LinkedIn',
      'Versões em PDF editável e guia rápido para entrevistas'
    ],
    toolsAndMethods: ['ATS Scanning Optimization', 'Executive Storytelling', 'LinkedIn SEO', 'Layout Escaneável'],
    targetAudience: 'Profissionais em transição de carreira, especialistas e cargos de liderança.',
    customWhatsAppMessage: 'Olá! Gostaria de reformular meu Currículo Estratégico com a AP Soluções.',
    iconName: 'FileText',
    tag: 'Aprovação ATS'
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'Todos os Serviços (11)', count: 11 },
  { id: 'audiovisual', label: 'Audiovisual & Mídia', count: 5 },
  { id: 'design', label: 'Design & Vendas', count: 2 },
  { id: 'tech', label: 'Inteligência & Tecnologia', count: 1 },
  { id: 'estrutural', label: 'Soluções Estruturais & Carreira', count: 3 }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Diagnóstico Inicial',
    subtitle: 'Mapeamento Sem Custo',
    description: 'Conversa rápida de 15 minutos no WhatsApp para mapear seus gargalos, objetivos de crescimento e prioridades imediatas.',
    duration: '15 min no WhatsApp',
    deliverable: 'Mapeamento das demandas prioritárias'
  },
  {
    stepNumber: '02',
    title: 'Proposta e Alinhamento',
    subtitle: 'Escopo Transparente',
    description: 'Apresentamos um plano de ação enxuto, com definição clara das entregas, prazos contratuais e investimento sob medida sem surpresas.',
    duration: 'Até 24h úteis',
    deliverable: 'Orçamento formal e cronograma'
  },
  {
    stepNumber: '03',
    title: 'Produção Ágil',
    subtitle: 'Execução Técnica Rigorosa',
    description: 'Nossa equipe especializada assume a execução técnica com acompanhamento contínuo e canal direto de comunicação para feedbacks rápidos.',
    duration: 'Conforme cronograma',
    deliverable: 'Updates em tempo real no WhatsApp'
  },
  {
    stepNumber: '04',
    title: 'Entrega e Validação',
    subtitle: 'Pronto para Gerar Resultados',
    description: 'Apresentação dos arquivos finais nos formatos ideais, rodada de ajustes finos se necessário e validação completa para uso imediato.',
    duration: 'Validação em até 48h',
    deliverable: 'Arquivos definitivos em alta resolução'
  }
];

export const TANGIBLE_ADVANTAGES: AdvantageItem[] = [
  {
    title: 'Agilidade e Pontualidade nos Prazos',
    description: 'Cronogramas contratuais rigorosos. Cada projeto segue um pipeline monitorado para garantir que seus prazos nunca sejam descumpridos.',
    metric: '99.4%',
    metricLabel: 'Entregas no prazo acordado',
    iconName: 'Clock'
  },
  {
    title: 'Atendimento Direto com o Executor',
    description: 'Sem intermediários desinformados ou atendentes engessados. Você dialoga diretamente com quem executa e entende da parte técnica.',
    metric: '100%',
    metricLabel: 'Comunicação sem ruído',
    iconName: 'UserCheck'
  },
  {
    title: 'Pacotes Customizados sob Medida',
    description: 'Pague apenas pelo que a sua operação realmente precisa agora, com flexibilidade para expandir o escopo conforme seu faturamento cresce.',
    metric: 'Flexível',
    metricLabel: 'Zero custos ociosos',
    iconName: 'Layers'
  },
  {
    title: 'Ausência Total de Burocracia',
    description: 'Contratação descomplicada, aprovações rápidas pelo WhatsApp e foco absoluto na execução de excelência sem papeladas intermináveis.',
    metric: 'Zero',
    metricLabel: 'Fricção operacional',
    iconName: 'Zap'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual é o prazo médio de entrega dos serviços?',
    answer: 'Nossos prazos são calculados com precisão durante a etapa de proposta. Demandas pontuais (como edição de vídeos curtos dinâmicos, artes avulsas ou currículos) costumam ser entregues entre 2 a 5 dias úteis. Projetos integrados (como estruturação de funis de vendas, identidade visual completa ou consultoria acadêmica aprofundada) seguem um cronograma por etapas pré-definido, com entregas parciais para você acompanhar o avanço contínuo.',
    highlight: 'Prazos definidos contratualmente e cumpridos com rigor militar.'
  },
  {
    id: 'faq-2',
    question: 'Quais são as formas de pagamento disponíveis (Pix, Cartão, Boleto)?',
    answer: 'Facilitamos ao máximo o fluxo financeiro da sua empresa. Aceitamos Pix (com condição especial para pagamentos à vista), transferência bancária, boleto e cartão de crédito com parcelamento em até 12x. Para pacotes mensais recorrentes de gestão de conteúdo ou contabilidade digital, trabalhamos com faturamento programado e emissão automática de nota fiscal.',
    highlight: 'Pix à vista ou Cartão em até 12x com emissão fiscal formal.'
  },
  {
    id: 'faq-3',
    question: 'Como funciona o método de envio e compartilhamento de materiais?',
    answer: 'Tudo é organizado em uma pasta dedicada e segura na nuvem (Google Drive Enterprise), estruturada por pastas e datas. Você simplesmente faz o upload das gravações brutas ou documentos e nós cuidamos de toda a organização, download, processamento e reenvio dos arquivos prontos. Sem perda de arquivos e sem links expirados.',
    highlight: 'Estrutura privada em nuvem corporativa com backup garantido.'
  },
  {
    id: 'faq-4',
    question: 'E se eu precisar de alterações ou ajustes após a entrega?',
    answer: 'Todos os nossos serviços incluem rodadas de alinhamento e ajustes finos pontuais já inclusos no orçamento inicial. Após a apresentação da primeira versão, você tem até 7 dias para solicitar correções específicas de ritmo, texto, cortes ou diagramação. Nosso compromisso é entregar uma peça 100% validada e pronta para gerar retorno imediato.',
    highlight: 'Ajustes finos inclusos até sua total satisfação e aprovação.'
  }
];

export const SEO_DOSSIER: SEODossier = {
  primaryKeyword: 'agência de soluções digitais e produção audiovisual integrada',
  secondaryKeywords: [
    'edição de vídeo profissional',
    'gestão de vídeos curtos reels tiktok',
    'otimização seo youtube',
    'estruturação de funis de vendas',
    'automação com inteligência artificial',
    'contabilidade digital para empresas',
    'consultoria acadêmica abnt',
    'elaboração de currículo estratégico'
  ],
  h1Tag: 'A melhor solução para o seu negócio. Agilidade que acelera. Resultado que escala.',
  h2Tags: [
    'Nossos Serviços: Soluções Integradas para Escalar Seu Negócio',
    'O Diferencial AP Soluções: Centralização Estratégica vs. Caos de Freelancers',
    'Como Funciona: Da Demanda ao Resultado em 4 Etapas Ágeis',
    'Vantagens Tangíveis: Menos Tempo Perdido, Mais Eficiência e Lucro',
    'Segurança Contratual e Confiança: Seu Projeto Blindado do Início ao Fim',
    'Perguntas Frequentes: Respostas Claras para Decisões Rápidas',
    'Pronto para Escalar? Garanta Sua Vaga no Cronograma Deste Mês'
  ],
  h3Tags: [
    'Audiovisual & Mídia',
    'Design & Vendas',
    'Inteligência & Tecnologia',
    'Soluções Estruturais & Carreira',
    'Etapa 1: Diagnóstico Inicial',
    'Etapa 2: Proposta e Alinhamento',
    'Etapa 3: Produção Ágil',
    'Etapa 4: Entrega e Validação'
  ],
  searchIntents: [
    {
      intent: 'Transacional',
      description: 'Usuários buscando contratar serviços imediatos de edição de vídeo, funis de venda, contabilidade ou IA.',
      addressedIn: 'Botões de CTA direto no WhatsApp em cada card de serviço e no cabeçalho fixo.'
    },
    {
      intent: 'Comercial / Investigativa',
      description: 'Tomadores de decisão comparando contratar múltiplos fornecedores independentes versus centralizar com um parceiro confiável.',
      addressedIn: 'Bloco de autoridade comparativo demonstrando eliminação de retrabalho e ruído de comunicação.'
    },
    {
      intent: 'Navegacional / Institucional',
      description: 'Pesquisas pela marca "AP Soluções" e portfólio oficial de serviços multidisciplinares.',
      addressedIn: 'Identidade visual estrita, logo com seta diagonal ascendente, rodapé institucional e contatos formais.'
    }
  ],
  copyTriggers: [
    {
      trigger: 'Dor x Alívio (Sobrecarga Operacional)',
      application: 'Hero section ataca diretamente a perda de tempo gerenciando prazos e tarefas técnicas que travam o dono do negócio.'
    },
    {
      trigger: 'Redução de Fricção Cognitiva',
      application: '11 serviços organizados em apenas 4 pilares lógicos, com descrições objetivas de 2 linhas focadas em benefício direto.'
    },
    {
      trigger: 'Prova de Agilidade & Inversão de Risco',
      application: 'Garantia contratual, revisão de 7 dias e métrica de 99.4% de pontualidade que desarmam o receio do lead.'
    },
    {
      trigger: 'Urgência Racional e Elegante',
      application: 'Capacidade limitada mensal para assegurar padrão executivo de atendimento e entrega sem gargalos.'
    }
  ]
};
