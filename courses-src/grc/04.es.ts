import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('2-1-2 Adjetivos'),
  subtitle: T('ἀγαθός, -ή, -όν: acuerdo y posición'),
  section: T('El sustantivo'),
  body: C(`## Un adjetivo, tres declinaciones

Los adjetivos más frecuentes en el Nuevo Testamento siguen el patrón 2-1-2: el masculino usa terminaciones de 2da declinación ({ἀγαθός}, como {λόγος}), el femenino usa terminaciones de 1ra declinación ({ἀγαθή}, como {ἀλήθεια}), y el neutro regresa a la2º ({ἀγαθόν}, como {ἔργον}).El diccionario enumera el trío completo ({ἀγαθός, -ή, -όν}) y con él rechazas todas las formas.

El femenino sigue la regla alfa del capítulo 2: después de ρ, ε o ι termina en {-α} ({δίκαιος, -α, -ον}; {μικρός, -ά, -όν});de lo contrario en {-η} ({ἀγαθός, -ή, -όν}).Nota: {ἅγιος} tiene su raíz terminada en iota, por lo que el femenino es {ἁγία}, con alfa puro.

## Acuerdo total

El adjetivo concuerda con su sustantivo en género, número Y caso: las tres categorías a la vez.{ὁ ἀγαθὸς λόγος} (masc. sg. nom.), {ἡ ἁγία γραφή} (fem. sg. nom.), {τὰ καλὰ ἔργα} (neut. pl. nom./acc.).Falta alguna de las tres rupturas de acuerdo, y el oído griego lo capta al instante.

En la lectura, la concordancia es tu aliada: frente a un adjetivo, busca el sustantivo del mismo género, número y caso; casi siempre el vecino más cercano con terminaciones coincidentes.En las largas frases de Paul, este emparejamiento resuelve la mitad de la sintaxis.

## Atributivo, predicado, sustantivo

Todo lo que dijo el capítulo 1 sobre el artículo vale para los adjetivos: con artículo repetido, el adjetivo califica ({ὁ λόγος ὁ ἀγαθός} "la buena palabra");sin artículo al lado de un sustantivo articulado, predica ({ὁ λόγος ἀγαθός} "la palabra es buena").El griego elimina el verbo "ser" en presente: la posición hace el trabajo.

Y sin sustantivo alguno, el adjetivo más artículo se convierte en sustantivo: {οἱ ἀγαθοί} "el bueno", {τὸ ἀγαθόν} "lo bueno (cosa)", {οἱ πτωχοί} "el pobre" (Mateo 5:3).Este uso sustantivo es sumamente frecuente: {ὁ δίκαιος} "el justo", {τὰ κρυπτά} "las cosas ocultas".Siempre que veas artículo + adjetivo sin ningún sustantivo cerca, tradúcelo como sustantivo.`),
  vocab: [
    V('ἀγαθός', 'ἀγαθός', 'good'),
    V('ἀγαθή', 'ἀγαθός', 'good (fem.)'),
    V('ἀγαθόν', 'ἀγαθός', 'good (neut.)'),
    V('ἅγιος', 'ἅγιος', 'holy (masc.)'),
    V('ἁγία', 'ἅγιος', 'holy (fem.)'),
    V('δίκαιος', 'δίκαιος', 'justo, justo'),
    V('δικαία', 'δίκαιος', 'sólo (fem.)'),
    V('καλός', 'καλός', 'beautiful, good'),
    V('μικρός', 'μικρός', 'small'),
    V('πονηρός', 'πονηρός', 'evil, wicked'),
    V('νεκρός', 'νεκρός', 'dead'),
    V('πιστός', 'πιστός', 'fiel'),
    V('μακάριος', 'μακάριος', 'blessed'),
    V('ἄλλος', 'ἄλλος', 'otro, otro'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma femenina de "ἀγαθός" (bueno)?'),
    options: [T('ἀγαθή'), T('ἀγαθά'), T('ἀγαθόν'), T('ἀγαθοῦ')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('"ὁ δοῦλος ὁ ἀγαθός" significa…'),
      options: [
        T('El sirviente es bueno (predicado)'),
        T('El buen servidor (atributivo)'),
        T('Del buen siervo (genitivo)'),
        T('Oh buen siervo (vocativo)'),
      ],
      answer: 1,
      hint: T('El artículo repetido antes del adjetivo — regla §4.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Completa el dativo femenino singular: ___ γραφῇ ("a la Sagrada Escritura", de ἅγιος).',
      ),
      answer: 'ἁγίᾳ',
      hint: T('Dativo singular de 1ª declinación: subíndice iota.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su género.'),
      pairs: [
        { a: 'ἀγαθοί', b: 'masc. pl.' },
        { a: 'ἀγαθαί', b: 'fem. pl.' },
        { a: 'ἀγαθά', b: 'neut. pl.' },
        { a: 'δικαίαν', b: 'fem. sg. ac.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Adjetivo 2-1-2: masculino = 2da declinación, femenino = 1ra, neutro = 2da.El diccionario da el trío ({καλός, -ή, -όν}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Femenino en -α después de ρ, ε, ι ({δικαία}, {μικρά}, {ἁγία});en -η en otros lugares ({ἀγαθή}, {καλή}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Triple concordancia: el adjetivo coincide con su sustantivo en género, número y caso, sin excepción.',
      ),
    },
    {
      n: '4',
      text: T(
        'Artículo repetido = atributivo;artículo solo sobre el sustantivo = predicado (sin verbo "to be" en presente).',
      ),
    },
    {
      n: '5',
      text: T(
        'Artículo + adjetivo sin sustantivo = sustantivo: {οἱ νεκροί} "los muertos", {τὸ λοιπόν} "en cuanto a los demás".',
      ),
    },
  ],
  notes: [
    {
      label: T('Trampa:'),
      text: T(
        '{πονηρός} es regular, pero {πολύς, πολλή, πολύ} es irregular y regresa en el cap.16. Y {μέγας, μεγάλη, μέγα} también escapa al 2-1-2, salvo ambos para el capítulo de comparativos.',
      ),
    },
    {
      label: T('En el texto:'),
      text: T(
        '{ἅγιος} aparece sustantivo en {οἱ ἅγιοι} "los santos", la designación habitual de Pablo para los cristianos (Rom 1:7; 1 Cor 1:2).',
      ),
    },
  ],
  examples: [
    { text: '{ἅγιον ὄνομα}', gloss: T('santo nombre (sg. neutro)') },
    { text: '{ἡ ἁγία γραφή}', gloss: T('la sagrada Escritura (fem. con alfa puro)') },
    { text: '{ὁ δοῦλος ὁ ἀγαθός}', gloss: T('the good servant (attributive; Matt 25:21)') },
    { text: '{πιστὸς ὁ λόγος}', gloss: T('fiel es la palabra (predicado; 1 Tim 1:15)') },
    { text: '{μακάριοι οἱ πτωχοί}', gloss: T('blessed are the poor (substantivized adjective)') },
    { text: '{τὰ κρυπτὰ φανερά}', gloss: T('las cosas ocultas [son] manifiestas (Marcos 4:22)') },
    { text: '{ἀγαθὴ συνείδησις}', gloss: T('buena conciencia (fem. sg.; 1 Tim 1:5)') },
    { text: '{δικαίᾳ κρίσει}', gloss: T('con juicio justo (fem. dativo; Juan 7:24)') },
    { text: '{πονηρὰ γενεά}', gloss: T('generación malvada (fem.; Mateo 12:39)') },
    { text: '{καλὸν ἔργον}', gloss: T('buena acción (neutro; Mateo 26:10)') },
  ],
  tables: [
    {
      caption: T('Table 1 — ἀγαθός, singular'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ἀγαθός}', '{ἀγαθή}', '{ἀγαθόν}'],
        [T('Genitivo'), 'ἀγαθοῦ', 'ἀγαθῆς', 'ἀγαθοῦ'],
        [T('Dativo'), 'ἀγαθῷ', 'ἀγαθῇ', 'ἀγαθῷ'],
        [T('Acusativo'), 'ἀγαθόν', 'ἀγαθήν', '{ἀγαθόν}'],
      ],
    },
    {
      caption: T('Tabla 2 — ἀγαθός, plural'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ἀγαθοί}', '{ἀγαθαί}', '{ἀγαθά}'],
        [T('Genitivo'), 'ἀγαθῶν', 'ἀγαθῶν', 'ἀγαθῶν'],
        [T('Dativo'), 'ἀγαθοῖς', 'ἀγαθαῖς', 'ἀγαθοῖς'],
        [T('Acusativo'), 'ἀγαθούς', 'ἀγαθάς', '{ἀγαθά}'],
      ],
    },
    {
      caption: T('Table 3 — Feminine in -α: δικαία'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{δικαία}', '{δίκαιαι}'],
        [T('Genitivo'), 'δικαίας', 'δικαίων'],
        [T('Dativo'), 'δικαίᾳ', 'δικαίαις'],
        [T('Acusativo'), 'δικαίαν', 'δικαίας'],
      ],
    },
  ],
};
