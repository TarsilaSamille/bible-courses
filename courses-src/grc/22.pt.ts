import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Particípio presente'),
  subtitle: T('λύων, λύουσα, λῦον: o verbo que declina'),
  section: T('O verbo'),
  body: C(`## A forma mais usada do Novo Testamento

O particípio presente é a forma verbal mais frequente do Novo Testamento depois do indicativo: {λέγων}, {πιστεύων}, {ἀκούοντες}, {ὤν}. Ele usa o tema do presente e indica ação simultânea à do verbo principal — «dizendo», «crendo», «sendo». Quem domina este capítulo lê metade das frases subordinadas do texto.

## Morfologia: dois modelos

O particípio ativo segue a 3ª declinação no masculino e no neutro, e a 1ª no feminino. Tema {λυοντ-}: nominativo {λύων} (masc.), {λύουσα} (fem.), {λῦον} (neutro); genitivo {λύοντος}, {λυούσης}, {λύοντος}; plural {λύοντες}, {λύουσαι}, {λύοντα}. O {-ντ-} do tema aparece em todos os casos menos no nominativo masculino singular — a regra de ouro do cap. 13 aplicada ao verbo.

O particípio médio é manso: declina-se como adjetivo 2-1-2 (cap. 4): {λυόμενος, λυομένη, λυόμενον}, genitivo {λυομένου, λυομένης, λυομένου}. Verbos depoentes usam-no com sentido ativo: {ἐρχόμενος} «vindo», {πορευόμενος} «indo», {ἀποκρινόμενος} «respondendo».

## Os três empregos (com os oito usos circunstanciais)

Primeiro, adjetival: concorda com o substantivo e o qualifica — {ὁ λόγος ὁ μένων} «a palavra que permanece» (Jo 5.38). Segundo, substantivado com artigo: {ὁ πιστεύων} «o que crê», {οἱ ἀκούοντες} «os que ouvem», {τὰ ὄντα} «as coisas existentes».

Terceiro, o circunstancial (adverbial) — o mais rico. Sem conjunção, o particípio comprime uma oração inteira, e o contexto diz qual: temporal ({πορευόμενοι ἐκήρυσσον} «indo, pregavam» = «enquanto iam»), causal ({εἰδὼς ὅτι} «sabendo que» = «porque sabia»), concessivo ({ὢν υἱός} «sendo Filho, ainda assim…», Hb 5.8), condicional, modal ({χαίροντες} «com alegria»), final, de meio e de circunstância concomitante ({ἦλθεν κηρύσσων} «veio pregando»).

## O presente simultâneo

Regra de tempo relativo: o particípio presente é simultâneo ao verbo principal, seja ele qual for. {λέγων} acompanha verbos de dizer no mesmo instante; {βλέποντες οὐ βλέπουσιν} «vendo, não veem» (Mt 13.13, presente + presente); {πιστεύων ἔχει} «quem crê tem» (Jo 3.36, crer e ter simultâneos). Se a ação é anterior, o grego usa o aoristo (cap. 22) — a escolha do tempo do particípio é informação, não enfeite.`),
  vocab: [
    V('λύων', 'λύω', 'o que liberta'),
    V('λύουσα', 'λύω', 'a que liberta'),
    V('λῦον', 'λύω', 'o que liberta (neut.)'),
    V('λύοντος', 'λύω', 'do que liberta'),
    V('λύοντες', 'λύω', 'os que libertam'),
    V('λυόμενος', 'λύω', 'libertando-se'),
    V('πιστεύων', 'πιστεύω', 'o que crê'),
    V('ἀκούοντες', 'ἀκούω', 'os que ouvem'),
    V('λέγων', 'λέγω', 'dizendo'),
    V('ὤν', 'εἰμί', 'sendo'),
    V('ὄντος', 'εἰμί', 'de sendo'),
    V('ἐρχόμενος', 'ἔρχομαι', 'vindo'),
    V('μένων', 'μένω', 'permanecendo'),
    V('κηρύσσων', 'κηρύσσω', 'pregando'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«λύοντος» está em que caso, e por quê?'),
    options: [
      T('Genitivo (tema -ντ- da 3ª declinação)'),
      T('Dativo (iota subscrito)'),
      T('Acusativo plural'),
      T('Nominativo feminino'),
    ],
    answer: 0,
    hint: T('O -ντ- do tema aparece fora do nominativo — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o nominativo feminino: λύου___ («a que liberta»).'),
      answer: 'σα',
      hint: T('Feminino da 1ª declinação: -σα.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἦλθεν κηρύσσων» (Mc 1.39): o particípio é…'),
      options: [
        T('Circunstancial concomitante («veio pregando»)'),
        T('Genitivo absoluto'),
        T('Substantivado'),
        T('Predicativo do objeto'),
      ],
      answer: 0,
      hint: T('Mesmo sujeito, ação simultânea que acompanha — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua análise.'),
      pairs: [
        { a: 'λύοντος', b: 'gen. masc.' },
        { a: 'λύουσα', b: 'nom. fem.' },
        { a: 'λυόμενον', b: 'ac. médio' },
        { a: 'ὄντα', b: 'ac. de εἰμί' },
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
        'Particípio ativo presente: tema + -ντ- (3ª declinação no masc./neutro, 1ª no fem.). O -ντ- some só no nominativo masc. sg.',
      ),
    },
    {
      n: '2',
      text: T(
        'Particípio médio: 2-1-2 manso ({-μενος, -μενη, -μενον}). Depoentes usam-no com sentido ativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tempo relativo: presente = simultâneo ao verbo principal, qualquer que seja o tempo dele.',
      ),
    },
    {
      n: '4',
      text: T(
        'Três empregos: adjetival, substantivado (com artigo) e circunstancial (oito usos, sem conjunção).',
      ),
    },
    {
      n: '5',
      text: T(
        'O particípio concorda com o dono da ação em gênero, número e caso — a pista para achar o sujeito dele.',
      ),
    },
  ],
  notes: [
    {
      label: T('Genitivo absoluto:'),
      text: T(
        'Se o dono da ação do particípio NÃO é o sujeito da oração, ele vem em genitivo absoluto — construção do próximo capítulo. {λύοντος αὐτοῦ} «enquanto ele libertava».',
      ),
    },
    {
      label: T('ὤν onipresente:'),
      text: T(
        'O particípio de {εἰμί} ({ὤν, οὖσα, ὄν}, gen. {ὄντος}) aparece em fórmulas como {τὰ ὄντα} «as coisas existentes» (Rm 4.17) e {ὁ ὢν} «o que é» (Ap 1.4). Decore o paradigma inteiro.',
      ),
    },
  ],
  examples: [
    { text: '{ὁ πιστεύων}', gloss: T('o que crê (substantivado; Jo 3.16)') },
    { text: '{οἱ ἀκούοντες}', gloss: T('os que ouvem (plural substantivado)') },
    { text: '{ἦλθεν κηρύσσων}', gloss: T('veio pregando (concomitante; Mc 1.39)') },
    { text: '{βλέποντες οὐ βλέπουσιν}', gloss: T('vendo, não veem (Mt 13.13)') },
    { text: '{πιστεύων ἔχει}', gloss: T('quem crê tem (simultâneo; Jo 3.36)') },
    { text: '{ὢν υἱός}', gloss: T('sendo Filho (concessivo; Hb 5.8)') },
    { text: '{ὁ λόγος ὁ μένων}', gloss: T('a palavra que permanece (adjetival; Jo 5.38)') },
    { text: '{πορευόμενοι ἐκήρυσσον}', gloss: T('indo, pregavam (temporal; Mc 16.20)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('dizendo-lhes (transição narrativa)') },
    { text: '{ἐρχόμενος πρὸς αὐτόν}', gloss: T('vindo ter com ele (depoente; Jo 3.2)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Particípio presente ativo de λύω'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{λύων}', '{λύουσα}', '{λῦον}'],
        [T('Genitivo'), '{λύοντος}', 'λυούσης', '{λύοντος}'],
        [T('Dativo'), 'λύοντι', 'λυούσῃ', 'λύοντι'],
        [T('Acusativo'), 'λύοντα', 'λύουσαν', '{λῦον}'],
      ],
    },
    {
      caption: T('Tabela 2 — Particípio presente médio de λύω'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{λυόμενος}', '{λυομένη}', '{λυόμενον}'],
        [T('Genitivo'), 'λυομένου', 'λυομένης', 'λυομένου'],
        [T('Acusativo'), 'λυόμενον', 'λυομένην', '{λυόμενον}'],
      ],
    },
  ],
};
