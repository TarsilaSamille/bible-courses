import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('El passato prossimo'),
  subtitle: T('ho parlato: acción concluida'),
  section: T('El pasado y la lectura'),
  body: C(`## Una sola forma para todo el pasado

El italiano hablado tiene un tiempo para el pasado, el *passato prossimo*, **hecho de auxiliar en presente más participio**: {ho parlato}, {abbiamo letto}, {Dio disse}, {Gesù è stato crocifisso}. No es un defecto, es un sistema: el italiano marca el pasado con el auxiliar {ho}, que es la primera persona del presente de {avere}. El resultado es que todo el pasado pasó a usar el presente como auxiliar.

A quien aprende le parece confuso: {ho parlato} (hablé) y {parlo} (hablo) comparten el auxiliar. La diferencia está en el participio, que **carga el evento**. Sin el participio, {ho} es solo «yo tengo».

## ¿{Avere} o {essere}?: la elección que cambia la traducción

Los verbos transitivos usan {avere}: {ho mangiato} (comí), {ho scritto} (escribí), {ho letto} (leí). Los verbos de movimiento, de estado y los reflexivos usan {essere}: {sono andato} (fui), {sono stato} (estuve), {sono nato} (nací), {mi sono lavato} (me lavé).

Con {essere} el participio concuerda con el sujeto: {sono andato}, {sono andata}, {sono andati}, {sono andate}. Es la misma concordancia del adjetivo, y por eso {le ragazze sono partite} tiene {partite} y no {partito}. Con {avere} no pasa nada de eso: {abbiamo parlato} vale para una persona y para mil.

## Los participios irregulares son un puñado

**Los regulares son mecánicos**: {-are} pasa a {-ato} ({parlare} → {parlato}), {-ere} pasa a {-uto} ({leggere} → {letto}, {prendere} → {preso}), {-ire} pasa a {-ito} ({finire} → {finito}). Los irregulares se aprenden, y son pocos: {dire} → {detto}, {fare} → {fatto}, {leggere} → {letto}, {prendere} → {preso}, {scrivere} → {scritto}, {aprire} → {aperto}, {morire} → {morto}.

El riesgo está en los más frecuentes, que es una buena noticia. Y fíjate en que {stare} da {stato} y {essere} también da {stato}: misma forma, verbos distintos.

## El puente con la Biblia

{Dio disse} y {la luce fu scritta} muestran el traspaso entre dos maneras de decir el pasado. El discurso está en *passato prossimo*, {disse}, mientras que {fu} expresa un hecho consumado y usa {essere} en el pasado en vez de {è stato}.

La distinción práctica: {disse} cuenta lo que ocurrió; {fu scritto} destaca el resultado, que sigue siendo válido después de ocurrir. En un evangelio, alternar los dos es lo que da al texto su ritmo entre narración y afirmación.`),
  vocab: [
    V('ho parlato', 'parlare', 'hablé'),
    V('ha letto', 'leggere', 'leyó'),
    V('sono andato', 'andare', 'fui (masc.)'),
    V('sono andata', 'andare', 'fui (fem.)'),
    V('detto', 'dire', 'dicho'),
    V('fatto', 'fare', 'hecho'),
    V('letto', 'leggere', 'leído'),
    V('scritto', 'scrivere', 'escrito'),
    V('disse', 'dire', 'dijo'),
    V('fu', 'essere', 'fue'),
    V('dire', 'dire', 'decir'),
    V('fare', 'fare', 'hacer'),
    V('prendere', 'prendere', 'tomar'),
    V('stato', 'stare', 'estado (participio)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «yo hablé»?'),
    options: [T('io parlo'), T('ho parlato'), T('sono parlato'), T('avevo parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué auxiliar acompaña a andare?'),
      options: [T('avere'), T('essere'), T('avere essere'), T('si')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: Maria ha ___ il pane (mangiare)'),
      answer: 'mangiato',
      hint: T('Participio de -are en -ato.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: siamo arrivat_ al tempio'),
      answer: 'i',
      hint: T('Noi, masculino plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El *passato prossimo* es auxiliar en presente más participio: {ho parlato}, {abbiamo letto}, {sono andato}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Con {essere} el participio concuerda con el sujeto: {sono andata}, {sono andati}, {le ragazze sono partite}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con {avere} el participio no concuerda: {abbiamo parlato} vale para una persona y para mil.',
      ),
    },
    {
      n: '4',
      text: T(
        'Participios regulares: {-are} → {-ato}, {-ere} → {-uto}, {-ire} → {-ito}; los irregulares son {detto}, {fatto}, {letto}, {preso}, {scritto}.',
      ),
    },
    {
      n: '5',
      text: T('El auxiliar nunca aparece solo: {ho mangiato}, y nunca {ho mangiato mangiato}.'),
    },
  ],
  notes: [
    {
      label: T('¿Auxiliar o verbo?'),
      text: T(
        '{ho mangiato} puede ser «comí» o «he comido»: la elección viene de lo que exige el verbo principal, no de la intención del hablante. Los verbos de movimiento y de cambio de estado piden {essere} por convención, no por sentido, y por eso {sono partito} es correcto y {ho partito} no.',
      ),
    },
    {
      label: T('Disse y fu'),
      text: T(
        '{disse} es *passato prossimo* y relata; {fu} es el *passato remoto* de {essere} y resulta. Donde el español tiene un verbo, el italiano tiene dos, y pasar de uno a otro es lo que separa la narración de la afirmación en el texto bíblico.',
      ),
    },
  ],
  examples: [
    { text: 'Abbiamo letto la Scrittura.', gloss: T('Hemos leído las Escrituras.') },
    { text: 'Gesù è stato crocifisso.', gloss: T('Jesús fue crucificado.') },
    { text: 'Dio disse: «Sii luce».', gloss: T('Dios dijo: «Sea luz».') },
    { text: 'Le ragazze sono partite.', gloss: T('Las chicas se fueron.') },
    { text: 'Ho scritto la lettera.', gloss: T('Escribí la carta.') },
    { text: 'Siamo arrivati al tempio.', gloss: T('Llegamos al templo.') },
    { text: 'Mi sono lavato le mani.', gloss: T('Me lavé las manos.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('La ley fue escrita por Moisés.') },
  ],
  tables: [
    {
      caption: T('Auxiliares en el passato prossimo'),
      head: ['Verbo', 'Auxiliar', 'Esempio'],
      rows: [
        ['transitivo', 'avere', 'ho mangiato il pane'],
        ['transitivo', 'avere', 'ha scritto la lettera'],
        ['movimento', 'essere', 'sono andato a Roma'],
        ['stato', 'essere', 'sono stato malato'],
        ['riflessivo', 'essere', 'mi sono lavato'],
      ],
    },
    {
      caption: T('Participio regular e irregular'),
      head: ['Infinitivo', 'Participio', 'Tipo'],
      rows: [
        ['parlare', 'parlato', 'regolare: -are → -ato'],
        ['finire', 'finito', 'regolare: -ire → -ito'],
        ['leggere', 'letto', 'irregolare'],
        ['prendere', 'preso', 'irregolare'],
        ['dire', 'detto', 'irregolare'],
        ['scrivere', 'scritto', 'irregolare'],
        ['morire', 'morto', 'irregolare'],
      ],
    },
  ],
};
