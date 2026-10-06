export type LinkItem = {
  type: "link";
  title: string;
  hint?: string;
  href: string;
};

export type ProgramId =
  | "porteira"
  | "procal"
  | "pmaa"
  | "baldecheio"
  | "fundiaria"
  | "assistencia"
  | "feiras"
  | "expo"
  | "inspecao";

export type ProgramItem = {
  type: "program";
  title: string;
  programId: ProgramId;
};

export type ProgramDetails = {
  title: string;
  fullName: string;
  description: string;
  activities: string[];
  extra?: {
    title: string;
    text: string;
    items: string[];
  };
  note?: string;
};

export const PROGRAMS: Record<ProgramId, ProgramDetails> = {
  porteira: {
    title: "Porteira Adentro",
    fullName: "Apoio ao pequeno produtor rural",
    description:
      "O Porteira Adentro leva máquinas e serviços da SEMAGRI para dentro das propriedades rurais de Vilhena, apoiando a agricultura familiar e melhorando as condições de produção.",
    activities: [
      "Abertura e manutenção de estradas internas nas propriedades.",
      "Gradagem do solo e destocamento.",
      "Espalhamento de calcário e transporte de adubo.",
      "Escavação de tanques para piscicultura e implantação de bebedouros para gado.",
      "Aterro com caminhão caçamba. As demandas são levantadas junto às associações rurais.",
    ],
  },
  procal: {
    title: "PROCAL",
    fullName: "Programa Municipal de Transporte de Calcário",
    description:
      "O PROCAL oferece transporte gratuito de calcário para pequenos produtores rurais de Vilhena. O calcário ajuda a corrigir a acidez do solo e a melhorar as condições para o cultivo.",
    activities: [
      "Transporta o calcário adquirido pelo produtor até a propriedade.",
      "Reduz o custo de transporte do insumo para a agricultura familiar.",
      "Apoia a correção do solo e o aumento da produtividade das lavouras.",
      "É mantido com recursos próprios do município.",
    ],
  },
  pmaa: {
    title: "PMAA",
    fullName: "Programa Municipal de Aquisição de Alimentos",
    description:
      "O PMAA compra alimentos produzidos pela agricultura familiar de Vilhena e os destina a entidades socioassistenciais que atendem pessoas em situação de vulnerabilidade social.",
    activities: [
      "Adquire produtos locais, como hortaliças, frutas, leguminosas, café, mel e ovos.",
      "Valoriza a produção local e cria uma oportunidade de comercialização para os agricultores.",
      "Fornece alimentos às entidades beneficiadas, contribuindo para a segurança alimentar.",
    ],
    note: "Em 2026, o programa conta com R$ 500 mil em recursos próprios da Prefeitura.",
  },
  baldecheio: {
    title: "Balde Cheio",
    fullName: "Programa de desenvolvimento da pecuária leiteira",
    description:
      "O Balde Cheio é um programa criado pela Embrapa para melhorar a produção de leite, com apoio da SEMAGRI em Vilhena. A propriedade rural familiar funciona como uma “sala de aula prática”, onde técnicos e produtores aprendem e aplicam as técnicas no dia a dia.",
    activities: [
      "Capacita técnicos e produtores em manejo de pastagem, alimentação e reprodução do rebanho, qualidade do leite e gestão da propriedade.",
      "Oferece assistência técnica continuada, com acompanhamento periódico dos técnicos nas propriedades.",
      "Usa controles simples da produção e das finanças para que o produtor enxergue custos e resultados.",
      "As propriedades acompanhadas servem de referência para outros produtores da região.",
    ],
    note: "Em 2022, a SEMAGRI contratou cursos de capacitação e assistência técnica do Balde Cheio para produtores rurais e técnicos da secretaria. Em 2019, uma propriedade de Vilhena acompanhada pelo programa passou de cerca de 70 para cerca de 450 litros de leite por dia.",
  },
  fundiaria: {
    title: "Regularização fundiária",
    fullName: "Núcleo Municipal de Regularização Fundiária",
    description:
      "A SEMAGRI mantém um núcleo que orienta produtores rurais e acompanha os processos de titulação de propriedades, em parceria com o Incra e a Sepat. O título dá segurança jurídica e facilita o acesso a crédito e a políticas públicas.",
    activities: [
      "Vistoria propriedades, cadastra produtores e analisa a documentação dos processos.",
      "Orienta os produtores nas consultas aos sistemas SEI Incra, SIGEF e à Plataforma de Governança Territorial (PGT).",
      "Recebe, no auditório da SEMAGRI, mutirões de atendimento do Incra e da Sepat.",
      "Segundo a Prefeitura, cerca de 700 títulos foram entregues desde 2023 e outros mil processos estão em andamento.",
    ],
    note: "Nos mutirões, os produtores são orientados a levar documentos pessoais, o georreferenciamento da área aprovado no SIGEF e uma conta gov.br ativa.",
  },
  assistencia: {
    title: "Assistência técnica e capacitação",
    fullName: "Orientação ao produtor rural",
    description:
      "A SEMAGRI oferece orientação técnica a produtores rurais para evitar erros na lavoura e na criação de animais, e apoia a capacitação de agricultores e trabalhadores rurais.",
    activities: [
      "Orientação sobre adubação, preparo do solo e colheita.",
      "Atendimento a hortifrúti, gado leiteiro e agroindústrias.",
      "Visitas técnicas às propriedades e levantamento de demandas.",
      "Apoio e organização de capacitações para quem vive e trabalha no campo.",
    ],
  },
  feiras: {
    title: "Feiras livres",
    fullName: "Venda direta do produtor ao consumidor",
    description:
      "As feiras livres de Vilhena levam frutas, verduras, legumes e outros produtos direto do produtor para a população. A SEMAGRI atua junto com a Semtic no apoio a feirantes e produtores rurais.",
    activities: [
      "Espaço de venda para produtores rurais, agroindústrias e comerciantes cadastrados.",
      "Cinco feiras na cidade: Centro, BNH, São José, Av. Paraná e Av. Melvin Jones.",
    ],
    note: "Dias, horários e locais podem mudar durante as obras. Confirme no Instagram da SEMAGRI ou da Prefeitura.",
  },
  expo: {
    title: "ExpoVilhena",
    fullName: "Feira do agronegócio de Vilhena",
    description:
      "Evento idealizado pela SEMAGRI, com a Prefeitura, para valorizar o produtor rural e fortalecer o agronegócio do município. A entrada é gratuita, inclusive para os shows.",
    activities: [
      "Feira multissetorial com máquinas, implementos, tecnologias, produtos e serviços para o campo.",
      "Palestras técnicas promovidas pela SEMAGRI, como a de bioinsumos.",
      "Concurso leiteiro, rodeio e programação cultural.",
    ],
    note: "A edição 2026 aconteceu de 21 a 24 de maio, no Parque de Exposições Ilário Bodanese. Acompanhe o Instagram para as próximas edições.",
  },
  inspecao: {
    title: "Inspeção sanitária e selo S.I.M.",
    fullName: "Vigilância e fiscalização de alimentos",
    description:
      "A SEMAGRI é responsável pela vigilância e pela fiscalização sanitária de produtos alimentícios e de empresas comerciais de gêneros alimentares, para proteger a saúde e a segurança alimentar da população.",
    activities: [
      "Fiscaliza produtos alimentícios.",
      "Fiscaliza empresas comerciais de gêneros alimentares.",
      "Coordena e gere o sistema de abastecimento e segurança alimentar do município.",
      "Conta com agentes de inspeção sanitária e médicos veterinários, que atuam no Serviço de Inspeção Municipal (S.I.M.) e, no frigorífico, junto ao Serviço de Inspeção Federal (SIF).",
    ],
    extra: {
      title: "O que é o selo S.I.M.",
      text: "S.I.M. significa Serviço de Inspeção Municipal. O selo, impresso no rótulo, indica que o produto de origem animal foi feito em um estabelecimento registrado e fiscalizado, com controle de higiene e de procedência, para chegar seguro à mesa do consumidor.",
      items: [
        "Vale para alimentos de origem animal: carnes e derivados, leite e derivados, ovos, pescado e mel.",
        "O estabelecimento é registrado, recebe fiscalização e tem produtos e rótulos analisados.",
        "Para o produtor, é o caminho para vender de forma legal e deixar a informalidade, com mais confiança do consumidor.",
        "Para o consumidor, é um sinal de segurança: ao comprar, confira se o rótulo traz o selo de inspeção.",
        "Em regra, o selo municipal vale para vender dentro do próprio município. Para vender em outros lugares, são necessários outros selos, como o estadual, o federal ou o SISBI-POA.",
      ],
    },
    note: "Quer registrar seu estabelecimento? Procure a SEMAGRI para saber quais documentos e etapas são exigidos em Vilhena.",
  },
};

