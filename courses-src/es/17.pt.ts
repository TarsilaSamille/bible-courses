import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('O imperfeito'),
  subtitle: T('hablaba — cenário, hábito, descrição'),
  section: T('Os verbos'),
  body: C(`## O cenário

O imperfeito descreve o **fundo**: estado, hábito, descrição, ação em curso que serve de cenário para um evento. As desinências são só três: {-aba} para {-ar}, {-ía} para {-er} e {-ir}.

{hablaba}, {hablabas}, {hablaba}, {hablábamos}, {hablabais}, {hablaban} · {comía} · {vivía}.

## Apenas três irregulares

{ser} → {era} · {ir} → {iba} · {ver} → {veía}. Todo o resto é regular.

## Quatro usos

1. **Descrição**: {Era ciego} «era cego» (Jo 9:25) — o estado anterior.
2. **Hábito**: {Orábamos juntos} «orávamos juntos» — ação repetida no passado.
3. **Ação em curso (fundo)**: {Mientras oraba, vino} «enquanto orava, veio» — o pretérito {vino} é o evento que corta a cena.
4. **Fundo emocional e textual**: {era de noche} «era noite» (Jo 13:30).

## O par que revela o sentido

{Mientras oraba, vino} — o imperfeito põe Adão orando no centro, e o pretérito diz que alguém chegou. O mesmo contraste explica {Leyó mientras escribía} «leu enquanto escrevia»: os dois verbos contam a mesma cena, mas o foco é do {vino}.

## Progressiva passada

{estar} no imperfeito + gerúndio: {estaba orando} «estava orando» · {estaban durmiendo} «estavam dormindo».

## O tempo verbal da narração bíblica

O Evangelho de Marcos foi escrito em grego **no imperfeito** ({andaba sobre el mar}, Mc 4:39), que dá à narração um movimento de aproximação; João, ao contrário, usa o aoristo grego, produzindo um relato seco e pontuado.`),
  vocab: [
    V('hablaba', 'hablar', 'falava'),
    V('era', 'ser', 'era (irregular!)'),
    V('iba', 'ir', 'ia (irregular!)'),
    V('veía', 'ver', 'via (irregular!)'),
    V('mientras', 'mientras', 'enquanto'),
    V('estaba orando', 'orar', 'estava orando'),
    V('era de noche', 'noche', 'era noite (Jo 13:30)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Os 3 irregulares do imperfeito?'),
    options: [
      T('ser, ir, ver (era, iba, veía)'),
      T('ser, estar, haber'),
      T('dar, ver, saber'),
      T('Nenhum (tudo regular)'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperfeito de "ir" (3ª pessoa): ___ (ia)'),
      answer: 'iba',
      hint: T('Regra §2: apenas três irregulares.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Mientras oraba, vino", qual verbo é o EVENTO?'),
      options: [T('{oraba} (imperfeito)'), T('{vino} (pretérito)'), T('{mientras}'), T('Os dois')],
      answer: 1,
      hint: T('Regra §3: o pretérito corta a cena.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o uso ao exemplo'),
      pairs: [
        { a: T('descrição'), b: T('{Era ciego}') },
        { a: T('hábito'), b: T('{Orábamos juntos}') },
        { a: T('progressiva'), b: T('{estaba orando}') },
        { a: T('atmosfera'), b: T('{era de noche}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Apenas -ar, -er, -ir com três desinências: -aba, -ía.') },
    { n: '2', text: T('Só três irregulares: ser→era, ir→iba, ver→veía.') },
    { n: '3', text: T('Imperfeito = fundo, pretérito = evento: Mientras oraba, vino.') },
    { n: '4', text: T('Estar no imperfeito + gerúndio = progressiva passada: estaba orando.') },
  ],
  notes: [
    {
      label: T('O imperfeito em três funções'),
      text: T(
        'O mesmo tempo pinta cenário, hábito e descrição de estado. {Llovía} pode ser "chovia" (chuva em curso) ou "chovia" (costumava chover): o que muda é o entorno, não a forma.',
      ),
    },
  ],
  examples: [
    { text: '{Mientras oraba, vino}', gloss: T('Enquanto orava, veio (Gn 3:9 — fundo × evento).') },
    { text: '{era de noche}', gloss: T('Era noite (Jo 13:30 — atmosfera).') },
    { text: '{estaba orando}', gloss: T('Estava orando (progressiva passada).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Imperfeito × pretérito'),
      head: [T('Pretérito (evento)'), T('Imperfeito (fundo)'), T('Significado')],
      rows: [
        ['{Vino}', '{oraba}', T('chegou enquanto orava')],
        ['{Leyó}', '{escribía}', T('leu enquanto escrevia')],
        ['{Habló}', '{era niño}', T('falou (era criança)')],
        ['{Murió}', '{vivía en Galilea}', T('morreu (vivia na Galiléia)')],
      ],
    },
    {
      caption: T('Tabela 2 — Imperfeito: usos e exemplos'),
      head: [T('Uso'), T('Exemplo'), T('Referência')],
      rows: [
        ['descrição', '{Era ciego}', 'Jo 9.25'],
        ['hábito', '{Orábamos juntos}', '1 Ts 5.17'],
        ['fundo em curso', '{Mientras oraba, vino}', 'Gn 3.9'],
        ['atmosfera', '{era de noche}', 'Jn 13.30'],
        ['idade', '{Jesús tenía treinta años}', 'Lc 3.23'],
      ],
    },
  ],
};
