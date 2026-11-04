import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('The irregular verbs'),
  subtitle: T('vowel change, {ist} and {hat} and the Präteritum group'),
  section: T('The verbs'),
  body: C(`## The vowel change

Most German verbs form the past by joining the perfective stem to the imperfective one, without touching the vowel: *spielen – spielte – gespielt*, *suchen – suchte – gesucht*. The irregular ones do something else: they swap the vowel of the stem. *sprechen – sprach – gesprochen*, *lesen – las – gelesen*, *geben – gab – gegeben*. This swap is called *Ablaut*, and it is the oldest mark in the language, older even than the formation of Proto-Germanic.

The bare rule of the Perfekt is this: a verb takes **haben** when the subject acts, and **ist** when the subject is moving or changing state. *Ich habe das Buch gelesen* (action), *Das Kind ist zur Schule gegangen* (change), *Er ist gestorben* (state). The verbs that demand **ist** form a small, closed group.

## The four verbs that break the pattern

Four verbs form a case of their own, because they conjugate neither like strong verbs nor like weak ones: **sein**, **haben**, **werden** and **wissen**. *sein* is the only impersonal verb in the group, which explains the use of the third person with no explicit subject: *Es ist kalt*, *Es ist heute Sonntag*. And that is why the indicative of *sein* is irregular: *ich bin, du bist, er ist, wir sind, ihr seid, sie sind*.

## The Präteritum block

The **strong** verbs formed their past with an *Ablaut*, and that group — precisely the most frequent verbs of the language — fixed the form in the **Präteritum** as the narrative past: *ich sagte, er kam, wir gingen*. The weak verbs, by contrast, formed the past with the suffix *-te* and have almost lost it: today we say *ich sagte* and not *ich sagte*. Old, Middle and Modern High German: in the present the difference between strong and weak is thin; what separates the groups is the past.

To the strong group also count the verbs that show *Umlaut* in the past without a full *Ablaut*: *halten – hielt – gehalten*, *bestellen – bestellte – bestellt*, *zählen – zählte – gezählt*. The long vowel of the present leaps to *ie*, and the *Perfekt* goes back to the *ie* of the present: *hält – hielt – gehalten*.

## What to take away

What separates one verb from another lies in the past, not in the present. Keep three columns at once — present, Präteritum, Perfekt — and the irregularity stops being a list and becomes a pattern.`),
  vocab: [
    V('sprechen', 'sprechen', 'to speak (sprach, hat gesprochen)'),
    V('lesen', 'lesen', 'to read (las, hat gelesen)'),
    V('sehen', 'sehen', 'to see (sah, hat gesehen)'),
    V('geben', 'geben', 'to give (gab, hat gegeben)'),
    V('nehmen', 'nehmen', 'to take (nahm, hat genommen)'),
    V('essen', 'essen', 'to eat (aß, hat gegessen)'),
    V('trinken', 'trinken', 'to drink (trank, hat getrunken)'),
    V('sein', 'sein', 'to be (war, ist gewesen)'),
    V('haben', 'haben', 'to have (hatte, hat gehabt)'),
    V('werden', 'werden', 'to become (wurde, ist geworden)'),
    V('wissen', 'wissen', 'to know (wusste, hat gewusst)'),
    V('gehen', 'gehen', 'to go (ging, ist gegangen)'),
    V('laufen', 'laufen', 'to run (lief, ist gelaufen)'),
    V('halten', 'halten', 'to hold (hielt, hat gehalten)'),
    V('ist geworden', 'werden', 'has become (auxiliary ist)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the auxiliary of the Perfekt in {Das Kind ist gestorben}?'),
    options: [
      T('ist, because the verb denotes a state'),
      T('hat, because it is a strong verb'),
      T('wird, because it is a new state'),
      T('bleibt, because the subject remains'),
    ],
    answer: 0,
    hint: T('Rule §3: verbs of state take ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum of {sprechen} in the first person: ich ___'),
      answer: 'sprach',
      hint: T('Strong: the -ie- of the present becomes -a-.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the strong verb {nehmen} correctly?'),
      options: [
        T('He took the key and went.'),
        T('He tookete the key and went.'),
        T('He nimmet the key and went.'),
        T('He nehmte the key and went.'),
      ],
      answer: 0,
      hint: T('Rules §1 and §2: a strong verb never takes -te.'),
    },
    {
      kind: 'fill',
      prompt: T('Translate {es begab sich} (Luke 2:8).'),
      answer: 'it came to pass',
      hint: T("Präteritum of sich begeben, the fixed shape of Luther's narratives."),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the Perfekt form'),
      pairs: [
        { a: T('gehen'), b: T('ist gegangen') },
        { a: T('lesen'), b: T('hat gelesen') },
        { a: T('werden'), b: T('ist geworden') },
        { a: T('verstehen'), b: T('hat verstanden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Strong verbs swap the stem vowel in the past: sprechen – sprach – gesprochen, lesen – las – gelesen, trinken – trank – getrunken.',
      ),
    },
    {
      n: '2',
      text: T(
        'The ending -te of the Präteritum belongs to the weak verbs: ich sagte, wir suchten. In the strong ones it never appears: ich sprach, wir sprachen.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the Perfekt only verbs of movement, change of state and the four special ones take ist; everything else takes hat.',
      ),
    },
    {
      n: '4',
      text: T(
        'sein, haben, werden and wissen follow no pattern: learn them as whole phrases, never by analogy.',
      ),
    },
    {
      n: '5',
      text: T(
        'After verbs with Umlaut the Perfekt goes back to the ie: halten – hielt – hat gehalten, zählen – zählte – hat gezählt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Two thirds of the irregulars are inheritances'),
      text: T(
        'German strong verbs are almost all of Saxon or Franconian origin, and the pattern settled in one dialect area around the sixth century. In southern teaching dialects — Bavarian, Swiss, Austrian — the *Ablaut* was dropped, and you hear *ich hab gelesen* instead of *ich habe gelesen*. Luther wrote in a form that sounds archaic and elevated precisely to keep a distance from that everyday Germanic change.',
      ),
    },
    {
      label: T('Reading Luther'),
      text: T(
        'The construction *und es begab sich* of the Nativity narrative, and the whole preterite of the New Testament stories, runs on strong verbs alone: *es begab sich, daß ein Knecht des Herrn aus dem Hause des Herzogs Absalom zog* (Luke 2:8). The verse is long because the Präteritum — what happened once — lets a single punctual action take the place of the narrative present.',
      ),
    },
  ],
  examples: [
    { text: 'Ich habe das Buch gelesen.', gloss: T('I read the book (Perfekt with haben).') },
    { text: 'Es ist heute Sonntag.', gloss: T('It is Sunday today (sein without a subject).') },
    { text: 'Wir sind nach Hause gegangen.', gloss: T('We went home (movement: ist).') },
    {
      text: 'Der Lehrer sprach lange.',
      gloss: T('The teacher spoke a long time (strong Präteritum).'),
    },
    { text: 'Sie hat das Brot gegessen.', gloss: T('She ate the bread (Ablaut a – aß – e).') },
    { text: 'Er hat den Brief genommen.', gloss: T('He took the letter (nehmen: -ahm-, -omm-).') },
    { text: 'Ich habe es nicht gewusst.', gloss: T('I did not know (wissen: weak in the past).') },
    {
      text: 'Der Zug ist nach Berlin gefahren.',
      gloss: T('The train went to Berlin (ist + gefahren).'),
    },
    {
      text: 'Es begab sich zu der Zeit, daß ein Knecht des Herrn ging.',
      gloss: T(
        'It came to pass in those days that a servant of the Lord went (strong Präteritum, Luke 2:8).',
      ),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Weak and strong: {spielen} against {sprechen}'),
      head: [T('Type'), T('Present'), T('Präteritum'), T('Participle')],
      rows: [
        ['fraco (-te)', 'spielt', 'spielte', 'gespielt'],
        ['fraco (-te)', 'sucht', 'suchte', 'gesucht'],
        ['forte (Ablaut)', 'spricht', 'sprach', 'gesprochen'],
        ['forte (Ablaut)', 'gibt', 'gab', 'gegeben'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
        ['forte (Ablaut)', 'nimmt', 'nahm', 'genommen'],
        ['forte (Ablaut)', 'schläft', 'schlief', 'geschlafen'],
        ['forte (Ablaut)', 'hilft', 'half', 'geholfen'],
        ['forte (Ablaut)', 'trifft', 'traf', 'getroffen'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
      ],
    },
    {
      caption: T('Table 2 — {haben} or {ist} in the Perfekt?'),
      head: [T('Question'), T('Auxiliary'), T('Example')],
      rows: [
        ['ação do sujeito', 'hat', 'Er hat das Buch gelesen.'],
        ['movimento', 'ist', 'Wir sind nach Hause gegangen.'],
        ['mudança de estado', 'ist', 'Das Wetter ist kalt geworden.'],
        ['processo sem agente', 'ist', 'Es ist lange her.'],
        ['verbo de estado', 'ist', 'Er ist gestorben. / geblieben.'],
        ['verbo de sentido', 'hat', 'Ich habe ihn verstanden.'],
      ],
    },
  ],
};
