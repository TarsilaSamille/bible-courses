import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('La segunda declinación'),
  subtitle: T('{dominus, domini} — el masculino que gobierna la Vulgata'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## El tema en -us y en -um

La segunda declinación reúne los masculinos en {-us} y los neutros en {-um}. El nominativo conserva la vocal: {dominus} «señor», {servus} «esclavo», {puer} «niño» en el masculino; {bellum} «guerra», {verbum} «palabra», {templum} «templo» en el neutro.

El tema es la raíz sin la vocal del nominativo: {domino-}, {servo-}, {puer-}, {bello-}, {verbo-}. De ahí salen todas las formas:

| Caso | Masculino -us | Neutro -um |
|---|---|---|
| Nom. | dominus | bellum |
| Gen. | domini | belli |
| Dat. | domino | bello |
| Acu. | dominum | bellum |
| Abl. | domino | bello |

Dos pares de casos comparten forma: el **nominativo y el vocativo** en -us/-um, y el **dativo y el ablativo** en -o. Compáralo con la primera, donde coincidían el genitivo y el dativo.

## El plural: -ī y -a

El plural masculino y neutro cambia la terminación por {ī}: {dominī} «señores», {bellī} «guerras», {verba} «palabras». Fíjate en que el genitivo plural y el nominativo plural son idénticos — igual que en inglés con *men / of men*.

| Caso | Masculino | Neutro |
|---|---|---|
| Nom. | dominī | bella |
| Voc. | dominī | bella |
| Gen. | dominōrum | bellōrum |
| Dat. | dominīs | bellīs |
| Acu. | dominōs | bella |
| Abl. | dominīs | bellīs |

El neutro es más sencillo que el masculino: en acusativo y nominativo plural, {bella} es una misma cosa, como en {verba} «palabras».

## Cómo reconocer una segunda declinación

Cuatro señales bastan:

1. Nominativo en {us} (masculino) o {um} (neutro) — {servus}, {templum};
2. Genitivo singular en {ī} — {servī}, {templī};
3. Genitivo plural en {ōrum} — {servōrum}, {templōrum};
4. La mayoría añade {ium} o {ius} en dativo, propio de esta declinación — {scītōrium}, {hortīus}.

La señal 3 es la más fiable en un texto corrido: si ves {-ōrum}, es segunda declinación casi siempre.

## Del latín cotidiano al latín de la Vulgata

El latín de Roma no era latín literario: era el habla de la calle. El libro de cuentas de un agricultor, la baja de un soldado, el rótulo de un tendero — eso es lo que la mayoría de la gente hablaba de verdad. A cambio, el latín de la Vulgata es literario y regular, y por eso sirve de norma.

El sustantivo más frecuente de toda la Vulgata es {verbum}: «palabra». Aparece 1.385 veces, y los textos de {Ioannes} lo usan con sentido de revelación — y en ese versículo el griego λόγος se vuelve el latin {Verbum}, la palabra que el Evangelio aplica a Cristo mismo.`),
  vocab: [
    V('dominus', 'dominus', 'señor, amo'),
    V('servus', 'servus', 'esclavo, siervo'),
    V('puer', 'puer', 'niño, siervo'),
    V('bellum', 'bellum', 'guerra'),
    V('verbum', 'verbum', 'palabra'),
    V('templum', 'templum', 'templo'),
    V('deus', 'deus', 'dios'),
    V('populus', 'populus', 'pueblo'),
    V('filius', 'filius', 'hijo'),
    V('frater', 'frater', 'hermano'),
    V('liber', 'liber', 'libro'),
    V('agricola', 'agricola', 'agricultor'),
    V('magister', 'magister', 'maestro, profesor'),
    V('hortus', 'hortus', 'huerto'),
    V('nummus', 'nummus', 'moneda'),
    V('Ioannes', 'Ioannes', 'Juan'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {servus servum amat}, ¿qué rige el segundo {servum}?'),
    options: [
      T('El nominativo, por concordancia'),
      T('El verbo {amat} «ama»'),
      T('Nada: es un ablativo de medio'),
      T('La preposición implícita {in}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es la señal más fiable de segunda declinación en un texto corrido?'),
      options: [
        T('El nominativo en {us}'),
        T('El genitivo plural en {ōrum}'),
        T('La {i} del genitivo singular'),
        T('El dativo en {ius}'),
      ],
      answer: 1,
      hint: T('Regla §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo plural de {verbum} (palabras): verb_ _ _'),
      answer: 'verborum',
      hint: T('-ōrum es el genitivo plural masculino y neutro de la segunda.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con lo que se sabe de ella'),
      pairs: [
        { a: T('domino'), b: T('dativo o ablativo — la misma forma') },
        { a: T('domini'), b: T('genitivo singular (también nom. plural)') },
        { a: T('verba'), b: T('neutro: nom. y acusativo plural') },
        { a: T('dominos'), b: T('acusativo plural masculino') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La segunda declinación tiene nominativo igual a vocativo ({us}/{um}) y dativo igual a ablativo ({o}).',
      ),
    },
    {
      n: '2',
      text: T(
        'El neutro es más sencillo que el masculino: el acusativo plural iguala al nominativo plural, como en {verba}.',
      ),
    },
    {
      n: '3',
      text: T(
        'El genitivo plural en {-ōrum} identifica la segunda declinación en cualquier texto.',
      ),
    },
    {
      n: '4',
      text: T(
        'Atiende a los {ius}: {templum} da dativo {templō}, y {fīlius} da {fīliō} — la {i} nunca se alarga.',
      ),
    },
    {
      n: '5',
      text: T('Un verbo transitivo rige el acusativo; si el sustantivo está en -o, no es objeto.'),
    },
  ],
  notes: [
    {
      label: T('El más frecuente:'),
      text: T(
        '{Verbum} es el sustantivo más frecuente de toda la Vulgata: 1.385 apariciones. En {In principio erat Verbum} (Juan 1:1) el griego trae λόγος, que la Vulgata traduce por {Verbum} — y es esa misma palabra la que el Evangelio de Juan aplica a Cristo.',
      ),
    },
    {
      label: T('Cuidado:'),
      text: T(
        'Los genitivos griegos como {deī} «de Dios» y {Christī} «de Cristo» no siguen la declinación regular: son supervivencias del griego. No los derivas del paradigma; apréndelos como formas que reconoces a simple vista.',
      ),
    },
  ],
  examples: [
    { text: 'dominus', gloss: T('el señor (nom. singular)') },
    { text: 'domini', gloss: T('del señor (gen. sg.) o los señores (nom. pl.)') },
    { text: 'domino', gloss: T('al señor, con el señor (dat./abl. sg.)') },
    { text: 'dominum', gloss: T('al señor (acus. singular)') },
    { text: 'dominos', gloss: T('a los señores (acus. pl.)') },
    { text: 'verbum', gloss: T('palabra (neutro, nominativo y acusativo)') },
    { text: 'verba', gloss: T('palabras (nom./acus. plural)') },
    { text: 'puer', gloss: T('niño, y también siervo') },
    { text: 'servus', gloss: T('esclavo, siervo') },
    { text: 'In principio erat Verbum', gloss: T('«En el principio era la Palabra» (Juan 1:1)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Segunda declinación: {dominus, -i} y {bellum, -i}'),
      head: [T('Caso'), T('Sing. -us'), T('Plur. -us'), T('Sing. -um'), T('Plur. -um')],
      rows: [
        ['Nom.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Voc.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Gen.', 'dominī', 'dominōrum', 'bellī', 'bellōrum'],
        ['Dat.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
        ['Acu.', 'dominum', 'dominōs', 'bellum', 'bellă'],
        ['Abl.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
      ],
    },
    {
      caption: T('Tabla 2 — Genitivos irregulares de segunda que encontrarás en la Vulgata'),
      head: [T('Forma'), T('Significado'), T('Ejemplo')],
      rows: [
        ['deī', T('de Dios'), '{Deī} Filius «o Filho de Deus»'],
        ['Christī', T('de Cristo'), '{Christī} fīlius'],
        ['Iesū', T('de Jesús (latinizado)'), '{Iesū} Christus «Jesus Cristo»'],
        ['sanctī', T('del santo'), '{sanctī} spiritus'],
        ['caelī', T('del cielo'), '{caelī} regnum'],
      ],
    },
  ],
};
