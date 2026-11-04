import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Leitura: Salmo 21 na Vulgata'),
  subtitle: T('{Deus, Deus meus, respice in me} — o dativo, o acusativo e a enclítica'),
  section: T('Leitura'),
  body: C(`## O texto

> **Deus, Deus meus, respice in me: quare me derelīquisti?**
> **Dīvīsērunt sibi vestimenta mea, et super tunicam meam miserunt sortem.**
> **Fodērunt manūs meas et pedēs meos.**
> **Dīnumerāvērunt omnia ossa mea.**
> **Tu autem, Dōmine, nē elongāveris auxilium tuum ā me.**

## Vocabulário em uso

O salmo reúne substantivos de três declinações e um verbo de cada modo. Ele é excelente material porque repete sempre a mesma lição: consolidar substantivos, com um vocabulário que serve de índice para a Vulgata inteira.

## Análise do primeiro verso

**{Deus, Deus meus}** traz o mesmo substantivo duas vezes: a primeira é **Vocativo** — o endereço direto, «Deus» —; a segunda é **Nominativo**, com o possessivo {meus} no Genitivo masculino: «o meu Deus».

**{Respice in me}** é imperativo presente de {respiciō}. O verbo é transitivo, mas o objeto é um pronome: {in me} usa {in} + **Ablativo** para indicar *lugar onde* — «olha para mim».

**{Quare me derelīquisti}** traz a pergunta {quare} «por que», o pronome {me} em **Ablativo** (a pergunta não tem caso próprio) e o perfeito {derelīquisti} de {dērelinquō}: «por que me abandonaste?»

## Verbos do salmo

| Verbo | Modo | O que revela |
|---|---|---|
| {respice} | imperativo presente | comando do salmo |
| {derelīquisti} | perfeito, 2.ª sg. | ação passada concluída |
| {dīvīsērunt} | perfeito, 3.ª pl. | narração do passado |
| {miserunt} | perfeito, 3.ª pl. | percurso do verbo {mitto} |
| {fodērunt} | perfeito, 3.ª pl. | percurso do verbo {fodiō} |
| {dīnumerāvērunt} | perfeito, 3.ª pl. | contagem do verbo {dīnumerō} |
| {elongāveris} | perfeito, 2.ª sg. subj. | a negação {nē} no subjuntivo |

## O que o salmo ensina

Os seis verbos formam um percurso: um **imperativo** ({respice}), quatro **perfeitos narrativos** ({dīvīsērunt}, {miserunt}, {fodērunt}, {dīnumerāvērunt}) que contam o que já aconteceu, um **perfeito de pergunta** ({derelīquisti}) que interpela, e um **perfeito subjuntivo** ({elongāveris}) que pede. O tempo que domina o salmo é o perfeito, e é por isso que a Vulgata serve tão bem à liturgia da Sexta-feira Santa: tudo o que o salmo narra já está consumado.`),
  vocab: [
    V('deus', 'deus', 'Deus (voc./nom.)'),
    V('respice', 'respicio', 'olha! (imperativo presente)'),
    V('quare', 'quare', 'por quê (interrogativo)'),
    V('derelīquisti', 'derelinquo', 'abandonaste (perf. 2.ª sg.)'),
    V('dīvīsērunt', 'divido', 'dividiram (perf. 3.ª pl.)'),
    V('vestimenta', 'vestimentum', 'vestes (n. pl.)'),
    V('tunicam', 'tunica', 'túnica (ac. sg.)'),
    V('miserunt', 'mitto', 'lançaram (perf. 3.ª pl.)'),
    V('sortem', 'sors', 'sorte (ac. sg.)'),
    V('fodērunt', 'fodio', 'perfearam (perf. 3.ª pl.)'),
    V('manūs', 'manus', 'mãos (nom. pl.)'),
    V('ossa', 'os', 'ossos (n. pl.)'),
    V('dīnumerāvērunt', 'dinumero', 'enumeraram (perf. 3.ª pl.)'),
    V('auxilium', 'auxilium', 'auxílio (n.)'),
    V('elongāveris', 'elongo', 'afastares (perf. 2.ª sg. subj.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus, Deus meus}, qual é o caso das duas ocorrências?'),
    options: [
      T('A primeira é Vocativo (endereço), a segunda Nominativo com Genitivo {meus}'),
      T('As duas são Vocativo'),
      T('A primeira é Nominativo, a segunda Ablativo'),
      T('A primeira é Genitivo, a segunda Dativo'),
    ],
    answer: 0,
    hint: T('Regra §1: o Vocativo coincide com o Nominativo; só o contexto separa.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o perfeito: {Deus, Deus meus, quare me ___?}'),
      answer: 'derelīquisti',
      hint: T('{dērelinquō}, perfeito de 2.ª pessoa do singular.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {in me} é Ablativo em {respice in me}?'),
      options: [
        T('Porque indica o lugar onde o olhar se fixa'),
        T('Porque {in} comanda Acusativo nesta construção'),
        T('Porque {me} é Acusativo'),
        T('Porque {respice} é intransitivo'),
      ],
      answer: 0,
      hint: T('Regra §2: {in} + Ablativo = lugar onde; {in} + Acusativo = direção.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual é o Acusativo plural de {os, ossis}?'),
      answer: 'ossa',
      hint: T('A terceira declinação faz {ossa} em todos os casos do plural.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma à função'),
      pairs: [
        { a: T('respice'), b: T('imperativo presente') },
        { a: T('quare'), b: T('interrogativo') },
        { a: T('dīvīsērunt'), b: T('perfeito, 3.ª plural') },
        { a: T('miserunt'), b: T('de {mitto}: lançaram') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O Vocativo tem a mesma forma que o Nominativo; você o reconhece porque vem solto, no começo da oração, sem artigo nem possessive.',
      ),
    },
    {
      n: '2',
      text: T(
        '{in} + Ablativo marca lugar onde, {in} + Acusativo marca direção: {in cāsā} «em casa», {in cāsam} «para dentro da casa».',
      ),
    },
    {
      n: '3',
      text: T(
        'As perguntas não têm caso próprio: {me} em {quare me derelīquisti} é Ablativo porque a pergunta é o objeto de {quare}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O perfeito traduz uma ação do passado como inteira; é o tempo padrão das narrativas da Vulgata.',
      ),
    },
    {
      n: '5',
      text: T(
        '{nē} + verbo subjuntivo nega o presente: {nē timeāte} «não temais», {nē elongāveris} «não te afastes».',
      ),
    },
  ],
  notes: [
    {
      label: T('Numeração grega ou hebraica?'),
      text: T(
        'Este salmo é o 21 na numeração grega (a que a Vulgata segue) e o 22 na hebraica, usada pela maioria das Bíblias modernas. Se você abrir a Bíblia em português, procure o 22. A diferença vem do alfabeto: os hebreus contam a {waw} como número de letra, o que os gregos não faziam: por isso há um salmo de diferença.',
      ),
    },
    {
      label: T('Por que este salmo aparece na Sexta-feira Santa'),
      text: T(
        'A tradição litúrgica liga o salmo à crucificação e entoa os seus imperativos ({respice}) contra quem executa. Gramaticalmente é uma leitura densa: perfeito narrativo, dativo de interesse ({sibi}), {super} + Acusativo e numeral ({omnia}). Se você entende estas quatro coisas, entende o salmo.',
      ),
    },
  ],
  examples: [
    { text: 'Deus, Deus meus', gloss: T('Deus, o meu Deus (vocativo + nominativo)') },
    { text: 'quāre me derelīquisti', gloss: T('por que me abandonaste') },
    {
      text: 'dīvīsērunt sibi vestimenta mea',
      gloss: T('dividiram entre si as minhas vestes (dativo de interesse)'),
    },
    { text: 'super tunicam meam', gloss: T('sobre a minha túnica ({super} + acusativo)') },
    { text: 'fodērunt manūs meas', gloss: T('perfearam as minhas mãos') },
    { text: 'dīnumerāvērunt omnia ossa mea', gloss: T('enumeraram todos os meus ossos') },
    { text: 'nē elongāveris auxilium tuum ā me', gloss: T('não afastes de mim o teu socorro') },
    { text: 'in cāsam', gloss: T('para dentro da casa (direção)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Substantivos do salmo e suas declinações'),
      head: [T('Latim'), T('Declinação'), T('Português')],
      rows: [
        ['Deus', '4.ª (comum)', 'Deus'],
        ['vestimenta', '2.ª (neutro pl.)', 'vestes'],
        ['tunica', '1.ª', 'túnica'],
        ['manus', '4.ª', 'mão'],
        ['os', '3.ª (neutro)', 'osso'],
        ['sors', '3.ª (i-after-a)', 'sorte'],
        ['auxilium', '2.ª (neutro)', 'auxílio'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos: tempo, modo, pessoa'),
      head: [T('Forma'), T('Pessoa e número'), T('Português')],
      rows: [
        ['{respice}', '2.ª sg., imperativo', 'olha'],
        ['{derelīquisti}', '2.ª sg., perfeito indicativo', 'abandonaste'],
        ['{miserunt}', '3.ª pl., perfeito indicativo', 'lançaram'],
        ['{elongāveris}', '2.ª sg., perfeito subjuntivo', 'afastares'],
      ],
    },
  ],
};
