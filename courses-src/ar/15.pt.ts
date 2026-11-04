import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Passiva e síntese do curso'),
  subtitle: T('كُتِبَ: resultado e agente'),
  section: T('Síntese do curso'),
  body: C(`## O que a passiva faz

A passiva arábica destaca o resultado ou o estado e normalmente **omite o agente**. Não é uma transformação vazia de estilo: quando o agente é irrelevante ou já conhecido, apagá-lo libera a estrutura. Em {كُتِبَ} "foi escrito", não se diz quem escreveu — e em {خُلِقَ} "foi criado", o agente é Deus, que o texto não precisa nomear.

## Mudança de vogaliação

No passado, {كَتَبَ} vira {كُتِبَ}: as vogais se invertem. No imperfeito, {يَكْتُبُ} vira {يُكْتَبُ}. Com raízes fracas a vogaliação acompanha a raiz, não a terminação: {قَالَ} → {قِيلَ} e {وَلَدَ} → {وُلِدَ}. Perceba que {قِيلَ} não parece com {قَالَ} nem com {يَقُولُ} — é o único jeito de reconhecer a forma.

## Agente explícito

Quando o autor precisa nomear o agente, usa {مِنْ قِبَلِ} ou {بِـ} mais a forma verbal. {مِنْ قِبَلِ} é literalmente "da parte de" e aparece em {كُتِبَ مِنْ قِبَلِ}. Um leitor que traduz apenas a passiva perde a informação do agente explícito, que é justamente a informação nova.

## O que este capítulo fecha

O percurso foi da letra ao sistema: alfabeto e vogais (1), artigo e gênero (2), raiz e passado (3), leitura aplicada (4), formas derivadas (5), iḍāfa (6), modos e tempo (7), raízes fracas (8), participos (9), adjetivos (10), preposições (11), numerais (12), perguntas e condicionais (13). A passiva (14) junta tudo, porque usa raiz, vogaliação, tempo e agente na mesma forma.

## Critério de leitura

Ao encontrar uma forma com {مُ} inicial, {ِ} sob a primeira consoante ou sufixo {ُ} no final, trate-a como passiva antes de procurar agente. Depois volte à raiz e confira se o sentido permite: nem todo verbo tem passiva natural em todos os tempos.`),
  vocab: [
    V('كُتِبَ', 'كتب', 'foi escrito'),
    V('خُلِقَ', 'خلق', 'foi criado'),
    V('قِيلَ', 'قال', 'foi dito'),
    V('بُورِكَ', 'بارك', 'foi abençoado'),
    V('يُكْتَبُ', 'كتب', 'é escrito'),
    V('مِنْ', 'من', 'de; por'),
    V('قِبَلَ', 'قبل', 'antes; por'),
    V('وُلِدَ', 'ولد', 'nasceu'),
    V('صُلِبَ', 'صلب', 'foi crucificado'),
    V('قُبِرَ', 'قبر', 'foi sepultado'),
    V('قَامَ', 'قام', 'ressuscitou'),
    V('تَمَّتَ', 'تمم', 'foi completado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma a passiva de {كَتَبَ}?'),
    options: [T('Com auxiliar'), T('Trocando as vogais'), T('Com prefixo'), T('Com sufixo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a passiva: {قَالَ} → ___'),
      answer: 'قِيلَ',
      hint: T('É a passiva de uma raiz oca.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase expressa estado resultante?'),
      options: [T('كَاتِبٌ'), T('مَكْتُوبٌ'), T('كُتِبَ'), T('يَكْتُبُ')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe verbo e estrutura.'),
      pairs: [
        { a: T('وُلِدَ'), b: T('passiva') },
        { a: T('قَامَ'), b: T('ativa') },
        { a: T('يُكْتَبُ'), b: T('imperfeito passivo') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('A passiva Arab emphasizes resultado and dispenses o agente.') },
    {
      n: '2',
      text: T(
        'A transformação das vogais é systematic: fatha inicial → ḍamma; kasra da segunda → fatha.',
      ),
    },
    {
      n: '3',
      text: T(
        'Não confunda partícipio {مَكْتُوب} com perfect passivo {كُتِبَ}: um descreve, o outro relata processo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Síntese'),
      text: T(
        'Do {ال} ao credo, a leitura bíblica cresce:Direction, Roots, suffixes, and prefixes let you continue with any passage.',
      ),
    },
  ],
  examples: [
    { text: 'كُتِبَ الإِنْجِيلُ', gloss: T('o Evangelho foi escrito') },
    { text: 'وُلِدَ يَسُوعُ', gloss: T('Jesus nasceu') },
    { text: 'صُلِبَ وَقُبِرَ وَقَامَ', gloss: T('foi crucificado, sepultado e ressuscitou') },
  ],
  tables: [
    {
      caption: T('Ativo e passiva'),
      head: [T('Tipo'), T('Ativo'), T('Passiva')],
      rows: [
        ['perfeito', 'كَتَبَ', 'كُتِبَ'],
        ['imperfeito', 'يَكْتُبُ', 'يُكْتَبُ'],
        ['raiz oca', 'قَالَ', 'قِيلَ'],
        ['raiz inicial fraca', 'وَلَدَ', 'وُلِدَ'],
      ],
    },
  ],
};
