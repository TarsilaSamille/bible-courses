import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Word inflection and agreement'),
  title: T('Agreement in detail'),
  subtitle: T('Special cases involving verbs and nouns'),
  body: C(`**Overview.** In the {impersonal} construction, {haver} stays in the third person singular: in {havia muitas pessoas}, the {havia} does not agree with {pessoas}.

**Rule 1.** {Haver} in the sense of {to exist} agrees with the subject: in {havia dois deuses}, the verb goes plural because there are two, and it is that sense that changes the rule.

**Rule 2.** A {clausal subject} does not make the verb inflect: in {É necessário que venhas}, the {é} stays third person singular even with a whole clause as subject.

**Rule 3.** With a {collective subject}, the verb may be singular or plural according to the sense: in {o povo saiu} the whole acts, in {o povo saíram} the parts act.

**Rule 4.** Nominal agreement goes with the {noun}: in {os mesmos platforms}, {mesmos} is masculine plural because of {platforms}, and not because of {os}.

**Application.** In {Muitos dos que estavam ouvindo diziam uns aos outros}, the subject {Muitos} is **indeterminate** and the verb {diziam} is plural, which is allowed because the real subject is {os que estavam ouvindo}. In Greek, {πάντες} (all) with a plural noun requires the plural verb ({εἶδαν}), and it is the stricter Greek agreement that removes the ambiguity Portuguese leaves.

**Check.** For any verb, ask: what is the **subject** and is it **simple**, **compound** or **collective**? If compound, is it {e} or {nem}? If collective, is it the **whole** or the **part** that acts? And is the verb plural because of an {indeterminate} or {clausal subject}? For the adjective one question is enough: what does it agree with, the **noun** or the **article**? Always the noun.`),
  vocab: [
    V('impessoal', 'impessoal', 'verb with no identifiable subject'),
    V('haver', 'haver', 'verb whose agreement changes with the sense'),
    V('fazer', 'fazer', 'verb indicating time or construction'),
    V('dar', 'dar', 'verb indicating an event'),
    V('concordância verbal', 'concordância verbal', 'between verb and subject'),
    V('concordância nominal', 'concordância nominal', 'between noun and its modifiers'),
    V('sujeito oracional', 'sujeito oracional', 'a whole clause as subject'),
    V('pois', 'pois', 'conclusive or causal connector'),
    V('havia muitas pessoas', 'havia muitas pessoas', 'impersonal: the verb does not inflect'),
    V('havia dois deuses', 'havia dois deuses', 'sense of existing: the verb inflects'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'In the {impersonal} construction, {haver} stays in the third person singular: in {havia muitas pessoas}, the {havia} does not agree with {pessoas}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Haver} in the sense of {to exist} agrees with the subject: in {havia dois deuses}, the verb goes plural because there are two, and it is that sense that changes the rule.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {clausal subject} does not make the verb inflect: in {É necessário que venhas}, the {é} stays third person singular even with a whole clause as subject.',
      ),
    },
    {
      n: '§4',
      text: T(
        'With a {collective subject}, the verb may be singular or plural according to the sense: in {o povo saiu} the whole acts, in {o povo saíram} the parts act.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Nominal agreement goes with the {noun}: in {os mesmos platforms}, {mesmos} is masculine plural because of {platforms}, and not because of {os}.',
      ),
    },
  ],
  notes: [
    {
      label: T('What the Greek form forces and Portuguese allows'),
      text: T(
        'In {πάντες εἶδαν}, Greek agreement says the subject was plural and admits no doubt. Portuguese accepts {todos viram} for one and for many, and that is why {Muitos dos que ouviam diziam} can be read two ways. Greek grammar is not richer: it is more binding, and that binding is what forces the translator to decide.',
      ),
    },
    {
      label: T('The collective subject and its two voices'),
      text: T(
        'In {o povo saiu}, the {povo} is singular and the verb is singular: the whole acts. In {o povo saíram}, the verb form changes and the sense changes with it: the parts acted. Portuguese accepts both, and ancient Greek uses {λαός} in the plural for the parts. Translating requires deciding whether the original meant the whole or the parts, and that decision does not show in the form.',
      ),
    },
  ],
  examples: [
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T('{havia} is impersonal and stays third person singular, even with {pessoas}.'),
    },
    {
      text: 'havia dois deuses',
      gloss: T('Sense of existing: {havia} inflects to the plural because there are two.'),
    },
    {
      text: 'faz dois anos que não o vejo',
      gloss: T('{fazer} here marks elapsed time, and so it does not inflect.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('Clausal subject: the {é} does not inflect despite the two clauses.'),
    },
    {
      text: 'o povo saiu',
      gloss: T('Collective subject in the singular: the whole acts, and the verb is singular.'),
    },
    {
      text: 'o povo saíram',
      gloss: T('The same subject with a plural verb: the parts of the people acted.'),
    },
    {
      text: 'Muitos dos que estavam ouvindo diziam',
      gloss: T(
        'The real subject is the clause {os que estavam ouvindo}, and it is what asks for the plural.',
      ),
    },
    {
      text: 'os mesmos platforms',
      gloss: T(
        '{mesmos} is masculine plural because it agrees with {platforms}, and not with {os}.',
      ),
    },
    {
      text: 'πάντες εἶδαν',
      gloss: T('Greek forces the plural: {πάντες} and {εἶδαν} both say the subject was plural.'),
    },
  ],
  tables: [
    {
      caption: T('Cases of verbal agreement'),
      head: [T('Caso'), T('Verbo'), T('Exemplo'), T('Porquê')],
      rows: [
        [
          T('{impessoal}'),
          T('3.ª do singular'),
          T('{havia muitas pessoas}'),
          T('o {haver} não tem sujeito'),
        ],
        [
          T('{haver, sentido de existir}'),
          T('concorda com o sujeito'),
          T('{havia dois deuses}'),
          T('o sentido é de plural'),
        ],
        [
          T('{sujeito oracional}'),
          T('3.ª do singular'),
          T('{É necessário vir}'),
          T('o sujeito é uma unidade'),
        ],
        [
          T('{sujeito indeterminado}'),
          T('3.ª do singular'),
          T('{se diz que veio}'),
          T('não se sabe quem'),
        ],
        [T('{sujeito coletivo, todo}'), T('singular'), T('{o povo saiu}'), T('age o conjunto')],
        [T('{sujeito coletivo, partes}'), T('plural'), T('{o povo saíram}'), T('age a parte')],
      ],
    },
    {
      caption: T('Nominal agreement: what governs'),
      head: [T('Palavra'), T('Manda'), T('Exemplo'), T('Se discordar, quem errou')],
      rows: [
        [T('artigo'), T('o substantivo'), T('{os} em {os livros}'), T('o artigo')],
        [T('adjetivo'), T('o substantivo'), T('{antigos} em {livros antigos}'), T('o adjetivo')],
        [T('numeral'), T('o substantivo'), T('{dois} em {dois livros}'), T('o numeral')],
        [T('pronome possessivo'), T('o substantivo'), T('{meus} em {meus livros}'), T('o pronome')],
        [T('aposto'), T('o termo explicado'), T('{o velho Davi}'), T('o aposto')],
        [T('verbo de ligação'), T('o sujeito'), T('{A palavra é bom}'), T('o predicativo')],
      ],
    },
    {
      caption: T('Verbs that sometimes do not inflect'),
      head: [T('Verbo'), T('Quando não flexiona'), T('Frase'), T('O que indica')],
      rows: [
        [
          T('{haver}'),
          T('no sentido de existir ou de clima'),
          T('{havia muitas}'),
          T('presença de algo'),
        ],
        [
          T('{fazer}'),
          T('quando indica tempo decorrido'),
          T('{faz dois anos}'),
          T('tempo que passou'),
        ],
        [T('{dar}'), T('em {dar três horas}'), T('{dar três horas}'), T('aproximação de tempo')],
        [T('{ser}'), T('na locução {há de haver}'), T('{há de haver}'), T('obrigação')],
        [T('{poder}'), T('com valor de aproximação'), T('{pode ser cem}'), T('certeza aproximada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {havia muitas pessoas}, the verb {havia} stays singular because:'),
    options: [
      T('it is impersonal, and the existential {haver} does not inflect'),
      T('the subject {pessoas} is indirect and therefore does not count'),
      T('{muitas} is an adjective and adjectives do not inflect the verb'),
      T('the verb {havia} is defective and has a single form'),
    ],
    answer: 0,
    hint: T('With existential {haver}, the verb inflects: test {havia dois}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {É necessário que venhas}, the verb {é} is singular because:'),
      options: [
        T('the subject is a clause, and a clause counts as one unit'),
        T('the subject {necessário} is masculine singular'),
        T('the verb {venhas} is in the subjunctive'),
        T('the clause {que venhas} is coordinated'),
      ],
      answer: 0,
      hint: T('A clausal subject counts as one term, and one term asks for the singular.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the agreement case it shows.'),
      pairs: [
        { a: T('{havia muitas pessoas}'), b: T('impersonal, verb singular') },
        { a: T('{havia dois deuses}'), b: T('sense of existing, verb plural') },
        { a: T('{o povo saiu}'), b: T('collective in the sense of the whole') },
        { a: T('{É necessário que venhas}'), b: T('clausal subject') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The adjective agrees with the ______, and never with the article.'),
      answer: 'substantivo',
      hint: T('In {as{profeitas} maiores}, what governs is {profetas}.'),
    },
  ],
};
