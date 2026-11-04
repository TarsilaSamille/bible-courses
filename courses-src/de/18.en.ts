import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Present-tense conjugation'),
  subtitle: T('ich, du, er — and the secret is at the end'),
  section: T('The verbs'),
  body: C(`## The person hides at the end

Portuguese says "I speak" and the verb ending stays visible. German says {ich spreche} and the pronoun has absorbed the information: there is no longer any person ending. Who performs the action has migrated into the **ending**.

That is why the present tense is the cheapest form in the system: look at the end of the verb and you know who acts. It is also why it is so worn out. {Ich spreche} and {sie sprechen} can mean "I speak" and "they speak" — and, in a text about a manuscript, "is spoken". Context decides.

## The regular verb

Take {machen} «to do», drop the {en} of the infinitive: what is left is {mach-}. Now add the present endings:

- {ich mach-e} «I do»
- {du mach-st} «you do»
- {er / sie / es mach-t} «he does»
- {wir mach-en} «we do»
- {ihr mach-t} «you do»
- {sie / Sie mach-en} «they / you do»

Three short rules and one exception cover everything:

**1. The {e} appears only in the first person singular.** {ich spreche}, {ich mache}, {ich lerne}. In the other forms it disappears: {du sprichst}.

**2. After {s} or {ß}, the {e} is dropped.** {du heißt} «you are called», {er reist} «he travels».

**3. If the stem ends in {d} or {t}, an {e} is inserted before the ending.** {du arbeitest}, {ihr findet}, {er wartet}, {sie rechnet}. It is a supporting {e}, and pronunciation betrays it: {du sprichst} [ˈʃpʁɪçst] against {du rechnest} [ˈʁɛçnəst].

**The exception: verbs in {eln}.** {sammeln} gives {ich sammle}, {du sammelst} — with no intermediate {e}. The {l} already comes and the {e} would vanish anyway: {sammele} sounds too formal, {sammle} is the natural one.

## The verb {sein}

{Sein} «to be» follows none of this and is the only one you have to learn by heart in the present: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}. Notice the double irregularity: {ist} in the singular, {sind} in the plural.

{ist} deserves attention to its pronunciation: it is [ɪst] «ist», with a short, hissing {i}. Many people lengthen it under Portuguese influence and produce [iːst], which sounds pedantic and wrong.

## The verb {haben}

{Haben} «to have» is almost regular, with a single swap: the {a} of the stem becomes {i} in the first and third persons singular. {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}. Compare {geben} «to give», which does the same: {ich gebe}, {du gibst}, {er gibt}.

The form {er hat} [hat] deserves attention: the {h} is aspirated across most of Germany, [h], and the {a} is open. A speaker who does not aspirate sounds foreign immediately.

## Word order

In the affirmative sentence the verb stands in **second position**, without exception:

- {Ich spreche heute Deutsch.} «I speak German today.» (subject, verb, rest)
- {Heute spreche ich Deutsch.} «Today I speak German.» (adverb, verb, subject)
- {Mein Bruder spricht heute Deutsch.} (subject, verb, rest)

In a question the verb moves to **first** position: {Sprichst du Deutsch?} «Do you speak German?»; {Hast du Zeit?} «Do you have time?».

And in the imperative the verb opens the sentence and drops the {du} ending: {Sprich!} «Speak!», {Sei still!} «Be quiet!».

## What to take away

The regular present is {stem} + ending, with {e} only in the first person, a supporting {e} before {d}/{t}, and nothing at all in verbs in {eln}; {sein} and {haben} are the two to memorise; and the verb always stands in second position.`),
  vocab: [
    V('sprechen', 'sprechen', 'to speak (ich spreche, du sprichst, er spricht)'),
    V('machen', 'machen', 'to do (regular: ich mache, du machst, er macht)'),
    V('lernen', 'lernen', 'to learn (er lernt Deutsch)'),
    V('arbeiten', 'arbeiten', 'to work (supporting e: ich arbeite, er arbeitet)'),
    V('warten', 'warten', 'to wait (er wartet auf + accusative)'),
    V('finden', 'finden', 'to find (ihr findet)'),
    V('sammeln', 'sammeln', 'to collect (no e: ich sammle)'),
    V('heißen', 'heißen', 'to be called (du heißt, er heißt)'),
    V('sein', 'sein', 'to be (ich bin, du bist, er ist, wir sind)'),
    V('haben', 'haben', 'to have (ich habe, du hast, er hat, wir haben)'),
    V('geben', 'geben', 'to give (a > i: ich gebe, du gibst, er gibt)'),
    V('lesen', 'lesen', 'to read (du liest, er liest, wir lesen)'),
    V('schreiben', 'schreiben', 'to write (du schreibst, er schreibt)'),
    V('ich', 'ich', 'I (always lower case, even alone)'),
    V('er/sie/es', 'er', 'he/she/it ({sie} = she or they; {es} = thing)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct form of {er} + {arbeiten} in the present?'),
    options: [
      T(
        'er arbeitet — the supporting {e} enters before the {t} ending, since the stem ends in {t}',
      ),
      T('er arbeit — the supporting {e} always enters, even with no ending'),
      T('er arbeitst — the {du} ending was swapped in'),
      T('er arbeiten — the infinitive was used as a verb form'),
    ],
    answer: 0,
    hint: T('Rule §3: a stem in {d} or {t} takes a supporting {e} before the ending.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the present of {sein} in the third person singular: er ___'),
      answer: 'ist',
      hint: T('The short {i} is [ɪst], never [iːst].'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its form of {sein}.'),
      pairs: [
        { a: T('ich'), b: T('bin') },
        { a: T('du'), b: T('bist') },
        { a: T('er'), b: T('ist') },
        { a: T('wir'), b: T('sind') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In which sentence is the verb correctly in second position?'),
      options: [
        T('{Heute spreche ich mit ihm.} — adverb, verb, subject'),
        T('{Spreche heute ich mit ihm.} — verb, adverb, subject'),
        T('{Heute ich spreche mit ihm.} — adverb, subject, verb'),
        T('{Ich heute spreche mit ihm.} — subject, adverb, verb'),
      ],
      answer: 0,
      hint: T('Rule §5: the verb is never the first element in an affirmative sentence.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The regular present is the infinitive minus {en} or {ern} plus the ending: {mach-} + {e}, {lern-} + {t}, {spiel-} + {en}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The {e} of the ending appears only in {ich}: {ich spreche}, {ich lerne}. In the other persons it disappears: {du sprichst}, {er lernt}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A stem in {d} or {t} takes a supporting {e} before the ending: {ich arbeite}, {du arbeitest}, {ihr findet}, {er wartet}. Without that {e} the sound would be too hard.',
      ),
    },
    {
      n: '4',
      text: T(
        'Exception: verbs in {eln} take no intermediate {e}: {ich sammle}, {du sammelst}, {er sammelt}, {wir sammeln}.',
      ),
    },
    {
      n: '5',
      text: T(
        'In an affirmative sentence the verb stands in second position, whatever the first element is; in a question it goes to first position: {Sprichst du Deutsch?}',
      ),
    },
  ],
  notes: [
    {
      label: T('The {e} nobody sees'),
      text: T(
        'The supporting {e} is the quietest mark in German, and pronunciation is what betrays it. {ich rechne} is [ˈʁɛçnə], with a clearly audible [ə]: [ˈʁɛçnəst] in {du rechnest}. The same {e} appears in {sammle} [ˈzamlə] and {schnelle} [ˈʃnɛlə]. A speaker who suppresses it produces hard consonant clusters, comparable to Italian {gn}. For silent reading of the Bible it is irrelevant, since the written text does not preserve the sound; for reading aloud it is everything.',
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        "The present dominates Luther's Bible precisely because the narrator is usually speaking in the present. In John 1:1, {Im Anfang war das Wort} «In the beginning was the Word»: {war} is the third person form of {sein}, and Portuguese's «era» has no counterpart there. In 1 John 1:9, {Wenn wir unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt} «if we confess our sins, he is faithful and just to forgive us»: {ist} is repeated, and the pattern {so ist} — the result clause standing for «then» — is the stylistic signature of the verse. In Galatians 5:1, {So seid ihr durch Christus freigesprochen} «so then you are free through Christ»: the sentence ends in the present because the effect of the gospel is permanent. Recognising the present is recognising that the text is saying something that still holds.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich spreche jeden Tag Deutsch.',
      gloss: T('I speak German every day (rule §2: the {e} only in {ich}).'),
    },
    {
      text: 'Du sprichst sehr gut.',
      gloss: T('You speak very well ({sprichst}: the {ich} {e} is gone).'),
    },
    {
      text: 'Er arbeitet bei einer Bank.',
      gloss: T('He works at a bank ({arbeitet}: supporting {e} after {t}).'),
    },
    {
      text: 'Ihr findet die Tür.',
      gloss: T('You find the door ({findet}: supporting {e} after {d}).'),
    },
    {
      text: 'Wir sammeln die Reste.',
      gloss: T('We collect the leftovers (verb in {eln}: no intermediate {e}).'),
    },
    { text: 'Wie heißt du?', gloss: T('What are you called? ({heißt}: no {e} after {ß}).') },
    { text: 'Er ist mein Bruder.', gloss: T('He is my brother ({ist} is short, [ɪst]).') },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('I have no time ({habe}: the stem {a} becomes {i} in {ich}).'),
    },
    {
      text: 'Sprichst du Englisch?',
      gloss: T('Do you speak English? (question: the verb in first position).'),
    },
    {
      text: 'Heute lese ich einen Brief.',
      gloss: T('Today I read a letter (the verb in second position, after the adverb).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Present indicative in the six slots'),
      head: [T('Person'), T('machen'), T('arbeiten'), T('lernen'), T('sammeln')],
      rows: [
        ['ich', 'mache', 'arbeite', 'lerne', 'sammle'],
        ['du', 'machst', 'arbeitest', 'lernst', 'sammelst'],
        ['er/sie/es', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['wir', 'machen', 'arbeiten', 'lernen', 'sammeln'],
        ['ihr', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['sie/Sie', 'machen', 'arbeiten', 'lernen', 'sammeln'],
      ],
    },
    {
      caption: T('Table 2 — The three verbs you must memorise'),
      head: [T('Person'), T('sein'), T('haben'), T('werden')],
      rows: [
        ['ich', 'bin', 'habe', 'werde'],
        ['du', 'bist', 'hast', 'wirst'],
        ['er/sie/es', 'ist', 'hat', 'wird'],
        ['wir', 'sind', 'haben', 'werden'],
        ['ihr', 'seid', 'habt', 'werdet'],
        ['sie/Sie', 'sind', 'haben', 'werden'],
      ],
    },
  ],
};
