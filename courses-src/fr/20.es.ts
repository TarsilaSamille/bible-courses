import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('El imperativo'),
  subtitle: T('{parle, parlons, parlez} — orden, petición, consejo y receta'),
  section: T('Los verbos'),
  body: C(`## Solo tres personas

El imperativo es el único modo de la lengua que no tiene presente completo: existen exactamente **tres** formas, una para {tu}, una para {nous} y una para {vous}. Ninguna persona tiene dos formas, como el portugués, y no hay forma para {je}, {il} ni {ils}.

La regla morfológica es más sencilla de lo que parece: para los grupos en {-er}, {-ir} y {-re}, la forma de {nous} es el presente sin {s} ({parlons}) y la de {vous} es el presente sin {s} ({parlez}). Para {tu}, casi siempre es el presente sin la terminación de {-er} ({parle}, {finis}, {prends}).

| Infinitivo | tu | nous | vous |
|---|---|---|---|
| parler | parle | parlons | parlez |
| finir | finis | finissons | finissez |
| prendre | prends | prenons | prenez |
| vendre | vends | vendons | vendez |
| attendre | attends | attendons | attendez |

Fíjate en la asimetría: {vous} nunca lleva {s}, pero el {tu} de los verbos en {-er} se queda sin {s} solo por la regla §2. Hay un único punto donde {vous} se parece a {tu} — en {être}, {avoir} y {savoir} — y es el único lugar de la lengua en que ambos coinciden.

## La {-s} facultativa del {tu}

Esta es la manía más célebre del francés, y ya estaba en el latín: {parle} y {parles} son **la misma forma**, pronunciadas de manera distinta.

La regla es una sola: los verbos en {-er} pierden la {s} de {tu} **ante palabra que empiece por vocal o {h} muda** — {parle}, {mange}, {prie}, {écoute}, {aide}. Ante consonante o en final de frase, la {s} vuelve y suena como la {s} de {le}: {parles}, {manges}, {pries}.

| Contexto | Forma | Pronunciación |
|---|---|---|
| {Parle} | sin {s} | {paʁl} |
| {Tu parles} | con {s} | {ty paʁl} |
| {Parle-moi} | sin {s} | {paʁl mwa} |
| {Tu parles bien} | con {s} | {ty paʁl bjɛ̃} |

En la práctica escrita casi todos la omiten. Es la *ortografía rectificada*, adoptada en 1990 por la Real Academia. El guion de {y} es esa misma {s}: {Dis-y}, {Va-t-en}.

## El imperativo negativo

El negativo es más fácil de lo que parece, porque la negación **no cambia de forma**: entra {ne} delante y {pas} detrás, y el verbo queda intacto.

- {Ne parle pas} — dos sílabas nasales y el verbo, nada más
- {Ne viens pas}, {Ne fais pas}, {Ne prends pas}
- {N’y pense pas} — la {y} se traga la {ne}

El único inconveniente es que en el imperativo la {ne} es rara en el habla cotidiana de buena parte de Europa, pero obligatoria en la norma.

## Pronombres y hiato

En el afirmativo, los pronombres van **detrás** del verbo y se le unen con guion, porque la terminación nasal del verbo suena a consonante y el encuentro sería imposible ({donne-mo} es impronunciable; lo que se oye es {donnemo}, con la {e} tragada).

| Tipo | Ejemplos | Posición |
|---|---|---|
| Objeto directo | {donne-moi}, {dis-lui}, {levez-la} | detrás del verbo |
| Objeto indirecto | {parle-nous}, {réponds-lui} | detrás del verbo |
| Pronombre + {y} | {donnez-m’en} | antes de la {y} |

En el negativo, con la forma de dos palabras {ne … pas}, los pronombres **suben** delante del verbo: {Ne me donne pas}, {Ne lui parle pas}. Con la forma de una palabra ({ne … point}, {ne … jamais}, {ne … rien}), el verbo adopta la forma negativa y los pronombres quedan pegados a él: {Ne lui donnez point}, {Ne me parlez jamais}, {Ne me donnez rien}.

## Verbos irregulares

Los dos verbos más frecuentes de la lengua no siguen la regla. Vale la pena aprender los dos enteros:

| Infinitivo | tu | nous | vous |
|---|---|---|---|
| être | sois | soyons | soyez |
| avoir | aie | ayons | ayez |
| savoir | sache | sachons | sachiez |
| vouloir | veuille | veuillons | voulez |

El resto de la lección es aplicación. En la lectura bíblica en Segond, el imperativo es el modo por excelencia: es el que da las leyes, los mandamientos y los consejos. En {Tu ne convoiteras pas}, el futuro {convoiteras} — futuro o condicional, valen las dos lecturas — va antes que {pas}: el entero {ne … pas} queda *entre* sujeto y verbo, y el verbo cae en último lugar. Ese es el orden francés exacto:

1. pronombres de sujeto
2. {ne}
3. verbo conjugado
4. {pas, jamais, rien, plus, point}
5. pronombres oblicuos

Fíjate en que {ne} y {pas} **ciñen** el verbo, y en que los pronombres indirectos van tras {pas}, pegados a ella. En {Ne nous parle pas}, la {pas} rige a {nous}: se pega al pronombre, no al verbo. Y todo imperativo negativo hereda la negación del latín {ne … pas} — ninguna lengua romance más antigua conservó el doble anillo.`),
  vocab: [
    V('parle', 'parler', 'habla (imperativo tú, sin {s})'),
    V('parlez', 'parler', 'hablad (imperativo usted)'),
    V('parlons', 'parler', 'hablemos'),
    V('ne parle pas', 'parler', 'no hables'),
    V('prends', 'prendre', 'toma (imperativo irregular)'),
    V('donne-moi', 'donner', 'dame ( objeto directo tras el verbo)'),
    V('dis-lui', 'dire', 'dile (objeto indirecto, guion obligatorio)'),
    V('donnez-m’en', 'donner', 'dame de eso (pronombre más {y})'),
    V('sois', 'être', 'sé (irregular)'),
    V('soyez', 'être', 'sed (irregular, usted)'),
    V('ayez', 'avoir', 'tened (irregular)'),
    V('ne me parle pas', 'parler', 'no me hables (los pronombres suben en el negativo)'),
    V('ne lui donnez rien', 'donner', 'no le des nada (forma {ne … rien})'),
    V('n’y pense pas', 'penser', 'no pienses en eso'),
    V('tu ne convoiteras pas', 'convoiter', 'no covetarás (el décimo mandamiento)'),
    V('va-t-en', 'aller', 'vete (el guion es la {s} de {tu})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En «{Ne me parle pas}», ¿por qué el pronombre {me} va antes del verbo y no después como en el afirmativo?',
    ),
    options: [
      T(
        'Porque el negativo de dos palabras ({ne … pas}) desplaza los pronombres delante del verbo',
      ),
      T('Porque {me} deja de ser pronombre y pasa a artículo indefinido'),
      T('Porque el imperativo negativo exige {vous} en vez de {tu}'),
      T('Porque tras {ne} nunca hay guion ni pronombre oblicuo'),
    ],
    answer: 0,
    hint: T(
      'Regla §3: con {ne … pas} los pronombres suben; con {ne … rien}/{ne … jamais} quedan pegados al verbo.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {être} en «vous ___ amis» (vocativo a Dios): s___z'),
      answer: 'oyez',
      hint: T('Es la forma irregular de {vous} de {être}, sin la {x}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el valor de su terminación'),
      pairs: [
        { a: T('parlons'), b: T('1.ª pl. — inclusivo: «hablemos»') },
        { a: T('parlez'), b: T('2.ª pl. — cortesía o grupo: «hablad»') },
        { a: T('sois'), b: T('2.ª sing. irregular de {être}') },
        { a: T('ayez'), b: T('2.ª pl. irregular de {avoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las frases aplica correctamente la {-s} de {tu}?'),
      options: [
        T('{Tu parles?} — {s} ante {q}, que es consonante'),
        T('{Prie pour nous} — sin {s}, porque viene {nous}'),
        T('{Parle?} — sin {s}, porque la frase acaba ahí'),
        T('{Écoute-moi} — sin {s}, porque {moi} es palabra vacía'),
      ],
      answer: 0,
      hint: T(
        'La {s} vuelve cuando la palabra siguiente empieza por consonante, y cae cuando empieza por vocal o {h} muda.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El imperativo tiene **tres** formas: {tu}, {nous}, {vous}. Para {nous} y {vous} es el presente sin {s}; para {tu} es el presente sin la terminación de {-er}. No hay forma para {je}, {il} ni {ils}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los verbos en {-er} del singular {tu} pierden la {s} ante vocal o {h} muda: {parle}, {mange}, {aide}. Ante consonante o en la pausa, la {s} vuelve sonada: {tu parles}, {tu manges}.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el afirmativo los pronombres quedan **detrás** del verbo, unidos por guion: {donne-moi}, {dis-lui}, {donnez-m’en}. En el negativo de dos palabras suben delante del verbo: {Ne me donne pas}. En el de una palabra quedan pegados: {Ne me donnez nada}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El negativo no altera el verbo: entra {ne}, sale {pas}, nada más. {Ne parle pas}, {Ne viens pas}, {N’y pense pas} — con {y}, la {ne} se vuelve {n’}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Aprende los irregulares {être} ({sois, soyons, soyez}) y {avoir} ({aie, ayons, ayez}): son las formas más frecuentes de todo el modo, y aparecen en {Sois{,} le Bon,} «Sé tú el Bien» y en {Ayez de la compassion} «Tened compasión».',
      ),
    },
  ],
  notes: [
    {
      label: T('El guion es un sonido, no puntuación'),
      text: T(
        'En {donne-moi} el guion marca una {e} que desaparece al hablar: oyes {donnemoi}, con la {e} de {donne} tragada por la nasal. Por eso el guion no es decorativo: sin él, la escritura describiría {donnemo i}, que nadie pronuncia. Lo mismo ocurre con la {s} de {tu}: {parle} y {parles} son la misma palabra escrita de dos maneras, y el guion de {va-t-en} es esa {s} encontrando a la {y}. La ortografía francesa es, en gran medida, transcripción fonética disfrazada de norma.',
      ),
    },
    {
      label: T('El mandamiento que no se traduce'),
      text: T(
        'Los diez mandamientos en Segond mezclan dos modos. «Tu n’auras pas d’autres dieux» trae {n’auras} — futuro/condicional de {avoir} — y «Tu ne convoiteras pas» trae {convoiteras}. En ambos, el verbo queda en último lugar y {ne … pas} lo rodea: la negación latina {-ne … pas} trasladada sin mover una coma. La polémica sobre «corregir» {ne … pas} en {pas … point} lo muestra. Y el noveno y décimo mandamientos, en el texto de Segond, vienen íntegramente en el modo que acabamos de estudiar.',
      ),
    },
  ],
  examples: [
    { text: 'Parle.', gloss: T('¡habla! ({s} caída)') },
    { text: 'Écoute-moi bien.', gloss: T('escúchame bien (pronombre tras el verbo)') },
    { text: 'Ne prions pas.', gloss: T('no oremos (plural inclusivo)') },
    { text: 'Dis-lui la vérité.', gloss: T('dile la verdad ({dire} más objeto indirecto)') },
    { text: 'N’y touche pas.', gloss: T('no toques eso (la {ne} absorbida por la {y})') },
    { text: 'Donnez-m’en deux.', gloss: T('dame dos ({donner} más {m’} más {en})') },
    {
      text: 'Priez pour vos Enemis.',
      gloss: T('orad por vuestros enemigos ({pour} rigiendo el infinitivo)'),
    },
    {
      text: 'Ayez de la compassion.',
      gloss: T('tened compasión (imperativo irregular de {avoir})'),
    },
    { text: 'Va-t-en.', gloss: T('vete ({va} más {t’} más {en})') },
    {
      text: 'Tu ne convoiteras pas.',
      gloss: T('no covetarás (décimo mandamiento, verbo al final)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — cómo se forma el imperativo'),
      head: [T('Grupo'), T('tú'), T('nosotros'), T('vosotros')],
      rows: [
        ['parler', 'parle', 'parlons', 'parlez'],
        ['finir', 'finis', 'finissons', 'finissez'],
        ['vendre', 'vends', 'vendons', 'vendez'],
        ['être', 'sois', 'soyons', 'soyez'],
        ['avoir', 'aie', 'ayons', 'ayez'],
        ['savoir', 'sache', 'sachons', 'sachiez'],
        ['vouloir', 'veuille', 'veuillons', 'voulez'],
        ['prendre', 'prends', 'prenons', 'prenez'],
      ],
    },
    {
      caption: T('Tabla 2 — posición de los pronombres en el imperativo'),
      head: [T('Contexto'), T('Orden'), T('Ejemplo'), T('Glosa')],
      rows: [
        [
          T('afirmativo'),
          'verbo + hífen + pronomes',
          T('{donne-moi le livre}'),
          T('dame el libro'),
        ],
        [
          T('negativo {ne … pas}'),
          '{ne} + pronomes + verbo + {pas}',
          T('{Ne me donne pas le livre}'),
          T('no me des el libro'),
        ],
        [
          T('negativo {ne … rien}'),
          '{ne} + verbo negativo + pronomes',
          T('{Ne me donnez nada}'),
          T('no me des nada'),
        ],
        [T('con {y}'), 'verbo + hífen + pronome + {y}', T('{Dádmelo}'), T('dame de eso')],
        [T('con {ne} + {y}'), '{N’} + verbo + {pas}', T('{No lo toques}'), T('no toques eso')],
      ],
    },
  ],
};
