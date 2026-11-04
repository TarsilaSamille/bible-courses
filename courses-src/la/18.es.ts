import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('El ablativo absoluto'),
  subtitle: T('{urbe captā}: tomada la ciudad, llegó el pretor'),
  section: T('El ablativo absoluto'),
  body: C(`## La idea

El ablativo absoluto es una cláusula breve que funciona como un adverbial: dos o más ablativos, casi siempre un sustantivo y un participio, que describen una circunstancia **independiente** de la proposición principal. No tiene sujeto ni objeto propios, no lo rige el verbo principal y puede traducirse por un gerundio, por una subordinada o por un sustantivo abstracto.

| Piezas | Ejemplo | Función |
|---|---|---|
| Sustantivo en ablativo | \`{urbe}\` | quien sufre o realiza la acción |
| Participio en ablativo | \`{captā}\` | la acción, con valor perfectivo |
| Sustantivo + aposición | \`{me duce}\` | «bajo mi mando» |
| Sustantivo + adjetivo | \`{cōnsule vivo}\` | «mientras viva el cónsul» |

En {urbe captā} el ablativo {urbe} es un **participio pasivo sustantivado**: literalmente «por la ciudad, ayant sido tomada». El sentido es «tomada la ciudad». El ablativo, aquí, no es instrumento ni medio: se llama **absoluto** precisamente porque se basta solo, sin regencia verbal.

## El participio en ablativo: tiempo y aspecto

El tiempo del participio que funciona como predicado del ablativo absoluto es el pasado, pero la fuerza de la frase cambia con el contexto:

- **Perfectivo, anterior**: {urbs capta} = «tomada la ciudad» — el efecto ya está hecho.
- **Simultáneo o permanente**: {Christō regnante} = «bajo el reinado de Cristo», {me adiuvante} = «con mi ayuda».
- **Futuro con el gerundivo**: {moritūrō praeside} = «bajo la presidencia de quien va a morir» — mucho más raro.

Cuando no hay verbo explícito, un ablativo simple puede funcionar como verdadero absoluto: {mē adiūte} «con mi ayuda», {tē gubernante} «siendo tú el guía».

## Cómo se traduce

Traducir es siempre una decisión, no un cálculo:

- {urbe captā, magistrātus vēnit} → «Una vez tomada la ciudad, llegó el pretor».
- {Deō volente} → «si Dios quiere» o «con la permiso de Dios».
- {me duce} → «bajo mi mando».
- {ōrtō sōle} → «al salir el sol» o «con el sol ya salido».

## Aplicación en la Vulgata

Marcos 16,2 dice: {Et orto iam sole, veniebant ad eum} «Y, having the sun already risen, ya venían a él». El ablativo absoluto {ōrtō sōle} aparece aquí en pretérito más-que-perfecto, traducido por el gerundio español «habiendo salido». Fíjate en que la oración principal {veniebant} «venían» es la que carga el sentido principal; {ōrtō sōle} solo marca el tiempo de la acción. Esta inversión — la circunstancia **antes** del verbo — es la que encontrarás una y otra vez en los evangelios.

En Lucas 2:44, {quaerentes illum in festo} usa el mismo mecanismo con el sustantivo {festum} y un participio sustantivado: «buscándolo entre la fiesta».

## Ejercicio de lectura

En Hechos 1,9, {Et dum diceret, hoc dictum est ei} combina gerundio y ablativo absoluto ({hoc dictum est} «esto fue dicho»), lo que muestra que ambas construcciones encajan en la misma frase sin chocar.

## Un paradigma útil

Para formar un absoluto solo necesitas el ablativo singular del participio. Memoriza el patrón de {captus, -a, -um} y de {regnāns}:

| Participio | Nom. | Gen. | Abl. sg. | Glosa |
|---|---|---|---|---|
| captus | captă | captī | captō | «tomado» |
| regnāns | regnāns | regnantis | regnante | «reinando» |
| vīvus | vīvŭs | vīvī | vīvō | «vivo» |
| missus | missŭs | missī | missō | «enviado» |
| dictum | dictum | dictī | dictō | «dicho» |

Observa que la forma del ablativo singular termina en {ō} en la tercera conjugación y en {e} en la primera y en la segunda: la misma alternancia que ya conoces en el ablativo de los sustantivos.`),
  vocab: [
    V('urbs', 'urbs', 'ciudad'),
    V('capio', 'capio', 'tomar, capturar'),
    V('captus', 'capio', 'tomado, capturado (part. pas.)'),
    V('magistratus', 'magistratus', 'pretor, magistrado'),
    V('venio', 'venio', 'venir'),
    V('Deus', 'Deus', 'Dios'),
    V('volens', 'volo', 'queriendo (part. pres.)'),
    V('sol', 'sol', 'sol'),
    V('orior', 'orior', 'nacer, levantarse'),
    V('ortus', 'orior', 'nacido, levantado (part.)'),
    V('dux', 'dux', 'líder, comandante'),
    V('adiuvo', 'adiuvo', 'ayudar'),
    V('guberno', 'guberno', 'gobernar, guiar'),
    V('tempus', 'tempus', 'tiempo, ocasión'),
    V('verbum', 'verbum', 'palabra'),
    V('Dominus', 'Dominus', 'el Señor'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {urbe captā, magistrātus vēnit}, ¿qué demuestra {-ā} en {captā}?'),
    options: [
      T('Que es el sujeto gramatical de la oración'),
      T('Que {captā} es un participio en ablativo, predicado del absoluto'),
      T('Que {captā} es el objeto directo de {magistrātus}'),
      T('Que {urbe} es un ablativo de medio'),
    ],
    answer: 1,
    hint: T('Regla §1: el ablativo absoluto se basta solo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ablativo singular de {captus} (participio de {capio}): capt_'),
      answer: 'captō',
      hint: T('Tercera conjugación: el ablativo singular del participio termina en -ō.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se traduce mejor {Deō volente}?'),
      options: [
        T('«Dios quiere» (oración principal)'),
        T('«si Dios quiere» (concesión condicional)'),
        T('«por el Dios que quiere» (instrumento)'),
        T('«el Dios quiere que» (finalidad)'),
      ],
      answer: 1,
      hint: T('Regla §2: el absoluto no tiene verbo principal; el sentido viene del contexto.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada ablativo absoluto con su traducción'),
      pairs: [
        { a: T('{urbe captā}'), b: T('tomada la ciudad') },
        { a: T('{me duce}'), b: T('bajo mi mando') },
        { a: T('{ōrtō sōle}'), b: T('al salir el sol') },
        { a: T('{hoc dictum est}'), b: T('esto fue dicho') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'En {Et orto iam sole, veniebant ad eum} (Mc 16,2), ¿qué proposición carga el sentido principal?',
      ),
      options: [T('{orto iam sole}'), T('{veniebant ad eum}'), T('{iam}'), T('{ad eum}')],
      answer: 1,
      hint: T('El absoluto es circunstancia; la proposición verbal es la principal.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El ablativo absoluto es una cláusula nominal: sustantivo (o adjetivo sustantivado) + participio, ambos en ablativo, sin regencia verbal.',
      ),
    },
    {
      n: '2',
      text: T(
        'El tiempo del participio es el pasado, pero su valor es el de una circunstancia: anterior, simultánea o permanente, según el contexto.',
      ),
    },
    {
      n: '3',
      text: T(
        'La terminación del ablativo singular del participio es {-e} en la primera y segunda conjugación y {-ō} en la tercera.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sustantivo + aposición también forma absoluto: {me duce} = «bajo mi mando», y {mē adiūte} = «con mi ayuda», sin participio alguno.',
      ),
    },
    {
      n: '5',
      text: T(
        'En las oraciones con verbo principal, el absoluto suele ir antes: {urbe captā, magistrātus vēnit} = «Tomada la ciudad, llegó el pretor».',
      ),
    },
  ],
  notes: [
    {
      label: T('Absoluto y ablativo oblicuo'),
      text: T(
        'No todo ablativo es absoluto. {Rosā puer amat} lleva ablativo oblicuo regido por {amat}: es el medio de la acción. {Rosā captā, puer vēnit} lleva ablativo absoluto: nada en la oración principal depende de él. La prueba es sintáctica: si el ablativo lo rige algo de la proposición principal, es oblicuo; si queda suelto, es absoluto.',
      ),
    },
    {
      label: T('Heródoto, Historia III, 32'),
      text: T(
        'En el ablativo absoluto más famoso, {ūrbē expugnātā, ...}: la ciudad siendo tomada por asalto. El resto de la frase queda colgando sin sujeto propio, porque el asunto ya se ha gastado en la circunstancia.',
      ),
    },
  ],
  examples: [
    { text: 'urbe captā', gloss: T('tomada la ciudad') },
    { text: 'Deō volente', gloss: T('si Dios quiere, con permiso de Dios') },
    { text: 'me duce', gloss: T('bajo mi mando') },
    { text: 'mē adiūte', gloss: T('con mi ayuda') },
    { text: 'Christō regnante', gloss: T('bajo el reinado de Cristo') },
    { text: 'ōrtō sōle', gloss: T('al salir el sol, con el sol ya salido') },
    { text: 'cōnsule vivo', gloss: T('mientras viva el cónsul') },
    { text: 'eo tempore', gloss: T('en aquel tiempo') },
    { text: 'hoc dictum est ei', gloss: T('esto le fue dicho') },
    { text: 'tāē gubernante', gloss: T('siendo tú el guía') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El ablativo absoluto: elementos y traducción'),
      head: [T('Estructura'), T('Ejemplo'), T('Traducción')],
      rows: [
        ['nome + participio passivo', T('la ciudad tomada'), '{urbe captā}'],
        ['nome + participio presente', T('reinando Cristo'), '{Christō regnante}'],
        ['pronombre + substantivo', T('con mi ayuda'), '{me adiuvante}'],
        ['ablativo simples', T('en cierto tiempo'), '{eo tempore}'],
        ['particípio + ablativo', T('esto le fue dicho'), '{hoc dictum est ei}'],
      ],
    },
    {
      caption: T('Tabla 2 — Ablativo singular de los participios que más usas'),
      head: [T('Participio'), T('1.ª conj.'), T('2.ª conj.'), T('3.ª conj.')],
      rows: [
        [T('amans'), T('amante'), T('amante'), T('amante')],
        [T('monens'), T('monente'), T('monente'), T('monente')],
        [T('regnans'), T('regnante'), T('regnante'), T('regnante')],
        [T('videns'), T('vidente'), T('vidente'), T('vidente')],
        [T('dictus'), T('dicente'), T('dicente'), T('dicto')],
      ],
    },
  ],
};
