import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Pronombres personales'),
  subtitle: T('ἐγώ, σύ, αὐτός: énfasis y los tres roles de αὐτός'),
  section: T('Pronombres'),
  body: C(`## ¿Por qué un pronombre, si el verbo ya lo dice?

En griego, {λέγω} ya significa "yo digo" y {λέγεις} ya significa "tú dices"; el pronombre explícito es gramaticalmente redundante.Entonces, siempre que {ἐγώ} o {σύ} aparecen como sujeto, hay énfasis o contraste: {σὺ εἶ ὁ υἱός μου} "TÚ eres mi Hijo" (Marcos 1:11, en el bautismo), {ἐγὼ οὐκ εἰμὶἄξιος} "No soy digno" (Mateo 3:11).El pronombre es un foco: donde cae está el foco.

La misma lógica gobierna {ἐγώ εἰμι} "YO SOY" (Juan 8:58) — con o sin predicado, la fórmula evoca el Nombre divino de Éxodo 3:14 en la Septuaginta ({ἐγώ εἰμι ὁ ὤν}).Reconocer el énfasis es la mitad de la exégesis de estos versículos.

## ἐγώ y σύ: estresados y enclíticos

Los pronombres de 1ª y 2ª persona tienen formas acentuadas (acento propio, enfático) y formas enclíticas cortas (sin acento, apoyándose en la palabra anterior).{ἐμοῦ} frente a {μου}, {ἐμοί} frente a {μοι}, {ἐμέ} frente a {με};{σοῦ} frente a {σου}, {σοί} frente a {σοι}, {σέ} frente a {σε}.

En la práctica del Nuevo Testamento, los enclíticos dominan como posesivos y objetos: {ὁ υἱός μου} "hijo mío", {λέγω σοι} "te digo", {μετὰ σοῦ} "contigo".Las formas acentuadas aparecen en contraste ({σὺ λέγεις} "eres TÚ quien dice", Juan 18:37), después de preposiciones enfáticas y en paralelismos.Regla general: enclítico = uso neutral;estresado = atención.

El plural ({ἡμεῖς}, {ὑμεῖς}) sigue la misma lógica, con formas completas en todos los casos: {ἡμῶν} "nuestro", {ὑμῖν} "para ti", {ἡμᾶς} "nosotros".El enfático {ὑμεῖς} abre contrastes como Mateo 5:13 ({ὑμεῖς ἐστε τὸ ἅλας} "TÚ eres la sal").

## αὐτός en tres roles

{αὐτός} es el comodín pronominal, con tres empleos distintos revelados por posición.Primero, adjetivo intensivo junto a un sustantivo articulado: {αὐτὸς ὁ κύριος} "el Señor MISMO" (1 Tes 4:16), {αὐτὸς ἐγώ} "YO MISMO".

En segundo lugar, pronombre de tercera persona en casos indirectos (el griego no tiene el nominativo "él"; usa {ἐκεῖνος} o el artículo): {αὐτόν} "él", {αὐτῇ} "ella", {αὐτῶν} "su".{εἶδεν αὐτόν} "lo vio";{μετ᾽ αὐτῶν} "con ellos".

En tercer lugar, con el artículo significa "lo mismo": {ὁ αὐτὸς} "lo mismo" (1 Cor 1:10, {τὸ αὐτὸ λέγητε} "decir lo mismo"), {ἐπὶ τὸ αὐτό} "juntos, en el mismo lugar" (Hechos2:1).Tres posiciones, tres sentidos... y confundirlos es la trampa clásica de este capítulo.`),
  vocab: [
    V('ἐγώ', 'ἐγώ', 'I (emphatic)'),
    V('ἐμοῦ', 'ἐγώ', 'of me (stressed)'),
    V('μου', 'ἐγώ', 'my, me'),
    V('μοι', 'ἐγώ', 'to me'),
    V('ἡμεῖς', 'ἐγώ', 'we'),
    V('ἡμῶν', 'ἐγώ', 'our, of us'),
    V('σύ', 'σύ', 'you (emphatic)'),
    V('σοῦ', 'σύ', 'of you (stressed)'),
    V('σου', 'σύ', 'your, you'),
    V('σοι', 'σύ', 'to you'),
    V('αὐτός', 'αὐτός', 'himself, same'),
    V('αὐτόν', 'αὐτός', 'him'),
    V('αὐτῶν', 'αὐτός', 'their, of them'),
    V('ἑαυτόν', 'ἑαυτοῦ', 'himself'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "σὺ εἶ ὁ υἱός μου" (Marcos 1:11), la "σύ" explícita indica...'),
    options: [
      T('Solemn emphasis ("YOU are")'),
      T('Agreement error'),
      T('Majestic plural'),
      T('Indefinite subject'),
    ],
    answer: 0,
    hint: T('Verbo + pronombre explícito = foco de atención - regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el enclítico posesivo: ὁ υἱός ___ ("mi hijo").'),
      answer: 'μου',
      hint: T('Genitivo enclítico de ἐγώ: Tabla 1.'),
    },
    {
      kind: 'choose',
      prompt: T('"ὁ αὐτὸς λόγος" significa…'),
      options: [
        T('The same word'),
        T('The word itself (intensive)'),
        T('He said the word'),
        T('His word'),
      ],
      answer: 0,
      hint: T('Con el artículo anterior: "el mismo" — regla §5.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma de αὐτός con su función.'),
      pairs: [
        { a: 'αὐτὸς ὁ κύριος', b: 'intensivo' },
        { a: 'εἶδεν αὐτόν', b: 'pronome' },
        { a: 'τὸ αὐτό', b: '«o mesmo»' },
        { a: 'μετ᾽ αὐτῶν', b: 'pronome' },
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
        'Pronombre explícito como sujeto = énfasis o contraste.Sin énfasis, el verbo solo es suficiente.',
      ),
    },
    {
      n: '2',
      text: T(
        'Enclíticas ({μου}, {σου}, {με}, {σε}) = uso neutro (posesión, objeto).Acentuado ({ἐμοῦ}, {σοί}) = atención y contraste.',
      ),
    },
    {
      n: '3',
      text: T('αὐτός sin artículo + sustantivo articulado = "él mismo" ({αὐτὸς ὁ κύριος}).'),
    },
    {
      n: '4',
      text: T(
        'αὐτός en casos indirectos sin ningún artículo cerca = pronombre "él/ella" ({αὐτόν}, {αὐτῶν}).',
      ),
    },
    {
      n: '5',
      text: T(
        'ὁ αὐτός (con artículo) = "lo mismo" ({ἐπὶ τὸ αὐτό} "juntos").La posición lo decide todo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Phonetics:'),
      text: T(
        'Los enclíticos ganan acento cuando la palabra anterior es aguda o cuando dos enclíticos se acumulan ({ἄκουσόν μου} "escúchame").Los editores marcan estos acentos; no los confunda con formas acentuadas.',
      ),
    },
    {
      label: T('Reflexive:'),
      text: T(
        'Para "él mismo", compuestos griegos {ἑαυτόν} (αὐτός + prefijo reflexivo): {ἑαυτὸν ἐταπείνωσεν} "se humilló a sí mismo" (Fil. 2:8).Cap.26 (demostrativos) completa el cuadro pronominal.',
      ),
    },
  ],
  examples: [
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('you are my Son (emphasis; Mark 1:11)') },
    { text: '{ἐγώ εἰμι}', gloss: T('I AM (John 8:58; divine formula)') },
    { text: '{ὑμεῖς ἐστε τὸ ἅλας}', gloss: T('you are the salt (contrast; Matt 5:13)') },
    { text: '{ὁ υἱός μου}', gloss: T('my son (possessive enclitic)') },
    { text: '{λέγω σοι}', gloss: T('I tell you (enclitic object)') },
    { text: '{αὐτὸς ὁ κύριος}', gloss: T('the Lord himself (intensive; 1 Thess 4:16)') },
    { text: '{εἶδεν αὐτόν}', gloss: T('he saw him (oblique pronoun)') },
    { text: '{μετ᾽ αὐτῶν}', gloss: T('with them (genitive plural)') },
    { text: '{τὸ αὐτὸ λέγητε}', gloss: T('say the same thing (1 Cor 1:10)') },
    { text: '{ἐπὶ τὸ αὐτό}', gloss: T('together, in the same place (Acts 2:1)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — ἐγώ (primera persona)'),
      head: [
        T('Caso'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominativo'), '{ἐγώ}', '—', '{ἡμεῖς}'],
        [T('Genitivo'), '{ἐμοῦ}', '{μου}', '{ἡμῶν}'],
        [T('Dativo'), '{ἐμοί}', '{μοι}', '{ἡμῖν}'],
        [T('Acusativo'), '{ἐμέ}', '{με}', '{ἡμᾶς}'],
      ],
    },
    {
      caption: T('Tabla 2 — σύ (segunda persona)'),
      head: [
        T('Caso'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominativo'), '{σύ}', '—', '{ὑμεῖς}'],
        [T('Genitivo'), '{σοῦ}', '{σου}', '{ὑμῶν}'],
        [T('Dativo'), '{σοί}', '{σοι}', '{ὑμῖν}'],
        [T('Acusativo'), '{σέ}', '{σε}', '{ὑμᾶς}'],
      ],
    },
    {
      caption: T('Tabla 3 - αὐτός (declina como un adjetivo 2-1-2)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{αὐτός}', '{αὐτή}', '{αὐτό}'],
        [T('Genitivo'), '{αὐτοῦ}', '{αὐτῆς}', '{αὐτοῦ}'],
        [T('Dativo'), '{αὐτῷ}', '{αὐτῇ}', '{αὐτῷ}'],
        [T('Acusativo'), '{αὐτόν}', 'αὐτήν', '{αὐτό}'],
      ],
    },
  ],
};
