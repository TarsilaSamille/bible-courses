import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('The verbs'),
  title: T('The essential verbs'),
  subtitle: T(
    '{gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen} and the verbs that decide every clause',
  ),
  body: C(`## Twenty verbs, and three with no fixed shape

A regular German verb drops its ending and returns a new one: in {mache}, {machst}, {macht}, the stem {mach-} does not move. The essentials have no fixed stem: {bin}, {bist}, {ist}, {war}, {werde}, {wird}, {habe}, {hast}, {hat}, {will}, {wollte} are forms that no rule produces, and they have to be learned one by one.

They are few and they weigh a lot. {gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen}, {geben}, {sehen}, {essen}, {trinken}, {schlafen}, {sterben}, {lesen}, {schreiben}, {sprechen}, {hören}, {nehmen}, {bringen}, {wissen}, {können}, {wollen}, {müssen}, {dürfen}, {sollen} cover almost everything said in a chapter of a Gospel.

## The Präsens that changes vowel in du and er

In the Präsens, the ablaut verbs change their vowel only in the 2nd and 3rd person singular. That is where {sehen} becomes {siehst}/{sieht}, {lesen} becomes {liest}/{liest}, {geben} becomes {gibst}/{gibt}, {essen} becomes {isst}/{isst}, {sprechen} becomes {sprichst}/{spricht}.

Three families: {e} becomes {ie} or {i}, {a} becomes {ä}, {au} becomes {äu}. It is not a stylistic note; it is the rule that decides the pronunciation. Whoever writes {sehen} without noticing the {e} turned into {ie} says {si-en} where German says {sihst}.

{Wir} and {sie/Sie} keep the infinitive stem: {sehen} makes {sehen}, {fahren} makes {fahren}. And the Präsens of {können}, {wollen}, {müssen} and the other modals changes no vowel in the singular; only the 1st and 3rd person singular lose their ending: {ich kann}, {er kann}, and {du kannst}.

## Perfect: who takes {haben} and who takes {sein}

The Perfekt is {haben} or {sein} in the present plus a participle: {ich habe gemacht}, {ich bin gegangen}. The choice of auxiliary is not free. Verbs of movement and of change of state take {sein}: {ich bin gegangen}, {sie ist gekommen}, {er ist gestorben}, {wir sind gefahren}. The rest take {haben}: {ich habe gegessen}, {du hast gelesen}, {sie haben geschlafen}.

If the verb does not move and does not change state, it is {haben}. If there is physical movement, or the subject is born, dies, remains or becomes something else, it is {sein}. It is that simple, and almost no verb escapes the rule.

The preterite of {sein} has no participle; it is the form {war}: {ich war}, {du warst}, {er war}, {wir waren}, {ihr wart}, {sie waren}. And the preterite of {haben} is {hatte}, {hattest}, {hatte}, {hatten}, {hattet}, {hatten}.

## The six modals

{können}, {wollen}, {müssen}, {dürfen}, {sollen} and {mögen} are the modals, and what sets them apart is the stem: in the 1st and 3rd person singular the present takes no ending. {ich kann}, {er kann}; {ich will}, {er will}; {ich muss}, {er muss}; {ich darf}, {er darf}; {ich soll}, {er soll}; {ich mag}, {er mag}. Only in the 2nd person does the {st} appear: {du kannst}, {du willst}.

The modal governs an infinitive that takes no {zu}: {ich kann gehen}, {er will lesen}, {wir müssen essen}. {Zu} comes in everywhere else: {ich entscheide mich, zu gehen} has {zu gehen}, {kannst du gehen} does not.

## In the Bible

John 1:1 opens with {war}: {Im Anfang war das Wort}, in the beginning was the Word. {War} is the preterite of {sein}, and it is what German uses where Greek used {ἦν}. John 3:16 has {hat Gott die Welt geliebt} in Luther's translation: {geliebt} is the participle of {lieben} and {hat} is the auxiliary.

Mark 4:39 is one full imperative verb: {Schweige und verstumme!}, be silent and die away. {Schweige} is the imperative of {schweigen} and {verstumme} is the imperative of {verstummen}, both with no visible ending. The Greek is {Σιωπήσον καὶ γαλάσσου}, and Luther preserves what the KJV turns into a command into a single word: {schweigte} would be a statement, this is a command.`),
  vocab: [
    V('bin', 'sein', 'I am'),
    V('bist', 'sein', 'you are'),
    V('war', 'sein', 'he was / I was'),
    V('werde', 'werden', 'I become'),
    V('habe', 'haben', 'I have'),
    V('hatte', 'haben', 'I had'),
    V('gehe', 'gehen', 'I go'),
    V('komme', 'kommen', 'I come'),
    V('esse', 'essen', 'I eat'),
    V('isst', 'essen', 'you eat / he eats'),
    V('sehe', 'sehen', 'I see'),
    V('siehst', 'sehen', 'you see'),
    V('lese', 'lesen', 'I read'),
    V('liest', 'lesen', 'you read / he reads'),
    V('gebe', 'geben', 'I give'),
    V('gibt', 'geben', 'he gives'),
    V('kann', 'können', 'I can / he can'),
    V('will', 'wollen', 'I want / he wants'),
    V('muss', 'müssen', 'I must / he must'),
    V('darf', 'dürfen', 'I may / he may'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sein} and {haben} are inflected by hand: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}; {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'In the Präsens the vowel of ablaut verbs changes in the 2nd and 3rd person singular: {e}→{ie/i} ({siehst}, {liest}, {gibst}, {isst}), {a}→{ä} ({fährst}, {trägst}, {schläfst}), {au}→{äu} ({läufst}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'The Perfekt takes {sein} with verbs of movement or change of state ({ich bin gegangen}, {er ist gestorben}), and {haben} with the rest ({ich habe gegessen}).',
      ),
    },
    {
      n: '§4',
      text: T(
        'Modals have no ending in the 1st and 3rd person singular: {ich kann}, {er will}, {sie muss}, {es darf}. The infinitive they govern takes no {zu}: {ich kann gehen}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The {du} imperative drops the ending of the 2nd person: {geh!}, {komm!}, {sieh!}, {lies!}, {iss!}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Präteritum the Perfekt replaced'),
      text: T(
        '{War} and {hatte} are the only past forms German uses where the Perfekt present does not work. With the modals it is the other way round: the Perfekt ({hätte gekonnt}) is rare and the Präteritum ({konnte}, {wollte}, {musste}, {durfte}, {sollte}, {mochte}) is the normal past. {Ich konnte gehen} is common; {ich habe gekonnt gehen} barely shows up outside colloquial speech.',
      ),
    },
    {
      label: T('The {ward} that John 3:16 no longer has'),
      text: T(
        "Luther's translation has {ward} instead of {wurde} for the preterite of {werden}: {ward Fleisch} is {wurde Fleisch}. {Ward} is the old preterite of {werden}, and it disappeared from modern German, but it is in the 1545 edition and that is what the reader meets.",
      ),
    },
  ],
  examples: [
    { text: 'Im Anfang war das Wort.', gloss: T('{war}: preterite of {sein}, Jn 1:1.') },
    { text: 'Das Wort ist Gott.', gloss: T('{ist}: present of {sein}.') },
    { text: 'Ich habe gegessen.', gloss: T('Perfekt with {haben}: participle of {essen}.') },
    { text: 'Er ist gekommen.', gloss: T('Perfekt with {sein}: movement.') },
    { text: 'Sie ist gestorben.', gloss: T('Perfekt with {sein}: change of state.') },
    { text: 'Ich kann nicht kommen.', gloss: T('Modal {können} with no person ending.') },
    { text: 'Wir müssen essen.', gloss: T('{müssen} governs an infinitive without {zu}.') },
    { text: 'Geh!', gloss: T('Imperative of {gehen} with the ending dropped.') },
    { text: 'Iss!', gloss: T('Imperative of {essen} with the {e} dropped.') },
    { text: 'Ich sehe den Mann.', gloss: T('Present of {sehen}, stem unchanged.') },
  ],
  tables: [
    {
      caption: T('Präsens of the essentials'),
      head: [T('Person'), T('sein'), T('haben'), T('gehen'), T('essen'), T('sehen')],
      rows: [
        ['ich', 'bin', 'habe', 'gehe', 'esse', 'sehe'],
        ['du', 'bist', 'hast', 'gehst', 'isst', 'siehst'],
        ['er/sie/es', 'ist', 'hat', 'geht', 'isst', 'sieht'],
        ['wir', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
        ['ihr', 'seid', 'habt', 'geht', 'esst', 'seht'],
        ['sie/Sie', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
      ],
    },
    {
      caption: T('Perfekt and each verb’s auxiliary'),
      head: [T('Verb'), T('Auxiliary'), T('Perfekt'), T('Participle')],
      rows: [
        ['gehen', 'sein', 'ist gegangen', 'gegangen'],
        ['kommen', 'sein', 'ist gekommen', 'gekommen'],
        ['sterben', 'sein', 'ist gestorben', 'gestorben'],
        ['bleiben', 'sein', 'ist geblieben', 'geblieben'],
        ['fahren', 'sein', 'ist gefahren', 'gefahren'],
        ['werden', 'sein', 'ist geworden', 'geworden'],
        ['essen', 'haben', 'hat gegessen', 'gegessen'],
        ['sehen', 'haben', 'hat gesehen', 'gesehen'],
        ['lesen', 'haben', 'hat gelesen', 'gelesen'],
        ['schreiben', 'haben', 'hat geschrieben', 'geschrieben'],
        ['geben', 'haben', 'hat gegeben', 'gegeben'],
        ['nehmen', 'haben', 'hat genommen', 'genommen'],
      ],
    },
    {
      caption: T('The six modals in the present'),
      head: [T('Modal'), T('ich'), T('du'), T('er'), T('wir'), T('Perfekt')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'hat gekonnt'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'hat gewollt'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'hat gemusst'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'hat gedurft'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'hat gesollt'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'hat gemocht'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which auxiliary does {sterben} take in the Perfekt?'),
    options: [T('{haben}'), T('{sein}'), T('{werden}'), T('{gehen}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the Präsens of {essen}: "Du ___" (3rd singular).'),
      answer: 'isst',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the auxiliary of its Perfekt.'),
      pairs: [
        { a: T('{gehen}'), b: T('{sein}') },
        { a: T('{essen}'), b: T('{haben}') },
        { a: T('{kommen}'), b: T('{sein}') },
        { a: T('{lesen}'), b: T('{haben}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the correct form of the modal {können} in the 1st person?'),
      options: [T('{ich kanne}'), T('{ich kannst}'), T('{ich kann}'), T('{ich können}')],
      answer: 2,
    },
  ],
};
