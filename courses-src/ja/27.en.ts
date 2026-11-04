import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Particle'),
  title: T('{ni} and {e}: destination and direction are two particles'),
  subtitle: T(
    '{ni} goes after almost everything and needs no verb of motion; {e} shows up only with verbs of going and coming, which is why it is rarer in running text than in grammar books',
  ),
  body: C(`
## {ni}: destination, which needs no verb at all

{ni} goes after the noun and says where to. *Kare wa kyōkai ni iku*, "he goes to school", is the simplest sentence there is, and it already carries the lesson: {ni} does not mean movement, it means destination. The verb is what moves, and {ni} only points.

What makes {ni} useful is that it does not need a verb of motion to work. In *hon o ie ni {ireru}*, "I put the book inside the house", the noun after {ni} is a place something **goes into**, and the verb is the one for putting. In *tomodachi ni tegami o kakimashita*, "I write a letter to my friend", what comes after {ni} is not a place at all: it is a person who receives. The same {ni} does both jobs, and what changes is what the noun that follows it is.

## {e}: direction, and the verbs that ask for it

Japanese writes direction in a separate particle. *Kyōkai e iku* is the same sentence as before, with {e} where the {ni} was, and the only difference is that {e} says direction, not destination. In Portuguese those are two almost identical words; in Japanese they are two different particles.

{e} shows up almost only with verbs of going and coming: {iku} to go, {kuru} to come, {kaeru} to return, and then *hōkō suru* to depart, *mukau* to head for, *wataru* to cross. With any other verb, the place is marked by {ni}: *eki ni {noru}*, "I take the train at the station", *machi ni {sumu}*, "we live in town", *ie ni hairu*, "I go into the house". Writing *eki e noru* is not Japanese.

## The same noun with the two particles

The question that comes up right away is whether {iku} takes both. It does. *Tōkyō ni iku* and *Tōkyō e iku* are sentences any Japanese speaker understands, and the difference is register: {e} is more careful, more written, and {ni} is what shows up in speech and in running text. What does not exist is {e} with a verb that is not one of going and coming, and that is where a beginner goes wrong.

Matthew 2 shows this better than any grammar. In 2:1, *hiseki-tachi wa erusaremu ni yatte kite*, "the magi from the east came to Jerusalem", the verb is to come, the noun is the place, and the particle is {ni}. In 2:8, *kare wa sono-tachi o Betsurēmu ni {okutta}*, "he sent them to Bethlehem", the particle is still {ni}, and now the noun after it is the destination of a third party, not of the one sending. In John 1:43, *Yesu wa Gariraya ni {iku} to shitameta*, the text writes {ni} with the verb {iku}, which is precisely the verb that accepts {e} most easily. A Japanese translator could write {e} in all three places without a single error; the text chose {ni}, and the choice says nothing about the sense.

## The other five jobs of {ni}

The difficulty with {ni} is not that it means destination. It is that destination is **only one of six places** where it shows up.

The first is time. *San-ji ni*, "at three o’clock"; *yoru ni*, "at night". The {ni} after a time noun says when, and the shape is the same: noun plus particle.

The second is the person, and it comes before the direct object, which produces the inversion the syntax lesson already measured: *tomodachi ni tegami o kakimashita*. The {ni} of the recipient is the same one as the {ni} of destination, and whoever translates from Portuguese writes *tegami o tomodachi ni*, which is a sentence that exists, with another meaning.

The third is whoever suffers the action, and it is the broadest of the three. *Onna ni nagureareta*, "she was hit by a woman", has the agent in the particle; but the same job shows up with no passive at all, in Matthew 26:50, *Yesu ni te o kakete*, "they laid hands on Jesus": {ni} points at whoever received the action, and the sentence stays active. Whoever translates out of a language where the preposition is obligatory looks for an instrument and does not find one; what is there is a person.

The fourth is purpose. *Kami ni kansha shite*, "after giving thanks to God", or *mizu o nomu ni nonde iku*, "I am going to drink water in order to drink", put a motive in front of the verb, and the shape is noun plus {ni} plus verb.

The fifth is the place where an event happens inside a group: *Kazoku ni otoko no ko ga umareta*, "a boy was born in that family". The noun comes first, the particle says which group the fact belongs to, and the translation usually settles it with a genitive Portuguese does not have.

And {e} has its own places, which are fixed phrase and not a rule about verbs: *daiichi ni*, "first", *tsugi ni*, "next", *michi no ue e*, "along the road". They are set phrases, and that is why {e} does not exist on its own: without the noun, {e} disappears.
`),
  vocab: [
    V(
      'ni',
      'に',
      'destination, person, time, purpose: the particle that goes after almost everything (ni)',
    ),
    V('e', 'へ', 'direction: it goes with verbs of going and coming, and in set phrases (e)'),
    V('iku', '行く', 'to go; the verb that accepts {e} most easily (iku)'),
    V('kuru', '来る', 'to come (kuru)'),
    V('kaeru', '帰る', 'to return, to go back home (kaeru)'),
    V('tsuku', '着く', 'to arrive; the place of arrival takes {ni}, never {e} (tsuku)'),
    V('sumu', '住む', 'to live; living is {ni}, never {e} (sumu)'),
    V(
      'ireru',
      '入れる',
      'to put in, to make enter; the destination of {ni} is a place something goes into (ireru)',
    ),
    V('noru', '乗る', 'to take, to board: a vehicle, a train, a horse (noru)'),
    V('oriru', '降りる', 'to get off, to get down from a vehicle (oriru)'),
    V(
      'hanareru',
      '離れる',
      'to leave, to get away from; the place one leaves also takes {ni} (hanareru)',
    ),
    V(
      'motsu',
      '持つ',
      'to carry, to have with one; {ni} is the place where the thing is kept (motsu)',
    ),
    V(
      'okuru',
      '送る',
      'to send; the destination of whoever is sent is the {ni} that comes before the noun (okuru)',
    ),
    V(
      'erusaremu',
      'エルサレム',
      'Jerusalem; the destination noun of Matthew 2:1 and of Mark 12:2 (erusaremu)',
    ),
    V('jikan', '時間', 'time, hour; with {ni}, time becomes a point in the sentence (jikan)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ni} goes after the noun and marks destination, and destination needs no verb of motion: the noun after it can be a place, a person or a time.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} marks direction and lives practically only with verbs of going and coming. With {noru}, {sumu} and {ireru} the place is marked with {ni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'With {iku} both are correct, and the choice is register: {e} is more careful and more written, {ni} is the one of running text.',
      ),
    },
    {
      n: '4',
      text: T(
        'The {ni} of the person comes before the direct object: *tomodachi ni tegami o kakimashita*. With a transitive verb it points at whoever receives the action, and the place is the destination of whoever was sent.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the passive the agent takes {ni}: *onna ni nagureareta*. The same job shows up with no passive, in Matthew 26:50, *Yesu ni te o kakete*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why {e} barely shows up in the Bible'),
      text: T(
        'Direction is the one thing biblical Greek expresses with a dedicated preposition, and Japanese settles it with {ni} without difficulty: destination and direction can be the same word, because {ni} is not a preposition and does not carry the difference Greek carries. {e} survives, but as register: it shows up in careful text, in the name of an institution and in the opening of a letter, where the destination is not movement. Mark 12:2 is a live example, *shimo-be o nōfu-tachi no tokoro e yobisareta*, "he sent the servant to the house of the farmers": the particle is {e}, and what follows it is a whole group of people. Whoever expects to see {e} on every "to" of a translation will read a whole page without meeting it once.',
      ),
    },
    {
      label: T('The {ni} of time does not need the person named'),
      text: T(
        'In *san-ji ni oki mashita*, "I arrived at three", the person disappears from the sentence: the number has already said everything, and {ni} stays glued to it. With *yoru ni*, "at night", what disappears is the noun, because the word is already the time. It is the same movement as the other particles: the name of what is at stake can be left out, and what stays is the mark and the verb. Whoever translates from Portuguese writes "I arrived at three o’clock" and loses the economy without knowing why.',
      ),
    },
  ],
  examples: [
    {
      text: '博士たちがエルサレムにやって来て',
      gloss: T(
        'hiseki-tachi wa erusaremu ni yatte kite — the magi from the east came to Jerusalem (Matthew 2:1): a verb of coming with {ni}, and the text does not use {e}',
      ),
    },
    {
      text: 'そして、こう言って彼らをベツレヘムに送った。',
      gloss: T(
        'soshite, kō itte kare o Betsurēmu ni okutta — and so he sent them to Bethlehem (Matthew 2:8): the {ni} is the destination of whoever is sent, not of the one sending',
      ),
    },
    {
      text: 'その翌日、イエスはガリラヤに行こうとされた。',
      gloss: T(
        'sono jitsuyō ni, Yesu wa Gariraya ni iku to shitameta — the next day Jesus resolved to go to Galilee (John 1:43): {ni} with the verb {iku}',
      ),
    },
    {
      text: '今どこにお泊まりですか。',
      gloss: T(
        'ima doko ni tomari masu ka — where are you staying now (John 1:38): the interrogative is a noun, and {ni} is the one of place',
      ),
    },
    {
      text: '駅に乗り、町に住み、家に入ります',
      gloss: T(
        'eki ni noru, machi ni sumu, ie ni hairu — I take the train, I live in town, I go into the house: three verbs that do not accept {e}',
      ),
    },
    {
      text: '友達に手紙を書きました。',
      gloss: T(
        'tomodachi ni tegami o kakimashita — I wrote a letter to my friend (the {ni} of the recipient comes before the object)',
      ),
    },
    {
      text: '群衆が来て、イエスに手をかけて捕えた。',
      gloss: T(
        'shūshū ga kite, Yesu ni te o kakete tsuketa — the crowd came and laid hands on Jesus (Matthew 26:50): {ni} points at whoever received the action, and the sentence stays active',
      ),
    },
    {
      text: 'しもべを農夫たちのところへ遣わした',
      gloss: T(
        'shimo-be o nōfu-tachi no tokoro e yobisareta — he sent the servant to the house of the farmers (Mark 12:2): the {e} of direction, with the destination being a group of people',
      ),
    },
  ],
  tables: [
    {
      caption: T('{e} or {ni}: the verb decides, not the meaning of the place'),
      head: [T('The verb'), T('How it is written'), T('The particle'), T('Why')],
      rows: [
        [T('{iku} to go'), T('*kyōkai e iku*'), T('{e}'), T('direction, with a verb of motion')],
        [
          T('{kuru} to come'),
          T('*erusaremu e kite*'),
          T('{e}'),
          T('direction, with a verb of motion'),
        ],
        [
          T('{kaeru} to return'),
          T('*ie e kaeru*'),
          T('{e}'),
          T('the destination of the return is direction like the going'),
        ],
        [
          T('{tsuku} to arrive'),
          T('*erusaremu ni tsuku*'),
          T('{ni}'),
          T('the place of arrival is not direction'),
        ],
        [T('{sumu} to live'), T('*machi ni sunu*'), T('{ni}'), T('living is not going anywhere')],
        [
          T('{noru} to board'),
          T('*eki ni noru*'),
          T('{ni}'),
          T('the thing goes into a place, and {e} does not fit'),
        ],
        [
          T('{ireru} to put in'),
          T('*ie ni ireru*'),
          T('{ni}'),
          T('it is the destination of the object, not of whoever goes'),
        ],
      ],
    },
    {
      caption: T('The five jobs of {ni}, with the same shape each time'),
      head: [T('What {ni} points at'), T('The sentence'), T('What Portuguese does with it')],
      rows: [
        [
          T('destination'),
          T('*kyōkai ni iku*'),
          T('"goes to school": the particle of the place of whoever goes'),
        ],
        [
          T('recipient'),
          T('*tomodachi ni tegami o kakimashita*'),
          T('"writes to the friend": the same particle, before the object'),
        ],
        [
          T('time'),
          T('*yoru ni, san-ji ni*'),
          T('"at night, at three": the time noun enters in the same shape'),
        ],
        [
          T('who receives the action'),
          T('*Yesu ni te o kakete*'),
          T('"laid hands on Jesus": {ni} with no passive at all'),
        ],
        [
          T('agent of the passive'),
          T('*onna ni nagureareta*'),
          T('"hit by a woman": the doer comes first'),
        ],
        [
          T('purpose'),
          T('*kami ni kansha shite*'),
          T('"after giving thanks": {ni} ties the action to a motive'),
        ],
      ],
    },
    {
      caption: T('The same destination, three possible renderings'),
      head: [T('What you mean'), T('With {ni}'), T('With {e}'), T('Where it appears')],
      rows: [
        [
          T('the magi came to Jerusalem'),
          T('*erusaremu ni yatte kite*'),
          T('*erusaremu e yatte kite*'),
          T('Matthew 2:1 writes {ni}'),
        ],
        [
          T('he sent them to Bethlehem'),
          T('*Betsurēmu ni okutta*'),
          T('*Betsurēmu e okutta*'),
          T('Matthew 2:8: the destination is of whoever is sent'),
        ],
        [
          T('Jesus went to Galilee'),
          T('*Gariraya ni itte*'),
          T('*Gariraya e itte*'),
          T('John 1:43 writes {ni}'),
        ],
        [
          T('he sent the servant to the farmers'),
          T('*nōfu-tachi no tokoro ni*'),
          T('*nōfu-tachi no tokoro e*'),
          T('Mark 12:2 writes {e}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {駅に乗って、町に住んで、家に入ります}, why do the three sentences use {ni} and not {e}?',
    ),
    options: [
      T(
        'because none of the three verbs is one of going or coming, and {e} only shows up with verbs of motion',
      ),
      T('because {ni} is the particle of place and {e} is the particle of time'),
      T('because the three sentences are translations, and {e} does not appear in translated text'),
      T('because {e} was replaced by {ni} in the modern translation of the Gospel'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the particle of destination, not the one of direction: 家に____入ります (I go into the house)',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Match the sentence to the job {ni} is doing'),
      pairs: [
        {
          a: T('{erusaremu ni okutta}'),
          b: T('destination of whoever is sent: the particle points at the object'),
        },
        { a: T('{yoru ni}'), b: T('time: the time noun enters in the same shape') },
        { a: T('{onna ni nagureareta}'), b: T('agent of the passive: who did it') },
        {
          a: T('{tomodachi ni tegami o kakimashita}'),
          b: T('recipient, which comes before the direct object'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Why can a Japanese translation write {ni} where a grammar book would write {e}, with neither of them being wrong?',
      ),
      options: [
        T(
          'because {ni} covers destination and direction at once, and {e} is the more careful mark for the same job',
        ),
        T('because {e} only exists in old text and running Japanese lost it'),
        T('because {ni} is compulsory with transitive verbs and {e} with intransitive ones'),
        T('because the particle of direction changes sense according to the tense of the verb'),
      ],
      answer: 0,
    },
  ],
};
