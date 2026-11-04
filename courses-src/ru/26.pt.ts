import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Preposições e casos'),
  subtitle: T('в, на, с, к, о, у, от, до, про'),
  section: T('A sintaxe e a tradução'),
  body: C(
    'Uma preposição seleciona um caso, mas a mesma preposição pode selecionar casos diferentes. в + prepositivo marca lugar: в начале, "no início"; в + acusativo marca direção para dentro: в храм, "para dentro do templo". на + prepositivo marca lugar sobre ou em um domínio: на небе, "no céu", на столе, "sobre a mesa"; на + acusativo marca direção para cima: на стену, "sobre a parede". с + instrumental marca companhia ou origem pessoal: с Богом, "com Deus", с тобой, "contigo"; с + genitivo marca origem: с неба, "do céu". к + dativo significa a ou em direção a: к Богу. от + genitivo significa de: от Бога. до + genitivo significa até: до конца. у + genitivo significa perto de ou junto de: у Бога. о + prepositivo significa sobre ou contra: о Боге. про + prepositivo significa a respeito de: говорить о contra говорить про. O caso prepositivo não tem forma de terminação zero: о Боге, mas о слове. Antes de grupos de consoantes, в e на podem tomar о ou и: во храм, на небе, в России. O Credo tradicional diz Верую, e não Верую во: a forma curta верю tem terminação zero e recebe a preposição por extenso.',
  ),
  vocab: [
    V('в храм', 'храм', 'para dentro do templo'),
    V('на небо', 'небо', 'para o céu'),
    V('с неба', 'небо', 'do céu'),
    V('к Богу', 'бог', 'a Deus'),
    V('от Бога', 'бог', 'de Deus'),
    V('до конца', 'конец', 'até o fim'),
    V('о Боге', 'бог', 'sobre Deus'),
    V('о слове', 'слово', 'sobre a palavra'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual caso aparece в храм?'),
    options: [T('Prepositivo'), T('Acusativo'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: к Бог…'), answer: 'у' },
    { kind: 'fill', prompt: T('Complete: с неб… (do céu)'), answer: 'а' },
    {
      kind: 'choose',
      prompt: T('Qual preposição rege instrumental para “com”?'),
      options: [T('от'), T('с'), T('у')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Identifique primeiro localização ou direção; depois, escolha o caso regido.'),
    },
  ],
  notes: [
    {
      label: T('A preposição não fixa o caso'),
      text: T(
        'Uma preposição pode reger mais de um caso, e é o sentido que escolhe. {в} com lugar é prepositivo, {в} com direção é acusativo: a mesma palavra, casos opostos.',
      ),
    },
  ],
  examples: [
    { text: 'в начале', gloss: T('no princípio') },
    { text: 'в храм', gloss: T('para dentro do templo') },
  ],
  tables: [
    {
      caption: T('Preposições e regimes'),
      head: ['Preposição', 'Caso', 'Exemplo'],
      rows: [
        ['в', 'prepositivo / acusativo', 'в начале / в храм'],
        ['на', 'prepositivo / acusativo', 'на небе / на небо'],
        ['с', 'instrumental / genitivo', 'с Богом / с неба'],
        ['к', 'dativo', 'к Богу'],
        ['о, про', 'preposicional', 'о Боге / про Бога'],
        ['у, от, до', 'genitivo', 'у Бога / от Бога / до конца'],
      ],
    },
  ],
};
