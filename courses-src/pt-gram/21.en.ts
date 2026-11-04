import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('The structure of the period'),
  title: T('Periods with coordination'),
  subtitle: T('Relations between independent clauses'),
  body: C(`**Overview.** {Syndetic} coordination uses a connector: in {Vinde e segui-me}, the {e} is the connector, and both clauses are marked by its presence.

**Rule 1.** {Asyndetic} coordination does without a connector: in {Saiu, tomou o manto, saiu}, the commas separate the clauses, and no word joins them.

**Rule 2.** The semantic relation in coordination is one of five: {addition}, {opposition}, {alternative}, {conclusion} or {explanation}, and it is that relation which picks the connector.

**Rule 3.** The {alternative} requires {ou} and denies what {não ... ou} denies; the {explanatory} uses {que} and {pois}, where {pois} means {therefore} and not {because}.

**Rule 4.** {Polysyndeton} is the repetition of the connector: in {O amor é paciente, o amor é bondoso}, the {é} repeats and the comma appears each time.

**Application.** In {Não mates, e não cometas adultério}, the two clauses are coordinated by {e} with a **negative additive** value. In {O amor é paciente, o amor é bondoso} (1 Cor 13:4), there are four coordinated clauses, and the verb {é} repeats by **polysyndeton**. And the Greek sentence ({Ἡ ἀγάπη μακροθυμεῖ}) carries a verb only in the first, and the rest omit it, which is what Portuguese makes up for by repeating.

**Check.** For two coordinated clauses, ask: does the second **add**, **choose**, **oppose**, **conclude** or **explain** the first? The answer gives the relation and the conjunction. Then: is there a **comma** before the conjunction? And is there a **subject** in both clauses, or is the second elided? Three questions close the analysis.`),
  vocab: [
    V('coordenação', 'coordenação', 'joining of independent clauses'),
    V('sindética', 'sindética', 'with a connector'),
    V('assindética', 'assindética', 'without a connector'),
    V('aditiva', 'aditiva', 'the second adds'),
    V('adversativa', 'adversativa', 'the second opposes'),
    V('alternativa', 'alternativa', 'the second chooses'),
    V('conclusiva', 'conclusiva', 'the second concludes'),
    V('explicativa', 'explicativa', 'the second explains'),
    V('polissíndeto', 'polissíndeto', 'repeated connector'),
    V('pois', 'pois', 'conclusive connector, not causal'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Syndetic} coordination uses a connector: in {Vinde e segui-me}, the {e} is the connector, and both clauses are marked by its presence.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Asyndetic} coordination does without a connector: in {Saiu, tomou o manto, saiu}, the commas separate the clauses, and no word joins them.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The semantic relation in coordination is one of five: {addition}, {opposition}, {alternative}, {conclusion} or {explanation}, and it is that relation which picks the connector.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {alternative} requires {ou} and denies what {não ... ou} denies; the {explanatory} uses {que} and {pois}, where {pois} means {therefore} and not {because}.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{Polysyndeton} is the repetition of the connector: in {O amor é paciente, o amor é bondoso}, the {é} repeats and the comma appears each time.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {pois} that is not {porque}'),
      text: T(
        'In {Cheguei, pois era tarde}, the {pois} means {therefore}, and the second clause explains the first. In {Não fui, pois era tarde}, the same {pois} means {because}, and the second clause explains the first. The form is identical and the sense changes, which is why the standard grammar treats {pois} as conclusive and reserves {porque} for the causal.',
      ),
    },
    {
      label: T('The verb Greek omits'),
      text: T(
        'Greek coordination almost never repeats the verb: {ἐλθὼν δὲ προσευξάμενος} carries one verb for two clauses. Portuguese has to repeat because it lacks that syntactic economy, and the repetition is what produces the polysyndetic biblical reading: {Vinde, e adorai, e crede}, where each new verb is a new clause.',
      ),
    },
  ],
  examples: [
    {
      text: 'Vinde e segui-me.',
      gloss: T('Syndetic additive coordination: {e} links two independent clauses.'),
    },
    {
      text: 'Não mates, e não cometas adultério.',
      gloss: T('Negative additive syndetic coordination: the negation covers both clauses.'),
    },
    {
      text: 'Veio, mas não viu.',
      gloss: T('Adversative syndetic coordination: {mas} opposes the second clause to the first.'),
    },
    {
      text: 'Ficou ou saiu.',
      gloss: T(
        'Alternative syndetic coordination: {ou} offers two possibilities, and only one happens.',
      ),
    },
    {
      text: 'Choveu, logo ficou.',
      gloss: T(
        'Conclusive syndetic coordination: {logo} draws the conclusion from the first clause.',
      ),
    },
    {
      text: 'Saiu, tomou o manto, saiu.',
      gloss: T('Asyndetic: three clauses without a connector, separated by commas.'),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polysyndeton: the verb {é} repeats in each coordinated clause.'),
    },
    {
      text: 'Não fui, pois era tarde.',
      gloss: T('The {pois} here is causal: the second clause explains the first.'),
    },
    {
      text: 'Cheguei, pois era tarde.',
      gloss: T('The same {pois} is conclusive: it draws {therefore} and explains.'),
    },
  ],
  tables: [
    {
      caption: T('The five relations of coordination'),
      head: [T('Relação'), T('Conectivos'), T('O que a segunda oração faz'), T('Exemplo')],
      rows: [
        [T('{adição}'), T('{e}, {nem}, {mas também}'), T('soma'), T('{veio e viu}')],
        [T('{oposição}'), T('{mas}, {porém}, {contudo}'), T('opõe'), T('{veio, mas não viu}')],
        [T('{alternativa}'), T('{ou}'), T('escolhe ou nega'), T('{ficou ou saiu}')],
        [
          T('{conclusão}'),
          T('{logo}, {portanto}, {pois}'),
          T('conclui'),
          T('{choveu, logo ficou}'),
        ],
        [T('{explicação}'), T('{que}, {porque}'), T('explica'), T('{ficou, porque era tarde}')],
      ],
    },
    {
      caption: T('Syndetic and asyndetic'),
      head: [T('Tipo'), T('Conectivo'), T('O que separa'), T('Exemplo')],
      rows: [
        [T('{sindética}'), T('presente'), T('vírgula antes do conectivo'), T('{Vinde e segui-me}')],
        [
          T('{sindética adversativa}'),
          T('presente'),
          T('vírgula obrigatória'),
          T('{veio, mas não viu}'),
        ],
        [T('{sindética sem vírgula}'), T('presente'), T('nenhuma vírgula'), T('{veio e viu}')],
        [
          T('{assindética}'),
          T('ausente'),
          T('vírgula ou ponto e vírgula'),
          T('{saiu, tomou, saiu}'),
        ],
        [
          T('{polissíndeto}'),
          T('repetido'),
          T('vírgula a cada oração'),
          T('{é paciente, é bondoso}'),
        ],
      ],
    },
    {
      caption: T('The connectors and what they say'),
      head: [T('Conectivo'), T('Relação'), T('Equivale a'), T('Exemplo')],
      rows: [
        [T('{e}'), T('adição'), T('{além disso}'), T('{veio e viu}')],
        [T('{mas}'), T('oposição'), T('{porém}'), T('{veio, mas não viu}')],
        [T('{contudo}'), T('oposição'), T('{mas}'), T('{contudo, não veio}')],
        [T('{pois}'), T('conclusão ou causa'), T('{portanto} ou {porque}'), T('{pois era tarde}')],
        [T('{logo}'), T('conclusão'), T('{portanto}'), T('{choveu, logo ficou}')],
        [T('{porque}'), T('causa'), T('{visto que}'), T('{não fui, porque era tarde}')],
        [T('{portanto}'), T('conclusão'), T('{logo}'), T('{era tarde, portanto ficou}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Cheguei, pois era tarde}, the {pois} is:'),
    options: [
      T('conclusive, and it means {portanto}'),
      T('causal, and it means {porque}'),
      T('adversative, and it means {mas}'),
      T('alternative, and it means {ou}'),
    ],
    answer: 0,
    hint: T('The answer is {portanto}, not {porque}: the {pois} comes after the result.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {Saiu, tomou o manto, saiu}, the coordination is:'),
      options: [
        T('asyndetic, because there is no connector'),
        T('syndetic, because the commas are connectors'),
        T('adversative, because the clauses oppose each other'),
        T('subordinate, because the second has no subject'),
      ],
      answer: 0,
      hint: T('Coordination without a connector is, by definition, asyndetic.'),
    },
    {
      kind: 'match',
      prompt: T('Match each relation to the connector that opens it.'),
      pairs: [
        { a: T('{e}'), b: T('addition') },
        { a: T('{mas}'), b: T('opposition') },
        { a: T('{ou}'), b: T('alternative') },
        { a: T('{logo}'), b: T('conclusion') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('______ coordination uses no connector and separates the clauses with a comma.'),
      answer: 'assindética',
      hint: T('{Syndetic} coordination always brings a connector.'),
    },
  ],
};
