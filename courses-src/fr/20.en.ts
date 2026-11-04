import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('The imperative'),
  subtitle: T('{parle, parlons, parlez} — order, request, advice and recipe'),
  section: T('The verbs'),
  body: C(`## Only three persons

The imperative is the only mood of the language with no full present: there are exactly **three** forms, one for {tu}, one for {nous}, one for {vous}. No person has two forms, as in Portuguese, and there is no form for {je}, {il} or {ils}.

The morphological rule is simpler than it looks: for the {-er}, {-ir} and {-re} groups, the {nous} form is the present without {s} ({parlons}) and the {vous} form is the present without {s} ({parlez}). For {tu}, it is almost always the present minus the ending of {-er} ({parle}, {finis}, {prends}).

| Infinitive | tu | nous | vous |
|---|---|---|---|
| parler | parle | parlons | parlez |
| finir | finis | finissons | finissez |
| prendre | prends | prenons | prenez |
| vendre | vends | vendons | vendez |
| attendre | attends | attendons | attendez |

Note the asymmetry: {vous} never takes {s}, but the {tu} of {-er} verbs loses it only because of rule §2. There is a single point where {vous} resembles {tu} — in {être}, {avoir} and {savoir} — and it is the only place in the language where the two of them coincide.

## The optional -{s} of {tu}

This is the most celebrated quirk of French, and it was already in Latin: {parle} and {parles} are **the same form**, pronounced in different ways.

The rule is a single one: {-er} verbs drop the {s} of {tu} **before a word beginning with a vowel or a mute {h}** — {parle}, {mange}, {prie}, {écoute}, {aide}. Before a consonant or at the end of the sentence, the {s} comes back and is voiced like the {s} of {le}: {parles}, {manges}, {pries}.

| Context | Form | Pronunciation |
|---|---|---|
| {Parle} | without {s} | {paʁl} |
| {Tu parles} | with {s} | {ty paʁl} |
| {Parle-moi} | without {s} | {paʁl mwa} |
| {Tu parles bien} | with {s} | {ty paʁl bjɛ̃} |

In practice, nearly everyone leaves the {s} out in writing. That is the *orthographe rectifiée*, adopted in 1990 by the Académie française. The liaison *-* before {y} is that same {s}: {Dis-y}, {Va-t-en}.

## The negative imperative

The negative is easier than it looks, because negation **does not change the form**: {ne} goes in front and {pas} goes behind, and the verb stays untouched.

- {Ne parle pas} — two nasal syllables and the verb, that is all
- {Ne viens pas}, {Ne fais pas}, {Ne prends pas}
- {N’y pense pas} — the {y} swallows the {ne}

The only complication is that in the imperative the {ne} is rare in the everyday speech of much of Europe, yet obligatory in the norm.

## Pronouns and hiatus

In the affirmative, pronouns come **after** the verb and join it with a hyphen, because the verbal ending is nasal and sounds like a consonant, so the meeting would be impossible ({donne-mo} is unpronounceable; what you hear is {donnemo}, with the {e} swallowed).

| Type | Examples | Position |
|---|---|---|
| Direct object | {donne-moi}, {dis-lui}, {levez-la} | after the verb |
| Indirect object | {parle-nous}, {réponds-lui} | after the verb |
| Pronoun + {y} | {donnez-m’en} | before the {y} |

In the negative, with the two-word form {ne … pas}, pronouns **rise** to before the verb: {Ne me donne pas}, {Ne lui parle pas}. With the one-word form ({ne … point}, {ne … jamais}, {ne … rien}), the verb takes the negative form and the pronouns stay glued to it: {Ne lui donnez point}, {Ne me parlez jamais}, {Ne me donnez rien}.

## Irregular verbs

The two most frequent verbs in the language break the rule. It is worth learning both in full:

| Infinitive | tu | nous | vous |
|---|---|---|---|
| être | sois | soyons | soyez |
| avoir | aie | ayons | ayez |
| savoir | sache | sachons | sachiez |
| vouloir | veuille | veuillons | voulez |

The rest of this lesson is application. In a Segond Bible reading, the imperative is the mood par excellence: it is what gives the laws, the commandments and the advice. In {Tu ne convoiteras pas}, the future {convoiteras} — future or conditional, either reading works — comes before the {pas}: the whole {ne … pas} stands *between* subject and verb, and the verb lands in last position. That is the exact French order:

1. subject pronouns
2. {ne}
3. conjugated verb
4. {pas, jamais, rien, plus, point}
5. indirect pronouns

Notice that {ne} and {pas} **surround** the verb, and that indirect pronouns sit after {pas}, glued to it. In {Ne nous parle pas}, the {pas} governs {nous}: it sticks to the pronoun, not to the verb. And every negative imperative inherits negation from Latin {ne … pas} — no older Romance language kept the double ring.`),
  vocab: [
    V('parle', 'parler', 'speak (imperative tu, no {s})'),
    V('parlez', 'parler', 'speak (imperative vous)'),
    V('parlons', 'parler', "let's speak"),
    V('ne parle pas', 'parler', "don't speak"),
    V('prends', 'prendre', 'take (imperative, irregular)'),
    V('donne-moi', 'donner', 'give me (direct object after the verb)'),
    V('dis-lui', 'dire', 'tell him (indirect object, hyphen required)'),
    V('donnez-m’en', 'donner', 'give me some of it (pronoun plus {y})'),
    V('sois', 'être', 'be (irregular)'),
    V('soyez', 'être', 'be (irregular, vous)'),
    V('ayez', 'avoir', 'have (irregular)'),
    V('ne me parle pas', 'parler', "don't speak to me (pronouns rise in the negative)"),
    V('ne lui donnez rien', 'donner', 'give him nothing ({ne … rien} form)'),
    V('n’y pense pas', 'penser', "don't think about it"),
    V('tu ne convoiteras pas', 'convoiter', 'you shall not covet (the tenth commandment)'),
    V('va-t-en', 'aller', 'go away (hyphen is the {tu} {s})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In «{Ne me parle pas}», why does {me} come before the verb instead of after it as in the affirmative?',
    ),
    options: [
      T('Because the two-word negative ({ne … pas}) pushes the pronouns in front of the verb'),
      T('Because {me} stops being a pronoun and becomes an indefinite article'),
      T('Because the negative imperative requires {vous} instead of {tu}'),
      T('Because after {ne} there is never a hyphen nor an indirect pronoun'),
    ],
    answer: 0,
    hint: T(
      'Rule §3: with {ne … pas} the pronouns rise; with {ne … rien}/{ne … jamais} they stay glued to the verb.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperative of {être} in «vous ___ amis» (address to God): s___z'),
      answer: 'oyez',
      hint: T('It is the irregular {vous} form of {être}, without the {x}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to the value of its ending'),
      pairs: [
        { a: T('parlons'), b: T('1st pl. — inclusive: «let’s speak»') },
        { a: T('parlez'), b: T('2nd pl. — politeness or group: «speak»') },
        { a: T('sois'), b: T('2nd sing. irregular of {être}') },
        { a: T('ayez'), b: T('2nd pl. irregular of {avoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence applies the {tu} {-s} correctly?'),
      options: [
        T('{Tu parles?} — {s} before {q}, which is a consonant'),
        T('{Prie pour nous} — no {s}, because {nous} follows'),
        T('{Parle?} — no {s}, because the sentence ends there'),
        T('{Écoute-moi} — no {s}, because {moi} is a filler word'),
      ],
      answer: 0,
      hint: T(
        'The {s} comes back when the next word starts with a consonant, and drops when it starts with a vowel or mute {h}.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The imperative has **three** forms: {tu}, {nous}, {vous}. For {nous} and {vous} it is the present without {s}; for {tu} it is the present minus the {-er} ending. There is no form for {je}, {il} or {ils}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{-er} verbs in the {tu} singular drop the {s} before a vowel or mute {h}: {parle}, {mange}, {aide}. Before a consonant or at the pause, the {s} returns, voiced: {tu parles}, {tu manges}.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the affirmative pronouns stay **after** the verb, joined by a hyphen: {donne-moi}, {dis-lui}, {donnez-m’en}. In the two-word negative they rise in front of the verb: {Ne me donne pas}. In the one-word negative they stay glued: {Ne me donnez rien}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The negative does not alter the verb: {ne} goes in, {pas} comes out, nothing else. {Ne parle pas}, {Ne viens pas}, {N’y pense pas} — with {y}, the {ne} becomes {n’}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Learn the irregulars {être} ({sois, soyons, soyez}) and {avoir} ({aie, ayons, ayez}): they are the most frequent forms of the whole mood, and they show up in {Sois{,} le Bien,} «Be, the Good» and in {Ayez de la compassion} «Have compassion».',
      ),
    },
  ],
  notes: [
    {
      label: T('The hyphen is a sound, not punctuation'),
      text: T(
        'In {donne-moi} the hyphen marks an {e} that disappears in speech: you hear {donnemoi}, with the {e} of {donne} swallowed by the nasal. That is why the hyphen is not decorative — without it, the writing would describe {donnemo i}, which nobody pronounces. The same happens with the {s} of {tu}: {parle} and {parles} are the same word written two ways, and the hyphen of {va-t-en} is that {s} meeting {y}. French spelling is, to a large extent, phonetic transcription disguised as a norm.',
      ),
    },
    {
      label: T('The commandment that does not translate'),
      text: T(
        'The Ten Commandments in Segond mix two moods. «Tu n’auras pas d’autres dieux» carries {n’auras} — future/conditional of {avoir} — and «Tu ne convoiteras pas» carries {convoiteras}. In both, the verb sits last and {ne … pas} surrounds it: Latin {-ne … pas} carried over without moving a comma. The old controversy about «correcting» {ne … pas} into {pas … point} shows the same thing. And the ninth and tenth commandments, in the Segond text, come entirely in the mood we have just studied.',
      ),
    },
  ],
  examples: [
    { text: 'Parle.', gloss: T('speak! ({s} dropped)') },
    { text: 'Écoute-moi bien.', gloss: T('listen to me closely (pronoun after the verb)') },
    { text: 'Ne prions pas.', gloss: T('let us not pray (inclusive plural)') },
    { text: 'Dis-lui la vérité.', gloss: T('tell him the truth ({dire} plus indirect object)') },
    { text: 'N’y touche pas.', gloss: T("don't touch that ({ne} swallowed by {y})") },
    { text: 'Donnez-m’en deux.', gloss: T('give me two ({donner} plus {m’} plus {en})') },
    {
      text: 'Priez pour vos Enemis.',
      gloss: T('pray for your enemies ({pour} governing the infinitive)'),
    },
    {
      text: 'Ayez de la compassion.',
      gloss: T('have compassion (irregular imperative of {avoir})'),
    },
    { text: 'Va-t-en.', gloss: T('go away ({va} plus {t’} plus {en})') },
    {
      text: 'Tu ne convoiteras pas.',
      gloss: T('you shall not covet (tenth commandment, verb last)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — how the imperative is built'),
      head: [T('Group'), T('tu'), T('nous'), T('vous')],
      rows: [
        ['parler', 'parle', 'parlons', 'parlez'],
        ['finir', 'finis', 'finissons', 'finissez'],
        ['vendre', 'vends', 'vendons', 'vendez'],
        ['être', 'sois', 'soyons', 'soyez'],
        ['avoir', 'aie', 'ayons', 'ayez'],
        ['savoir', 'sache', 'sachons', 'sachiez'],
        ['vouloir', 'veuille', 'veuillons', 'voulez'],
        ['prendre', 'prends', 'prenons', 'prenez'],
      ],
    },
    {
      caption: T('Table 2 — pronoun position in the imperative'),
      head: [T('Context'), T('Order'), T('Example'), T('Gloss')],
      rows: [
        [
          T('affirmative'),
          'verbo + hífen + pronomes',
          T('{donne-moi le livre}'),
          T('give me the book'),
        ],
        [
          T('negative {ne … pas}'),
          '{ne} + pronomes + verbo + {pas}',
          T('{Ne me donne pas le livre}'),
          T("don't give me the book"),
        ],
        [
          T('negative {ne … rien}'),
          '{ne} + verbo negativo + pronomes',
          T('{Ne me donnez rien}'),
          T('give me nothing'),
        ],
        [
          T('with {y}'),
          'verbo + hífen + pronome + {y}',
          T('{Donnez-m’en}'),
          T('give me some of it'),
        ],
        [
          T('with {ne} + {y}'),
          '{N’} + verbo + {pas}',
          T('{N’y touche pas}'),
          T("don't touch that"),
        ],
      ],
    },
  ],
};
