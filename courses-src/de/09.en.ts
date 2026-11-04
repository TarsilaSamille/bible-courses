import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('The cases'),
  subtitle: T('wer, wen, wem, wessen'),
  section: T('Cases'),
  body: C(`Case is the inflection German inherited from Latin and kept in functional form. Each case answers a question, and the questions are the same for every noun, which makes the system transparent despite its complexity.

The nominative answers: who or what performs the action? The accusative answers: who or what receives the action? The dative answers: to whom or for whom? The genitive answers: of whom or of what?

The interrogative pronouns show the system clearly: wer has only a nominative form (Wer kommt?), while the others appear in three cases — wen (masculine and neuter, accusative), wem (dative) and wessen (genitive). For the neuter the system offers was in all cases, because the gender distinction disappears: Was kommt? Was suchst du? Wem gibst du das Buch? Wessen Buch ist das?

The relative demonstrative repeats exactly the same pattern: der, die, das, with wessen → dessen, dative → dem, accusative → den. Once these four cases are understood, the whole declension of chapter 3 and of the syntax section is automatically solved.

The practical consequence matters: case information is never carried by word order but by the ending. That is why the sentences Die Kinder kommen and Ich sehe die Kinder have the same word die but opposite functions; what disambiguates them is the conjugated verb, the element that occupies the second position.`),
  vocab: [
    V('wer', 'wer', 'who (nom.)'),
    V('wen', 'wer', 'who (acc. masc./neut.)'),
    V('wem', 'wer', 'to whom (dat.)'),
    V('wessen', 'wer', 'of whom (gen.)'),
    V('was', 'was', 'what (all cases)'),
    V('der Nominativ', 'Nominativ', 'the nominative case'),
    V('der Akkusativ', 'Akkusativ', 'the accusative case'),
    V('der Dativ', 'Dativ', 'the dative case'),
    V('der Genitiv', 'Genitiv', 'the genitive case'),
    V('das Pronomen', 'Pronomen', 'the pronoun'),
    V('das Subjekt', 'Subjekt', 'the subject'),
    V('das Objekt', 'Objekt', 'the object'),
    V('die Form', 'Form', 'the form (grammatical)'),
    V('der Satz', 'Satz', 'the sentence'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Ich sehe die Frau", which case is die?'),
    options: [T('Nominative'), T('Accusative'), T('Dative'), T('Genitive')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the question: ___ suchst du? (who, acc.)'),
      answer: 'Wen',
      hint: T('Accusative of wer.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the question: ___ Buch ist das? (whose)'),
      answer: 'Wessen',
      hint: T('Genitive of wer.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Der Schlüssel steckt im Schloss", which case is Schlüssel?'),
      options: [T('nominative'), T('dative'), T('genitive'), T('it is a named case')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the case.'),
      pairs: [
        { a: T('wem'), b: T('dative') },
        { a: T('wessen'), b: T('genitive') },
        { a: T('wer'), b: T('nominative') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nominative and accusative have identical forms in the feminine and in the plural, so only word order reveals the difference: Der Mann sieht die Frau / Die Frau sieht den Mann.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dative and genitive are easily identified by the ending: -m in the dative and -s in the genitive of article and noun.',
      ),
    },
    {
      n: '3',
      text: T(
        'The case of a noun depends on its function, not on its meaning: Der Schlüssel ist im Schloss (nominative subject), but Der Schlüssel steckt im Schloss (dative of place).',
      ),
    },
    {
      n: '4',
      text: T(
        'In questions the conjugated verb stands first and the interrogative pronoun may follow at once: Wer kommt heute? Wem gibst du es?',
      ),
    },
  ],
  notes: [
    {
      label: T('One case, one question'),
      text: T(
        'The method that teaches the whole declension without memorising a single noun is the fixed question. Faced with any noun, always ask: who does it? (nom.) to whom? (dat.) of whom? (gen.) The question returns the case, and the case returns the form. Replace the noun with wen, wem, wessen and the exercise becomes purely mechanical.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 1:1, Im Anfang war das Wort. The question "who was?" returns das (neuter nominative); the question "what was it?" returns the same. The verse is an identification sentence, and the nominative is the case of identification.',
      ),
    },
  ],
  examples: [
    { text: 'Wer kommt?', gloss: T('Who is coming? (wer = nominative).') },
    {
      text: 'Wem gibst du das Buch?',
      gloss: T('To whom are you giving the book? (wem = dative).'),
    },
    { text: 'Wessen Name ist das?', gloss: T('Whose name is that? (wessen = genitive).') },
    { text: 'Wen suchst du?', gloss: T('Who are you looking for? (wen = accusative).') },
    {
      text: 'Der Mann sieht die Frau.',
      gloss: T('The man sees the woman (der = nom., die = acc.).'),
    },
    {
      text: 'Die Frau sieht den Mann.',
      gloss: T('The woman sees the man (the same form die, another function).'),
    },
    {
      text: 'Das Buch liegt auf dem Tisch.',
      gloss: T('The book lies on the table (dem = dative of place).'),
    },
    {
      text: 'Die Mutter des Kindes wartet.',
      gloss: T('The mother of the child is waiting (two genitives).'),
    },
  ],
  tables: [
    {
      caption: T('The four cases and their questions'),
      head: ['Caso', 'Pergunta', 'Função', 'Sinal no artigo (masc. sg.)'],
      rows: [
        ['Nominativo', 'quem faz?', 'sujeito', 'der'],
        ['Acusativo', 'em quem age?', 'objeto direto, direção', 'den'],
        ['Dativo', 'a quem?', 'destinatário, beneficiário', 'dem'],
        ['Genitivo', 'de quem?', 'posse, origem, medida', 'des'],
      ],
    },
    {
      caption: T('Interrogative pronouns by case'),
      head: ['Caso', 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['Nominativo', 'wer', 'wer', 'was', 'was'],
        ['Acusativo', 'wen', 'wen', 'was', 'was'],
        ['Dativo', 'wem', 'wem', 'wem', 'wem'],
        ['Genitivo', 'wessen', 'wessen', 'wessen', 'wessen'],
      ],
    },
  ],
};
