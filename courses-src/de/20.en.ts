import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Separable verbs'),
  subtitle: T('aufstehen, ankommen, einschlafen — what splits in the middle of the sentence'),
  section: T('The verbs'),
  body: C(`## A prefix is a place, not a sound

Many German verbs are born from a simple verb plus a **prefix**: {stehen} «to stand» + {auf} = {aufstehen} «to get up». The prefix is not glued on: it indicates **whither** or **which way** the action goes. That is why it stands out and moves to the end of the sentence.

The practical consequence is the most important thing in this chapter: **a separable verb never stresses its prefix**. {Ich stehe auf} — stress on {auf}, at the end. Putting the prefix early would change the meaning: {Ich stehe auf} and a fronted {auf} cannot both mean "I get up". The inversion would mark the prefix as adverbial, no longer part of the core.

## The three positions

A separable verb has three possible positions, and the choice depends on what already occupies second position in the sentence:

**1. At the end of the sentence**, when nothing else can take that slot: {Ich stehe früh auf.} «I get up early.» The {auf} is the last element.

**2. After the conjugated verb**, when a time expression, an object or another element sits in second position: {Ich stehe jeden Morgen früh auf.} «I get up every morning early.» Notice that {jeden Morgen früh} is the block filling second position, and {auf} stays glued to the end.

**3. In the middle of the sentence**, when the conjugated verb is {sein} or {haben} in a compound, or when there is a positional element: {Ich bin früh aufgestanden.} «I got up early.» Here the participle {aufgestanden} is **inseparable**.

The test is simple: **look for an element occupying second position. If there is one, {auf} goes to the end. If there is not, it goes right after the conjugated verb.**

## Stress as a diagnostic

In writing the accent disappears; in reading it decides. Compare:

- {Ich stehe früh **auf}** [ˈaʊ̯f] «I get up early» — separable verb
- The same letters with a stressed prefix would be a different word altogether.

The same logic applies to {durchschauen} [ˈdʊʁçˌʃaʊ̯ən] «to see through» and [duːʁçˈʃaʊ̯ən] «to deceive». Pronunciation tells you which one you meant. In Luther's printed text the distinction is invisible, which is why reading aloud settles what the eye cannot.

## Participle and direction

The participle of a separable verb **never** separates: {aufstehen} gives {aufgestanden}, {ankommen} gives {angekommen}, {einschlafen} gives {eingeschlafen}. The prefix glues back on and the whole verb turns into an adjective. In {Ich bin früh aufgestanden} the {auf} is locked in the middle, and that is the sign that the form is a participle rather than a verb in use.

And note the preposition: {aufstehen} already contains the preposition {auf} «on, up». That is why {aufstehen} never takes another {auf} — the prefix **is** the preposition. The same holds for {anrufen} «to phone» and {einkaufen} «to go and buy».

## The useful list

The commonest prefixes say exactly what you would expect:

- {an-} «at, to»: {ankommen} «to arrive», {anrufen} «to phone», {ansehen} «to look at», {antworten} «to answer»
- {auf-} «up»: {aufstehen} «to get up», {aufmachen} «to open», {aufhören} «to stop»
- {aus-} «out, from»: {ausgehen} «to go out», {aussuchen} «to choose», {ausstehen} «to put up with»
- {ein-} «in»: {eingehen} «to go in», {einschlafen} «to fall asleep», {einladen} «to invite»
- {mit-} «along»: {mitkommen} «to come along», {mitmachen} «to take part», {mitnehmen} «to take along»
- {nach-} «after»: {nachdenken} «to reflect», {nachfragen} «to ask further», {nachsehen} «to check»
- {vor-} «before»: {vorlesen} «to read aloud», {vormachen} «to demonstrate»
- {zu-} «to, closed»: {zumachen} «to close», {zuhören} «to listen attentively», {zusagen} «to promise»

## What to take away

A prefix is a position at the end of the sentence, not part of the core; {auf} goes to the end when something already occupies second position and glues back on in the participle; and no separable verb ever stresses its prefix.`),
  vocab: [
    V('aufstehen', 'aufstehen', 'to get up (stehe auf, stehst auf, ist aufgestanden)'),
    V('ankommen', 'ankommen', 'to arrive (komme an, bist angekommen)'),
    V('anrufen', 'anrufen', 'to phone (rufe an, ruft an)'),
    V('aufhören', 'aufhören', 'to stop, to cease (höre auf, hört auf)'),
    V('ausgehen', 'ausgehen', 'to go out (gehe aus, geht aus, ist ausgegangen)'),
    V('einschlafen', 'einschlafen', 'to fall asleep (schlafe ein, schläft ein)'),
    V('mitkommen', 'mitkommen', 'to come along (komme mit, kommt mit)'),
    V('nachdenken', 'nachdenken', 'to reflect, to think about (denke nach, denkt nach)'),
    V('vorlesen', 'vorlesen', 'to read aloud (lese vor, liest vor)'),
    V('zumachen', 'zumachen', 'to close (mache zu, macht zu)'),
    V('zuhören', 'zuhören', 'to listen attentively (höre zu, hört zu)'),
    V('ansehen', 'ansehen', 'to look at (sehe an, sieht an)'),
    V('einladen', 'einladen', 'to invite (lade ein, lädt ein, hat eingeladen)'),
    V('mitnehmen', 'mitnehmen', 'to take along (nehme mit, nimmt mit)'),
    V('aufgestanden', 'aufstehen', 'got up (participle: never separable)'),
    V('auf', 'auf', 'prefix and preposition "up, on" (aufstehen, aufmachen)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Ich stehe jeden Morgen früh ___}, where does the prefix {auf} go?'),
    options: [
      T(
        'At the end of the sentence, after {früh}, because {jeden Morgen früh} already occupies second position',
      ),
      T('Right after the verb {stehe}, because the present requires attachment'),
      T('Before the subject {ich}, stressing the prefix'),
      T('In the middle of the sentence, between {Morgen} and {früh}'),
    ],
    answer: 0,
    hint: T('Rule §2: if something already occupies second position, {auf} goes to the end.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participle of {ankommen} in {Ich bin gerade ___}:'),
      answer: 'angekommen',
      hint: T('The participle is inseparable: {an} + {ge} + {kommen}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each verb to its prefix and meaning.'),
      pairs: [
        { a: T('einschlafen'), b: T('ein- «in»: to sleep') },
        { a: T('ausgehen'), b: T('aus- «out»: to go out') },
        { a: T('mitnehmen'), b: T('mit- «along»: to take') },
        { a: T('zumachen'), b: T('zu- «closed»: to close') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence has the prefix in the right position?'),
      options: [
        T('{Nach der Schule gehe ich nach Hause.} — nothing in second position, prefix at the end'),
        T('{Nach der Schule ich gehe nach Hause.} — the conjugated verb leaves second position'),
        T('{Ich gehe nach der Schule nach Hause.} — the first {nach} is not a prefix'),
        T('{Nach der Schule nach Hause gehe ich.} — the prefix opens the sentence'),
      ],
      answer: 0,
      hint: T(
        'Rule §2: with nothing in second position, {auf} goes right after the conjugated verb.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A verb with a prefix is **separable** when the prefix marks direction or purpose and can stand at the end of the sentence. Stress always falls on the stem, never on the prefix.',
      ),
    },
    {
      n: '2',
      text: T(
        'If the sentence already has an element in second position, the prefix goes to the end: {Ich stehe jeden Morgen früh auf.} If there is nothing, it glues to the conjugated verb: {Ich stehe früh auf.}',
      ),
    },
    {
      n: '3',
      text: T(
        'The participle and the infinitive of a separable verb are **inseparable**: {aufgestanden}, {aufstehen}, {angekommen}, {einzuschlafen}. The prefix stays glued between stem and endings.',
      ),
    },
    {
      n: '4',
      text: T(
        'Many prefixes are at the same time prepositions: {aufstehen} already contains {auf}, and therefore takes no further {auf}. The same holds for {anrufen} «to phone» and {zumachen} «to close».',
      ),
    },
    {
      n: '5',
      text: T(
        'In a question the conjugated verb moves to first position and the prefix still goes last: {Wann stehst du auf?} «When do you get up?»',
      ),
    },
  ],
  notes: [
    {
      label: T('The written text hides the accent'),
      text: T(
        'All of this chapter is, in practice, a chapter of **pronunciation**. Spelling does not distinguish {aufstehen} «to get up» from the same letters with a stressed prefix, which would be a different word. In silent Bible reading it does not matter: you read {Er stand auf} and the grammar tells you the prefix has moved. In reading aloud, though, stress settles what grammar only suggests — which is why the {Talitha kumi} «Little girl, get up» of Mark 5:41 sounds so different when spoken than when only written.',
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        "Separable verbs dominate Luther's text precisely because they narrate movement — and the Bible is a text on the move. In Mark 5:41, {Talitha kumi} «Little girl, get up»: {kumi} is the imperative of {kommen}, the most separable verb there is, and the phrase stands with no article and no pronoun. In John 20:1, {nahmen die Jüden ihre Speise mit sich und gingen hinaus} «the Jews took their food with them and went out»: the {mit} of {mitnehmen} «to take along» detaches at the end of its group — Portuguese would render it as «levaram consigo», with no visible stem at all. In Acts 1:13, {und tratten in das Haus, wo sie gewöhnlich beieinander saßen} «they entered the house where they usually sat»: the prefix kept its own preposition {in}. It is the clearest proof that the prefix is an adverb, not a preposition.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich stehe früh auf.',
      gloss: T('I get up early (nothing in second position: {auf} glues to the verb).'),
    },
    {
      text: 'Ich stehe jeden Morgen früh auf.',
      gloss: T('I get up every morning early ({jeden Morgen früh} occupies second position).'),
    },
    {
      text: 'Wann stehst du auf?',
      gloss: T('When do you get up? (question: verb first, prefix last).'),
    },
    {
      text: 'Nach der Schule gehe ich nach Hause.',
      gloss: T('After school I go home (the prefix ends the sentence).'),
    },
    {
      text: 'Er steht nicht auf.',
      gloss: T('He does not get up ({nicht} stands between the verb and the prefix).'),
    },
    {
      text: 'Ich bin früh aufgestanden.',
      gloss: T('I got up early (inseparable participle, rule §3).'),
    },
    {
      text: 'Sie kommt heute nicht mit.',
      gloss: T('She is not coming along today ({mit} last, after {nicht}).'),
    },
    {
      text: 'Wir treffen uns vor der Kirche.',
      gloss: T('We meet in front of the church ({vor} is already a preposition here).'),
    },
    { text: 'Er ruft mich jeden Abend an.', gloss: T('He phones me every evening ({an} last).') },
    {
      text: 'Warum gehst du nicht mit?',
      gloss: T('Why are you not coming along? (verb first, {mit} last).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Three positions of the separable verb'),
      head: [T('Situation'), T('Sentence'), T('Where {auf} falls')],
      rows: [
        ['nada na 2ª posição', 'Ich stehe früh auf.', 'no fim'],
        ['tempo na 2ª posição', 'Ich stehe jeden Morgen früh auf.', 'no fim'],
        ['sujeito na 2ª posição', 'Heute stehe ich früh auf.', 'no fim'],
        ['pergunta', 'Wann stehst du auf?', 'no fim'],
        ['particípio', 'Ich bin früh aufgestanden.', 'colado no meio'],
        ['infinitivo', 'Ich werde früh aufstehen.', 'colado no meio'],
      ],
    },
    {
      caption: T('Table 2 — Prefixes and what they mark'),
      head: [T('Prefix'), T('Direction'), T('Verb'), T('Participle')],
      rows: [
        ['an-', 'a, para', 'ankommen', 'angekommen'],
        ['an-', 'a, para', 'anrufen', 'angerufen'],
        ['auf-', 'para cima', 'aufstehen', 'aufgestanden'],
        ['auf-', 'para cima', 'aufhören', 'aufgehört'],
        ['aus-', 'fora', 'ausgehen', 'ausgegangen'],
        ['ein-', 'dentro', 'einschlafen', 'eingeschlafen'],
        ['mit-', 'junto', 'mitkommen', 'mitgekommen'],
        ['nach-', 'depois', 'nachdenken', 'nachgedacht'],
        ['vor-', 'antes', 'vorlesen', 'vorgelesen'],
        ['zu-', 'fechado', 'zumachen', 'zugemacht'],
      ],
    },
  ],
};
