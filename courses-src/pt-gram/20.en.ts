import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Government, the crasis and pronoun placement'),
  title: T('Pronoun placement in detail'),
  subtitle: T('Applying proclisis, enclisis and mesoclisis'),
  body: C(`**Overview.** The {attractive word} determines proclisis, and there are five kinds that pull the pronoun: {negation}, {interrogation}, {relative}, {conjunction} and {pronoun}.

**Rule 1.** Verbs like {dar}, {fazer} and {trazer} demand {enclisis} even with an attractive word behind: in {Deus me deu}, the pronoun stays after the verb because the verb has the last word.

**Rule 2.** {Mesoclisis} exists only with an infinitive and an auxiliary: in {dir-me-ás} and {amá-lo-emos}, the pronoun sits between the two parts of the periphrasis.

**Rule 3.** The clitic {se} is the oblique pronoun of the verb: in {lavou-se}, the {se} comes from {lavar}, and the verb is pronominal by nature.

**Rule 4.** Greek solves the same problem by {enclisis} and by the verb ending, and that is why the Greek and the Portuguese position rarely coincide.

**Application.** In {Dir-me-ás que isto é suave}, the mesoclisis {dir-me-ás} is the future indicative, and the pronoun sits inside the verb. In the original Greek (διελθόντες), the pronoun {αὐτόν} comes enclitic, glued to the participle, and the Greek position is always post verbal. Portuguese mesoclisis is a solution to a problem Greek did not have: it is Portuguese that has to fit two verbs into one place.

**Check.** For a pronoun, ask in order: is there **negation**, **interrogation** or a **conjunction** before the verb? Is there another pronoun? Is the verb one of the ones with **obligatory enclisis**? If the answer is no to all three and the verb is a future auxiliary, {mesoclisis} is possible. And in any case the position is not free: it is settled by the syntactic structure, and not by the speaker fluency.`),
  vocab: [
    V('palavra atrativa', 'palavra atrativa', 'word that triggers proclisis'),
    V('verbo conjugado', 'verbo conjugado', 'verb with person and number'),
    V('locução verbal', 'locução verbal', 'infinitive plus auxiliary'),
    V('próclise', 'próclise', 'pronoun before the verb'),
    V('ênclise', 'ênclise', 'pronoun after the verb'),
    V('mesóclise', 'mesóclise', 'pronoun between infinitive and auxiliary'),
    V('dir-me-ás', 'dir-me-ás', 'mesoclisis with auxiliary {ás}'),
    V('não me veja', 'não me veja', 'proclisis because of {não}'),
    V('dir-me', 'dir-me', 'mesoclisis with auxiliary {r}'),
    V('διελθόντες', 'διελθόντες', 'Greek participle with an enclitic pronoun'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {attractive word} determines proclisis, and there are five kinds that pull the pronoun: {negation}, {interrogation}, {relative}, {conjunction} and {pronoun}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbs like {dar}, {fazer} and {trazer} demand {enclisis} even with an attractive word behind: in {Deus me deu}, the pronoun stays after the verb because the verb has the last word.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Mesoclisis} exists only with an infinitive and an auxiliary: in {dir-me-ás} and {amá-lo-emos}, the pronoun sits between the two parts of the periphrasis.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The clitic {se} is the oblique pronoun of the verb: in {lavou-se}, the {se} comes from {lavar}, and the verb is pronominal by nature.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Greek solves the same problem by {enclisis} and by the verb ending, and that is why the Greek and the Portuguese position rarely coincide.',
      ),
    },
  ],
  notes: [
    {
      label: T('The archaism Scripture preserves'),
      text: T(
        'Bible translations in old Portuguese preserve forms like {dir-me-ás} and {falar-te-ei}, which current usage abandoned. That is not a mistake: it is the register of a language that had not yet lost {mesoclisis}. Reading those forms as typing errors loses the information that the text is old, and the information is in the text itself.',
      ),
    },
    {
      label: T('The {se} that is not the crasis {se}'),
      text: T(
        'In {falar-se}, the {se} is an oblique pronoun: the {a} of the preposition and the {o} of the article fused, and what is left is the {se} of the verb. In {a casa}, the {a} is an article and has nothing to do with a pronoun. There are three occurrences of {a} in one sentence, and each does a different job.',
      ),
    },
  ],
  examples: [
    {
      text: 'Dir-me-ás que isto é suave',
      gloss: T('Mesoclisis: the pronoun sits between {dir} and {ás}.'),
    },
    {
      text: 'falar-te-ei',
      gloss: T('Mesoclisis with the auxiliary {-ei}: the pronoun sits inside the periphrasis.'),
    },
    {
      text: 'não me veja',
      gloss: T('Proclisis: the attractive word {não} pulls the pronoun forward.'),
    },
    {
      text: 'Deus me deu',
      gloss: T(
        'Obligatory enclisis: the verb {deu} demands the pronoun after, even with the subject before.',
      ),
    },
    { text: 'Quem me viu disse', gloss: T('The interrogative {Quem} triggers proclisis of {me}.') },
    {
      text: 'viu-me',
      gloss: T('Enclisis: with nothing attractive, the pronoun goes after the verb {viu}.'),
    },
    {
      text: 'lavou-se',
      gloss: T('The {se} is the oblique pronoun of the verb {lavar}, and the form is pronominal.'),
    },
    {
      text: 'amemo-nos',
      gloss: T(
        'The same periphrasis written without the diaeresis: {amemo-nos} is the traditional form.',
      ),
    },
    {
      text: 'διελθόντες',
      gloss: T('Greek participle: the enclitic pronoun comes after the accented word.'),
    },
  ],
  tables: [
    {
      caption: T('Verbs that demand the pronoun after'),
      head: [T('Grupo'), T('Verbos'), T('Com {não}'), T('Sem {não}')],
      rows: [
        [
          T('com objeto direto'),
          T('{dar}, {ver}, {fazer}'),
          T('{Deus não me deu}'),
          T('{Deus me deu}'),
        ],
        [T('com objeto indireto'), T('{falar}, {responder}'), T('{não me falou}'), T('{falou-me}')],
        [T('com os dois objetos'), T('{trazer}'), T('{não me trouxe}'), T('{trouxe-me}')],
        [T('com infinitivo'), T('{deixar}, {ver}'), T('{não me deixou}'), T('{deixou-me}')],
        [T('com locução'), T('{ir}, {vir}'), T('{não me vejo}'), T('{vou-me}')],
        [T('com {se} próprio'), T('{lavar-se}'), T('{não se lavou}'), T('{lavou-se}')],
      ],
    },
    {
      caption: T('Position of the pronoun by tense'),
      head: [T('Tempo'), T('Com auxiliar'), T('Sem auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{está falando}'), T('{fala}'), T('ênclise')],
        [T('pretérito'), T('{havia falado}'), T('{falou}'), T('ênclise')],
        [T('futuro'), T('{vai falar}'), T('{falará}'), T('mesóclise possível')],
        [T('infinitivo'), T('{dizer}'), T('{dir}'), T('mesóclise com {r}')],
        [T('gerúndio'), T('{está falando}'), T('{falando}'), T('ênclise')],
        [T('particípio'), T('{tendo falado}'), T('{falado}'), T('ênclise')],
      ],
    },
    {
      caption: T('The five words that pull the pronoun'),
      head: [T('Tipo'), T('Palavras'), T('Frase'), T('Posição')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}'), T('{não me veja}'), T('próclise')],
        [T('interrogativas'), T('{quem}, {qual}, {que}'), T('{Quem me viu}'), T('próclise')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}'), T('próclise')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}'), T('próclise')],
        [T('pronomes'), T('{me}, {te}, {nos}'), T('{me diz que sim}'), T('próclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus me deu}, the pronoun {me} is in enclisis because:'),
    options: [
      T('the verb {deu} demands the pronoun after, even with the subject before'),
      T('the subject {Deus} comes first, and the pronoun follows the subject'),
      T('there is no attractive word before the verb'),
      T('the verb is a future auxiliary'),
    ],
    answer: 0,
    hint: T('The verbs {dar}, {fazer} and {trazer} ask for the pronoun after, always.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Mesoclisis only happens:'),
      options: [
        T('with a verbal periphrasis, between the infinitive and the auxiliary'),
        T('with any verb in the present indicative'),
        T('with a transitive verb without an indirect object'),
        T('with the word {não} before the verb'),
      ],
      answer: 0,
      hint: T('What defines mesoclisis is having two verbs in one periphrasis.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the position of the pronoun.'),
      pairs: [
        { a: T('{dir-me-ás}'), b: T('mesoclisis') },
        { a: T('{não me veja}'), b: T('proclisis') },
        { a: T('{viu-o}'), b: T('enclisis') },
        { a: T('{lavou-se}'), b: T('enclisis with pronominal {se}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The word that triggers proclisis is called ______.'),
      answer: 'atrativa',
      hint: T('In {não me veja}, the {não} is the attractive word.'),
    },
  ],
};
