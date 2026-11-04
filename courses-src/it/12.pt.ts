import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Pronomes combinados, ci e ne'),
  subtitle: T('me lo, te ne, ce lo'),
  section: T('Os pronomes e a passiva'),
  body: C(`## A ordem dos pronomes é fixa

Quando o pronome indireto ({mi}, {ti}, {si}, {ci}, {vi}) e o direto ({lo}, {la}, {li}, {le}) aparecem juntos, o italiano os **colapsa numa forma só**, numa ordem que não se negocia: {me lo}, {te ne}, {ce lo}, {glielo}. O objeto vem sempre no meio, como em {me lo dai}.

A regra do {ci} é **a única configuração**: antes de {lo}, {la}, {li} ou {le}, {ci} vira {ce}, porque {ce} mais {lo} soa melhor que {ci} mais {lo}. De {ce lo diamo} («damos-nós aquilo») sai {dammelo}, e o grupo pode grudar no verbo: {diccelo}, {eccolo}.

## {Ci}, {ce} e {vi}: três que se confundem

{ci} é lugar: {Qui ci trova?}, «Quem está aqui?»; {Vivo qui}, onde o {ci} fica colado a {qui} e quase sobra. {ci} também pode indicar pessoa, o costume italiano de usar {ci} como «nós»: {Dio ci ama}, «Deus nos ama». E com verbos como {dare}, {ci} é o {a} a nós: {Dammi il pane}.

{vi} é {voi} como objeto, {vi do}, «a vós dou». E {si} é a forma reflexiva de terceira pessoa: {loro parla di sé}, «fala de si».

## {Ne}: o substituto de {di}

{ne} substitui um complemento introduzido por {di}, e a preposição desaparece: {parla di Gesù} vira {ne parla}. {Ho visto un libro} vira {ne ho visto uno}. O {ne} vem antes do verbo, como clítico, e o que ele substitui pode ser pessoa, lugar ou quantidade: {Vieni da Italia? — Sì, ne vengo}.

Traduzir {ne} por «dele» está errado metade das vezes. {Ne ho visto due} não é «vi dois deles» nem «tenho dois anos»: é «vi dois, dos que vi».

## {Dio} {ce} {lo} {dona}

Em {Dio ce lo dona}, o {ce} indica a nós, o {lo} identifica aquilo que é dado, e {donare} é o verbo. É **a construção mais curta do italiano e a mais informativa**: o pronome, a pessoa, a coisa e a ação numa expressão de cinco palavras. Quem traduz literalmente «Deus ce lo dona» perde o ponto; em italiano natural é {Dio ce lo dona}, «Deus nos dá isso».

## O que ler

Toda vez que vir dois pronomes colados, desfaça na ordem: quem recebe ({mi}, {ci}, {vi}), o que recebe ({lo}, {la}, {li}, {le}), e o {ne}. E se a frase tiver {ne} sem {di} visível, procure o {di} que ele substituiu: está na frase anterior, ou é implícito.`),
  vocab: [
    V('me lo', 'me', 'mo'),
    V('ce lo', 'ci', 'no-lo'),
    V('te ne', 'te', 'te isso'),
    V('pensaci', 'pensare', 'pensa nisso!'),
    V('glielo', 'gli', 'lho'),
    V('melo', 'me', 'mo'),
    V('ci', 'ci', 'nos / aí'),
    V('vi', 'vi', 'a vós'),
    V('ne', 'ne', 'dele/disso'),
    V('si', 'si', 'se (reflexivo)'),
    V('donare', 'donare', 'dar'),
    V('vendere', 'vendere', 'vender'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que se usa ce lo e não ci lo?'),
    options: [
      T('ci vira ce antes de lo, la, li ou le'),
      T('São palavras diferentes'),
      T('É erro de digitação'),
      T('Porque ci é plural'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforme: ci + lo → ___'),
      answer: 'ce lo',
      hint: T('Ci muda de forma diante de lo.'),
    },
    {
      kind: 'fill',
      prompt: T('Transforme: parla di me → ___ parla'),
      answer: 'ne',
      hint: T('Ne substitui di me.'),
    },
    {
      kind: 'choose',
      prompt: T('O que significa ne ho due?'),
      options: [
        T('Eu tenho dois anos'),
        T('Tenho dois deles'),
        T('Dou dois a ele'),
        T('Estou em dois lugares'),
      ],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('A ordem é indireto, direto, {ne}: {me lo}, {te ne}, {ce lo}, {glielo}.') },
    {
      n: '2',
      text: T('{Ci} vira {ce} antes de {lo}, {la}, {li} ou {le}: {ce lo diamo}, nunca {ci lo}.'),
    },
    {
      n: '3',
      text: T(
        '{Vi} é {voi} como objeto, {vi do}, e {si} é o reflexivo de terceira pessoa, {loro parla di sé}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ne} substitui uma expressão com {di}, e a {di} desaparece: {parla di Gesù} → {ne parla}.',
      ),
    },
    {
      n: '5',
      text: T(
        'No imperativo afirmativo o grupo se gruda ao verbo: {dammelo}, {diccelo}, {eccolo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Ne} e {ci} no mesmo lugar'),
      text: T(
        '{ne} e {ci} ocupam a mesma posição: onde um entra, o outro entra. É regra de reposição e não de sentido, e é por isso que {me ne} e {me ci} convivem no italiano falado.',
      ),
    },
    {
      label: T('Cinco palavras, três informações'),
      text: T(
        '{Dio ce lo dona} é a construção mais curta do italiano e a mais informativa: o pronome {ce} diz a quem, o {lo} diz o quê, e o verbo diz a ação. O português precisa de uma frase inteira para dizer as três coisas.',
      ),
    },
  ],
  examples: [
    { text: 'Dammi il libro.', gloss: T('Dá-me o livro.') },
    { text: 'Me lo dai?', gloss: T('Mo dás?') },
    { text: 'Dio ce lo dona.', gloss: T('Deus nos dá isso.') },
    { text: 'Ne parla bene.', gloss: T('Fala bem disso.') },
    { text: 'Ne ho visto due.', gloss: T('Vi dois.') },
    { text: 'Pensaci.', gloss: T('Pensa nisso.') },
    { text: 'C’era un uomo.', gloss: T('Havia um homem.') },
    { text: 'Parlane con lui.', gloss: T('Fala disso com ele.') },
  ],
  tables: [
    {
      caption: T('Ordem dos pronomes'),
      head: ['Indiretto', 'Diretto', 'Particella'],
      rows: [
        ['mi, ti, si, ci, vi', 'lo, la, li, le', 'ne'],
        ['me lo', 'ce lo', 'te ne'],
        ['glielo', 'melo', 'dillo'],
      ],
    },
    {
      caption: T('Ce, ci, vi, ne, si'),
      head: ['Pronome', 'Esempio', 'Glossa'],
      rows: [
        ['ci', 'Dio ci ama', 'noi'],
        ['ce', 'Dio ce lo dona', 'noi + lo'],
        ['vi', 'vi do', 'voi'],
        ['ne', 'ne parla', 'di qualcosa'],
        ['si', 'si lava', 'riflessivo'],
      ],
    },
  ],
};
