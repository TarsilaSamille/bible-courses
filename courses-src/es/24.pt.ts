import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Os pronomes pessoais'),
  subtitle: T('yo, tú, él — me/te/lo, le/les'),
  section: T('Os pronomes'),
  body: C(`## Três séries, três funções

**Sujeito** (quase sempre dispensável, porque o verbo já diz quem): {yo}, {tú}, {él/ella/usted}, {nosotros}, {vosotros}, {ellos/ustedes}.

**Objeto direto**: {me}, {te}, {lo/la}, {nos}, {os}, {los/las} — {Dios te ama} «Deus te ama» · {lo veo} «vejo-o».

**Objeto indireto** (dativo): {me}, {te}, {le}, {nos}, {os}, {les} — {le doy} «dou-lhe» · {les hablo} «falo-lhes».

## {le} → {se}

Quando o objeto indireto {le} ou {les} aparece **junto** do objeto direto {lo/la/los/las}, vira {se}: {se lo dio} «deu-lho» · {se las dio} «deu-lhas» · {se lo dijo} «disse-lho».

É a solução do espanhol para o que o português faz com a anteposição do {lhe} ao substantivo.

## Onde o pronome fica

• Antes do verbo conjugado: {te amo} «amo-te» · {lo veo} «vejo-o».
• Depois do infinitivo, gerúndio e imperativo **afirmativo**: {amarte} «amar-te» · {hablándome} «falando-me» · {ámame} «ama-me».
• Antes do verbo na negativo e no subjuntivo: {No me digas} «não me digas».

## {os} e a marca de {"-os}"

O pronome {os} (vós, Espanha) se gruda ao verbo: {hablad} → {hablãos}? Não: {hablad} + {os} = {hablad} ({os} desaparece por dissolução: {decíos} «dizei-me» é {decir} + {os} → {decís} + {os} = {decíos}).

A forma prática: os verbos em {-ir} e {-er} na 2ª pessoa do plural ganham {é} antes do {os}: {compráis} → {comprad}? — {decís} → {decíos}, {tenéis} → {teneos}, {oís} → {oíos}.`),
  vocab: [
    V('yo', 'yo', 'eu'),
    V('tú', 'tú', 'tu'),
    V('lo', 'lo', 'o (objeto!)'),
    V('le', 'le', 'lhe (indireto!)'),
    V('les', 'les', 'lhes'),
    V('se lo', 'se', 'lho (le → se!)'),
    V('ámame', 'amar', 'ama-me (imperativo + me)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "se lo dio" e não "le lo dio"?'),
    options: [T('Erro'), T('"le/les" vira "se" antes de "lo/la"!'), T('Plural'), T('Passado')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Dios ___ ama" (Deus te ama)'),
      answer: 'te',
      hint: T('Objeto direto de 2ª pessoa: te.'),
    },
    {
      kind: 'choose',
      prompt: T('Onde o pronome fica no infinitivo?'),
      options: [T('{te amo}'), T('{amar te}'), T('{amarte}'), T('{amarme}')],
      answer: 2,
      hint: T('Regra §3: depois do infinitivo, colado.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à função'),
      pairs: [
        { a: T('{yo}'), b: T('sujeito') },
        { a: T('{me}'), b: T('objeto direto') },
        { a: T('{le}'), b: T('objeto indireto') },
        { a: T('{se}'), b: T('le/les antes de lo/la') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O pronome sujeito se omite quando o verbo já identifica o sujeito: Hablo, Habla Dios.',
      ),
    },
    { n: '2', text: T('O objeto indireto usa le/les: le doy el libro, les hablo.') },
    { n: '3', text: T('le/les vira se antes de lo/la/los/las: se lo dio, se las dijo.') },
    {
      n: '4',
      text: T(
        'Os pronomes vatigem no infinitivo, gerúndio e imperativo afirmativo; no negativo, ficam antes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ele seRestore'),
      text: T(
        'O pronome {él} volta ao final da oração quando se liga a outro elemento: {Le doy el libro a él}. A posição final não é opcionalidade: evita repetir o substantivo em cima.',
      ),
    },
  ],
  examples: [
    { text: '{Dios te ama}', gloss: T('Deus te ama (objeto direto {te}).') },
    { text: '{se lo dio}', gloss: T('Deu-lho ({le} → {se}!).') },
    { text: '{ámame}', gloss: T('Ama-me (imperativo + pronome colado).') },
    { text: '{no me lo digas}', gloss: T('Não mo digas (negativo: antes do verbo).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três séries'),
      head: [T('Pessoa'), T('Sujeito'), T('Objeto direto'), T('Objeto indireto')],
      rows: [
        ['1ª', '{yo}', '{me}', '{me}'],
        ['2ª', '{tú}', '{te}', '{te}'],
        ['3ª', '{él/ella/usted}', '{lo/la}', '{le}'],
        ['1ª pl.', '{nosotros}', '{nos}', '{nos}'],
        ['2ª pl.', '{vosotros}', '{os}', '{os}'],
        ['3ª pl.', '{ellos/ustedes}', '{los/las}', '{les}'],
      ],
    },
    {
      caption: T('Tabela 2 — Posição do pronome'),
      head: [T('Contexto'), T('Posição'), T('Exemplo')],
      rows: [
        [T('verbo conjugado'), 'antes', '{te amo}'],
        [T('infinitivo'), 'depois, colado', '{amarte}'],
        [T('gerúndio'), 'depois, colado', '{diciéndoselo}'],
        [T('imperativo afirmativo'), 'depois, colado', '{ámame}'],
        [T('negativo / subjuntivo'), 'antes', '{no me lo digas}'],
      ],
    },
  ],
};
