import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Alphabet and pronunciation'),
  subtitle: T('A–Z, ä, ö, ü and ß'),
  section: T('Foundations'),
  body: C(`German has 26 basic letters, to which the three umlaut sounds (ä, ö, ü) and the eszett (ß) are added, and these count as letters in their own right. The system is transparent, but spelling does not always reveal vowel length.

The most delicate sounds are the consonant clusters. sch is always /ʃ/ (Schule). ch is /ç/ after ä, ö, ü and sometimes after ie, and it is /x/ in all other cases (Buch, Milch). There is no context in which sch equals /ʃ/ + x.

The letter r has three pronunciations: at the start of a word or before a vowel, /ʁ/ (rotina); at the end of a syllable or before a consonant, /ɐ/ (Vater); doubled, /ʁ/ (Herr). w is /v/ (Wasser) and v is /f/ in native words (Vater) but /v/ in foreign words (Vase). A syllable-initial s is /z/ (Sonne, Psalm) and z is always /ts/.

Finally, word-final devoicing: a final consonant loses its voice, although it keeps its spelling. Tag is pronounced [taːk], Hund [hʊnt], Kind [kɪnt].`),
  vocab: [
    V('A', 'A', 'ah (open vowel, /a/)'),
    V('E', 'E', 'eh (close vowel, /eː/)'),
    V('I', 'I', 'ee (vowel, /ɪ/)'),
    V('O', 'O', 'oh (vowel, /ɔ/)'),
    V('U', 'U', 'oo (vowel, /ʊ/)'),
    V('Ä', 'A', 'umlaut, /ɛː/ (Mädchen)'),
    V('Ö', 'O', 'umlaut, /øː/ (schön)'),
    V('Ü', 'U', 'umlaut, /yː/ (Bücher)'),
    V('ß', 'ß', 'eszett, /s/ (Straße)'),
    V('ch', 'ch', 'soft ch after ä, ö, ü and ie'),
    V('sch', 'sch', 'sh, /ʃ/ (Schule)'),
    V('r', 'r', 'three sounds: uvular, vocalic, doubled'),
    V('w', 'w', '/v/ (Wasser)'),
    V('z', 'z', '/ts/ (Zeit) and word-initially (Zahl)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What sound does ch have in Bücher?'),
    options: [T('/x/'), T('/ç/'), T('/k/'), T('/ʃ/')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write with eszett: groß, she → ___'),
      answer: 'große',
      hint: T('The vowel o is long, so it takes ß.'),
    },
    {
      kind: 'match',
      prompt: T('Match the letter with the sound.'),
      pairs: [
        { a: T('w'), b: T('/v/ (Wasser)') },
        { a: T('sch'), b: T('/ʃ/ (Schule)') },
        { a: T('syllable-initial s'), b: T('/z/ (Sonne)') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'choose',
      prompt: T('Which word has a long u vowel?'),
      options: [T('Hund'), T('Tut'), T('Mutter'), T('Buch')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete the word: Mädch___ (girl)'),
      answer: 'en',
      hint: T('Six letters, the last one is n.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Long and short vowels are not distinguished by spelling: only the ear and the context reveal the value.',
      ),
    },
    {
      n: '2',
      text: T(
        'Length is marked by h after the vowel (Tee) or by doubling the vowel (See); ß indicates that the preceding vowel is long.',
      ),
    },
    {
      n: '3',
      text: T(
        'The initial vowel of a word forms an open syllable and is long: Arbeit, Bruder, Erde.',
      ),
    },
    {
      n: '4',
      text: T(
        'Before r, l, m, n, w the glide u or ü is obligatory: führen, Löwe, du, neu. After r only w needs a vowel: Bräutigam.',
      ),
    },
  ],
  notes: [
    {
      label: T('Eszett vs. ss'),
      text: T(
        'The ß appears after a long vowel or diphthong: Straße, Fuß, heißt, groß. ss appears after a short vowel: Wasser, Klasse, lassen. With three consonants, ß becomes ss: Weiß → weiße, fließen → fließt.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In 1 John 1:1, Im Anfang war das Wort. The alliteration on W shows that the text begins with an open long vowel, exactly what the alphabet already lets you recognise.',
      ),
    },
  ],
  examples: [
    { text: 'Wasser /ˈvasɐ/', gloss: T('water (short a; ss after a short vowel)') },
    { text: 'Vater /ˈfaːtɐ/', gloss: T('father (long a; final r sounds /ɐ/)') },
    { text: 'Arbeit /ˈarbaɪt/', gloss: T('work (open long initial a; ei = /aɪ/)') },
    { text: 'Bücher /ˈbyːçɐ/', gloss: T('books (long ü; ch is /ç/)') },
    { text: 'Groß /ɡʁoːs/', gloss: T('great (long o; ß marks the long vowel)') },
    { text: 'Kirche /ˈkɪʁçə/', gloss: T('church (ch after i is /ç/; initial r is /ʁ/)') },
  ],
  tables: [
    {
      caption: T('Long and short vowels'),
      head: ['Vogal', 'Longa', 'Curta'],
      rows: [
        ['a', 'Tee /teː/', 'Wasser /ˈvasɐ/'],
        ['e', 'See /zeː/', 'Bett /bɛt/'],
        ['i', 'vier /fiːɐ̯/', 'Bild /bɪlt/'],
        ['o', 'Boot /boːt/', 'Sonne /zɔnə/'],
        ['u', 'Tut /tuːt/', 'Hund /hʊnt/'],
        ['ä', 'Mädchen /mɛːtçən/', 'Bär /bɛːɐ̯/'],
        ['ö', 'schön /ʃøːn/', 'Höhle /høːlə/'],
        ['ü', 'Bücher /ˈbyːçɐ/', 'Müller /ˈmʏlɐ/'],
        ['y', 'Cyklop /tsyːklɔp/', 'System /zʏsteːm/'],
      ],
    },
    {
      caption: T('The sounds of ch'),
      head: ['Contexto', 'Som', 'Exemplos'],
      rows: [
        ['após ä, ö, ü, ie', '/ç/ palatal', 'ich, Bücher, Mädchen, Kirsche'],
        ['após a, e, i, o, u', '/x/ velar', 'Buch, Milch, Nacht, Schnitt'],
        ['início de palavra', '/k/ ou /ç/', 'Charme, Chaos, Chiemsee'],
      ],
    },
  ],
};
