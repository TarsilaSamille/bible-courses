import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Comparativos y lectura: Marcos 1'),
  subtitle: T('μείζων, πλείων, κρείττων — y la primera lectura continua'),
  section: T('El verbo'),
  body: C(`## Comparando en griego

El comparativo regular une {-τερος, -τερα, -ον} a la raíz del adjetivo: {μικρός} → {μικρότερος} "más pequeño", {ἰσχυρός} →{ἰσχυρότερος} "más fuerte", {σοφός} → {σοφώτερος} "más sabio".El superlativo une {-τατος, -τάτη, -ον}: {μικρότατος} "menor", {ἁγιώτατος} "santísimo" (Judas 20, {τῇ ἁγιωτάτῃπίστι} "tu santísima fe").La declinación sigue al cap.4's 2-1-2.

El segundo término de la comparación va al genitivo ({μείζων μου} "mayor que I") o viene con {ἤ} "que" + mismo caso.El genitivo de comparación es elegante y frecuente: {ὁ πατήρ μου μείζων μού ἐστιν} "mi Padre es mayor que yo" (Juan 14:28).

## Los irregulares que ya conociste

Los adjetivos más utilizados escapan a la regla, y ya te habrás topado con ellos: {μέγας} → {μείζων} "mayor" (superlativo {μέγιστος}), {πολύς} → {πλείων} "más"({πλεῖστοι} "muchos"), {ἀγαθός} → {κρείττων} "mejor" ({κράτιστος} "excelente" - título de Teófilo en Lucas 1:3,{κράτιστε}), {κακός} → {χείρων} "peor" (2 Tim 3:13, {ἐπὶ τὸ χεῖρον} "de mal en peor"), {μικρός} →{ἐλάττων} "menor" junto a {μικρότερος} regular.

El superlativo griego también tiene uso elativo, sin comparación, sólo intensidad: {ἐλάχιστος} "muy pequeño", {πρῶτος} "primero que nada".Frente a un superlativo sin segundo término, traducir con "muy" o "-est".

## Lectura guiada: Marcos 1:2-11

Es hora de leer texto continuo.Marcos 1 comienza con Isaías y termina con el bautismo, y casi todos los caps.La gramática de 1–15 aparece en estos versículos.Lea lentamente, reconociendo cada forma.

{Ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου} - "He aquí, envío mi mensajero delante de ti": presente({ἀποστέλλω}) con fuerza futura, acusativo como objeto, enclítico posesivo {μου}.

{φωνὴ βοῶντος ἐν τῇ ἐρήμῳ} — "una voz que clama en el desierto": participio sustantivo en genitivo ({βοῶντος}, de {βοάω}), dativo de lugar.

{Ἑτοιμάσατε τὴν ὁδὸν κυρίου} — "Preparad el camino del Señor": aoristo plural imperativo, genitivo de posesión.

{ἐγένετο Ἰωάννης βαπτίζων} — "Juan apareció bautizando": aoristo medio de {γίνομαι} + participio presente (acción simultánea).

{σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός} — "tú eres mi Hijo, el amado": pronombre enfático + predicado con artículo repetido (¡cap. 4!).`),
  vocab: [
    V('μείζων', 'μέγας', 'greater'),
    V('μέγιστος', 'μέγας', 'greatest'),
    V('πλείων', 'πολύς', 'more'),
    V('κρείττων', 'ἀγαθός', 'better'),
    V('χείρων', 'κακός', 'worse'),
    V('ἐλάττων', 'μικρός', 'lesser'),
    V('μικρότερος', 'μικρός', 'smaller (reg.)'),
    V('ἤ', 'ἤ', 'than, or'),
    V('Ἰδοὺ', 'ὁράω', 'behold!'),
    V('ἄγγελος', 'ἄγγελος', 'messenger, angel'),
    V('ἔρημος', 'ἔρημος', 'wilderness'),
    V('βοάω', 'βοάω', 'to cry out'),
    V('ἑτοιμάζω', 'ἑτοιμάζω', 'to prepare'),
    V('ἀγαπητός', 'ἀγαπητός', 'beloved'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"μείζων μου" usa el genitivo porque…'),
    options: [
      T('It is genitive of comparison (second term)'),
      T('Every comparative governs possessive genitive'),
      T('μου is always genitive'),
      T('It is dative of interest'),
    ],
    answer: 0,
    hint: T('Segundo término de comparación: genitivo o ἤ — regla §2.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('"κράτιστε Θεόφιλε" (Lucas 1:3) es…'),
      options: [
        T('Superlative vocative (honorific title)'),
        T('Comparative nominative'),
        T('Genitive of comparison'),
        T('Accusative of duration'),
      ],
      answer: 0,
      hint: T('κράτιστος = superlativo de ἀγαθός;final -ε = vocativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el comparativo habitual: μικρ___ ("más pequeño").'),
      answer: 'ότερος',
      hint: T('Sufijo comparativo regular: -τερος.'),
    },
    {
      kind: 'match',
      prompt: T('Une cada comparativo con su positivo.'),
      pairs: [
        { a: 'μείζων', b: 'μέγας' },
        { a: 'πλείων', b: 'πολύς' },
        { a: 'κρείττων', b: 'ἀγαθός' },
        { a: 'χείρων', b: 'κακός' },
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
        'Comparativo regular: -τερος;superlativo: -τατος.Declinación 2-1-2, como la positiva.',
      ),
    },
    {
      n: '2',
      text: T(
        'Segundo término: genitivo ({μείζων μου}) o ἤ + mismo caso.Sin segundo término, superlativo = elativo ("muy").',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco irregulares gobiernan el texto: {μείζων}, {πλείων}, {κρείττων}, {χείρων}, {ἐλάττων}.Memoriza los cinco.',
      ),
    },
    {
      n: '4',
      text: T(
        'En la lectura continua, se debe reconocer cada forma, no traducir palabra por palabra.Flujo antes que precisión.',
      ),
    },
  ],
  notes: [
    {
      label: T('Reading method:'),
      text: T(
        'En la primera lectura continua, subraya solo lo que reconoces (artículos, casos, tiempos verbales) y adivina el resto a partir del contexto.En el segundo, revisa el vocabulario.Leer griego es reconocer primero y traducir después.',
      ),
    },
    {
      label: T('μᾶλλον:'),
      text: T(
        'El adverbio {μᾶλλον} "más, más bien" hace comparaciones sin adjetivo: {μᾶλλον ἤ} "en lugar de".Pablo lo usa en dilemas (vivir o partir, Fil 1:23).',
      ),
    },
  ],
  examples: [
    { text: '{μείζων μου}', gloss: T('greater than I (genitive of comparison)') },
    {
      text: '{ὁ πατήρ μου μείζων μού ἐστιν}',
      gloss: T('my Father is greater than I (John 14:28)'),
    },
    { text: '{κράτιστε Θεόφιλε}', gloss: T('most excellent Theophilus (vocative; Luke 1:3)') },
    { text: '{πλεῖον}', gloss: T('more (substantivized neuter; Matt 5:20)') },
    { text: '{ἐπὶ τὸ χεῖρον}', gloss: T('from bad to worse (2 Tim 3:13)') },
    { text: '{Ἰδοὺ ἀποστέλλω}', gloss: T('behold, I send (futuristic present; Mark 1:2)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voice of one crying (participle; Mark 1:3)') },
    { text: '{Ἑτοιμάσατε}', gloss: T('prepare! (aorist imperative; Mark 1:3)') },
    { text: '{ἐγένετο Ἰωάννης}', gloss: T('John appeared (middle aorist; Mark 1:4)') },
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('you are my Son (Mark 1:11)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Regular comparativo y superlativo'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo')],
      rows: [
        ['{μικρός}', '{μικρότερος}', 'μικρότατος'],
        ['{ἰσχυρός}', '{ἰσχυρότερος}', 'ἰσχυρότατος'],
        ['{σοφός}', '{σοφώτερος}', 'σοφώτατος'],
      ],
    },
    {
      caption: T('Tabla 2 — Irregulares esenciales'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo')],
      rows: [
        ['{μέγας}', '{μείζων}', 'μέγιστος'],
        ['{πολύς}', '{πλείων}', 'πλεῖστος'],
        ['{ἀγαθός}', '{κρείττων}', 'κράτιστος'],
        ['{κακός}', '{χείρων}', 'χείριστος'],
        ['{μικρός}', '{ἐλάττων}', 'ἐλάχιστος'],
      ],
    },
  ],
};
