import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('The comparative and the superlative'),
  subtitle: T('besser, größer, am besten — grau makes it easy'),
  section: T('Adjectives and adverbs'),
  body: C(`## The short rule

The comparative adds **-er**, the superlative takes **-ste**. That is all. A one-syllable adjective like {klein} «small» gives {kleiner} «smaller» and {am kleinsten} «the smallest». A two-syllable adjective does the same, as long as its stem has no {ie}, {ei} or {eu}: {teuer} «expensive» gives {teurer} and {am teuersten}. Pronunciation follows the suffix: {-er} is [ɐ], a schwa, and {-est} is [əst] and takes the stress — {größer} is [ˈɡʁøːsɐ], {am größten} is [am ˈɡʁøːstn̩].

The trick that settles almost everything is the word **grau**: **grau** is one of the few German words whose shape you can predict. It works as a multiplier:

- {viel} + grau = {mehr} «more»
- {hoch} + grau = {höher} «higher»
- {teuer} + grau = {teurer} «more expensive»

You can already say "more" about almost anything: just add **mehr**.

## What {ö} and {ü} do

Seven adjectives change the vowel of their stem. The {ö} and {ü} are not decoration: they bring the word closer to its meaning, because {groß} is large and {größer} is comparatively large, not merely bigger. And pronunciation betrays the speaker: {ö} is [øː], a rounded close vowel like a long {o}, and {ü} is [yː], close to the front. No other German sound does exactly that.

The five that swap their vowel in the comparative are {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser} and {nahe} → {näher}. Two more change nothing but the suffix: {arm} → {ärmer} and {stark} → {stärker}, which merely take a umlaut.

The superlative of those forms drops the {e} of {-(e)st}: {am größten} «the largest», {am besten} «the best», {am jüngsten} «the youngest». And the superlative of {viel} is {am meisten}, with {v} turning into {m}.

## {als} or {wie}

The difference is one of meaning, not of form. {wie} «as, like» introduces **equality**: {mein Bruder ist so groß wie ich} «my brother is as tall as I am». {als} «than» introduces **difference**: {mein Bruder ist größer als ich} «my brother is taller than I am».

When there is equality with a reservation, German uses {nicht so … wie}: {Der Weg ist nicht so lang, wie ich dachte} «the road is not as long as I thought».

One caution: {als} also means «when» and «as» (= «instead of»). Context settles it, but in isolation read the whole sentence.

## Comparative adverbs

Adverbs drop the {e} before {r} or {st}, which is why almost all of them have only two forms:

- {gut} → {besser} [ˈbɛsɐ] «better»
- {oft} → {öfter} «more often»
- {gern} → {lieber} «more willingly»
- {viel} → {mehr} «more»

Verbs never form a superlative. To say "the most", German reaches for a noun: {das Beste} «the best», {das Schönste} «the most beautiful», with {das} pointing at something neuter or the noun standing alone.

## What to take away

{-(e)r} and {-(e)st} cover ordinary comparison; **grau** covers everything meaning "more"; seven adjectives change the vowel and lose the {e} in the superlative; {wie} is equality, {als} is difference.`),
  vocab: [
    V('klein', 'klein', 'small (comp.: kleiner, sup.: am kleinsten)'),
    V('groß', 'groß', 'large (comp.: größer, sup.: am größten)'),
    V('gut', 'gut', 'good (comp.: besser, sup.: am besten)'),
    V('teuer', 'teuer', 'expensive (comp.: teurer, sup.: am teuersten)'),
    V('hoch', 'hoch', 'high (comp.: höher, sup.: am höchsten)'),
    V('jung', 'jung', 'young (comp.: jünger, sup.: am jüngsten)'),
    V('nahe', 'nahe', 'near (comp.: näher, sup.: am nächsten)'),
    V('arm', 'arm', 'poor (comp.: ärmer, sup.: am ärmsten)'),
    V('stark', 'stark', 'strong (comp.: stärker, sup.: am stärksten)'),
    V('viel', 'viel', 'much (comp.: mehr, sup.: am meisten)'),
    V('gern', 'gern', 'gladly (comp.: lieber)'),
    V('oft', 'oft', 'often (comp.: öfter)'),
    V('grau', 'grau', 'grey; "more" (grau + adjective)'),
    V('als', 'als', 'than (difference); when'),
    V('wie', 'wie', 'as, like (equality)'),
    V('am besten', 'gut', 'the best, best'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {mein Bruder ist größer ___ ich}, which word fills the blank?'),
    options: [
      T('als — there is a difference in height between the two'),
      T('wie — it would also be right, because {größer} presupposes inequality'),
      T('so — {so} introduces equality, not difference'),
      T('gern — {gern} forms a comparative but makes no sense here'),
    ],
    answer: 0,
    hint: T('Rule §3: {als} marks difference, {wie} marks equality.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Superlative of {gut} in the quality form: am ___'),
      answer: 'besten',
      hint: T(
        '{gut} is irregular in the comparative ({besser}) and the superlative drops the {e}: {beste} + {n}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match each comparative to its superlative.'),
      pairs: [
        { a: T('größer'), b: T('am größten') },
        { a: T('jünger'), b: T('am jüngsten') },
        { a: T('teurer'), b: T('am teuersten') },
        { a: T('kleiner'), b: T('am kleinsten') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is entirely correct?'),
      options: [
        T('The mountain is higher than the hill.'),
        T('The mountain is as high as the hill.'),
        T('The mountain is most as high the hill.'),
        T('The mountain is more high than the hill.'),
      ],
      answer: 0,
      hint: T('Rule §2: {hoch} + {grau} = {höher}; and {höher} is already different, so {als}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The comparative adds {-er} and the superlative adds {-ste} to practically any adjective, with no internal change.',
      ),
    },
    {
      n: '2',
      text: T(
        'The word grau resolves "more": {hoch} + {grau} = {höher}, {teuer} + {grau} = {teurer}, {viel} + {grau} = {mehr}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Five adjectives change the stem vowel: {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser}, {nahe} → {näher}. In the superlative all of them drop the {e}: {am größten}, {am höchsten}, {am jüngsten}, {am besten}, {am nächsten}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{wie} introduces equality and {als} introduces difference. With reserved equality use {nicht so … wie}: {Er ist nicht so alt wie sein Bruder}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Verbs form no superlative. A verbal "most" becomes a noun: {das Beste} «the best», {das Schönste} «the most beautiful».',
      ),
    },
  ],
  notes: [
    {
      label: T('The grau trick'),
      text: T(
        'Learning comparatives and superlatives as lists is fragile: there are thousands of adjectives and no guarantee. Learning **grau** is a single rule. Say {hoch} and {grau} together and the form follows. If the word already ends in {er} ({sicher} «safe», {dunkel} «dark»), the comparative {er} simply doubles: {sicherer}, {dunkler}.',
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        'In 1 Corinthians 13:13 Luther\'s version reads: {Der Glaube, die Hoffnung, die Liebe, bleibt. Diese drei aber bleiben ewig.} «The faith, the hope, the love remain. These three, however, remain for ever.» The Zürich translation prefers the substantivised superlative: {Aber der höchste davon ist die Liebe} «but the greatest of these is love». Note that the comparative never appears in either version: the "greatest" is built with {-(e)st} plus a noun, and {höchste} belongs to the umlaut series. In Psalm 19:1, {Der Himmel erzählt die Ehre Gottes}, listen also to the {ch} of {Himmel} and {erzählt}, sounded [ç] before {e}, a clear sign that the speaker masters the sounds.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Berg ist höher als der Hügel.',
      gloss: T('The mountain is higher than the hill (comparative of {hoch} with {als}).'),
    },
    {
      text: 'Dieses Buch ist teurer als jenes.',
      gloss: T(
        'This book is more expensive than that one ({teuer} keeps the stem {e} plus {-er}).',
      ),
    },
    {
      text: 'Meine Mutter ist so alt wie mein Vater.',
      gloss: T('My mother is as old as my father ({so … wie} = equality).'),
    },
    { text: 'Das ist am besten.', gloss: T('That is best ({am besten}, the quality form).') },
    {
      text: 'Sie ist die Beste in der Klasse.',
      gloss: T('She is the best in the class (substantivised superlative with {die}).'),
    },
    {
      text: 'Ich trinke lieber Tee als Kaffee.',
      gloss: T('I prefer tea to coffee ({gern} → {lieber}, adverbial comparative).'),
    },
    {
      text: 'Der Weg ist nicht so lang, wie ich dachte.',
      gloss: T('The road is not as long as I thought ({nicht so … wie} = reserved equality).'),
    },
    {
      text: 'Er ist noch jünger als ich.',
      gloss: T('He is even younger than I am ({noch} + comparative intensifies).'),
    },
    {
      text: 'Diese Straße ist die breiteste der Stadt.',
      gloss: T('This street is the widest in the town (superlative of {breit} in {breiteste}).'),
    },
    {
      text: 'Wir sprechen mehr Deutsch als Englisch.',
      gloss: T(
        'We speak more German than English ({mehr} is the comparative of {viel}, with no {e}).',
      ),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The degree in three columns'),
      head: [T('Adjective'), T('Comparative'), T('Superlative'), T('Particle')],
      rows: [
        ['klein', 'kleiner', 'kleinst-', 'am kleinsten'],
        ['groß', 'größer', 'größt-', 'am größten'],
        ['hoch', 'höher', 'höchst-', 'am höchsten'],
        ['jung', 'jünger', 'jüngst-', 'am jüngsten'],
        ['arm', 'ärmer', 'ärmst-', 'am ärmsten'],
        ['nahe', 'näher', 'nächst-', 'am nächsten'],
        ['teuer', 'teurer', 'teuerst-', 'am teuersten'],
        ['gut', 'besser', 'best-', 'am besten'],
        ['viel', 'mehr', 'meist-', 'am meisten'],
        ['gern', 'lieber', '—', 'am liebsten'],
      ],
    },
    {
      caption: T('Table 2 — Suffix and stem vowel'),
      head: [T('Word type'), T('End of the stem'), T('Superlative'), T('Example')],
      rows: [
        ['uma sílaba', 'qualquer', '-est', 'am klugsten'],
        ['-d ou -t', 'qualquer', '-sten (sem e)', 'am breitesten'],
        ['-s, -ß, -sch, -z', 'qualquer', '-sten (sem e)', 'am kürzesten'],
        ['-el, -er, -em', 'sem alteração', '-sten (com e)', 'am dunkelsten'],
        ['três ou mais sílabas', 'qualquer', '-sten (com e)', 'am interessantesten'],
      ],
    },
  ],
};
