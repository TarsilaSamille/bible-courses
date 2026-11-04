import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('O perfeito'),
  subtitle: T('λέλυκα, γέγραπται: o passado que continua valendo'),
  section: T('O verbo'),
  body: C(`## Estado presente, ação passada

O perfeito grego funde dois tempos num só: descreve um estado presente resultante de ação passada. {γέγραπται} «está escrito» — alguém escreveu (passado) e o texto continua valendo (presente). {ἕστηκα} «estou de pé» — pus-me de pé (passado) e permaneço (presente). {οἶδα} «sei» — vi (passado) e sei (presente).

É por isso que o perfeito traduz tão bem fórmulas de autoridade: {γέγραπται} (Mt 4.4) não informa que «escreveram», mas que «está escrito e vale»; {εἴρηκα} «tenho dito» (Jo 14.25) sela a palavra como definitiva; {πεπίστευκα} «tenho crido e creio» (Jo 6.69) confessa fé permanente.

## A reduplicação

A marca do perfeito é a reduplicação: a consoante inicial se repete com {ε}. {λυ-} → {λε-λυ-κα}; {γραφ-} → {γε-γραφ-α}; {πεμπ-} → {πε-πομφ-α} (com a consoante aspirada correspondente: φ→π, θ→τ, χ→κ). Verbos em vogal alongam a inicial em vez de reduplicar ({ἀγαπάω} → {ἠγάπηκα}); verbos em {ζ} ou compostos com preposição usam aumento + reduplicação interna ({ζητέω} → {ἐζήτηκα}).

As desinências ativas são próprias: {-κα, -κας, -κε, -καμεν, -κατε, -κασι}. O infinitivo {λελυκέναι} e o particípio {λελυκώς, λελυκυῖα, λελυκός} completam o sistema — o particípio perfeito, declinado como adjetivo, pinta estados resultantes ({ἑστώς} «de pé», At 7.55).

## Os tempos do sistema perfeito

O sistema tem três tempos. O perfeito ({λέλυκα}) é o estado presente. O mais-que-perfeito ({ἐλελύκειν}) é o estado passado: «tinha libertado / estava liberto» — com aumento e terminações secundárias, como um imperfeito do perfeito. O futuro perfeito («terei libertado») é raríssimo no Novo Testamento e pode ser ignorado na leitura.

Na voz média, o perfeito dispensa conectivos: tema + desinências médias diretamente ({λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}). {γέγραπται} e {πεπλήρωται} «está cumprido» são os dois exemplos que você encontrará toda semana. O sistema médio-passivo completo fica para o cap. 20.

## Os perfeitos que viraram presente

Alguns perfeitos se lexicalizaram com sentido de presente e ganharam vida própria: {οἶδα} «sei» (cap. 11), {ἕστηκα} «estou de pé» (cap. 12), {πέποιθα} «confio» (de {πείθω}, «ter-se persuadido» = «confiar»), {γέγονα} «tenho-me tornado / sou» (de {γίνομαι}), {μέμνημαι} «lembro-me» (médio, de {μιμνήσκω}). Eles provam a lógica do tempo: o perfeito descreve tão bem estados que alguns viraram estados permanentes da língua.`),
  vocab: [
    V('λέλυκα', 'λύω', 'tenho libertado'),
    V('λέλυκε', 'λύω', 'tem libertado'),
    V('λέλυμαι', 'λύω', 'estou liberto'),
    V('λέλυται', 'λύω', 'está liberto'),
    V('λελυκώς', 'λύω', 'tendo libertado'),
    V('γέγραπται', 'γράφω', 'está escrito'),
    V('γέγραφα', 'γράφω', 'tenho escrito'),
    V('πεπίστευκα', 'πιστεύω', 'tenho crido'),
    V('ἕστηκα', 'ἵστημι', 'estou de pé'),
    V('πέποιθα', 'πείθω', 'confio'),
    V('γέγονα', 'γίνομαι', 'tenho-me tornado'),
    V('οἶδα', 'οἶδα', 'sei'),
    V('τετέλεσται', 'τελέω', 'está consumado'),
    V('πεπλήρωται', 'πληρόω', 'está cumprido'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«γέγραπται» (Mt 4.4) traduz-se melhor por…'),
    options: [
      T('«Está escrito» (estado presente)'),
      T('«Escreveram» (ato passado)'),
      T('«Escreverão» (futuro)'),
      T('«Escrevei!» (ordem)'),
    ],
    answer: 0,
    hint: T('Perfeito = estado presente de ação passada — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do singular: λέλυ___ («tem libertado»).'),
      answer: 'κε',
      hint: T('Desinências próprias: -κα, -κας, -κε…'),
    },
    {
      kind: 'choose',
      prompt: T('A reduplicação de «γέγραφα» é…'),
      options: [
        T('γε- (consoante + ε)'),
        T('γη- (alongamento)'),
        T('ἐ-γε (aumento duplo)'),
        T('Não há reduplicação'),
      ],
      answer: 0,
      hint: T('Consoante inicial + ε — regra §2.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu tempo.'),
      pairs: [
        { a: 'λέλυκα', b: 'perfeito' },
        { a: 'ἐλελύκει', b: 'mais-que-perfeito' },
        { a: 'λέλυται', b: 'perfeito médio' },
        { a: 'ἔλυσε', b: 'aoristo' },
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
        'Perfeito = estado presente de ação passada. Traduza pelo estado («está escrito»), não pelo ato («escreveram»).',
      ),
    },
    {
      n: '2',
      text: T(
        'Reduplicação: consoante inicial + ε ({λελυ-}, {γεγραφ-}); vogal inicial alonga ({ἠγάπηκα}); ζ-verbos usam ἐ- + tema ({ἐζήτηκα}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Desinências ativas próprias: -κα, -κας, -κε, -καμεν, -κατε, -κασι. O -κ- denuncia o tempo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Mais-que-perfeito = perfeito + aumento + terminações secundárias («tinha libertado»).',
      ),
    },
    {
      n: '5',
      text: T(
        'Perfeito médio sem conectivo: {λέλυμαι}, {γέγραπται}, {πεπλήρωται}. As formas médias mais úteis do NT.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tradução:'),
      text: T(
        'O português raramente tem «está escrito» para {γέγραπται} sem soar bíblico — e é exatamente esse o registro: fórmula solene de citação. Mantenha a solenidade; «foi escrito» apaga o efeito.',
      ),
    },
    {
      label: T('Intensivo:'),
      text: T(
        'O perfeito com advérbios de intensidade pinta estados consumados: {τετέλεσται} «está consumado!» (Jo 19.30) — a última palavra da cruz, em perfeito passivo. O tempo é a teologia.',
      ),
    },
  ],
  examples: [
    { text: '{γέγραπται}', gloss: T('está escrito (Mt 4.4; fórmula de autoridade)') },
    { text: '{εἴρηκα ὑμῖν}', gloss: T('tenho-vos dito (Jo 14.25; palavra selada)') },
    { text: '{πεπίστευκα}', gloss: T('tenho crido e creio (Jo 6.69)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('estou de pé diante (At 26.16)') },
    { text: '{πέποιθα ἐπὶ κύριον}', gloss: T('confio no Senhor (Fp 2.24)') },
    { text: '{γέγονα Ἰουδαίοις}', gloss: T('tenho-me feito judeu (1Co 9.20)') },
    { text: '{πεπλήρωται ὁ καιρός}', gloss: T('cumpriu-se o tempo (Mc 1.15)') },
    { text: '{μεμένηκεν}', gloss: T('permanece (de μένω; Jo 8.31)') },
    { text: '{ᾔδεισαν αὐτόν}', gloss: T('conheciam-no (mais-que-perfeito; Lc 24.16)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('de pé à direita (particípio; At 7.55)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Perfeito ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λέλυκα}', 'tenho libertado'],
        ['2ª sg.', '{λέλυκας}', 'tens libertado'],
        ['3ª sg.', '{λέλυκε(ν)}', 'tem libertado'],
        ['1ª pl.', '{λελύκαμεν}', 'temos libertado'],
        ['2ª pl.', '{λελύκατε}', 'tendes libertado'],
        ['3ª pl.', '{λελύκασι(ν)}', 'têm libertado'],
      ],
    },
    {
      caption: T('Tabela 2 — Perfeito médio de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λέλυμαι}', 'estou liberto'],
        ['2ª sg.', 'λέλυσαι', 'estás liberto'],
        ['3ª sg.', '{λέλυται}', 'está liberto'],
        ['1ª pl.', 'λελύμεθα', 'estamos libertos'],
        ['2ª pl.', 'λέλυσθε', 'estais libertos'],
        ['3ª pl.', 'λέλυνται', 'estão libertos'],
      ],
    },
    {
      caption: T('Tabela 3 — Mais-que-perfeito ativo e médio'),
      head: [T('Pessoa'), T('Ativo'), T('Médio')],
      rows: [
        ['1ª sg.', '{ἐλελύκειν}', 'ἐλελύμην'],
        ['3ª sg.', '{ἐλελύκει}', 'ἐλέλυτο'],
        ['3ª pl.', 'ἐλελύκεσαν', 'ἐλέλυντο'],
      ],
    },
  ],
};
