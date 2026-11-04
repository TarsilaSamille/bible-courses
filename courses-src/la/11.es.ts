import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Verbos depoentes y el subjuntivo'),
  subtitle: T('{loquor, loquor, locutus} — forma pasiva, sentido activo'),
  section: T('Verbos, tiempos y primeros textos'),
  body: C(`## El verbo que parece pasivo y no lo es

Los **deponentes** reciben terminaciones pasivas pero valen pasivamente. Es justo lo contrario de lo que sugiere el nombre: {de-pono} es de donde viene el sustantivo *deponente* «el que deposita». El latín tiene quizá veinte, todos de primera conjugación, y todos de uso común:

- {loquor, loquor, locūtus sum} «hablar»;
- {vĕgor, vĕgis, vēnī sum} «ir, caminar» (igual que {vēnī}, perfecto de {vĕnio});
- {mŏror, mŏris, mortuus sum} «morir»;
- {nascor, nascis, nātus sum} «nacer»;
- {orior, oris, ortus sum} «levantarse»;
- {fruor, fruis, frūctus sum} «disfrutar de»;
- {conor, conis, cōnātus sum} «intentar»;
- {comitor, comitis, comitātus sum} «acompañar».

En contexto, {loquor} puede ser un verbo de primera persona, y casi siempre lo es:

{Pueri in schola {loquuntur}} «los niños hablan en la escuela»;
{Omnes de {Deo} {locuti sunt}} «todos hablaron de Dios».

El participio, en cambio, es **siempre** activo: {locutus} significa «hablante» o «que habló», nunca «hablado».

## El subjuntivo, el modo de la voluntad

El latín tiene cuatro modos, y el subjuntivo es el más importante después del indicativo porque traduce todo lo que en portugués se vuelve «que», «si», «quizá», «espero»:

- {Amat} «ama» — hecho, presente de indicativo;
- {Amēt} «ame» — orden, presente de subjuntivo;
- {Amāvit} «amó» — hecho pasado, perfecto;
- {Amāverit} «habrá amado» — futuro, futuro perfecto.

Fíjate en el mecanismo: el subjuntivo se forma con la vocal temática **alargada** más {t} en las tres primeras personas:

| Persona | Indicativo | Subjuntivo |
|---|---|---|
| 1.ª sing. | amō | amēm |
| 2.ª sing. | amās | amēs |
| 3.ª sing. | amat | amet |
| 1.ª pl. | amāmus | amēmus |
| 2.ª pl. | amātis | amētis |
| 3.ª pl. | amant | ament |

## Las tres familias del subjuntivo

O latim é prodigioso em modos. La Vulgata vive de tres familias:

1. **Presente** ({amēt}): el más común, y sirve para órdenes y condiciones presentes.
2. **Imperfecto** ({amāret}): el modo de las acciones posibles en el pasado — «si amase», «quería amar». Aparece mucho en oraciones de tipo {quamquam} «aunque» y en refranes: {Amāret quantum vellet}.
3. **Perfecto** ({amāverit}): el modo de las acciones **anteriores** a otra acción. Es el más fácil de reconocer, porque tiene el tema de {amāv-} más {erit}.

En {Si non venerit, non videbit} (Juan 15:24), el latín escribe {venerit} y {videbit}: ambos son futuro perfecto, y el primero es subjuntivo. El griego también; la diferencia es que el latín perdió el aoristo y se quedó solo con el «subjuntivo del perfecto».

## ¿Subjuntivo o indicativo?

Una regla práctica basta para el 90% de la Vulgata: **usa el subjuntivo cuando hay una idea de orden, duda, condición o finalidad**.

| Señal | Ejemplo |
|---|---|
| orden | {Veniat} «que venga» |
| fin | {spectat} «para ver» |
| condición | {Si {venerit}...} «si viene» |
| concesión | {cum} {non...} «aunque no» |

La conjunción más productiva es {ut} más subjuntivo, que en latín significa tanto «que» (oración completiva) como «para que» (final). El contexto decide, y la traducción resuelve: {scient, ut ...} «sabe que», {venit, ut videat} «vino para ver».`),
  vocab: [
    V('loquor', 'loquor', 'hablo'),
    V('loquuntur', 'loquor', 'hablan'),
    V('locutus', 'loquor', 'que habló, orador'),
    V('vĕgor', 'vĕgor', 'voy, camino'),
    V('vēnit', 'vĕnio', 'vino'),
    V('nascor', 'nascor', 'nacemos'),
    V('natus', 'nascor', 'nacido'),
    V('orior', 'orior', 'me levanto'),
    V('mortuus', 'mŏror', 'muerto'),
    V('conor', 'conor', 'intento, procuro'),
    V('fruor', 'fruor', 'disfruto de (+ abl.)'),
    V('ut', 'ut', 'que, para que (+ subj.)'),
    V('ne', 'ne', 'no sea que, para que no'),
    V('quamquam', 'quamquam', 'aunque'),
    V('licet', 'licet', 'aunque, está permitido'),
    V('sperare', 'spero', 'esperar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Pueri in schola loquuntur}, ¿cuál es el valor de {loquuntur}?'),
    options: [
      T('Forma pasiva con sentido activo: «hablan»'),
      T('Pasivo de {loqui}: «son hablados»'),
      T('Subjuntivo presente: «que hablen»'),
      T('Imperfecto de {loqui}: «hablaban»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cómo se forma el presente de subjuntivo a partir del presente de indicativo?'),
      options: [
        T('Alargando la vocal temática y añadiendo {t} en las tres primeras personas'),
        T('Cambiando {a} por {e} en toda la forma'),
        T('Añadiendo {ns} a todas las formas'),
        T('Usando el tema del supino más {erim}'),
      ],
      answer: 0,
      hint: T('Regla §2: {amat} → {amet}.'),
    },
    {
      kind: 'fill',
      prompt: T('Perfecto de {loquor}: locutus su_'),
      answer: 'sum',
      hint: T('El deponente forma su perfecto con el auxiliar {sum}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con lo que significa en el contexto'),
      pairs: [
        { a: T('Veniat'), b: T('subjuntivo: «que venga» — una orden') },
        { a: T('amat'), b: T('indicativo: «ama» — un hecho') },
        { a: T('amāret'), b: T('subj. imperfecto: «si amase» — posibilidad') },
        { a: T('amāverit'), b: T('subj. perfecto: «que haya amado» — acción anterior') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los depoentes tienen forma pasiva y sentido activo; su participio es siempre activo.',
      ),
    },
    {
      n: '2',
      text: T('El presente de subjuntivo alarga la vocal temática y añade {t}: {amat} → {amet}.'),
    },
    {
      n: '3',
      text: T('El perfecto de subjuntivo muestra el tema de {amāv-} más {-erit}: {amāverit}.'),
    },
    {
      n: '4',
      text: T(
        'Usa el subjuntivo para orden, finalidad, condición y duda; el indicativo, para el hecho.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ut} más subjuntivo vale «que» y «para que»; el contexto y la preposición {ad} deciden.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el latín perdió el futuro:'),
      text: T(
        'El latín tiene futuro ({amābit}) y futuro perfecto ({amāverit}), pero el segundo es mucho más común, y con razón: el griego también lo prefiere, y para el griego el futuro perfecto es el optativo. Al traducir al latín, Jerónimo convirtió la mayoría de los optativos griegos en {amāverit}. Por eso la Vulgata tiene mucho más futuro perfecto de lo que uno esperaría.',
      ),
    },
    {
      label: T('Contra el optativo:'),
      text: T(
        'El latín **no tiene optativo**; el griego sí. Todas las funciones del optativo griego fueron absorbidas por el subjuntivo latino. Si un alumno traduce del griego y escribe «optativo» en latín, está escribiendo griego disfrazado.',
      ),
    },
  ],
  examples: [
    { text: 'loquor', gloss: T('hablo — forma pasiva, sentido activo') },
    { text: 'loquuntur', gloss: T('hablan') },
    { text: 'locutus', gloss: T('que habló — participio activo') },
    { text: 'venit', gloss: T('vino — {vēnit} de {vĕnio}') },
    { text: 'natus', gloss: T('nacido — del deponente {nascor}') },
    { text: 'mortuus', gloss: T('muerto — del deponente {mŏror}') },
    { text: 'amēt', gloss: T('que ame (subj. presente)') },
    { text: 'amāret', gloss: T('si amase (subj. imperfecto)') },
    { text: 'amāverit', gloss: T('que haya amado (subj. perfecto)') },
    {
      text: 'Si non venerit, non videbit',
      gloss: T('«Si no viene, no verá» — {venerit} es subjuntivo'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Subjuntivos de {amāre}: las tres familias'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Perfecto')],
      rows: [
        ['1.ª sing.', 'amēm', 'amārem', 'amāverim'],
        ['2.ª sing.', 'amēs', 'amārēs', 'amāveris'],
        ['3.ª sing.', 'amēt', 'amāret', 'amāverit'],
        ['1.ª pl.', 'amēmus', 'amāremus', 'amāverimus'],
        ['2.ª pl.', 'amētis', 'amārētis', 'amāveritis'],
        ['3.ª pl.', 'ament', 'amārent', 'amāverint'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos depoentes y sus participios'),
      head: [T('Infinitivo'), T('1.ª sing.'), T('Participio'), T('Glosa')],
      rows: [
        ['loquor', 'loquor', 'locūtus', 'falar'],
        ['vĕgor', 'vĕgor', 'vēnitus', 'caminhar'],
        ['mŏror', 'mŏror', 'mortuus', 'morrer'],
        ['nascor', 'nascor', 'nātus', 'nascer'],
        ['orior', 'orior', 'ortus', 'levantar-se'],
        ['fruor', 'fruor', 'frūctus', 'usufruir'],
        ['conor', 'conor', 'cōnātus', 'tentar'],
        ['comitor', 'comitor', 'comitātus', 'acompanhar'],
      ],
    },
  ],
};
