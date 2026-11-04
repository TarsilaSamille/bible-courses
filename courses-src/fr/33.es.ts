import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Los pronombres y palabras interrogativos'),
  subtitle: T('qui, quoi, quel, où, quand, comment, combien — y la inversión que exigen'),
  section: T('Consolidación'),
  body: C(`## La pregunta francesa hace tres cosas a la vez

Una pregunta en francés no es una frase terminada en «?». Hace (1) que se elija una **palabra interrogativa**, (2) que pueda exigir la **inversión** del sujeto con el verbo, y (3) que se opte entre {est-ce que}, la palabra interrogativa y la inversión directa. Así que una misma pregunta oral tiene tres formas: {Tu viens ?}, {Est-ce que tu viens ?}, {Viens-tu ?}

De las tres, la más hablada hoy es **{est-ce que}**, porque no toca el orden de palabras: {Est-ce que tu as compris ?} funciona en cualquier contexto. La inversión directa ({comprends-tu ?}) suena antigua o literaria, y es habitual en la Biblia.

## El cuadro de las palabras

{qui} pregunta por una **persona**, {quoi} por una **cosa**, {quel} por un **atributo o cualidad**, y {lequel} por una **elección entre alternativas**: {Lequel veux-tu ?} — «¿Cuál quieres?». Ojo: {lequel} no se fusiona con {le}: es {le + quel}, y en femenino {laquelle}, en plural {lesquels}, {lesquelles}.

{où} es lugar ({Où habites-tu ?}), {quand} es tiempo, {comment} es modo, {pourquoi} es causa — y {combien} es cantidad, con una particularidad: exige *{de}*: {Combien de livres ?}, {Combien de gens sont venus ?}

## Invierte con cuidado

La inversión solo es obligatoria cuando **no hay palabra interrogativa**: {Viens-tu ?}, {Parlez-vous français ?}, {A-t-elle raison ?} (con {a} elíptico). Cuando la pregunta ya lleva {qui}, {où}, {quand}, basta el orden natural: *{Où habites-tu ?}* suena mal, y {Où tu habites ?} también. La forma neutra es *{Où est-ce que tu habites ?}*

Y atención al verbo {être}: con {qui}, {où} y compañía **no** invierte — {Qui est là ?}, no *{Qui est-il là ?}* — porque {est} ya es la forma fuerte. La grafía con hiato ({a-t-elle}, {est-il}) existe solo para mantener la pronunciación.

## Qué cambia en los textos

El {Symbole des Apôtres} no tiene ninguna pregunta, pero su estilo es el mismo: subordinadas relativas con {qui} y {que}, y un {d'où} en el v. 10. El Salmo 23 sí trae una cantidad escondida: «jusque dans les jours de mes vieux ans» se lee en francés corriente como {Combien de jours !}. El Credo, en cambio, no tiene ningún *{combien}* y sí muchos *{tout}*: {tous les saints}, que es la manera fija de decir «todos» en un texto solemne.

En resumen: la pregunta francesa pertenece a una de tres familias — **con {est-ce que}**, **con palabra interrogativa y orden natural**, o **inversión directa**. Reconocer cuál de las tres estás leyendo es la mitad de la fluencia pasiva.`),
  vocab: [
    V('qui', 'qui', 'a quién, quién (persona)'),
    V('quoi', 'quoi', 'qué (cosa)'),
    V('quel', 'quel', 'cuál (atributo, m. sing.)'),
    V('lequel', 'lequel', 'cuál (elección entre alternativas)'),
    V('où', 'où', 'dónde'),
    V('quand', 'quand', 'cuándo'),
    V('comment', 'comment', 'cómo (modo)'),
    V('pourquoi', 'pourquoi', 'por qué, por cuál'),
    V('combien', 'combien', 'cuánto (exige de)'),
    V('est-ce que', 'est-ce que', 'la partícula neutra de interrogación'),
    V('qui est-ce que', 'qui est-ce que', 'quién es (sujeto, sin inversión)'),
    V('si', 'si', 'si, si acaso (pregunta retórica)'),
    V('quelque chose', 'quelque chose', 'algo (respuesta a quoi)'),
    V('personne', 'personne', 'nadie (respuesta a qui)'),
    V('quelconque', 'quelconque', 'cualquier, cualquiera (indefinido)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la pregunta más natural en francés hablado hoy?'),
    options: [
      T('{Est-ce que tu as compris ?}'),
      T('{As-tu compris ?}'),
      T('{Tu as compris ?}'),
      T('{Que tu as compris ?}'),
    ],
    answer: 0,
    hint: T('Regla §1: la inversión directa es minoritaria fuera de la literatura.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: {Combien ___ livres as-tu lus ?} — después de {combien} va {de}.'),
      answer: 'de',
      hint: T('Lo mismo ocurre con {assez de}, {beaucoup de}, {peu de}.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Lequel veux-tu ?}, ¿qué hace {lequel} que {quel} no hace?'),
      options: [
        T('Sustituye a un sustantivo: {le quel} = «el cual»'),
        T('Sustituye a un verbo'),
        T('Exige el futuro'),
        T('Marca negación'),
      ],
      answer: 0,
      hint: T('Compara {Quel film ?} con {Lequel film ?}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la pregunta con la respuesta que espera'),
      pairs: [
        { a: T('¿A quién esperas?'), b: T('alguien, porque es una persona') },
        { a: T('¿Qué esperas?'), b: T('algo, porque es una cosa') },
        { a: T('¿Cuántas páginas?'), b: T('un número, seguido de {de}') },
        { a: T('¿Dónde está ella?'), b: T('una expresión de lugar, nunca {qui}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        '¿Cuántas palabras interrogativas distintas aparecen en el trío {qui, quoi, quel, combien}? Responde con un número: ___',
      ),
      answer: '4',
      hint: T('Cuenta los elementos de la lista, no las letras.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La inversión directa suena formal o antigua; en el día a día usa {est-ce que}, que conserva el orden natural.',
      ),
    },
    {
      n: '2',
      text: T(
        'La inversión solo es obligatoria sin palabra interrogativa: {Viens-tu ?}, {A-t-elle raison ?} (con {a} elíptico).',
      ),
    },
    {
      n: '3',
      text: T(
        '{qui} pide persona, {quoi} pide cosa; {quel} cualifica y {lequel} elige: {Lequel ?} se responde con un sintagma nominal.',
      ),
    },
    {
      n: '4',
      text: T('{combien} exige {de} ante el sustantivo: {Combien de gens ?}, {Combien de fois ?}.'),
    },
    {
      n: '5',
      text: T(
        'Con {être} la inversión es automática: {Es-tu ici ?}, {Est-il ?}, {Sont-ils ?}. Después de {qui}, {où}, {quand}, {combien} el verbo {être} mantiene el orden natural.',
      ),
    },
  ],
  notes: [
    {
      label: T('La diferencia que nadie traduce'),
      text: T(
        'En inglês, *Who did you see?* y *Whom did you see?* son variantes. En francés la distinción no es de caso sino de **función**: {qui} solo puede ser **sujeto** ({Qui parle ?}), nunca objeto directo. Para un objeto directo que designa a una persona, el francés usa {qui**que}** ({Qui que tu sois}, «seas quien seas») o una construcción preposicional ({De qui parles-tu ?}, «¿de quié hablas?»). {Quoi}, en cambio, designa una cosa y puede ocupar cualquier posición.',
      ),
    },
    {
      label: T('Preguntas en los textos sagrados'),
      text: T(
        'El {Père Notre-Dame} y el {Symbole des Apôtres} no tienen ninguna pregunta: son declaraciones. El Salmo 23 sí trae una exclamación — {Jusqu’à quand !} — que el hebreo original ({hasta cuándo}) vuelve casi literal, y que las versiones modernas tratan como un grito retórico de dolor. Pero la fuerza real de {Jusqu’à quand ?} aquí no es interrogativa: es una **exclamación temporal**, como en {Ah, cuándo !}',
      ),
    },
  ],
  examples: [
    { text: 'Qui est-ce que tu attends ?', gloss: T('¿A quién esperas?') },
    { text: 'Qu’est-ce qu’il cherche ?', gloss: T('¿Qué busca?') },
    { text: 'Oð est-ce qu’elle est ?', gloss: T('¿Dónde está?') },
    {
      text: 'Combien de jours !',
      gloss: T('¿Cuántos días! (lectura natural de «jusque dans les jours de mes vieux ans»)'),
    },
    { text: 'Est-ce que tu as compris ?', gloss: T('¿Entendiste?') },
    { text: 'As-tu compris ?', gloss: T('¿Entendiste? (inversión directa, registro formal)') },
    { text: 'Lequel des deux veux-tu ?', gloss: T('¿Cuál de los dos quieres?') },
    { text: 'De qui parles-tu ?', gloss: T('¿De quién hablas?') },
    {
      text: 'Qui que tu sois, reste aimé',
      gloss: T('seas quien seas, sigue amado ({qui que} = «seas quien sea»)'),
    },
    { text: 'Jusqu’à quand, Seigneur ?', gloss: T('¿Hasta cuándo, Señor? (exclamación temporal)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las tres familias de la pregunta'),
      head: [T('Familia'), T('Modelo'), T('Ejemplo'), T('Portugués')],
      rows: [
        [
          T('con {est-ce que}'),
          T('verbo + {est-ce que} + sujeto'),
          T('¿Vienes?'),
          T('¿estás viniendo?'),
        ],
        [
          T('con palabra interrogativa'),
          T('{palabra} + sujeto + verbo'),
          T('¿Dónde vives?'),
          T('¿dónde vives?'),
        ],
        [
          T('inversión directa'),
          T('sujeto + verbo + sujeto'),
          T('¿Dónde vives?'),
          T('¿dónde vives?'),
        ],
      ],
    },
    {
      caption: T('Tabla 2 — Flexión de quel / lequel'),
      head: [T('Número'), T('Masculino'), T('Femenino')],
      rows: [
        [T('singular'), T('quel'), T('quelle')],
        [T('plural'), T('quels'), T('quelles')],
        [T('con {le}'), T('lequel, lesquels'), T('laquelle, lesquelles')],
        [T('con {les}'), T('lequel, lesquels'), T('lesquelles')],
      ],
    },
  ],
};
