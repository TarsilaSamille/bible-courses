import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Imperative'),
  subtitle: T('λῦε vs λῦσον: proceso o acto de mando'),
  section: T('El verbo'),
  body: C(`## Comando con aspecto

El imperativo griego ordena, exhorta, suplica e invita y, como todo verbo griego, conlleva aspecto.El imperativo presente ordena continuar o mantener un proceso ({μετανοεῖτε} "vivir en arrepentimiento", {προσεύχεσθε} "vivir orando");el imperativo aoristo ordena ejecutar un acto ({ἔγειρε} "¡levántate!", {πίστευσον} "¡cree!", Hechos 16:31).El famoso {μετανοεῖτε} de Marcos 1:15 se encuentra en el presente: "vive en arrepentimiento", no "arrepiéntete una vez".

En la práctica de la lectura, las traducciones rara vez marcan la diferencia: el estudiante debe percibirla.Frente a dos imperativos, pregunte: ¿quiere el autor un estado permanente (presente) o una decisión puntual (aoristo)?

## Las personas imperativas

El imperativo tiene 2ª y 3ª personas (uno no se manda a sí mismo en singular).El presente 2do sargento activo.es la forma más corta del verbo: {λῦε} (raíz + ε, sin terminación).El tercer sargento.toma {-τω}: {λυέτω} "¡déjalo suelto!", {λυσάτω} en el aoristo.El 2do pl.coincide con el indicativo ({λύετε}, {λύσατε}) — sólo el contexto y la puntuación revelan el comando.El 3er pl.termina en {-ντων}: {λυόντων}, {λυσάντων}.

En la voz media, el segundo sg.termina en {-ου} ({λύου}, {φοβοῦ}), una forma que regresa en los verbos deponentes del cap.11.

## Prohibir en griego

Negar el imperativo tiene su propia regla, constantemente probada y constantemente en el texto.Para prohibir un acto puntual: {μή} + aoristo subjuntivo ({μὴ φοβηθῇς} "no temáis", Mateo 1:20; {μὴ κρίνετε} "no juzguéis", Mateo 7:1 — aquí presente, "no viváis juzgando").Prohibir continuar algo: {μή} + presente imperativo ({μὴ μεριμνᾶτε} "no estéis ansiosos", Mateo 6:31).

El par resume la lógica del aspecto incluso en la negación: dejar de hacer (presente) versus ni siquiera comenzar / contarlo como deshecho (aoristo).{μὴ θησαυρίζετε} "no acumular" (hábito de abandonar) vs {μὴ φοβηθῇς} "ni siquiera temas" (actuar para evitar).`),
  vocab: [
    V('λῦε', 'λύω', 'Â¡perder!(pres.)'),
    V('λῦσον', 'λύω', 'Â¡perder!(aor.)'),
    V('λύετε', 'λύω', 'Â¡perder!(pl.)'),
    V('λύσατε', 'λύω', 'Â¡perder!(pl., aor.)'),
    V('λυέτω', 'λύω', '¡déjalo suelto!'),
    V('μετανοεῖτε', 'μετανοέω', 'arrepentirse'),
    V('πίστευσον', 'πιστεύω', 'Â¡creer!'),
    V('ἔγειρε', 'ἐγείρω', 'Â¡elevar!'),
    V('μή', 'μή', 'no (prohibición)'),
    V('φοβοῦ', 'φοβέομαι', '¡miedo!¡No temas!'),
    V('αἰτεῖτε', 'αἰτέω', 'Â¡preguntar!'),
    V('γενηθήτω', 'γίνομαι', 'Â¡Que se haga!'),
    V('ἐλθέτω', 'ἔρχομαι', 'Â¡Que venga!'),
    V('ὕπαγε', 'ὑπάγω', 'Â¡ir!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"μετανοεῖτε" (Marcos 1:15) está en el presente porque...'),
    options: [
      T('El arrepentimiento es un estado a mantener, no un solo acto.'),
      T('The aorist does not exist for this verb'),
      T('Es una orden dada sólo a los apóstoles.'),
      T('Presente y aoristo son intercambiables.'),
    ],
    answer: 0,
    hint: T('Presente imperativo = proceso a mantener - regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el aoristo 2do singular: λῦ___ ("¡suelto!", decisivamente).'),
      answer: 'σον',
      hint: T('1er aoristo: raíz + σ + ον.'),
    },
    {
      kind: 'choose',
      prompt: T('"μὴ κρίνετε" (Mateo 7:1) niega con el presente porque…'),
      options: [
        T('Prohíbe abandonar el hábito ("no vivas juzgando")'),
        T('El aoristo estaría gramaticalmente equivocado.'),
        T('Es una excepción inexplicable.'),
        T('μή solo combina con el presente'),
      ],
      answer: 0,
      hint: T('μή + presente = dejar de hacer — regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada formulario con su descripción.'),
      pairs: [
        { a: 'λῦε', b: '2ª sg. pres.' },
        { a: 'λῦσον', b: '2ª sg. aor.' },
        { a: 'λυέτω', b: '3ª sg. pres.' },
        { a: 'λύου', b: '2ª sg. média' },
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
        'Presente imperativo = proceso a mantener;Imperativo aoristo = actuar para ejecutar.La elección tensa es el mensaje.',
      ),
    },
    {
      n: '2',
      text: T(
        'Presente 2do sg.es la forma más corta ({λῦε}, {βλέπε});3er grado.toma -τω;3er pl.toma -ντων.',
      ),
    },
    {
      n: '3',
      text: T(
        'Imperativo 2º pl.= indicativo 2º pl.en forma ({λύετε}).Sólo el contexto revela el comando.',
      ),
    },
    {
      n: '4',
      text: T(
        'Prohibición: {μή} + aoristo subjuntivo (acto) o {μή} + presente imperativo (hábito de soltar).',
      ),
    },
    {
      n: '5',
      text: T(
        'En el Nuevo Testamento, el imperativo de tercera persona se traduce como "déjale...": {ἐλθέτω} "¡ven!", {γενηθήτω} "¡hágase!".',
      ),
    },
  ],
  notes: [
    {
      label: T('Sutileza:'),
      text: T(
        '{ἄφες} (Mateo 8:22) y {ἄφίημι} (Mateo 19:14, "que vengan a mí") son el mismo verbo ({ἀφίημι}, cap. 12) en diferentes tiempos: acto puntual versus actitud permanente.El aspecto decide la traducción.',
      ),
    },
    {
      label: T('Cortesía:'),
      text: T(
        'El imperativo griego no es grosero per se: las peticiones a Dios ({δός}, "danos", Mateo 6:11) y las súplicas ({ἐλέησόν με}, "ten piedad de mí") usan el mismo modo que las órdenes.El tono proviene del contexto, no de la forma.',
      ),
    },
  ],
  examples: [
    { text: '{μετανοεῖτε}', gloss: T('arrepentirse (presente: estado; Marcos 1:15)') },
    { text: '{πίστευσον}', gloss: T('¡creer!(aoristo: decisión; Hechos 16:31)') },
    { text: '{ἔγειρε καὶ περιπάτει}', gloss: T('¡Levántate y camina!(Mateo 9:5)') },
    { text: '{μὴ φοβοῦ}', gloss: T('Â¡no temas!(Lucas 1:30)') },
    { text: '{μὴ κρίνετε}', gloss: T('no juzgues (presente: hábito; Mateo 7:1)') },
    { text: '{αἰτεῖτε καὶ δοθήσεται}', gloss: T('Pidan y se les dará (Mateo 7:7)') },
    { text: '{γενηθήτω τὸ θέλημά σου}', gloss: T('que se haga tu voluntad (3er sg.; Mateo 6:10)') },
    { text: '{ἐλθέτω ἡ βασιλεία σου}', gloss: T('que venga tu reino (Mateo 6:10)') },
    { text: '{ὕπαγε εἰς εἰρήνην}', gloss: T('vete en paz (Marcos 5:34)') },
    { text: '{ἄφες τοὺς νεκρούς}', gloss: T('dejar a los muertos (aoristo: acto; Mateo 8:22)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente imperativo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['2ª sg.', '{λῦε}', 'liberta! (continua)'],
        ['3ª sg.', '{λυέτω}', 'liberte ele!'],
        ['2ª pl.', '{λύετε}', 'libertai!'],
        ['3ª pl.', '{λυόντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Tabla 2 — Imperativo aoristo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['2ª sg.', '{λῦσον}', 'liberta! (de uma vez)'],
        ['3ª sg.', '{λυσάτω}', 'liberte ele!'],
        ['2ª pl.', '{λύσατε}', 'libertai!'],
        ['3ª pl.', '{λυσάντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Tabla 3 — Presente imperativo medio'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['2ª sg.', '{λύου}', 'liberta-te!'],
        ['3ª sg.', '{λυέσθω}', 'liberte-se ele!'],
        ['2ª pl.', '{λύεσθε}', 'libertai-vos!'],
      ],
    },
  ],
};
