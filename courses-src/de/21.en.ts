import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Inseparable verbs'),
  subtitle: T('besuchen, verstehen, erklären — the prefix that never lets go'),
  section: T('The verbs'),
  body: C(`## Not every prefix is separable

The previous lesson showed verbs whose prefix travels to the end of the sentence. This chapter is the reverse: there are verbs in which the prefix **never leaves its place**, in no tense, however long the sentence.

{besuchen} «to visit» is inseparable. Never a stressed {be-} in the middle of the sentence, never a syllable of its own at the end. The {be-} is part of the root. And one warning follows: **an inseparable verb never takes the directional {zu}**.

That is the practical test. In {Ich sehe dich} «I see you», the {zu} is impossible — it would be {Ich sehe zu dich}, which sounds wrong. {Ich gehe zu dir} «I go to you» is impossible for the opposite reason: {gehen} is separable and demands {zu}.

## Three families

Inseparable verbs fall into three groups, each with its characteristic suffix:

**1. Prefix + verb without {te}.** {besuchen} {be-} + {suchen}, {erklären} {er-} + {klären}, {erzählen} {er-} + {zählen}, {betrachten} {be-} + {trachten}. Here the prefix is welded to the base verb, which loses or swaps its own ending.

**2. Prefix + verb with {t} or {d} inserted.** {entstehen} {ent-} + {stehen}, {verstehen} {ver-} + {stehen}, {enthalten} {ent-} + {halten}, {erhalten} {er-} + {halten}. The {t} or {d} slips in between prefix and stem — {ent-ste-hen} — and the word stays inseparable as a whole.

**3. Prefix + {ieren}.** {studieren}, {probieren}, {telefonieren}, {notieren}. Here the {ieren} ending makes the verb easy to recognise, and the first {i} is regularly long [iː].

The only way to recognise an inseparable verb is to **know the verb**. No rule of spelling or pronunciation separates them from the separable ones. That is why this lesson is, in practice, a list — and a well-chosen one, made of the verbs you will actually meet.

## The prefixes that matter

The prefixes of the inseparable verbs carry meaning, and the same prefix reappears throughout a whole family:

- {be-} «by, towards»: {bekommen} «to receive», {beginnen} «to begin», {besuchen} «to visit», {bezahlen} «to pay», {betrachten} «to consider»
- {ver-} «wrongly, out of»: {verstehen} «to understand», {verlieren} «to lose», {verkaufen} «to sell», {verbringen} «to spend», {vergessen} «to forget»
- {ent-} «separation, origin»: {entstehen} «to arise», {entscheiden} «to decide», {entwickeln} «to develop», {enthalten} «to contain»
- {er-} «reaching a result»: {erzählen} «to tell», {erklären} «to explain», {erfahren} «to find out», {erinnern} «to remind»
- {zer-} «total destruction»: {zerbrechen} «to break», {zerstören} «to destroy», {zerfallen} «to fall apart»
- {miss-} «error, frustration»: {missverstehen} «to misunderstand», {missbilligen} «to disapprove»

Look at {er-}: it means "to bring something off". {Er erklärt die Regel} «he explains the rule» — he has reached clarity. {Er zählt} «he counts» — without {er-} there is no result, only the bare action.

## Stress is part of the rule

Pronunciation is the final criterion. A separable verb stresses its **stem** ({ˈaʊ̯fˌʃteːən}) and the prefix is a weak, almost swallowed syllable. An inseparable verb stresses the **prefix** ([bəˈzuːxən] in {besuchen}, [vɛɐ̯ˈʃteːən] in {verstehen}). That is the sound impression the ear records before any analysis.

A quick test: say the word very slowly. If the first syllable is weak and the second strong, it is probably separable. If the first is the strongest, it is probably inseparable.

## Where they appear

Inseparable verbs dominate written German and technical vocabulary, exactly where the composition is complex: {erklären}, {beschreiben}, {verstehen}, {verbinden}. Everyday speech has fewer of them, and that is why a beginner recognises {besuchen} and {verstehen} before {aufstehen} — the first two never come apart, and the third is the very picture of separability.

## What to take away

A verb is inseparable when the prefix belongs to the root; the practical proof is that it **refuses the directional {zu}**; {er-} means "to bring something off"; and the stress of an inseparable verb falls on the prefix, not on the stem.`),
  vocab: [
    V('besuchen', 'besuchen', 'to visit (inseparable: ich besuche dich)'),
    V('verstehen', 'verstehen', 'to understand (er versteht mich)'),
    V('erklären', 'erklären', 'to explain (er erklärt die Regel)'),
    V('erzählen', 'erzählen', 'to tell, to narrate (er erzählt eine Geschichte)'),
    V('bekommen', 'bekommen', 'to receive, to get (ich bekomme ein Geschenk)'),
    V('beginnen', 'beginnen', 'to begin (wir beginnen jetzt)'),
    V('verlieren', 'verlieren', 'to lose (er verliert den Schlüssel)'),
    V('verkaufen', 'verkaufen', 'to sell (sie verkauft das Haus)'),
    V('vergessen', 'vergessen', 'to forget (ich habe es vergessen)'),
    V('entscheiden', 'entscheiden', 'to decide (er entscheidet sich)'),
    V('entstehen', 'entstehen', 'to arise (das Gerücht ist entstanden)'),
    V('erfahren', 'erfahren', 'to find out (ich habe davon erfahren)'),
    V('erinnern', 'erinnern', 'to remind (ich erinnere mich an dich)'),
    V('bezahlen', 'bezahlen', 'to pay (er bezahlt die Rechnung)'),
    V('zerbrechen', 'zerbrechen', 'to break (die Glasscherbe zerbricht)'),
    V('missverstehen', 'missverstehen', 'to misunderstand (er hat mich missverstanden)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('{Ich verstehe ihn.} — {verstehen} is inseparable and refuses {zu}'),
      T('{Ich verstehe zu ihn.} — {zu} marks the direction'),
      T('{Ich stehe zu ihn auf.} — the prefix {auf} does not move'),
      T('{Ich zu verstehe ihn.} — {zu} comes before the conjugated verb'),
    ],
    answer: 0,
    hint: T('Rule §1: the directional {zu} exists only with separable verbs.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Prefix of {erklären} meaning "to bring something off": ___'),
      answer: 'er-',
      hint: T('{erklären} = {er-} + {klären} «to clear».'),
    },
    {
      kind: 'match',
      prompt: T('Match each verb to its prefix.'),
      pairs: [
        { a: T('bekommen'), b: T('be- «by, inwards»') },
        { a: T('vergessen'), b: T('ver- «out of the way»') },
        { a: T('entstehen'), b: T('ent- «origin, separation»') },
        { a: T('zerbrechen'), b: T('zer- «destruction»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which verb is inseparable?'),
      options: [
        T('erzählen — the {er-} never leaves {zählen}'),
        T('anrufen — the {an-} goes to the end of the sentence'),
        T('mitbringen — the {mit-} separates in {Ich bringe es mit}'),
        T('aufstehen — the {auf-} sounds [ˈaʊ̯f] at the end'),
      ],
      answer: 0,
      hint: T('Rule §3: the stress of an inseparable verb falls on the prefix.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A verb is inseparable when the prefix belongs to the root. The practical proof: it **refuses the directional {zu}**. {Ich sehe zu ihm} is impossible, {Ich sehe ihn} is correct.',
      ),
    },
    {
      n: '2',
      text: T(
        'Separating an inseparable verb destroys the word: {besuchen} written with {be-} at the end is not a form, it is a mistake. No inflection allows it.',
      ),
    },
    {
      n: '3',
      text: T(
        'Stress distinguishes the two types without morphological analysis: a separable verb stresses the stem ({ˈaʊ̯fˌʃteːən}), an inseparable one stresses the prefix ([bəˈzuːxən] in {besuchen}).',
      ),
    },
    {
      n: '4',
      text: T(
        'The prefix {er-} means "to bring something off": {erklären} «to explain», {erzählen} «to tell», {erfahren} «to find out», {erinnern} «to remind», {erreichen} «to reach». Without {er-}, {zählen} is only counting.',
      ),
    },
    {
      n: '5',
      text: T(
        'The participle of a separable verb is inseparable: {aufgestanden}, {angekommen}. The participle of an inseparable verb is too: {verstanden}, {erklärt}, {besucht}.',
      ),
    },
  ],
  notes: [
    {
      label: T('How to know without memorising'),
      text: T(
        'A learner who does not know {empfehlen} cannot infer that it is inseparable — and it is better not to try, because the attempt goes wrong. The safe route is the {dictionary}: if the participle form ({empfohlen}) contains {ge-} in the middle, with the prefix before it, the verb is inseparable. That is the only morphological rule you can trust, and it works even on verbs you have never seen. The second is phonetic: say the word slowly and listen for the loudest syllable. In {empfehlen} [ɛmˈpfeːlən] and in {aufstehen} [ˈaʊ̯fˌʃteːən] the answer arrives before the analysis.',
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        "Luther's Bible is, in good part, a catalogue of inseparable verbs — and that is no accident. Christian theology needs verbs expressing **complete acts**, not movements: {erschaffen} «to create», {erlösen} «to redeem», {erwählen} «to choose», {verheißen} «to promise», {vollenden} «to finish». In Genesis 1:1, {Am Anfang schuf Gott Himmel und Erde} «In the beginning God created the heavens and the earth»: {schuf} is {erschaffen} in the past, and the {er-} marks exactly that — God's hand reached a result. In John 3:16, {so hat Gott die Welt geliebt} «God so loved the world»: {geliebt} is the participle of {lieben}, which has no prefix, and {hat} is the present auxiliary carrying perfective sense. Recognising inseparable verbs is recognising actions seen as whole.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich verstehe diese Regel nicht.',
      gloss: T('I do not understand this rule ({nicht} last, negating the verb).'),
    },
    {
      text: 'Er besucht uns im Sommer.',
      gloss: T('He visits us in the summer ({besuchen} never separates).'),
    },
    {
      text: 'Sie erklärt den Text gut.',
      gloss: T('She explains the text well ({er-} = bringing something off).'),
    },
    {
      text: 'Wir haben ein Geschenk bekommen.',
      gloss: T('We received a present ({bekommen} at the end of the sentence, unbreakable).'),
    },
    {
      text: 'Ich sehe ihn, nicht zu ihm.',
      gloss: T('I see him, I do not go to him ({zu} refuses the inseparable {sehen}).'),
    },
    { text: 'Ich gehe zu ihm.', gloss: T('I go to him ({gehen} is separable and demands {zu}).') },
    {
      text: 'Er hat den Schlüssel verloren.',
      gloss: T('He lost the key ({ver-} = out of the way).'),
    },
    {
      text: 'Die Sache ist schnell entstanden.',
      gloss: T('The thing arose quickly ({ent-} marks origin).'),
    },
    { text: 'Du hast mich missverstanden.', gloss: T('You misunderstood me ({miss-} = error).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Separable against inseparable'),
      head: [T('Criterion'), T('Separable'), T('Inseparable')],
      rows: [
        ['posição do prefixo', 'no fim da oração', 'sempre colado'],
        ['acento', 'no radical', 'no prefixo'],
        ['aceita {zu} de direção', 'sim', 'não'],
        ['particípio', 'inseparável', 'inseparável'],
        ['exemplo', 'aufstehen / ich stehe auf', 'verstehen / ich verstehe'],
        ['significado do prefixo', 'direção ou finalidade', 'ação pontuada'],
      ],
    },
    {
      caption: T('Table 2 — The three families of inseparable verbs'),
      head: [T('Family'), T('Shape'), T('Examples')],
      rows: [
        ['prefijo + verbo', 'be- + suchen', 'besuchen, bezahlen, betrachten'],
        ['prefijo + t/d', 'ent- + stehen', 'entstehen, enthalten, verstehen'],
        ['prefijo + ieren', 'stud- + ieren', 'studieren, probieren, notieren'],
        ['prefijo de resultado', 'er- + klären', 'erklären, erzählen, erfahren'],
        ['prefijo de negação', 'ver- + lieren', 'verlieren, verhindern, verachten'],
      ],
    },
  ],
};
