import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('El plural de los sustantivos'),
  subtitle: T('-s, -es — y los invariables'),
  section: T('Los sustantivos'),
  body: C(`## Las tres reglas

**Vocal + -s**: {libro} → {libros} · {madre} → {madres} · {palabra} → {palabras} · {día} → {días}.

**Consonante + -es**: {pan} → {panes} · {reloj} → {relojes} · {joven} → {jóvenes} · {árbol} → {árboles}.

**-z → -ces**: {luz} → {luces} · {vez} → {veces} · {voz} → {voces} · {cruz} → {cruces} · {raíz} → {raíces}.

## El plural toca el acento

La terminación nueva puede desplazar la sílaba tónica, y el acento hay que rehacerlo:

• {árbol} → {árboles}: ¡pierde el acento! Pasa a ser grave terminada en consonante, que es la regla natural.
• {joven} → {jóvenes}: ¡gana acento! {joven} era aguda terminada en {n}; {jóvenes} es esdrújula, así que el acento es obligatorio.
• {limón} → {limones}: pierde el acento por la misma razón que {árbol}.

## Invariables

Los sustantivos terminados en {-s} con la última sílaba **átona** no llevan marca de plural:

• {el lunes} → {los lunes} «los lunes»
• {el martes} → {los martes}
• {el análisis} → {los análisis}
• {la crisis} → {las crisis} · {la tesis} → {las tesis}

Los días de la semana son irregulares: {el lunes} pero {los martes}, {los miércoles}, {los viernes}, {los sábados}, {los domingos}: la marca está solo en el artículo.

## El cuerpo humano

El cuerpo humano tiene plurales irregulares: {el pie} → {los pies} · {la mano} → {las manos} · {el diente} → {los dientes} · {el hombre} → {los hombres}.

## Europa × América

Las reglas del plural no cambian. Lo que cambia es el plural de los sustantivos cultos: España {los análisis}; América conserva a menudo la forma latina {los analyses}.`),
  vocab: [
    V('libros', 'libro', 'libros (+s)'),
    V('luces', 'luz', 'luces (¡z→c!)'),
    V('árboles', 'árbol', 'árboles (¡pierde el acento!)'),
    V('los lunes', 'lunes', 'los lunes (¡invariable!)'),
    V('los pies', 'pie', 'los pies'),
    V('jóvenes', 'joven', 'jóvenes (¡gana acento!)'),
    V('las palabras', 'palabra', 'las palabras (Jn 1.1)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «luz → ___» (luces)'),
    answer: 'luces',
    hint: T('La z se convierte en c + es.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de «árbol»: ___ (¡sin acento!)'),
      answer: 'árboles',
      hint: T('Regla §2: el plural desplaza el acento.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué sustantivo es invariable?'),
      options: [
        T('{el lunes} → {los lunes}'),
        T('{el libro} → {los libros}'),
        T('{la luz} → {las luces}'),
        T('{la mano} → {las manos}'),
      ],
      answer: 0,
      hint: T('Termina en -s con la última sílaba átona.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el plural de «pie»: los ___ (los pies)'),
      answer: 'pies',
      hint: T('Plural irregular del cuerpo.'),
    },
  ],
  rules: [
    { n: '1', text: T('Vocal + -s; consonante + -es; -z se vuelve -ces.') },
    {
      n: '2',
      text: T(
        'El plural puede robar o dar acento: árbol → arboles (¡pierde!), joven → jóvenes (¡ganha!).',
      ),
    },
    {
      n: '3',
      text: T(
        'Los sustantivos en -s con última sílaba átona son invariables: los lunes, las crisis.',
      ),
    },
  ],
  notes: [
    {
      label: T('Agrupación del plural'),
      text: T(
        'Los plurales siguen tres familias: -{es} tras consonante ({ciudades}), -{es} tras {-z} ({cielo} → {cielos}, la {z} pasa a {ce}) y {-s} en el resto. Con {-ón} la regla cambia otra vez: {cansión} → {cansiones}.',
      ),
    },
  ],
  examples: [
    { text: '{libros}', gloss: T('Libros.') },
    { text: '{luces}', gloss: T('Luces (¡z→c!).') },
    { text: '{los pies}', gloss: T('Los pies.') },
    { text: '{los árboles}', gloss: T('Los árboles (¡el acento desapareció!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Plurales regulares'),
      head: [T('Termina en'), T('Plural'), T('Ejemplo')],
      rows: [
        ['vogal', '+ -s', '{libros}'],
        ['consoante', '+ -es', '{panes}'],
        ['-z', '-ces', '{luces}'],
        ['-s átono', T('¡invariable!'), '{los lunes}'],
      ],
    },
    {
      caption: T('Tabla 2 — Plurales irregulares'),
      head: [T('Singular'), T('Plural'), T('Nota')],
      rows: [
        ['{el pie}', '{los pies}', T('pie')],
        ['{la mano}', '{las manos}', T('mano')],
        ['{el diente}', '{los dientes}', T('diente')],
        ['{el lunes}', '{los lunes}', T('-s átono: solo cambia el artículo')],
        ['{el árbol}', '{los árboles}', T('pierde el acento')],
      ],
    },
  ],
};
