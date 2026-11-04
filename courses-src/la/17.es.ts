import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Infinitivos y la proposición indirecta'),
  subtitle: T('{dīcit eum vēnisse} — el AcI, la estructura que sustituyó al «que»'),
  section: T('Pronombres y sintaxis de la oración'),
  body: C(`## La mayor invención del latín

En portugués y español, para decir «él dice **que** viene», hace falta {que} más una oración completa con verbo conjugado. El latín no necesita nada de eso. Dice {dīcit eum {venīre}}: **acusativo con infinitivo**, o AcI. El sujeto pasa al acusativo y el verbo se vuelve infinitivo. Y ya está.

{Verbum dicendi} es el nombre técnico del verbo que rige la construcción — «verbo de decir» — y abarca todo el grupo: {dīcere} «decir», {scire} «saber», {putāre} «pensar», {iubēre} «ordenar», {cupere} «querer», {audīre} «oír», {videre} «ver», {meminisse} «recordar». Todos ellos, sin excepción, rigen AcI.

Así que {dīcit eum {venīre}} significa «dice que viene». Hay que escribir el acusativo {eum} para el sujeto, y el infinitivo no tiene sujeto propio: el sujeto del AcI es el acusativo del verbo rector. Es la única oración del latín cuyo sujeto es acusativo, y por eso las gramáticas la tratan como caso especial — pero después de unas páginas notarás que es una más entre las oratio obliqua: el latín tiene poquísimas oraciones indirectas, y casi todas son AcI.

| Verbo rector | Sujeto (ac.) | Infinitivo | Traducción |
|---|---|---|---|
| dīcit | eum | venīre | «dice que viene» |
| scient | eum | vēnisse | «saben que vino» |
| iubet | eōs | īre | «les ordena que vayan» |
| vult | mē | manēre | «quiere que me quede» |
| putat | mulierēs | fortēs esse | «piensa que las mujeres son fuertes» |

Fíjate en la última línea: {fortēs} concuerda con {mulierēs}, no con el sujeto de la oración principal. El AcI tiene concordancia propia, y esa es la trampa clásica.

## Los cuatro infinitivos y lo que dice cada uno

El latín tiene cuatro infinitivos, y tres de ellos dicen **cuándo** ocurre la acción respecto al momento del verbo rector. Esa es la llave de todo el sistema:

- {amāre} — presente, **simultáneo**: «que ama»;
- {amāvisse} — perfecto, **anterior**: «que amó»;
- {amātūrum esse} — futuro, **posterior**: «que va a amar»;
- {passūrum esse} — futuro activo, para acciones que DURAN: «que estará amando».

{Spēro eum {vēnisse}} «espero que haya venido» — perfecto, porque la venida es anterior al momento en que espero. {Spēro eum {ventūrum esse}} «espero que venga» — futuro, porque la venida es posterior. {Spēro eum {venīre}} «espero que viene» — presente, porque la venida es simultánea. La elección entre los cuatro es pura cuestión de cronología.

El futuro del AcI tiene una forma que merece memorizarse aparte: el **participio futuro activo** más {esse}. {Amātūrus sum} «estoy a punto de amar» → futuro del AcI. Fíjate en que el {amātūr-} es idéntico: el latín forma el futuro del infinitivo con el mismo {amātūrum} que ya conocías del futuro activo.

## El AcI en pasiva

Cuando el verbo rector es pasivo, toda la oración también lo es. Y hay una consecuencia importante: entra el **participio**, y el participio concuerda con el sujeto del AcI:

{Dīcitur eum {vēnisse}} «se dice que vino» — {dīcitur} es pasivo, {eum} sigue acusativo, el infinitivo {vēnisse} sigue intacto;

{Dīcitur mulierēs {fortēs esse}} «se dice que las mujeres son fuertes» — el AcI está en pasiva ({dīcitur}), y el adjetivo {fortēs} concuerda con el sujeto femenino plural {mulierēs}. Si el sujeto fuera masculino singular, tendríamos {Dīcitur virum fortem esse} «se dice que el hombre es fuerte».

La misma regla vale para {dīcuntur}, {putātur}, {iubētur}. El latín, al pasar el AcI a pasiva, mantiene el acusativo del sujeto y solo cambia el verbo rector por su forma pasiva. Un truco elegante, y la razón de que la pasiva sea tan común en los textos devocionales.

## Verbos impersonales

Hay verbos sin sujeto — los **impersonales** — y ellos rigen AcI. El más importante es {oportet} «es necesario»:

{Oportet illum {crēscere}} «es necesario que crezca»;
{Oportet nos {laborāre}} «es necesario que trabajemos»;
{Necesse est} «es necesario» — la misma idea con un sustantivo neutro.

Junto a {oportet} van el verbo {licet} «está permitido», el sustantivo {necesse} y el verbo {decet} «es conveniente». Todos rigen AcI, y todos se traducen con «que» más subjuntivo en portugués, más un infinitivo en latín. La diferencia es que en latín el sujeto del impersonal va en **acusativo**, no en nominativo: {oportet illum} y no {oportet ille}.

Conviene notar el contraste con {decet}: {oportet} es obligación («es preciso»), {licet} es permiso («se puede»), {decet} es adecuación («es oportuno»). Los tres comparten sintaxis y traducción al portugués, y la diferencia solo aparece en el verbo.

## El AcI neutro

Un caso especial que parece un error y no lo es: el AcI neutro. {Scire est {amāre}} «saber es amar» — {scire} es el sujeto de la oración principal y a la vez un sustantivo verbal, lo que deja al acusativo {amāre} ocupando el lugar del sujeto. La construcción {Dīcere est {cōnsilium}} «decir es consejo» suena rara en portugués y es perfectamente normal en latín, y aparece a menudo en las cartas.

## Lectura

{Si quis vult venīre post mē, abneget sēmetipsum} «El que quiera venir detrás de mí, niéguese a sí mismo» (Mt 16:24) — un AcI detrás de un verbo de deseo, con el acusativo {sēmetipsum} como sujeto indirecto y al mismo tiempo objeto de {abneget}. Una frase hace las dos cosas a la vez, y por eso el latín la acepta.

{Scient me sequī} «saben que me siguen» (Jn 6:56) — AcI mínimo: el verbo rector {scient} va primero, el acusativo {me} hace de sujeto, y el infinitivo {sequī} nombra la acción. Fíjate en que el latín dispensa tanto del «que» como del pronombre reflexivo.

{Oportet nos omnes ante faciem Christi Iesu apparēre} «es necesario que todos comparezcamos ante el rostro de Cristo Jesús» (2Co 5:10) — el impersonal {oportet} con sujeto en acusativo plural {nos omnes} y un solo infinitivo {apparēre}. En portugués la misma frase es «é necessário que todos compareçamos»: la preposición de {oportet} es {oportet} en latín y nada en portugués.

{Ego sum via, veritas et vita} «Yo soy el camino, la verdad y la vida» (Jn 14:6) — y aquí **no** hay AcI: {ego} y {sum} están en nominativo, porque el sujeto de la oración es el propio orador. El contraste entre {Scient me sequī} y {Ego sum} muestra que el latín elige la estructura por la función: la tercera persona referida va al acusativo, la primera persona al nominativo.

{Dīcere est cōnsilium} «decir es consejo» — el AcI neutro, el más corto de todos: {dīcere} es el sujeto y {cōnsilium} el predicativo. La construcción aparece sobre todo en las cartas, entre los autores clásicos, y el latín la trata como una oración normal.

{Vēnī, vīdī, vīcī} «vine, vi, vencí» — la lectura minimalista: tres verbos, cero preposiciones, y la relación con el objeto queda a cargo del contexto.

## Lo esencial

El latín no usa «que»: usa AcI. Después de un verbo de decir, saber, querer u ordenar, el sujeto de la oración indirecta pasa al acusativo y el verbo se vuelve infinitivo. Cuatro infinitivos, cuatro relaciones con el momento: el presente es simultáneo, el perfecto es anterior, el futuro es posterior, y el futuro del futuro es lo que «está en curso». La regla del resto es una sola: en los depoentes, en el AcI y en el acusativo con infinitivo, todo lo que sea adjetivo concuerda con el sujeto **del AcI**, no con el de la oración principal.`),
  vocab: [
    V('dīcit', 'dīcō', 'dice (verbo rector del AcI)'),
    V('dīcere', 'dīcō', 'decir, hablar'),
    V('scient', 'sciō', 'saben (verbo rector del AcI)'),
    V('scire', 'sciō', 'saber'),
    V('venīre', 'veniō', 'venir (inf. presente, simultáneo)'),
    V('vēnisse', 'veniō', 'haber venido (inf. perfecto, anterior)'),
    V('ventūrum esse', 'veniō', 'haber de venir (inf. futuro, posterior)'),
    V('eum', 'is', 'a él (ac. sg. m.) — sujeto del AcI'),
    V('putāre', 'putō', 'pensar, suponer'),
    V('iubēre', 'iubeō', 'ordenar, mandar'),
    V('cupere', 'cupiō', 'querer, desear'),
    V('oportet', 'oportet', 'es necesario (+ AcI)'),
    V('licet', 'liceō', 'está permitido (+ AcI)'),
    V('laborāre', 'laborō', 'trabajar'),
    V('dīcitur', 'dīcō', 'se dice (pasiva; rige AcI)'),
    V('necesse est', 'necesse', 'es necesario (impersonal + AcI)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Spēro eum vēnisse}, ¿qué tiempo de infinitivo se eligió y por qué?'),
    options: [
      T('Perfecto: la llegada es anterior al momento en que se espera'),
      T('Presente: la llegada es simultánea al momento de la esperanza'),
      T('Futuro: la llegada todavía va a ocurrir'),
      T('Imperfecto: la llegada estaba en curso'),
    ],
    answer: 0,
    hint: T(
      'Regla §2: los cuatro infinitivos dicen cuándo ocurre la acción respecto al verbo rector.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Dice que viene: dīcit eum ___'),
      answer: 'venire',
      hint: T('El infinitivo presente es el tercer tema del modelo.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Dīcitur mulierēs fortēs esse}, ¿con qué concuerda {fortēs}?'),
      options: [
        T('Con {mulierēs} — el sujeto del AcI, no el de la oración principal'),
        T('Con {dīcitur} — el verbo rector, que encabeza la frase'),
        T('Con el sujeto implícito de la oración principal, que debe ser masculino'),
        T('Con ninguno: los adjetivos no concuerdan dentro del AcI'),
      ],
      answer: 0,
      hint: T('Regla §4: en el AcI, todo concuerda con el sujeto del AcI.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo rector con su traducción'),
      pairs: [
        { a: T('oportet illum crēscere'), b: T('es necesario que crezca (impersonal)') },
        { a: T('iubet eōs īre'), b: T('ordena que vayan') },
        { a: T('vult mē manēre'), b: T('quiere que me quede') },
        { a: T('putat mulierēs fortēs esse'), b: T('piensa que las mujeres son fuertes') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Traduce {oportet nos laborāre}.'),
      answer: 'it is necessary that we work',
      hint: T('{oportet} es impersonal, y el sujeto {nos} está en acusativo por eso.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo verbo de decir, saber, pensar, querer u ordenar rige AcI: el sujeto pasa al acusativo y el verbo se vuelve infinitivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los cuatro infinitivos indican la relación con el momento: presente es simultáneo, perfecto es anterior, futuro es posterior, {passūrum esse} es acción en curso.',
      ),
    },
    {
      n: '3',
      text: T(
        'El futuro del AcI es el participio futuro activo más {esse}: {amātūrum esse}, {ventūrum esse}. El mismo {amātūrum} sirve para el futuro activo.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el AcI, cualquier adjetivo o participio concuerda con el sujeto del propio AcI: {mulierēs fortēs esse} es plural femenino, no la concordancia de la oración principal.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los impersonales {oportet}, {licet}, {necesse est} y {decet} rigen AcI, y el sujeto queda en acusativo: {oportet illum}, nunca {oportet ille}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El AcI no es una oración, es la ausencia de una oración.'),
      text: T(`Fíjate en lo que el latín **no** hace: no repite el sujeto. En {Dīcit {Petrus} {Paulus} {venīre}}, tienes {Petrus} y {Paulus} en acusativo porque ambos hacen el verbo. Un sustantivo que ejecuta el infinitivo es el sujeto — y eso vale incluso cuando el sustantivo está dentro del AcI: {putāre {sē} {sapientem esse} «pensar que él es sabio».

Eso explica por qué el latín prácticamente no tiene oraciones indirectas con sujeto propio. La Vulgata casi siempre escribe {ut} más subjuntivo cuando hace falta el sujeto, y reserva el AcI para cuando el sujeto ya está en acusativo por otro motivo. El griego, en cambio, tiene oraciones de infinitivo con sujeto expreso, y por eso traducir del griego al latín exige una decisión en casi cada oración.`),
    },
    {
      label: T('Cómo Jerónimo traduce la obligación del griego'),
      text: T(`El griego antiguo tiene un verbo simple para «es necesario»: **ὀφείλω**. Dice {ὀφείλει ἡμᾶς ἀποδοῦναι} «debemos pagar», y la Vulgata escribe {oportet nos reddere} «es necesario que paguemos». Fíjate en la transformación: el verbo griego es personal y tiene sujeto expreso en nominativo; el latín es impersonal, con sujeto en acusativo e infinitivo. Lo mismo ocurre con {δεῖ} «es necesario», que da {oportet} o {necesse est}.

La consecuencia práctica es que la traducción del griego al latín **obliga a tomar una decisión sintáctica** en casi toda obligación. Traducir {ὀφείλει} por {debemus} es escribiendo latín arcaico; escribir {oportet} es haciendo lo que Jerónimo hizo en todo el Nuevo Testamento.`),
    },
  ],
  examples: [
    { text: 'dīcit eum venīre', gloss: T('dice que viene (inf. presente, simultáneo)') },
    { text: 'scient Deum esse', gloss: T('saben que Dios es (AcI mínimo)') },
    { text: 'spēro eum vēnisse', gloss: T('espero que haya venido (inf. perfecto)') },
    { text: 'spēro eum ventūrum esse', gloss: T('espero que venga (inf. futuro)') },
    { text: 'iubet eōs īre', gloss: T('ordena que vayan (acusativo plural)') },
    { text: 'vult mē manēre', gloss: T('quiere que me quede (1.ª persona del AcI)') },
    {
      text: 'putat mulierēs fortēs esse',
      gloss: T('piensa que las mujeres son fuertes (adjetivo = sujeto del AcI)'),
    },
    { text: 'dīcitur eum vēnisse', gloss: T('se dice que vino (AcI pasivo)') },
    {
      text: 'oportet illum crēscere',
      gloss: T('es necesario que crezca (impersonal, sujeto en ac.)'),
    },
    { text: 'dīcere est cōnsilium', gloss: T('decir es consejo (AcI neutro)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los cuatro infinitivos y su relación con el momento'),
      head: [T('Infinitivo'), T('Significado'), T('Relación temporal'), T('Ejemplo')],
      rows: [
        ['amāre', 'amar', 'simultâneo', 'dīcit eum amāre = «diz que ele ama»'],
        ['amāvisse', 'ter amado', 'anterior', 'dīcit eum amāvisse = «diz que ele amou»'],
        [
          'amātūrum esse',
          'haver de amar',
          'posterior',
          'dīcit eum amātūrum esse = «diz que ele vai amar»',
        ],
        [
          'passūrum esse',
          'estar amando',
          'ação em curso',
          'dīcit eum passūrum esse = «diz que ele estará amando»',
        ],
        ['dīcere', 'dizer (neutro, sujeito)', '—', 'dīcere est cōnsilium = «dizer é conselho»'],
      ],
    },
    {
      caption: T('Tabla 2 — AcI activo y AcI pasivo'),
      head: [T('Tipo'), T('Forma'), T('Traducción'), T('Glosa')],
      rows: [
        ['Ativo', 'dīcit eum vēnisse', 'diz que ele veio', 'dīcere — verbo de dizer'],
        [
          'Ativo',
          'putat mulierēs fortēs esse',
          'acha que as mulheres são fortes',
          'putāre — verbo de opinião',
        ],
        [
          'Ativo impersonal',
          'oportet illum crēscere',
          'é necessário que ele cresça',
          'oportet — sem sujeito',
        ],
        ['Passivo', 'dīcitur eum vēnisse', 'se diz que ele veio', 'dīcere — forma passiva'],
        [
          'Passivo',
          'dīcitur virum fortem esse',
          'se diz que o homem é forte',
          'singular masculino',
        ],
        [
          'Passivo impersonal',
          'oportet illum crēscere',
          'é preciso que ele cresça',
          'o sujeito continua em Acusativo',
        ],
      ],
    },
  ],
};
