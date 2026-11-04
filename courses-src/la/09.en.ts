import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Personal and reflexive pronouns'),
  subtitle: T('{ego, tu, is, nos} — and the {se} that renders a whole Greek clause'),
  section: T('Pronouns and sentence syntax'),
  body: C(`## The three persons

Latin has personal pronouns for three persons, in six forms each — exactly like Portuguese. What changes is the case:

| | I | you | he/she | we | you | they |
|---|---|---|---|---|---|---|
| nom. | ego | tu | is, ea | nos | vos | eī, eae |
| acc. | mē | tē | eum, eam | nōs | vōs
| abl. | mē | tē | eō, eā | nōbīs | vōbīs | eīs, eīs |

{Is, ea, id} is the starting point: Latin, like Portuguese, has no grammatical gender in the pronoun. Gender comes from the referent — {is} may be «he» or «she», {eum} may be «the man» or «the city» (in which case {eam}).

Notice that {eis} serves both dative and ablative, and that the plural {eī} and {eīs} are identical. That is why context does all the work: in {Deus est lux vobis} the {vobis} is dative; in {Deus est lux apud vos} it is ablative.

## Ego sum via veritas et vita

The Gospel of John places the pronoun {ego} at the head of the seven great declarations of Jesus, and the Greek εγώ is emphatic by nature. Latin usually achieves the same effect through word order, but the Vulgate keeps the initial position, because {ego} in Latin is **not emphatic**: it is simply the first-person pronoun.

{Ego sum via veritas et vita} «I am the way, the truth and the life» (John 14:6);
{Ego sum lux mundi} «I am the light of the world» (John 8:12).

The {sum} here is plain {sum}, without {ei}: in Latin the pronoun {ego} does away with the copula. Compare Greek, which would have ἐγώ εἰμι.

## The reflexive pronoun {se}

Latin has a single reflexive pronoun for all three persons: {se}, from {sui}, and it is always **accusative**: {se} or {sē} (which differ only when the pronoun stands alone). It can only have the subject as antecedent:

{Pueri {se} amant} — the boys love **themselves**;
{Pueri {se} amant} — the boys are loved **by one another** (Latin allows both readings!);
{Pueri {sē} vetant} — the boys forbid themselves (here {e} is long, syncopated).

Latin does the same thing with an indirect pronoun, {sibi}, which governs the dative:

{Pueri {sibi} cavas faciunt} «the boys make ditches for themselves».

## What the {se} does in the Vulgate

The Latin {se} is more powerful than its Greek antecedent. Compare:

{ἐὰν οὐκ ἀποστείλῃ τὴν υἱὸν} → {Si non miserit Filium suum}
{ἀπέστειλεν ὁ θεὸς τὸν υἱὸν αὐτοῦ} → {Misit Deus Filium suum}

In the first verse the Greek has the **aorist subjunctive**; in the second the **aorist indicative**. The Vulgate does not distinguish them: it writes {miserit} in both. The Latin reader has to recover the mood from context, because the form is identical. That is Latin's genius and its limit at once: one form for two values.`),
  vocab: [
    V('ego', 'ego', 'I'),
    V('tu', 'tu', 'you (sing.)'),
    V('is', 'is', 'he'),
    V('ea', 'ea', 'she'),
    V('id', 'id', 'it'),
    V('eos', 'is', 'them (masc. acc.)'),
    V('eis', 'is', 'to them, for them'),
    V('nos', 'nos', 'we'),
    V('vobis', 'vos', 'to you (pl.)'),
    V('sui', 'sui', 'of himself, his'),
    V('sibi', 'sibi', 'for himself, to himself'),
    V('se', 'se', 'himself (reflexive)'),
    V('meus', 'meus', 'my'),
    V('tuus', 'tuus', 'your (sing.)'),
    V('suus', 'suus', 'his, her, its'),
    V('eius', 'eius', 'his, her, of it'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus est lux vobis}, what does {vobis} express?'),
    options: [
      T('Dative: «to you» — {lux} is the object'),
      T('Ablative: «with you»'),
      T('Nominative: «you are»'),
      T('Genitive: «of you»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the restriction on the reflexive pronoun {se}?'),
      options: [
        T("It can only have the clause's subject as antecedent"),
        T('It can only appear in the plural'),
        T('It can never be dative'),
        T('It needs an explicit nominal antecedent'),
      ],
      answer: 0,
      hint: T('Rule §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Dative plural of {tu} (you): vo_ _'),
      answer: 'vobis',
      hint: T('It is the form in {Deus est lux vobis}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the case'),
      pairs: [
        { a: T('eum'), b: T('masculine accusative singular') },
        { a: T('eis'), b: T('dat. or abl. plural') },
        { a: T('eae'), b: T('feminine nominative plural') },
        { a: T('sibi'), b: T('reflexive dative: «for himself»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Latin marks no gender in the pronoun: {is} covers he and she; gender comes from the referent.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eis}, {eis} and {eis} serve both dative and ablative plural; only the verb says which.',
      ),
    },
    {
      n: '3',
      text: T(
        "The reflexive {se} is always accusative and can only reflect the clause's own subject.",
      ),
    },
    {
      n: '4',
      text: T(
        'The indirect reflexive is {sibi} and governs the dative: {sibi} facere «to do for oneself».',
      ),
    },
    {
      n: '5',
      text: T(
        'The third-person possessive is {suus} for the subject and {eius} for a non-subject referent.',
      ),
    },
  ],
  notes: [
    {
      label: T('sui vs eius:'),
      text: T(
        'Rendering «his» always as {suus} is a common error. In {Ego sum via veritas et vita} the {sua} is {suus}, because the referent is the subject; in {Amavit verbum suum} the referent may be someone else, and Latin writes {eius}.',
      ),
    },
    {
      label: T('Loss of mood:'),
      text: T(
        'Latin merges the Greek aorist indicative and aorist subjunctive into a single form ({miserit}). This is called *syncretism* and is common to all of Latin. The practical consequence: in a conditional like {Si non venerit, non videbit}, only the translation tells you whether it is a condition or a narration.',
      ),
    },
  ],
  examples: [
    { text: 'ego', gloss: T('I (nominative)') },
    { text: 'tu', gloss: T('you (nominative)') },
    { text: 'is', gloss: T('he (masc. nominative)') },
    { text: 'eum', gloss: T('him (accusative masculine)') },
    { text: 'eis', gloss: T('to them (dat.); of/with them (abl.)') },
    { text: 'vobis', gloss: T('to you (dat.) / with you (abl.)') },
    { text: 'se', gloss: T('himself, themselves (acc.)') },
    { text: 'sibi', gloss: T('for himself (dative)') },
    { text: 'sui', gloss: T('of himself, his (genitive)') },
    { text: 'Ego sum via veritas et vita', gloss: T('«I am the way, the truth and the life»') },
  ],
  tables: [
    {
      caption: T('Table 1 — Personal pronouns'),
      head: [T('Person'), T('1st'), T('2nd'), T('3rd masc.'), T('3rd fem.')],
      rows: [
        ['Nom.', 'egŏ', 'tŭ', 'is', 'eă'],
        ['Acu.', 'mē', 'tē', 'eum', 'eam'],
        ['Abl.', 'mē', 'tē', 'eō', 'eā'],
      ],
    },
    {
      caption: T('Table 2 — Possessive pronouns'),
      head: [T('Person'), T('Singular'), T('Plural'), T('Example')],
      rows: [
        [
          T('1st person'),
          'meŭs, mea, meum',
          'noster, nostra, nostrum',
          '{Filium} meum «meu Filho»',
        ],
        [T('2nd person'), 'tuŭs, tua, tuum', 'vester, vestra, vestrum', '{Pater} tuus «teu Pai»'],
        [T('3rd person'), 'suŭs, sua, suum', 'eius, eorum, earum', '{Verbum} suum «sua Palavra»'],
      ],
    },
  ],
};
