import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Word inflection and agreement'),
  title: T('Government'),
  subtitle: T('Verbal and nominal dependence'),
  body: C(`**Overview.** Verbal government is the relation between the verb and the term it completes: in {crer em Deus}, the preposition {em} is required by {crer}, and without it the sentence is not finished.

**Rule 1.** Nominal government comes from the verb of origin: in {necessidade de amar}, the noun {necessidade} comes from {necessitar}, which requires {de}, and the preposition is its own.

**Rule 2.** The required preposition belongs inside the term: in {falei a Moisés}, {a} stays attached to {falar}, and the whole {a Moisés} is what the indirect object is.

**Rule 3.** Government without a preposition exists: in {assistiu à missa} and {assistiu o jogo}, the verb {assistir} changes government according to the sense.

**Rule 4.** Government is the hardest key in translation, because Greek marks by case and Portuguese by preposition: {ὁ λόγος τοῦ θεοῦ} is {a palavra de Deus}.

**Application.** In {a palavra de Deus}, the noun {palavra} is governed by the preposition {de}, and the Greek line (ὁ λόγος τοῦ θεοῦ) carries {τοῦ} in the **genitive**: Greek says which relation it is by case, and Portuguese says it by preposition. In {falei a Moisés}, on the other hand, the preposition {a} belongs to the verb {falar} and not to the noun. The same preposition sits in two different places, and that is why government is the hardest key in translation.

**Check.** Ask three questions. Is the **governor** a verb, a noun or an adjective? Does it have **more than one** possible government? And would the preposition **change the meaning**? If the preposition is not obvious, look for the **verb of origin** of the noun: in {necessidade}, the verb is {necessitar}, and the preposition is that verb own. And note the **dative without a mark**, where Greek uses a case and Portuguese sometimes uses no preposition at all.`),
  vocab: [
    V('regência verbal', 'regência verbal', 'relation between verb and term'),
    V('regência nominal', 'regência nominal', 'relation between noun and term'),
    V('transitivo direto', 'transitivo direto', 'verb with a direct object'),
    V('transitivo indireto', 'transitivo indireto', 'verb with an indirect object'),
    V('intransitivo', 'intransitivo', 'verb with no object'),
    V('necessidade', 'necessidade', 'noun coming from {necessitar}'),
    V('obedecer', 'obedecer', 'requires {a}'),
    V('crer', 'crer', 'requires {em}'),
    V('gostar', 'gostar', 'requires {de}'),
    V('assistir', 'assistir', 'requires {a} in one sense and nothing in the other'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Verbal government is the relation between the verb and the term it completes: in {crer em Deus}, the preposition {em} is required by {crer}, and without it the sentence is not finished.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Nominal government comes from the verb of origin: in {necessidade de amar}, the noun {necessidade} comes from {necessitar}, which requires {de}, and the preposition is its own.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The required preposition belongs inside the term: in {falei a Moisés}, {a} stays attached to {falar}, and the whole {a Moisés} is what the indirect object is.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Government without a preposition exists: in {assistiu à missa} and {assistiu o jogo}, the verb {assistir} changes government according to the sense.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Government is the hardest key in translation, because Greek marks by case and Portuguese by preposition: {ὁ λόγος τοῦ θεοῦ} is {a palavra de Deus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek case that becomes a preposition'),
      text: T(
        'The Greek genitive has a range of values that Portuguese distributes among {de}, {do}, {para} and the absence of a preposition. Where Greek writes {τοῦ θεοῦ}, Portuguese may write {de Deus} or {do Senhor}. The information is the same; what changes is the means, and that is why word for word translation fails exactly here.',
      ),
    },
    {
      label: T('A verb that changes government within one meaning'),
      text: T(
        '{Assistir} means to watch and means to be present, and the two government patterns differ: {assistiu o jogo} and {assistiu à missa}. What settles it is the sense, not the form. That is why a dictionary that gives only the preposition without the sense teaches the wrong thing.',
      ),
    },
  ],
  examples: [
    {
      text: 'crer em Deus',
      gloss: T('{crer} requires the preposition {em}: {crer Deus} is wrong.'),
    },
    {
      text: 'obedecer ao pai',
      gloss: T(
        '{obedecer} requires {a}; with a pronoun it becomes {obedecer-lhe} with no preposition.',
      ),
    },
    {
      text: 'gostar da música',
      gloss: T('{gostar} requires {de}, and the article {a} closes the crasis.'),
    },
    {
      text: 'a necessidade de amar',
      gloss: T(
        '{necessidade} comes from {necessitar} and requires {de}: it is nominal government.',
      ),
    },
    {
      text: 'a palavra de Deus',
      gloss: T(
        '{palavra} requires {de}; in Greek {τοῦ θεοῦ} marks the same relation with a genitive.',
      ),
    },
    {
      text: 'falei a Moisés',
      gloss: T('{a} is required by the verb {falar}, and {Moisés} is the indirect object.'),
    },
    { text: 'assistiu à missa', gloss: T('Sense of being present: {assistir} requires {a}.') },
    { text: 'assistiu o jogo', gloss: T('Sense of watching: the same verb takes no preposition.') },
    {
      text: 'confiou nele',
      gloss: T('{confiar} requires {em}, and the pronoun {lhe} drops the preposition.'),
    },
  ],
  tables: [
    {
      caption: T('Prepositions required by verbs'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{crer em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedecer ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depender de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confiar em ele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembrar-se daquilo}')],
        [
          T('{assistir}'),
          T('{a} ou nada'),
          T('o sentido decide'),
          T('{assistir à missa}, {assistir o jogo}'),
        ],
      ],
    },
    {
      caption: T('Nominal government: from the noun to the verb'),
      head: [T('Nome'), T('Verbo de origem'), T('Exige'), T('Exemplo')],
      rows: [
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de amar}')],
        [T('{amor}'), T('{amar}'), T('{a}'), T('{o amor a Deus}')],
        [T('{amigo}'), T('{amar}'), T('{de}'), T('{amigo de Deus}')],
        [T('{fiel}'), T('{crer}'), T('{a}'), T('{fiel a Deus}')],
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de vir}')],
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{necessidade de descanso}')],
      ],
    },
    {
      caption: T('Verbal and nominal government side by side'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição em comum')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} muda para {por}')],
        [T('{amar a}'), T('{amor a}'), T('{a}')],
        [T('{depender de}'), T('{dependência de}'), T('{de}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence has the correct government?'),
    options: [T('crer em Deus'), T('crer Deus'), T('obedecer o pai'), T('gostar a música')],
    answer: 0,
    hint: T('{crer} requires {em}; the other three swapped the preposition.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {a necessidade de amar}, the preposition {de} was required by:'),
      options: [
        T('the noun {necessidade}'),
        T('the verb {amar}'),
        T('the noun {amor}'),
        T('the article {a}'),
      ],
      answer: 0,
      hint: T('{necessidade} comes from {necessitar}, and the preposition comes with it.'),
    },
    {
      kind: 'match',
      prompt: T('Match each verb to the preposition it requires.'),
      pairs: [
        { a: T('{crer}'), b: T('{em}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gostar}'), b: T('{de}') },
        { a: T('{aspirar}'), b: T('{a}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'nome',
      hint: T('In {o amor de Deus}, the noun {amor} is the governor.'),
    },
  ],
};
