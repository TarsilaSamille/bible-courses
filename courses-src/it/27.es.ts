import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Gerundio, participio y absoluto'),
  subtitle: T('parlando; avendo detto; detto questo'),
  section: T('Numerales, conjunciones y el gerundio'),
  body: C(`## El gerundio: {-ando} y {-endo}

El gerundio sale del infinitivo borrando la terminación: {-are} da **-ando** ({parlare} → {parlando}, {camminare} → {camminando}), {-ere} da **-endo** ({leggere} → {leggendo}), {-ire} también da {-endo} ({finire} → {finendo}, {dormire} → {dormendo}). No hay regla para los irregulares, y son pocos: {andare} → {andando}, {fare} → {facendo}, {dire} → {dicendo}, {bere} → {bevendo}.

Es el gerundio lo que hace lo que el portugués hace con el infinitivo, y la correspondencia es casi exacta: *stare + gerundio* es el equivalente de «estar a» más infinitivo, y esa es la construcción que traduce cada verbo portugués de infinitivo. Lo que el italiano no tiene es la preposición: el infinitivo va desnudo.

## El participio tiene dos formas: congiunto y absoluto

El participio pasado regular es {-ato}, {-uto} o {-ito} ({amato}, {avuto}, {finito}), más un grupo pequeño e inevitable: {scritto}, {letto}, {fatto}, {visto}, {detto}, {messo}, {aperto}, {tenuto}. Aparece en dos formas.

**Congiunto** es el gerundio del auxiliar {avere}: {avendo} detto, {avendo} scritto, {avendo} mangiato. Marca una acción anterior y obliga a que los sujetos coincidan: «{Avendo visto} i magi, {partirono}» — quien vio es quien se fue.

**Absoluto** es el participio solo, sin auxiliar: {detto}, {scritto}, {mangiato}. No tiene tiempo ni sujeto; funciona como un adverbio corto que resume una acción anterior.

## El absoluto: cuando los sujetos no son el mismo

Aquí está la parte que rompe la traducción. El participio absoluto puede introducir un sujeto **distinto** del sujeto principal, y nada en el italiano avisa de que hubo cambio: «{Detto questo}, {se ne andò}» — esto se dijo, y él se fue. Quien tradujo {detto questo} por «diciendo esto» hizo un gerundio y atribuyó el habla al sujeto principal, que puede no ser ni quien habló.

Lo mismo vale para un congiunto con sujeto cambiado, que aparece en oraciones más largas: «{Avuta} la notte, {si misero} in cammino», «habiendo pasado la noche, se pusieron en camino». Fíjate en que el participio concuerda con el sujeto del absoluto: {avuta} la notte, {partirono} i magi.

Y por eso la forma más común en la Biblia es casi siempre impersonal: {si compì}, {si adempì}, {fu scritto}, {fu crocifisso}. Son las perifrasis de {essere} más el participio, y la frase queda sin sujeto nombrado.

## En la Biblia

Jn 19:36 es un ejemplo limpio: ««{Si compì} dunque questa parola, e {si adempì} la Scrittura, dicendo: «Non gli spezzarono le gambe»»». El primer verbo es impersonal: {compiersi}, «cumplirse». El {dunque} liga el versículo con lo que venía antes. Y el {dicendo} no es un gerundio de acción: es la fórmula que introduce una cita, «diciendo», y lo que sigue es habla de otro, no de quien habla.

Fíjate en el contraste con el portugués: «cumpriu-se esta palavra» lleva un sujeto a cuestas, el propio verbo. El italiano prescinde de él.

## Criterio de lectura

Cuando veas un participio sin auxiliar, pregunta quién es el sujeto del participio: si es el mismo del verbo principal, tradúcelo como una acción anterior; si es otro, mantén los dos sujetos separados. Y cuando veas {sto per}, {ho finito di}, {devo} o {voglio} seguido de infinitivo, recuerda que no hay ninguna preposición que añadir.`),
  vocab: [
    V('parlando', 'parlare', 'hablando'),
    V('leggendo', 'leggere', 'leyendo'),
    V('finendo', 'finire', 'terminando'),
    V('facendo', 'fare', 'haciendo'),
    V('dicendo', 'dire', 'diciendo'),
    V('detto', 'dire', 'dicho'),
    V('scritto', 'scrivere', 'escrito'),
    V('fatto', 'fare', 'hecho'),
    V('visto', 'vedere', 'visto'),
    V('avendo', 'avere', 'teniendo'),
    V('avendo detto', 'dire', 'teniendo dicho'),
    V('sto per', 'stare', 'estar a punto de'),
    V('ho finito di', 'finire', 'acabar de'),
    V('devo', 'dovere', 'deber'),
    V('voglio', 'volere', 'querer'),
    V('si compì', 'compiere', 'se cumplió'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «habiendo leído el libro»?'),
    options: [
      T('Avendo letto il libro'),
      T('Avendo leggendo il libro'),
      T('Leggendo il libro'),
      T('Avendo lett il libro'),
    ],
    answer: 0,
    hint: T('Congiunto = avere + gerundio + participio.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En «detto questo, se ne andò», ¿quién dijo esto?'),
      options: [
        T('Necesariamente quien se fue'),
        T('Puede ser otra persona'),
        T('Nadie: el participio es impersonal'),
        T('El lector del texto'),
      ],
      answer: 1,
      hint: T('En el absoluto los sujetos pueden ser distintos.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el gerundio: fare → ___'),
      answer: 'facendo',
      hint: T('Irregular.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: ho finito di ___ (acabar de hablar)'),
      answer: 'parlare',
      hint: T('La preposición di se queda: di + infinitivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El gerundio borra la terminación del infinitivo: -are pasa a -ando, -ere e -ire pasan a -endo.',
      ),
    },
    {
      n: '2',
      text: T(
        'El congiunto es avere + gerundio + participio: avendo detto. El absoluto es el participio solo: detto.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el absoluto el sujeto del participio puede ser distinto del sujeto del verbo principal: detto questo, se ne andò.',
      ),
    },
    {
      n: '4',
      text: T('El participio del absoluto concuerda con su propio sujeto: avuta la notte.'),
    },
    {
      n: '5',
      text: T(
        'El italiano usa el infinitivo sin preposición; esta aparece solo cuando otro verbo lo rige: ho finito di parlare.',
      ),
    },
  ],
  notes: [
    {
      label: T('La preposición que inventa el portugués'),
      text: T(
        'En portugués se dice «vou falar», «preciso falar», «começo a falar», con el infinitivo pegado al verbo conjugado. En italiano el infinitivo va desnudo: «parlo», «devo parlare». La preposición aparece solo cuando otro verbo lo rige: «ho finito di parlare», «voglio mangiare», «non c’è niente che non farebbe».',
      ),
    },
    {
      label: T('Perífrasis en el imperativo'),
      text: T(
        '«Voglio + infinitivo» es la manera más común de pedir en italiano: «voglio parlare con te», «voglio vedere il libro». En perifrasis como «sto per partire» el italiano deja claro que todavía no se ha partido, al contrario del portugués «vou partir», que puede ser una decisión ya tomada o un futuro.',
      ),
    },
  ],
  examples: [
    { text: 'Sto leggendo il libro.', gloss: T('Estoy leyendo el libro.') },
    { text: 'Sto per partire.', gloss: T('Estoy a punto de salir.') },
    { text: 'Ho finito di mangiare.', gloss: T('Acabo de comer.') },
    { text: 'Devo parlare con te.', gloss: T('Tengo que hablar contigo.') },
    { text: 'Voglio vedere il libro.', gloss: T('Quiero ver el libro.') },
    { text: 'Avendo visto i magi, partirono.', gloss: T('Habiendo visto a los magos, partieron.') },
    { text: 'Detto questo, se ne andò.', gloss: T('Dicho esto, se fue.') },
    { text: 'Entrati, i discepoli.', gloss: T('Habiendo entrado, los discípulos.') },
    { text: 'Si compì dunque questa parola.', gloss: T('Se cumplió pues esta palabra.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('El Evangelio fue escrito por Juan.') },
  ],
  tables: [
    {
      caption: T('Infinitivo e gerundio'),
      head: ['Infinitivo', 'Gerundio'],
      rows: [
        ['parlare', 'parlando'],
        ['camminare', 'camminando'],
        ['leggere', 'leggendo'],
        ['finire', 'finendo'],
        ['dormire', 'dormendo'],
        ['andare', 'andando'],
        ['fare', 'facendo'],
        ['dire', 'dicendo'],
        ['bere', 'bevendo'],
        ['potere', 'potendo'],
      ],
    },
    {
      caption: T('Participio: le due forme'),
      head: ['Tempo', 'Assoluto', 'Congiunto'],
      rows: [
        ['passato, masc. sing.', 'detto', 'avendo detto'],
        ['passato, fem. sing.', 'partita', 'avendo partita'],
        ['passato, masc. plur.', 'partiti', 'avendo partiti'],
        ['regolare, masc. sing.', 'mangiato', 'avendo mangiato'],
        ['irregolare, masc. sing.', 'scritto', 'avendo scritto'],
      ],
    },
    {
      caption: T('Perifrasi verbali'),
      head: ['Perifrasi', 'Glossa'],
      rows: [
        ['sto + gerundio', 'stare a'],
        ['sto per + infinito', 'stare per punto de'],
        ['ho finito di + infinito', 'acabar de'],
        ['devo + infinito', 'dover'],
        ['voglio + infinito', 'querer'],
        ['mi piacerebbe + infinito', 'gustaría de'],
        ['vado + gerundio', 'ir haciendo'],
      ],
    },
  ],
};
