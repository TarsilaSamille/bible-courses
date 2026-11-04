import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('The first line of a letter: three particles doing the work of a letterhead'),
  subtitle: T(
    'Who writes, to whom, and the wish that opens the book are the three shortest sentences of the epistolary style, and all three are a noun followed by a particle',
  ),
  body: C(`
## The first line has three nouns and three particles

A Greek letter begins with three things: who writes, to whom, and a wish. The oldest line of the style is 1 Thessalonians 1:1, *Pauro, Shiruwano to Temote {yori}, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai {e}*. **There are three nouns in the sender**, and the particle that joins them is {yori}, "from": who writes, and his name is {pauro}.

Then comes {e} before the name of the {kyōkai}. **It is the particle of the addressee**, and it stands where Portuguese would expect a "to". The name of the church comes with {no} of possession, *Tesarunikē no kyōkai*, "the church of the Thessalonians", and the particle {e} stays glued after the whole noun. In Greek that name came in the case that means "the"; Japanese has no cases, and it used the particle of direction, which is the one place in the language where {e} is obligatory with no movement anywhere in the sentence.

The {ni} comes next, in *{chichi} naru {kami} … ni aru*: "in the Father, who is God". The proper name of God is not the topic; the topic is the church, and God is the place where the church is. A sentence that Portuguese would build with "from", "to" and "in" becomes {yori}, {e} and {ni}, and a reader who already knows the three knows the whole line.

## The wish is a clause without a human subject

The next sentence is *megumi to heian {ga} anata no {ue} ni {arimasu} yō ni*, "that grace and peace may be upon you". There is no verb of saying, no name of who is speaking, and the subject is the wish: {ga} on *{megumi} to {heian} ga*. What rests on the Thessalonians is not Paul's affection, it is grace; and the particle {ga} says so without needing a clause to say who wants it.

The rest of the sentence is *anata no ue ni*, "upon you", and it is the one part of it that Portuguese handles differently. With a person, the preposition "upon" is rare in Portuguese and common in Japanese: {ni} was already on the list, and it is the same {ni} that marks destination and place. And the final *arimasu yō ni* is the formula that turns a wish into a clause: "may there be", with no subject, no person, no verbal tense.

A reader coming from Portuguese looks there for a grammatical subject and does not find one, and what is missing is the name of who wishes. The subject is in the first half of the sentence, and it is a thing: grace, peace. The name of the sender is in the line above, and it is the subject of nothing.

## The closing repeats the construction

New Testament letters almost all close with two sentences: one about the sender, and a wish. 1 Corinthians 16:24 is the shortest closing: *watashi no ai wa, {kirisuto} Yesu ni arite, anata subete no mono {tomo-ni} {arimasu}*. The first part declares where the sender's love is, and the construction is the one of the first line of the letter: {wa} for the topic, {ni} for the place.

In *watashi no ai wa*, the love is the topic and the writer is the possessor. Portuguese renders "my love is in Christ Jesus", and it is the same information, but the particle {ni} after the name of Christ is what does the work: it is not a loose preposition, it is the same {ni} that marks destination in Matthew 2:1, and that is why a translator has to know which of the two he is reading.

The *tomo-ni* of the closing is the particle of company with the whole noun wrapped around it, *anata subete no mono*, "all of you". And the *āmen* at the end is a Greek word transliterated, which Japanese never translated because there is nothing to translate.

**Notice that neither sentence has a human subject.** The love is in Christ; the grace is upon the addressees. The epistolary style does what the particle {ga} allows: when what you want to say is an entity, that entity is the subject, and the name of the people becomes {ni} of place. It is the reverse of an ordinary letter, in which the writer is the subject of everything.

## What a letter does that a Gospel does not

A letter does not begin by being narrated, and that is why the first line has three nouns. One of the three is the sender who stays hidden, which gives authority, and another is the whole addressee, which gives unity: a letter to a church is a letter to a multitude nobody can see, and the particle {e} before the name of that multitude is the exact mark of what the translator does not have to enumerate.

After the second line, the letter does something a Gospel does not: it talks about itself. 1 Thessalonians 1:5 says *ware-tachi no {fukuin} ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu*, "our gospel came to you not in word only, but in power, in the Holy Spirit and in great conviction". All of it comes out of verbs of writing, sending and remembering, and the particle that ties each thing to its name is {no}.

And it is {toki}, the noun of the {inori} behind the time, that shows up when the letter looks back. The last sentence of 2 Thessalonians 1:10 begins with *sono hi ni*, "on that day", and the time that governs the validity of the claim is an abstract noun, not an adverb: the verb comes at the end, with its inflection, and the condition in which it holds is named as a place. A letter does three things in the same order on every page: who writes, to whom, and the time in which what it asserts holds. A reader who knows the three lines reads any letter of the New Testament from the first line.
`),
  vocab: [
    V(
      'yori',
      'より',
      'origin: "from", and it is the particle that joins the names of the senders (yori)',
    ),
    V('e', 'へ', 'addressee: it comes before the name of whoever receives the letter (e)'),
    V('ni', 'に', 'place, and also "where a thing is": love, grace, peace (ni)'),
    V('ga', 'が', 'the wish that opens the letter is the subject: grace and peace (ga)'),
    V(
      'no',
      'の',
      'possession: it links the name of the city to the church and the people to the love (no)',
    ),
    V('pauro', 'パウロ', 'Paul, the name that opens and closes the letters (pauro)'),
    V('kyōkai', '教会', 'church; the name that comes right after the particle {e} (kyōkai)'),
    V('chichi', '父', 'father; "Father, who is God", the proper name at the start (chichi)'),
    V('kami', '神', 'God; the place where the church is, according to the first line (kami)'),
    V('megumi', '恵み', 'grace, favour, mercy (megumi)'),
    V('heian', '平安', 'peace; the second name of the first wish of the letter (heian)'),
    V('ue', '上', 'top, surface; with {ni}, "upon" (ue)'),
    V(
      'arimasu',
      'あります',
      'to be, to exist; the verb that closes the wish, with no subject and no person (arimasu)',
    ),
    V(
      'tomo-ni',
      '共に',
      'together with; the "with" of the closing, written with the whole noun (tomo-ni)',
    ),
    V('kirisuto', 'キリスト', 'Christ; the name that stays in {ni} in the closing (kirisuto)'),
    V('fukuin', '福音', 'gospel; what the letter says it sent (fukuin)'),
    V('inori', '祈り', 'prayer; what the letter asks for, and what the noun {toki} names (inori)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The first line of a letter brings three nouns with three particles: {yori} joins the senders, {e} marks the addressee and {ni} marks the place where God is.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} before the name of a church is not direction: it is the Greek case Portuguese renders as "the", and the only place in the language where {e} appears with no movement at all.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the wish, the subject is the thing wished for: {ga} on *megumi to heian ga*. The people are not the subject; they are the place, with {ni}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The closing repeats the construction of the opening: {wa} for the topic, {ni} for the place where the thing is, and no human subject in either sentence.',
      ),
    },
    {
      n: '5',
      text: T(
        'When the letter talks about itself, {no} links each action to the name that did it, and {toki} gives a name to the moment it recalls.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why {e} is obligatory in the opening line'),
      text: T(
        'A Greek letter opened with three cases: origin for the sender, destination for the church, and a case of context for God. Japanese settled the first two with {yori} and {e}, and the choice of {e} is not about direction: it is what there is to say "the church of Thessalonica". Romans 1:1 does the same with the same particle, *kami no fukuin no tame ni erabitareru, shito to meshattareta Kirisuto Yesu no shimo-be Pauro*, and the construction is so rare that it is hard to find in running Japanese a sentence in which {e} is obligatory for any other reason.',
      ),
    },
    {
      label: T('The epistolary genre trains particles better than the Gospel'),
      text: T(
        'A narrative puts the information in verbs, and the reader follows along by the content. A letter puts the information in nouns, and the reader follows along by the particles. The first line and the closing have nothing to translate: they are four nouns and four particles, and a reader who recognises the sequence yori, e, ni has already read the structure of any letter of the New Testament before understanding a word of the content. It is the cheapest exercise there is for someone learning to read Biblical Japanese.',
      ),
    },
  ],
  examples: [
    {
      text: 'パウロ、シルワノ、テモテから、父なる神および主イエス・キリストにあるテサロニケ人の教会へ。',
      gloss: T(
        'Pauro, Shiruwano to Temote yori, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai e — Paul, Silvanus and Timothy, to the church of the Thessalonians which is in God the Father and in the Lord Jesus Christ (1 Thessalonians 1:1): {yori} on the senders, {e} on the addressee, {ni} on God',
      ),
    },
    {
      text: '恵みと平安があなたがたの上にありますように。',
      gloss: T(
        'megumi to heian ga anata no ue ni arimasu yō ni — that grace and peace may be upon you (1 Thessalonians 1:1): the wish is the subject, and the people are the place',
      ),
    },
    {
      text: '私の愛は、キリスト・イエスにあって、あなたがたすべての者とともにあります。アーメン。',
      gloss: T(
        'watashi no ai wa, Kirisuto Yesu ni arite, anata subete no mono to tomoni arimasu. Āmen. — my love is in Christ Jesus and with all of you (1 Corinthians 16:24): the love is what is in {ni}, and nobody is the subject',
      ),
    },
    {
      text: 'なぜなら、私たちの福音があなたがたに伝えられたのは、ことばだけによったのではなく、力と聖霊と強い確信とによったからです。',
      gloss: T(
        'narawēru to wa, ware-tachi no fukuin ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu — for our gospel came to you not in word only, but in power, in the Holy Spirit and in great conviction (1 Thessalonians 1:5): the letter talks about its own act, and {kara} closes it as cause',
      ),
    },
    {
      text: '主イエスの恵みが、あなたがたとともにありますように。',
      gloss: T(
        "Shu Yesu no megumi ga, anata to tomoni arimasu yō ni — the grace of the Lord Jesus be with you (1 Corinthians 16:23): the grace is the subject, and the Lord's name is the possessor",
      ),
    },
    {
      text: '教会へ',
      gloss: T(
        'kyōkai e — to the church: the {e} of the addressee, with no movement anywhere in the text',
      ),
    },
    {
      text: 'あなたがたの上にある',
      gloss: T(
        'anata no ue ni aru — it is upon you: {ni} of place with a person, and {no} of possession between the noun and the noun',
      ),
    },
  ],
  tables: [
    {
      caption: T('The first line of a letter, with the three particles in order'),
      head: [
        T('The part of the line'),
        T('The form'),
        T('The particle'),
        T('What the particle does'),
      ],
      rows: [
        [
          T('who writes'),
          T('*Pauro, Shiruwano to Temote yori*'),
          T('{yori}'),
          T('origin: "from", joining the names of the senders'),
        ],
        [
          T('to whom'),
          T('*Tesarunikē no kyōkai e*'),
          T('{e}'),
          T('addressee: the Greek case Portuguese renders as "the"'),
        ],
        [
          T('where God is'),
          T('*chichi naru Kami … ni aru*'),
          T('{ni}'),
          T('place: "in God the Father" and "in the Lord Jesus Christ"'),
        ],
        [
          T('the wish'),
          T('*megumi to heian ga*'),
          T('{ga}'),
          T('the subject: what the sender wishes, not who wishes'),
        ],
        [
          T('upon whom'),
          T('*anata no ue ni*'),
          T('{ni}'),
          T('the place of the wish: the people are the place, not the subject'),
        ],
      ],
    },
    {
      caption: T('Opening and closing: the same construction, one sentence on each side'),
      head: [
        T('The part'),
        T('The opening sentence'),
        T('The closing sentence'),
        T('What changed'),
      ],
      rows: [
        [
          T('the sender'),
          T('*Pauro … yori*'),
          T('*watashi no ai wa …*'),
          T('the name of the sender goes from origin to possessor'),
        ],
        [
          T('whose letter it is'),
          T('*Tesarunikē no kyōkai e*'),
          T('*anata subete no mono to tomoni*'),
          T('the same particle of company, with the whole noun wrapped around'),
        ],
        [
          T('what is wished'),
          T('*megumi to heian ga …*'),
          T('*watashi no ai wa …*'),
          T('the thing wished for is the subject in both cases'),
        ],
        [
          T('where the thing is'),
          T('*anata no ue ni*'),
          T('*Kirisuto Yesu ni arite*'),
          T('{ni}: "upon you" and "in Christ"'),
        ],
        [
          T('end of the sentence'),
          T('*arimasu yō ni*'),
          T('*arimasu*'),
          T('the same verb of being, with and without the formula of the wish'),
        ],
      ],
    },
    {
      caption: T(
        'The letter talking about itself, and the particle that links the act to its name',
      ),
      head: [
        T('What the letter says of itself'),
        T('The particle'),
        T('What it links'),
        T('Where it appears'),
      ],
      rows: [
        [
          T('what was sent'),
          T('{no}'),
          T('the name of the gospel to the name of who sent it'),
          T('1 Thessalonians 1:5'),
        ],
        [
          T('the word sent'),
          T('{ni}'),
          T('the name of whoever received the word'),
          T('1 Thessalonians 1:5: *anata ni tsutareta*'),
        ],
        [
          T('the reason for the firmness'),
          T('{kara}'),
          T('the cause at the end of the clause, after the verb'),
          T('1 Thessalonians 1:5: *kara desu*'),
        ],
        [
          T('the time that holds'),
          T('{toki}'),
          T('the noun of time to an inflected verb'),
          T('2 Thessalonians 1:10, which begins with *sono hi ni*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Tesarunikē no kyōkai e}, what is the particle {e} doing?'),
    options: [
      T(
        'marking the addressee of the letter: the name of the church comes after it, and there is no movement at all',
      ),
      T('marking direction: the letter is travelling to Thessalonica while you read it'),
      T('marking the place where God is, as in the sentence that follows'),
      T('marking the reason for the letter, which is the same as {yori} in the first line'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the particle of the senders at the opening of a letter: パウロ、シルワノ、テモテ____ (Paul, Silvanus and Timothy)',
      ),
      answer: 'から',
    },
    {
      kind: 'match',
      prompt: T('Match the part of the letter to the particle that makes it'),
      pairs: [
        { a: T('{yori}'), b: T('joins the names of who writes, at the start of the line') },
        { a: T('{e}'), b: T('marks the addressee, and comes before the name of the church') },
        { a: T('{ga}'), b: T('makes the wish the subject of the first clause of wish') },
        { a: T('{ni}'), b: T('says where the thing wished for is: in Christ, upon you') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Why is the first line of a letter good training for particles?'),
      options: [
        T(
          'because it has four nouns and four particles, and what the reader needs is to recognise their sequence',
        ),
        T('because it has a difficult Greek that can only be solved with particles'),
        T('because old letters use particles that no longer exist in modern Japanese'),
        T('because the opening is always written in ideograms, and the particles appear whole'),
      ],
      answer: 0,
    },
  ],
};
