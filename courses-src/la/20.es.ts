import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Las condicionales'),
  subtitle: T('{sī, nisi}: tiempo, modo y modalidad'),
  section: T('El ablativo absoluto'),
  body: C(`## {sī} y {nisi}

La conjunción {sī} «si» introduce una proposición condicional; {nisi} significa «si no», salvo cuando el sentido es «a menos que». La elección de modo y tiempo en la proposición introdutora **no** es una traducción mecánica del «se» español: el latín reparte tiempo y modalidad en un sistema de cinco tipos.

| Tipo | Prototipo | Glosa | Verbo principal |
|---|---|---|---|
| real, presente | \`{sī vēnit}\` | «si viene» | indicativo |
| real, pasado | \`{sī vēnit}\` | «si vino» | {laetātus sum} |
| ideal, presente | \`{sī rōgēs}\` | «si pides» | {rogō} |
| ideal, perfecto | \`{sī rōgāveris}\` | «si has pedido» | {rogō} |
| irreal, presente | \`{sī scīrēs}\` | «si supieras» | {dīcam} |
| irreal, pasado | \`{sī vēnisset}\` | «si hubiera venido» | {dīxissem} |

La lógica es esta: el **indicativo** trata la condición como un hecho, algo que doy por supuesto o compruebo; el **subjuntivo** la trata como una hipótesis mental, algo que planteo o niego. El **subjuntivo presente** añade la idea de intención o expectativa ({rogēs} «intentarás pedir»), y el **subjuntivo perfecto** añade la idea de resultado por venir ({rōgāveris} «habrás pedido»).

## La condicional real

Es la más sencilla: {sī} + indicativo. Vale para presente y para pasado, y el verbo principal queda en indicativo.

- {sī scīs, vēnit?} «si lo sabes, ¿vienes?»
- {sī vēnit, laetātus sum} «si vino, estoy contento»
- {sī Deus vult, omnia possunt} «si Dios quiere, todo es posible»

La Vulgata usa mucho esta construcción en Ezequiel: {sī vēnerit bellum, et multiplicābitur} «si viene la guerra, y se multiplicará».

## La condicional ideal

Subjuntivo presente o perfecto. El hablante supone la condición como un acto deliberado o deseado:

- {sī rōgēs, petam} «si pides, lo concederé»
- {sī crēderitis, videbitis} «si creéis, veréis» — es el futuro de Nicodemo en Juan 3,36
- {sī scīvēritis, cognoscētis} «si habéis sabido, conoceréis»

El perfecto {crēderitis} es el más curioso: la condición es anterior y la consecuencia es posterior.

## La condicional irreal

Subjuntivo imperfecto o pluscuamperfecto. La condición se presenta como no cumplida, y por eso el verbo principal suele ir también en subjuntivo o en {dicerem}.

- {sī scīrēs, omnia dīcerem} «si supieras, te lo diría todo» (la irrealidad de lo imaginado)
- {sī vēnisset, laetātus essem} «si hubiera venido, me habría alegrado»
- {nisi Dominus fuisset in nobis, perīssēmus} «si el Señor no hubiera estado con nosotros, habríamos perecido» (Salmo 123,6)

Es la construcción más patética del latín: quien habla ya sabe que la condición no se cumplió.

## {Nisi} y {sī nōn}

{nisi} puede ser tanto el condicional «si no» como «a menos que» (= {nisi} = {si nōn}).

- {nē quidem moritur, nisi expellātur} «no muere, a menos que sea expulsado»
- {nisi Dominus in fovea fuerit, nōn erāmus ei creditūrī} «si el Señor no hubiera estado en el pozo, no le habríamos creído» (Génesis 37,15)

## Aplicación en la Vulgata

En Juan 15,24, {mē nōbis loquente, et expellente eōs de domō nostrā, nōn venisset super eōs, ultra eōs nōn fecissent} «si yo no les hubiera hablado y no los hubiera echado de nuestra casa, no habrían pecado». Fíjate en la construcción {nōn... nōn...}: dos negaciones, lo que produce un «doble negativo» limpio.

En Proverbios 3,5, {Confide in Domino et fac bonum: et dīreget semitas tuās} es un imperativo, pero el versículo siguiente muestra la condicional ideal: {sī tibi placeant iustitiae meae} «si te agradan mis justicias».

## Cuadro-resumen

| Conjunción | Modo | Tiempo | Uso típico |
|---|---|---|---|
| \`{sī}\` | indicativo | cualquiera | condición dada como real |
| \`{sī}\` | subjuntivo | presente | intención, petición, expectativa |
| \`{sī}\` | subjuntivo | perfecto | resultado anterior |
| \`{sī}\` | subjuntivo | imperfecto | hipótesis no cumplida |
| \`{sī}\` | subjuntivo | pluscuamperfecto | arrepentimiento de lo irrealizado |
| \`{nisi}\` | cualquiera | cualquiera | «si no» o «a menos que» |
| \`{sī nōn}\` | cualquiera | cualquiera | «si no», más explícito |`),
  vocab: [
    V('si', 'si', 'si'),
    V('nisi', 'nisi', 'si no; a menos que'),
    V('rogare', 'rogo', 'pedir'),
    V('roges', 'rogo', 'pides (subj. pres.)'),
    V('rogaveris', 'rogo', 'hayas pedido (subj. perf.)'),
    V('scire', 'scio', 'saber'),
    V('scires', 'scio', 'supieras (subj. imp.)'),
    V('venire', 'venio', 'venir'),
    V('venisset', 'venio', 'hubiera venido (subj. pluperf.)'),
    V('laetatus', 'laetor', 'contento (part. pas.)'),
    V('credere', 'credo', 'creer'),
    V('perire', 'pereo', 'perecer'),
    V('Dominus', 'Dominus', 'el Señor'),
    V('bellum', 'bellum', 'guerra'),
    V('poena', 'poena', 'castigo, pena'),
    V('virtus', 'virtus', 'fuerza, virtud'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {sī vēnisset, laetātus essem}, ¿qué construcción es esta?'),
    options: [
      T('Condicional real, con indicativo en la condición'),
      T('Condicional ideal, con subjuntivo presente'),
      T(
        'Condicional irreal, con subjuntivo pluscuamperfecto en la condición y subjuntivo en el verbo principal',
      ),
      T('Condicional final con {ut}'),
    ],
    answer: 2,
    hint: T('Regla §3: {vēnisset} es el subjuntivo pluscuamperfecto de lo irrealizado.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Condicional irreal: sī vēnisset, laetātus ess_'),
      answer: 'em',
      hint: T('El verbo principal también va en subjuntivo: laetātus essem.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma más natural de decir «si yo supiera»?'),
      options: [T('{sī sciō}'), T('{sī scīrem}'), T('{sī scīrēs}'), T('{sī scīverim}')],
      answer: 2,
      hint: T('Regla §3: el irreal presente usa el subjuntivo imperfecto.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada estructura con su tipo de condicional'),
      pairs: [
        { a: T('{sī vēnit}'), b: T('real') },
        { a: T('{sī rōgēs}'), b: T('ideal (presente)') },
        { a: T('{sī rōgāveris}'), b: T('ideal (perfecto)') },
        { a: T('{sī vēnisset}'), b: T('irreal (pasado)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {nisi Dominus fuisset in nobis, perīssēmus} (Sal 123,6), {nisi} significa...'),
      options: [
        T('«si no» (condicional)'),
        T('«a menos que» (concesivo)'),
        T('«porque» (causal)'),
        T('«cuando» (temporal)'),
      ],
      answer: 0,
      hint: T('Regla §4: {nisi} = {si nōn} cuando la condición es contrafactual.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Sī} + indicativo = condicional real: la condición se trata como hecho, en presente o en pasado.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Sī} + subjuntivo presente = condicional ideal: la condición es un acto que el hablante pretende o espera ({rōgēs} «si pides»).',
      ),
    },
    {
      n: '3',
      text: T(
        '{Sī} + subjuntivo imperfecto o pluscuamperfecto = condicional irreal: la condición se declara no cumplida, y el verbo principal va también en subjuntivo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Nisi} = {si nōn}: en oraciones contrafactuales vale «si no»; con verbo de dissentir em sentido concessivo vale «a menos que».',
      ),
    },
    {
      n: '5',
      text: T(
        'El tiempo del verbo principal acompaña al tipo: presente en las reales, futuro en las ideales, subjuntivo o {dicerem} en las irreales.',
      ),
    },
  ],
  notes: [
    {
      label: T('El subjuntivo no es el «si»'),
      text: T(
        'Un alumno que viene del romance tiende a traducir {sī rōgēs} por «si pido» y {sī rōgāveris} por «si he pedido». El latín dice otra cosa: «si intentarás pedir» y «si has pedido». El tiempo subjuntivo no apunta al pasado ni al presente, sino a la **actitud** del hablante: presente = intención, perfecto = resultado, imperfecto = hipótesis falsa, pluscuamperfecto = arrepentimiento.',
      ),
    },
    {
      label: T('Salmo 123,6 en la Vulgata'),
      text: T(
        'El verso más famoso de la Vulgata en modo subjuntivo es {Nisi Dominus fuisset in nobis, perīssēmus iam} — «si el Señor no hubiera estado con nosotros, ya habríamos perecido». El pluscuamperfecto {fuisset} coloca la condición en el pasado imposible, y el imperfecto {perīssēmus} en la segunda parte refuerza la idea de resultado frustrado. Es la construcción que los gramáticos llaman irreal presente con {nisi}.',
      ),
    },
  ],
  examples: [
    { text: 'sī vēnit', gloss: T('si viene, si ha de venir (real)') },
    { text: 'sī vēnit, laetātus sum', gloss: T('si vino, estoy contento') },
    { text: 'sī rōgēs, petam', gloss: T('si pides, lo concederé') },
    { text: 'sī crēderitis, videbitis', gloss: T('si creéis, veréis') },
    { text: 'sī scīrēs', gloss: T('si supieras (irreal presente)') },
    { text: 'sī vēnisset, laetātus essem', gloss: T('si hubiera venido, me habría alegrado') },
    {
      text: 'nisi Dominus fuisset in nobis',
      gloss: T('si el Señor no hubiera estado con nosotros'),
    },
    { text: 'nisi expellātur', gloss: T('a menos que sea expulsado') },
    { text: 'sī tibi placeant iustitiae meae', gloss: T('si te agradan mis justicias') },
    { text: 'sī vēnerit bellum', gloss: T('si viene la guerra') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los cinco tipos de condicional'),
      head: [T('Tipo'), T('Proposición condicional'), T('Glosa'), T('Actitud del hablante')],
      rows: [
        ['real', '{sī crēdis}', T('«si crees»'), T('hecho supuesto')],
        ['ideal', '{sī rōgēs}', T('«si pides»'), T('intención')],
        ['ideal', '{sī rōgāveris}', T('«si has pedido»'), T('resultado futuro')],
        ['irreal', '{sī scīrēs}', T('«si supieras»'), T('hipótesis falsa')],
        ['irreal', '{sī vēnisset}', T('«si hubiera venido»'), T('arrepentimiento')],
      ],
    },
    {
      caption: T('Tabla 2 — {Sī} y {nisi} en la Vulgata'),
      head: [T('Pasaje'), T('Texto'), T('Modo')],
      rows: [
        [T('Gn 37,15'), '{nisi Dominus in fovea fuerit}', T('subj. pluscuamperfecto')],
        [T('Sal 123,6'), '{nisi Dominus fuisset in nobis}', T('subj. pluscuamperfecto')],
        [T('Jn 3,36'), '{sī crēderitis, videbitis}', T('subj. perfecto + fut.')],
        [T('Jn 15,24'), '{sī ... nōn fecissent}', T('subj. pluscuamperfecto')],
        [T('Ez 37,10'), '{sī ... multiplicābitur}', T('indicativo + fut.')],
      ],
    },
  ],
};
