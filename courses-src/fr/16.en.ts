import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('The passé composé'),
  subtitle: T(
    '{avoir} or {être} in the present + past participle — the only conversational way to talk about the past',
  ),
  section: T('The verbs'),
  body: C(`## The formula

The passé composé is a **construction**, not a morphological tense. It is always assembled from the same three pieces: an auxiliary in the present indicative, the **past participle** of the main verb, and possibly a noun that goes with it.

In short: **auxiliary (present) + past participle**. Nothing else. What varies from verb to verb is (a) which auxiliary and (b) which participle.

| Main verb | Sentence | Gloss |
|---|---|---|
| parler | j’ai parlé | I spoke |
| {avoir} (aux.) | j’ai eu peur | I was afraid |
| aller | je suis allé | I went |
| se laver | je me suis lavé | I washed myself |

Note something important: in {j’ai eu peur} the {avoir} is the auxiliary and {eu} the participle, not the reverse. The word {peur} «fear» sits in the middle, and the phrase translates literally as «I had fear».

## The two auxiliaries

The auxiliary is **not** chosen by the subject or the object: it is chosen by the **main verb**. The practical rule:

- {avoir} in the overwhelming majority of cases;
- {être} with verbs of **movement** and of **change of state**: {aller, venir, arriver, partir, sortir, entrer, monter, descendre, rester, tomber, naître, mourir, passer};
- {être} with **all pronominal verbs**: {se lever, s’appeler, se tromper, se méfier}.

The {être} list has a French mnemonic: **devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, retourner, tomber, rentrer, arriver, mourir, partir**. Sixteen verbs, almost all third-conjugation — {partir, sortir, entrer, monter, descendre, rester, tomber, revenir, devenir, rentrer, retourner} plus {aller, venir, naître, mourir, arriver}. The pattern is obvious: most are verbs of movement, and the few that are not are verbs of change of state.

The list has gaps and overflows, which is why nobody relies on it alone:

- {monter} and {descendre} take {être} when they go from one place to another ({je suis monté} «I went up») and {avoir} when they change a state ({j’ai monté la bagage} «I loaded the suitcase»);
- {sortir} takes {être} when it means «to go out» ({il est sorti}) and {avoir} when it means «to take something out» ({il a sorti son billet} «he took out his ticket»);
- {entrer} and {rentrer} take {avoir} in certain constructions ({j’ai entré la voiture} «I drove in»);
- {passer} can take both: {je suis passé chez lui} «I went by his place» (movement) and {j’ai passé l’après-midi} «I spent the afternoon» (duration).

So the list tells you where to start, but **meaning** decides. Whenever a verb sits in the grey zone, ask: «did the sense change the state of the subject?»

## Irregular participles

The second problem is the participle. First-group verbs form it in {-é} ({parlé}, {aimé}, {chanté}), second-group verbs in {-i} ({fini}, {choisi}, {réussi}), third-group verbs in {-u} ({vendu}, {attendu}, {répondu}). And about twenty follow no rule at all:

| Infinitive | Irregular participle |
|---|---|
| être | été |
| avoir | eu |
| faire | fait |
| dire | dit |
| prendre | pris |
| mettre | mis |
| voir | vu |
| vouloir | voulu |
| pouvoir | pu |
| devoir | dû |
| écrire | écrit |
| lire | lu |
| savoir | su |
| boire | bu |
| recevoir | reçu |

The good news is that almost all the irregulars are third-group, meaning they end in {-re} in the infinitive. And one rule covers half of them: when the stem ends in {v}, the participle is usually the stem alone, without {u}: {mouvoir → mû}, {pleuvoir → plu}, {recevoir → reçu}, {devoir → dû}. In short, memorise the list; the rule is a net, not a system.

## Agreement of the participle

Here is the rule that learners abuse most: the participle agrees **only with {être}**, and only when the participle is an **adjective**.

With {avoir}, the participle is **invariable**, even when the object comes first:

- {les lettres que j’ai écrites} ✗ → the correct form is {les lettres que j’ai écrit};
- {les photos que j’ai prises} ✗ → the correct form is {les photos que j’ai pris};
- {les fleurs qu’il a achetées} ✗ → the correct form is {les fleurs qu’il a acheté} with no {s}.

With {être}, the participle agrees with the **subject**: {elle est arrivée}, {ils sont venus}, {elles sont parties}. And when the object precedes the verb, the participle agrees with the **object** instead of the subject — which is the case above and is why the {s} there would be wrong twice over.

Three situations, three rules:

1. **{être} + subject.** The participle agrees with the subject: {je suis parti / elle est partie / ils sont partis / elles sont parties}.
2. **{avoir} + fronted object.** The participle agrees with the object **if** the verb is third-group **and** the subject is {je}, {tu}, {on} or {qui}: {les lettres que j’ai écrites} ✓, because the subject is {je} and {écrire} is third-group. The same sentence with another subject loses the {s}: {les lettres qu’il a écrit} (he wrote) and {les lettres qu’elle a écrit}.
3. **{pronominal}.** The participle agrees with the subject **when the pronoun {se} is direct**: {elle s’est levée} «she got up», {ils se sont parlé} «they spoke to each other». If the pronoun {me, te, nous, vous} is indirect, there is no agreement: {elle s’est lavé les mains} «she washed her hands». And {elle s’est lavé} «she washed herself» agrees, because there the {se} is direct — the subject performs the action on itself.

Careful: in {elle s’est lavé les mains}, the {se} is indirect because another object ({les mains}) stands beside it, and the participle stays masculine singular — the {se} is in charge. In {elle s’est lavé}, the {se} is direct, because the subject does the action to itself, and the {é} is her own feminine ending.

When {se} is indirect there is a pronunciation trick: the {t} of the auxiliary **sounds** before the {s} of {se}, and it is that {s} you hear: {elle s’est lavé} sounds like {elle sé lavé}, {ils se sont parlé} sounds like {ils se son parlé}. The sound lies; the spelling does not.

## Pronominal verbs

They deserve a paragraph of their own, because they cause a lot of confusion. A pronominal verb has {se} (or {me, te, nous, vous, se}) before the auxiliary: {se lever}, {s’appeler}, {se rendre compte}, {se plaindre}. The {se} is a pronoun, not an indefinite one: it stands for the subject or the object.

There are two values of {se}:

- **reflexive** — the action falls on the subject: {elle se lave} «she washes herself»;
- **pronominal** — the action falls on someone else, but the verb is pronominal for historical reasons: {elle se lave les mains} «she washes her hands», {elle s’appelle la porte} «she locks the door».

In every case the auxiliary is {être}: {je me suis levé}, {tu t’es reposé}, {il s’est trompé}, {nous nous sommes rencontrés}, {vous vous êtes agenouillés}, {ils se sont parlé}.

## Application: the Bible text

The Segond text sets the passé composé in three different functions, and it is worth keeping the three apart.

**(a) Narrative action, the past par excellence.** {Et le Verbe s’est fait chair, et il a habité parmi nous} (John 1:14) — {s’est fait} is {être} with a pronominal verb, {a habité} is {avoir} with a second-group verb. Both auxiliaries in one verse.

{Dieu a tant aimé le monde qu’il a donné son Fils unique} (John 3:16) — two {avoir}, with the irregular participles {aimé} and {donné}.

**Jésus est né à Bethléem** (Matthew 2:1) — {est né} with {être}, and the regular participle {né} «born», which you cannot classify without help; the context is enough.

**Puis il est mort, et a été enseveli** — {est mort} and {a été enseveli}: the same verb {être} as the main verb in the first case, and as the **participle** in the second. {a été} is the first passé composé form you ever saw: {avoir} plus {été}.

**(b) Continued past, an unfinished state that lasts.** {Ceux qui ont faim et soif de la justice} (Matthew 5:6) — {ont} is present, not past; the same {ont faim} you learned with {avoir}.

{Vous avez les paroles de la vie éternelle} (John 6:68) — {avez} is present: «you have», not «you had».

**(c) Law and history, the past of record.** {C’est pourquoi la loi a été donnée par Moïse} — {a été donnée} is {avoir} plus {été}, the pluperfect, which French builds as a passé composé of {avoir} with {été} (or of {être} with {eu}, in fixed phrases).

**La Pâque a été mangée** — the same scheme: «the Passover was eaten», with {été} standing in the participle slot.

None of these forms is a new tense: they are all auxiliary plus participle. What changes is the **verb** occupying the participle slot, which is why the same {a été} can mean «there was», «is» or «must have been».

## What to take away

The passé composé is present auxiliary plus past participle. The auxiliary follows the main verb: {avoir} almost always, {être} with movement, change of state and pronominals. The list of sixteen is a shortcut, not a law: in doubt, ask for the **meaning** of the verb, not the letter of its name. The participle with {avoir} is invariable; with {être} it agrees with the subject; with a direct pronoun it also agrees; with an indirect pronoun it does not.`),
  vocab: [
    V('parlé', 'parler', 'spoken (1st group participle)'),
    V('fini', 'finir', 'finished (2nd group participle)'),
    V('vendu', 'vendre', 'sold (3rd group participle)'),
    V('eu', 'avoir', 'had (irregular participle)'),
    V('été', 'être', 'been (irregular participle)'),
    V('fait', 'faire', 'done; made (irregular participle)'),
    V('pris', 'prendre', 'taken (irregular participle)'),
    V('vu', 'voir', 'seen (irregular participle)'),
    V('écrit', 'écrire', 'written (irregular participle)'),
    V('reçu', 'recevoir', 'received (irregular participle)'),
    V('suis allé', 'aller', 'I went (auxiliary {être})'),
    V('est née', 'naître', 'she was born (feminine, with agreement)'),
    V('se laver', 'laver', 'to wash oneself (pronominal verb)'),
    V('s’est levé', 'lever', 'he got up (direct pronominal)'),
    V('s’est lavé les mains', 'laver', 'she washed her hands (indirect pronominal)'),
    V('a été', 'être', 'had been (pluperfect)'),
    V('a eu peur', 'avoir', 'was afraid (auxiliary + participle + noun)'),
    V('DR MRS VANDERTRAMP', 'être', 'mnemonic list of {être} verbs'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Why does «{je suis monté}» («I went up») take {être}, while «{j’ai monté la voiture}» («I got into it») takes {avoir}?',
    ),
    options: [
      T('The auxiliary tracks whether the subject changed place, not whether the action was done'),
      T('Because {monter} is a second-group verb, and second-group verbs always take {être}'),
      T(
        'Because an object ({la voiture}) follows the verb, and with an object the auxiliary becomes {avoir}',
      ),
      T('Because «montre» is a noun and nouns take {avoir}'),
    ],
    answer: 0,
    hint: T(
      'Test the sense: was there **movement** of the subject, or only an **action on something**?',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Rewrite with feminine subject agreement: «il est venu» → «elle est ___»'),
      answer: 'venue',
      hint: T(
        '{venu} gains a final {e}: the participle agrees with the subject because the auxiliary is {être}.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('{les lettres qu’il a écrit} — he wrote the letters'),
        T('{les lettres qu’il a écrites} — with a fronted object and {avoir}, no {s}'),
        T('{elle s’est lavé les mains} — indirect pronoun, no agreement'),
        T('{elle s’est lavée les mains} — only a direct {se} agrees'),
      ],
      answer: 0,
      hint: T(
        'With {avoir}, the participle is invariable. Think of the participle, not the verbal person.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its past participle'),
      pairs: [
        { a: T('être'), b: T('été') },
        { a: T('faire'), b: T('fait') },
        { a: T('prendre'), b: T('pris') },
        { a: T('voir'), b: T('vu') },
        { a: T('recevoir'), b: T('reçu') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The passé composé is an auxiliary in the **present indicative** plus a **past participle**. No form changes that order.',
      ),
    },
    {
      n: '2',
      text: T(
        'The auxiliary is chosen by the **main verb**, never by the subject: {avoir} almost always; {être} with movement, change of state and all pronominals.',
      ),
    },
    {
      n: '3',
      text: T(
        'Participles take {-é} in the first group, {-i} in the second, {-u} in the third; about twenty are irregular and all belong, almost without exception, to the third group.',
      ),
    },
    {
      n: '4',
      text: T(
        'With {avoir} the participle is **invariable**. With {être} it agrees with the subject. With a direct pronoun {se} it also agrees; with an indirect one ({me, te, nous, vous}) it does not.',
      ),
    },
    {
      n: '5',
      text: T(
        'The list of sixteen {être} verbs is a memory shortcut, not a rule: {monter, descendre, sortir, entrer, passer} change auxiliary according to the **sense** they take.',
      ),
    },
  ],
  notes: [
    {
      label: T('The participle can be a noun'),
      text: T(
        'In {j’ai eu peur}, {eu} is the participle of {avoir} and {peur} a common noun. The same pattern appears in {j’ai faim}, {j’ai soif}, {j’ai raison}, {j’ai tort}, {j’ai besoin} and {j’ai envie}. That is why French keeps the article: the noun needs one. Compare {j’ai peur} and {j’ai la peur} — the latter is «I am afraid of something specific».',
      ),
    },
    {
      label: T('The sound lies, the spelling does not'),
      text: T(
        'In indirect pronominals, the {t} of the auxiliary {s’est} in {lavé} is pronounced before the {s} of the pronoun, so you hear {sé}. That is why speakers coming from Portuguese and Spanish tend to write {elle s’est lavée} by ear. The written {lavé} without the {e} is the correct form precisely because the {se} was indirect.',
      ),
    },
  ],
  examples: [
    { text: 'j’ai parlé', gloss: T('I spoke (regular, 1st group)') },
    { text: 'j’ai eu peur', gloss: T('I was afraid (auxiliary + participle + noun)') },
    { text: 'je suis allé', gloss: T('I went (movement, auxiliary {être})') },
    { text: 'elles sont parties', gloss: T('they left (participle agreement)') },
    { text: 'il a mangé les pommes', gloss: T('he ate the apples (invariable participle)') },
    {
      text: 'les pommes que j’ai mangées',
      gloss: T('the apples I ate ({je} + 3rd group: with {s})'),
    },
    { text: 'elle s’est levée', gloss: T('she got up (direct {se}, agrees)') },
    { text: 'elle s’est lavé les mains', gloss: T('she washed her hands (indirect pronoun)') },
    { text: 'a été', gloss: T('was (participle of {être} with {avoir}: pluperfect)') },
  ],
  tables: [
    {
      caption: T('Table 1 — passé composé formation by group'),
      head: [T('Group'), T('Ending'), T('With {avoir}'), T('With {être}')],
      rows: [
        [T('1st (-er)'), '-é', 'j’ai parlé', 'je suis allé'],
        [T('2nd (-ir)'), '-i', 'j’ai fini', T('—')],
        [T('3rd (-re)'), '-u', 'j’ai vendu', 'je suis venu'],
        [T('irregular'), T('—'), 'j’ai eu', 'je suis né'],
        [T('pronominal'), T('—'), T('—'), 'je me suis levé'],
      ],
    },
    {
      caption: T('Table 2 — participle agreement'),
      head: [T('Situation'), T('Example'), T('Agrees?')],
      rows: [
        [T('{avoir}, ordinary subject, object after'), T('{il a mangé les pommes}'), T('no')],
        [
          T('{avoir}, subject {je/tu/on/qui}, object before'),
          T('{les pommes que j’ai mangées}'),
          T('yes'),
        ],
        [T('{avoir}, another subject, object before'), T('{les pommes qu’il a mangé}'), T('no')],
        [T('{être}, no object'), T('{elle est arrivée}'), T('with the subject')],
        [T('{pronominal}, direct {se}'), T('{elle s’est levée}'), T('with the subject')],
        [T('{pronominal}, indirect pronoun'), T('{elle s’est lavé les mains}'), T('no')],
      ],
    },
  ],
};
