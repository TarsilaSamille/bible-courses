import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Participio presente'),
  subtitle: T('λύων, λύουσα, λῦον: el verbo declinante'),
  section: T('El verbo'),
  body: C(`## La forma más utilizada del Nuevo Testamento

El participio presente es la forma verbal más frecuente en el Nuevo Testamento después del indicativo: {λέγων}, {πιστεύων}, {ἀκούοντες}, {ὤν}.Utiliza la raíz del presente y marca la acción simultánea con el verbo principal: "decir", "creer", "ser".Quien domina este capítulo lee la mitad de las cláusulas subordinadas del texto.

## Morfología: dos modelos

El participio activo sigue a la tercera declinación en masculino y neutro, la primera en femenino.Raíz {λυοντ-}: nominativo {λύων} (masc.), {λύουσα} (fem.), {λῦον} (neut.);genitivo {λύοντος}, {λυούσης}, {λύοντος};plural {λύοντες}, {λύουσαι}, {λύοντα}.La raíz {-ντ-} se muestra en todos los casos excepto en el nominativo masculino singular - cap.La regla de oro del 13 aplicada a los verbos.

El participio medio es manso: declina como adjetivo 2-1-2 (cap. 4): {λυόμενος, λυομένη, λυόμενον}, genitivo {λυομένου, λυομένης,λυομένου}.Los verbos declarantes lo usan activamente: {ἐρχόμενος} "viniendo", {πορευόμενος} "yendo", {ἀποκρινόμενος} "respondiendo".

## Tres empleos (con ocho usos circunstanciales)

Primero, adjetivo: concuerda con el sustantivo y lo califica: {ὁ λόγος ὁ μένων} "la palabra permanente" (Juan 5:38).Segundo, sustentado con el artículo: {ὁ πιστεύων} "el que cree", {οἱ ἀκούοντες} "los que oyen", {τὰ ὄντα} "las cosas existentes".

En tercer lugar, el circunstancial (adverbial), el más rico de todos.Sin conjunción, el participio comprime una cláusula completa, y el contexto indica cuál: temporal ({πορευόμενοι ἐκήρυσσον} "yendo, predicaron" = "mientras iban"), causal ({εἰδὼς ὅτι} "sabiendo que" = "porque sabía"), concesivo({ὢν υἱός} "siendo Hijo, aún...", Heb 5:8), circunstancia condicional, modal ({χαίροντες} "gozosamente"), final, instrumental y concomitante ({ἦλθεν κηρύσσων} "vino predicando").

## El presente simultáneo

Regla del tiempo relativo: el participio presente es simultáneo con el verbo principal, sea cual sea.{βλέποντες οὐ βλέπουσιν} "viendo, no ven" (Mateo 13:13, presente + presente);{πιστεύων ἔχει} "el que cree, tiene" (Juan 3:36, creer y tener simultáneamente).Para acción previa el griego usa el aoristo (cap. 22): el tiempo elegido por el participio es información, no ornamento.`),
  vocab: [
    V('λύων', 'λύω', 'the one loosing'),
    V('λύουσα', 'λύω', 'she loosing'),
    V('λῦον', 'λύω', 'the thing loosing'),
    V('λύοντος', 'λύω', 'of the one loosing'),
    V('λύοντες', 'λύω', 'those loosing'),
    V('λυόμενος', 'λύω', 'loosing oneself'),
    V('πιστεύων', 'πιστεύω', 'whoever believes'),
    V('ἀκούοντες', 'ἀκούω', 'those who hear'),
    V('λέγων', 'λέγω', 'saying'),
    V('ὤν', 'εἰμί', 'being'),
    V('ὄντος', 'εἰμί', 'of being'),
    V('ἐρχόμενος', 'ἔρχομαι', 'coming'),
    V('μένων', 'μένω', 'abiding'),
    V('κηρύσσων', 'κηρύσσω', 'preaching'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λύοντος" es ¿en qué caso y por qué?'),
    options: [
      T('Genitive (-ντ- stem, 3rd declension)'),
      T('Dative (iota subscript)'),
      T('Accusative plural'),
      T('Feminine nominative'),
    ],
    answer: 0,
    hint: T('La raíz -ντ- se muestra fuera del nominativo — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el nominativo femenino: λύου___ ("ella perdiendo").'),
      answer: 'σα',
      hint: T('1ª declinación femenina: -σα.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἦλθεν κηρύσσων" (Marcos 1:39): el participio es…'),
      options: [
        T('Attendant circumstance ("he came preaching")'),
        T('Genitive absolute'),
        T('Substantivized'),
        T('Object predicate'),
      ],
      answer: 0,
      hint: T('Mismo objeto, acompañamiento simultáneo — regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada formulario con su análisis.'),
      pairs: [
        { a: 'λύοντος', b: 'gen. masc.' },
        { a: 'λύουσα', b: 'nom. fem.' },
        { a: 'λυόμενον', b: 'ac. médio' },
        { a: 'ὄντα', b: 'ac. de εἰμί' },
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
        'Participio presente activo: raíz + -ντ- (3ª declinación masc./neut., 1ª fem.).-ντ- desaparece solo en masc.sg.nominativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Participio medio: domesticado 2-1-2 ({-μενος, -μενη, -μενον}).Los declarantes lo utilizan activamente.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tiempo relativo: presente = simultáneo con el verbo principal, cualquiera que sea su tiempo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Tres empleos: adjetivo, sustantivizado (con artículo) y circunstancial (ocho usos, sin conjunción).',
      ),
    },
    {
      n: '5',
      text: T(
        'El participio concuerda con el propietario de la acción en género, número y caso: la pista sobre su tema.',
      ),
    },
  ],
  notes: [
    {
      label: T('Genitive absolute:'),
      text: T(
        'Si el propietario de la acción del participio NO es el sujeto de la cláusula, viene en genitivo absoluto (la construcción del próximo capítulo).{λύοντος αὐτοῦ} "mientras estaba perdiendo".',
      ),
    },
    {
      label: T('Ubiquitous ὤν:'),
      text: T(
        'El participio de {εἰμί} ({ὤν, οὖσα, ὄν}, gen. {ὄντος}) llena fórmulas como {τὰ ὄντα} "cosas existentes" (Rom 4:17) y {ὁ ὢν} "el que es" (Apocalipsis 1:4).Memoriza todo el paradigma.',
      ),
    },
  ],
  examples: [
    { text: '{ὁ πιστεύων}', gloss: T('whoever believes (substantivized; John 3:16)') },
    { text: '{οἱ ἀκούοντες}', gloss: T('those who hear (substantivized plural)') },
    { text: '{ἦλθεν κηρύσσων}', gloss: T('he came preaching (attendant; Mark 1:39)') },
    { text: '{βλέποντες οὐ βλέπουσιν}', gloss: T('seeing, they do not see (Matt 13:13)') },
    { text: '{πιστεύων ἔχει}', gloss: T('whoever believes has (simultaneous; John 3:36)') },
    { text: '{ὢν υἱός}', gloss: T('being Son (concessive; Heb 5:8)') },
    { text: '{ὁ λόγος ὁ μένων}', gloss: T('the abiding word (adjectival; John 5:38)') },
    { text: '{πορευόμενοι ἐκήρυσσον}', gloss: T('going, they preached (temporal; Mark 16:20)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('saying to them (narrative transition)') },
    { text: '{ἐρχόμενος πρὸς αὐτόν}', gloss: T('coming to him (deponent; John 3:2)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Participio presente activo de λύω'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{λύων}', '{λύουσα}', '{λῦον}'],
        [T('Genitivo'), '{λύοντος}', 'λυούσης', '{λύοντος}'],
        [T('Dativo'), 'λύοντι', 'λυούσῃ', 'λύοντι'],
        [T('Acusativo'), 'λύοντα', 'λύουσαν', '{λῦον}'],
      ],
    },
    {
      caption: T('Tabla 2 — Participio presente en voz media de λύω'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{λυόμενος}', '{λυομένη}', '{λυόμενον}'],
        [T('Genitivo'), 'λυομένου', 'λυομένης', 'λυομένου'],
        [T('Acusativo'), 'λυόμενον', 'λυομένην', '{λυόμενον}'],
      ],
    },
  ],
};
