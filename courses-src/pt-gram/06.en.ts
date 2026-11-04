import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('The clause and its terms'),
  title: T('Essential terms of the clause'),
  subtitle: T('Subject and predicate'),
  body: C(`**Overview.** The {subject} is what something is declared of: in {No princípio criou Deus os céus e a terra}, {Deus} is the subject, and the answer to {who?} confirms it.

**Rule 1.** The subject takes four forms: {simple} ({Deus}), {compound} ({Deus e a sua palavra}), {hidden} ({os discípulos}) and {indeterminate} ({se diz que}).

**Rule 2.** The {predicate} is what is declared of the subject, and the verb is its nucleus: in {Deus criou os céus}, the predicate is {criou os céus}, and the form {criou} says what happened.

**Rule 3.** The {copula} joins the {predicative} to the subject: in {Deus é bom}, {é} links, and {bom} says what is declared of {Deus}, with no verb of its own.

**Rule 4.** Position does not define the function: in {E, logo, disse o SENHOR a Moisés}, the subject {o SENHOR} comes after the verb {disse}, and it is still the subject.

**Application.** In {No princípio criou Deus os céus e a terra}, the Greek order (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) puts the subject {Deus} after the verb {criou}, and the analysis does not change for that. The predicate is {criou os céus e a terra}, with the objects {os céus} and {a terra}. And {no princípio} is an adverbial adjunct of time: it can move to the end of the sentence without breaking anything, which already gives it away as accessory.

**Check.** Ask four questions, always in this order: what is the **verb** and what person and number does it require? Which noun **accepts** that verb, not the first one that appears? What is left after the subject and the verb is the **predicate**? And is the subject simple, compound, hidden, indeterminate or non existent? Four questions, and the nucleus of the clause is assembled.`),
  vocab: [
    V('sujeito', 'sujeito', 'subject'),
    V('predicado', 'predicado', 'predicate'),
    V('sujeito simples', 'sujeito simples', 'a single nucleus'),
    V('sujeito composto', 'sujeito composto', 'two or more nuclei'),
    V('sujeito oculto', 'sujeito oculto', 'presumed from the verb form'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'not identified in the sentence'),
    V('verbo de ligação', 'verbo de ligação', 'links subject and predicative'),
    V('predicativo', 'predicativo', 'attribute of the subject through a copula'),
    V('Deus', 'Deus', 'postposed subject in {criou Deus}'),
    V('o SENHOR', 'o SENHOR', 'postposed subject in {disse o SENHOR}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {subject} is what something is declared of: in {No princípio criou Deus os céus e a terra}, {Deus} is the subject, and the answer to {who?} confirms it.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The subject takes four forms: {simple} ({Deus}), {compound} ({Deus e a sua palavra}), {hidden} ({os discípulos}) and {indeterminate} ({se diz que}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {predicate} is what is declared of the subject, and the verb is its nucleus: in {Deus criou os céus}, the predicate is {criou os céus}, and the form {criou} says what happened.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {copula} joins the {predicative} to the subject: in {Deus é bom}, {é} links, and {bom} says what is declared of {Deus}, with no verb of its own.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Position does not define the function: in {E, logo, disse o SENHOR a Moisés}, the subject {o SENHOR} comes after the verb {disse}, and it is still the subject.',
      ),
    },
  ],
  notes: [
    {
      label: T('The subject Greek writes after the verb'),
      text: T(
        'Ancient Greek almost always puts the subject after the verb, as in {ὁ θεὸς ἐποίησεν}, and old Portuguese did the same. Modern Portuguese frontposes the subject out of habit, which is why readers mark {Deus} as wrong in {criou Deus os céus}: the position changed across centuries, not across rules.',
      ),
    },
    {
      label: T('The question that separates subject from object'),
      text: T(
        'In {Jesus amou os seus amigos}, {Jesus} answers {whom did he love?} and {os seus amigos} answers {what did he love?}. When there is no what, the subject goes to the question of the agent. Both cases use the same person of the verb; what changes is which question makes sense.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Subject {Deus} postposed; predicate {criou os céus e a terra}; {no princípio} is an adjunct of time.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('The same sentence with the subject fronted: the inner structure is identical.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T(
        'Compound subject {Deus e a sua palavra}, linked by {e}, with the verb in the plural.',
      ),
    },
    {
      text: 'Os discípulos ouviram a palavra.',
      gloss: T('Simple subject {os discípulos}, postposed to the verb {ouviram}.'),
    },
    {
      text: 'Vinde a mim, todos os que credem.',
      gloss: T(
        'The subject {todos os que suffer} is expressed, and the verb {Vinde} is that of the main clause.',
      ),
    },
    {
      text: 'Diz-se que a palavra foi escrita.',
      gloss: T(
        'Indeterminate subject: the form {se} with the verb {diz-se} does not say who says it.',
      ),
    },
    {
      text: 'Deus é bom.',
      gloss: T('Copula {é} and predicative {bom}: what is declared is a quality, not an action.'),
    },
    {
      text: 'O Verbo ficou carne.',
      gloss: T('Copula {ficou} with predicative {carne} naming what the Word became.'),
    },
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Subject {o SENHOR} postposed, verb {disse} in the third person singular, {a Moisés} indirect object.',
      ),
    },
  ],
  tables: [
    {
      caption: T('The four kinds of subject'),
      head: [T('Espécie'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('um só núcleo'), T('{Deus}')],
        [T('{composto}'), T('dois núcleos unidos por {e} ou {nem}'), T('{Deus e a sua palavra}')],
        [T('{oculto}'), T('não está escrito; a forma do verbo o dá'), T('{os discípulos ouviram}')],
        [
          T('{indeterminado}'),
          T('presente na frase, mas não identificado'),
          T('{se diz que veio}'),
        ],
        [T('{inexistente}'), T('não existe; o verbo é impessoal'), T('{choveu}')],
        [
          T('{oracional}'),
          T('uma oração inteira ocupa o lugar do sujeito'),
          T('{É necessário que venhas}.'),
        ],
      ],
    },
    {
      caption: T('The three kinds of predicate'),
      head: [T('Espécie'), T('Núcleo'), T('Tem predicativo?'), T('Exemplo')],
      rows: [
        [T('{verbal}'), T('o verbo'), T('não'), T('{os discípulos viram}')],
        [T('{nominal}'), T('o nome'), T('sim'), T('{A festa foi alegre}')],
        [T('{verbo-nominal}'), T('verbo e nome'), T('sim'), T('{Ohipping foi alegre}')],
      ],
    },
    {
      caption: T('Copulas'),
      head: [T('Verbo'), T('O que liga'), T('Frase')],
      rows: [
        [T('{ser}'), T('identidade, qualidade, estado'), T('{Deus é amor}')],
        [T('{estar}'), T('estado passageiro'), T('{a portas estão fechadas}')],
        [T('{ficar}'), T('resultado atingido'), T('{o barco ficou parado}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu em silêncio}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {E, logo, disse o SENHOR a Moisés}, who is the subject?'),
    options: [
      T('{o SENHOR}, because it answers who spoke'),
      T('{a Moisés}, because it comes after the verb'),
      T('{logo}, because it is an adverb'),
      T('{disse}, because it is the main verb'),
    ],
    answer: 0,
    hint: T('Coming after the verb does not stop it from being the subject.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {Deus é bom}, the predicative {bom} is:'),
      options: [
        T('predicative of the subject, linked by the verb {é}'),
        T('direct object of {é}'),
        T('nominal adjunct of {Deus}'),
        T('agent of the passive'),
      ],
      answer: 0,
      hint: T('Without a copula, {bom} would be an attributive adjective.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the kind of subject it has.'),
      pairs: [
        { a: T('{Deus e a sua palavra}'), b: T('compound subject') },
        { a: T('{os discípulos ouviram}'), b: T('hidden subject') },
        { a: T('{se diz que veio}'), b: T('indeterminate subject') },
        { a: T('{É necessário que venhas}'), b: T('clausal subject') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The ______ is the nucleus of the predicate.'),
      answer: 'verbo',
      hint: T('In {criou os céus}, the nucleus is {criou}.'),
    },
  ],
};
