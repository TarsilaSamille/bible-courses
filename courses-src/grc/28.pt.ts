import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Numerais e tempo'),
  subtitle: T('εἷς, δύο, τρεῖς — e como o grego marca as horas'),
  section: T('Sintaxe'),
  body: C(`## Contar até quatro (que declinam)

Só os cardinais de 1 a 4 declinam; de 5 em diante são invariáveis. {εἷς, μία, ἕν} «um» declina como adjetivo pronominal (genitivo {ἑνός, μιᾶς, ἑνός}); {δύο} «dois» é indeclinável no koiné (relíquia do dual antigo); {τρεῖς, τρία} «três» e {τέσσαρες, τέσσαρα} «quatro» seguem a 3ª declinação (genitivo {τριῶν}, {τεσσάρων} — com o {-ῶν} conhecido).

A sequência invariável decora-se em bloco rítmico: {πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα} (5–10), {ἕνδεκα, δώδεκα} (11–12, este último com forma própria declinável em Atos), {εἴκοσι} (20), {ἑκατόν} (100), {χίλιοι} (1000, declinável como adjetivo: {χίλια} neutro plural em Ap 20.2).

## Ordinais e frações do tempo

Os ordinais levam artigo e declinam 2-1-2: {πρῶτος} «primeiro», {δεύτερος}, {τρίτος} — {τῇ ἡμέρᾳ τῇ τρίτῃ} «ao terceiro dia» (Jo 2.1, Caná; repare o artigo repetido: posição atributiva, cap. 4). {ἔσχατος} «último» e {μέσος} «meio» completam a escala ({ἔσονται οἱ ἔσχατοι πρῶτοι} «os últimos serão primeiros», Mt 19.30).

{πρῶτος} com genitivo partitivo conta posição: {πρῶτός μου} «primeiro [antes] de mim» (Jo 1.15, {πρῶτός μου ἦν} «era antes de mim» — precedência, não cronologia). E {μία} + genitivo plural data a semana: {μιᾷ τῶν σαββάτων} «no primeiro [dia] da semana» (Jo 20.1, a ressurreição; {σάββατον} = «sábado/semana»).

## As horas e os dias

O dia judaico começa ao pôr do sol; as horas contam-se do nascer: {ὥρα ἦν ὡς δεκάτη} «era cerca da hora décima» (Jo 1.39 — décima hora ≈ 4 da tarde). {νύξ} «noite» × {ἡμέρα} «dia»; {ὀψία} «tardia» ({ὀψίας γενομένης}, cap. 23); {πρωῒ} «cedo» ({λίαν πρωῒ} «bem cedo», Mc 16.2).

Duas medidas famosas: {τεσσεράκοντα ἡμέρας} «quarenta dias» (jejum, Mt 4.2; dilúvio, tentação — o número da provação) e {ἑβδομήκοντα} «setenta» (Lc 10.1, os setenta enviados). Números no texto bíblico raramente são só números: quarenta prova, sete completa, doze governa, mil amplia.`),
  vocab: [
    V('εἷς', 'εἷς', 'um'),
    V('μία', 'εἷς', 'uma'),
    V('δύο', 'δύο', 'dois'),
    V('τρεῖς', 'τρεῖς', 'três'),
    V('τέσσαρες', 'τέσσαρες', 'quatro'),
    V('ἑπτά', 'ἑπτά', 'sete'),
    V('δέκα', 'δέκα', 'dez'),
    V('δώδεκα', 'δώδεκα', 'doze'),
    V('ἑκατόν', 'ἑκατόν', 'cem'),
    V('χίλιοι', 'χίλιοι', 'mil'),
    V('πρῶτος', 'πρῶτος', 'primeiro'),
    V('τρίτος', 'τρίτος', 'terceiro'),
    V('ὥρα', 'ὥρα', 'hora'),
    V('σάββατον', 'σάββατον', 'sábado, semana'),
    V('νύξ', 'νύξ', 'noite'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ὥρα ἦν ὡς δεκάτη» (Jo 1.39) corresponde a…'),
    options: [
      T('Cerca de 16h (10ª hora do nascer do sol)'),
      T('10h da manhã em ponto'),
      T('Meia-noite'),
      T('Hora indeterminada'),
    ],
    answer: 0,
    hint: T('Some 6 às horas dadas — regra §3.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: τρι___ («de três»).'),
      answer: 'ῶν',
      hint: T('τρεῖς segue a 3ª: genitivo em -ῶν.'),
    },
    {
      kind: 'choose',
      prompt: T('«μιᾷ τῶν σαββάτων» (Jo 20.1) significa…'),
      options: [
        T('No primeiro dia da semana'),
        T('Num dos sábados do ano'),
        T('Durante o sábado'),
        T('Mil sábados'),
      ],
      answer: 0,
      hint: T('σάββατον = sábado e semana — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada numeral ao seu valor.'),
      pairs: [
        { a: 'ἑπτά', b: '7' },
        { a: 'τεσσεράκοντα', b: '40' },
        { a: 'ἑκατόν', b: '100' },
        { a: 'δώδεκα', b: '12' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Declinam só 1–4 ({εἷς}, {δύο} invariável no koiné, {τρεῖς}, {τέσσαρες}). De 5 em diante, forma única.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ordinais com artigo, 2-1-2 ({πρῶτος}, {τρίτος}). Artigo repetido = atributivo, como nos adjetivos.',
      ),
    },
    {
      n: '3',
      text: T(
        'Horas contam do nascer do sol: 1ª ≈ 6h, 6ª ≈ meio-dia, 10ª ≈ 16h. Some 6 às horas dadas.',
      ),
    },
    {
      n: '4',
      text: T('{σάββατον} = sábado e semana: {μιᾷ τῶν σαββάτων} «no primeiro dia da semana».'),
    },
  ],
  notes: [
    {
      label: T('Hora sexta:'),
      text: T(
        '{ὥρα ἦν ὡς ἕκτη} «era cerca da hora sexta» (Jo 4.6; 19.14) = meio-dia, o calor máximo — detalhe narrativo, não relógio de ponto. João marca horas em encontros decisivos (Nicodemos à noite, a samaritana ao meio-dia).',
      ),
    },
    {
      label: T('δὶς μύριοι:'),
      text: T(
        'Apocalipse conta multidões em miríades ({δὶς μυριάδες μυριάδων} «duas miríades de miríades», Ap 9.16). {μυριάς} «dez mil» declina como substantivo — o grego conta grandes números por pacotes de dez mil.',
      ),
    },
  ],
  examples: [
    { text: '{εἷς κύριος}', gloss: T('um Senhor (Ef 4.5)') },
    { text: '{δύο ψάρια}', gloss: T('dois peixes (Mc 6.38)') },
    { text: '{τρεῖς ἡμέρας}', gloss: T('três dias (acusativo de duração)') },
    { text: '{τῇ ἡμέρᾳ τῇ τρίτῃ}', gloss: T('ao terceiro dia (Jo 2.1)') },
    { text: '{ὥρα ἦν ὡς δεκάτη}', gloss: T('era cerca da hora décima (Jo 1.39)') },
    { text: '{μιᾷ τῶν σαββάτων}', gloss: T('no primeiro dia da semana (Jo 20.1)') },
    { text: '{τεσσεράκοντα ἡμέρας}', gloss: T('quarenta dias (Mt 4.2)') },
    { text: '{ἑβδομήκοντα}', gloss: T('setenta (Lc 10.1)') },
    { text: '{πρῶτός μου ἦν}', gloss: T('era antes de mim (Jo 1.15)') },
    { text: '{χίλια ἔτη}', gloss: T('mil anos (Ap 20.2)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — εἷς, τρεῖς, τέσσαρες'),
      head: [
        T('Caso'),
        {
          0: 'ε',
          1: 'ἷ',
          2: 'ς',
          3: ' ',
          4: '(',
          5: 'm',
          6: '.',
          7: '/',
          8: 'f',
          9: '.',
          10: '/',
          11: 'n',
          12: '.',
          13: ')',
        },
        { 0: 'τ', 1: 'ρ', 2: 'ε', 3: 'ῖ', 4: 'ς' },
        { 0: 'τ', 1: 'έ', 2: 'σ', 3: 'σ', 4: 'α', 5: 'ρ', 6: 'ε', 7: 'ς' },
      ],
      rows: [
        [T('Nominativo'), '{εἷς} / {μία} / {ἕν}', '{τρεῖς} / {τρία}', 'τέσσαρες / τέσσαρα'],
        [T('Genitivo'), 'ἑνός / μιᾶς / ἑνός', '{τριῶν}', 'τεσσάρων'],
        [T('Dativo'), 'ἑνί / μιᾷ / ἑνί', 'τρισί', 'τέσσαρσι'],
        [T('Acusativo'), 'ἕνα / μίαν / ἕν', 'τρεῖς / τρία', 'τέσσαρας / τέσσαρα'],
      ],
    },
    {
      caption: T('Tabela 2 — Invariáveis 5–12 e grandes'),
      head: [
        T('Número'),
        T('Forma'),
        {
          0: 'E',
          1: 'x',
          2: 'e',
          3: 'm',
          4: 'p',
          5: 'l',
          6: 'o',
          7: ' ',
          8: 'n',
          9: 'o',
          10: ' ',
          11: 't',
          12: 'e',
          13: 'x',
          14: 't',
          15: 'o',
        },
      ],
      rows: [
        ['5–10', '{πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα}', '{δέκα παρθένοι} (Mt 25.1)'],
        ['11–12', '{ἕνδεκα, δώδεκα}', '{δώδεκα μαθηταί}'],
        ['20 / 100', '{εἴκοσι / ἑκατόν}', '{ἑκατὸν πρόβατα} (Mt 18.12)'],
        ['40 / 70', '{τεσσεράκοντα / ἑβδομήκοντα}', '{τεσσεράκοντα ἡμέρας}'],
        ['1000', '{χίλιοι} (declinável!)', '{χίλια ἔτη} (Ap 20.2)'],
      ],
    },
  ],
};
