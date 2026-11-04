import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Aoristo segundo'),
  subtitle: T('ἔλιπον, εἶδον, ἔγνων: o aoristo sem sigma'),
  section: T('O verbo'),
  body: C(`## O outro aoristo

Nem todo aoristo usa {σ}. Uma família de verbos — justamente os mais frequentes — forma o passado perfectivo com outro tema, sem sigma, mas com as mesmas terminações secundárias do imperfeito: {ἔλιπον, ἔλιπες, ἔλιπε, ἐλίπομεν, ἐλίπετε, ἔλιπον}. É o aoristo segundo (ou forte), contra o aoristo primeiro (sigmático) do cap. 7.

Como não há sigma para denunciar o tempo, o dicionário precisa informar o tema: os tempos principais do verbo passam a ser seis peças (presente, futuro, aoristo, perfeito…). {λέγω} → {ἐρῶ}, {εἶπον}, {εἴρηκα}; {ὁράω} → {ὄψομαι}, {εἶδον}, {ἑώρακα}. Sem os tempos principais, o aoristo 2º é imprevisível — decore-os.

## Os seis gigantes (e amigos)

Seis verbos respondem pela maioria dos aoristos 2º do Novo Testamento: {λείπω} → {ἔλιπον} «deixei»; {ὁράω} → {εἶδον} «vi» (com aumento sobre o tema {ἰδ-}: {ἐ-ἰδ-ον}); {γινώσκω} → {ἔγνων} «conheci»; {ἔχω} → {ἔσχον} «tive»; {λαμβάνω} → {ἔλαβον} «tomei»; {πάσχω} → {ἔπαθον} «sofri».

Junte-se a eles: {φέρω} → {ἤνεγκον} «trouxe» (o mais irregular de todos, com três temas: {φερ-}, {ἐνεγκ-}, {ἐνεχθ-}); {ἐσθίω} → {ἔφαγον} «comi»; {πίνω} → {ἔπιον} «bebi»; {πίπτω} → {ἔπεσον} «caí»; {φεύγω} → {ἔφυγον} «fugi»; {εὑρίσκω} → {εὗρον} «achei».

## Reconhecer sem decorar tudo

Três pistas entregam o aoristo 2º. Primeira: aumento + tema diferente do presente + terminações de imperfeito ({ἔ-λαβ-ον} contra {λαμβάν-ω}). Segunda: o infinitivo em {-εῖν} ({λιπεῖν}, {ἰδεῖν}, {λαβεῖν}, {παθεῖν}) — só o aoristo 2º tem essa cara. Terceira: o particípio em {-ών, -οῦσα, -όν} ({λιπών}, {ἰδών}, {λαβών}) — inconfundível.

Na leitura, {εἶδον} e {ἔλαβεν} aparecem centenas de vezes (Ceia: {λαβὼν ἄρτον} «tendo tomado pão», Mt 26.26; ressurreição: {εἶδον τὸν κύριον} «vi o Senhor», Jo 20.25). Cada gigante fixado destrava páginas inteiras.`),
  vocab: [
    V('ἔλιπον', 'λείπω', 'deixei'),
    V('εἶδον', 'ὁράω', 'vi'),
    V('ἔγνων', 'γινώσκω', 'conheci'),
    V('ἔσχον', 'ἔχω', 'tive'),
    V('ἔλαβον', 'λαμβάνω', 'tomei'),
    V('ἔπαθον', 'πάσχω', 'sofri'),
    V('εἶπον', 'λέγω', 'disse'),
    V('ἤνεγκον', 'φέρω', 'trouxe'),
    V('ἔφαγον', 'ἐσθίω', 'comi'),
    V('ἔπιον', 'πίνω', 'bebi'),
    V('ἔπεσον', 'πίπτω', 'caí'),
    V('εὗρον', 'εὑρίσκω', 'achei'),
    V('λαβών', 'λαμβάνω', 'tendo tomado'),
    V('ἰδών', 'ὁράω', 'tendo visto'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἔλαβον» é aoristo 2º (e não imperfeito) porque…'),
    options: [
      T('Usa outro tema (λαβ-) que o presente (λαμβαν-)'),
      T('Tem sigma'),
      T('Não tem aumento'),
      T('Termina em -ον'),
    ],
    answer: 0,
    hint: T('Mesmas terminações do imperfeito, tema diferente — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o infinitivo do aoristo 2º: λαβ___ («ter tomado»).'),
      answer: 'εῖν',
      hint: T('Infinitivo do aoristo 2º termina em -εῖν — regra §2.'),
    },
    {
      kind: 'choose',
      prompt: T('«εἶδον τὸν κύριον» (Jo 20.25): o verbo ver está no…'),
      options: [
        T('Aoristo 2º de ὁράω'),
        T('Imperfeito de βλέπω'),
        T('Aoristo 1º de ὁράω'),
        T('Perfeito de βλέπω'),
      ],
      answer: 0,
      hint: T('Supletivismo ὁράω/βλέπω: aoristo = εἶδον.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada aoristo ao seu presente.'),
      pairs: [
        { a: 'ἔσχον', b: 'ἔχω' },
        { a: 'ἔπαθον', b: 'πάσχω' },
        { a: 'εἶπον', b: 'λέγω' },
        { a: 'ἤνεγκον', b: 'φέρω' },
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
        'Aoristo 2º = aumento + tema próprio (sem σ) + terminações do imperfeito. O tema não se deduz: decore os tempos principais.',
      ),
    },
    {
      n: '2',
      text: T(
        'Infinitivo em -εῖν ({λαβεῖν}) e particípio em -ών ({λαβών}) são exclusivos do aoristo 2º.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os seis gigantes ({ἔλιπον}, {εἶδον}, {ἔγνων}, {ἔσχον}, {ἔλαβον}, {ἔπαθον}) cobrem a maioria das ocorrências.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sentido idêntico ao aoristo 1º (ato concluído). A diferença é só morfológica, nunca semântica.',
      ),
    },
  ],
  notes: [
    {
      label: T('λέγω triplo:'),
      text: T(
        '{λέγω} tem três passados em uso: imperfeito {ἔλεγεν} («ia dizendo»), aoristo 2º {εἶπον} («disse») e perfeito {εἴρηκα} («tenho dito»). Três temas ({λεγ-}, {ἐπ-}, {ἐρ-}) para um só verbo — o supletivismo em estado puro.',
      ),
    },
    {
      label: T('ὁράω × βλέπω:'),
      text: T(
        'No presente, «ver» é {βλέπω}; no aoristo, é {εἶδον} (de {ὁράω}). Os dois verbos dividem o paradigma como se fossem um — outro supletivismo para decorar em bloco.',
      ),
    },
  ],
  examples: [
    { text: '{εἶδον τὸν κύριον}', gloss: T('vi o Senhor (Jo 20.25)') },
    { text: '{λαβὼν ἄρτον}', gloss: T('tendo tomado pão (Mt 26.26)') },
    { text: '{ἔπαθεν ὑπὲρ ὑμῶν}', gloss: T('sofreu por vós (1Pe 2.21)') },
    { text: '{ἔσχον χαρὰν}', gloss: T('tive alegria (3Jo 4)') },
    { text: '{ἔγνω αὐτόν}', gloss: T('conheceu-o (Jo 1.10)') },
    { text: '{ἤνεγκαν αὐτῷ}', gloss: T('trouxeram-lhe (de φέρω; Mc 1.32)') },
    { text: '{ἔφαγον καὶ ἐχορτάσθησαν}', gloss: T('comeram e fartaram-se (Mc 6.42)') },
    { text: '{ἔπεσεν ἐπὶ πρόσωπον}', gloss: T('caiu sobre o rosto (Mt 26.39)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('acharam o menino (Mt 2.11)') },
    { text: '{ἰδὲ ὁ ἀμνός}', gloss: T('eis o Cordeiro! (imperativo; Jo 1.29)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Aoristo 2º de λείπω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{ἔλιπον}', 'deixei'],
        ['2ª sg.', '{ἔλιπες}', 'deixaste'],
        ['3ª sg.', '{ἔλιπε(ν)}', 'deixou'],
        ['1ª pl.', '{ἐλίπομεν}', 'deixamos'],
        ['2ª pl.', '{ἐλίπετε}', 'deixastes'],
        ['3ª pl.', '{ἔλιπον}', 'deixaram'],
      ],
    },
    {
      caption: T('Tabela 2 — Os gigantes e seus temas'),
      head: [
        T('Presente'),
        { 0: 'A', 1: 'o', 2: 'r', 3: 'i', 4: 's', 5: 't', 6: 'o', 7: ' ', 8: '2', 9: 'º' },
        T('Sentido'),
      ],
      rows: [
        ['{λείπω}', '{ἔλιπον}', 'deixei'],
        ['{ὁράω}', '{εἶδον}', 'vi'],
        ['{γινώσκω}', '{ἔγνων}', 'conheci'],
        ['{ἔχω}', '{ἔσχον}', 'tive'],
        ['{λαμβάνω}', '{ἔλαβον}', 'tomei'],
        ['{πάσχω}', '{ἔπαθον}', 'sofri'],
      ],
    },
    {
      caption: T('Tabela 3 — Formas nominais do aoristo 2º'),
      head: [T('Forma'), T('Exemplo'), T('Pista')],
      rows: [
        ['Infinitivo', '{λιπεῖν}, {ἰδεῖν}', 'terminação -εῖν'],
        ['Particípio masc.', '{λιπών}, {ἰδών}', '-ών, -οῦσα, -όν'],
        ['Imperativo 2ª sg.', '{λάβε}, {ἰδέ}', 'forma curta, sem σ'],
      ],
    },
  ],
};
