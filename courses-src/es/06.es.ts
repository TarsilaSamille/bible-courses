import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('El género de los sustantivos'),
  subtitle: T('reglas de bolsillo + pares heterogéneos'),
  section: T('Los sustantivos'),
  body: C(`## Reglas de bolsillo (acertan ~90%)

**MASCULINO**: {-o} ({el libro}), días y meses ({el sábado}, {el mayo}), {-or} ({el amor}), {-aje} ({el viaje}), {-ante/-iente} ({el estudiante}), {-ambre} ({el hombre}).

**FEMENINO**: {-a} ({la casa}), {-ción/-sión} ({la canción}), {-dad/-tad} ({la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-e} ({la noche}).

## El género que cambia el sentido

Algunos pares cambian de significado cuando cambia el artículo:

• {el capital} «los recursos» frente a {la capital} «la ciudad».
• {el cura} «el sacerdote» frente a {la cura} «la cura, el tratamiento».
• {el frente} «la línea de combate» frente a {la frente} «la frente del cuerpo».
• {el orden} «la orden militar» frente a {la orden} «el pedido».
• {el coma} «el estado clínico» frente a {la coma} «el signo de puntuación».

## El artículo sigue a la persona

En los sustantivos de persona el género viene del referente, no de la palabra: {el rey} frente a {la reina} · {el hermano} frente a {la hermana} · {el primo} frente a {la prima}. Las profesiones en {-ista} tienen género común: {el artista} frente a {la artista}.

## Casos de género común

También son de género común: {el atleta}, {el guía} (pero {la guía} «la guía, el libro»!), {el colega}, {el testigo} («la testigo» también vale). En las profesiones nuevas se usa cada vez más la doble forma: {el Portero} / {la Portera}.`),
  vocab: [
    V('el capital', 'capital', 'el capital (¡los recursos!)'),
    V('la capital', 'capital', 'la capital (¡la ciudad!)'),
    V('el cura', 'cura', 'el cura (el sacerdote)'),
    V('la cura', 'cura', 'la cura (la curación)'),
    V('la reina', 'reina', 'la reina'),
    V('el rey', 'rey', 'el rey'),
    V('el estudiante', 'estudiante', 'el estudiante (¡común!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«el capital» frente a «la capital»?'),
    options: [
      T('Sinónimos'),
      T('Recursos frente a ciudad (¡el género cambia el sentido!)'),
      T('Singular frente a plural'),
      T('Bien frente a mal'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ cura (el sacerdote)'),
      answer: 'el',
      hint: T('Regla §2: el sacerdote es masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('La frente del cuerpo es «___ frente»; la línea de combate es «___ frente».'),
      options: [
        T('la frente / el frente'),
        T('el frente / la frente'),
        T('los frente / las frente'),
        T('el mismo género en los dos'),
      ],
      answer: 0,
      hint: T('Regla §2: pares heterogéneos.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con el género correcto'),
      pairs: [
        { a: T('{la canción}'), b: T('femenino') },
        { a: T('{el amor}'), b: T('masculino') },
        { a: T('{la ciudad}'), b: T('femenino') },
        { a: T('{el hombre}'), b: T('masculino') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Masculino: -o, días/meses, -or, -aje, -ante/-iente. Femenino: -a, -ción, -dad, -tad, -umbre, -ie.',
      ),
    },
    {
      n: '2',
      text: T(
        'El género puede cambiar el sentido: el capital/la capital, el cura/la cura, el frente/la frente.',
      ),
    },
    { n: '3', text: T('El artículo sigue al referente, no a la palabra: el rey/la reina.') },
  ],
  notes: [
    {
      label: T('No todo tiene género regular'),
      text: T(
        'Los sustantivos en {-ción}, {-sión}, {-dad} son femeninos aunque el masculino sea irregular: {la canción} frente a {el canción}, {la región} frente a {el región}. Aprende la lista en lugar de deducir del final.',
      ),
    },
  ],
  examples: [
    { text: '{el cura}', gloss: T('El cura (el sacerdote).') },
    { text: '{la cura}', gloss: T('La cura (la curación).') },
    { text: '{la reina}', gloss: T('La reina.') },
    { text: '{la capital}', gloss: T('La capital (¡la ciudad!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Reglas de género por terminación'),
      head: [T('Terminación'), T('Género'), T('Ejemplo')],
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
      caption: T('Tabla 2 — El género cambia el sentido'),
      head: [T('Masculino'), T('Sentido A'), T('Femenino'), T('Sentido B')],
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
