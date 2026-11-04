import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Os substantivos'),
  subtitle: T('sempre com o gênero decorado junto'),
  section: T('Os substantivos'),
  body: C(`## O substantivo espanhol

Todo substantivo espanhol é **masculino ou feminino** — não há neutro, como em latim. O gênero é gramatical, não natural: {la mesa} é feminino, mas {el mesa} significa «a mesa de jogo» (casa de jogo = «jogo de mesa»! 🎮). Por isso o conselho é de Hill: aprenda sempre o substantivo **com o artigo** — {la leche}, não só {leche}.

O substantivo também é **contável ou incontável** e, portanto, exige ou dispensa plural: {casa}/{casas}, mas {agua}/{aguas} («água» é contável no espanhol: duas águas).

## Distribuição por gênero

**Masculinos**: dias da semana ({el lunes}, {el domingo}), meses ({el enero}, {el julio}), estações ({el verano}), pontos cardeais ({el norte}), substantivos em {-o}, {-or} ({el amor}, {el señor}), {-aje} ({el viaje}), {-ambre} ({el hombre}), {-ete} ({el poeta}), {-ista} ({el profeta} — {el profeta} «profeta» é masculino mesmo terminado em -a!).

**Femininos**: letras do alfabeto ({la a}, {la e}), horas ({la una}, {las tres} «três horas»), substantivos em {-a}, {-ción/-sión} ({la nación}, {la canción}), {-dad/-tad} ({la verdad}, {la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-ista} ({la artista} — aqui feminino!).

## As armadilhas

• {el día} «o dia» — masculino em -a!
• {el mapa}, {el clima}, {el problema}, {el tema} — gregos em {-ma}, quase todos masculinizados.
• {la mano} «a mão», {la foto} «a foto», {la moto} — femininos em -o.
• {el radio} «o aparelho de rádio» × {la radio} «a radiodifusão» (América) — o mesmo substantivo com os dois gêneros e sentidos distintos.
• {la TResult} — feminino em -t.

## Substantivos de pessoa

A pessoa pode ser {el} ou {la} conforme o referente: {el padre} «o padre» / {la madre} «a mãe» · {el rey} / {la reina} «rei / rainha». Maria recebe {la} porque é mulher por natureza, não por regra.`),
  vocab: [
    V('el día', 'día', 'o dia (masc. em -a!)'),
    V('la mano', 'mano', 'a mão (fem. em -o!)'),
    V('el problema', 'problema', 'o problema (grego!)'),
    V('la verdad', 'verdad', 'a verdade (-dad!)'),
    V('las tres', 'tres', 'três horas'),
    V('la palabra', 'palabra', 'a palavra (Jo 1:1)'),
    V('el santo', 'santo', 'o santo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Gênero de "día" e "mano"?'),
    options: [
      T('Feminino e masculino (pela terminação)'),
      T('Masculino e feminino (exceções!)'),
      T('Ambos masculinos'),
      T('Ambos femininos'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com o artigo: ___ verdad (a verdade)'),
      answer: 'la',
      hint: T('Terminação -dad é feminina.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual substantivo é MASCULINO apesar de terminar em -a?'),
      options: [T('la mesa'), T('el día'), T('la canción'), T('la ventana')],
      answer: 1,
      hint: T('Regra §3 das armadilhas.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o gênero ao substantivo'),
      pairs: [
        { a: T('masculinos (-o)'), b: T('{el problema}') },
        { a: T('femininos (-a)'), b: T('{la mano}') },
        { a: T('masculinos (-e)'), b: T('{el hombre} (-ambre)') },
        { a: T('femininos (-dad)'), b: T('{la verdad} (-dad)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Aprenda o substantivo COM o gênero e o artigo: la leche, não só leche.') },
    {
      n: '2',
      text: T('Dias, meses, estações, pontos cardeais, horas e letras são regras seguras.'),
    },
    { n: '3', text: T('Gregos em -ma são masculinos: el problema, el clima, el mapa.') },
    { n: '4', text: T('-ista é comum aos dois gêneros: el profeta / la artista.') },
  ],
  notes: [
    {
      label: T('O substantivo vem quase sempre com artigo'),
      text: T(
        'A regra vale mesmo para o que parece exceção: {Dios} leva artículo, {cielo} leva artigo. A ausência marca ({universo}, {amor}) ou substantiate ({Dios es amor}).',
      ),
    },
  ],
  examples: [
    { text: '{el día}', gloss: T('O dia (masc. em -a!).') },
    { text: '{la mano}', gloss: T('A mão (fem. em -o!).') },
    { text: '{las tres}', gloss: T('Três horas (horas são femininas!).') },
    { text: '{la palabra}', gloss: T('A palavra (Jo 1:1).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Terminações que decidem o gênero'),
      head: [T('Terminação'), T('Gênero'), T('Exemplos')],
      rows: [
        ['-o', 'masc.', '{el libro}, {el amor}'],
        ['-a', 'fem.', '{la casa}, {la nación}'],
        ['-ción / -sión', 'fem.', '{la nación}, {la canción}'],
        ['-dad / -tad', 'fem.', '{la verdad}, {la ciudad}'],
        ['-umbre', 'fem.', '{la costumbre}, {la costumbre}'],
        ['-aje / -ante / -iente', 'masc.', '{el viaje}, {el estudiante}'],
        ['-or', 'masc.', '{el amor}, {el señor}'],
        ['-ista', 'ambos', '{el profeta} / {la artista}'],
      ],
    },
    {
      caption: T('Tabela 2 — Armadilhas de gênero'),
      head: [T('Substantivo'), T('Gênero real'), T('Por qué engana')],
      rows: [
        ['{el día}', 'masc.', T('-a')],
        ['{la mano}', 'fem.', T('-o')],
        ['{el problema}', 'masc.', T('grego -ma')],
        ['{la ciudad}', 'fem.', T('-ad parece masc.')],
        ['{la mano}', 'fem.', T('vogal inicial')],
        ['{el}', 'masc.', T('gênero da palavra, não do referente')],
      ],
    },
  ],
};
