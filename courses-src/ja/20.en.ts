import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Verb'),
  title: T('The same verb with a new tail: passive and causative'),
  subtitle: T(
    'Both voices of Japanese are born out of the verb that already exists plus a tail stuck on the end — and the letter that disappears is the same one in both',
  ),
  body: C(`
## One tail, two voices

English has a word for "be done" and another for "make someone do". Japanese has a single gesture: **the same verb with a tail stuck on the end**, and both voices come out of it. {nomareru} is "be drunk"; {nomaseru} is "make drink". The root is the same in both, and the tail is what does the work: one says the action undergoes, the other says the action is ordered.

That is the lesson on objects all over again, two steps further on. There the verb did not say whether there was an object, and what said it was the object particle. Here the verb does not say who undergoes and who orders, and what says it is the tail. Which is why it pays to learn the verb by its **root**: anyone who knows that {nomu} is the root knows where {nomareru} and {nomaseru} come from without ever having seen either.

## The tail of the passive: {reru}

The passive is made with {reru} after the verb. The rule changes with the conjugation, and this is where beginners get stuck.

A **second conjugation** verb, the one ending in u: the u leaves the end and {reru} steps in. {nomu} "drink" becomes {nomareru} "be drunk". One letter swapped, and the action changes hands.

A **first conjugation** verb, the one that drops the ru: the ru goes and {reru} arrives. {taberu} "eat" becomes {taberareru} "be eaten"; {miru} "see" becomes {mirareru} "be seen". This is the technical detail that traps beginners: the letter of the ru does not survive the inflection, and anyone who keeps it writes a word that exists and means nothing.

Two verbs still escape the pattern, "go" and "come", and both are the same {reru} laid over a swapped root. And there is a dictionary trick: the new forms have their own entries, which is why the link to the original verb stays invisible to anyone who looks words up one at a time.

## The tail of the causative: {ni} plus the projected verb

The causative is another tail, {saseru}, and it always comes with the particle {ni}: the {ni} says to whom the action is done, and the verb goes into the projected form. The conjugation swap is the same as in the previous section: {nomu} becomes {nomaseru}, {taberu} becomes {tabaseru}, {miru} becomes {missaseru}. One exception everybody forgets: {iku} does not repeat its first letter in the causative, and the result is {ikaseru}.

And here is the detail that makes beginners mistranslate: the same sentence can be "let" or "make". {kodomo ni ikaseru} is "I let my child go" and it is "I make my child go", and nothing in the form says which. What chooses is the context: who is speaking, and who the orders are addressed to.

This gesture has already appeared in two other languages in this project. In Korean it is a particle stuck on the end of the verb doing exactly the same work; in Mandarin the cause shows up as "let" or "make" with the verb right after it. Three languages, three different pieces, one single gesture: the action somebody orders.

## The colourless passive, the double tail, and Mark 15:5

The plain passive hides who acted: "he was seen" does not say by whom. When the agent appears with {ni} stuck on it, the passive changes meaning and becomes what scholars call the colourless passive: the subject of the sentence is **the agent**, and the action is a bad action suffered by whoever is on the other end. {kare wa watashi ni mirareru} is "I am seen by him", the same form of {mirareru} as before, with another person in the subject's place and {ni} where nothing was. Compare the two pairs in the last table, because it is the finest detail here.

Two more things, and both are real differences between the languages. First: Japanese **has no agent particle**. Where Mandarin handles this with a particle stuck before the verb, Japanese writes "by + person" or writes nothing at all, and the construction is more flexible, because the information can be left out without the sentence breaking. Second: you can apply the passive on top of a causative, verb plus {saseru} plus {reru}, and the resulting form literally means "to be done by someone because someone ordered it". That is the double tail, the most complex of the two, and it shows up in biblical text; here it is only named.

The hook closes the road with both voices in one sentence. Mark 15:5 says that Pilate handed Jesus over to them to be crucified: in Japanese, "handed over" is a causative, he ordered it to be handed over, and "to be crucified" is a passive. One sentence carrying both tails just seen, and the reader who recognises both forms understands the verse without hunting for any other verb.
`),
  vocab: [
    V('reru', 'れる', 'the tail of the passive: verb plus {reru} says "be done"'),
    V('saseru', 'させる', 'the tail of the causative: verb plus {seru} says "make someone do"'),
    V('ni', 'に', 'the particle that says to whom the action is done'),
    V('nomu', '飲む', 'to drink (nomu) — the root of two voices'),
    V('nomareru', '飲まれる', 'to be drunk — the passive of {nomu}, with {reru} in place of the u'),
    V(
      'nomaseru',
      '飲ませる',
      'to make drink — the causative of {nomu}, with {seru} in place of the u',
    ),
    V('taberu', '食べる', 'to eat (taberu) — a first conjugation verb'),
    V('taberareru', '食べられる', 'to be eaten — {taberu} loses the ru and gains {reru}'),
    V('tabaseru', '食べさせる', 'to make eat — {taberu} loses the ru and gains {seru}'),
    V('miru', '見る', 'to see (miru) — the root of the pair that decides the colourless passive'),
    V('mirareru', '見られる', 'to be seen — becomes colourless when the agent comes with {ni}'),
    V('missaseru', '見させる', 'to make see — the causative of {miru}'),
    V(
      'iku',
      '行く',
      'to go (iku) — the only one that does not repeat its first letter in the causative',
    ),
    V('ikaseru', '行かせる', 'to make go, or to let go: both at once'),
    V('kakerareru', '架けられる', 'to be crucified — the passive of the verb "to nail to a cross"'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Passive and causative are born from the same verb: the passive is verb plus {reru}, the causative is verb plus {seru} with the particle {ni}. One tail, two voices.',
      ),
    },
    {
      n: '2',
      text: T(
        'Second conjugation, the verb ending in u: the u leaves the end and {reru} steps in — {nomu} becomes {nomareru} and {nomaseru}.',
      ),
    },
    {
      n: '3',
      text: T(
        'First conjugation, the verb that drops the ru: the ru goes and {reru} or {seru} arrives — {taberu} becomes {taberareru} and {tabaseru}. Anyone who keeps the ru writes a word that does not exist.',
      ),
    },
    {
      n: '4',
      text: T(
        'The causative says to whom the action is done through {ni}, and the same sentence can be "let" or "make": what chooses is the context, never the form.',
      ),
    },
    {
      n: '5',
      text: T(
        'Japanese has no agent particle: the agent comes as "by + person" or is left out. And when the agent appears with {ni}, the passive is colourless — the subject is the one who acted, the action is bad, and the other is the target.',
      ),
    },
  ],
  notes: [
    {
      label: T('The tail is the information, the verb is the rest'),
      text: T(
        'This is lesson 13 seen from another angle. The Japanese verb does not inflect for having an object, and now we see that it does not inflect for voice either: what always carries the information of the sentence is the particle or the tail. The Japanese dictionary gives each inflection its own entry, which is why the relation between them stays hidden for anyone looking words up one at a time. Anyone who learns the root learns both voices at once.',
      ),
    },
    {
      label: T('The colourless passive is a normal passive with the subject swapped'),
      text: T(
        'The form {mirareru} is the same in both uses: what changes is who is in the subject and whether the agent appears. With no agent, "something was seen"; with the agent in {ni}, "someone was seen by him", and the tone that comes with it is of a bad action suffered. The name comes from the fact that the voice does not change colour: the verb is still the same verb.',
      ),
    },
  ],
  examples: [
    {
      text: '酒を飲む',
      gloss: T('sake o nomu — I drink wine: the plain form, which is the root of both voices'),
    },
    {
      text: '酒を飲まれる',
      gloss: T('sake o nomareru — the wine is drunk: passive, {nomu} plus {reru}'),
    },
    {
      text: '子供に酒を飲ませる',
      gloss: T(
        'kodomo ni sake o nomaseru — I make my child drink, or I let my child drink: the {ni} says to whom',
      ),
    },
    {
      text: '私に見られる',
      gloss: T(
        'watashi ni mirareru — I am seen by him: the colourless passive, with the agent in {ni}',
      ),
    },
    {
      text: 'そこでピラトスは彼らを引き渡して、十字架に架けられるようにした',
      gloss: T(
        'sore de pirato wa kare-tachi o hikiwatashite, jūjika ni kakerareru yō ni shita — and Pilate handed him over to them to be crucified (Mark 15:5): a causative and a passive in one sentence',
      ),
    },
  ],
  tables: [
    {
      caption: T('The central table: the same verb, both voices'),
      head: [T('Verb'), T('Plain'), T('Passive'), T('Causative')],
      rows: [
        [
          T('{nomu}, "drink"'),
          T('{nomu}'),
          T('{nomareru} — to be drunk'),
          T('{nomaseru} — to make drink'),
        ],
        [
          T('{taberu}, "eat"'),
          T('{taberu}'),
          T('{taberareru} — to be eaten'),
          T('{tabaseru} — to make eat'),
        ],
        [
          T('{miru}, "see"'),
          T('{miru}'),
          T('{mirareru} — to be seen'),
          T('{missaseru} — to make see'),
        ],
        [
          T('{iku}, "go"'),
          T('{iku}'),
          T('{kareru} — irregular'),
          T('{ikaseru} — to make go, no repeated letter'),
        ],
      ],
    },
    {
      caption: T('The letter that disappears: second conjugation against first conjugation'),
      head: [T('Conjugation'), T('What happens in the inflection'), T('Passive'), T('Causative')],
      rows: [
        [
          T('second, ending in u'),
          T('the u leaves the end and the tail takes its place'),
          T('{nomu} → {nomareru}'),
          T('{nomu} → {nomaseru}'),
        ],
        [
          T('first, drops the ru'),
          T('the ru goes and the whole tail is added'),
          T('{taberu} → {taberareru}'),
          T('{taberu} → {tabaseru}'),
        ],
        [
          T('go and come'),
          T('the root swaps and the whole rule is lost'),
          T('{kareru}, irregular form'),
          T('{ikaseru}, no repeated letter'),
        ],
      ],
    },
    {
      caption: T('Plain passive and colourless passive: the same form, the subject swapped'),
      head: [T('Sentence'), T('Who is the subject'), T('What it reads'), T('The agent')],
      rows: [
        [T('{hon ga mirareru}'), T('the book'), T('the book was seen'), T('does not appear')],
        [
          T('{watashi ga kare ni mirareru}'),
          T('I'),
          T('I was seen by him'),
          T('comes in {ni}, and the action is bad'),
        ],
        [
          T('{kare ga watashi ni o mawareru}'),
          T('he'),
          T('I got from him a blow I did not ask for'),
          T('comes in {ni}, next to the marked object'),
        ],
        [
          T('{kare wa watashi ni mita}'),
          T('he'),
          T('he saw me, and that is neutral'),
          T('there is no passive here at all'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {kare wa watashi ni mirareru}, what is the {ni} doing?'),
    options: [
      T('It marks the subject that undergoes the action'),
      T('It marks the agent, and the passive becomes colourless: the agent is the subject'),
      T('It marks the direct object of the verb'),
      T('It marks that the action happened in the past'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the passive of {nomu}, a second conjugation verb: 飲____れる'),
      answer: 'ま',
    },
    {
      kind: 'match',
      prompt: T('Match the form to what it does'),
      pairs: [
        { a: T('{nomareru}'), b: T('passive of a second conjugation verb') },
        { a: T('{nomaseru}'), b: T('causative of a second conjugation verb') },
        { a: T('{taberareru}'), b: T('passive of a first conjugation verb, with no ru') },
        { a: T('{tabaseru}'), b: T('causative of a first conjugation verb, with no ru') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Mark 15:5, what does the verb for "handed over to them" do?'),
      options: [
        T('It is a causative: he ordered it to be handed over'),
        T('It is a colourless passive: the handing over was suffered by him'),
        T('It is a plain verb, and the passive is only in "to be crucified"'),
        T('It is a form of potential, and that is the right reading'),
      ],
      answer: 0,
    },
  ],
};
