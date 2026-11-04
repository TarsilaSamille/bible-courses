import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('When no article is used'),
  subtitle: T('Materials, seasons, languages, professions'),
  section: T('Articles'),
  body: C(`German uses the definite article far more than Spanish or Portuguese does, but it also drops it in a predictable number of cases. The practical rule is this: if the noun names a substance, a period, a language or a function rather than a countable individual thing, the article disappears.

Materials and substances belong to this group: Wasser, Gold, Holz, Brot, Wein. One says Ich trinke Wasser, not Ich trinke das Wasser, when the substance is meant in general. Seasons and months do the same: im Sommer, im Januar, letzten Monat. The days of the week likewise: am Montag, heute, gestern, letzten Sonntag.

Languages and school subjects take no article: Sie spricht Deutsch, Er ist gut in Mathematik, Ich lerne Englisch. Countries do too, when a particular country is not meant: Er reist nach Deutschland, but Er reist in die Schweiz (article here, because a single political unit is named).

Professions and functions, when they describe what someone is, take the zero article: Er ist Lehrer. Sie ist Ärztin. Ich gehe in die Schule, in die Kirche, zur Arbeit: the noun is an institution taken by its function.

Finally, note the extremely frequent construction Ich habe Hunger, Ich habe Durst, Ich habe Angst, Ich habe Zeit: the abstract noun enters without an article, and one would only say "ich habe eine Angst" when the fear is a concrete, bounded occurrence.`),
  vocab: [
    V('das Wasser', 'Wasser', 'water (substance, no article)'),
    V('das Gold', 'Gold', 'gold'),
    V('der Sommer', 'Sommer', 'summer (season)'),
    V('der Januar', 'Januar', 'January (month)'),
    V('am Montag', 'Montag', 'on Monday'),
    V('Deutsch', 'Deutsch', 'German (the language)'),
    V('Mathematik', 'Mathematik', 'mathematics (subject)'),
    V('der Lehrer', 'Lehrer', 'the teacher'),
    V('die Ärztin', 'Ärztin', 'the doctor (feminine of Arzt)'),
    V('in die Schule', 'Schule', 'to school (institution)'),
    V('Hunger haben', 'Hunger', 'to be hungry'),
    V('Durst haben', 'Durst', 'to be thirsty'),
    V('Angst haben', 'Angst', 'to be afraid'),
    V('ein Stück Brot', 'Brot', 'a piece of bread'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('Ich trinke das Wasser.'),
      T('Ich trinke Wasser.'),
      T('Ich trinke ein Wasser.'),
      T('Ich trinke die Wassers.'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete without an article: Er ist ___ (teacher).'),
      answer: 'Lehrer',
      hint: T('Profession as a predicate.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the institution: Die Kinder gehen in ___ Schule.'),
      answer: 'die',
      hint: T('The institution as a determinate unit takes an article.'),
    },
    {
      kind: 'choose',
      prompt: T('Which noun requires the definite article?'),
      options: [T('Wasser'), T('Deutsch'), T('Wein'), T('das Brot')],
      answer: 3,
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its meaning.'),
      pairs: [
        { a: T('Angst haben'), b: T('to be afraid (state)') },
        { a: T('ein Stück Brot'), b: T('a piece of bread (measure)') },
        { a: T('in die Kirche'), b: T('to church (institution)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Substance nouns in the general sense take no article; the measure is what introduces one: ein Glas Wasser, zwei Tassen Kaffee.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dates and seasons appear without an article when they indicate the period in general, and with the article when they indicate a definite period: im Januar / im Januar 2024.',
      ),
    },
    {
      n: '3',
      text: T(
        'Languages, subjects and countries never take the definite article: ich spreche Englisch, er studiert Medizin, wir fahren nach Österreich.',
      ),
    },
    {
      n: '4',
      text: T(
        'A profession as a predicate drops the article (Er ist Arzt), but as a definite apposition it requires it (Als Arzt half er; Der Arzt half).',
      ),
    },
  ],
  notes: [
    {
      label: T('Zero article ≠ missing information'),
      text: T(
        'Reading the absence of an article as "missing information" leads to mistakes. In Er ist Lehrer the noun is no less definite: it means precisely that the person holds that office. The zero article is a morpheme with its own value, not an omission.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 6:35, Ich bin das Brot des Lebens. The contrast between das Brot (the determined substance) and the abstract Leben shows that the article marks the determinate noun, not the concept.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich trinke gern Wasser.',
      gloss: T('I like drinking water (substance without article).'),
    },
    {
      text: 'Er trinkt ein Glas Wasser.',
      gloss: T('He drinks a glass of water (the measure introduces the article).'),
    },
    { text: 'Im Sommer ist es hier heiß.', gloss: T('In summer it is hot here.') },
    {
      text: 'Gestern war ich im Garten.',
      gloss: T('Yesterday I was in the garden (gestern without article).'),
    },
    {
      text: 'Sie spricht gut Deutsch.',
      gloss: T('She speaks German well (language without article).'),
    },
    {
      text: 'Die Kinder gehen in die Schule.',
      gloss: T('The children go to school (institution with article).'),
    },
    { text: 'Ich habe Hunger.', gloss: T('I am hungry (abstraction without article).') },
    {
      text: 'Er fährt morgen nach Berlin.',
      gloss: T('He is going to Berlin tomorrow (destination without article).'),
    },
  ],
  tables: [
    {
      caption: T('With the article and without it'),
      head: ['Categoria', 'Com artigo', 'Sem artigo'],
      rows: [
        ['matérias', 'das Wasser trinken (a água do copo)', 'Wasser trinken (beber água)'],
        ['estações', 'im Sommer 2000', 'der Sommer war heiß (o verão de 2000)'],
        ['meses e dias', 'im Januar, am Montag', 'heute, gestern, morgen'],
        ['idiomas', 'das Deutsch lernen', 'Deutsch sprechen'],
        ['disciplinas', 'in der Mathematik gut sein', 'gut in Mathematik sein'],
        ['países', 'in die Schweiz reisen', 'nach Deutschland reisen'],
        ['profissões', 'der Lehrer Meier', 'Er ist Lehrer (função)'],
        ['instituições', 'in die Schule gehen', 'zur Schule gehen (ir lá)'],
        ['estados', 'die Angst im Gesicht sehen', 'Angst haben (disposição)'],
        ['quantidade', 'ein Stück Brot, zwei Gläser', 'viel Brot, wenig Zeit'],
      ],
    },
    {
      caption: T('Nouns very frequently without an article'),
      head: ['Construção', 'Exemplo', 'Tradução'],
      rows: [
        ['haber + abstração', 'Ich habe Hunger.', 'estou com fome'],
        ['haber + abstração', 'Wir haben Zeit.', 'temos tempo'],
        ['verbo + abstração', 'Er macht sich Sorgen.', 'preocupa-se'],
        ['in + função', 'in die Schule / in die Kirche', 'à escola / à igreja'],
        ['nach + direção', 'nach Hause, nach Deutschland', 'para casa, para a Alemanha'],
        ['Zu + Institution', 'zur Arbeit, zum Arzt', 'ao trabalho, ao médico'],
      ],
    },
  ],
};
