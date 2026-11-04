import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Particípios aoristo e perfeito'),
  subtitle: T('λύσας, λυθείς, λελυκώς: o passado que acompanha'),
  section: T('O verbo'),
  body: C(`## O aoristo anterior

Se o particípio presente é simultâneo (cap. 21), o particípio aoristo é anterior: a ação dele aconteceu antes da principal. {λαβὼν ἄρτον εὐλόγησεν} «tendo tomado pão, abençoou» (Mt 26.26) — primeiro tomou, depois abençoou. {ἀκούσας ἐθαύμασεν} «tendo ouvido, admirou-se» (Mt 8.10). {ἰδὼν ἐπίστευσεν} «tendo visto, creu» (Jo 20.8).

Essa anterioridade organiza narrativas inteiras em cadeia: particípios aoristos empilham os antecedentes e o verbo principal dispara o evento — {ἐλθὼν προσκύνησεν} «vindo, prostrou-se» (Mt 8.2), {ἀναστὰς περιεπάτει} «levantando-se, andava» (Mc 2.12). Ler cadeias assim é ler Marcos em velocidade real.

## As formas do aoristo

Ativo (tema do aoristo + -ντ-): {λύσας} (masc.), {λύσασα} (fem.), {λῦσαν} (neut.); genitivo {λύσαντος}. O aoristo 2º segue o mesmo molde com o próprio tema: {λιπών, λιποῦσα, λιπόν}, genitivo {λιπόντος}; {ἰδών, ἰδοῦσα, ἰδόν}; {λαβών, λαβοῦσα, λαβόν}.

Médio: {λυσάμενος, -η, -ον} (2-1-2 manso). Passivo: {λυθείς, λυθεῖσα, λυθέν}, genitivo {λυθέντος} — 3ª declinação como o ativo. {ἀποκριθείς} «tendo respondido» abre discursos ({ἀποκριθεὶς εἶπεν} «respondendo, disse», dezenas de vezes).

## O perfeito como estado

O particípio perfeito pinta estados resultantes: {λελυκώς, λελυκυῖα, λελυκός}, genitivo {λελυκότος} — «tendo libertado (e continua valendo)». {ἑστώς} «de pé» (At 7.55, Estêvão vê Jesus {ἑστῶτα}), {γεγραμμένον} «escrito» (neutro substantivado), {πεπληρωμένος} «cheio» (médio: {πεπληρωμένη χάριτος} «cheia de graça», Lc 1.28).

O perfeito médio-passivo declina 2-1-2: {λελυμένος, -η, -ον}. E o futuro? O particípio futuro ({λύσων} «para libertar», {λυθησόμενος}) é raríssimo no Novo Testamento — reconheça a forma ({-σων}) e siga adiante.

## Cadeias e fórmulas

Três fórmulas narrativas valem ouro: {ἀποκριθεὶς εἶπεν} «respondendo, disse»; {ἰδὼν ἐπίστευσεν} «tendo visto, creu»; {λαβὼν εὐχαριστήσας ἔκλασεν} «tendo tomado, dado graças, partiu» (Mc 14.22, cadeia tripla). O aoristo empilha, o presente acompanha, o verbo principal resolve — esse é o ritmo da narrativa grega.`),
  vocab: [
    V('λύσας', 'λύω', 'tendo libertado'),
    V('λύσαντος', 'λύω', 'de tendo libertado'),
    V('λιπών', 'λείπω', 'tendo deixado'),
    V('ἰδών', 'ὁράω', 'tendo visto'),
    V('λαβών', 'λαμβάνω', 'tendo tomado'),
    V('ἀκούσας', 'ἀκούω', 'tendo ouvido'),
    V('ἐλθών', 'ἔρχομαι', 'tendo vindo'),
    V('ἀποκριθείς', 'ἀποκρίνομαι', 'tendo respondido'),
    V('λυθείς', 'λύω', 'tendo sido libertado'),
    V('λυθέντος', 'λύω', 'de tendo sido libertado'),
    V('λελυκώς', 'λύω', 'tendo libertado (perf.)'),
    V('ἑστώς', 'ἵστημι', 'de pé'),
    V('ἀναστάς', 'ἀνίστημι', 'tendo-se levantado'),
    V('πεπληρωμένη', 'πληρόω', 'cheia'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«λαβὼν ἄρτον εὐλόγησεν» (Mt 26.26): a ordem dos eventos é…'),
    options: [
      T('Tomou primeiro, abençoou depois (anterioridade)'),
      T('Abençoou enquanto tomava (simultâneo)'),
      T('Tomará depois de abençoar (posterior)'),
      T('As ações são idênticas'),
    ],
    answer: 0,
    hint: T('Particípio aoristo = anterior — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: λύσαν___ («de tendo libertado»).'),
      answer: 'τος',
      hint: T('Tema em -ντ-: λύσαν-τος.'),
    },
    {
      kind: 'choose',
      prompt: T('«λυθείς» é particípio…'),
      options: [
        T('Aoristo passivo («tendo sido libertado»)'),
        T('Presente ativo'),
        T('Perfeito ativo'),
        T('Futuro médio'),
      ],
      answer: 0,
      hint: T('Tema em -θεντ-: passivo — regra §2.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada particípio ao seu tempo.'),
      pairs: [
        { a: 'λύων', b: 'presente' },
        { a: 'λύσας', b: 'aoristo' },
        { a: 'λελυκώς', b: 'perfeito' },
        { a: 'λυθείς', b: 'aoristo passivo' },
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
        'Particípio aoristo = ação anterior à principal. Cadeias de aoristos + verbo principal = esqueleto da narrativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ativo em -ντ- (λύσας/λύσαντος, λιπών/λιπόντος); médio 2-1-2 (λυσάμενος); passivo em -ντ- com tema em -θεντ- (λυθείς/λυθέντος).',
      ),
    },
    {
      n: '3',
      text: T(
        'Particípio perfeito = estado resultante ({ἑστώς} «de pé», {γεγραμμένον} «escrito»).',
      ),
    },
    {
      n: '4',
      text: T('Fórmulas narrativas ({ἀποκριθεὶς εἶπεν}) leem-se em bloco, sem analisar cada peça.'),
    },
  ],
  notes: [
    {
      label: T('Aoristo × presente:'),
      text: T(
        '{ἀκούσας} (anterior: ouviu, depois agiu) × {ἀκούων} (simultâneo: ouvindo, ao mesmo tempo). Trocar um pelo outro muda a cronologia — o autor escolheu de propósito.',
      ),
    },
    {
      label: T('Genitivo dos particípios:'),
      text: T(
        '{λύσαντος}, {λυθέντος}, {λελυκότος}, {λιπόντος}: o genitivo revela o tema em -ντ- e prepara o genitivo absoluto do cap. 23. Decore um de cada.',
      ),
    },
  ],
  examples: [
    { text: '{λαβὼν ἄρτον εὐλόγησεν}', gloss: T('tendo tomado pão, abençoou (Mt 26.26)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('tendo ouvido, admirou-se (Mt 8.10)') },
    { text: '{ἰδὼν ἐπίστευσεν}', gloss: T('tendo visto, creu (Jo 20.8)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('respondendo, disse (fórmula)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('vindo, prostrou-se (Mt 8.2)') },
    { text: '{ἀναστὰς περιεπάτει}', gloss: T('levantando-se, andava (Mc 2.12)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('de pé à direita (At 7.55)') },
    { text: '{πεπληρωμένη χάριτος}', gloss: T('cheia de graça (Lc 1.28)') },
    {
      text: '{λαβὼν εὐχαριστήσας ἔκλασεν}',
      gloss: T('tomando, agradecendo, partiu (cadeia tripla; Mc 14.22)'),
    },
    { text: '{λυθεὶς ἀπῆλθεν}', gloss: T('tendo sido solto, partiu (passivo anterior)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Particípio aoristo ativo (λύσας e λιπών)'),
      head: [
        T('Caso'),
        { 0: 'λ', 1: 'ύ', 2: 'σ', 3: 'α', 4: 'ς', 5: ' ', 6: '(', 7: '1', 8: 'º', 9: ')' },
        { 0: 'λ', 1: 'ι', 2: 'π', 3: 'ώ', 4: 'ν', 5: ' ', 6: '(', 7: '2', 8: 'º', 9: ')' },
      ],
      rows: [
        ['Nom. masc.', '{λύσας}', '{λιπών}'],
        ['Nom. fem.', '{λύσασα}', 'λιποῦσα'],
        ['Nom. neut.', '{λῦσαν}', 'λιπόν'],
        ['Gen. masc.', '{λύσαντος}', 'λιπόντος'],
        ['Gen. fem.', 'λυσάσης', 'λιπούσης'],
      ],
    },
    {
      caption: T('Tabela 2 — Particípio aoristo passivo e perfeito'),
      head: [
        T('Caso'),
        {
          0: 'P',
          1: 'a',
          2: 's',
          3: 's',
          4: 'i',
          5: 'v',
          6: 'o',
          7: ' ',
          8: '(',
          9: 'λ',
          10: 'υ',
          11: 'θ',
          12: 'ε',
          13: 'ί',
          14: 'ς',
          15: ')',
        },
        {
          0: 'P',
          1: 'e',
          2: 'r',
          3: 'f',
          4: 'e',
          5: 'i',
          6: 't',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'λ',
          11: 'ε',
          12: 'λ',
          13: 'υ',
          14: 'κ',
          15: 'ώ',
          16: 'ς',
          17: ')',
        },
      ],
      rows: [
        ['Nom. masc.', '{λυθείς}', '{λελυκώς}'],
        ['Nom. fem.', '{λυθεῖσα}', '{λελυκυῖα}'],
        ['Nom. neut.', '{λυθέν}', '{λελυκός}'],
        ['Gen. masc.', '{λυθέντος}', '{λελυκότος}'],
      ],
    },
  ],
};
