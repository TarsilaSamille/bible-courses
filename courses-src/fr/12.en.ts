import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('The verbs'),
  title: T('The essential verbs'),
  subtitle: T(
    '{aller}, {venir}, {être}, {avoir}, {faire}, {dire} and the irregular verbs that govern almost every clause',
  ),
  body: C(`## Twenty verbs, and two with no rule

A regular French verb is conjugated by ending: in {parle}, {parles}, {parle}, the stem {parl-} stays put and only the ending moves. The essentials have no fixed stem: {vais}, {viens}, {suis}, {ai}, {fais}, {dis} are six forms nothing produces, and they have to be learned one by one.

They are few and they weigh a lot. {aller}, {venir}, {être}, {avoir}, {faire}, {dire}, {pouvoir}, {devoir}, {vouloir}, {savoir}, {voir}, {donner}, {prendre}, {manger}, {boire}, {dormir}, {mourir}, {naître}, {lire}, {écrire}, {parler}, {écouter}, {mettre}, {sortir}, {partir}, {arriver}, {rester} and {tomber} cover almost everything said in a chapter of a Gospel.

## {Aller} + infinitive and {venir de} + infinitive: future and past without conjugating

French announces the future without conjugating much: it is {aller} in the present plus an infinitive. {Je vais manger}, {il va venir}, {nous allons partir}. The form of {aller} keeps the person ({vais}, {vas}, {va}, {allons}, {allez}, {vont}), and the infinitive never changes.

The same trick in the recent past flips the direction: {venir de} plus infinitive. {Je viens de manger}, {il vient d’arriver}, {nous venons de partir}. It is a past with no relation to distance, and whoever translates {je viens de manger} literally thinks of movement, but the sense is "I have just eaten".

The compound past of those same ideas uses {être} and {avoir} as auxiliaries: {je suis allé} uses {être} because {aller} is one of the 16 verbs of movement, {j’ai mangé} uses {avoir}. Without the right auxiliary the sentence is grammatical in shape and wrong in person.

## The four stem changes

The stem of the irregular verbs changes in four families, and the family is what separates the changers from the stayers.

- **{e} becomes {è}**: {mène}, {lève}, {achète}, {pèse}, from {peser}.
- **{é} becomes {è}**: {espère}, {préfère}, {répète}, {complète}.
- **{-eler} and {-eter} double the consonant**: {j’appelle}, {il jette}, {nous jetons}.
- **{y} becomes {i}** in {-yer}: {j’envoie}, {je paie}, {j’essaie}.

In the present indicative only the 1st, 2nd, 3rd singular and the 3rd plural change. {Nous} and {vous} keep the infinitive stem: {nous menons}, {vous préférez}, {nous jetons}, {nous envoyons}. The ear confirms the stem on {nous} and {vous}.

## The three that take an infinitive

{pouvoir}, {devoir} and {vouloir} govern the infinitive and never a conjugated form: {je peux aller}, {tu dois lire}, {il veut partir}. Whoever translates from Portuguese forgets that easily; "I can that I go" does not exist, French says {je peux aller} and done.

{falloir} deserves a note because it has no person: {il faut} is always third person with {il}, and what follows is the infinitive. "Il faut que je parte" is a full clause, and the conjugated part, {parte}, is in the subjunctive.

## In the Bible

John 1:1 opens with {était}, the imperfect of {être}: in the beginning was the Word. John 1:5 has {brille}, the present of the regular {-er} verb {briller}, and {était} again, as something already there. And John 1:14 has {a été faite}, the compound past of {être} with the past participle of {faire}, in a passive clause whose subject is {la Parole}.

John 3:16 renders {a aimé}, the compound past of {aimer}: God loved the world. The same verb in the present would be {aime}, and the difference between what God is and what God did is lost when the tense is.`),
  vocab: [
    V('vais', 'aller', 'I go'),
    V('viens', 'venir', 'I come'),
    V('suis', 'être', 'I am'),
    V('ai', 'avoir', 'I have'),
    V('fais', 'faire', 'I do'),
    V('dis', 'dire', 'I say'),
    V('peux', 'pouvoir', 'I can'),
    V('dois', 'devoir', 'I must'),
    V('veux', 'vouloir', 'I want'),
    V('sais', 'savoir', 'I know'),
    V('vois', 'voir', 'I see'),
    V('prends', 'prendre', 'I take'),
    V('mange', 'manger', 'I eat'),
    V('bois', 'boire', 'I drink'),
    V('dors', 'dormir', 'I sleep'),
    V('étais', 'être', 'I was'),
    V('brille', 'briller', 'he shines'),
    V('est venue', 'venir', 'she came'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Ten irregular presents have no rule: {vais}, {viens}, {suis}, {ai}, {fais}, {dis}, {peux}, {dois}, {veux} and {sais}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The near future is {aller} in the present plus an infinitive: {je vais manger}, and the recent past is {venir de} plus an infinitive: {je viens de manger}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Only about thirteen verbs use {être} as the auxiliary of the compound past: {aller}, {venir}, {arriver}, {partir}, {naître}, {mourir}, {rester}, {tomber}, {entrer}, {sortir}, {monter}, {descendre} and {passer}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The stem changes in the present indicative in four families: e→è ({mène}), é→è ({espère}), -eler/-eter with doubled consonant ({j’appelle}), y→i ({j’envoie}). {Nous} and {vous} keep the infinitive.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{pouvoir}, {devoir} and {vouloir} govern the infinitive: {je peux aller}, {tu dois lire}, {il veut partir}, and never a conjugated form.',
      ),
    },
  ],
  notes: [
    {
      label: T('The auxiliary says who is who'),
      text: T(
        'In the compound past, {être} goes with verbs of movement or change of state: {je suis allé}. {Avoir} with verbs of action: {j’ai mangé}. Swapped, the sentence stays grammatical and changes its person: {je suis mangé} no longer says who ate what, and {j’ai allé} does not exist.',
      ),
    },
    {
      label: T('The recent past has no distance'),
      text: T(
        '{Je viens de manger} says "I have just eaten", not that I came to eat. As a construction {venir de} ties to the past: in the present it is "I just", in the imperfect {je venais de manger} it is "I had just eaten". A past that a literal "I came" erases.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole.',
      gloss: T('{était}: imperfect of {être}, what already held before everything.'),
    },
    {
      text: 'la lumière brille dans les ténèbres',
      gloss: T('{brille}: present, what happens in the scene (Jn 1:5).'),
    },
    {
      text: 'la Parole a été faite chair',
      gloss: T(
        '{a été faite}: passive compound past of {faire}, with {être} as auxiliary (Jn 1:14).',
      ),
    },
    {
      text: 'Car Dieu a tant aimé le monde',
      gloss: T('{a aimé}: compound past of {aimer} (Jn 3:16).'),
    },
    {
      text: 'Je vais manger.',
      gloss: T('{aller} in the present plus the infinitive {manger}: near future.'),
    },
    {
      text: 'Je viens de manger.',
      gloss: T('{venir de} plus infinitive: recent past, "I have just eaten".'),
    },
    {
      text: 'J’ai mangé du pain.',
      gloss: T('Compound past with {avoir}: the participle does not change.'),
    },
    { text: 'Elle est venue.', gloss: T('Compound past with {être}: {venue} agrees with {elle}.') },
    { text: 'Nous allons sortir.', gloss: T('Present of {aller} with {nous}: {allons}.') },
    {
      text: 'Il faut partir.',
      gloss: T('Impersonal {falloir}, always with {il} plus infinitive.'),
    },
  ],
  tables: [
    {
      caption: T('Present of the irregular essentials'),
      head: [T('Subject'), T('aller'), T('venir'), T('être'), T('avoir'), T('faire')],
      rows: [
        ['je', 'vais', 'viens', 'suis', 'ai', 'fais'],
        ['tu', 'vas', 'viens', 'es', 'as', 'fais'],
        ['il/elle', 'va', 'vient', 'est', 'a', 'fait'],
        ['nous', 'allons', 'venons', 'sommes', 'avons', 'faisons'],
        ['vous', 'allez', 'venez', 'êtes', 'avez', 'faites'],
        ['ils/elles', 'vont', 'viennent', 'sont', 'ont', 'font'],
      ],
    },
    {
      caption: T('Compound past with être and avoir'),
      head: [T('Verb'), T('Auxiliary'), T('Participle'), T('Example')],
      rows: [
        ['aller', 'être', 'allé', 'je suis allé'],
        ['venir', 'être', 'venu', 'elle est venue'],
        ['mourir', 'être', 'mort', 'il est mort'],
        ['naître', 'être', 'né', 'elle est née'],
        ['prendre', 'avoir', 'pris', 'j’ai pris'],
        ['faire', 'avoir', 'fait', 'j’ai fait'],
        ['dire', 'avoir', 'dit', 'j’ai dit'],
        ['voir', 'avoir', 'vu', 'j’ai vu'],
        ['manger', 'avoir', 'mangé', 'j’ai mangé'],
        ['boire', 'avoir', 'bu', 'j’ai bu'],
        ['dormir', 'avoir', 'dormi', 'j’ai dormi'],
        ['écrire', 'avoir', 'écrit', 'j’ai écrit'],
      ],
    },
    {
      caption: T('The four stem changes'),
      head: [T('Verb'), T('{je}'), T('{nous}'), T('Change')],
      rows: [
        ['mener', 'mène', 'menons', '{e} → {è}'],
        ['lever', 'lève', 'levons', '{e} → {è}'],
        ['acheter', 'achète', 'achetons', '{e} → {è}'],
        ['espérer', 'espère', 'espérons', '{é} → {è}'],
        ['préférer', 'préfère', 'préférons', '{é} → {è}'],
        ['appeler', 'appelle', 'appelons', '{l} → {ll}'],
        ['jeter', 'jette', 'jetons', '{t} → {tt}'],
        ['envoyer', 'envoie', 'envoyons', '{y} → {i}'],
        ['payer', 'paie', 'payons', '{y} → {i}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which verb is needed to form the compound past of {venir}?'),
    options: [T('{avoir}'), T('{être}'), T('{aller}'), T('{faire}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the near future: "Nous ___ partir" (aller + partir).'),
      answer: 'allons',
    },
    {
      kind: 'match',
      prompt: T('Match the form to the verb of the conjugation.'),
      pairs: [
        { a: T('{vais}'), b: T('{aller}') },
        { a: T('{viens}'), b: T('{venir}') },
        { a: T('{suis}'), b: T('{être}') },
        { a: T('{peux}'), b: T('{pouvoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form replaces "je" in the near future with {voir}?'),
      options: [T('{Je va voir}'), T('{Je vais voir}'), T('{Je voir}'), T('{Je aller voir}')],
      answer: 1,
    },
  ],
};
