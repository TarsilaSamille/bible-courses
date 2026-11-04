import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('O gênero dos substantivos'),
  subtitle: T('regras de bolso + pares heterogêneos'),
  section: T('Os substantivos'),
  body: C(`## Regras de bolso (acertam ~90%)

**MASCULINO**: {-o} ({el libro}), dias e meses ({el sábado}, {el mayo}), {-or} ({el amor}), {-aje} ({el viaje} «viagem»), {-ante/-iente} ({el estudiante}), {-ambre} ({el hombre}).

**FEMININO**: {-a} ({la casa}), {-ción/-sión} ({la canción}), {-dad/-tad} ({la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-e} ({la noche}).

## O gênero que muda o sentido

Alguns pares mudam de significado quando o artigo muda:

• {el capital} «os recursos» × {la capital} «a cidade».
• {el cura} «o sacerdote» × {la cura} «a cura, o tratamento».
• {el frente} «a linha de combate» × {la frente} «a testa».
• {el orden} «a ordem militar» × {la orden} «o pedido».
• {el coma} «o estado clínico» × {la coma} «o sinal de pontuação».

## O artigo segue a pessoa

Para substantivos de pessoa, o gênero vem do referente, não da palavra: {el rey} × {la reina} · {el hermano} × {la hermana} · {el primo} × {la prima}. As profissões em {-ista} são de gênero comum: {el artista} × {la artista}.

## Casos de gênero comum

Também são comuns: {el artista}, {el atleta}, {el guía} (mas {la guía} «a guia, o livro»!), {el colega}, {el testigo} («a testemunha» {la testigo} também vale). Em profissões novas, o gênero duplo é cada vez mais comum: {la partner}.`),
  vocab: [
    V('el capital', 'capital', 'o capital (dinheiro!)'),
    V('la capital', 'capital', 'a capital (cidade!)'),
    V('el cura', 'cura', 'o padre'),
    V('la cura', 'cura', 'a cura'),
    V('la reina', 'reina', 'a rainha'),
    V('el rey', 'rey', 'o rei'),
    V('el estudiante', 'estudiante', 'o estudante (comum!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"el capital" × "la capital"?'),
    options: [
      T('Sinônimos'),
      T('Dinheiro × cidade (o gênero muda o sentido!)'),
      T('Singular × plural'),
      T('Certo × errado'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ cura (o padre)'),
      answer: 'el',
      hint: T('Regra §2: o padre é masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('A testa do corpo é "___ frente"; a linha de combate é "___ frente".'),
      options: [
        T('la frente / el frente'),
        T('el frente / la frente'),
        T('los frente / las frente'),
        T('o mesmo gênero nos dois'),
      ],
      answer: 0,
      hint: T('Regra §2: pares heterogêneos.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao gênero correto'),
      pairs: [
        { a: T('{la canción}'), b: T('feminino') },
        { a: T('{el amor}'), b: T('masculino') },
        { a: T('{la ciudad}'), b: T('feminino') },
        { a: T('{el hombre}'), b: T('masculino') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Masculino: -o, dias/meses, -or, -aje, -ante/-iente. Feminino: -a, -ción, -dad, -tad, -umbre, -ie.',
      ),
    },
    {
      n: '2',
      text: T(
        'O gênero pode mudar o sentido: el capital/la capital, el cura/la cura, el frente/la frente.',
      ),
    },
    { n: '3', text: T('O artigo segue o referente, não a palavra: el rey/la reina.') },
  ],
  notes: [
    {
      label: T('Nem tudo tem gênero regular'),
      text: T(
        'Substantivos terminados em {-ción}, {-sión}, {-dad} são femininos mesmo quando o masculino é irregular: {la canción} de {el canción}, {la región} de {el región}. Aprenda a lista em vez de derivar do final.',
      ),
    },
  ],
  examples: [
    { text: '{el cura}', gloss: T('O padre.') },
    { text: '{la cura}', gloss: T('A cura (o tratamento).') },
    { text: '{la reina}', gloss: T('A rainha.') },
    { text: '{la capital}', gloss: T('A capital (a cidade!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Regras de gênero por terminação'),
      head: [T('Terminação'), T('Gênero'), T('Exemplo')],
      rows: [
        ['-o', 'masc.', '{el amor}'],
        ['-or', 'masc.', '{el señor}'],
        ['-aje, -ante, -iente', 'masc.', '{el viaje}, {el estudiante}'],
        ['-ambre', 'ambos', '{el hombre}, {la costumbre}'],
        ['-a', 'fem.', '{la casa}'],
        ['-ción, -sión', 'fem.', '{la canción}'],
        ['-dad, -tad', 'fem.', '{la ciudad}'],
        ['-umbre', 'fem.', '{la costumbre}'],
        ['-ie', 'fem.', '{la serie}'],
        ['-ista', 'ambos', '{el poeta}, {la artista}'],
      ],
    },
    {
      caption: T('Tabela 2 — O gênero muda o sentido'),
      head: [T('Masculino'), T('Sentido A'), T('Feminino'), T('Sentido B')],
      rows: [
        ['{el capital}', 'recursos', '{la capital}', 'cidade'],
        ['{el cura}', 'sacerdote', '{la cura}', 'tratamento'],
        ['{el frente}', 'linha de combate', '{la frente}', 'testa'],
        ['{el orden}', 'ordem militar', '{la orden}', 'pedido'],
        ['{el coma}', 'estado clínico', '{la coma}', 'sinal de pontuação'],
      ],
    },
  ],
};
