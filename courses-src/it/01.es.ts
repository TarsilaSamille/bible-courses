import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artículos y sustantivos'),
  subtitle: T('género, número y artículo'),
  section: T('El nombre y el verbo'),
  body: C(`## Género, número y tres aciertos

El sustantivo italiano tiene **género y número**, y el artículo definido concuerda con los dos, más una tercera cosa: **el sonido de la inicial**. Son tres decisiones en la misma palabra, y por eso el artículo italiano parece difícil. Compare {il libro}, {la casa}, {lo studente}, {i libri}, {le case}.

**El plural sigue la letra** casi siempre: {-o} pasa a {-i} ({libro} → {libri}) y {-a} pasa a {-e} ({casa} → {case}). La complicación son los sustantivos en {-e}, que hacen {-i} en los dos géneros: {il re} → {i re}, {la parte} → {le parti}. Y hay los que no cambian nunca: {la foto} → {le foto}, {la mano} → {le mani}. Algunos son solo femeninos ({la mano}), otros solo masculinos ({il libro}), otros los dos ({il poeta} y {la poeta}). Esos se aprenden; no hay regla.

Fíjate en el sentido contrario: {la mano} es femenino pese a la {-o}, y {il libro} es masculino. La terminación da la pista, el artículo da la certeza.

## Lo y l’: manda el sonido

La letra inicial cambia el artículo masculino ante s + consonante, {z}, {gn} y {ps}: {lo studente}, {lo zelo}, {lo gnomo}, {lo psicologo}. Ante vocal el artículo masculino no tiene forma propia y se vuelve {l’}: {l’uomo}, {l’angelo}, {l’amore}. El femenino hace lo mismo: {l’amica}, {l’amore}, {l’isola}.

Esa doble serie explica los verbos con {l’}. No son una excepción: son la {a} de {avere} y la {e} de {essere} pegadas a un sustantivo que empieza por vocal, {l’uomo} y {l’angelo}. El português pega el artículo al nombre, {o homem}; el italiano pega la preposición, {a Dio} y {l’uomo}, y la {a} es la misma en los dos casos.

## En la Biblia

{In principio} (Jn 1:1) conserva el sentido griego de «al principio» (ἐν ἀρχῇ). Más adelante, {la Parola} será definida por el sentido griego de {Verbo} (ὁ λόγος), y no por el de «palabra hablada». Un traductor que reconoce las dos cosas en {Parola} no tiene que elegir entre ellas: la palabra italiana lleva el {logos} y lo dice a la vez.

## Criterio de lectura

Cuando veas un sustantivo italiano, deduce el género por la terminación y confírmalo con el artículo: si la palabra empieza por vocal o por s + consonante, el artículo es {l’} o {lo}, y el sonido cierra el diagnóstico. Cuando las dos pistas no coincidan, decide el contexto.`),
  vocab: [
    V('il', 'il', 'el'),
    V('lo', 'lo', 'el (forma especial)'),
    V('la', 'la', 'la'),
    V('l’', 'l', 'el/la (ante vocal)'),
    V('gli', 'gli', 'los (de lo, i)'),
    V('libro', 'libro', 'libro'),
    V('parola', 'parola', 'palabra'),
    V('pane', 'pane', 'pan'),
    V('luce', 'luce', 'luz'),
    V('mano', 'mano', 'mano'),
    V('re', 're', 'rey'),
    V('foto', 'foto', 'foto'),
    V('Dio', 'Dio', 'Dios'),
    V('uomo', 'uomo', 'hombre'),
    V('mondo', 'mondo', 'mundo'),
    V('Parola', 'parola', 'Palabra (Logos)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de la parola?'),
    options: [T('i paroli'), T('le parole'), T('gli parole'), T('la parole')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ studenti (o + estudiante masculino)'),
      answer: 'gli',
      hint: T('lo → gli'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué artículo precede a lo zaino?'),
      options: [T('il'), T('lo'), T('la'), T('l’')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Pásalo a plural: la luce → ___ luci'),
      answer: 'le',
      hint: T('La palabra luz es femenina.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El plural de {libro} es {libri} y el de {casa} es {case}: {-o} pasa a {-i} y {-a} pasa a {-e}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los sustantivos en {-e} hacen {-i} en los dos géneros: {il re} → {i re}, {la parte} → {le parti}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La terminación no decide el género: {la mano} es femenino y {il libro} es masculino; el artículo desempata.',
      ),
    },
    {
      n: '4',
      text: T(
        'El masculino ante s + consonante, {z}, {gn} o {ps} usa {lo}: {lo studente}, {lo zelo}, {lo gnomo}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Ante vocal el artículo se vuelve {l’}: {l’uomo} y {l’amica} son {l’} más sustantivo en los dos casos.',
      ),
    },
  ],
  notes: [
    {
      label: T('El artículo y el nombre propio'),
      text: T(
        'El artículo definido {il} aparece con el nombre común ({il libro}) y desaparece del nombre propio conocido: {Dio}, {Gesù}, {Maria}. En {gli esseri umani}, {gli} es artículo y {umani} es sustantivo; el italiano lo escribe así porque en griego y hebreo la frase es al revés.',
      ),
    },
    {
      label: T('Las dos -o'),
      text: T(
        'Hay {-o} masculino ({il libro}, {il governo}, {il modo}) y {-o} femenino ({la mano}, {la foto}, {la moto}). Ninguno de los dos lados tiene regla: lo que lo decide es el artículo, y por eso ningún diccionario italiano deja que un sustantivo vaya sin él.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('El libro es la Palabra de Dios.') },
    { text: 'Lo studente legge le parole.', gloss: T('El estudiante lee las palabras.') },
    { text: 'La mano dello studente.', gloss: T('La mano del estudiante.') },
    { text: 'Gli esseri umani.', gloss: T('Los seres humanos.') },
    { text: 'L’uomo e la donna.', gloss: T('El hombre y la mujer.') },
    { text: 'Le case sono bianche.', gloss: T('Las casas son blancas.') },
    { text: 'Lo zelo del giovane.', gloss: T('El celo del joven.') },
    { text: 'In principio era la Parola.', gloss: T('En el principio era la Palabra.') },
  ],
  tables: [
    {
      caption: T('Artículos definidos'),
      head: ['Singolare', 'Plurale', 'Forma'],
      rows: [
        ['il libro', 'i libri', 'maschile'],
        ['lo studente', 'gli studenti', 's + consonante'],
        ['la ragazza', 'le ragazze', 'femminile'],
        ['l’uomo', 'gli uomini', 'davanti a vocale'],
      ],
    },
    {
      caption: T('Plural por terminación'),
      head: ['Singolare', 'Plurale', 'Regola'],
      rows: [
        ['il libro', 'i libri', '-o → -i'],
        ['la casa', 'le case', '-a → -e'],
        ['il re', 'i re', '-e → -i'],
        ['la parte', 'le parti', '-e → -i'],
        ['la mano', 'le mani', '-o → -i'],
        ['la foto', 'le foto', 'invariabile'],
      ],
    },
  ],
};
