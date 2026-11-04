import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Passado simples'),
  subtitle: T('spoke, said, was — narrativa e irregulares'),
  section: T('O verbo'),
  body: C(`## Regulares e irregulares

O passado simples situa uma ação num ponto do passado. A forma regular acrescenta {-ed}; depois de {-e} basta {-d}: {love/loved}. Uma consoante final normalmente duplica-se: {stop/stopped}; {-y} precedido de consonante torna-se {-ied}: {carry/carried}.

Os irregulares devem ser aprendidos como unidades: {speak/spoke}, {say/said}, {see/saw}, {come/came}, {give/gave}, {take/took}, {write/wrote}. O particípio pode coincidir ou não: {speak/spoken}, mas {say/said}.

## {BE}, {DID} e {WAS/WERE}

{BE} no passado dá {was} para I/he/she/it e {were} para you/we/they. Em perguntas e negações, {did} absorve o tempo: {Did he speak?}, {He did not speak}; o verbo principal volta à base.

Gênesis 1:3 preserva o contraste: {God said}, {Let there be}, {and there was light}. Say e be são irregulares; let pode expressar pedido ou missão, e o contexto bíblico favorece “haja luz”.

## Discurso indireto

O discurso citado normalmente mantém o tempo original: {He said, “I am the light.”} Depois de um verbo de dizer, porém, o inglês costuma recuar o tempo: {He said that he was the light}. Esse deslocamento é normal, não uma tradução incorreta.`),
  vocab: [
    V('spoke', 'speak', 'falou'),
    V('said', 'say', 'disse'),
    V('was', 'be', 'era/foi'),
    V('were', 'be', 'eram/foram'),
    V('saw', 'see', 'viu'),
    V('came', 'come', 'veio'),
    V('gave', 'give', 'deu'),
    V('prayed', 'pray', 'orou'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o passado de say?'),
    options: [T('sayed'), T('said'), T('says'), T('sayd')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “He ___ (not speak) yesterday.”'),
      answer: 'did not speak',
    },
    {
      kind: 'match',
      prompt: T('Relacione base e passado.'),
      pairs: [
        { a: 'write', b: 'wrote' },
        { a: 'take', b: 'took' },
        { a: 'see', b: 'saw' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Em “When I arrived, they ___ with God”, qual forma é a mais natural?'),
      options: [T('was'), T('were'), T('are'), T('been')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Com did, o verbo principal não recebe -ed: He did not go, não did not went.'),
    },
    {
      n: '2',
      text: T(
        'Was referencia I/he/she/it; were, you/we/they. No passado, however, is often contracted: I was.',
      ),
    },
    {
      n: '3',
      text: T(
        'O passado pode ser remoto em relação ao presente, não necessariamente terminado: yesterday marca tempo; simple past sozinho não o faz.',
      ),
    },
  ],
  notes: [
    {
      label: T('KJV:'),
      text: T(
        'A KJV pode omitir was no presente, mas conserva o pretérito was/were em narrativas.',
      ),
    },
  ],
  examples: [
    { text: '{God said, Let there be light}', gloss: T('Deus disse: haja luz') },
    { text: '{He did not speak}', gloss: T('Ele não falou') },
    { text: '{They were with God}', gloss: T('Eles estavam com Deus') },
  ],
  tables: [
    {
      caption: T('Formas irregulares essenciais'),
      head: [T('Base'), T('Passado'), T('Particípio')],
      rows: [
        ['speak', 'spoke', 'spoken'],
        ['say', 'said', 'said'],
        ['see', 'saw', 'seen'],
        ['come', 'came', 'come'],
        ['be', 'was/were', 'been'],
      ],
    },
  ],
};
