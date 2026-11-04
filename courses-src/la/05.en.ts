import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Declensions and the verb sum'),
  title: T('The essential verbs'),
  subtitle: T('eo, venio, sum, habeo, facio, dico: the verbs that hold up almost every clause'),
  body: C(`## Twelve verbs, and two with no rule

A regular Latin verb drops its ending and returns a new one: in {amo}, {amas}, {amat}, the stem {ama-} does not move. The essentials have no fixed stem: {eo}, {venio}, {sum}, {habeo}, {facio}, {dico}, {video}, {audio}, {edo}, {bibo}, {dormio}, {morior}, {nascor}, {lego}, {scribo}, {loquor}, {vestio}, {possum}, {volo}, {scio}, {fero}, {pono} are forms that no rule produces, and they are what is read on every page.

They are few and they weigh a lot. {eo} to go, {venio} to come, {sum} to be, {habeo} to have, {facio} to do, {dico} to say, {video} to see, {audio} to hear, {edo} to eat, {bibo} to drink, {dormio} to sleep, {morior} to die, {nascor} to be born, {lego} to read, {scribo} to write, {loquor} to speak, {vestio} to wear, {possum} can, {volo} to want, {scio} to know, {fero} to carry, {pono} to put cover almost everything said in a chapter of a Gospel.

## sum: the verb with no regular present

{sum} is the most irregular verb in Latin: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. The imperfect is {eram}, {eras}, {erat}, {eramus}, {eratis}, {erant}, and the future {ero}, {eris}, {erit}, {erimus}, {eritis}, {erunt}. There is no common stem between the present and the imperfect — it is memorizing, not deducing.

{sum} is also the auxiliary of the perfect passive: {amatus sum}, {amatus es}, {amatus est}. The participle agrees with the subject, and {sum} closes the clause. Portuguese translates as "foi amado", but Latin says "amado é" — the verb to be carries the tense.

## eo and venio: to go and to come

{eo} "to go" is irregular in the present: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. The imperfect is {ibam}, {ibas}, {ibat}, {ibamus}, {ibatis}, {ibant}, and the future {ibo}, {ibis}, {ibit}, {ibimus}, {ibitis}, {ibunt}. The stem changes from {i-} to {ib-} — it is the mark of the verb.

{venio} "to come" is regular in the 4th conjugation: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. The imperfect is {veniebam}, {veniebas}, {veniebat}, {veniebamus}, {veniebatis}, {veniebant}, and the future {veniam}, {venies}, {veniet}, {veniemus}, {venietis}, {venient}. The difference in meaning is that of Portuguese: {eo} indicates movement outward, {venio} inward.

## In the Bible

John 1:1 begins with {erat}: {In principio erat Verbum}, in the beginning was the Word. {erat} is the imperfect of {sum}, 3rd person singular. And John 1:3 closes with {factum est}, the perfect passive of {facio}: all things were made. The Latin that begins with {erat} ends with {factum est}: the Word already was, and everything else was made.

Mark 4:39 has {tacere}, "to be silent": it is the infinitive of {taceo}, "to be silent". The whole verse shows the method: Latin places Jesus' command in the infinitive to say that the sea does not answer the command, but to Christ.`),
  vocab: [
    V('eo', 'eo', 'I go'),
    V('venio', 'venio', 'to come'),
    V('veni', 'venio', 'come'),
    V('sum', 'sum', 'to be'),
    V('eram', 'sum', 'was'),
    V('habeo', 'habeo', 'to have'),
    V('habebam', 'habeo', 'had'),
    V('facio', 'facio', 'to do'),
    V('feci', 'facio', 'did'),
    V('dico', 'dico', 'to say'),
    V('dixi', 'dico', 'said'),
    V('video', 'video', 'to see'),
    V('vidi', 'video', 'saw'),
    V('audio', 'audio', 'to hear'),
    V('audivi', 'audio', 'heard'),
    V('edo', 'edo', 'to eat'),
    V('bibo', 'bibo', 'to drink'),
    V('dormio', 'dormio', 'to sleep'),
    V('morior', 'morior', 'to die'),
    V('nascor', 'nascor', 'to be born'),
    V('lego', 'lego', 'to read'),
    V('scribo', 'scribo', 'to write'),
    V('loquor', 'loquor', 'to speak'),
    V('vestio', 'vestio', 'to wear'),
    V('possum', 'possum', 'can'),
    V('volo', 'volo', 'to want'),
    V('scio', 'scio', 'to know'),
    V('fero', 'fero', 'to carry'),
    V('pono', 'pono', 'to put'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sum} is the most irregular verb: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. Imperfect {eram}, {eras}, {erat}. Future {ero}, {eris}, {erit}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{sum} is the auxiliary of the perfect passive: {amatus sum}, {amatus es}, {amatus est}. The participle agrees with the subject.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eo} is irregular in the present: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. Imperfect {ibam}, {ibas}, {ibat}. Future {ibo}, {ibis}, {ibit}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{venio} is regular in the 4th conjugation: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. Imperfect {veniebam}, {veniebas}, {veniebat}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 uses {erat} (imperfect of {sum}) and John 1:3 uses {factum est} (perfect passive of {facio}): the Word already was, and everything else was made.',
      ),
    },
  ],
  notes: [
    {
      label: T('The eo that is not "to go"'),
      text: T(
        '{eo} indicates movement outward, {venio} inward. Whoever translates both as "ir" loses the direction. The imperfect of {eo} is {ibam}, not {eobam} — the stem changes.',
      ),
    },
    {
      label: T('The sum that is not "to be"'),
      text: T(
        '{sum} is the verb "to be", but also the auxiliary of the perfect passive. In {amatus sum}, {sum} carries the tense and the participle carries the state.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio erat Verbum',
      gloss: T('Jn 1:1 — {erat} is the imperfect of {sum}: the Word already was.'),
    },
    {
      text: 'et Verbum erat apud Deum',
      gloss: T('Jn 1:1 — {erat} with {apud}: the Word was with God.'),
    },
    {
      text: 'omnia per ipsum facta sunt',
      gloss: T('Jn 1:3 — {facta sunt} is the perfect passive of {facio}: all things were made.'),
    },
    { text: 'eo ad te', gloss: T('{eo} with {ad}: I go to you.') },
    { text: 'venio ad te', gloss: T('{venio} with {ad}: I come to you.') },
    { text: 'habeo unum filium', gloss: T('{habeo} with a direct object: I have one son.') },
    { text: 'dico vobis', gloss: T('{dico} with dative: I say to you.') },
    { text: 'video caelum', gloss: T('{video} with a direct object: I see the heaven.') },
    { text: 'audio vocem', gloss: T('{audio} with a direct object: I hear the voice.') },
    { text: 'tacere', gloss: T('Mk 4:39 — infinitive of {taceo}: to be silent.') },
  ],
  tables: [
    {
      caption: T('Present and imperfect of sum'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Future')],
      rows: [
        [T('1st sing.'), 'sum', 'eram', 'ero'],
        [T('2nd sing.'), 'es', 'eras', 'eris'],
        [T('3rd sing.'), 'est', 'erat', 'erit'],
        [T('1st pl.'), 'sumus', 'eramus', 'erimus'],
        [T('2nd pl.'), 'estis', 'eratis', 'eritis'],
        [T('3rd pl.'), 'sunt', 'erant', 'erunt'],
      ],
    },
    {
      caption: T('Present and imperfect of eo'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Future')],
      rows: [
        [T('1st sing.'), 'eo', 'ibam', 'ibo'],
        [T('2nd sing.'), 'is', 'ibas', 'ibis'],
        [T('3rd sing.'), 'it', 'ibat', 'ibit'],
        [T('1st pl.'), 'imus', 'ibamus', 'ibimus'],
        [T('2nd pl.'), 'itis', 'ibatis', 'ibitis'],
        [T('3rd pl.'), 'eunt', 'ibant', 'ibunt'],
      ],
    },
    {
      caption: T('Present and imperfect of venio'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Future')],
      rows: [
        [T('1st sing.'), 'venio', 'veniebam', 'veniam'],
        [T('2nd sing.'), 'venis', 'veniebas', 'venies'],
        [T('3rd sing.'), 'venit', 'veniebat', 'veniet'],
        [T('1st pl.'), 'venimus', 'veniebamus', 'veniemus'],
        [T('2nd pl.'), 'venitis', 'veniebatis', 'venietis'],
        [T('3rd pl.'), 'veniunt', 'veniebant', 'venient'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {In principio erat Verbum}, what is the tense of {erat}?'),
    options: [T('Present'), T('Imperfect'), T('Future'), T('Perfect')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "omnia per ipsum ___" with the perfect passive of {facio} for "was made".',
      ),
      answer: 'facta sunt',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its imperfect.'),
      pairs: [
        { a: T('{eo}'), b: T('{ibam}') },
        { a: T('{venio}'), b: T('{veniebam}') },
        { a: T('{sum}'), b: T('{eram}') },
        { a: T('{habeo}'), b: T('{habebam}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the future of {sum} in the 1st person?'),
      options: [T('{ero}'), T('{sum}'), T('{eram}'), T('{erit}')],
      answer: 0,
    },
  ],
};
