import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Adverb'),
  title: T('The adverb: how it is formed'),
  subtitle: T('-nya, -an, and the form identical to the adjective'),
  body: C(`## Three ways to make an adverb

Indonesian adverbs are the one word class that is productively derived, and there are three routes to them. None of them inflects: an adverb is an adverb in every clause, and that is what separates it from Latin.

{1} With {-nya}, glued to an adjective or a verb. {cepat} "fast" → {cepatnya} "quickly"; {baik} "good" → {baiknya} "well"; {sungguh} "true" → {sungguhnya} "really". This is the most regular route, and the shape looks like a noun: originally {cepatnya} was literally "his quickness".

{2} With {-an} or {-i}. {sungguh} → {sungguhan} "seriously"; {betul} → {betulan} "properly"; {sendiri} → {sendirian} "on his own". The {-an} here does the work it does on nouns: it makes a nominal, and a nominal used as an adverb turns into manner. {memang} "certainly" is in the same family.

{3} With no marking at all: the adverb is the adjective's own word. {cepat} "fast" and {cepat} "quickly"; {benar} "right" and {benar} "correctly"; {jujur} "honest" and {jujur} "honestly"; {keras} "hard" and {bekerja keras} "to work hard".

The third route is the commonest and the least visible, because the reader does not notice the class changing. Portuguese has a fixed pair for this ("rápido"/"rapidamente", "fácil"/"facilmente") and Indonesian has none: the word is one and what changes is the slot it occupies.

## One word in two roles

When {cepat} comes after the verb it is an adverb: {dia datang cepat} "he comes fast". When it comes before the verb or after {adalah}, it is an adjective: {dia cepat datang} is no longer the same thing, and {cepat} in front of a noun is the adjective of {anak cepat}.

The question that settles it is this: **what comes after?** If a noun or nothing comes after, it is an adjective; if another verb or an adverb comes after, it is an adverb. {dia datang cepat} has another verb after it. {anak cepat} has a noun after it.

{benar} shows why the distinction matters more than it looks. In {dia bicara benar}, the adverb {benar} means "he speaks truthfully". In {dia yang benar}, {benar} is an adjective and {yang} ties it to a noun. Same word, and a reader who does not know the difference gets both of them wrong.

{benar} as an adverb and {benar} as an adjective have no difference of pronunciation and none of spelling. Indonesian settled what Portuguese settled with {-mente} and one extra word, and the price was having to look at position.

## The adverb that looks like a verb

Adverbs made out of verbs exist, and they are the main source of error for a beginner.

The commonest shape is reduplication with {-an}, which gives activity done for the sake of it, with no purpose: {jalan-jalan} "to stroll", {makan-makan} "to eat for no reason", {main-main} "to play about". As an adverb, {makan-makan} means "with nothing else to do": {Saya makan-makan saja} "I just eat, that is all".

The other group is what Portuguese handles with a gerund or a periphrasis: {sedang} "be in the middle of", {akan} "be going to", {sudah} "have already". All three are adverbs of time and aspect and none of them is a verb. The confusion is common because {sedang} can come before the verb, as if it were an auxiliary.

And there is a group that is neither adverb nor verb, which grammars call a connector: {lalu} "then, after that", {kemudian} "afterwards", {sementara itu} "meanwhile". They organise the sentence and do not describe the verb. {lalu} deserves special attention because it also means "right after" and, in older usage, shows up as a marker of remote past.

No adverb inflects. There is no plural adverb, no gender of the adverb, and none that shifts with the subject. A word that shows up in every form is an adverb or a proper name; if the context shows it describing a verb, it is an adverb.

## Cepat, lambat, dan lambat untuk marah

{James 1:19} puts the two commonest adverbs of Biblical Indonesian in a single sentence. The text has {cepat mendengar}, {lambat untuk berbicara} and {lambat untuk marah}, and all three come from words that are also adjectives.

What matters here is not the content of the verse but the fact that the text managed to put three adverbs in with no {-mente} and no auxiliary. {cepat} is the adjective {cepat} sitting where an adverb goes. {lambat untuk berbicara} has a {untuk} that is not a preposition of purpose: it is what ties the adverb to the verb it modifies.

The original Greek is harder than that. The Greek of James asks the reader to recognise three participial adjectives in a row, and the translator settled it with three words she already had. A translator from Greek into Portuguese needs three nouns; into Indonesian, three words already at hand. That is where Indonesian shows what it is: a language that reaches the same sense with fewer words, and that makes the reader’s work of building the clause disappear inside the verb.`),
  vocab: [
    V('cepat', 'cepat', 'fast; quickly'),
    V('cepatnya', 'cepat', 'quickly'),
    V('baik', 'baik', 'good; well'),
    V('baiknya', 'baik', 'well'),
    V('benar', 'benar', 'right; correctly'),
    V('betulan', 'betul', 'properly, for real'),
    V('sungguh', 'sungguh', 'true'),
    V('sungguhan', 'sungguh', 'seriously'),
    V('sungguhnya', 'sungguh', 'truly'),
    V('keras', 'keras', 'hard, with force'),
    V('jujur', 'jujur', 'honest; honestly'),
    V('lalu', 'lalu', 'then, after that'),
    V('kemudian', 'kemudian', 'afterwards'),
    V('sedang', 'sedang', 'be in the middle of (aspect)'),
    V('jalan-jalan', 'jalan', 'to stroll'),
    V('makan-makan', 'makan', 'to eat with nothing to do'),
    V('berbicara', 'bicara', 'to speak'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb is formed with {-nya} on an adjective or verb, with {-an}/{-i}, or is identical to the adjective.',
      ),
    },
    {
      n: '2',
      text: T('Adverb {cepat} and adjective {cepat} are the same word; position decides.'),
    },
    {
      n: '3',
      text: T('The test is what follows: a noun after means adjective, a verb after means adverb.'),
    },
    {
      n: '4',
      text: T(
        'Verbs reduplicated with {-an} work as an adverb of purpose: {makan-makan} "eating for no reason".',
      ),
    },
    { n: '5', text: T('No adverb inflects: not number, not gender, not person.') },
  ],
  notes: [
    {
      label: T('Why -nya works'),
      text: T(
        'The {-nya} of adverbs is the same suffix as the other five jobs: nominalisation. {cepatnya} used to mean "his quickness" and came to mean "quickly". The same path nominalised {datangnya} "the coming" and {keluarannya} "the going out".',
      ),
    },
    {
      label: T('The line between adverb and connector'),
      text: T(
        '{lalu} and {kemudian} organise the sentence and do not describe the verb, which is why some grammars treat them as conjunctions. The practical test for the reader is simple: if the word can be pulled out without changing who does what, it is a connector.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('He comes fast.') },
    { text: 'Anak itu cepat.', gloss: T('That child is fast.') },
    { text: 'Kita harus bekerja keras.', gloss: T('We have to work hard.') },
    { text: 'Dia berbicara jujur.', gloss: T('He speaks honestly.') },
    {
      text: 'Bekerja terus selama dua tahun.',
      gloss: T('He worked without stopping for two years.'),
    },
    { text: 'Sungguhan, saya tidak tahu.', gloss: T('Really, I do not know.') },
    { text: 'Setelah minum, dia keluar.', gloss: T('After drinking, he went out.') },
    { text: 'Saya makan-makan saja.', gloss: T('I just eat, that is all.') },
    { text: 'Dia kemudian tidak datang.', gloss: T('Afterwards he did not come.') },
    {
      text: 'Sekarang sudah ada yang belajar.',
      gloss: T('Now there are already people studying.'),
    },
  ],
  tables: [
    {
      caption: T('Os três caminhos do advérbio'),
      head: ['Caminho', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['com -nya', 'X + nya', 'cepatnya', 'rapidamente'],
        ['com -nya', 'X + nya', 'baiknya', 'bem'],
        ['com -an / -i', 'X + an', 'betulan', 'propriamente'],
        ['com -an / -i', 'X + an', 'sungguhan', 'a sério'],
        ['igual ao adjetivo', 'X', 'cepat', 'rapidamente'],
        ['igual ao adjetivo', 'X', 'jujur', 'honestamente'],
        ['reduplicado', 'V + V-an', 'jalan-jalan', 'passeando'],
      ],
    },
    {
      caption: T('Adjetivo ou advérbio: o teste da posição'),
      head: ['Frase', 'O que vem depois', 'Valor de cepat', 'Leia como'],
      rows: [
        ['dia datang cepat', 'verbo', 'advérbio', 'ele vem rápido'],
        ['anak cepat', 'substantivo', 'adjetivo', 'criança rápida'],
        ['lalu dengan cepat', 'nada', 'advérbio', 'depois, rapidamente'],
        ['hari ini cepat', 'verbo', 'advérbio', 'hoje, cedo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Dia datang cepat}, what role does {cepat} have?'),
    options: [T('adverb'), T('adjective'), T('verb'), T('pronoun')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Build the adverb with {-nya}: quickly = ___.'),
      answer: 'cepatnya',
      hint: T('Adjective plus the nominal suffix.'),
    },
    {
      kind: 'choose',
      prompt: T('In {Anak cepat}, what role does {cepat} have?'),
      options: [T('adjective'), T('adverb'), T('connector'), T('numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the base to the adverb'),
      pairs: [
        { a: T('{sungguh}'), b: T('{sungguhan}') },
        { a: T('{betul}'), b: T('{betulan}') },
        { a: T('{cepat}'), b: T('{cepatnya}') },
        { a: T('{jalan}'), b: T('{jalan-jalan}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
