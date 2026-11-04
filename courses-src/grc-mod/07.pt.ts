import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Leitura: João 1:1'),
  subtitle: T('Διάκρινε demótico y koiné'),
  section: T('Leituras'),
  body: C(`## Duas traduções, um verbo

O versículo mais conhecido da Bíblia em grego admite duas leituras. A versão literal, seguindo o texto bizantino, diz **Ἐν ἀρχῇ ἦν ὁ λόγος** — «no princípio era o Verbo». Uma tradução atualizada troca ἦν (era) por **ἦταν** (estava), e a diferença não é cosmética: **ἦν** é a forma mais antiga de εἰμί, o verbo *ser* por excelência, sem tempo definido nem começo; **ἦταν** é o imperfeito, que marca ação contínua e duração.

Nenhuma das duas está errada. A escolha diz o que o tradutor querrealçar: **ἦν** sublinha a eternidade do Verbo, **ἦταν** sublinha a ação que continua.

## O que o texto não diz

O grego **não diz** que Deus «se tornou» Verbo. As três afirmações usam **ἦν** — era, era, era — e entre elas aparece **πρὸς τὸν θεόν**, «junto de Deus». A palavra de que o texto se evita é **ἐγένετο**, «veio a ser»: o verbo que introduz criação e gênese. Quem traduz «se fez carne» (ἐγένετο σάρξ) está traduzindo um verbo diferente do das três afirmações, e é a diferença entre origem e identidade.

## Anatomia do versículo

ἀρχή (o começo), λόγος (da família de λέγω, «dizer», e aqui **Palavra**), θεός (Deus), κόσμος (o mundo). São quatro palavras conhecidas, montadas de um jeito que só o grego permite. **Ἐν ἀρχῇ** com dativo é expressão fixa: «no início», não «em um começo».

## Critério de leitura

Em Jo 1:1, se a sua tradução usa «era» e a de outro usa «estava», as duas estão certas. Mas há algo que nenhuma delas mostra: a identidade, não a comparação. O Verbo não é *como* Deus — o Verbo **era** Deus.`),
  vocab: [
    V('ἀρχή', 'ἀρχή', 'princípio'),
    V('ἦν', 'εἰμί', 'era'),
    V('ἦτο', 'εἰμί', 'era'),
    V('λόγος', 'λόγος', 'Palavra'),
    V('παρά', 'παρά', 'junto a'),
    V('Θεός', 'θεός', 'Deus'),
    V('ζωή', 'ζωή', 'vida'),
    V('φῶς', 'φῶς', 'luz'),
    V('ἐν', 'ἐν', 'em, no início'),
    V('ήταν', 'είμαι', 'era (demótico)'),
    V('κτίση', 'κτίσις', 'criação'),
    V('κτίζω', 'κτίζω', 'crio, criar'),
    V('λέγω', 'λέγω', 'digo, dizer'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma moderna de ἦν?'),
    options: [T('ήταν'), T('ἦν'), T('είναι'), T('ήμουν')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Ἐν ___ ἦν ὁ λόγος'), answer: 'ἀρχῇ', hint: T('«No início»') },
    {
      kind: 'choose',
      prompt: T('Qual palavra significa «Palavra»?'),
      options: [T('λόγος'), T('ἀρχή'), T('ζωή'), T('φῶς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe forma e estágio'),
      pairs: [
        { a: 'ἦν', b: T('koiné') },
        { a: 'ήταν', b: T('moderno') },
        { a: 'λόγος', b: T('Palavra') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('ἦν es koiné; ήταν es la forma Demótica de ese mismo pasado.') }],
  notes: [
    {
      label: T('Fidelidade'),
      text: T(
        'Θεὸς ἦν ὁ λόγος usa el verbo ser y no κτίζω: João 1:1 no presenta a la Palabra como una criatura.',
      ),
    },
  ],
  examples: [
    { text: 'Ἐν ἀρχῇ ἦν ὁ λόγος', gloss: T('No princípio era a Palavra') },
    { text: 'Ἐν αρχή ήταν ο λόγος', gloss: T('No início estava a Palavra') },
  ],
  tables: [
    {
      caption: T('Koiné y demótico'),
      head: ['Función', 'Koiné', 'Moderno'],
      rows: [
        ['ser (3ª sg.)', 'ἦν', 'ήταν'],
        ['junto a', 'παρά + dativo', 'παρά + acusativo'],
        ['Artículo', 'ὁ λόγος', 'ο λόγος'],
      ],
    },
  ],
};
