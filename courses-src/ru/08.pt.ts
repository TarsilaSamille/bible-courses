import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Os seis casos'),
  subtitle: T('genitivo — dativo — instrumental — prepositivo'),
  section: T('Os casos'),
  body: C(
    'A declinação russa marca as relações sintáticas. O genitivo expressa posse ou origem: слово Бога, "a palavra de Deus"; depois de нет, "não há": нет хлеба. O dativo marca destinatário ou interesse: Богу, "a Deus"; Бога благослови, "bendiga a Deus". O instrumental expressa meio, companhia, lugar em alguns usos fixos e tempo: с Богом, "com Deus"; утром, "de manhã". O caso prepositivo aparece com preposição: в начале, "no início"; о Боге, "sobre Deus". Quando o substantivo termina em -о ou -е, a forma prepositiva pode acrescentar -м: о Боге, mas о слове. Em серафимом o prepositivo é о серафиме. O instrumental plural dos substantivos terminados em -а/-я é -ами/-ями: делами. Genitivo e acusativo singular coincidem nos substantivos masculinos animados: Бога pode significar "de Deus" ou "Deus" como objeto. As funções entre parênteses são pistas, não traduções universais.',
  ),
  vocab: [
    V('Богу', 'бог', 'a Deus; dativo'),
    V('Богом', 'бог', 'com Deus; instrumental'),
    V('о Боге', 'бог', 'sobre Deus; prepositivo'),
    V('мне', 'я', 'a mim; dativo de я'),
    V('тебе', 'ты', 'a ti; dativo de ты'),
    V('Отче', 'отец', 'Ó Pai; vocativo'),
    V('нет хлеба', 'нет', 'não há pão; o negador pede genitivo'),
    V('хлеба', 'хлеб', 'pão; genitivo singular'),
    V('утром', 'утро', 'de manhã; instrumental'),
    V('врачом', 'врач', 'médico; instrumental'),
    V('о слове', 'слово', 'sobre a palavra; prepositivo'),
    V('словами', 'слово', 'com palavras; instrumental plural'),
    V('к Богу', 'бог', 'para Deus; к rege dativo'),
    V('с неба', 'небо', 'do céu; aqui с rege genitivo'),
    V('у Бога', 'бог', 'junto de Deus; у rege genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual caso aparece em с Богом?'),
    options: [T('Dativo'), T('Instrumental'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o instrumental: кн…'), answer: 'ы' },
    { kind: 'fill', prompt: T('Complete: о Б… (prepositivo de бог)'), answer: 'оге' },
    {
      kind: 'choose',
      prompt: T('Que caso segue нет?'),
      options: [T('Nominativo'), T('Genitivo'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('O genitivo marca posse e ausência: {слово Бога} e {нет хлеба}.') },
    {
      n: '2',
      text: T(
        'O dativo marca destinatário: em {Бога благослови} é o bendido que vai no dativo, não quem blessa.',
      ),
    },
    {
      n: '3',
      text: T('O instrumental marca meio, companhia e tempo: {с Богом}, {утром}, {быть врачом}.'),
    },
    {
      n: '4',
      text: T(
        'O prepositivo nunca aparece sozinho: {о Боге} e {о слове} precisam da preposição que os rege.',
      ),
    },
    {
      n: '5',
      text: T(
        'O par que se confunde é {Бога} genitivo contra {Бога} acusativo, e só o verbo separa os dois.',
      ),
    },
  ],
  notes: [
    {
      label: T('Uma forma, dois casos'),
      text: T(
        'Genitivo e acusativo coincidem nos masculinos animados singulares, e é por isso que {Бога} pode ser «de Deus» ou «Deus» como objeto. O contexto decide, e a terminação sozinha não diz.',
      ),
    },
    {
      label: T('O instrumental que parece preposição'),
      text: T(
        '{с} antes de {Богом} significa «com», e antes de {неба} significa «de». A diferença não está em {с} nem no substantivo, e sim no que a palavra nomeia: pessoa pede companhia, origem pede procedência.',
      ),
    },
  ],
  examples: [
    { text: 'слово Бога', gloss: T('a palavra de Deus; genitivo de posse') },
    { text: 'нет хлеба', gloss: T('não há pão; o negador {нет} exige genitivo') },
    { text: 'Бога благослови', gloss: T('bendiga a Deus; o bendido vai no dativo') },
    { text: 'с Богом', gloss: T('com Deus; instrumental de companhia') },
    { text: 'говорим о Боге', gloss: T('falamos de Deus; prepositivo') },
    { text: 'о слове', gloss: T('sobre a palavra; o prepositivo nunca vai sozinho') },
    {
      text: 'Я даю книгу другу',
      gloss: T('dou o livro ao amigo; o livro é acusativo e o amigo é dativo'),
    },
    { text: 'Он был врачом', gloss: T('ele foi médico; profissão no instrumental') },
    { text: 'утром', gloss: T('de manhã; tempo no instrumental') },
    { text: 'к Богу', gloss: T('para Deus; {к} rege dativo') },
  ],
  tables: [
    {
      caption: T('Os seis casos e a pergunta que cada um responde'),
      head: [T('Caso'), T('Pergunta'), T('Sinal típico'), T('Exemplo')],
      rows: [
        [T('nominativo'), T('quem faz?'), T('nenhum'), T('Бог')],
        [T('genitivo'), T('de quem, de quê?'), T('нет, у, от, до'), T('слово Бога')],
        [T('dativo'), T('a quem?'), T('к, помогать'), T('Бога благослови')],
        [T('acusativo'), T('o quê?'), T('verbo transitivo'), T('вижу Бога')],
        [T('instrumental'), T('com quê, por quê meio?'), T('с, быть, заниматься'), T('с Богом')],
        [T('prepositivo'), T('onde, sobre quê?'), T('в, на, о'), T('о Боге')],
      ],
    },
    {
      caption: T('A mesma preposição, casos diferentes'),
      head: [T('Preposição'), T('Sentido'), T('Caso'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('в'), T('lugar estático'), T('prepositivo'), T('в начале'), T('no princípio')],
        [T('в'), T('entrada'), T('acusativo'), T('в храм'), T('para dentro do templo')],
        [T('на'), T('lugar ou domínio'), T('prepositivo'), T('на небе'), T('no céu')],
        [T('на'), T('superfície, direção'), T('acusativo'), T('на стену'), T('sobre a parede')],
        [T('с'), T('companhia'), T('instrumental'), T('с Богом'), T('com Deus')],
        [T('с'), T('origem'), T('genitivo'), T('с неба'), T('do céu')],
      ],
    },
    {
      caption: T('Os pares que se confundem'),
      head: [T('Forma'), T('Pode ser'), T('Decide'), T('O que diferencia')],
      rows: [
        [
          T('Бога'),
          T('genitivo e acusativo'),
          T('o verbo'),
          T('слово Бога tem posse; вижу Бoga tem objeto'),
        ],
        [T('о слове'), T('prepositivo, e nada sozinho'), T('a preposição'), T('без {о} é erro')],
        [
          T('с неба'),
          T('genitivo, nunca instrumental'),
          T('o sentido'),
          T('с русским é instrumental'),
        ],
        [T('два слова'), T('plural e genitivo singular'), T('o numeral'), T('пять слов é plural')],
      ],
    },
  ],
};
