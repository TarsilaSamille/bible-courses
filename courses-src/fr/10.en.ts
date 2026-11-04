import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Adverbs'),
  subtitle: T('{-ment}, {très}, {beaucoup} and where each one goes'),
  section: T('Adjectives and adverbs'),
  body: C(`## An adverb never agrees

The adverb is the word that does not look at the noun. It is invariable, it has no gender and no number, and it can modify a verb, an adjective, another adverb or a whole clause: {il parle clairement}, {une maison très grande}, {il travaille vraiment trop}, {elle est partie rapidement}.

The overwhelming majority are built from the **feminine of the adjective plus -ment**: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}, {douce → doucement}, {vraie → vraiment}, {folle → follement}. Note that the starting point is the feminine form, not the masculine: {heureuse}, not {heureux}.

Two families reshape the ending: adjectives in *-ant* give *-amment* ({constant → constamment}, {habitant → habituellement}) and those in *-ent* give *-emment* ({patient → patiemment}, {sage → sagement}).

And a handful come from no adjective at all: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}, {ici}, {nulle part}. Those are the most frequent, and for that reason the ones you will use first.

## Intensifying: {très} yes, with verbs no

The short rule: **{très} never intensifies a verb**. It goes before an adjective ({très grand}) and before an adverb ({très vite}), and nothing else.

| Intensifier | With adjective | With verb | With noun |
|---|---|---|---|
| {très} | {très grand} | — (impossible) | — (impossible) |
| {trop} | {trop grand} | {trop travailler} | {trop de travail} |
| {assez} | {assez grand} | {assez travailler} | {assez de temps} |
| {beaucoup} | — | {beaucoup travailler} | {beaucoup de livres} |
| {peu} | — | {peu travailler} | {peu de temps} |

Look at the middle column: {beaucoup}, {trop}, {assez} and {peu} go straight before the verb, with no {de}. And {trop} has one special trick: with {pas}, it loses its negative force and means "not too": {Ce n'est pas trop tard} = "It is not too late", literally "it is not very late".

Beside {beaucoup}, quantity words take the preposition {de}: {beaucoup de gens}, {bien des gens}, {trop de monde}.

## Where the adverb stands

In a simple sentence, a short adverb goes **after the conjugated verb and before the complement**: {il parle bien français}, {elle travaille beaucoup}, {nous sommes arrivés tard}. With an auxiliary verb, the adverb splits the auxiliary from the main verb: {il a beaucoup travaillé}, {nous avons déjà mangé}, {elle est déjà partie}.

A long adverb, on the contrary, tends to go to the end: {il a parlé très clairement à ses élèves}, {elle habite maintenant à Genève}.

And mind the negation: in French it wraps the verb, and the adverb stays outside it. {Je ne comprends pas} — never {Je ne pas comprends}. With an auxiliary: {je n'ai pas compris}, {il ne parle pas bien français}.

## Adverbs that are also adjectives

A few words wear the same suit in both roles:

- {bien} — adverb ({il parle bien}) and adjective ({c'est bien})
- {mal} — adverb ({il dort mal}) and adjective ({c'est mal})
- {grand} — adverb ({il parle grand}) and adjective ({un grand homme})
- {direct} — {parlez-moi direct} and {un train direct}
- {tout} — invariable adverb ({il mange tout}) and agreeing adjective ({toute la ville})

In {tout}, the rule is that agreement appears **only** when a determined noun follows: {tout le monde}, {tous les jours}, {toute la ville}. With no noun, it is invariable: {Tout est bon} "everything is good".

## Reading — Louis Segond

{Vous serez mes disciples, si vous faites toutes les choses que je vous ai enseignées} (Matt. 23:28) shows {toutes} with determiners and therefore agreeing. {Le Père vous aime et vous salue} (1 Cor. 16:23) shows {vous} as a pronoun, handled in its own chapter. {Je vous donne le repos, et je vous rafraîchirai} is built on a verbal phrase; {Gardez donc vos yeux tournés} (Luke 12:20) places the short adverb {donc} between verb and object, the fixed slot of short adverbs. As for the negative side of the matter, it belongs to the present tense chapter: {Ce n'est pas trop tard} shows {trop} inside the negation.

## What to take away

The adverb is invariable and is built almost always from the feminine of the adjective plus *-ment*. {Très} intensifies adjectives and adverbs but never verbs; before a noun, {beaucoup}, {trop}, {peu} and {assez} require {de}.`),
  vocab: [
    V('clairement', 'clair', 'clearly; from claire + -ment'),
    V('rapidement', 'rapide', 'quickly; from rapide'),
    V('doucement', 'doux', 'gently; from douce + -ment'),
    V('patiemment', 'patient', 'patiently; -ent → -emment'),
    V('constamment', 'constant', 'constantly; -ant → -amment'),
    V('vraiment', 'vrai', 'really; its own form'),
    V('très', 'très', 'very; only with adjective/adverb'),
    V('beaucoup', 'beaucoup', 'a lot; + verb, or + de + noun'),
    V('trop', 'trop', 'too much; with pas = not too'),
    V('assez', 'assez', 'enough; + de + noun'),
    V('peu', 'peu', 'little; un peu = a little'),
    V('bien', 'bien', 'well; adverb and adjective'),
    V('vite', 'vite', 'quickly; no derivative'),
    V('tout', 'tout', 'everything; invariable without a noun'),
    V('debout', 'debout', 'upright; invariable'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form is correct in «il travaille ___»?'),
    options: [T('{beaucoup}'), T('{beaucoup de}'), T('{très}'), T('{peu de}')],
    answer: 0,
    hint: T('Rule §4: before a verb the intensifier comes alone; de only shows up with a noun.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Adverb derived from {rapide}: ___ment'),
      answer: 'rapid e',
      hint: T('It derives from the feminine {rapide}, not from the final shape.'),
    },
    {
      kind: 'choose',
      prompt: T('In «{Je ne parle pas bien français}», where does the adverb {bien} stand?'),
      options: [
        T('Outside the negation, between the verb and the complement'),
        T('Inside the negation, between {ne} and {pas}'),
        T('At the end of the sentence, after the complement'),
        T('At the start, before the pronoun {je}'),
      ],
      answer: 0,
      hint: T('Rule §5: the negation wraps the verb; the adverb stays outside it.'),
    },
    {
      kind: 'match',
      prompt: T('Match each adverb to its source adjective'),
      pairs: [
        { a: T('clairement'), b: T('{clair}') },
        { a: T('patiemment'), b: T('{patient}') },
        { a: T('vraiment'), b: T('{vrai}') },
        { a: T('vite'), b: T('{?} — no source adjective') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «{Il travaille beaucoup, et il mange peu}», how many quantity adverbs appear?'),
      options: [T('None'), T('One'), T('Two'), T('Three')],
      answer: 1,
      hint: T('{beaucoup} and {peu} form a pair; each counts once.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Adverbs of manner derive from the feminine of the adjective plus -ment: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}. They are invariable: they never agree in gender or number.',
      ),
    },
    {
      n: '2',
      text: T(
        'Adjectives in -ant and -ent turn into -amment and -emment: {constant → constamment}, {patient → patiemment}. Some forms are independent: {vrai → vraiment}, {seul → seulement}, {facile → facilement}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Several adverbs derive from no adjective at all: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}. They are the most frequent in the language: learn them as units.',
      ),
    },
    {
      n: '4',
      text: T(
        'Très intensifies adjectives and adverbs, never verbs: {très bon}, {très vite}. Before a verb use beaucoup, trop, assez or peu ({il travaille trop}); before a noun all of them require de: {beaucoup de livres}, {trop de travail}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The short adverb goes after the conjugated verb: {il parle bien français}. With an auxiliary it splits auxiliary from main verb: {il a beaucoup travaillé}, {elle est déjà partie}. The negation wraps the verb: {je ne comprends pas} — never {je ne pas comprends}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {trop} with {pas} trick'),
      text: T(
        'Inside a negation, trop changes its sense: {ce n\'est pas trop tard} means "it is not too late", not "it is not very late". It is the same ne … pas mechanism that the present tense chapter will study, applied to an adverb of degree.',
      ),
    },
    {
      label: T('When the adverb agrees'),
      text: T(
        'The rule is narrow and worth memorising: tout agrees only when a determined noun follows — {tous les jours}, {toute la ville}, {tout le monde}. With no noun it is invariable: {Tout est bon} "everything is good", {elle a tout vendu} "she sold everything". Bien and mal pass a similar test: if they take bon and mauvais in the same slot, they are adjectives.',
      ),
    },
  ],
  examples: [
    { text: 'elle parle clairement', gloss: T('she speaks clearly — from {claire}') },
    { text: 'il marche rapidement', gloss: T('he walks quickly — invariable -ment') },
    { text: 'il est patient', gloss: T('he is patient — the source of {patiemment}') },
    { text: 'il est constamment absent', gloss: T('he is constantly absent — -ant → -amment') },
    { text: "c'est vraiment vrai", gloss: T('it is really true — autonomous form') },
    { text: 'un très beau livre', gloss: T('a very beautiful book — très + adjective') },
    { text: 'il travaille beaucoup', gloss: T('he works a lot — beaucoup + verb') },
    { text: 'beaucoup de livres', gloss: T('many books — beaucoup + de + noun') },
    { text: 'trop de travail', gloss: T('too much work — trop + de') },
    { text: 'toute la ville', gloss: T('the whole city — tout agrees with the noun') },
  ],
  tables: [
    {
      caption: T('Table 1 — Formation of -ment adverbs'),
      head: [T('Source'), T('Rule'), T('Result')],
      rows: [
        ['adjetivo comum', 'feminino + {-ment}', '{claire → clairement}'],
        ['adjetivo em -eux', 'feminino *-euse* + {-ment}', '{heureuse → heureusement}'],
        ['adjetivo em -ant', '{-ant} → {-amment}', '{constant → constamment}'],
        ['adjetivo em -ent', '{-ent} → {-emment}', '{patient → patiemment}'],
        ['forma própria', 'sem regra geral', '{vrai → vraiment}'],
        ['advérbios sem derivada', 'aprende-se como unidade', '{vite, tôt, tard, bien, mal}'],
      ],
    },
    {
      caption: T('Table 2 — Intensity and quantity'),
      head: [T('Word'), T('With verb'), T('With noun'), T('Remark')],
      rows: [
        [
          '{très}',
          '— (não intensifica verbo)',
          '— (não usa com subst.)',
          '{très grand}, {très vite}',
        ],
        ['{trop}', '{trop travailler}', '{trop de travail}', 'com {pas}: «nem»'],
        ['{assez}', '{assez travailler}', '{assez de temps}', 'também {assez de} = alguns'],
        ['{beaucoup}', '{beaucoup travailler}', '{beaucoup de livres}', '{bien des gens}'],
        ['{peu}', '{peu travailler}', '{peu de temps}', '{un peu de sel}'],
        [
          '{tout}',
          '{tout manger}',
          'concorda se houver subst.',
          '{toute la ville} × {Tout est bon}',
        ],
      ],
    },
  ],
};
