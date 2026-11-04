import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Pronombres personales y reflexivos'),
  subtitle: T('{ego, tu, is, nos} — y el {se} que traduce una oración griega entera'),
  section: T('Pronombres y sintaxis de la oración'),
  body: C(`## Las tres personas

El latín tiene pronombres personales para tres personas, en seis formas cada uno — igual que el portugués. Lo que cambia es el caso:

| | yo | tú | él/ella | nosotros | vosotros | ellos/ellas |
|---|---|---|---|---|---|---|
| nom. | ego | tu | is, ea | nos | vos | eī, eae |
| acus. | mē | tē | eum, eam | nōs | vōs | eōs, eās |
| abl. | mē | tē | eō, eā | nōbīs | vōbīs | eīs, eīs |

{Is, ea, id} es el punto de partida: el latín, como el portugués, no tiene género gramatical en el pronombre. El género viene del referente — {is} puede ser «él» o «ella», {eum} puede ser «el hombre» o «la ciudad» (en cuyo caso {eam}).

Fíjate en que {eis} sirve para el dativo y el ablativo, y que el plural {eī} y {eīs} son idénticos. Por eso el contexto hace todo el trabajo: en {Deus est lux vobis} el {vobis} es dativo; en {Deus est lux apud vos} es ablativo.

## Ego sum via veritas et vita

El Evangelio de Juan coloca el pronombre {ego} al frente de las siete grandes declaraciones de Jesús, y el griego εγώ es enfático por naturaleza. El latín suele lograr el mismo efecto por el orden de palabras, pero la Vulgata mantiene la posición inicial porque {ego} en latín **no es enfático**: es sencillamente el pronombre de primera persona.

{Ego sum via veritas et vita} «Yo soy el camino, la verdad y la vida» (Juan 14:6);
{Ego sum lux mundi} «Yo soy la luz del mundo» (Juan 8:12).

El {sum} aquí es {sum} a secas, sin {ei}: en latín el pronombre {ego} dispensa del verbo sustantivo. Compáralo con el griego, que diría ἐγώ εἰμι.

## El pronombre reflexivo {se}

El latín tiene un solo pronombre reflexivo para las tres personas: {se}, de {sui}, y es siempre **acusativo**: {se} o {sē} (solo se diferencian cuando el pronombre va solo). Solo puede tener por antecedente el sujeto:

{Pueri {se} amant} — los niños aman **a sí mismos**;
{Pueri {se} amant} — los niños son amados **unos por otros** (¡el latín admite las dos lecturas!);
{Pueri {sē} vetant} — los niños se prohíben (aquí la {e} es larga, sincopada).

El latín hace lo mismo con un pronombre indirecto, {sibi}, que rige el dativo:

{Pueri {sibi} cavas faciunt} «los niños hacen fosas para sí mismos».

## Lo que hace el {se} en la Vulgata

El {se} del Nuevo Testamento es más poderoso que su antecedente griego. Compara:

{ἐὰν οὐκ ἀποστείλῃ τὴν υἱὸν} → {Si non miserit Filium suum}
{ἀπέστειλεν ὁ θεὸς τὸν υἱὸν αὐτοῦ} → {Misit Deus Filium suum}

En el primer versículo el griego trae el **aoristo subjuntivo**; en el segundo el **aoristo indicativo**. La Vulgata no los distingue: escribe {miserit} en ambos casos. El lector latino tiene que averiguar el modo por el contexto, porque la forma es idéntica. Ahí está a la vez el genio y el límite del latín: uma forma para dois valores.`),
  vocab: [
    V('ego', 'ego', 'yo'),
    V('tu', 'tu', 'tú'),
    V('is', 'is', 'él (masc.)'),
    V('ea', 'ea', 'ella (fem.)'),
    V('id', 'id', 'eso (neutro)'),
    V('eos', 'is', 'ellos (masc. acus.)'),
    V('eis', 'is', 'a ellos, para ellos'),
    V('nos', 'nos', 'nosotros'),
    V('vobis', 'vos', 'a vosotros, para vosotros'),
    V('sui', 'sui', 'de sí, suyo'),
    V('sibi', 'sibi', 'para sí, a sí'),
    V('se', 'se', 'se (reflexivo)'),
    V('meus', 'meus', 'mío'),
    V('tuus', 'tuus', 'tuyo'),
    V('suus', 'suus', 'suyo, suyo'),
    V('eius', 'eius', 'suyo, de él'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Deus est lux vobis}, ¿qué expresa {vobis}?'),
    options: [
      T('Dativo: «a vosotros» — {lux} es el objeto'),
      T('Ablativo: «con vosotros»'),
      T('Nominativo: «vosotros sois»'),
      T('Genitivo: «de vosotros»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es la restricción del pronombre reflexivo {se}?'),
      options: [
        T('Solo puede tener el sujeto de la oración como antecedente'),
        T('Solo puede aparecer en plural'),
        T('Nunca puede ser dativo'),
        T('Necesita un antecedente sustantivo explícito'),
      ],
      answer: 0,
      hint: T('Regla §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Dativo plural de {tu} (vosotros): vo_ _'),
      answer: 'vobis',
      hint: T('Es la forma que aparece en {Deus est lux vobis}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con el caso'),
      pairs: [
        { a: T('eum'), b: T('acusativo masculino singular') },
        { a: T('eis'), b: T('dat. o abl. plural') },
        { a: T('eae'), b: T('nominativo femenino plural') },
        { a: T('sibi'), b: T('dativo reflexivo: «para sí»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El latín no marca género en el pronombre: {is} vale tanto para él como para ella; el género viene del referente.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eis}, {eis} y {eis} sirven al dativo y al ablativo plural; solo el verbo indica cuál es cuál.',
      ),
    },
    {
      n: '3',
      text: T(
        'El reflexivo {se} es siempre acusativo y solo puede reflejar el sujeto de su propia oración.',
      ),
    },
    {
      n: '4',
      text: T('El reflexivo indirecto es {sibi} y rige el dativo: {sibi} facere «hacer para sí».'),
    },
    {
      n: '5',
      text: T(
        'El posesivo de tercera persona es {suus} para el sujeto y {eius} para quien no es el sujeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('sui frente a eius:'),
      text: T(
        'Traducir «suyo» siempre por {suus} es un error frecuente. En {Ego sum via veritas et vita} el {sua} es {suus}, porque el referente es el sujeto; en {Amavit verbum suum} el referente puede ser otro, y el latín escribe {eius}.',
      ),
    },
    {
      label: T('Pérdida del modo:'),
      text: T(
        'El latín fusiona el indicativo y el subjuntivo del aoristo griego en una sola forma ({miserit}). Esto se llama *sincretismo* y es común a todo el latín. Consecuencia práctica: en una condicional como {Si non venerit, non videbit}, solo la traducción revela si es condicional o narración.',
      ),
    },
  ],
  examples: [
    { text: 'ego', gloss: T('yo (nom.)') },
    { text: 'tu', gloss: T('tú (nom.)') },
    { text: 'is', gloss: T('él (nom. masc.)') },
    { text: 'eum', gloss: T('lo (acus. masc.)') },
    { text: 'eis', gloss: T('a ellos (dat.); de/con ellos (abl.)') },
    { text: 'vobis', gloss: T('a vosotros (dat.) / con vosotros (abl.)') },
    { text: 'se', gloss: T('se, a sí mismo (acus.)') },
    { text: 'sibi', gloss: T('para sí (dat.)') },
    { text: 'sui', gloss: T('de sí, suyo (gen.)') },
    { text: 'Ego sum via veritas et vita', gloss: T('«Yo soy el camino, la verdad y la vida»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Pronombres personales'),
      head: [T('Persona'), T('1.ª'), T('2.ª'), T('3.ª masc.'), T('3.ª fem.')],
      rows: [
        ['Nom.', 'egŏ', 'tŭ', 'is', 'eă'],
        ['Acu.', 'mē', 'tē', 'eum', 'eam'],
        ['Abl.', 'mē', 'tē', 'eō', 'eā'],
      ],
    },
    {
      caption: T('Tabla 2 — Pronombres posesivos'),
      head: [T('Persona'), T('Singular'), T('Plural'), T('Ejemplo')],
      rows: [
        [
          T('1.ª persona'),
          'meŭs, mea, meum',
          'noster, nostra, nostrum',
          '{Filium} meum «meu Filho»',
        ],
        [T('2.ª persona'), 'tuŭs, tua, tuum', 'vester, vestra, vestrum', '{Pater} tuus «teu Pai»'],
        [T('3.ª persona'), 'suŭs, sua, suum', 'eius, eorum, earum', '{Verbum} suum «sua Palavra»'],
      ],
    },
  ],
};
