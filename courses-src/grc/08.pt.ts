import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfeito e Aoristo (1º)'),
  subtitle: T('ἔλυον × ἔλυσα: o passado em dois aspectos'),
  section: T('O verbo'),
  body: C(`## O aumento: a marca do passado

O imperfeito e o aoristo (como todo passado do indicativo) levam aumento — um prefixo que aponta para trás no tempo. Diante de consoante, o aumento é silábico: acrescenta-se {ἐ-} ao início ({λύω} → {ἔλυον}, {ἔλυσα}). Diante de vogal, o aumento é temporal: a vogal inicial se alonga — {ἀ} vira {ἠ} ({ἀκούω} → {ἤκουον}), {ἐ} vira {ἠ} ({ἐλπίζω} → {ἤλπιζον}), {ο} vira {ὠ}.

Só o indicativo leva aumento. Subjuntivo, optativo, imperativo, infinitivo e particípio nunca o usam — por isso, ao ver {ἐ-} no início de um verbo, você já sabe: é indicativo passado.

## O imperfeito: o passado que durava

O imperfeito usa o tema do presente + aumento + terminações secundárias ({-ον, -ες, -ε, -ομεν, -ετε, -ον}). Paradigma: {ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον}. Repare que a 1ª sg. e a 3ª pl. têm a mesma forma ({ἔλυον}) — só o contexto distingue.

O sentido é o do presente transportado ao passado: ação em curso ({ἐδίδασκεν} «ensinava, estava ensinando»), hábito ({ἐβάπτιζεν} «costumava batizar»), tentativa, descrição de cenário. Marcos pinta cenários no imperfeito e dispara a ação no aoristo — saber alternar os dois é ler Marcos no ritmo certo.

## O aoristo 1º: o passado pontual

O aoristo primeiro (ou sigmático) usa o tema verbal + {σα} + aumento + as mesmas terminações secundárias: {ἔλυσα, ἔλυσας, ἔλυσε(ν), ἐλύσαμεν, ἐλύσατε, ἔλυσαν}. O {σ} do {σα} é a assinatura do tempo — vendo sigma entre tema e terminação, pense aoristo.

O sentido é perfectivo: a ação vista como um todo concluído, sem interesse pela duração. {ἐβάπτισεν} «batizou» (o ato), contra {ἐβάπτιζεν} «batizava» (o costume). Em narrativa, o aoristo carrega a espinha dorsal dos eventos: {ἦλθεν, εἶδεν, ἐνίκησεν} — veio, viu, venceu.

## Imperfeito × aoristo na prática

O contraste aparece em pares mínimos do próprio Novo Testamento: {ἔλεγεν} «dizia, ia dizendo» (processo) × {εἶπεν} «disse» (ato); {ἐζήτουν} «procuravam» × {εὗρον} «acharam»; {ἔτυπτον} «batiam» × {ἤνοιξεν} «abriu». O imperfeito prepara, o aoristo executa.

Cuidado com um falso contraste: o aoristo NÃO significa necessariamente ação rápida ou instantânea — significa ação vista como completa. {ἐβασίλευσεν} «reinou» pode cobrir quarenta anos; o ponto é que o autor os apresenta como um bloco concluído.`),
  vocab: [
    V('ἔλυον', 'λύω', 'eu/eles libertava(m) (impf.)'),
    V('ἔλυες', 'λύω', 'tu libertavas (impf.)'),
    V('ἔλυε', 'λύω', 'ele libertava (impf.)'),
    V('ἔλυσα', 'λύω', 'eu libertei (aor.)'),
    V('ἔλυσας', 'λύω', 'tu libertaste (aor.)'),
    V('ἔλυσε', 'λύω', 'ele libertou (aor.)'),
    V('ἐλύσαμεν', 'λύω', 'nós libertamos (aor.)'),
    V('ἔλυσαν', 'λύω', 'eles libertaram (aor.)'),
    V('ἐδίδασκεν', 'διδάσκω', 'ensinava (impf.)'),
    V('ἔλεγεν', 'λέγω', 'dizia (impf.)'),
    V('εἶπεν', 'λέγω', 'disse (aor.)'),
    V('ἐβάπτιζεν', 'βαπτίζω', 'batizava (impf.)'),
    V('ἐβάπτισεν', 'βαπτίζω', 'batizou (aor.)'),
    V('ἤκουσεν', 'ἀκούω', 'ouviu (aor.)'),
    V('ἐπίστευσαν', 'πιστεύω', 'creram (aor.)'),
    V('ἦλθεν', 'ἔρχομαι', 'veio (aor.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἔλυσαν» é imperfeito ou aoristo, e por quê?'),
    options: [
      T('Imperfeito (tema do presente)'),
      T('Aoristo (sigma entre tema e terminação)'),
      T('Presente histórico'),
      T('Perfeito sem reduplicação'),
    ],
    answer: 1,
    hint: T('Procure o σ: ἔ-λυ-σ-αν.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do singular do imperfeito: ἔλυ___ («ele libertava»).'),
      answer: 'ε',
      hint: T('Terminações secundárias: -ον, -ες, -ε…'),
    },
    {
      kind: 'choose',
      prompt: T('Em Mc 1.4-9, «ἐβάπτιζεν» (v.4) × «ἐβάπτισεν» (v.9): o contraste aspectual é…'),
      options: [
        T('Hábito duradouro × ato pontual'),
        T('Futuro × passado'),
        T('Ativo × passivo'),
        T('Ordem × descrição'),
      ],
      answer: 0,
      hint: T('João batizava (costume); Jesus foi batizado (evento).'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu tempo.'),
      pairs: [
        { a: 'ἐλύομεν', b: 'imperfeito' },
        { a: 'ἐλύσαμεν', b: 'aoristo' },
        { a: 'ἤκουσαν', b: 'aoristo (aumento temporal)' },
        { a: 'λέγουσιν', b: 'presente (sem aumento!)' },
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
        'Só o indicativo leva aumento. Verbo com {ἐ-} inicial ou vogal alongada = passado do indicativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Imperfeito = tema do presente + aumento + terminações secundárias. Sentido: ação passada em curso ou habitual.',
      ),
    },
    {
      n: '3',
      text: T(
        'Aoristo 1º = tema + σα + aumento + terminações secundárias. O σ entre tema e terminação é a assinatura.',
      ),
    },
    {
      n: '4',
      text: T(
        'Terminações secundárias ativas: -ον, -ες, -ε, -ομεν, -ετε, -ον. Servem ao imperfeito, ao aoristo e ao mais-que-perfeito.',
      ),
    },
    {
      n: '5',
      text: T(
        'Aoristo = ação completa (não necessariamente rápida). Imperfeito = ação em processo. O par {ἔλεγεν}/{εἶπεν} resume tudo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nuance avançada:'),
      text: T(
        'O aoristo tem usos além do passado pontual: ingressivo ({ἐπίστευσαν} «passaram a crer»), gnômico (verdades gerais) e até dramático. O capítulo fixa o uso narrativo; os demais aparecem na leitura.',
      ),
    },
    {
      label: T('Armadilha:'),
      text: T(
        '{ἔλυον} pode ser 1ª sg. («eu libertava») ou 3ª pl. («eles libertavam»). Diante da ambiguidade, o sujeito explícito ou o contexto decidem — nunca chute pelo isolamento.',
      ),
    },
  ],
  examples: [
    { text: '{ἐδίδασκεν ἐν τῇ συναγωγῇ}', gloss: T('ensinava na sinagoga (Mc 1.21; cenário)') },
    { text: '{ἐξῆλθεν τὸ πνεῦμα}', gloss: T('saiu o espírito (aoristo: evento; Mc 1.26)') },
    { text: '{ἔλεγεν αὐτοῖς}', gloss: T('dizia-lhes, ia dizendo (processo)') },
    { text: '{εἶπεν αὐτοῖς}', gloss: T('disse-lhes (ato concluído)') },
    { text: '{ἐβάπτιζεν ἐν τῇ ἐρήμῳ}', gloss: T('batizava no deserto (hábito; Mc 1.4)') },
    { text: '{ἐβάπτισεν αὐτόν}', gloss: T('batizou-o (ato; Mc 1.9)') },
    { text: '{ἤκουσαν τὴν φωνήν}', gloss: T('ouviram a voz (aumento temporal; At 9.7)') },
    { text: '{ἐζήτουν αὐτὸν}', gloss: T('procuravam-no (tentativa em curso)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('acharam o menino (resultado; Mt 2.11)') },
    {
      text: '{ἐπίστευσαν εἰς αὐτόν}',
      gloss: T('creram nele (aoristo ingressivo: «passaram a crer»; Jo 2.11)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Imperfeito ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{ἔλυον}', 'eu libertava'],
        ['2ª sg.', '{ἔλυες}', 'tu libertavas'],
        ['3ª sg.', '{ἔλυε(ν)}', 'ele libertava'],
        ['1ª pl.', '{ἐλύομεν}', 'nós libertávamos'],
        ['2ª pl.', '{ἐλύετε}', 'vós libertáveis'],
        ['3ª pl.', '{ἔλυον}', 'eles libertavam'],
      ],
    },
    {
      caption: T('Tabela 2 — Aoristo 1º ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{ἔλυσα}', 'eu libertei'],
        ['2ª sg.', '{ἔλυσας}', 'tu libertaste'],
        ['3ª sg.', '{ἔλυσε(ν)}', 'ele libertou'],
        ['1ª pl.', '{ἐλύσαμεν}', 'nós libertamos'],
        ['2ª pl.', '{ἐλύσατε}', 'vós libertastes'],
        ['3ª pl.', '{ἔλυσαν}', 'eles libertaram'],
      ],
    },
    {
      caption: T('Tabela 3 — Aumento temporal (verbo em vogal)'),
      head: [T('Presente'), T('Aumento'), T('Exemplo passado')],
      rows: [
        ['ἀκούω', 'ἀ → ἠ', '{ἤκουον} / {ἤκουσα}'],
        ['ἐλπίζω', 'ἐ → ἠ', '{ἤλπιζον} / {ἤλπισα}'],
        ['ὁράω', 'ὁ → ὡ', '{ἑώρων} / {εἶδον}'],
      ],
    },
  ],
};
