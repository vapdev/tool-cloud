// sidebarGroups.ts
export const sidebarGroups = [
  {
    title: "Conversão e Medidas",
    items: [
      {
        title: "Conversor de unidades de comprimento",
        component: "comprimento",
      },
      {
        title: "Conversor de unidades de temperatura",
        component: "temperatura",
      },
      { title: "Conversor de unidades de peso", component: "peso" },
      { title: "Conversor de unidades de volume", component: "volume" },
      {
        title: "Calculadora de IMC (Índice de Massa Corporal)",
        component: "imc",
      },
      {
        title: "Calculadora de idade em diferentes unidades",
        component: "idade",
      },
    ],
  },
  {
    title: "Tempo e Cronometragem",
    items: [
      {
        title: "Temporizador online com opções personalizáveis",
        component: "temporizador",
      },
      {
        title: "Relógio mundial para diferentes fusos horários",
        component: "relogioMundial",
      },
      { title: "Calculadora de datas", component: "calculadoraDatas" },
    ],
  },
  {
    title: "Cor e Design",
    items: [
      { title: "Seletor de cores (color picker)", component: "seletorCores" },
      {
        title: "Paleta de cores com combinações sugeridas",
        component: "paletaCores",
      },
      {
        title: "Gerador de gradientes personalizáveis",
        component: "geradorGradientes",
      },
      {
        title: "Calculadora de proporções áureas para design",
        component: "calculadoraProporcoes",
      },
    ],
  },
  {
    title: "Texto e Strings",
    items: [
      {
        title: "Validador de expressões regulares (Regex)",
        component: "validadorRegex",
      },
      {
        title: "Conversor de texto para maiúsculas/minúsculas",
        component: "conversorTexto",
      },
      {
        title: "Contador de palavras e caracteres",
        component: "contadorPalavras",
      },
      {
        title: "Ferramenta de substituição de texto em massa",
        component: "substituicaoTexto",
      },
      {
        title: "Gerador de Lorem Ipsum com opções personalizáveis",
        component: "geradorLoremIpsum",
      },
      {
        title: "Ferramenta de codificação/decodificação de Base64",
        component: "codificacaoBase64",
      },
    ],
  },
  {
    title: "Finanças e Matemática",
    items: [
      {
        title: "Calculadora de juros compostos",
        component: "calculadoraJuros",
      },
      {
        title: "Calculadora de porcentagem",
        component: "calculadoraPorcentagem",
      },
      {
        title: "Conversor de moedas em tempo real",
        component: "conversorMoedas",
      },
      { title: "Calculadora de hipoteca", component: "calculadoraHipoteca" },
      {
        title: "Calculadora de ROI (Retorno sobre o Investimento)",
        component: "calculadoraROI",
      },
      {
        title: "Calculadora de desconto (percentual ou valor)",
        component: "calculadoraDesconto",
      },
    ],
  },
  // {
  //   title: "Saúde e Bem-Estar",
  //   items: [
  //     "Calculadora de ingestão diária de água",
  //     "Calculadora de calorias queimadas em diferentes atividades",
  //     "Calculadora de gasto energético basal (TMB)",
  //     "Calculadora de frequência cardíaca máxima (FCM)",
  //   ],
  // },
  {
    title: "Desenvolvimento e Tecnologia",
    items: [
      { title: "Gerador de senhas seguras", component: "geradorSenhas" },
      {
        title: "Testador de velocidade da Internet",
        component: "testadorVelocidade",
      },
      { title: "Gerador de QR Code", component: "geradorQRCode" },
      {
        title: "Calculadora de sub-redes IP",
        component: "calculadoraSubRedes",
      },
    ],
  },
  {
    title: "Educação e Aprendizado",
    items: [
      {
        title: "Calculadora de média ponderada",
        component: "calculadoraMedia",
      },
      {
        title: "Gerador de tabelas de verdade para lógica booleana",
        component: "geradorTabelas",
      },
      {
        title: "Ferramenta de conversão entre sistemas de numeração",
        component: "ferramentaConversao",
      },
      {
        title: "Calculadora de álgebra simples",
        component: "calculadoraAlgebra",
      },
    ],
  },
  {
    title: "Produtividade e Organização",
    items: [
      { title: "Lista de tarefas (to-do list)", component: "listaTarefas" },
      {
        title: "Gerador de cartões de visita personalizáveis",
        component: "geradorCartoes",
      },
      { title: "Cronograma", component: "cronograma" },
      { title: "Planejador de viagem", component: "planejadorViagem" },
      { title: "Gerador de currículos", component: "geradorCurriculos" },
    ],
  },
  {
    title: "Diversos",
    items: [
      {
        title: "Gerador de memes com modelos populares",
        component: "geradorMemes",
      },
      {
        title: "Calculadora de custo de viagem por carro",
        component: "calculadoraCustoViagem",
      },
      { title: "Gerador de piadas aleatórias", component: "geradorPiadas" },
      {
        title: "Calculadora de tempo de download",
        component: "calculadoraTempoDownload",
      },
      { title: "Gerador de nomes aleatórios", component: "geradorNomes" },
    ],
  },
]
