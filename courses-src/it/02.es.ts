import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Verbos en presente'),
  subtitle: T('parlare, leggere, finire'),
  section: T('El nombre y el verbo'),
  body: C(`## Tres conjugaciones, un solo método

Quítale al infinitivo lo que es terminación, {parl-are}, {legg-ere}, {fin-ire}, y junta lo que queda con **las seis terminaciones del presente**: {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}. {Parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}. La segunda conjugación, {-ere}, es idéntica y solo cambia el tema: {leggo}, {leggi}, {legge}, {leggiamo}, {leggete}, {leggono}. Aprendido el método, ya está la mitad de los verbos italianos.

La {-e} final del infinitivo **desaparece en todas las formas del presente**, y por eso el mismo tema reaparece en todos los tiempos. De {parlare} queda {parl-}; de {leggere} queda {legg-}, y su {g} se mantiene ante {-i} y {-e} pero cae ante {-o} y {-a}, como en {mangiare}, que da {mangio}.

## {-ire} tiene dos modelos

**La tercera conjugación se divide por un criterio** que no exige memoria: la forma de {io}. {Finire} usa {-isc-}: {finisco}, {finisci}, {finisce}, {finiamo}, {finite}, {finiscono}. {Partire} usa la forma regular: {parto}, {parti}, {parte}, {partiamo}, {partite}, {partono}. Los dos modelos conviven, y ninguno es más correcto que el otro.

El aviso está en la sílaba tónica. Si el acento cae en la penúltima, el verbo es del grupo {-isc-}, y la {i} del infinitivo se alarga en {fin-ís-co}. Si cae en la última, el verbo es regular, {pár-ti-re}. Es el mismo principio que ordena los verbos griegos en {-ω} y {-μι}, y quien sepa griego ya sabe italiano en este punto.

Los verbos irregulares escapan casi siempre solo en {io}: {leggo} de {leggere}, {prendo} de {prendere}, {faccio} de {fare}, {dico} de {dire}. Aprendido el irregular, el resto del paradigma es el regular con la vocal cambiada.

## El presente también es costumbre

{Studio italiano ogni giorno} es «estudio italiano todos los días». El italiano no tiene tiempo dedicado a la costumbre, y usa el presente para el pasado habitual: el griego nombraría dos tiempos donde el italiano nombra uno. En un texto bíblico esto aparece constantemente, y por eso la traducción literal falla tanto.

## Criterio de lectura

Cuando veas un presente italiano en un texto bíblico, pregunta qué pide el contexto: ¿un hecho en curso o una costumbre? La respuesta cambia la traducción más que la forma.`),
  vocab: [
    V('parlare', 'parlare', 'hablar'),
    V('parlo', 'parlare', 'yo hablo'),
    V('leggere', 'leggere', 'leer'),
    V('leggo', 'leggere', 'yo leo'),
    V('finire', 'finire', 'terminar'),
    V('finisco', 'finire', 'yo termino'),
    V('mangiare', 'mangiare', 'comer'),
    V('mangio', 'mangiare', 'yo como'),
    V('partire', 'partire', 'salir'),
    V('parto', 'partire', 'yo salgo'),
    V('prendere', 'prendere', 'tomar'),
    V('dormire', 'dormire', 'dormir'),
    V('Vangelo', 'Vangelo', 'Evangelio'),
    V('Verbo', 'verbo', 'Verbo (Logos)'),
    V('mondo', 'mondo', 'mundo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma de io de leggere?'),
    options: [T('leggi'), T('leggo'), T('legge'), T('leggono')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: noi ___ (parlare)'),
      answer: 'parliamo',
      hint: T('Noi + -iamo'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase expresa costumbre?'),
      options: [
        T('Mangio una mela.'),
        T('Mangio una mela ogni giorno.'),
        T('Ho mangiato la mela.'),
        T('Mangiavo la mela ieri.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Forma el io de finire: ___'),
      answer: 'finisco',
      hint: T('Modelo -isc-.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las terminaciones del presente son {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}: {parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El infinitivo pierde la vocal final: {parl-are} da {parlo} y {parl-ano} da {parlano}, y queda el tema.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el grupo {-ire} la forma del {io} decide la conjugación: {finisco} lleva {-isc-}, {parto} no.',
      ),
    },
    {
      n: '4',
      text: T(
        'La sílaba tónica avisa: acento en la penúltima ({fi-nís-co}) pide {-isc-}, acento en la última ({pár-ti-re}) da la forma regular.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con {tu} hay dos formas de segunda persona, {leggi} y {leggiti}; la primera es la del texto bíblico.',
      ),
    },
  ],
  notes: [
    {
      label: T('La {-e} que desaparece'),
      text: T(
        'En el presente la terminación no tiene vocal final: {parlare} da {parlo} y {partire} da {parto}, nunca {parloo}. El mismo tema sirve a todos los tiempos, y de ahí salen el futuro {parlerò} y el condicional {parlerei}.',
      ),
    },
    {
      label: T('Costumbre en el presente'),
      text: T(
        'El griego distingue lo que pasaba de vez en cuando de lo que pasaba siempre; el italiano usa el presente para los dos casos. Traducir {venne} como «venía» acierta el sentido y falla el tiempo, porque {venne} es el passato prossimo y {veniva} el imperfetto.',
      ),
    },
  ],
  examples: [
    { text: 'Parlo ogni giorno.', gloss: T('Hablo todos los días.') },
    { text: 'Leggi il Vangelo.', gloss: T('Lee el Evangelio.') },
    { text: 'Finisco il lavoro.', gloss: T('Termino el trabajo.') },
    { text: 'Partiamo adesso.', gloss: T('Salimos ahora.') },
    { text: 'Maria mangia una mela.', gloss: T('María come una manzana.') },
    { text: 'Noi leggiamo le Scritture.', gloss: T('Nosotros leemos las Escrituras.') },
    { text: 'Dio parla al suo servo.', gloss: T('Dios habla con su siervo.') },
    { text: 'Il maestro spiega la lezione.', gloss: T('El maestro explica la lección.') },
  ],
  tables: [
    {
      caption: T('Presente regular'),
      head: ['Persona', '-are', '-ere', '-ire (finire)', '-ire (partire)'],
      rows: [
        ['io', 'parlo', 'leggo', 'finisco', 'parto'],
        ['tu', 'parli', 'leggi', 'finisci', 'parti'],
        ['lui/lei', 'parla', 'legge', 'finisce', 'parte'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', 'partiamo'],
        ['voi', 'parlate', 'leggete', 'finite', 'partite'],
        ['loro', 'parlano', 'leggono', 'finiscono', 'partono'],
      ],
    },
    {
      caption: T('El tema y la vocal final'),
      head: ['Infinitivo', 'Tema', 'io', 'loro'],
      rows: [
        ['parlare', 'parl-', 'parlo', 'parlano'],
        ['leggere', 'legg-', 'leggo', 'leggono'],
        ['finire', 'fin-', 'finisco', 'finiscono'],
        ['partire', 'part-', 'parto', 'partono'],
        ['dormire', 'dorm-', 'dormo', 'dormono'],
      ],
    },
  ],
};
