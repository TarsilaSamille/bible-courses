import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Word inflection and agreement'),
  title: T('Phonology and accentuation'),
  subtitle: T('Phonemes, syllables and stress'),
  body: C(`**Overview.** The {vowel} is the nucleus of the syllable: in {Deus} the sound {e} alone forms a nucleus; in {Deus} the syllable {Deus} has its nucleus at {eu}.

**Rule 1.** The stressed syllable can be the last, the next to last or the third from last: {casa} is oxytone, {casa} paroxytone and {casa} proparoxytone.

**Rule 2.** The accent is compulsory in an oxytone ending in {a}, {e}, {o} followed by {s}, or {n}: in {pão}, {café}, {sofás}, {padrões}.

**Rule 3.** The {differential} accent marks the difference between identical words: in {tem} and {têm}, the accent says {he has} from {they have}.

**Rule 4.** Ancient Greek marks stress by position rather than by sound: {λόγος} is oxytone, {λόγου} paroxytone, and the same stress becomes a Portuguese accent or does not.

**Application.** In {Ele tem razão}, the accent is **differential** and sits on the verb {tem}, not on a noun: the same form {tem} is written {têm} when the subject is plural. In {A versão 2.0 de Israel}, the {2.0} is a numeral with a temporal accent, not a personal name. Ancient Greek **had no graphic accent** like Portuguese: Greek accentuation is additive and marks stress with an acute or a grave depending on the syllable.

**Check.** Ask three questions: how many syllables does the word have? Is the stressed one the last, the next to last or the third from last? Does the word end in a vowel, {n} or {s}? With those three, the compulsory accent follows. And be suspicious of a word that looks unaccented: if it is an oxytone ending in a vowel, {n} or {s}, the accent is compulsory and it is there.`),
  vocab: [
    V('fonema', 'fonema', 'smallest distinctive sound'),
    V('vogal', 'vogal', 'sound forming the syllable nucleus'),
    V('consoante', 'consoante', 'sound that cannot form a nucleus alone'),
    V('sílaba', 'sílaba', 'group with one vowel as nucleus'),
    V('tônica', 'tônica', 'syllable of greatest intensity'),
    V('oxítona', 'oxítona', 'stress on the last syllable'),
    V('paroxítona', 'paroxítona', 'stress on the next to last syllable'),
    V('entonação', 'entonação', 'curve of the voice in speech'),
    V('tem', 'tem', 'third person singular, no differential accent'),
    V('têm', 'têm', 'third person plural, with differential accent'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {vowel} is the nucleus of the syllable: in {Deus} the sound {e} alone forms a nucleus; in {Deus} the syllable {Deus} has its nucleus at {eu}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The stressed syllable can be the last, the next to last or the third from last: {casa} is oxytone, {casa} paroxytone and {casa} proparoxytone.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The accent is compulsory in an oxytone ending in {a}, {e}, {o} followed by {s}, or {n}: in {pão}, {café}, {sofás}, {padrões}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {differential} accent marks the difference between identical words: in {tem} and {têm}, the accent says {he has} from {they have}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Ancient Greek marks stress by position rather than by sound: {λόγος} is oxytone, {λόγου} paroxytone, and the same stress becomes a Portuguese accent or does not.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek accent that marks position, not sound'),
      text: T(
        'Ancient Greek was recessive: it wrote {λόγος} and {λόγου} with the same accent because Greek stress is recessive and the final syllable takes no accent. A translator has to decide whether to carry Greek stress into Portuguese, and almost never does: {logos} becomes {logotipo} or {Logos}, with the accent at the front. Greek stress is information, and transcription loses it.',
      ),
    },
    {
      label: T('The differential accent and what it saves'),
      text: T(
        'In {Ele tem razão} and {Eles têm razão}, only the accent tells one sentence from the other, and what it saves is the number of the subject. It is the only accent in Portuguese that does not mark stress: it marks contrast between two words spelled alike. Everything else in Greek accentuation is about where the voice strikes; this one is about who performs the action.',
      ),
    },
  ],
  examples: [
    { text: 'casa', gloss: T('Paroxytone: the stressed syllable is the next to last, {ca}.') },
    {
      text: 'cántaro',
      gloss: T('Proparoxytone: the stressed syllable is the third from last, {cán}.'),
    },
    { text: 'sofá', gloss: T('Oxytone ending in {a}: the accent is compulsory.') },
    { text: 'sofás', gloss: T('Oxytone ending in {s}: the accent is still compulsory.') },
    {
      text: 'pão',
      gloss: T('Oxytone ending in {ão}: the accent sits on the {ã} and not on the {o}.'),
    },
    {
      text: 'parcial',
      gloss: T('Paroxytone ending in {l}: the accent is optional and normally not written.'),
    },
    {
      text: 'Ele tem razão.',
      gloss: T('No differential accent: the subject is {ele}, and the sentence is affirmative.'),
    },
    {
      text: 'Eles têm razão.',
      gloss: T('Differential accent present: the subject is {eles}, and the accent says so.'),
    },
    {
      text: 'A versão 2.0 de Israel',
      gloss: T('{2.0} is a numeral with a temporal accent, not a personal name.'),
    },
  ],
  tables: [
    {
      caption: T('Stress position and the accent'),
      head: [T('Tipo'), T('Onde fica a tônica'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{oxítona}'), T('última sílaba'), T('nem sempre'), T('{sofá}')],
        [T('{paroxítona}'), T('penúltima sílaba'), T('às vezes'), T('{parcial}')],
        [T('{proparoxítona}'), T('antepenúltima sílaba'), T('nunca'), T('{cântaro}')],
        [T('{heptassílaba}'), T('sétima sílaba'), T('nunca'), T('{{exceção}}')],
      ],
    },
    {
      caption: T('Compulsory accent, by ending'),
      head: [T('Termina em'), T('Tipo'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{a}, {e}, {o}'), T('oxítona'), T('obrigatório'), T('{sofá}, {café}')],
        [T('{n}, {s}'), T('oxítona'), T('obrigatório'), T('{padrões}, {sofás}')],
        [T('{ão}'), T('oxítona'), T('obrigatório'), T('{pão}')],
        [T('{i}, {u} sem {s}'), T('oxítona'), T('obrigatório'), T('{saí}, {argúi}')],
        [T('consoante'), T('oxítona'), T('nunca'), T('{fúlgido}')],
        [T('{l}'), T('paroxítona'), T('facultativo'), T('{parcial}')],
        [T('{n}'), T('paroxítona'), T('facultativo'), T('{imenso}')],
      ],
    },
    {
      caption: T('Differential accent between identical words'),
      head: [T('Sem acento'), T('Com acento'), T('Diferença'), T('Frase')],
      rows: [
        [T('{tem}'), T('{têm}'), T('singular e plural'), T('{ele tem}, {eles têm}')],
        [T('{sou}'), T('{só}'), T('verbo e advérbio'), T('{sou fiel}, {só ele vem}')],
        [T('{tu}'), T('{tú}'), T('pronome e advérbio'), T('{tu vens}, {aqui só tu}')],
        [T('{ele}'), T('{éle}'), T('pronome e advérbio antigo'), T('{ele vai}, {éle próprio}')],
        [T('{por}'), T('{pôr}'), T('preposição e verbo'), T('{por amor}, {vou pôr o sol}')],
        [
          T('{quase}'),
          T('{quase}'),
          T('advérbios em orações distintas'),
          T('{quase três}, {quase não}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {sofás}, the accent is:'),
    options: [
      T('compulsory, because it is an oxytone ending in {s}'),
      T('optional, as in every paroxytone'),
      T('differential, because it distinguishes {sofa}'),
      T('absent, because the word already has {s}'),
    ],
    answer: 0,
    hint: T('An oxytone ending in {s} always takes the accent.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('The difference between {tem} and {têm} is marked by:'),
      options: [
        T('a differential accent, which says the number of the subject'),
        T('a different vowel in the middle of the word'),
        T('the ending {m} against {n}'),
        T('the intonation of the sentence'),
      ],
      answer: 0,
      hint: T('The two words are identical in writing apart from the accent.'),
    },
    {
      kind: 'match',
      prompt: T('Match each word to the stress pattern it has.'),
      pairs: [
        { a: T('{café}'), b: T('{oxytone}') },
        { a: T('{parcial}'), b: T('{paroxytone}') },
        { a: T('{cântaro}'), b: T('{proparoxytone}') },
        { a: T('{imenso}'), b: T('paroxytone with an optional accent') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'tônica',
      hint: T('In {café}, the stressed syllable is {fé}.'),
    },
  ],
};
