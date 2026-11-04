import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Verb'),
  title: T('Stative verbs and ada'),
  subtitle: T('ada masalah, rumah itu besar, punya: three ways of saying that something is'),
  body: C(`## Action and state

Indonesian separates a verb that describes an action from a predicate that describes a state, and the separation is visible in the grammar.

{masuk} is an action: somebody enters, and the event has a beginning and an end. {Rumah itu masuk} only makes sense in a specific sense, and an action normally needs an agent.

{sakit} is a state: somebody is ill, and there is no event. Portuguese handles this with {to be}, which is a verb; Indonesian needs none, because the adjective can be a predicate on its own: {Dia sakit} "he is ill", {Rumah itu besar} "that house is big", {Pintu itu terbuka} "that door is open".

In formal written register the {adalah} turns up and marks the copula: {Rumah itu adalah besar}. The form exists and it is not wrong, but it sounds marked, the same way it sounds marked in Portuguese to repeat the same shape where a shorter one exists. It is a sign that {adalah} is only needed when what follows could be read as a verb.

And there is a group of states that uses {ber-}: {berdiri} "to stand", {berburu} "to hunt", {bersekolah} "to go to school". The {ber-} does not mean being nowhere: it means being in a state or an activity, and the word that follows says which.

## The adjective as a predicate

The rule fits on one line: **an adjective can take the place of the verb.**

{Ils sont occupés} is Portuguese; {Dia sibuk} is Indonesian. {Ils ont raison} is Portuguese; {Dia benar} is Indonesian. What changes is that Portuguese has a copulative verb and Indonesian may have none.

This holds in every slot. As subject, {Pintu terbuka}; as predicate, {Dia sakit}; in comparison, {Rumah ini lebih besar dari itu}; under negation, {Ini bukan rumah}; under question, {Apakah dia sakit?}.

The exception is when the adjective has to be kept from being read as a noun: {Yang sakit itu dia} "the one who is ill is he". There the {yang} is obligatory, because without it {sakit} would be read as a noun, "the illness".

There is one use of {adalah} worth recording: it **reinforces** an identity already obvious. {Dia adalah manusia} "he is human" sounds emphatic, almost offended, which {Dia manusia} does not. Religious language and theological texts use that emphatic {adalah} often, and a reader who renders it with "is" loses the weight.

## State comes in through ada

Portuguese says "there is a problem", the reader recognises the construction at once and thinks he is reading Portuguese. He is reading something else.

{ada} does not identify a subject: {Ada masalah} "there is a problem" says nothing about whose problem it is. {Ada perbedaan} "there is a difference", {Ada pertanyaan} "there is a question", {Ada yang salah} "there is something wrong". The abstract noun is the thing that is in a state, and {ada} is the verb that puts it there.

Two constructions with {ada} are commoner than a translator notices. {Ada yang ...} is existential and means "there is someone who": {Ada yang datang} "somebody came". And {ada} as the main verb in a sentence like {Kita hanya perlu satu hal} asks for {saja} "that is enough".

As for possession, Indonesian does not use {ada}. To have is {punya}, {milik} or the clitic {-nya}: {Saya punya rumah} "I have a house", {Rumah itu milik saya} "that house is mine", {Rumahnya besar} "his house is big". Confusing {ada} with {punya} reverses the direction of the sentence, and it is the commonest mistake of anyone writing Indonesian with a Portuguese syntax in mind.

Negation follows the same split: {tidak ada} negates the state ("there is not", "does not exist"), and the negative of {adalah} is {bukan} ({bukan masalah} "is not a problem"). A sentence like {Ini bukan masalah} is an identity, and {Ini tidak ada masalah} is a denial of existence. Portuguese tells "it is not a problem" apart from "there is no problem"; Indonesian tells them apart with different words.

## Berbahagilah orang-orang yang...

{Matthew 5:3} brings the full structure of state together, and it is the cleanest example there is.

The verb of the sentence is {berbahagia}, which is {ber-} plus the noun {bahagia} "happiness". It is a stative verb wearing the {ber-} of the state group, and Greek does the same with {makarios}. After it comes {orang-orang}, the full reduplication that marks the plural, and after that {yang} tied to an adjective, {miskin} "poor".

Notice that there is no {adalah} anywhere in the sentence. The state sits in the adjective {miskin}, and the structure is {berbahagia} plus subject plus {yang} plus adjective. An equivalent Greek sentence would have an article, a copulative verb and perhaps a particle; the Indonesian sentence has none of the three.

That is why the beatitude is so easy to read in Indonesian and so hard to translate. Greek forces the translator to decide what is predicate and what is noun; Indonesian has already decided, and all that is left for the translator is the choice between "poor" and "dispossessed" and between "happy" and "blessed", which is a dictionary choice and not a grammar one.`),
  vocab: [
    V('ada', 'ada', 'there is, to exist'),
    V('adalah', 'adalah', 'to be'),
    V('bukan', 'bukan', 'not (copula and noun)'),
    V('tidak ada', 'ada', 'there is not, not to exist'),
    V('sakit', 'sakit', 'ill; to be ill'),
    V('besar', 'besar', 'big'),
    V('kecil', 'kecil', 'small'),
    V('terbuka', 'buka', 'to be open'),
    V('masuk', 'masuk', 'to enter'),
    V('keluar', 'keluar', 'to go out'),
    V('rumah', 'rumah', 'house, home'),
    V('pintu', 'pintu', 'door'),
    V('masalah', 'masalah', 'problem'),
    V('pertanyaan', 'pertanyaan', 'question'),
    V('punya', 'punya', 'to have'),
    V('milik', 'milik', 'to belong to'),
    V('berdiri', 'diri', 'to stand'),
    V('berbahagia', 'bahagia', 'to be happy'),
    V('bahagia', 'bahagia', 'happy, happiness'),
    V('miskin', 'miskin', 'poor'),
    V('salah', 'salah', 'wrong; at fault'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'An adjective can be a predicate with no copula: {Dia sakit}, {Rumah itu besar}, {Pintu terbuka}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ada} puts a noun in a state without identifying a subject: {Ada masalah}, {Ada pertanyaan}.',
      ),
    },
    {
      n: '3',
      text: T(
        'To have is {punya}, {milik} or the clitic {-nya}, never {ada}: {Saya punya rumah}, never {ada rumah saya} for "I have a house".',
      ),
    },
    {
      n: '4',
      text: T(
        'The negative of {ada} is {tidak ada} and of {adalah} is {bukan}: {Ini bukan masalah} and {Ini tidak ada masalah} are different sentences.',
      ),
    },
    {
      n: '5',
      text: T(
        'With {yang}, an adjective needs the {yang} to avoid being read as a noun: {Yang sakit itu dia}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The emphatic adalah'),
      text: T(
        '{Dia adalah manusia} is not the same as {Dia manusia}. The {adalah} marks an identity the listener might have expected to deny, which is why it sounds close to an accusation. In religious text and in older translations it turns up often.',
      ),
    },
    {
      label: T('Where state hides inside a verb'),
      text: T(
        'Verbs like {berdiri} and {berbahagia} look like action verbs and are not: {berdiri} is to stand, {berbahagia} is to be happy. The {ber-} marks state, and that is why the sentence at Matthew 5:3 can take {berbahagia} where the language dispenses with an {adalah}.',
      ),
    },
  ],
  examples: [
    { text: 'Dia sakit.', gloss: T('He is ill.') },
    { text: 'Rumah itu besar.', gloss: T('That house is big.') },
    { text: 'Rumah itu adalah besar.', gloss: T('That house really is big (formal, emphatic).') },
    { text: 'Ada masalah besar di sini.', gloss: T('There is a big problem here.') },
    {
      text: 'Ada pertanyaan yang belum terjawab.',
      gloss: T('There is a question with no answer yet.'),
    },
    { text: 'Saya punya dua buku.', gloss: T('I have two books.') },
    { text: 'Rumah itu milik saya.', gloss: T('That house is mine.') },
    { text: 'Ini bukan masalah.', gloss: T('This is not a problem.') },
    { text: 'Ini tidak ada masalah.', gloss: T('There is no problem.') },
    { text: 'Yang sakit itu dia.', gloss: T('The one who is ill is him.') },
  ],
  tables: [
    {
      caption: T('Predicado de estado'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['adjetivo', 'S + adj', 'Dia sakit', 'ele está doente'],
        ['adjetivo', 'S + adj', 'Rumah itu besar', 'aquela casa é grande'],
        ['estado com ter-', 'S + ter-', 'Pintu terbuka', 'a porta está aberta'],
        ['estado com ber-', 'S + ber-', 'Dia berdiri di sana', 'ele está de pé ali'],
        ['identidade', 'S + adalah', 'Dia adalah manusia', 'ele é humano'],
        ['existência', 'ada + nome', 'Ada masalah', 'há um problema'],
        ['posse', 'S + punya', 'Dia punya rumah', 'ele tem uma casa'],
      ],
    },
    {
      caption: T('Existir, ser e ter'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada pertanyaan', 'há uma pergunta'],
        ['existe?', 'ada', 'Ada yang salah', 'há algo errado'],
        ['o que é?', 'adalah', 'Ini adalah buku', 'isto é um livro'],
        ['quem tem?', 'punya', 'Dia punya rumah', 'ele tem uma casa'],
        ['de quem?', 'milik', 'Rumah itu milik saya', 'aquela casa é minha'],
        ['de quem?', 'clítico -nya', 'Rumahnya besar', 'a casa dele é grande'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the most natural form of "he is ill"?'),
    options: [T('Dia sakit'), T('Dia adalah sakit'), T('Dia ada sakit'), T('Dia sickness')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the verb of existence: there is a problem = ___ masalah.'),
      answer: 'Ada',
      hint: T('The verb that puts something in a state with no subject identified.'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "there is no problem"?'),
      options: [
        T('Ini tidak ada masalah'),
        T('Ini bukan masalah'),
        T('Ini tidak masalah'),
        T('Ini ada masalah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the question to the verb'),
      pairs: [
        { a: T('does it exist?'), b: T('{ada}') },
        { a: T('what is it?'), b: T('{adalah}') },
        { a: T('who has it?'), b: T('{punya}') },
        { a: T('whose is it?'), b: T('{milik}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