export const LINKS: { label: string; items: (LinkItem | ProgramItem)[] }[] = [
  {
    label: "Redes",
    items: [
      {
        type: "link",
        title: "Instagram da SEMAGRI",
        hint: "@semagrivilhena",
        href: "https://www.instagram.com/semagrivilhena/",
      },
      {
        type: "link",
        title: "Facebook da SEMAGRI",
        href: "https://www.facebook.com/share/1F7EKQ2uCA/?mibextid=wwXIfr",
      },
      {
        type: "link",
        title: "Threads da SEMAGRI",
        hint: "@semagrivilhena",
        href: "https://www.threads.com/@semagrivilhena",
      },
      {
        type: "link",
        title: "Instagram da Prefeitura",
        hint: "@municipiodevilhena",
        href: "https://www.instagram.com/municipiodevilhena/",
      },
    ],
  },
  {
    label: "Programas e ações",
    items: [
      { type: "program", title: "Porteira Adentro", programId: "porteira" },
      { type: "program", title: "PROCAL · transporte de calcário", programId: "procal" },
      { type: "program", title: "PMAA · compra de alimentos", programId: "pmaa" },
      { type: "program", title: "Balde Cheio · pecuária leiteira", programId: "baldecheio" },
      { type: "program", title: "Regularização fundiária", programId: "fundiaria" },
      { type: "program", title: "Assistência técnica e capacitação", programId: "assistencia" },
      { type: "program", title: "Feiras livres", programId: "feiras" },
      { type: "program", title: "ExpoVilhena", programId: "expo" },
      { type: "program", title: "Inspeção sanitária e selo S.I.M.", programId: "inspecao" },
    ],
  },
  {
    label: "Atendimento",
    items: [
      {
        type: "link",
        title: "E-mail",
        hint: "semagri@vilhena.ro.gov.br",
        href: "mailto:semagri@vilhena.ro.gov.br",
      },
      {
        type: "link",
        title: "Como chegar",
        hint: "Atendimento presencial · abrir no Google Maps",
        href: "https://maps.app.goo.gl/vpUV5YEbTbe7prZg7",
      },
    ],
  },
  {
    label: "Município",
    items: [
      {
        type: "link",
        title: "Prefeitura de Vilhena",
        href: "https://vilhena.ro.gov.br/",
      },
      { type: "link", title: "Concursos", href: "https://vilhena.ro.gov.br/concursos/" },
    ],
  },
];
