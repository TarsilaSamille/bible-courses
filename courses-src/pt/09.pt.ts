import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Futuro, condicional e mesóclise'),
  subtitle: T('falarei, falaria, dir-me-ás'),
  section: T('Os pronomes'),
  body: C(`## O futuro que não é futuro

O futuro do indicativo forma-se com o infinitivo mais as terminações: {falar} + {+ei} = {falarei}. O condicional usa o mesmo material: {falaria}. A diferença de forma é mínima — uma terminação — e a diferença de sentido é enorme: o futuro expressa previsão ou compromisso ({virá}, {não falta}), enquanto o condicional expressa hipótese, possibilidade ou cortesia ({seria}, {poderia}, {gostaria}).

E aqui está a armadilha: **forma de futuro não garante sentido temporal**. O português é pródigo de futuro para afirmações categóricas: em profecias, o futuro pode ser imediato ({Aquele que vem está na porta}) ou pode ser certeza ({o Filho do homem virá}). O grego faz o mesmo (μέλλω), e é a mistura do tempo com a certeza que produz essas duas leituras.

## Condicional e hipótese: o que o grego não tem

O condicional português é mais rico que o grego para hipóteses, porque o grego usa o subjuntivo ({ἐάν τις ἔλθῃ}) e o português precisa encadear: {se alguém vier, ...}, {se viesse, ...}. Os três tempos do português — {se vier} (futuro do subjuntivo), {se viesse} (imperfeito), {se tivesse vindo} (mais-que-perfeito) — cobrem o que o grego resolve com uma só forma.

É por isso que a tradução de um subjuntivo grego costuma ganhar um "se" que não estava lá. Nem sempre é erro: às vezes é a única forma de dizer em português. Mas quando o grego está no **optativo** ({ἐάν τις ἔλθῃ}, {ὄφρα}, {ὡς}) e o português joga fora a condição, a tradução perdeu.

## A mesóclise em português bíblico

{dir-me-ás} é o exemplo extremo: a forma direto do futuro do indicativo, com o pronome entre {dir} e {ás}. Não é erro nem dialeto: é o português arcaizante preservado nas traduções mais antigas e em formas como {fazei-me} e {dar-te-ei}.

Em português moderno a mesóclise saiu de uso, mas continua aparecendo em texto literário, bíblico ou juramentado. Quem lê Gálatas ou Hebreus em tradução antiga encontra essa forma com frequência, e ela não deve ser "corrigida" para {dir-me-ás} → {dirás-me} sem saber o que está fazendo.

## O que ler

Sempre que ver um verbo no futuro, pergunte: é previsão ou hipótese? Se for hipótese, é condicional ou futuro do subjuntivo? E se o texto for antigo, há forma de **mesóclise**? A pessoa, o número e o pronome são conteúdo, não forma — e é por isso que o grego quase sempre precisa ser lido, não traduzido.`),
  vocab: [
    V('falarei', 'falar', 'falarei'),
    V('virá', 'vir', 'virá'),
    V('falaria', 'falar', 'falaria'),
    V('seria', 'ser', 'seria'),
    V('direi', 'dizer', 'direi'),
    V('farei', 'fazer', 'farei'),
    V('dir-me-ás', 'dizer', 'dir-me-ás'),
    V('louvar-te-ei', 'louvar', 'louvar-te-ei'),
    V('verá', 'ver', 'verá'),
    V('poderia', 'poder', 'poderia (condicional)'),
    V('louvar', 'louvar', 'louvar'),
    V('olho', 'olho', 'olho (olhar; também olho)'),
    V('pronome', 'pronome', 'pronome'),
    V('hipótese', 'hipótese', 'hipótese'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma é condicional?'),
    options: [T('falarei'), T('falaria'), T('falava'), T('falou')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “todo olho o ___”.'),
      answer: 'verá',
      hint: T('Futuro de ver.'),
    },
    {
      kind: 'choose',
      prompt: T('Onde aparece a mesóclise?'),
      options: [T('dir-me-ás'), T('me dirás agora'), T('que me dirás'), T('me será dito')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue tempo e função.'),
      pairs: [
        { a: T('futuro'), b: T('previsão') },
        { a: T('condicional'), b: T('hipótese') },
        { a: T('mesóclise'), b: T('pronome no verbo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O futuro e o condicional saem do mesmo infinitivo: {falar} mais {+ei} dá {falarei}, e {falar} mais {+ia} dá {falaria}. A terminação é a única diferença, e o sentido muda inteiro: previsão ({virá}) contra hipótese ({seria}).',
      ),
    },
    {
      n: '§2',
      text: T(
        'Forma de futuro não é sentido temporal: {Aquele que vem está na porta} usa o presente para algo imediato, e {o Filho do homem virá} usa o futuro para uma certeza. O grego faz o mesmo com {μέλλω}, e é a mistura de tempo e certeza que produz as duas leituras.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A hipótese se faz com três tempos que o grego resolve com um: {se vier} (futuro do subjuntivo), {se viesse} (imperfeito) e {se tivesse vindo} (mais-que-perfeito). {Se vier} fala do futuro, {se viesse} do irreal e {se tivesse vindo} do irreal anterior.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{dir-me-ás} é mesóclise: o pronome {me} fica **entre** {dir} e {ás}. Em português moderno a forma é {dirás-me}, e a mesóclise sobrevive em texto literário, bíblico e juramentado ({dar-te-ei}, {louvar-te-ei}).',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego resolve a hipótese com o optativo ({ἐάν τις ἔλθῃ}, {ὄφρα}, {ὡς}), e o português precisa encadear {se} mais condicional ({se alguém vier}). Traduzir o optativo sem a condição perde a hipótese, e não é a flexão que a repõe.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro'),
      text: T(
        'Formas como {louvar-te-ei} pertencem a um registro elevado; o português atual prefere “eu te louvarei”. A mesóclise saiu de uso everyday e continua em Gálatas, Hebreus e nos juramentos.',
      ),
    },
    {
      label: T('O grego também tem futuro'),
      text: T(
        'O grego tem {μέλλω} mais infinitivo ({μέλλω λέγειν}, “está para dizer”) e um futuro verbal próprio ({λέψω). O português biblical prefere o futuro sintético ({digo}, {farei}) onde o grego usava {μέλλω}.',
      ),
    },
  ],
  examples: [
    { text: 'Todo olho o verá.', gloss: T('Futuro ({verá}) com sentido de certeza.') },
    {
      text: 'Ele falaria se tivesse tempo.',
      gloss: T('Condicional no irreal: hipótese não cumprida.'),
    },
    {
      text: 'Se viesse, eu o ouviria.',
      gloss: T('{viesse} mais {ouviria}: hipótese no presente.'),
    },
    { text: 'Se viesse eu, tudo mudaria.', gloss: T('A posição de {viesse} não muda o tempo.') },
    { text: 'Dir-me-ás o que devo.', gloss: T('Mesóclise: pronome entre {dir} e {ás}.') },
    { text: 'Louvar-te-ei, Senhor.', gloss: T('Mesóclise com verbo de movimento ({louvar}).') },
    { text: 'Dar-te-ei mais do que mereces.', gloss: T('Mesóclise em registro elevado.') },
    { text: 'A cobiça acabaria com ele.', gloss: T('Condicional: possibilidade, não previsão.') },
    { text: 'Aquele que vem está à porta.', gloss: T('Presente com sentido de futuro imediato.') },
  ],
  tables: [
    {
      caption: T('Futuro e condicional, pessoa a pessoa'),
      head: ['Pessoa', 'Futuro', 'Condicional'],
      rows: [
        ['eu', 'falarei', 'falaria'],
        ['tu', 'falarás', 'falarias'],
        ['ele', 'falará', 'falaria'],
      ],
    },
    {
      caption: T('Os três tempos da hipótese'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['futuro do subjuntivo', 'se vier', 'se vier, eu vou'],
        ['imperfeito', 'se viesse', 'se viesse, eu iria'],
        ['mais-que-perfeito', 'se tivesse vindo', 'se tivesse vindo, eu teria ido'],
      ],
    },
    {
      caption: T('Próclise e mesóclise com o mesmo pronome'),
      head: ['Forma', 'Onde está o pronome', 'Registro'],
      rows: [
        ['dirás-me', 'depois do verbo', 'atual'],
        ['dir-me-ás', 'entre {dir} e {ás}', 'bíblico'],
        ['dar-te-ei', 'entre {dar} e {ei}', 'elevado'],
      ],
    },
  ],
};
