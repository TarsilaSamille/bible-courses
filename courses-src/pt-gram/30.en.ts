import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Meaning and subordination'),
  title: T('The eight subordinate clauses'),
  subtitle: T('The value the connector opens'),
  body: C(`**Overview.** Every subordinate clause opens with a connector, and it is the connector that gives the value: the {que} of {Creio que isto é verdade} is a {noun clause}, and the {que} of {O barco que vias} is an {adjective clause}.

**Rule 1.** Noun, adjective and adverbial say the name of the function they perform; the adverbial ones divide into eight: causal, consecutive, conditional, final, concessive, comparative, conformative and proportional.

**Rule 2.** The {se} is conditional with a conjugated verb and a passive particle with an intransitive verb: in {Se eu visse} there is a verb; in {sei que ele sabe} the {se} is the verb {sei}.

**Rule 3.** The test of the {noun clause} is substitution by {isto}: in {Creio que isto é verdade}, {Creio isto} is still correct; in {Sabe que isto}, too, and that is why it is a noun clause.

**Rule 4.** The test of the {adverbial clause} is substitution by {ontem de manhã}, and not by {isto}: in {Saiu ontem de manhã}, the clause can be swapped for an adverb, and that is why it is not a noun clause.

**Application.** In {Se eu visse o barco, navegaria}, {Se eu visse o barco} is a first degree conditional adverbial clause, and {navegaria} is the verb of the main clause. In {Sei que ele sabe}, the same {se} goes with an intransitive verb, leaves nothing as subject or object, and the subordinate {que ele sabe} fills the subject place: it is a {subjective noun clause}. Romans 8:31 brings the first kind as a rhetorical question: «Se Deus é conosco, quem será contra nós?»

**Check.** Three questions, always in this order. First: which connector is it? Second: can the subordinate clause be swapped for a phrase, and for which one? By {isto} or {aquilo}, it is a {noun clause}; by {o barco que vias}, an {adjective clause}; by {ontem de manhã}, an {adverbial clause}. Third, and only when it is adverbial: which of the eight? The second one is what most often misleads, because an adverbial can also be swapped for a phrase in the {isso}.`),
  vocab: [
    V('substantiva', 'substantiva', 'performs a noun function'),
    V('adjetiva', 'adjetiva', 'performs an adjective function'),
    V('adverbial', 'adverbial', 'marks circumstance'),
    V('conectivo', 'conectivo', 'word that opens the subordinate clause'),
    V('relativa', 'relativa', 'synonym of the restrictive adjective clause'),
    V('restritiva', 'restritiva', 'the one that comes without a comma and limits the noun'),
    V('explicativa', 'explicativa', 'the one that comes between commas and adds'),
    V('causal', 'causal', 'the one that marks cause'),
    V('consecutiva', 'consecutiva', 'the one that marks consequence'),
    V('condicional', 'condicional', 'the one that marks condition'),
    V('final', 'final', 'the one that marks purpose'),
    V('concessiva', 'concessiva', 'the one that admits a fact in spite of which another happens'),
    V('comparativa', 'comparativa', 'the one that establishes a comparison'),
    V('conformativa', 'conformativa', 'the one that marks conformity'),
    V('proporcional', 'proporcional', 'the one that marks proportion'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Every subordinate clause opens with a connector, and it is the connector that gives the value: the {que} of {Creio que isto é verdade} is a {noun clause}, and the {que} of {O barco que vias} is an {adjective clause}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Noun, adjective and adverbial say the name of the function they perform; the adverbial ones divide into eight: causal, consecutive, conditional, final, concessive, comparative, conformative and proportional.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {se} is conditional with a conjugated verb and a passive particle with an intransitive verb: in {Se eu visse} there is a verb; in {sei que ele sabe} the {se} is the verb {sei}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The test of the {noun clause} is substitution by {isto}: in {Creio que isto é verdade}, {Creio isto} is still correct; in {Sabe que isto}, too, and that is why it is a noun clause.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test of the {adverbial clause} is substitution by {ontem de manhã}, and not by {isto}: in {Saiu ontem de manhã}, the clause can be swapped for an adverb, and that is why it is not a noun clause.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {se} Greek settles another way'),
      text: T(
        'Ancient Greek has no passive particle: what Portuguese marks with {se}, Greek marks by case or by the middle voice. In {εἶπεν}, the active aorist is rendered as {disse} with no {se} at all; in {ἐγένετο}, the middle becomes {se fez}. The translator decides whether to carry the Portuguese {se} or the Greek form, and the decision changes the mood of the clause.',
      ),
    },
    {
      label: T('The {como} with three values'),
      text: T(
        'The same {como} opens three subordinate clauses of different values: in {Correu como o cavalo}, it is {comparative}; in {Faz como lhe mandaram}, {conformative}; in {Caminhou como an angel}, {causal}, because the consequence comes after. The connector does not decide alone: anyone who classifies without looking at the main clause classifies it wrong.',
      ),
    },
  ],
  examples: [
    {
      text: 'Creio que isto é verdade.',
      gloss: T('{Direct noun clause}: swap in {isto} and the sentence stays correct.'),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('{Subjective noun clause}: the subordinate fills the subject place of {é}.'),
    },
    {
      text: 'O barco que vias era o dele.',
      gloss: T('{Restrictive adjective clause}: the {que} limits {barco} to one boat.'),
    },
    {
      text: 'O barco, que era velho, adormeceu.',
      gloss: T('{Explanatory adjective clause}: between commas, it adds without limiting.'),
    },
    {
      text: 'Não navegou porque não tinha fé.',
      gloss: T('{Causal adverbial clause}: the cause sits inside the subordinate.'),
    },
    {
      text: 'A tempestade foi tão forte que o barco se encheu.',
      gloss: T('{Consecutive adverbial clause}: it brings the result of what is asserted.'),
    },
    {
      text: 'Se o vento cessar, embarcaremos.',
      gloss: T('{Conditional adverbial clause}: the main verb is in the future.'),
    },
    {
      text: 'Vai a Nazaré para que se cumpram as Escrituras.',
      gloss: T('{Final adverbial clause}: the {para que} marks purpose, and purpose is not fact.'),
    },
    {
      text: 'Embora chovesse, saiu.',
      gloss: T('{Concessive adverbial clause}: the main fact happens in spite of the subordinate.'),
    },
  ],
  tables: [
    {
      caption: T('The connector and the value it opens'),
      head: [T('Tipo'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{substantiva}'), T('{que}, {se}, {qual}'), T('{Creio que isto é verdade}')],
        [T('{substantiva objetiva direta}'), T('{que}, {o qual}'), T('{Disse que viria}')],
        [T('{substantiva subjetiva}'), T('{que}, {se}'), T('{Sei que ele sabe}')],
        [T('{substantiva predicativa}'), T('{que}'), T('{É necessário que venhas}')],
        [T('{adjetiva restritiva}'), T('{que}, {o qual}, {quem}'), T('{o barco que vias}')],
        [T('{adjetiva explicativa}'), T('{que}, {o qual}, {quem}'), T('{o barco, que era velho}')],
        [T('{adverbial causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [
          T('{adverbial consecutiva}'),
          T('{logo que}, {de modo que}'),
          T('{tão forte foi que se encheu}'),
        ],
        [T('{adverbial condicional}'), T('{se}, {caso}, {contanto que}'), T('{Se o vento cessar}')],
        [T('{adverbial final}'), T('{para que}, {a fim de que}'), T('{para que se cumpram}')],
        [T('{adverbial concessiva}'), T('{embora}, {ainda que}'), T('{Embora chovesse, saiu}')],
        [T('{adverbial comparativa}'), T('{como}, {quanto a}'), T('{Correu como o cavalo}')],
        [
          T('{adverbial conformativa}'),
          T('{conforme}, {segundo}'),
          T('{Caminhou conforme a palavra}'),
        ],
        [
          T('{adverbial proporcional}'),
          T('{à medida que}, {quanto mais}'),
          T('{À medida que crescia}'),
        ],
      ],
    },
    {
      caption: T('The same connector with two values'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Porquê')],
      rows: [
        [
          T('{Disse que viria}'),
          T('{que}'),
          T('{substantiva direta}'),
          T('completa o verbo {disse}'),
        ],
        [
          T('{O homem que vi era judeu}'),
          T('{que}'),
          T('{adjetiva restritiva}'),
          T('caracteriza o nome {homem}'),
        ],
        [
          T('{Se ele vier, sairei}'),
          T('{se}'),
          T('{condicional}'),
          T('o verbo traz sujeito expresso'),
        ],
        [
          T('{Sei que ele sabe}'),
          T('{se}'),
          T('{substantiva subjetiva}'),
          T('o verbo {sei} é intransitivo'),
        ],
        [
          T('{Correu como o cavalo}'),
          T('{como}'),
          T('{comparativa}'),
          T('os dois termos postulam a mesma qualidade'),
        ],
        [
          T('{Faz como lhe mandaram}'),
          T('{como}'),
          T('{conformativa}'),
          T('indica conformidade com uma ordem'),
        ],
      ],
    },
    {
      caption: T('The test of substitution'),
      head: [
        T('O que se coloca no lugar'),
        T('O que a substituição revela'),
        T('Tipo'),
        T('Cuidado'),
      ],
      rows: [
        [
          T('{isto}, {aquilo}'),
          T('função de substantivo'),
          T('{substantiva}'),
          T('serve para todas'),
        ],
        [
          T('{que}, {o qual}'),
          T('função de adjetivo'),
          T('{adjetiva}'),
          T('só para as que têm relativo'),
        ],
        [
          T('{ontem de manhã}'),
          T('função de advérbio'),
          T('{adverbial}'),
          T('a causal também aceita {isso}'),
        ],
        [
          T('{nessa hora}'),
          T('função de tempo'),
          T('{adverbial temporal}'),
          T('algumas substantivas também'),
        ],
        [
          T('{muito}'),
          T('função de intensidade'),
          T('{comparativa}'),
          T('pouco usada em biblical'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Sei que ele sabe}, the subordinate {que ele sabe} is:'),
    options: [
      T('a subjective noun clause, because it fills the subject place of {sei}'),
      T('a conditional adverbial clause, because it starts with {se}'),
      T('an explanatory adjective clause, because it comes between commas'),
      T('a direct noun clause, because it comes after the verb'),
    ],
    answer: 0,
    hint: T('Replace the subordinate with {isto}: {Sei isso} is still correct.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {E disse-lhes: «Por que tendes por foro?»}, the clause inside the quotes is:'),
      options: [
        T('a first degree direct noun clause, object of {disse-lhes}'),
        T('an asyndetic coordinate clause, for having no connector'),
        T('the main clause, because it has a subject of its own'),
        T('a final adverbial clause, because it comes at the end of the period'),
      ],
      answer: 0,
      hint: T('A reproduced speech usually completes the verb that introduces it.'),
    },
    {
      kind: 'match',
      prompt: T('Match each subordinate clause to its value.'),
      pairs: [
        { a: T('{Embora chovesse, saiu}'), b: T('concessive') },
        { a: T('{Caminhou conforme a palavra}'), b: T('conformative') },
        { a: T('{para que se cumpram as Escrituras}'), b: T('final') },
        { a: T('{À medida que avançava, crescia}'), b: T('proportional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'oração',
      hint: T('In {Sei que ele sabe}, the {que} opens and the main clause decides.'),
    },
  ],
};
