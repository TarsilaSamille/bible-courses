import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Subjuntivo e futuro do subjuntivo'),
  subtitle: T('fale, falares: desejo e hipótese'),
  section: T('O verbo: os modos'),
  body: C(`## O subjuntivo é o tempo do que não se pode afirmar

O presente do subjuntivo aparece em desejo, dúvida, finalidade e certas subordinadas: {quero que fales}, {espero que venha}, {para que haja paz}, {não sei se vem}. Não é "o tempo da irrealidade" como se costuma dizer — é o tempo do que o falante **não pode afirmar**.

É por isso que {seja} e {venha} no Pai-Nosso não são ordens: são desejos comunitários. "Santificado seja o teu nome" é um pedido, e um pedido é por definição algo que se quer e ainda não se tem. O grego de Mt 6:10 (ἐλθέτω) usa a mesma construção, e o subjuntivo é a marca de que a oração não é uma declaração.

## O futuro do subjuntivo é português

O futuro do subjuntivo ({falares}, {vier}, {creres}) é uma criação **do português** — o grego e o latim não têm essa forma. Ele aparece depois de quando e se: {quando eu vier}, {se tu creres}, {assim que chegar}. E expressa um evento futuro que ainda não é fato, mas que o falante considera certo o bastante para fechar a subordinada com ele.

A tentação é tratar {quando eu vier} como futuro do indicativo. Não é. A diferença é de compromisso: {quando eu vier} é uma condição em que o falante espera; {quando eu vim} é narração de passado. Em tradução bíblica, o grego antigo (ὅταν + subjuntivo) e o português biblical (quando + futuro do subjuntivo) são a mesma coisa, e é por isso que a forma se conservou.

## Para + infinitivo: finalidade sem sujeito

{para} seguido de infinitivo pode substituir uma finalidade: {para crer}, {para conhecer}, {estou aqui para falar}. A diferença em relação a {para que} é que o infinitivo tem sujeito subentendido — normalmente o mesmo da frase principal. {Vou falar} e {Vou explicar para entender} têm o mesmo sujeito nas duas orações.

É o que permite traduzir o grego εἰς + infinitivo ({ἐλθεῖν εἰς}, {ἐλθεῖν ἀκοῦσαι}) e o hebraico Purpose Clause com infinitivo, sem precisar inventar um sujeito que o texto não dá.

## A seleção depende do verbo principal

Nem todo verbo principal aceita subjuntivo. {Quero que} exige; {Sei que} quase sempre exige indicativo ({sei que vem}), a menos que a informação venha de outro ({disseram que viria}). A lista de verbos que "governam" o subjuntivo é fechada, e é ela que decide, não o sentido da frase.

Em grego, o paralelo é o **optativo** ({ἐάν τις ἔλθῃ}, {ὄφρα}, {ὡς}) e o subjuntivo ({ὅτι ζῇ}, {ἵνα}). Quando o texto grego está no optativo, o português precisa encadear com "se" ou "para que", e é aí que a tradução ganha ou perde a hipótese.

## O que ler

Em qualquer verbo no subjuntivo, pergunte: quem governa a frase — {quero}, {espero}, {para que}, {se}? E é {se} ou {quando} no futuro do subjuntivo, que é um tempo só do português? E o {para} traz {que} ou um infinitivo? Com as três respostas, o subjuntivo está explicado.`),
  vocab: [
    V('fale', 'falar', 'fale'),
    V('falares', 'falar', 'falares'),
    V('seja', 'ser', 'seja'),
    V('tenha', 'ter', 'tenha'),
    V('venha', 'vir', 'venha'),
    V('creres', 'crer', 'creres'),
    V('oxalá', 'oxalá', 'oxalá'),
    V('amém', 'amém', 'amém'),
    V('para', 'para', 'para (finalidade)'),
    V('crer', 'crer', 'crer'),
    V('vir', 'vir', 'vir'),
    V('falar', 'falar', 'falar'),
    V('quando', 'quando', 'quando'),
    V('se', 'se', 'se (conjunção)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: “quando tu ___ (falar)”.'),
    options: [T('falas'), T('falares'), T('fales'), T('falaram')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Santificado ___ o teu nome”.'),
      answer: 'seja',
      hint: T('Subjuntivo de ser.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual construção expressa finalidade?'),
      options: [T('para que venhas'), T('quando tu vens'), T('porque eu creio'), T('se tu vens')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue conjunção e valor.'),
      pairs: [
        { a: T('quando'), b: T('tempo futuro') },
        { a: T('se'), b: T('hipótese') },
        { a: T('para que'), b: T('finalidade') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{quero que fales} e {espero que venha} pedem subjuntivo; {sei que vem} pede indicativo. Não é o sentido da oração que decide, é o verbo que vem antes: a lista dos que governam o subjuntivo é fechada.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{não sei se vem} leva {se} mais indicativo, e {não sei se venha} leva {se} mais subjuntivo. A {se} é a pista: {se} seguido de verbo que o falante não pode afirmar pede subjuntivo.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{quando eu vier}, {se tu creres} e {assim que chegar} usam o futuro do subjuntivo, {falares}, {creres}, {chegar}. É a forma que {quando} e {se} pedem quando se trata do que ainda não aconteceu, e o grego antigo (ὅταν mais subjuntivo) diz a mesma coisa.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se eu falasse} é o subjuntivo do imperfeito e vale para a hipótese irreal ({se falasse, viria}), enquanto {se eu tivesse falado} é o mais-que-perfeito e diz que a hipótese é anterior ({se tivesse falado, teria vindo}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{para crer} e {para que creia} não são sinônimos: o infinitivo de {para} tem sujeito subentendido e é o mesmo da frase principal, enquanto {para que} traz subjuntivo e sujeito próprio. {Vou falar para entender} tem um sujeito só; {Falo para que ele entenda} tem dois.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atenção'),
      text: T(
        'O futuro do subjuntivo ({falares}, {vier}, {creres}) é uma criação do português: o grego e o latim não têm essa forma. Onde o grego diz {ὅταν} mais aoristo, o português biblical diz {quando} mais futuro do subjuntivo, e é aí que a forma se conserva.',
      ),
    },
    {
      label: T('O optativo'),
      text: T(
        'O grego tem um modo que o português não tem, o optativo ({ὄφρα}, {ὡς}, {εἴ τις}). Para dizer hipótese com optativo, o português precisa encadear {se} mais condicional, e é essa cadeia que produz tantos {se} no Novo Testamento em português.',
      ),
    },
  ],
  examples: [
    { text: 'Quero que fales.', gloss: T('{quero que} governa o subjuntivo.') },
    { text: 'Espero que venha a paz.', gloss: T('{espero que} mais subjuntivo {venha}.') },
    { text: 'Sei que ele vem.', gloss: T('{sei que} governa o indicativo.') },
    { text: 'Não sei se vem.', gloss: T('{se} mais indicativo: duvida sobre o fato.') },
    { text: 'Não sei se venha.', gloss: T('{se} mais subjuntivo: duvida sobre a vinda.') },
    { text: 'Quando eu vier, te direi.', gloss: T('Futuro do subjuntivo {vier} com {quando}.') },
    {
      text: 'Se tu creres, terás a vida.',
      gloss: T('{creres} e {terás}: hipótese e consequência.'),
    },
    { text: 'Se eu falasse, viria.', gloss: T('Imperfeito do subjuntivo: hipótese irreal.') },
    { text: 'Falo para que ele entenda.', gloss: T('{para que} traz sujeito próprio.') },
  ],
  tables: [
    {
      caption: T('Os três tempos do subjuntivo'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'fale', 'quero que fales'],
        ['futuro', 'falares', 'quando falares'],
        ['imperfeito', 'falasse', 'se falasse'],
      ],
    },
    {
      caption: T('O verbo que vem antes decide'),
      head: ['Verbo principal', 'Modo', 'Exemplo'],
      rows: [
        ['quero que', 'subjuntivo', 'quero que fales'],
        ['sei que', 'indicativo', 'sei que vem'],
        ['não sei se', 'qualquer dos dois', 'não sei se vem'],
      ],
    },
    {
      caption: T('{para} com e sem {que}'),
      head: ['Forma', 'Sujeito', 'Exemplo'],
      rows: [
        ['para + infinitivo', 'o mesmo da principal', 'para crer'],
        ['para que + subjuntivo', 'próprio', 'para que creia'],
      ],
    },
  ],
};
