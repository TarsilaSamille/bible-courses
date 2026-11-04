import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('The words and their classes'),
  title: T('Pronoun, numeral and verb'),
  subtitle: T('Substitution, counting and action'),
  body: C(`**Overview.** A {pronoun} replaces the noun and takes its function: in {todos viram}, {todos} stands for {todos os discípulos}, and the subject is {todos}, not {viram}.

**Rule 1.** A {cardinal numeral} says quantity ({três}) and an {ordinal} says order ({terceiro}): {três testemunhas} counts, {a terceira testemunha} locates.

**Rule 2.** The {verb} is the nucleus of the clause and inflects in person, number, tense and mood: in {Jesus chorou}, the verb {chorou} is third person singular.

**Rule 3.** A {transitive verb} requires a complement ({amou os seus amigos}) and an {intransitive} one does not ({Jesus chorou}); an {auxiliary} carries tense or voice, not meaning of its own.

**Rule 4.** Greek leaves out the subject pronoun because {the form of the verb} already names the actor: in {ἐλθόντες} the person sits in the ending, while Portuguese sometimes repeats {eles}.

**Application.** In {Jesus wept, and all saw}, the verb {chorou} is {intransitive} in the original Greek (κλαίω takes no object), and {viram} is an implied {transitive} one: only the context says what they saw. Note the pair {todos}/{viram}: the pronoun {todos} is the subject of {viram}, and the verb form {viram} is what marks it plural. In Greek, {πάντες} εἶδαν and {εἶδον} say the same thing with different forms, and the choice depends on who the subject is.

**Check.** Four questions settle the word class: does the word **agree** with something? If it does, does it name or characterize, making it a noun or an adjective. If it does not, does it **modify**, **replace**, **count**, **link** or **act**? And is the verb {transitive}, {intransitive}, {auxiliary} or a {copula}? The agreement question eliminates half of the ten classes at once.`),
  vocab: [
    V('pronome', 'pronome', 'pronoun'),
    V('numeral cardinal', 'numeral cardinal', 'cardinal numeral'),
    V('numeral ordinal', 'numeral ordinal', 'ordinal numeral'),
    V('verbo', 'verbo', 'verb'),
    V('pessoal', 'pessoal', 'personal pronoun'),
    V('possessivo', 'possessivo', 'possessive pronoun'),
    V('demonstrativo', 'demonstrativo', 'demonstrative pronoun'),
    V('relativo', 'relativo', 'relative pronoun'),
    V('todos', 'todos', 'pronoun standing in for the noun'),
    V('chorou', 'chorou', 'intransitive verb in Greek'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {pronoun} replaces the noun and takes its function: in {todos viram}, {todos} stands for {todos os discípulos}, and the subject is {todos}, not {viram}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {cardinal numeral} says quantity ({três}) and an {ordinal} says order ({terceiro}): {três testemunhas} counts, {a terceira testemunha} locates.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {verb} is the nucleus of the clause and inflects in person, number, tense and mood: in {Jesus chorou}, the verb {chorou} is third person singular.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {transitive verb} requires a complement ({amou os seus amigos}) and an {intransitive} one does not ({Jesus chorou}); an {auxiliary} carries tense or voice, not meaning of its own.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Greek leaves out the subject pronoun because {the form of the verb} already names the actor: in {ἐλθόντες} the person sits in the ending, while Portuguese sometimes repeats {eles}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The pronoun Greek does not write'),
      text: T(
        'Ancient Greek almost never writes a subject pronoun: {ἐλθόντες} means {they came} because the ending {-οντες} already carries the person. Portuguese usually needs the pronoun spelled out, which is why Greek based Bible translations carry pronouns the Greek lacks. Rendering what Greek marks in the ending would throw the information away.',
      ),
    },
    {
      label: T('Counting and locating'),
      text: T(
        '{um}, {dois}, {três} count and {primeiro}, {segundo}, {terceiro} locate. An ordinal almost always carries an article, because it needs a noun to lean on: {o terceiro dia}. A cardinal can stand alone, as in {três contra ele}, where the noun keeps the singular and the numeral does its work.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus chorou, e todos viram.',
      gloss: T(
        '{chorou} is intransitive and {viram} an implied transitive; {todos} is the elided subject of {viram}.',
      ),
    },
    {
      text: 'três testemunhas',
      gloss: T('Cardinal numeral {três} with a plural noun: the numeral agrees with the name.'),
    },
    {
      text: 'a terceira testemunha',
      gloss: T(
        'Ordinal numeral {terceiro} with article {a}: an ordinal needs the noun to lean on.',
      ),
    },
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Verb {amou} direct transitive, with object {o mundo}; the subject {Deus} comes after it.',
      ),
    },
    {
      text: 'ele mesmo',
      gloss: T('Pronoun {ele} in an emphatic form, with {mesmo} serving as predicative.'),
    },
    {
      text: 'os seus amigos',
      gloss: T('Possessive pronoun {seus} agreeing with {amigos} in gender and number.'),
    },
    {
      text: 'este é o meu Filho',
      gloss: T(
        'Two occurrences of {ser} and two pronouns: {este} demonstrative, {meu} possessive.',
      ),
    },
    {
      text: 'havia muitos',
      gloss: T(
        '{havia} is an auxiliary verb and {muitos} quantifies the elided subject, which is {gente}.',
      ),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{Verbo} a proper noun in capitals; {se} the reflexive pronoun of {fez}.'),
    },
  ],
  tables: [
    {
      caption: T('Personal pronouns'),
      head: [T('Pessoa'), T('Reto'), T('Oblíquo'), T('Reflexivo')],
      rows: [
        [T('1.ª'), T('{eu}'), T('{me}'), T('{me}')],
        [T('2.ª'), T('{tu}'), T('{te}'), T('{te}')],
        [T('3.ª'), T('{ele}'), T('{o}, {lhe}'), T('{se}')],
        [T('1.ª plural'), T('{nós}'), T('{nos}'), T('{nos}')],
        [T('2.ª plural'), T('{vós}'), T('{vos}'), T('{vos}')],
        [T('3.ª plural'), T('{eles}'), T('{os}, {lhes}'), T('{se}')],
      ],
    },
    {
      caption: T('Cardinal and ordinal numerals'),
      head: [T('Número'), T('Cardinal'), T('Ordinal')],
      rows: [
        [T('1'), T('{um}'), T('{primeiro}')],
        [T('2'), T('{dois}'), T('{segundo}')],
        [T('3'), T('{três}'), T('{terceiro}')],
        [T('4'), T('{quatro}'), T('{quarto}')],
        [T('10'), T('{dez}'), T('{décimo}')],
      ],
    },
    {
      caption: T('The verb by its inflection'),
      head: [T('Tempo'), T('Forma'), T('Pessoa e número')],
      rows: [
        [T('presente'), T('{ama}'), T('3.ª do singular')],
        [T('pretérito'), T('{amou}'), T('3.ª do singular')],
        [T('futuro'), T('{amará}'), T('3.ª do singular')],
        [T('presente'), T('{amamos}'), T('1.ª do plural')],
        [T('pretérito'), T('{amastes}'), T('2.ª do plural')],
        [T('infinitivo'), T('{amar}'), T('não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {três testemunhas}, the numeral {três} is:'),
    options: [
      T('cardinal, because it says quantity'),
      T('ordinal, because it comes before the noun'),
      T('a pronoun, because it replaces the noun'),
      T('an adjective, because it characterizes the noun'),
    ],
    answer: 0,
    hint: T('If it says how many, it is cardinal; if it says which position, it is ordinal.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which verb is {intransitive}?'),
      options: [T('{chorou}'), T('{amou}'), T('{viu}'), T('{ouviu}')],
      answer: 0,
      hint: T('Ask what the verb completes: if nothing, it is intransitive.'),
    },
    {
      kind: 'match',
      prompt: T('Match each pronoun to the function it performs.'),
      pairs: [
        { a: T('{todos}'), b: T('elided subject') },
        { a: T('{me}'), b: T('indirect object') },
        { a: T('{se}'), b: T('reflexive pronoun') },
        { a: T('{os}'), b: T('definite article') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('In {Jesus chorou}, the verb {chorou} is in the ______ person of the singular.'),
      answer: 'terceira',
      hint: T('The form {chorou} ends in {-ou}, the third person ending.'),
    },
  ],
};
