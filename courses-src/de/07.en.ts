import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('The gender of nouns'),
  subtitle: T('rules, pairs and exceptions'),
  section: T('Nouns'),
  body: C(`German noun gender is grammatical, not natural. There is no correspondence between gender and the sex of the referent: die Sonne is feminine and the sun is masculine in Portuguese; die Mutter is feminine, and the mouth of a river (der Mund) is masculine. There is therefore no safe way to deduce gender from the logic of meaning.

There are, however, strong regularities. The masculine covers male persons and animals (der Mann, der Hund, der Hahn), the days, months and seasons (der Montag, der Mai, der Herbst), alcoholic drinks (der Wein, der Sekt, der Schnaps) and the nouns in -er that denote men (der Lehrer, der Maler).

The feminine is the largest class and gathers a broad set of endings together: -ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur and -in (the woman who does it: die Königin, die Ärztin). Also feminine are the names of women (die Frau, die Schwester) and the nouns in -e that denote lifeless things: die Straße, die Farbe, die Größe, die Butter.

The neuter gathers the nominalised infinitives and adjectives (das Essen, das Gute), collective nouns of people (das Volk), the names of languages and continents (das Deutsch, das Europa) and the nouns with the prefix ge-, be-, ver-, er-, ent-, emp-, zer- or of Greek and Latin origin (das Getränk, das Problem, das Studium).

Watch out for two frequent exceptions. Diminutives in -chen and -lein are always neuter: das Mädchen, das Bärchen; but they form the plural in -chen, without a nasal: die Mädchen. And paired words: whenever a masculine and feminine pair exists, learn both at once — der Vater and die Mutter, der Sohn and die Tochter — because one pulls the other along in memory.`),
  vocab: [
    V('der Mann', 'Mann', 'the man (masculine)'),
    V('die Frau', 'Frau', 'the woman, the wife (feminine)'),
    V('der Vater', 'Vater', 'the father (masculine)'),
    V('die Mutter', 'Mutter', 'the mother (feminine)'),
    V('der Sohn', 'Sohn', 'the son (masculine)'),
    V('die Tochter', 'Tochter', 'the daughter (feminine)'),
    V('die Sonne', 'Sonne', 'the sun (feminine, against expectation)'),
    V('die Größe', 'Größe', 'the size (feminine in -e)'),
    V('die Übung', 'Übung', 'the exercise (feminine in -ung)'),
    V('die Freiheit', 'Freiheit', 'the freedom (feminine in -heit)'),
    V('die Universität', 'Universität', 'the university (feminine in -ität)'),
    V('die Königin', 'Königin', 'the queen (feminine in -in)'),
    V('das Mädchen', 'Mädchen', 'the girl (neuter in -chen)'),
    V('das Getränk', 'Getränk', 'the drink (neuter in ge-)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these nouns is feminine?'),
    options: [T('das Problem'), T('die Forschung'), T('der Frühling'), T('das Bauernhaus')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Give the gender of "Lehrer": ___ Lehrer'),
      answer: 'der',
      hint: T('Ending -er denoting a man.'),
    },
    {
      kind: 'fill',
      prompt: T('Give the gender of "Sonntag": ___ Sonntag'),
      answer: 'der',
      hint: T('All the days of the week are masculine.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the gender of "das Verstehen"?'),
      options: [T('feminine'), T('masculine'), T('neuter'), T('varies with the referent')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match the noun to its gender.'),
      pairs: [
        { a: T('die Forschung'), b: T('feminine (-ung)') },
        { a: T('das Studium'), b: T('neuter (-um)') },
        { a: T('der Bauer'), b: T('masculine (-er)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Masculine and feminine profession nouns form a regular pair: der Arzt / die Ärztin, der Student / die Studentin.',
      ),
    },
    {
      n: '2',
      text: T(
        'Diminutives in -chen and -lein are neuter and form the plural unchanged: das Mädchen, die Mädchen; das Bärchen, die Bärchen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Languages and continents are neuter: das Deutsch, das Englisch, das Europa, das Afrika.',
      ),
    },
    {
      n: '4',
      text: T(
        'Names of cities and countries are neuter when they appear with an article: das Berlin, das Deutschland, das Bayern; without an article nothing changes: in Berlin, in Deutschland.',
      ),
    },
  ],
  notes: [
    {
      label: T('Gender mnemonics'),
      text: T(
        'No list of rules will ever replace the vocabulary. The efficient practice is always the same: write the article next to the noun, memorise the plural, and mark the gender with a colour. Whoever writes the gender down, even wrongly, corrects it within three repetitions; whoever does not write it memorises it wrongly for years.',
      ),
    },
    {
      label: T('The origin of gender'),
      text: T(
        'The three genders inherited the system of ancient Greek, which classifies what has motion (masculine) and what is inert (neuter), with the feminine as the category of the living and of the pair. That is why die Sonne is feminine: the Latin word sōl was classified with the other luminous things, and not with the masculine Greek sun hēlios.',
      ),
    },
  ],
  examples: [
    {
      text: 'Die Sonne scheint.',
      gloss: T('The sun is shining (die = feminine, against expectation).'),
    },
    {
      text: 'Der Vater und die Mutter kommen.',
      gloss: T('The father and the mother are coming (a learnable pair).'),
    },
    { text: 'Sie ist Ärztin.', gloss: T('She is a doctor (feminine of Arzt in -in).') },
    {
      text: 'Das Mädchen spielt mit dem Hund.',
      gloss: T('The girl plays with the dog (neuter diminutive).'),
    },
    {
      text: 'Die Mädchen spielen im Garten.',
      gloss: T('The girls play in the garden (plural without a nasal).'),
    },
    {
      text: 'Er studiert in Berlin.',
      gloss: T('He studies in Berlin (neuter city name, without article).'),
    },
    {
      text: 'Die Größe des Hauses ist beträchtlich.',
      gloss: T('The size of the house is considerable (feminine in -e).'),
    },
    { text: 'Das Getränk ist kalt.', gloss: T('The drink is cold (neuter with ge-).') },
  ],
  tables: [
    {
      caption: T('Gender clues by ending'),
      head: ['Terminação', 'Gênero', 'Exemplos'],
      rows: [
        [
          '-ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur',
          'feminino',
          'die Übung, die Freiheit, die Nation',
        ],
        ['-in (profissão feminina)', 'feminino', 'die Ärztin, die Lehrerin'],
        ['-e (objeto sem vida)', 'feminino', 'die Straße, die Farbe'],
        ['-chen, -lein (diminutivo)', 'neutro', 'das Mädchen, das Bärchen'],
        ['-er (homem)', 'masculino', 'der Lehrer, der Bauer'],
        ['-ling, -ig, -ich', 'masculino', 'der Frühling, der König'],
        ['-ismus, -um, -ment, -tion, -ität', 'neutro', 'das Christentum, das Studium'],
        ['ge-, be-, ver-, er-, ent-, emp-, zer-', 'em geral neutro', 'das Getränk, das Gebäude'],
        ['-chen / -lein: plural', 'sem nasal', 'die Mädchen, die Tassen'],
      ],
    },
    {
      caption: T('Learnable pairs'),
      head: ['Masculino', 'Feminino', 'Gloss'],
      rows: [
        ['der Vater', 'die Mutter', 'pai / mãe'],
        ['der Sohn', 'die Tochter', 'filho / filha'],
        ['der Bruder', 'die Schwester', 'irmão / irmã'],
        ['der Hahn', 'die Henne', 'galo / galinha'],
        ['der Stier', 'die Kuh', 'touro / vaca'],
        ['der Hengst', 'die Stute', 'cavalo / égua'],
        ['der Junggeselle', 'die Junggesellin', 'solteiro / solteira'],
        ['der Poet', 'die Dichterin', 'poeta / poetisa'],
      ],
    },
  ],
};
