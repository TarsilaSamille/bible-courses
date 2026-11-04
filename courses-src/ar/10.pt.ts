import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Particípios e nomes verbais'),
  subtitle: T('كَاتِب، مَكْتُوب، كِتَابَة'),
  section: T('O verbo'),
  body: C(`## Três derivados, três funções

A raiz {ك-ت-ب} produz formas nominais que se distinguem pela vogaliação, não pelo sentido bruto. {كَاتِب} tem vogal longa e é o **particípio ativo**: "quem escreve". {مَكْتُوب} começa por {م} e é o **particípio passivo**: "o que foi escrito". {كِتَابَة} termina em {ة} e é o **nome verbal**: "a escrita", sem agente nem paciente definido.

## O particípio descreve ou nomeia

{kَاتِب} seguido de artigo e concordância funciona como substantivo: {الكَاتِبُ} é "o escritor". Seguido de um substantivo, funciona como adjetivo: {كَاتِبٌ عَالِمٌ} é "escritor sábio". O mesmo vale para {مَكْتُوب} em {كَلِمَةٌ مَكْتُوبَةٌ} e {عِلْمٌ عَمِيقٌ}.

## O tempo que o particípio não tem

O particípio não tem tempo próprio: quem diz {مَكْتُوب} não afirma nem que a escrita ocorreu nem que ocorrerá. O tempo vem do verbo que o acompanha, se houver. Por isso uma tradução que faz do particípio um passado ou um futuro acrescenta algo que o árabe não disse.

## Critério de leitura

Identifique a vogalização do derivado: {ـاتِب} ativo, {مَـتُوب} passivo, {ـتَابَة} nome verbal. Depois confira se há artigo: com artigo é nome, sem artigo é descrição. Essa checagem decide a tradução em 1 Coríntios e nos Salmos.`),
  vocab: [
    V('كَاتِب', 'كتب', 'escritor'),
    V('مَكْتُوب', 'كتب', 'escrito'),
    V('كِتَابَة', 'كتب', 'escrita'),
    V('عَالِم', 'علم', 'sábio; conhecedor'),
    V('حَافِظ', 'حفظ', 'guardião'),
    V('مَحْبُوب', 'حب', 'amado'),
    V('مُبَارَك', 'بارك', 'bendito'),
    V('إِيمَان', 'آمن', 'fé'),
    V('عِلْم', 'علم', 'conhecimento'),
    V('حَمْد', 'حمد', 'louvor'),
    V('طُوبَى', 'طوبى', 'bem-aventurança'),
    V('آمَنُوا', 'آمن', 'creram'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o particípio ativo de {كتب}?'),
    options: [T('مَكْتُوب'), T('كَاتِب'), T('كِتَابَة'), T('كِتَاب')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Associe forma e função.'),
      pairs: [
        { a: T('كَاتِب'), b: T('participio activo') },
        { a: T('مَكْتُوب'), b: T('participio passivo') },
        { a: T('كِتَابَة'), b: T('nome verbal') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete {ال___}: {الْحَمْدُ} significa “o louvor”.'),
      answer: 'حَمْدُ',
      hint: T('É o nome verbal de louvar.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {رَحْمَةُ اللهِ}, qual palavra é regida?'),
      options: [T('رَحْمَةُ'), T('اللهِ'), T('رَحِمَ'), T('اللهَ')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O particípio ativo indica atividade presente; o passivo indica resultado ou estado resultante.',
      ),
    },
    {
      n: '2',
      text: T(
        'O nome verbal dá o evento abstrato e pode reger o objeto como o verbo de onde deriva.',
      ),
    },
    { n: '3', text: T('A preposição {لِ} transforma “misericórdia” em “ter misericórdia”.') },
  ],
  notes: [
    {
      label: T('Nota'),
      text: T(
        'Nem todo nome verbal pertence rigorosamente a uma única forma; a nomenclatura didática simplifica Traditionally.',
      ),
    },
  ],
  examples: [
    { text: 'كَاتِبٌ جَدِيدٌ', gloss: T('um escritor novo') },
    { text: 'كِتَابَةٌ مُبْدَعَةٌ', gloss: T('uma escrita criativa') },
    { text: 'الْحَمْدُ لِلَّهِ', gloss: T('o louvor é a Deus') },
  ],
  tables: [
    {
      caption: T('Derivados de كتب'),
      head: [T('Categoria'), T('Padrão'), T('Resultado')],
      rows: [
        ['particípio ativo', 'فَاعِل', 'كَاتِب: quem escreve'],
        ['particípio passivo', 'مَفْعُول', 'مَكْتُوب: que foi escrito'],
        ['nome verbal', 'مَفْعَالَة / مَفْعِل', 'كِتَابَة: ato de escrever'],
        ['nome verbal', 'فِعْلَة', 'صَلَاة: oração'],
      ],
    },
  ],
};
