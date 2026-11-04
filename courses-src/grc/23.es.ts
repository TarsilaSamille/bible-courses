import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Participios aoristo y perfecto'),
  subtitle: T('λύσας, λυθείς, λελυκώς: el pasado que lo acompaña'),
  section: T('El verbo'),
  body: C(`## El aoristo anterior

Si el participio presente es simultáneo (cap. 21), el participio aoristo es anterior: su acción ocurrió antes que la principal.{λαβὼν ἄρτον εὐλόγησεν} "tomando pan, bendijo" (Mateo 26:26): primero tomó, luego bendijo.{ἀκούσας ἐθαύμασεν} "al oírlo, se maravilló" (Mateo 8:10).{ἰδὼν ἐπίστευσεν} "habiendo visto, creyó" (Juan 20:8).

Esta prioridad organiza narraciones completas en cadenas: los participios aoristos se apilan en el fondo y el verbo principal activa el evento - {ἐλθὼν προσκύνησεν} "viniendo, adoró" (Mateo 8:2), {ἀναστὰςπεριεπάτει} "levantándose, caminó" (Marcos 2:12).Leer esas cadenas es leer a Mark a velocidad real.

## formas aoristo

Activo (raíz aoristo + -ντ-): {λύσας} (masc.), {λύσασα} (fem.), {λῦσαν} (neut.);genitivo {λύσαντος}.El segundo aoristo sigue el mismo molde con su propia raíz: {λιπών, λιποῦσα, λιπόν}, genitivo {λιπόντος};{ἰδών, ἰδοῦσα, ἰδόν};{λαβών, λαβοῦσα, λαβόν}.

Medio: {λυσάμενος, -η, -ον} (domesticado 2-1-2).Pasiva: {λυθείς, λυθεῖσα, λυθέν}, genitivo {λυθέντος} - 3.ª declinación como la activa.{ἀποκριθείς} "habiendo respondido" abre discursos ({ἀποκριθεὶς εἶπεν} "respondiendo, dijo", decenas de veces).

## El estado perfecto

El participio perfecto pinta los estados resultantes: {λελυκώς, λελυκυῖα, λελυκός}, genitivo {λελυκότος} — "habiendo desatado (y permanece en pie)".{ἑστώς} "de pie" (Hechos 7:55, Esteban ve a Jesús {ἑστῶτα}), {γεγραμμένον} "escrito" (sustanciado neutro), {πεπληρωμένη} "completo" (en el medio:{πεπληρωμένη χάριτος} "llena eres de gracia", Lucas 1:28).

El perfecto medio pasivo declina 2-1-2: {λελυμένος, -η, -ον}.¿Y el futuro?El participio futuro ({λύσων} "para soltar") es extremadamente raro en el Nuevo Testamento: reconoce la forma ({-σων}) y sigue adelante.

## Cadenas y fórmulas

Tres fórmulas narrativas son oro: {ἀποκριθεὶς εἶπεν} "respondiendo, dijo";{ἰδὼν ἐπίστευσεν} "habiendo visto, creyó";{λαβὼν εὐχαριστήσας ἔκλασεν} "tomando, dando gracias, rompió" (Marcos 14:22, triple cadena).El aoristo se acumula, el presente acompaña, el verbo principal resuelve: ese es el ritmo narrativo griego.`),
  vocab: [
    V('λύσας', 'λύω', 'having loosed'),
    V('λύσαντος', 'λύω', 'of having loosed'),
    V('λιπών', 'λείπω', 'having left'),
    V('ἰδών', 'ὁράω', 'having seen'),
    V('λαβών', 'λαμβάνω', 'having taken'),
    V('ἀκούσας', 'ἀκούω', 'having heard'),
    V('ἐλθών', 'ἔρχομαι', 'having come'),
    V('ἀποκριθείς', 'ἀποκρίνομαι', 'having answered'),
    V('λυθείς', 'λύω', 'having been loosed'),
    V('λυθέντος', 'λύω', 'of having been loosed'),
    V('λελυκώς', 'λύω', 'having loosed (perf.)'),
    V('ἑστώς', 'ἵστημι', 'standing'),
    V('ἀναστάς', 'ἀνίστημι', 'having risen'),
    V('πεπληρωμένη', 'πληρόω', 'full'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λαβὼν ἄρτον εὐλόγησεν" (Mateo 26:26): el orden de los eventos es…'),
    options: [
      T('He took first, blessed after (priority)'),
      T('He blessed while taking (simultaneous)'),
      T('He will take after blessing (later)'),
      T('The actions are identical'),
    ],
    answer: 0,
    hint: T('Participio aoristo = previo – regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completar el genitivo: λύσαν___ ("de haber desatado").'),
      answer: 'τος',
      hint: T('-ντ- raíz: λύσαν-τος.'),
    },
    {
      kind: 'choose',
      prompt: T('"λυθείς" es un… participio'),
      options: [
        T('Aorist passive ("having been loosed")'),
        T('Present active'),
        T('Active perfect'),
        T('Middle future'),
      ],
      answer: 0,
      hint: T('-θεντ- raíz: pasiva — regla §2.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada participio con su tiempo.'),
      pairs: [
        { a: 'λύων', b: 'presente' },
        { a: 'λύσας', b: 'aoristo' },
        { a: 'λελυκώς', b: 'perfeito' },
        { a: 'λυθείς', b: 'aoristo passivo' },
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
        'Participio aoristo = acción anterior a la principal.Cadenas aoristo + verbo principal = esqueleto narrativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Activo en -ντ- (λύσας/λύσαντος, λιπών/λιπόντος);manso medio 2-1-2 (λυσάμενος);pasivo en -ντ- en la raíz -θεντ- (λυθείς/λυθέντος).',
      ),
    },
    {
      n: '3',
      text: T(
        'Participio perfecto = estado resultante ({ἑστώς} "de pie", {γεγραμμένον} "escrito").',
      ),
    },
    {
      n: '4',
      text: T(
        'Las fórmulas narrativas ({ἀποκριθεὶς εἶπεν}) se leen como bloques, sin analizar cada pieza.',
      ),
    },
  ],
  notes: [
    {
      label: T('Aorist vs present:'),
      text: T(
        '{ἀκούσας} (antes: escuchó, luego actuó) vs {ἀκούων} (simultáneo: escuchando, al mismo tiempo).Cambiar uno por otro cambia la cronología: el autor eligió a propósito.',
      ),
    },
    {
      label: T('Participle genitives:'),
      text: T(
        '{λύσαντος}, {λυθέντος}, {λελυκότος}, {λιπόντος}: el genitivo revela la raíz -ντ- y prepara el cap.genitivo absoluto del 23.Memoriza uno de cada uno.',
      ),
    },
  ],
  examples: [
    { text: '{λαβὼν ἄρτον εὐλόγησεν}', gloss: T('having taken bread, he blessed (Matt 26:26)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('having heard, he marveled (Matt 8:10)') },
    { text: '{ἰδὼν ἐπίστευσεν}', gloss: T('having seen, he believed (John 20:8)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('answering, he said (formula)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('having come, he worshiped (Matt 8:2)') },
    { text: '{ἀναστὰς περιεπάτει}', gloss: T('rising, he walked (Mark 2:12)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('standing at the right (Acts 7:55)') },
    { text: '{πεπληρωμένη χάριτος}', gloss: T('full of grace (Luke 1:28)') },
    {
      text: '{λαβὼν εὐχαριστήσας ἔκλασεν}',
      gloss: T('taking, thanking, he broke (triple chain; Mark 14:22)'),
    },
    { text: '{λυθεὶς ἀπῆλθεν}', gloss: T('having been loosed, he departed (prior passive)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Participio aoristo activo (λύσας y λιπών)'),
      head: [
        T('Caso'),
        { 0: 'λ', 1: 'ύ', 2: 'σ', 3: 'α', 4: 'ς', 5: ' ', 6: '(', 7: '1', 8: 'º', 9: ')' },
        { 0: 'λ', 1: 'ι', 2: 'π', 3: 'ώ', 4: 'ν', 5: ' ', 6: '(', 7: '2', 8: 'º', 9: ')' },
      ],
      rows: [
        ['Nom. masc.', '{λύσας}', '{λιπών}'],
        ['Nom. fem.', '{λύσασα}', 'λιποῦσα'],
        ['Nom. neut.', '{λῦσαν}', 'λιπόν'],
        ['Gen. masc.', '{λύσαντος}', 'λιπόντος'],
        ['Gen. fem.', 'λυσάσης', 'λιπούσης'],
      ],
    },
    {
      caption: T('Tabla 2 — Participios aoristo pasivo y perfecto'),
      head: [
        T('Caso'),
        {
          0: 'P',
          1: 'a',
          2: 's',
          3: 's',
          4: 'i',
          5: 'v',
          6: 'o',
          7: ' ',
          8: '(',
          9: 'λ',
          10: 'υ',
          11: 'θ',
          12: 'ε',
          13: 'ί',
          14: 'ς',
          15: ')',
        },
        {
          0: 'P',
          1: 'e',
          2: 'r',
          3: 'f',
          4: 'e',
          5: 'i',
          6: 't',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'λ',
          11: 'ε',
          12: 'λ',
          13: 'υ',
          14: 'κ',
          15: 'ώ',
          16: 'ς',
          17: ')',
        },
      ],
      rows: [
        ['Nom. masc.', '{λυθείς}', '{λελυκώς}'],
        ['Nom. fem.', '{λυθεῖσα}', '{λελυκυῖα}'],
        ['Nom. neut.', '{λυθέν}', '{λελυκός}'],
        ['Gen. masc.', '{λυθέντος}', '{λελυκότος}'],
      ],
    },
  ],
};
