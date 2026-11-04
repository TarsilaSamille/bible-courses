import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperative'),
  subtitle: T('speak, speak, speak'),
  section: T('The verb: the moods'),
  body: C(`## Three registers, three forms

The Portuguese imperative has changed shape three times in history, and biblical Portuguese kept all three. The affirmative tu uses the present: {fala}, {crê}, {parte}. Você, more formal, uses the present subjunctive: {fale}, {creia}, {parta}. And the plural may use {falai} (older Portugal), {crede} (modern Portugal) or {falem} (Brazil), depending on register.

Note what changes and what does not: the verb moves from present to subjunctive, but the pronoun disappears. Nobody says "fala tu" nor "fale você" in the normal order — the pronoun is clitic and moves in front of the verb: fala-me, fale-me. Italian has the same structure (lesson 10), which is why translating Greek and Hebrew into Portuguese so often slips precisely here.

## The negative is not just "not"

The negative normally uses the **subjunctive**: {não fales}, {não venha}, {não vá}. And in Brazilian speech a strong não: {não fale agora}, {nem fala}. The point is that {não falas} is rare and archaic; the current register is {não fales}, and that is the form the Bible preserves.

Two imperatives are **irregular** and have to be learned: the {tem} of *ter, tomar* ("have, take") and the {vem} of *vir*. No rule produces them — {tem} comes from Latin *tene*, {vem} from *veni* — and biblical Portuguese keeps the irregularity as a marker of archaism.

## Biblical Portuguese preserves the old shapes

{ide} in Mark 16:15 and {amai-vos} in John 13:34 are the two most visible marks. {Ide} is the old plural of "go", today "vai-vos" or "idai"; {amai-vos} keeps the reflexive pronoun explicit, which modern Portuguese has lost.

These two are not arbitrary. Greek in Mark 16:15 (πορεύεσθε) and Greek in John 13:34 (ἀγαπᾶτε ἀλλήλους) explicitly ask for the relation and the direction, and old Portuguese {amai-vos} says exactly that: "love one another". Rendering it as "love each other" without the **-vos** loses the mutuality.

## Reading criterion

If the verb is in the imperative, ask three things: who is the *tu* (tu, você, vocês)? Is the verb affirmative or negative? And is there an explicit pronoun? An {amai-vos} has all three: the three pronouns implied, the verb affirmative, the -vos explicit. Biblical reading gains its sense right there.`),
  vocab: [
    V('fala', 'falar', 'speak!'),
    V('fale', 'falar', 'speak!'),
    V('falai', 'falar', 'speak!'),
    V('não fales', 'falar', 'do not speak!'),
    V('amai-vos', 'amar', 'love one another!'),
    V('vinde', 'vir', 'come!'),
    V('ide', 'ir', 'go!'),
    V('vem', 'vir', 'come!'),
    V('dize', 'dizer', 'say!'),
    V('crede', 'crer', 'believe! (pl.)'),
    V('falem', 'falar', 'let them speak!'),
    V('tem', 'ter', 'have!; take!'),
    V('você', 'você', 'you (formal)'),
    V('mundo', 'mundo', 'world (in “Go into all the world”)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say “speak!” in Brazilian Portuguese plural?'),
    options: [T('you speak'), T('speak!'), T('speak!'), T('they spoke')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “do not ___ (speak)”.'),
      answer: 'fales',
      hint: T('Negative imperative uses the subjunctive.'),
    },
    {
      kind: 'choose',
      prompt: T('In John 13:34, “amai-vos” means:'),
      options: [T('love one another'), T('to love you'), T('love each other us'), T('love me')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match person and form.'),
      pairs: [
        { a: T('you'), b: T('speak!') },
        { a: T('you (formal)'), b: T('speak!') },
        { a: T('plural'), b: T('speak!') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The affirmative {tu} uses the present ({fala}, {crê}, {parte}), {você} uses the present subjunctive ({fale}, {creia}, {parta}), and the plural uses {falai} in old Portugal, {crede} in current Portugal and {falem} in Brazil.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The negative imperative is {não} plus subjunctive in every person: {não fales}, {não fale}, {não falem}. {Não falas} is archaic, and the form {não fales} is the one Greek (μὴ λάλησῃς) requires.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The pronoun moves in front of the verb and leaves the subject position: nobody says {fala tu} nor {fale você}. With the clitic, {fala-me} and {fale-me} are the same pronoun order in Portuguese.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{tem} and {vem} are the two irregular imperatives no rule produces: {tem} comes from Latin {tene} and {vem} from {veni}. {Ten} and {ven} are the regular subjunctive forms, not the imperative.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ide} and {amai-vos} keep the pronoun explicit: {ide} is the old plural of {vai} without {vai-vos}, and {amai-vos} keeps the reflexive {vos} that modern Portuguese lost. Rendering them as {vão} and {amem} loses both pronouns.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        '{Ide por todo o mundo} is a biblical phrasing; present-day Portuguese says “vão e façam discípulos”. What is lost is the pronoun, not the sense.',
      ),
    },
    {
      label: T('Choosing the register'),
      text: T(
        'In a text aimed at a European audience {falai} and {ide} are natural; in one for Brazil, {falem} and {vão}. That is a choice of register, and Greek does not decide which of the two is right.',
      ),
    },
  ],
  examples: [
    { text: 'Fala, e ninguém te ouve.', gloss: T('{tu} imperative: present {fala}.') },
    { text: 'Fale a verdade.', gloss: T('{você} imperative: subjunctive {fale}.') },
    { text: 'Não fales isso.', gloss: T('Negative: {não} plus subjunctive {fales}.') },
    { text: 'Ide por todo o mundo.', gloss: T('Old Portuguese plural, pronoun omitted.') },
    { text: 'Amai-vos uns aos outros.', gloss: T('The explicit {vos} is what makes it mutual.') },
    { text: 'Crede em Cristo.', gloss: T('Current Portuguese plural: {crede}, without {vós}.') },
    {
      text: 'Tem olho para quem está.',
      gloss: T('{tem}: irregular imperative of {ter}, Latin {tene}.'),
    },
    { text: 'Vem e vê.', gloss: T('{vem}: irregular imperative of {vir}, Latin {veni}.') },
    {
      text: 'Não vos esqueçais uns dos outros.',
      gloss: T('Negative plural with an explicit pronoun.'),
    },
  ],
  tables: [
    {
      caption: T('Imperative by person and register'),
      head: ['Pessoa', 'Afirmativo', 'Negativo'],
      rows: [
        ['tu', 'fala', 'não fales'],
        ['você', 'fale', 'não fale'],
        ['plural (Portugal antigo)', 'falai', 'não falais'],
        ['plural (Brasil)', 'falem', 'não falem'],
      ],
    },
    {
      caption: T('The two irregulars no rule produces'),
      head: ['Imperativo', 'Latim', 'Regular seria'],
      rows: [
        ['tem', 'tene', 'tenha'],
        ['vem', 'veni', 'venha'],
      ],
    },
    {
      caption: T('Pronoun: explicit and implied'),
      head: ['Forma', 'Pronome', 'O que se perde'],
      rows: [
        ['ide', 'implícito', 'o {vai} plural'],
        ['amai-vos', 'explícito (-vos)', 'o mutual'],
        ['falem', 'implícito', 'o {vocês}'],
      ],
    },
  ],
};
