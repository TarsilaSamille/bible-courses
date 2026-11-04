import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('The essential verbs'),
  subtitle: T(
    '{andare}, {venire}, {fare}, {dire} and the rest that together govern almost every clause',
  ),
  section: T('The noun and the verb'),
  body: C(`## Two dozen verbs, and four with no rule

A regular Italian verb conjugates by ending: in {parlo}, {parli}, {parla}, the stem {parl-} stays fixed and only the ending changes. The essentials have no fixed stem. {vado}, {vengo}, {faccio} and {dico} are four forms that nothing produces, and the same goes for {posso}, {devo}, {voglio}, {so} and {do}.

They are few and they weigh a lot. {andare}, {venire}, {fare}, {dire}, {avere}, {essere}, {potere}, {dovere}, {volere}, {sapere}, {vedere}, {dare}, {prendere}, {mangiare}, {bere}, {dormire}, {morire}, {nascere}, {leggere}, {scrivere}, {parlare}, {ascoltare}, {vestire} and {guardare} cover most of what is said in a chapter of a Gospel. The rest of the language is built on top of them.

One rule decides the shape of perhaps half the sentences on its own: in verbs ending in {-are}, the first person **drops the final {-o}**. {parlo}, {guardo}, {mangio}, {ascolto}, {lavoro}. In verbs ending in {-ere} and {-ire}, the {-o} **stays**: {prendo}, {vivo}, {dormo}, {parto}. {Mangiare} follows the first group ({mangio}) and {dormire} the second ({dormo}), and Italian gives no sign of which is which.

## {Andare} and {venire}: the two series that look alike

{andare} gives {vado}, {vai}, {va}, {andiamo}, {andate}, {vanno}. {venire} gives {vengo}, {vieni}, {viene}, {veniamo}, {venite}, {vengono}. They are the two most irregular series in the language after {essere} and {avere}, and the asymmetry between {v} and {n} is the only clue left: anyone who has not memorized {vado} and {vengo} cannot guess them.

The participle sorts everything out: {andato}, {venuto}, {arrivato}, {salito}, {partito}, {uscito}. In the *passato prossimo* the shape is the same in both, {sono andato}, {sono venuto}, so the context has to say who arrived and who left. In Greek, {ἦλθεν} and {ἦλθον} come close together, and that closeness is what a translator has to decide about.

{fare} and {dire} follow the same logic with one {-c} more: {faccio}, {fai}, {fa}, {diciamo}, {fanno}; {dico}, {dici}, {dice}, {diciamo}, {dicono}. {Diciamo} is of {dire} and {facciamo} is of {fare}, and the two share the ending, which makes them the most easily confused pair in the chapter.

## The imperative that changes its face

The {tu} imperative is the infinitive without its ending: {va}, {vieni}, {fa}, {di}, {guarda}, {prendi}, {dormi}, {mangia}, {bevi}, {leggi}. With the formal {Lei} the form comes from the subjunctive, not from the infinitive: {vada}, {venga}, {faccia}, {dica}, {guardi}, {prenda}. It is the most visible difference between talking to a friend and talking to a stranger, and it shows up on the first line of any text.

The form {di} takes an apostrophe: {di’} on its own, {dimelo} when a pronoun is attached ({di} + {melo}). Anyone who writes {dimelo} without the apostrophe is wrong by one character, and that is the kind of thing a reader only notices after stumbling on it.

## {Potere}, {dovere}, {volere}: the three that take an infinitive

{potere}, {dovere} and {volere} govern the infinitive and not the noun: {posso andare}, {devo leggere}, {voglio capire}. {Volere} takes a noun too, {voglio il libro}, and the difference is one of meaning and not of form: {voglio mangiare} is "I want to eat" and {voglio la minestra} is "I want the soup".

{so} is the only form of {sapere} that drops a letter: {so}, {sai}, {sa}, {sappiamo}, {sapete}, {sanno}. Only the first person loses the {s}, and that is why {so} collides with {dire} in the familiar register: {non lo so}, I do not know. Anyone arriving from Portuguese reads {so} as the verb say and loses the sense.

## In the Bible

John 1:1 opens with {era}, the imperfect of {essere}, the same verb that gives {Dio è luce} in verse 5, where {è} is the present. John 1:5 brings {brilla}, the present of an {-are} verb, and {era} again for the light that was already there. Three verbs, three tenses, and {era} shows up twice with different values: what already was before everything began, and what was happening in the scene.

Matthew 5:9 brings {beati}, the blessed, and the verb {essere} inflects nothing: it is a substantivized adjective, like {beato} and {beata}. The same {essere} that inflects in {era} appears here with no person and no number, and that is what makes {beati} work as a phrase and not as a clause.`),
  vocab: [
    V('vado', 'andare', 'I go'),
    V('va', 'andare', 'he goes; go!'),
    V('vengo', 'venire', 'I come'),
    V('vieni', 'venire', 'come!'),
    V('faccio', 'fare', 'I do'),
    V('fa', 'fare', 'he does; do!'),
    V('dico', 'dire', 'I say'),
    V('di', 'dire', 'say!'),
    V('posso', 'potere', 'I can'),
    V('devo', 'dovere', 'I must'),
    V('voglio', 'volere', 'I want'),
    V('so', 'sapere', 'I know'),
    V('mangio', 'mangiare', 'I eat'),
    V('prendo', 'prendere', 'I take'),
    V('era', 'essere', 'he was'),
    V('brilla', 'brillare', 'he shines'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In verbs in {-are} the first person drops the {-o}: {parlo}, {mangio}, {ascolto}. In verbs in {-ere} and {-ire} the {-o} stays: {prendo}, {dormo}, {vivo}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vado}, {vengo}, {faccio}, {dico}, {posso}, {devo}, {voglio}, {so} and {do} are not derived from anything, and that is what there is to memorize.',
      ),
    },
    {
      n: '3',
      text: T(
        'The {tu} imperative comes from the infinitive minus its ending ({va}, {vieni}, {fa}, {di}), and the {Lei} one comes from the subjunctive ({vada}, {venga}, {faccia}, {dica}).',
      ),
    },
    {
      n: '4',
      text: T(
        '{di} loses the {-i} and becomes {di’}: {dimelo} is {di} + {melo}, with the apostrophe in the middle.',
      ),
    },
    {
      n: '5',
      text: T(
        '{potere}, {dovere} and {volere} govern the infinitive: {posso andare}, {devo leggere}, {voglio capire}. {Volere} takes a noun as well.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {so} that means two things'),
      text: T(
        '{so} is the present of {sapere}, "I know", and it is also the present of {dire} in the familiar register: {so tutto}, I know everything. The two forms are identical and the context decides, the same way it does with {fui} in Portuguese and with {fuit} in the Vulgate.',
      ),
    },
    {
      label: T('The participle that gives the verb away'),
      text: T(
        'The {passato prossimo} is {essere} or {avere} plus the participle, and the participle says which verb came in: {sono andato}, {sono venuto}, {ho mangiato}, {ho bevuto}. Without the participle, Italian does not say whether the subject went or did.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio era il Verbo.',
      gloss: T('{era} is the imperfect of {essere}, the same verb as {è} in the present.'),
    },
    { text: 'Dio è luce.', gloss: T('{è} in the present: what God is.') },
    {
      text: 'La luce brilla nelle tenebre.',
      gloss: T('{brilla}: the present of an {-are} verb, the same group as {mangio} and {parlo}.'),
    },
    {
      text: 'Vado e vengo.',
      gloss: T('{vado} of {andare} and {vengo} of {venire}: the two irregular series.'),
    },
    {
      text: 'Sono andato a Roma.',
      gloss: T('Participle {andato} with {essere} in the {passato prossimo}.'),
    },
    { text: 'Ho mangiato il pane.', gloss: T('Participle {mangiato} with {avere}.') },
    { text: 'Non lo so.', gloss: T('{so} of {sapere}, and not of {dire}.') },
    { text: 'Posso venire domani.', gloss: T('{posso} governs the infinitive {venire}.') },
    { text: 'Di’ questo a Pietro.', gloss: T('{di’} with the apostrophe: the imperative {di}.') },
    {
      text: 'Venga con noi.',
      gloss: T('Imperative of {Lei}: it comes from the subjunctive, not the infinitive.'),
    },
  ],
  tables: [
    {
      caption: T('Presente dos essenciais irregulares'),
      head: ['Pessoa', 'andare', 'venire', 'fare', 'dire', 'potere'],
      rows: [
        ['io', 'vado', 'vengo', 'faccio', 'dico', 'posso'],
        ['tu', 'vai', 'vieni', 'fai', 'dici', 'puoi'],
        ['lui/lei', 'va', 'viene', 'fa', 'dice', 'può'],
        ['noi', 'andiamo', 'veniamo', 'facciamo', 'diciamo', 'possiamo'],
        ['voi', 'andate', 'venite', 'fate', 'dite', 'potete'],
        ['loro', 'vanno', 'vengono', 'fanno', 'dicono', 'possono'],
      ],
    },
    {
      caption: T('Particípios que não seguem a terminação'),
      head: ['Verbo', 'Particípio', 'Frase'],
      rows: [
        ['andare', 'andato', 'sono andato'],
        ['venire', 'venuto', 'sono venuto'],
        ['fare', 'fatto', 'ho fatto'],
        ['dire', 'detto', 'ho detto'],
        ['bere', 'bevuto', 'ho bevuto'],
        ['morire', 'morto', 'è morto'],
        ['nascere', 'nato', 'è nato'],
        ['leggere', 'letto', 'ho letto'],
      ],
    },
    {
      caption: T('Imperativo: tu e Lei'),
      head: ['Verbo', 'tu', 'Lei'],
      rows: [
        ['andare', 'va', 'vada'],
        ['venire', 'vieni', 'venga'],
        ['fare', 'fa', 'faccia'],
        ['dire', 'di’', 'dica'],
        ['dormire', 'dormi', 'dorma'],
        ['mangiare', 'mangia', 'mangia'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: Io ___ dalla Spagna (andare, present).'),
    options: [T('vado'), T('vengono'), T('ando'), T('vaio')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The {tu} imperative of {dormire} is Dormi, and the {Lei} one is ______.'),
      answer: 'Dorma',
    },
    {
      kind: 'match',
      prompt: T('Match the form to the verb'),
      pairs: [
        { a: T('{faccio}'), b: T('{fare}') },
        { a: T('{vengo}'), b: T('{venire}') },
        { a: T('{mangio}'), b: T('{mangiare}') },
        { a: T('{posso}'), b: T('{potere}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses {essere} as a verb and not as a noun?'),
      options: [
        T('{Beati} i poveri in spirito.'),
        T('La {luce} era nel mondo.'),
        T('Il {mondo} è stato creato.'),
        T('{Egli} è Dio.'),
      ],
      answer: 3,
    },
  ],
};
