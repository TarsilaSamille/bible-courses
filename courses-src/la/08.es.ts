import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('La tercera declinación'),
  subtitle: T('{rex, regis} — el nominativo engaña, el genitivo no'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## Cómo se reconoce

La tercera declinación es la más poblada del latín: contiene el vocabulario más abstracto, los nombres de agente y los neutros en {-ium}. Se reconoce por un par de propiedades que bastan para clasificar cualquier palabra:

1. El **nominativo** termina en consonante, o en {-as}, {-os}, {-er}, {-or}, {-es} — {rex}, {civitas}, {canis}, {miles}, {lumen};
2. El **genitivo singular** termina en {-is} o {-os} — {regis}, {civitatis}, {canis}, {militis}, {luminis}.

Si ves un {-is} en el genitivo singular, es tercera declinación casi siempre. Por eso la tabla de la tercera es la que se memoriza primero.

## El tema: dos vocales en juego

La dificultad real de la tercera está en el **imperfecto**, y el problema se ve ya en {rex, regis}. El tema es {reg-}, y el nominativo tiene {e} + {x}; en el genitivo aparece {e} + {i}. Lo que ocurre es que la {x} representa una {ks} que el latín unas veces escribe {x} y otras {c} — así que el mismo tema tiene dos disfraces.

Simplificando: el genitivo singular muestra el tema más el {is}. Compara:

- {rex, regis} — tema {reg-}, pero el nominativo tiene {x};
- {miles, militis} — tema {mīlit-} (vocal larga);
- {lumen, luminis} — tema {lūmin-} (vocal larga).

En los dos últimos la vocal del tema es larga, y por eso la {i} del genitivo es breve y la forma pesa más.

## El plural

El plural cambia el final del tema por {ēs} y alarga la vocal final. El problema aparece en el **nominativo y el genitivo plural**, que siguen temas distintos:

| Singular | Gen. sg. | Nom. pl. | Gen. pl. |
|---|---|---|---|
| rēx | rēgis | rēgēs | rēgum |
| mīles | mīlitis | mīlitēs | mīlitum |
| lūmen | lūminis | lūmina | lūminum |
| pars | partis | partēs | partium |
| canis | canis | canēs | canum |

Fíjate en {pars} → {partium} y en {canis} → {canum}: unos temas añaden {i} antes del sufijo {um} y otros no. La razón histórica es que algunos temas tenían {i} en su origen y otros no. No hay regla — solo la forma.

## Los sustantivos en -ius

Un grupo de neutros tiene {i} en el genitivo singular e {ium} en el plural: {bellum, belli} pero {bellōrum}, {verbum, verbī} pero {verbōrum}, {civis, civis} pero {cīvium}, {hostis, hostis} pero {hostium}. Son los **i-stem**, y sus formas son regulares una vez aprendida la regla: genitivo y dativo plural llevan {i} + {um}.

El sustantivo más famoso del grupo es {civitas} «ciudad» — y es precisamente el que usa la Vulgata al hablar de la ciudad de {Hierusalem}: {Ierusalem, quae est civitas Iudaeae}.

## Qué hace la Vulgata con la tercera declinación

Los nombres que dominan el Nuevo Testamento en latín son casi todos de tercera: {lux} y {lumen}, {caro} «carne», {salvator} «salvador», {pax} «paz», {fides} «fe», {spes} «esperanza», {mors} «muerte». Si aprendes la tercera declinación, aprendes el vocabulario central de la fe cristiana.`),
  vocab: [
    V('rex', 'rex', 'rey (x = cs)'),
    V('regnum', 'regnum', 'reino'),
    V('corpus', 'corpus', 'cuerpo'),
    V('lumen', 'lumen', 'luz, claridad'),
    V('miles', 'miles', 'soldado'),
    V('canis', 'canis', 'perro'),
    V('gens', 'gens', 'nación, gente'),
    V('urbs', 'urbs', 'ciudad'),
    V('pars', 'pars', 'parte (i-stem)'),
    V('mors', 'mors', 'muerte'),
    V('amor', 'amor', 'amor'),
    V('pastor', 'pastor', 'pastor'),
    V('flos', 'flos', 'flor'),
    V('nomen', 'nomen', 'nombre'),
    V('hostis', 'hostis', 'enemigo (i-stem)'),
    V('civitas', 'civitas', 'ciudad, estado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué revela el genitivo {regis} sobre la forma {rex}?'),
    options: [
      T('Que el tema es {reg-} y la {x} del nominativo esconde un {cs}'),
      T('Que {rex} es de segunda declinación'),
      T('Que {rex} es un verbo'),
      T('Que el genitivo nunca coincide con el tema'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos i-stem tiene genitivo plural en {ium}?'),
      options: [T('{canum}'), T('{mīlitum}'), T('{cīvium}'), T('{rēgum}')],
      answer: 2,
      hint: T('Regla §4: los i-stem llevan {i} antes del sufijo {um}.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {corpus}: corp_ _'),
      answer: 'corporis',
      hint: T('Tema {corpor-} + {is}, con {u} breve: «corpŏris».'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el nominativo con el genitivo singular'),
      pairs: [
        { a: T('lumen'), b: T('lūminis — tema con vocal larga') },
        { a: T('civitas'), b: T('civitatis — tema simple') },
        { a: T('miles'), b: T('mīlitis — como en mīles mīlitum') },
        { a: T('flos'), b: T('flōris — x por el z griego') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Nominativo en consonante + genitivo singular en {-is} = tercera declinación.'),
    },
    {
      n: '2',
      text: T(
        'El genitivo singular es tema + {is}: es la forma más segura de hallar el tema real.',
      ),
    },
    {
      n: '3',
      text: T(
        'La {x} del nominativo puede esconder {c} o {g}: {rex} = {regs}, {flos} = {flōs} (griego φλόξ).',
      ),
    },
    {
      n: '4',
      text: T(
        'En los i-stem, el genitivo y el dativo plural llevan {i} antes de {um}: {cīvium}, {hostium}.',
      ),
    },
    {
      n: '5',
      text: T('En plural, dativo y ablativo son idénticos en {ibus}: {rēgibus}, {civibus}.'),
    },
  ],
  notes: [
    {
      label: T('La suma de los temas:'),
      text: T(
        'El latín tiene, en casi todos los sustantivos, tres temas: el **nominal** (del nominativo), el **genital** (del genitivo) y el **vocativo** (del singular). El latín es una **lengua de tres temas**, y por eso el dativo singular nunca sale del tema del nominativo: {rēgī} viene de {rēx} + {ī}, no de {reg-}.',
      ),
    },
    {
      label: T('Cuidado con:'),
      text: T(
        'Algunos i-stem solo revelan su naturaleza en el plural. El latín los tiene en {pars}, {mīles}, {cīvis} y {equus} — y todos se comportan de manera distinta. La única forma es aprenderlos: {partium} y {mīlitum} van por su lado, y el texto no avisa.',
      ),
    },
  ],
  examples: [
    { text: 'rex', gloss: T('rey (nom. singular)') },
    { text: 'regis', gloss: T('del rey (gen. singular) — el tema a la vista') },
    { text: 'regem', gloss: T('al rey (acus. singular)') },
    { text: 'rege', gloss: T('por el rey (abl. singular), {e} breve') },
    { text: 'regum', gloss: T('de los reyes (gen. plural)') },
    { text: 'regibus', gloss: T('a los reyes, con los reyes (dat./abl. pl.)') },
    { text: 'lumen', gloss: T('luz — neutro puro, nom. = acus.') },
    { text: 'corpus', gloss: T('cuerpo — tema {corpor-}, {u} breve') },
    { text: 'civitas', gloss: T('ciudad — «la ciudad de Judea»') },
    { text: 'pars', gloss: T('parte — genitivo plural {partium}') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Tercera declinación: {rex, regis} (tema consonante)'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nom.', 'rēx', 'rēgēs'],
        ['Voc.', 'rēx', 'rēgēs'],
        ['Gen.', 'rēgis', 'rēgum'],
        ['Dat.', 'rēgī', 'rēgibus'],
        ['Acu.', 'rēgem', 'rēgēs'],
        ['Abl.', 'rēge', 'rēgibus'],
      ],
    },
    {
      caption: T(
        'Tabla 2 — Tercera declinación: i-stem ({civis, civis}) y neutro ({lumen, luminis})',
      ),
      head: [T('Caso'), T('i-stem'), T('Neutro'), T('Nota')],
      rows: [
        ['Nom.', 'civis', 'lūmen', T('neutro puro')],
        ['Gen.', 'civis', 'lūminis', T('¿aquí {i} breve o larga?')],
        ['Dat.', 'civi', 'lūminī', T('= ablativo')],
        ['Acu.', 'civem', 'lūmen', T('= nominativo')],
        ['Abl.', 'cive', 'lūmine', T('{e} breve')],
        ['Gen. pl.', 'cīvium', 'lūminum', T('la {i} de los i-stem')],
        ['Nom. pl.', 'civēs', 'lūmina', T('neutro: {a} breve')],
      ],
    },
  ],
};
