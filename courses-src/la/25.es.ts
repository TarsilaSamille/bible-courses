import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Cierre: 1 Corintios 13 en la Vulgata'),
  subtitle: T('El período más complejo del latín — leído verso a verso'),
  section: T('Lectura'),
  body: C(`## El texto

> **Si linguis hominum loquar et angelorum, caritatem autem non habeam, factus sum velut aes sonans.**
> **Caritas patiens est, benigna est; caritas non aemulatur, non agit perperam, non inflatur.**
> **Nunc autem manent fidēs, spēs, caritās, tria haec: maior autem horum est caritās.**

## La estructura del capítulo

Avanza en dos partes: lo que el amor hace y no hace (v. 1-3, 4-7), después lo que es (v. 8-13). La frase que vas a descomponer aquí es la más difícil del Nuevo Testamento en latín, y precisamente por eso es el mejor ejercicio de repaso: reúne un **condicional**, una **proposición AcI**, un **deponente**, una **comparación** y tres **ablativos**.

## {Si linguis hominum loquar et angelorum}

El **condicional va en subjuntivo**: {Si} + {loquar} (subjuntivo presente) abre la subordinada; el verbo principal {factus sum} es un perfecto indicativo, de modo que el período expresa una condición contraria al hecho. Gramaticalmente la subordinada es **comparativa**, no solo temporal: {factus sum} «me he vuelto» da el resultado.

**{linguis hominum}**: {linguis} es **dativo plural**, regido por {loquar} — el dativo de aquello en lo que se habla, «en las lenguas de los hombres».

**{et angelorum}**: el sustantivo se omite, como suele hacer el griego, y {angelorum} es genitivo plural, dependiente de {linguis}: «y de los ángeles».

**{caritatem autem non habeam}**: {autem} marca contraste, «pero»; {caritatem} es acusativo, objeto de {habeam} (subjuntivo perfecto de {habeō}).

**{factus sum velut aes sonans}**: {factus sum} es el **pasivo perifrástico** de {faciō} con sentido activo, «me he vuelto»; {velut} introduce la comparación y {aes} (nominativo plural de {aes, aeris}) es el sujeto de {sonans}, participio de presente con -ns final. La imagen es una cimbal que suena sin nadie escuchando.

## {Caritas patiens est, benigna est}

Dos pasivos perifrásticos seguidos: {patiens} (de {patior}, «yo sufro») y {benigna} (adjetivo de primera declinación) son ambos nominativo femenino singular y describen a {caritas}.

La serie siguiente es un desfile de negaciones: {non aemulatur} «no es celoso» ({aemulor}, deponente), {non agit perperam} «no hace el mal» ({perperam}, adverbio, «mal»), {non inflatur} «no se infla» ({inflō}, transitivo, «inflar»). El latín marca la negación una vez con {non} y deja que el sentido haga el resto.

## {Nunc autem manent fidēs, spēs, caritās}

**{manent}** es presente de indicativo, tercera plural, «permanecen»: idéntico al imperfecto, así que solo el contexto los separa.

**{trīa haec}**: {trīa} es el nominativo neutro plural del numeral {trīs}, y como {haec} es un demostrativo neutro plural concuerda: «estas tres cosas». El griego hace lo mismo en τρία ταῦτα.

**{maior autem horum est caritās}**: {maior} es el comparativo de {magnus}, usado **sin {quam}** — la comparación normal en latín. {horum} es genitivo plural, «de estas», y {caritās} cierra el período como sujeto.

## Lo esencial

Has leído un período entero: condicional, AcI, comparativo, deponente, ablativo absoluto implícito y numeral. Cada construcción apareció en capítulos anteriores; juntas muestran por qué el latín se lee **del revés**, identificando primero la construcción principal y solo después sus miembros.`),
  vocab: [
    V('loquar', 'loquor', 'que yo hable (subj. pres. 1.ª sg.)'),
    V('habeam', 'habeo', 'que yo tenga (subj. perf. 1.ª sg.)'),
    V('caritas', 'caritas', 'el amor (1.ª decl.)'),
    V('autem', 'autem', 'pero, sin embargo (conector)'),
    V('aes', 'aes', 'bronce, metal (nom. pl.)'),
    V('sonans', 'sono', 'que suena (part. pres.)'),
    V('factus', 'facio', 'hecho, vuelto (part. perf.)'),
    V('velut', 'velut', 'como, a modo de (conector)'),
    V('patiens', 'patior', 'que sufre (part. pres.)'),
    V('benignus', 'benignus', 'benevolente, bondadoso'),
    V('aemulor', 'aemulor', 'envidiar (deponente)'),
    V('perperam', 'perperam', 'mal, de manera errónea (adv.)'),
    V('maneo', 'maneo', 'permanecer, quedarse'),
    V('trīs', 'tres', 'tres (numerales)'),
    V('maior', 'magnus', 'mayor (comparativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Si linguis hominum loquar}, ¿cuál es el modo del verbo subordinado?'),
    options: [
      T('Subjuntivo presente, propio de los condicionales'),
      T('Indicativo perfecto, por causa de {factus sum}'),
      T('Infinitivo, por causa de {Si}'),
      T('Futuro, porque habla del amor'),
    ],
    answer: 0,
    hint: T('Regla §1: {Si} con sentido condicional lleva subjuntivo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa: {Caritas non aemulatur} — el verbo {aemulor} es deponente, así que la forma es ___',
      ),
      answer: 'aemulatur',
      hint: T('Misma forma en voz activa y pasiva; el sentido es activo.'),
    },
    {
      kind: 'choose',
      prompt: T('En {maior autem horum est caritas}, ¿cómo se traduce el comparativo?'),
      options: [
        T('Sin {quam}: «el amor es mayor»'),
        T('Con {quam} obligatorio: «maior quam caritas»'),
        T('Como superlativo: «el mayor de los amores»'),
        T('Como verbo: «ama más»'),
      ],
      answer: 0,
      hint: T('Regla §4: el comparativo latino omite {quam}.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Qué caso tiene {linguis} en {Si linguis hominum loquar}?'),
      answer: 'dative plural',
      hint: T('Es el dativo de aquello en lo que se habla, regido por {loquar}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con su función'),
      pairs: [
        { a: T('factus sum'), b: T('pasivo perifrástico de sentido activo') },
        { a: T('aemulatur'), b: T('verbo deponente') },
        { a: T('patiens est'), b: T('participio presente con valor adjetival') },
        { a: T('trīa haec'), b: T('numeral neutro + demostrativo concordantes') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Si} con sentido condicional lleva subjuntivo; la principal queda en indicativo ({si ... velim, errō} «si quiero, me equivoco»).',
      ),
    },
    {
      n: '2',
      text: T(
        'El dativo de contenido: {loquor} + dativo dice **en qué** se habla: {linguis hominum loquar} «hablar en las lenguas de los hombres».',
      ),
    },
    {
      n: '3',
      text: T(
        'Los deponentes tienen forma pasiva y sentido activo: {aemulatur} «envidia», {patitur} «sufre», {loquitur} «habla».',
      ),
    },
    {
      n: '4',
      text: T(
        'El comparativo latino omite {quam}: {maior} «mayor»; {maior quam} solo aparece para énfasis arcaico.',
      ),
    },
    {
      n: '5',
      text: T(
        'Puede omitirse un sustantivo en genitivo plural cuando su dependiente es el único sustantivo de la cláusula: {et angelorum} «y de los ángeles».',
      ),
    },
  ],
  notes: [
    {
      label: T('Lee el latín del revés'),
      text: T(
        'La primera tarea en un período latino no es traducir palabra por palabra: es localizar la **construcción principal**. En 1Co 13,1 es {factus sum velut aes sonans}. Fijada la principal, el resto se ordena: primero el condicional, luego el AcI y al final los ablativos. Traducir en orden latino produce una frase incomprensible.',
      ),
    },
    {
      label: T('El final del capítulo'),
      text: T(
        'La Vulgata dice {tria haec: maior autem horum est caritās}, con {horum} como genitivo partitivo — «de estas tres, la mayor es el amor». Las traducciones modernas siguen el griego con {ex ipsis} «de entre ellas», pero la diferencia es pequeña: lo que marca la lectura es el superlativo, no el genitivo.',
      ),
    },
  ],
  examples: [
    { text: 'Si linguis hominum loquar', gloss: T('si hablo en las lenguas de los hombres') },
    { text: 'caritatem autem non habeam', gloss: T('pero no tengo el amor') },
    { text: 'factus sum velut aes sonans', gloss: T('me he vuelto como un bronce que suena') },
    { text: 'caritas patiens est', gloss: T('el amor es paciente (pasivo perifrástico)') },
    { text: 'non agit perperam', gloss: T('no hace el mal') },
    { text: 'non inflatur', gloss: T('no se infla (pasivo verbal)') },
    { text: 'trīa haec', gloss: T('estas tres cosas') },
    { text: 'maior horum est caritas', gloss: T('la mayor de ellas es el amor') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El período de 1Co 13,1'),
      head: [T('Palabra'), T('Análisis'), T('Portugués')],
      rows: [
        ['{Si}', 'conector de condição', 'se'],
        ['{loquar}', 'subj. presente 1.ª sg.', 'eu fale'],
        ['{linguis}', 'dativo plural', 'nas línguas'],
        ['{angelorum}', 'genitivo plural', 'dos anjos'],
        ['{habeam}', 'subj. perfeito 1.ª sg.', 'eu tenha'],
        ['{factus sum}', 'passivo perifrástico', 'me tornei'],
        ['{aes sonans}', 'comparação com {velut}', 'bronze que soa'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos de 1Co 13,4-7'),
      head: [T('Latín'), T('Categoría'), T('Portugués')],
      rows: [
        ['{patiens est}', 'passivo perifrástico', 'sofre'],
        ['{aemulatur}', 'deponente, 3.ª sg.', 'inveja'],
        ['{agit perperam}', 'ativo, {perperam} adverbial', 'faz mal'],
        ['{inflatur}', 'passivo de {inflō}', 'é inflado'],
        ['{manent}', 'indicativo presente 3.ª pl.', 'permanecem'],
      ],
    },
  ],
};
