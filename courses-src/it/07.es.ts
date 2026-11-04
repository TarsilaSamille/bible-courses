import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('El congiuntivo y los pronombres'),
  subtitle: T('che parli; Dio ti ama'),
  section: T('El pasado y la lectura'),
  body: C(`## El congiuntivo no es solo deseo

El congiuntivo italiano **no significa únicamente** «subjetivo» o «deseo». Aparece después de emoción, {sono contento che tu vada}; después de duda, {non credo che sia qui}; después de orden y exhortación, {ti prego di venire}; y después de conectores como {affinché} («para que»), {perché} («porque») y {sebbene} («aunque»).

La regla práctica cabe en una línea: si la oración tiene un sujeto distinto del sujeto principal, el congiuntivo es lo normal. En {voglio che tu vada}, quien quiere es una persona y quien va es otra. Cuando el sujeto es el mismo, el italiano hablado alterna entre indicativo y congiuntivo con más libertad de la que prescribe la regla, y el hablante no percibe la tensión entre los dos.

## La formación es más fácil de lo que parece

El congiuntivo presente **cambia la terminación final** del infinitivo por la terminación correspondiente del presente: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}. Respecto al presente indicativo es el mismo conmutador; la diferencia está en los irregulares, que también cambian: {essere} → {sia}, {avere} → {abbia}, {fare} → {faccia}, {andare} → {vada}, {dare} → {dia}, {sapere} → {sappia}.

Por eso {so che lui è qui} (indicativo, certeza) se distingue de {so che lui sia qui} (congiuntivo, relato de otro). El sustantivo es el mismo; lo que cambia es cuánto da por verdadero el hablante.

## Los pronombres son pocos y se pegan

Los pronombres simples son {mi}, {ti}, {si}, {lo}, {la}, {li}, {le}, {ci}, {vi}, {ne}. **Todos van antes del verbo**, y {lo}, {la}, {li}, {le} pueden ir después. En {Dio ti ama}, {ti} significa «a ti» y va antes del verbo.

El {si} reflexivo merece atención: {si} solo es reflexo cuando la acción recae sobre el sujeto. En {lui si lava}, «él se lava»; en {Maria si è vestita}, puede ser reflexo («María se vistió») o pasivo («María fue vestida»). Quien habla sabe cuál de las dos cosas ocurrió, y la frase por sí sola no lo dice.

## En la Biblia

{Sia santificato il tuo nome}, del Padrenuestro, es congiuntivo de deseo. La forma {è} ahí sería un error: {è santificato il tuo nome} sería una noticia sobre un hecho consumado, y el versículo dejaría de ser una petición. Lo mismo vale para {Venga il tuo regno} y {Sia fatta la tua volontà}: las tres peticiones centrales del Padrenuestro están en congiuntivo, y no es casualidad, porque una petición es por definición lo que se quiere y todavía no se tiene.

## Criterio de lectura

Si la oración principal tiene verbo de emoción, de duda o de orden, espera el congiuntivo. Si ves {sia}, {abbia}, {faccia}, {vada}, es congiuntivo; y si la frase es un deseo o un relato, la traducción necesita eso. Si ves {so che} seguido de indicativo, no lo corrijas: la certeza es afirmación, y afirmar es lo contrario de suponer.`),
  vocab: [
    V('parli', 'parlare', 'hablas (subj.)'),
    V('sia', 'essere', 'sea (subj.)'),
    V('abbia', 'avere', 'tenga (subj.)'),
    V('vada', 'andare', 'vaya (subj.)'),
    V('venga', 'venire', 'venga (subj.)'),
    V('ti', 'ti', 'a ti'),
    V('ci', 'ci', 'a nosotros'),
    V('ne', 'ne', 'de ello/de ellos'),
    V('che', 'che', 'que (conjunción)'),
    V('affinché', 'affinché', 'para que'),
    V('perché', 'perché', 'porque'),
    V('sebbene', 'sebbene', 'aunque'),
    V('voglio', 'volere', 'quiero'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: Sia santificato ___ nome (tuyo)'),
    answer: 'il tuo',
    hint: T('Artículo + posesivo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa correctamente el congiuntivo?'),
      options: [
        T('Spero che Dio ___ buono.'),
        T('Spero che Dio è buono.'),
        T('So che Dio ___ buono.'),
        T('Penso che Dio va buono.'),
      ],
      answer: 0,
      hint: T('Spero exige congiuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: Dio ___ ama (ti)'),
      answer: 'ti',
      hint: T('Pronombre objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma significa «tenga» en el congiuntivo?'),
      options: [T('ha'), T('abbia'), T('abbia avuto'), T('avrebbe')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Después de emoción, duda, orden o finalidad el verbo va en congiuntivo: {sono contento che tu vada}, {non credo che sia qui}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Con sujeto distinto del principal el congiuntivo es lo normal: {voglio che tu vada}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La formación cambia la terminación final del infinitivo: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Las formas irregulares del congiuntivo son {sia}, {abbia}, {faccia}, {vada}, {dia} y {sappia}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{So che} se queda en indicativo y {penso che} va en congiuntivo: {so che è qui} frente a {penso che sia qui}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que cambia con {che}'),
      text: T(
        'La diferencia entre {so che lui è qui} y {so che lui sia qui} es cuánto da por verdadero el hablante. En el primero, {è} es afirmación; en el segundo, {sia} es lo que se piensa. La estructura es la misma, y es el verbo el que carga el valor.',
      ),
    },
    {
      label: T('{Sia}, y no {è}'),
      text: T(
        '{Sia santificato il tuo nome} es congiuntivo de deseo. Si hubiera venido {è santificato}, la frase sería una constatación, y la petición del Padrenuestro se volvería noticia. El mismo argumento vale para {venga il tuo regno}.',
      ),
    },
  ],
  examples: [
    { text: 'Non credo che sia qui.', gloss: T('No creo que esté aquí.') },
    { text: 'Spero che Dio sia buono.', gloss: T('Espero que Dios sea bueno.') },
    { text: 'Voglio che tu vada.', gloss: T('Quiero que vayas.') },
    { text: 'Ti prego di venire.', gloss: T('Te ruego que vengas.') },
    { text: 'So che lui è qui.', gloss: T('Sé que él está aquí.') },
    { text: 'So che lui sia qui.', gloss: T('Sé que él debería estar aquí.') },
    { text: 'Sia la tua volontà.', gloss: T('Hágase tu voluntad.') },
    { text: 'Dio ci ama.', gloss: T('Dios nos ama.') },
  ],
  tables: [
    {
      caption: T('Presente del congiuntivo'),
      head: ['Persona', '-are (parlare)', '-ere (leggere)', '-ire (finire)', 'irregolari'],
      rows: [
        ['io', 'parli', 'legga', 'finisca', 'sia'],
        ['tu', 'parli', 'legga', 'finisci', 'abbia'],
        ['lui/lei', 'parli', 'legga', 'finisca', 'vada, dia'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', '—'],
        ['voi', 'parliate', 'leggiate', 'finiate', '—'],
        ['loro', 'parlino', 'leggano', 'finiscano', '—'],
      ],
    },
    {
      caption: T('Qué provoca el congiuntivo'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['sono contento che tu vada', 'vada', 'congiuntivo'],
        ['non credo che sia qui', 'sia', 'congiuntivo'],
        ['affinché venga', 'venga', 'congiuntivo'],
        ['ti prego di venire', 'venire', 'infinitivo'],
        ['so che è qui', 'è', 'indicativo'],
      ],
    },
  ],
};
