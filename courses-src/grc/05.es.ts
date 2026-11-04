import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('El verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('ἔρχομαι, εἰμί, λέγω, ἐσθίω: las raíces que sostienen el NT'),
  body: C(`## Seis verbos que ninguna gramática discute

El Nuevo Testamento se apoya en media docena de verbos. {ἔρχομαι} «ir, venir», {εἰμί} «ser», {γίνομαι} «llegar a ser, acontecer», {λέγω} «decir», {ἀκούω} «oír» y {ἐσθίω} «comer» aparecen en casi todo versículo, y ninguno de ellos tiene conjugación regular.

La dificultad de cada uno es diferente. {εἰμί} no sigue el paradigma de {-ω}: en presente hace {εἰμί}, {εἶ}, {ἐστίν}, {ἐσμέν}, {ἐστέ}, {εἰσίν}, y en imperfecto {ἤμην}, {ἦς}, {ἦν}. Es el verbo que cierra la identidad de las cosas.

{ἔρχομαι} es deponente — solo tiene medio — y cambia de raíz según el tiempo: presente {ἔρχομαι}, imperfecto {ἠρχόμην}, futuro {ἐλεύσομαι}, aoristo {ἦλθον}. Tres raíces en un solo verbo, y el aoristo no comparte ninguna letra con el presente.

{γίνομαι} es el más traicionero: parece {γίνομαι}, es deponente, es raíz de {γένους} y sin embargo el aoristo sale con {ἐγενόμην}. El sentido de «acontecer» emerge del mismo verbo que hace «llegar a ser»: {ἐγένετο} responde tanto a «él llegó a ser» como a «aconteció».

## εἰμί y ἔχω: ser y tener

El griego del NT sigue teniendo {εἰμί} donde el hebreo usa {הָיָה}, y el paralelo es exacto: {ἦν} «era», como en Juan 1:1. Pero donde el hebreo sigue sin verbo «tener», el griego ganó uno: {ἔχω}. El traductor que lee {ἔχω} como «tener» pierde el verbo que dice «estar con», «poseer» y «llevar».

{λέγω} y {ἐσθίω} son la misma historia en grados distintos. Ambos cambian de raíz en los tiempos compuestos: {εἶπον}, {ἐφάγον}, {φάγω}. Lo que el portugués guarda en el mismo infinitivo ({dizer}, {comer}), el griego expresa con tres pedazos que se memorizan separados.

## Aoristo, perfecto y lo que la traducción pierde

{ἐσθίω} en aoristo es {ἐφάγον} — el «comí» acabado. Pero el perfecto lo cambia todo: {ἐδήδοκα} trae el estado de lo que se ha comido. En el diálogo del pan en Juan 6, {ἐσθίει} y los derivados continúan el aspecto imperfectivo.

La distinción entre {ἦλθον} y {ἐλήλυθα} dice lo mismo que «vine» y «he venido»: uno marca el evento, otro el estado actual que de él viene. El lector que solo usa el infinitivo para buscar en el léxico pierde exactamente esa nota.

## En la Biblia

Juan 1:1 hace dos verbos en cinco palabras: {Ἐν ἀρχῇ ἦν ὁ λόγος}. {ἦν} es imperfecto de {εἰμί} — la escena ya dada antes del punto de observación. Y Juan 1:3 cierra con {ἐγένετο}, {γίνομαι} de nuevo en aoristo, para marcar la creación que se hizo. El griego que comienza con {ἦν} termina con {ἐγένετο}: el Verbo ya era, y todo lo demás aconteció.

Marcos 4:39 trae {πεφίμωσ0}, «callate»: es la forma pasiva del aoristo de {φιμόω}, «amordazar». El versículo entero muestra el método: el griego coloca la orden de Jesús en pasivo para decir que el mar no responde a la orden, sino a Cristo.`),
  vocab: [
    V('ἔρχομαι', 'ἔρχομαι', 'ir / venir (pres. deponente)'),
    V('ἦλθον', 'ἔρχομαι', 'vino (aoristo)'),
    V('εἰμί', 'εἰμί', 'ser'),
    V('ἦν', 'εἰμί', 'era'),
    V('γίνομαι', 'γίνομαι', 'llegar a ser'),
    V('ἐγένετο', 'γίνομαι', 'aconteció'),
    V('λέγω', 'λέγω', 'decir'),
    V('εἶπον', 'λέγω', 'dijo (aoristo)'),
    V('ἐσθίω', 'ἐσθίω', 'comer'),
    V('ἐφάγον', 'ἐσθίω', 'comí (aoristo)'),
    V('ἔχω', 'ἔχω', 'tener'),
    V('ἀκούω', 'ἀκούω', 'oír'),
    V('ἤκουσα', 'ἀκούω', 'oí (aoristo)'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('εἶδον', 'βλέπω', 'vi (aoristo)'),
    V('δίδωμι', 'δίδωμι', 'dar'),
    V('ἔδωκα', 'δίδωμι', 'di (aoristo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{εἰμί} no conjuga en {-ω}: presente {εἰμί} — {εἶ} — {ἐστίν}; imperfecto {ἤμην} — {ἦς} — {ἦν}. Es memorizar, no deducir.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Los verbos deponentes no tienen voz activa, pero reciben formas medias: {γίνομαι}, {ἔρχομαι}, {ἀποκρίνομαι}. El aoristo de {ἔρχομαι} es {ἦλθον}, y no deriva del presente.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El aoristo de {ἐσθίω} es {ἐφάγον}, de {λέγω} es {εἶπον}, de {βλέπω} es {εἶδον}: tres raíces separadas, tres notas, un verbo.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{ἦν} y {ἐγένετο} no se intercambian: {ἦν} es escena (Juan 1:1), {ἐγένετο} es lo que aconteció en el punto X (Juan 1:3).',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego del NT no tiene verbo «tener» común; {ἔχω} cubre «tener», «poseer» y «estar con». En Juan 15:4 {ἔχω} dice al pámpano que no da fruto.',
      ),
    },
  ],
  notes: [
    {
      label: T('El aoristo que parece futuro'),
      text: T(
        '{ἐλεύσομαι} es futuro de {ἔρχομαι}, pero el presente {ἔρχομαι} y el aoristo {ἦλθον} no comparten raíz. Quien memoriza solo el infinitivo no reconoce el verbo en el texto.',
      ),
    },
    {
      label: T('El ser que no va como el latín'),
      text: T(
        'El griego dice {ἦν οὖν ψυχή} «era el alma», donde el latín/portugués sufre con {fuit anima}: {ἦν} describe el estado que se agrega a lo histórico. Cuando {ἐγένετο} reemplaza a {ἦν} en el mismo versículo, la cláusula pasa a narrar creación.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T('Jn 1:1 — {ἦν} es imperfecto de {εἰμί}: el Verbo ya era antes del discurso.'),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T('Jn 1:1 — {ἦν} sin artículo defiende un predicado nominal: el Verbo era Dios.'),
    },
    {
      text: 'πάντα δι᾽ αὐτοῦ ἐγένετο',
      gloss: T('Jn 1:3 — {ἐγένετο} de {γίνομαι}: todas las cosas llegaron a ser.'),
    },
    {
      text: 'ἔφαγεν ὁ λαός',
      gloss: T('Ex 16:35 LXX — {ἔφαγεν} es aoristo de {ἐσθίω}: el maná fue comido.'),
    },
    {
      text: 'ἦλθον οὖν μαθηταὶ αὐτοῦ',
      gloss: T('Jn 4:8 — {ἦλθον} es aoristo de {ἔρχομαι}: vinieron.'),
    },
    {
      text: 'οὕτως αἰεὶ λεγόμενα',
      gloss: T('participio medio de {λέγω}: las cosas siempre dichas.'),
    },
    { text: 'ἀκούσῃ ὃν ἐγὼ ἀκούω', gloss: T('futuro activo de {ἀκούω}: oirás lo que yo oigo.') },
    {
      text: 'ἐδήδοκες φάγεσαι',
      gloss: T('perfecto + futuro de {ἐσθίω}: lo que se comió se vuelve la comida futura.'),
    },
    { text: 'ἔδωκεν αὐτοῖς', gloss: T('aoristo de {δίδωμι}: les dio.') },
  ],
  tables: [
    {
      caption: T('El imperfecto de εἰμί — el verbo que no tiene -ω'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Futuro')],
      rows: [
        [T('1s'), T('{εἰμί}'), T('{ἤμην}'), T('{ἔσομαι}')],
        [T('2s'), T('{εἶ}'), T('{ἦς}'), T('{ἔσῃ}')],
        [T('3s'), T('{ἐστί(ν)}'), T('{ἦν}'), T('{ἔσται}')],
        [T('1p'), T('{ἐσμέν}'), T('{ἦμεν}'), T('{ἐσόμεθα}')],
        [T('2p'), T('{ἐστέ}'), T('{ἦτε}'), T('{ἔσεσθε}')],
        [T('3p'), T('{εἰσί(ν)}'), T('{ἦσαν}'), T('{ἔσονται}')],
      ],
    },
    {
      caption: T('Los aoristos fuertes de los deponentes del NT'),
      head: [T('Verbo'), T('Aoristo'), T('Futuro'), T('Observación')],
      rows: [
        [T('{ἔρχομαι}'), T('{ἦλθον}'), T('{ἐλεύσομαι}'), T('raíz nueva')],
        [T('{γίνομαι}'), T('{ἐγενόμην}'), T('{γενήσομαι}'), T('pierde el presente')],
        [
          T('{ἀποκρίνομαι}'),
          T('{ἀπεκρινάμην}'),
          T('{ἀποκριθήσομαι}'),
          T('respuesta a la pregunta'),
        ],
        [T('{φοβέομαι}'), T('{ἐφοβήθην}'), T('{φοβηθήσομαι}'), T('aoristo pasivo común')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Ἐν ἀρχῇ ἦν ὁ λόγος}, ¿cuál es el tiempo y número de {ἦν}?'),
    options: [
      T('Aoristo, 1.ª singular'),
      T('Imperfecto, 3.ª singular'),
      T('Perfecto, 3.ª plural'),
      T('Presente, 3.ª singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "πάντα δι᾽ αὐτοῦ ___" con el aoristo de {γίνομαι} para "aconteció".'),
      answer: 'ἐγένετο',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su aoristo.'),
      pairs: [
        { a: T('{ἔρχομαι}'), b: T('{ἦλθον}') },
        { a: T('{ἐσθίω}'), b: T('{ἐφάγον}') },
        { a: T('{εἰμί}'), b: T('{ἤμην}') },
        { a: T('{γίνομαι}'), b: T('{ἐγενόμην}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el aoristo de {λέγω}?'),
      options: [T('{ἐλέγομεν}'), T('{εἶπον}'), T('{ἐλογήθην}'), T('{λέξω}')],
      answer: 1,
    },
  ],
};
