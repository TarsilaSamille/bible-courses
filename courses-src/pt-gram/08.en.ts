import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Word inflection and agreement'),
  title: T('Agreement'),
  subtitle: T('Nominal, verbal and with an indeterminate subject'),
  body: C(`**Overview.** The verb agrees in person and number with the subject: in {Deus amou}, {amou} is third person singular; in {Deus e a sua palavra amaram}, the verb goes to the plural.

**Rule 1.** Nominal agreement is with the noun, never with the article: in {as{profeitas} maiores}, {maiores} is feminine plural because of {profetas}.

**Rule 2.** With an indeterminate subject the verb stays in the third person singular: in {se diz que a torre caiu}, the form {diz} does not say who says it.

**Rule 3.** A postposed subject does not change agreement: in {os discípulos o enviaram}, the pronoun {o} is a direct object and the verb {enviaram} is plural because of {os discípulos}.

**Rule 4.** Copula and predicative agree with the subject: in {A palavra é o maior dom}, the {maior} is masculine singular because it agrees with {dom}.

**Application.** In {Jesus amou os seus amigos}, the subject is {Jesus}, the verb {amou} is in the third person singular and {os} is a definite article: the verb agrees with the subject alone. In {os discípulos o enviaram}, the subject is compound ({os discípulos}), the verb goes to the third person plural ({enviaram}), and {o} is a postposed direct object. The pronoun {o} does not set the number of the verb, and that is where most readers go wrong.

**Check.** Three questions are enough for the verb: what is the **subject** and is it singular or plural? If it is compound, is the coordination {e} or {nem}? And is it **indeterminate**? With those three answers the verb is settled. For the adjective, one question: what does it agree with? Always with the **noun**, never with the article or the verb.`),
  vocab: [
    V('concordância nominal', 'concordância nominal', 'between article, adjective and noun'),
    V('concordância verbal', 'concordância verbal', 'between verb and subject'),
    V('singular', 'singular', 'number of one'),
    V('plural', 'plural', 'number of more than one'),
    V('primeira pessoa', 'primeira pessoa', 'the speaker'),
    V('terceira pessoa', 'terceira pessoa', 'who is not the speaker'),
    V('sujeito composto', 'sujeito composto', 'two or more nuclei'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'present but unidentified'),
    V('enviaram', 'enviaram', 'plural because of {os discípulos}'),
    V('maiores', 'maiores', 'feminine plural by {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The verb agrees in person and number with the subject: in {Deus amou}, {amou} is third person singular; in {Deus e a sua palavra amaram}, the verb goes to the plural.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Nominal agreement is with the noun, never with the article: in {as{profeitas} maiores}, {maiores} is feminine plural because of {profetas}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'With an indeterminate subject the verb stays in the third person singular: in {se diz que a torre caiu}, the form {diz} does not say who says it.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A postposed subject does not change agreement: in {os discípulos o enviaram}, the pronoun {o} is a direct object and the verb {enviaram} is plural because of {os discípulos}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Copula and predicative agree with the subject: in {A palavra é o maior dom}, the {maior} is masculine singular because it agrees with {dom}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Greek agreement carries more information'),
      text: T(
        'Ancient Greek marks the number of the subject more strictly than Portuguese: {πάντες} εἶδαν says the subject was plural, and {εἶδον} is the generic form. Where Portuguese accepts {viram} for one and for many, Greek forces the distinction. Translating from Greek settles, without intending to, the number Portuguese leaves open.',
      ),
    },
    {
      label: T('Agreement made at a distance'),
      text: T(
        'In {os discípulos do SENHOR saíram da cidade}, the subject is {os discípulos} and the verb {saíram} stands far from it, separated by {do SENHOR}. What agrees is the subject, and it sits at the front; the verb is the distant one. Distance is no argument: what decides is which term the verb belongs to.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T(
        'Subject {Deus} singular, verb {amou} third person singular: the agreement is direct.',
      ),
    },
    {
      text: 'Deus e a sua palavra amaram o mundo.',
      gloss: T('Compound subject: the verb {amaram} goes to the plural because of the two nuclei.'),
    },
    {
      text: 'os discípulos o enviaram',
      gloss: T('The pronoun {o} is a direct object and does not affect the plural of {enviaram}.'),
    },
    {
      text: 'se diz que a torre caiu',
      gloss: T('Indeterminate subject: {diz} stays third person singular even with {se} present.'),
    },
    {
      text: 'as maiores profetas',
      gloss: T('{maiores} is feminine plural because it agrees with {profetas}, not with {as}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T(
        '{maior} is masculine singular: the genitive {dos mandamentos} does not change the gender.',
      ),
    },
    {
      text: 'a palavra é o maior dom',
      gloss: T('The predicative {o maior dom} agrees with {A palavra}: {maior} is feminine.'),
    },
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T(
        '{havia} is impersonal and stays third person singular, even with {muitas pessoas}.',
      ),
    },
    {
      text: ' Jesus amou os seus amigos',
      gloss: T(
        'Subject {Jesus} postposed, verb third person singular: position does not change agreement.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Verbal agreement by kind of subject'),
      head: [T('Sujeito'), T('Verbo'), T('Exemplo')],
      rows: [
        [T('{Deus}'), T('3.ª do singular'), T('{Deus amou}')],
        [T('{Deus e a sua palavra}'), T('3.ª do plural'), T('{Deus e a sua palavra amaram}')],
        [T('{os discípulos}'), T('plural, mesmo posposto'), T('{os discípulos saíram}')],
        [T('{ninguém}'), T('3.ª do singular'), T('{ninguém viu}')],
        [T('{se diz que}'), T('3.ª do singular'), T('{se diz que veio}')],
        [T('{É necessário}'), T('3.ª do singular'), T('{É necessário vir}')],
        [T('{o povo}'), T('3.ª do singular'), T('{o povo ficou}')],
      ],
    },
    {
      caption: T('Nominal agreement: what the noun agrees with'),
      head: [T('Palavra'), T('Com quem concorda'), T('Exemplo')],
      rows: [
        [T('artigo'), T('com o substantivo'), T('{os} em {os livros}')],
        [T('adjetivo'), T('com o substantivo'), T('{antigos} em {os livros antigos}')],
        [T('numeral'), T('com o substantivo'), T('{dois} em {dois livros}')],
        [T('pronome'), T('com o substantivo'), T('{meus} em {meus livros}')],
        [T('artigo'), T('nunca com o adjetivo'), T('{os} nunca vira {as} por causa de {antigas}')],
      ],
    },
    {
      caption: T('Number of the verb against the person of the subject'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        [T('1.ª'), T('{amo}'), T('{amamos}')],
        [T('2.ª'), T('{amas}'), T('{amais}')],
        [T('3.ª'), T('{ama}'), T('{amam}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {os discípulos o enviaram}, the verb {enviaram} is plural because:'),
    options: [
      T('the subject is {os discípulos}, and the pronoun {o} does not count'),
      T('the object {o} comes before the verb'),
      T('the verb comes after the postposed subject'),
      T('there are two nominal terms in the sentence'),
    ],
    answer: 0,
    hint: T('The {o} is a direct object: remove it and the verb stays plural.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {se diz que a torre caiu}, the subject is:'),
      options: [
        T('indeterminate, and the verb stays third person singular'),
        T('compound, because there is {se} and {que}'),
        T('hidden, because the verb {disse} carries the person'),
        T('non existent, because there is no verb of action'),
      ],
      answer: 0,
      hint: T(
        'The form {diz} does not say who says it, which is why the subject is indeterminate.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match each word to the term it agrees with.'),
      pairs: [
        { a: T('{maiores} in {as{profeitas} maiores}'), b: T('with the noun {profetas}') },
        { a: T('{amou} in {Deus amou}'), b: T('with the subject {Deus}') },
        { a: T('{amaram} in {Deus e a sua palavra amaram}'), b: T('with a compound subject') },
        { a: T('{maior} in {o maior dos mandamentos}'), b: T('with the noun {mandamento}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The verb agrees with the ______, and never with the direct object.'),
      answer: 'sujeito',
      hint: T('In {os disciples o enviaram}, the subject is {os discípulos}.'),
    },
  ],
};
