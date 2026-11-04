import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Los sustantivos'),
  subtitle: T('siempre con el género memorizado'),
  section: T('Los sustantivos'),
  body: C(`## El sustantivo español

Todo sustantivo español es **masculino o femenino**: no hay neutro como en latín. El género es gramatical, no natural: {la mesa} es femenino, pero {el mesa} significa «la mesa de juego» (¡juego de mesa!). Por eso el consejo de Hill: aprende siempre el sustantivo **con su artículo** — {la leche}, no solo {leche}.

Los sustantivos son además **contables o incontables**, y por eso forman o no plural: {casa}/{casas}, pero {agua}/{aguas} (el «agua» es contable en español: dos aguas).

## Distribución por género

**Masculinos**: días de la semana ({el lunes}, {el domingo}), meses ({el enero}, {el julio}), estaciones ({el verano}), puntos cardinales ({el norte}), sustantivos en {-o}, {-or} ({el amor}, {el señor}), {-aje} ({el viaje}), {-ambre} ({el hombre}), {-ete} ({el poeta}), {-ista} ({el profeta} — ¡masculino pese a la -a!).

**Femeninos**: letras del alfabeto ({la a}, {la e}), horas ({la una}, {las tres} «las tres»), sustantivos en {-a}, {-ción/-sión} ({la nación}, {la canción}), {-dad/-tad} ({la verdad}, {la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-ista} ({la artista} — ¡aquí femenino!).

## Las trampas

• {el día} «día» — ¡masculino en -a!
• {el mapa}, {el clima}, {el problema}, {el tema} — griegos en {-ma}, casi todos masculinizados.
• {la mano} «mano», {la foto} «foto», {la moto} «moto» — femeninos en -o.
• {el radio} «el aparato de radio» frente a {la radio} «la radiodifusión» (América): un mismo sustantivo con dos géneros y dos sentidos.
• {la tía} «tía» — femenino en -t.

## Sustantivos de persona

La persona puede ser {el} o {la} según el referente: {el padre} «el padre» / {la madre} «la madre» · {el rey} «el rey» / {la reina} «la reina». María lleva {la} porque es mujer por naturaleza, no por regla.

## Europa × América

El género no cambia entre España y América. Lo que cambia es el **vocalismo** de algunos sustantivos: España {ordenador}, {coche}, {orden}; América {computadora}, {carro}, {comanda}. En ambos mundos, la Biblia se lee en la norma castellana.`),
  vocab: [
    V('el día', 'día', 'el día (¡masc. en -a!)'),
    V('la mano', 'mano', 'la mano (¡fem. en -o!)'),
    V('el problema', 'problema', 'el problema (¡griego!)'),
    V('la verdad', 'verdad', 'la verdad (¡-dad!)'),
    V('las tres', 'tres', 'las tres'),
    V('la palabra', 'palabra', 'la palabra (Jn 1.1)'),
    V('el santo', 'santo', 'el santo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Género de «día» y de «mano»?'),
    options: [
      T('Femenino y masculino (por la terminación)'),
      T('Masculino y femenino (¡excepciones!)'),
      T('Los dos masculinos'),
      T('Los dos femeninos'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con el artículo: ___ verdad (verdad)'),
      answer: 'la',
      hint: T('La terminación -dad es femenina.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué sustantivo es MASCULINO aunque termine en -a?'),
      options: [T('la mesa'), T('el día'), T('la canción'), T('la ventana')],
      answer: 1,
      hint: T('Regla de trampas §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el género con el sustantivo'),
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
    { n: '1', text: T('Aprende el sustantivo CON género y artículo: la leche, no solo leche.') },
    {
      n: '2',
      text: T('Días, meses, estaciones, puntos cardinales, horas y letras son reglas seguras.'),
    },
    { n: '3', text: T('Los griegos en -ma son masculinos: el problema, el clima, el mapa.') },
    { n: '4', text: T('-ista sirve para los dos géneros: el profeta / la artista.') },
  ],
  notes: [
    {
      label: T('El sustantivo va casi siempre con artículo'),
      text: T(
        'La regla se cumple aun donde parece excepción: {Dios} lleva artículo, {cielo} lo lleva. La ausencia marca lo abstracto ({universo}, {amor}) o un predicado ({Dios es amor}).',
      ),
    },
  ],
  examples: [
    { text: '{el día}', gloss: T('El día (¡masc. en -a!)') },
    { text: '{la mano}', gloss: T('La mano (¡fem. en -o!)') },
    { text: '{las tres}', gloss: T('Las tres (¡las horas son femeninas!)') },
    { text: '{la palabra}', gloss: T('La palabra (Jn 1.1).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Terminaciones que deciden el género'),
      head: [T('Terminación'), T('Género'), T('Ejemplos')],
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
      caption: T('Tabla 2 — Trampas de género'),
      head: [T('Sustantivo'), T('Género real'), T('Por qué engaña')],
      rows: [
        ['{el día}', 'masc.', T('-a')],
        ['{la mano}', 'fem.', T('-o')],
        ['{el problema}', 'masc.', T('griego -ma')],
        ['{la ciudad}', 'fem.', T('-ad parece masc.')],
        ['{la mano}', 'fem.', T('vocal inicial')],
        ['{el}', 'masc.', T('género de la palabra, no del referente')],
      ],
    },
  ],
};
