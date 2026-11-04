import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Adverbs of time'),
  subtitle: T('heute, morgen, gestern, bald — when it happens, not where'),
  section: T('Adjectives and adverbs'),
  body: C(`## Sentence time and calendar time

German separates two questions that Portuguese joins. {wann} «when» asks about the **moment**; an adverb such as {heute} «today», {morgen} «tomorrow» or {gestern} «yesterday» answers it. So do {seit wann} «since when» and {bis wann} «until when». The other question is {woher} or {wohin} «from where / to where», answered by {hier}, {dort}, {nach}, {zu} — and those are not time words.

The hardest word in this chapter is {morgen}: it means **tomorrow** on its own, and **in the morning** when something else comes with it. {Ich fahre morgen} «I am going tomorrow.» {Ich stehe morgen früh auf} «I get up early tomorrow morning.» Context saves you, but in formal texts German prefers {morgen früh} or {am Morgen}, and older Bible German uses {morgens} «in the morning».

## Three ways to say one idea

For each period German has a short word and a phrase with a preposition, so the same idea shows up in three ways:

- **now**: {jetzt} «now» / {heute} «today» / {heute Nachmittag} «this afternoon»
- **yesterday**: {gestern} «yesterday» / {gestern Abend} «yesterday evening» / {vor gestern} «the day before yesterday»
- **the day before yesterday**: {vorgestern} (one single word, {vor} + {gestern})
- **tomorrow**: {morgen} «tomorrow» / {morgen Abend} «tomorrow evening» / {übermorgen} «the day after tomorrow»

Look at the pattern: {übermorgen} is {über} + {morgen}, {vorgestern} is {vor} + {gestern}. German compounds the verb, not the idea. The {vor} in {vor gestern} and the {über} in {übermorgen} measure an **amount of time**, not a moment.

## {seit}, {bis}, {vor}, {nach}

Four time prepositions, four senses, and mixing them up is the commonest error:

| Preposition | Question | Example | Gloss |
|---|---|---|---|
| {seit} + dative | since when? | {seit einem Jahr} | for a year |
| {bis} + dative | until when? | {bis morgen} | until tomorrow |
| {vor} + dative / accusative | how long before? | {vor drei Tagen} | three days ago |
| {nach} + dative | how long after? | {nach dem Essen} | after the meal |

{seit} answers {seit wann} and renders Portuguese "há" plus a time span: {Ich bin seit zwei Jahren hier} «I have been here for two years». {vor} also renders "ago", but only with **past** and **countable** time: {vor einer Stunde} «an hour ago». You never say {seit einer Stunde} for an hour that has already passed; that would mean "since [an hour ago]", which is different and rare.

And watch the pair: {nach} with the noun {nach} + {dem} indicates **motion outwards**; {nach} with a verb or an adverb indicates **elapsed time afterwards**: {nach dem Essen} «after the meal», {zwei Jahre nach seiner Ankunft} «two years after his arrival».

## {schon}, {noch}, {bereits}

Three words Portuguese keeps together and German separates strictly:

- {schon} «already» — something that **has happened**: {Ich habe es schon gelesen} «I have already read it.»
- {noch} «still» — something that is **still possible**: {Ich habe es noch nicht gelesen} «I have not read it yet.»
- {bereits} «already, beforehand» — something that **overlaps** another event: {Als ich ankam, war er bereits gegangen} «When I arrived, he had already gone.»

And the negated pair: {nicht mehr} «no longer» and {noch nicht} «not yet». {Ich will nicht mehr} «I do not want any more» (I have stopped wanting) and {Ich will noch nicht} «I do not want yet» (I have not got there). They are different states.

## {während}, {wenn}, {bevor}

These three are confused more than any trio in the course:

- {während} «during» — subordinates and means **at the same time as**: {während ich arbeite, höre ich Musik} «while I work, I listen to music».
- {wenn} «when» — subordinates, **disjunctive** time, but it can turn into {ob} «if» when the verb sits last: {wenn ich zurückkomme, rufe ich an} «when I come back, I shall call».
- {bevor} «before» — subordinates and means **earlier**: {bevor er ging, aß er} «before he left, he ate».

The test is the verb. {Wenn ich gehe, komme ich} «if I go, I will come». {Wenn ich gehe, gehe ich} «when I go, I go». If the second verb is last, it is {ob}; if it is in the middle, it is {wenn}.

## What to take away

{morgen} is tomorrow or in the morning; {seit} answers "since when" and {vor} answers "how long ago"; {nach} marks time elapsed after; {schon} says it has already happened and {noch} that it is still possible; and {wenn} with a final verb is {ob}.`),
  vocab: [
    V('heute', 'heute', 'today'),
    V('gestern', 'gestern', 'yesterday'),
    V('morgen', 'morgen', 'tomorrow; in the morning'),
    V('übermorgen', 'übermorgen', 'the day after tomorrow'),
    V('vorgestern', 'vorgestern', 'the day before yesterday'),
    V('jetzt', 'jetzt', 'now, at the moment'),
    V('bald', 'bald', 'soon'),
    V('seit', 'seit', 'since (dative); since'),
    V('vor', 'vor', 'before; ago (past time)'),
    V('bis', 'bis', 'until (dative); until'),
    V('nach', 'nach', 'after; according to; towards'),
    V('schon', 'schon', 'already (something that has happened)'),
    V('noch', 'noch', 'still; not yet (with {nicht})'),
    V('bereits', 'bereits', 'already, beforehand'),
    V('während', 'während', 'during; while'),
    V('bevor', 'bevor', 'before (the verb goes last)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Ich bin ___ zwei Jahren in dieser Stadt}, which preposition fills the blank?'),
    options: [
      T('seit — it answers "since when" and marks a duration still running'),
      T('vor — {vor} measures elapsed time, not an ongoing duration'),
      T('nach — {nach} marks time after an event'),
      T('bis — {bis} marks a final limit'),
    ],
    answer: 0,
    hint: T('Rule §2: {seit} + dative for something that began and still runs.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The day before yesterday, in one word: ___'),
      answer: 'vorgestern',
      hint: T('It is {vor} + {gestern} fused, just as {über} + {morgen} = {übermorgen}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its function.'),
      pairs: [
        { a: T('vor drei Tagen'), b: T('three days ago') },
        { a: T('seit drei Tagen'), b: T('for three days (still going)') },
        { a: T('nach drei Tagen'), b: T('three days later') },
        { a: T('bis morgen'), b: T('until tomorrow') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In which sentence is the conjugated verb in the position of {ob} «if»?'),
      options: [
        T('{Wenn ich zurückkomme, rufe ich dich an} — the second verb is in the middle.'),
        T('{Wenn ich zurückkomme, rufe ich dich an} — the second verb is last.'),
        T('{Während ich arbeite, höre ich Musik} — the second verb is last.'),
        T('{Bevor er ging, aß er} — the second verb is last.'),
      ],
      answer: 0,
      hint: T('Rule §5: if the second verb is not last, the subordination uses {wenn}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{seit} + dative answers "since when" and marks a duration that has begun and still runs: {Ich warte seit einer Stunde} «I have been waiting for an hour».',
      ),
    },
    {
      n: '2',
      text: T(
        '{vor} + dative measures elapsed time: {vor drei Tagen} «three days ago». Never use {vor} for something that began and still runs; use {seit} instead.',
      ),
    },
    {
      n: '3',
      text: T(
        '{nach} + dative marks time elapsed **after** an event: {nach dem Essen} «after the meal», {zwei Jahre nach seiner Ankunft} «two years after his arrival».',
      ),
    },
    {
      n: '4',
      text: T(
        '{bis} + dative marks the final limit: {bis morgen} «until tomorrow», {bis zum Monatsende} «until the end of the month».',
      ),
    },
    {
      n: '5',
      text: T(
        '{schon} says something has already happened; {noch} says it is still possible. With {nicht}: {nicht mehr} «no longer» and {noch nicht} «not yet» are different states.',
      ),
    },
    {
      n: '6',
      text: T(
        '{während} means "at the same time as". {wenn} means "when" or "if": if the conjugated verb of the subordinate clause goes last, it is {ob} «if»; if it stays in the middle, it is {wenn} «when».',
      ),
    },
  ],
  notes: [
    {
      label: T('{morgen} is two words with one name'),
      text: T(
        'The word {morgen} is the finest example of how German prefers context to marking. On its own it is "tomorrow". With {Abend} or with an hour noun it becomes "in the morning": {morgen früh} «early tomorrow», {morgen Mittag} «tomorrow at midday». {Abend} behaves the same way: {am Abend} is the period, {heute Abend} the point in time. Older Luther German uses {morgens} and {abends} as adverbs, a form now rare outside fixed expressions.',
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        'Time in Luther shows up almost always with {vor} or {nach}, never with {seit}. In Psalm 90:1, {der du die Menschen heim suchest in Ewigkeit} «you who lead the children of men back to their rest»: the infinitive {suchest} points at a landmark, and the construction marks eternity as something that has already begun. In Hebrews 13:8, {Jesus Christus gestern und heute und derselbe auch in Ewigkeit} «Jesus Christ yesterday, today and the same for ever»: {gestern} and {heute} in sequence are gerunds — participles used as adverbs. In Luke 24:29, {stehet aber hier und gehet nicht} «but stay here and do not go»: the {gehet nicht} binds the command to the immediate present, and it is one of the few places where the tense of the text matches that of speech.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('I am going to Berlin tomorrow ({morgen} = tomorrow, on its own).'),
    },
    {
      text: 'Ich stehe morgen früh auf.',
      gloss: T('I get up early tomorrow morning ({morgen} = in the morning, accompanied).'),
    },
    {
      text: 'Ich warte seit einer Stunde.',
      gloss: T('I have been waiting for an hour ({seit} + dative, ongoing duration).'),
    },
    {
      text: 'Wir kamen vor drei Tagen an.',
      gloss: T('We arrived three days ago ({vor} measures elapsed time).'),
    },
    {
      text: 'Zwei Wochen nach meiner Ankunft zog ich um.',
      gloss: T('Two weeks after my arrival I moved ({nach} + case).'),
    },
    {
      text: 'Die Vorlesung dauert bis sechzehn Uhr.',
      gloss: T('The lecture lasts until four p.m. ({bis} marks the limit).'),
    },
    {
      text: 'Ich habe das Buch schon gelesen.',
      gloss: T('I have already read this book ({schon}: the fact has happened).'),
    },
    {
      text: 'Ich habe das Buch noch nicht gelesen.',
      gloss: T('I have not read this book yet ({noch nicht}: the possibility remains).'),
    },
    {
      text: 'Während ich arbeite, höre ich Musik.',
      gloss: T('While I work, I listen to music ({während} = at the same time as).'),
    },
    {
      text: 'Wenn ich zurückkomme, rufe ich dich an.',
      gloss: T('When I come back, I shall call you ({wenn} with the verb in the middle = when).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Time adverbs and phrases'),
      head: [T('Period'), T('Short'), T('With preposition'), T('Gloss')],
      rows: [
        ['hoje', 'heute', 'an heute', 'today'],
        ['amanhã', 'morgen', 'am nächsten Tag', 'tomorrow'],
        ['ontem', 'gestern', 'am letzten Tag', 'yesterday'],
        ['anteontem', 'vorgestern', 'vor gestern', 'the day before yesterday'],
        ['depois de amanhã', 'übermorgen', 'über morgen', 'the day after tomorrow'],
        ['agora', 'jetzt', 'in diesem Augenblick', 'now'],
        ['de manhã', 'früh', 'am Morgen', 'in the morning'],
        ['à noite', 'abends', 'am Abend', 'in the evening'],
        ['à tarde', 'nachmittags', 'am Nachmittag', 'in the afternoon'],
      ],
    },
    {
      caption: T('Table 2 — The four time prepositions'),
      head: [T('Preposition'), T('Case'), T('Question'), T('Example')],
      rows: [
        ['seit', 'dativo', 'desde quando?', 'seit drei Monaten'],
        ['bis', 'dativo', 'até quando?', 'bis zum Sonntag'],
        ['vor', 'dativo / acusativo', 'há quanto tempo?', 'vor zwei Wochen'],
        ['nach', 'dativo', 'quanto tempo depois?', 'nach dem Unterricht'],
      ],
    },
  ],
};
