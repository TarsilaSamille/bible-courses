import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Word inflection and agreement'),
  title: T('Pronoun placement'),
  subtitle: T('Proclisis, enclisis and mesoclisis'),
  body: C(`**Overview.** There is {proclisis} when the pronoun meets an attractive word ahead of it: in {não me veja}, the {não} pulls the {me} in front of the verb.

**Rule 1.** In the remaining cases the pronoun goes after the verb, which is called {enclisis}: in {fala-me}, {viu-o}, the pronoun stays glued to the verb.

**Rule 2.** {Mesoclisis} appears when the infinitive and the auxiliary form a periphrastic verb: in {dir-me-ás}, the pronoun sits between the two, and the verb is the whole periphrasis.

**Rule 3.** The attractive word is always {negative}, {interrogative}, {relative}, a {conjunction} or a pronoun: in {Quem me viu}, {me} is drawn up because of {quem}.

**Rule 4.** Greek solves the same sentence by {enclisis} and by the verb ending: in {κλαίω} the pronoun does not appear, and the verbal form already names the person.

**Application.** In {Jesus amou-o}, the pronoun {o} is in **enclisis** and is a direct object of {amou}. In {não me viu}, the same pronoun is in **proclisis** because of the {não}. In the original Greek, the pronoun is **enclitic** and sticks to the first accented word of the sentence, which is not always the verb, and that is why the position in Portuguese rarely matches the Greek one.

**Check.** Ask four things, in this order. Is there **negation**, **interrogation** or a **conjunction** before the verb? Is there another pronoun, as with {me} and {te} together? Is the verb one of the ones with **obligatory enclisis**? If the answer is no to all three and the verb is a future auxiliary, {mesoclisis} is possible. In any case the position is not free: it is settled by the structure, not by fluency.`),
  vocab: [
    V('próclise', 'próclise', 'pronoun before the verb'),
    V('ênclise', 'ênclise', 'pronoun after the verb'),
    V('mesóclise', 'mesóclise', 'pronoun between infinitive and auxiliary'),
    V('pronome oblíquo', 'pronome oblíquo', 'unstressed form as object'),
    V('não', 'não', 'attractive word for proclisis'),
    V('se', 'se', 'attractive word for proclisis'),
    V('amar-te-ei', 'amar-te-ei', 'mesoclisis in the future indicative'),
    V('dizer-me', 'dizer-me', 'mesoclisis in the infinitive'),
    V('fala-me', 'fala-me', 'enclisis with a simple verb'),
    V('palavra atrativa', 'palavra atrativa', 'word that triggers proclisis'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'There is {proclisis} when the pronoun meets an attractive word ahead of it: in {não me veja}, the {não} pulls the {me} in front of the verb.',
      ),
    },
    {
      n: '§2',
      text: T(
        'In the remaining cases the pronoun goes after the verb, which is called {enclisis}: in {fala-me}, {viu-o}, the pronoun stays glued to the verb.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Mesoclisis} appears when the infinitive and the auxiliary form a periphrastic verb: in {dir-me-ás}, the pronoun sits between the two, and the verb is the whole periphrasis.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The attractive word is always {negative}, {interrogative}, {relative}, a {conjunction} or a pronoun: in {Quem me viu}, {me} is drawn up because of {quem}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Greek solves the same sentence by {enclisis} and by the verb ending: in {κλαίω} the pronoun does not appear, and the verbal form already names the person.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where Greek and Portuguese disagree'),
      text: T(
        'In {Jesus amou-o}, Portuguese puts the pronoun after the verb; ancient Greek {ἠγάπησεν αὐτόν} puts it there too, but the Greek position is that of the last accented word of the sentence. The result: in several sentences Greek and Portuguese diverge, and not through any fault of either, but because the two languages fixed different rules for the same problem.',
      ),
    },
    {
      label: T('The form Greek does without'),
      text: T(
        'Ancient Greek has the reflexive {ἑαυτοῦ} and the oblique {αὐτοῦ}, but uses them sparingly: the verb ending already marks the person, and the pronoun appears only when the sentence is ambiguous. Portuguese has no such economy, and that is why pronoun placement is a long discussion in which each new exception is born from the biblical text.',
      ),
    },
  ],
  examples: [
    { text: 'Jesus amou-o', gloss: T('Enclisis: the pronoun {o} comes after the verb {amou}.') },
    { text: 'não me viu', gloss: T('Proclisis: the {não} pulls {me} in front of the verb {viu}.') },
    {
      text: 'Quem me viu?',
      gloss: T('Pronoun {me} in proclisis because of the interrogative pronoun {Quem}.'),
    },
    {
      text: 'dir-me-ás',
      gloss: T('Mesoclisis: the pronoun sits between the infinitive {dir} and the auxiliary {ás}.'),
    },
    {
      text: 'amá-lo-emos',
      gloss: T('Mesoclisis with infinitive and auxiliary {emos} forming one verb.'),
    },
    {
      text: 'falar-me',
      gloss: T('Mesoclisis with auxiliary {ar}: the pronoun sits between {fal} and {ar}.'),
    },
    {
      text: 'não se diga',
      gloss: T(
        'The {se} of cliticisation does not trigger proclisis: {não} attracts the pronoun, {se} stays.',
      ),
    },
    {
      text: 'dou-lhes a lei',
      gloss: T(
        'Enclisis with the pronoun {lhes}; the indirect and direct order follows the government.',
      ),
    },
    {
      text: 'Jesus, que me ama, deu-me',
      gloss: T(
        'The relative clause brings the attractive {que}, and {me} stays proclitic even in clitic form.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Words that trigger proclisis'),
      head: [T('Tipo'), T('Palavras'), T('Exemplo')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}, {jamás}'), T('{não me veja}')],
        [T('interrogativas'), T('{quem}, {que}, {qual}'), T('{Quem me viu}')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}')],
        [T('pronomes'), T('{me}, {te}, {nos}, {vos}'), T('{me diz que sim}')],
        [T('indefinidos'), T('{alguém}, {alguma coisa}'), T('{Alguém me viu}')],
        [T('virtuais'), T('{e}, {mas}, {nem}'), T('{E me chamaram}')],
        [T('pronome relativo'), T('{quem}, {que}'), T('{Quem me ouvir, seu é}')],
      ],
    },
    {
      caption: T('The three positions of the pronoun'),
      head: [T('Posição'), T('Onde fica'), T('Quando'), T('Exemplo')],
      rows: [
        [T('{próclise}'), T('antes do verbo'), T('com palavra atrativa'), T('{não me veja}')],
        [T('{ênclise}'), T('depois do verbo'), T('sem atrativa'), T('{fala-me}')],
        [
          T('{mesóclise}'),
          T('entre infinitivo e auxiliar'),
          T('com locução verbal'),
          T('{dir-me-ás}'),
        ],
      ],
    },
    {
      caption: T('Enclisis and mesoclisis by tense'),
      head: [T('Tempo'), T('Forma simples'), T('Com auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{fala}'), T('{está falando}'), T('ênclise')],
        [T('pretérito'), T('{falou}'), T('{havia falado}'), T('ênclise')],
        [T('futuro'), T('{falará}'), T('{dir-me-ás}'), T('mesóclise possível')],
        [T('infinitivo'), T('{falar}'), T('{dizer-me}'), T('mesóclise')],
        [T('gerúndio'), T('{falando}'), T('{estou falando}'), T('ênclise')],
        [T('particípio'), T('{falado}'), T('{tendo falado}'), T('ênclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {não me viu}, the pronoun {me} is in proclisis because of:'),
    options: [
      T('the {não}, which is an attractive word'),
      T('the person of {me}'),
      T('the verb {viu}'),
      T('the form of {me}, which is unstressed'),
    ],
    answer: 0,
    hint: T('Remove the {não} and {me} becomes enclitic: {viu-me}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {dir-me-ás}, there is mesoclisis because:'),
      options: [
        T('the infinitive {dir} and the auxiliary {ás} form one periphrastic verb'),
        T('the pronoun {me} is the kind that likes mesoclisis'),
        T('{dir} is a verb of motion and {ás} is the auxiliary'),
        T('the sentence has a negation pushing the pronoun'),
      ],
      answer: 0,
      hint: T('Counted separately, {dir} and {ás} are two verbs; together, one.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the position of the pronoun.'),
      pairs: [
        { a: T('{não me veja}'), b: T('{proclisis}') },
        { a: T('{fala-me}'), b: T('{enclisis}') },
        { a: T('{dir-me-ás}'), b: T('{mesoclisis}') },
        { a: T('{Quem me viu}'), b: T('{proclisis} with a pronoun') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The pronoun sitting between the infinitive and the auxiliary is in ______.'),
      answer: 'mesóclise',
      hint: T('In {dir-me-ás}, {me} sits in the middle of the verb.'),
    },
  ],
};
