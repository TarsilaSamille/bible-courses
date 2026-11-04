import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('The words and their classes'),
  title: T('Morphology: word structure'),
  subtitle: T('Root, affixes and endings'),
  body: C(`**Overview.** A word has three layers: the {root}, which carries the meaning, and the {affixes}, which come around it.

**Rule 1.** The root is what remains once prefix, suffix and ending are removed: {palavr-} in {palavra}, {salv-} in {salvação}, {cans-} in {cansado}.

**Rule 2.** The prefix goes before the root and the suffix after it: {des-} + {leal} gives {desleal}, and {leal} + {-dade} gives {lealdade}.

**Rule 3.** The ending is the part that inflects: {casa} and {casas} change their ending, {falou} and {falamos} do too, but {cansado} is always {cansado}.

**Rule 4.** The test is the sentence swap: if the form changes when you change the subject, it is an ending; if it stays the same, it is a suffix.

**Application.** In {the word of God remains}, the analysis starts at the end of the word: {palavra} loses the ending {-a} and leaves {palavr-}. {Deus} is a proper noun and takes no visible ending, like {θεός} in the Greek of John 1:1. {permanece} splits into {permanec-} + {-e}, and the same root appears in the infinitive {permanecer}: what changes is the ending, not the meaning.

**Check.** Ask three questions before classifying: what is the **root**, is there a **prefix** before it, and what **inflects** when the sentence changes? If it inflects, it is an ending; if not, it is a suffix. Getting that wrong leads you to treat {cans-ado} as an inflecting form, and that form does not exist: {cansado} is {cans-} + {-ado}, and the {-ado} is fixed.`),
  vocab: [
    V('radical', 'radical', 'root'),
    V('prefixo', 'prefixo', 'prefix'),
    V('sufixo', 'sufixo', 'suffix'),
    V('desinência', 'desinência', 'ending'),
    V('vogalia', 'vogalia', 'vocalic nucleus'),
    V('derivação', 'derivação', 'derivation'),
    V('deslealdade', 'deslealdade', 'disloyalty'),
    V('inumerável', 'inumerável', 'innumerable'),
    V('palavr-', 'palavr-', 'root of {palavra}'),
    V('cans-', 'cans-', 'root of {cansado}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A word has three layers: the {root}, which carries the meaning, and the {affixes}, which come around it.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The root is what remains once prefix, suffix and ending are removed: {palavr-} in {palavra}, {salv-} in {salvação}, {cans-} in {cansado}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The prefix goes before the root and the suffix after it: {des-} + {leal} gives {desleal}, and {leal} + {-dade} gives {lealdade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The ending is the part that inflects: {casa} and {casas} change their ending, {falou} and {falamos} do too, but {cansado} is always {cansado}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test is the sentence swap: if the form changes when you change the subject, it is an ending; if it stays the same, it is a suffix.',
      ),
    },
  ],
  notes: [
    {
      label: T('The hyphen is not an affix'),
      text: T(
        '{guarda-chuva} is a single word made of {guarda} and {chuva}: two whole roots, and neither is an affix of {guardar}. {antisocial} does carry {anti-}, which is a prefix, and the hyphen appears only because the prefix final vowel would collide with the root initial one.',
      ),
    },
    {
      label: T('The root is not always bare'),
      text: T(
        'In {permanece} the final {e} is a verbal ending and disappears in {permanecer}; in {cansado} the {o} belongs to the suffix {-ado} and never disappears. Same root, two fates: inflection tells you which is which.',
      ),
    },
  ],
  examples: [
    {
      text: 'salvação',
      gloss: T(
        'Root {salv-} with the suffix {-ção}: the sense of {salvar} turned into a noun of action.',
      ),
    },
    {
      text: 'deslealdade',
      gloss: T(
        '{des-} negates and {-dade} names the quality; the root {leal} stays visible in the middle.',
      ),
    },
    { text: 'permanecer', gloss: T('Root {permanec-} with the infinitive ending {-er}.') },
    { text: 'permanece', gloss: T('The same root {permanec-}, now with the verbal ending {-e}.') },
    {
      text: 'palavra',
      gloss: T(
        'No visible ending in the singular: the final {a} is an ending, and the plural {palavras} confirms it.',
      ),
    },
    {
      text: 'cansado',
      gloss: T(
        '{cans-} with the suffix {-ado}; the form does not inflect, which is why the {o} is not an ending.',
      ),
    },
    {
      text: 'inumerável',
      gloss: T(
        '{in-} negates and {-ável} makes the adjective; the plural {inumeráveis} adds {-s} to the ending.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefix {anti-} with a hyphen: without it, the prefix {i} and the root {s} would collide.',
      ),
    },
    {
      text: 'Deus',
      gloss: T(
        'A proper noun with no visible ending, like {θεός} in Greek: the sense needs no number mark here.',
      ),
    },
  ],
  tables: [
    {
      caption: T('The three layers of a word'),
      head: [T('Camada'), T('Pergunta que a identifica'), T('Exemplo')],
      rows: [
        [T('radical'), T('Qual é o sentido nuclear?'), T('{salv-} em {salvação}')],
        [T('prefixo'), T('O que vem antes do radical?'), T('{des-} em {deslealdade}')],
        [T('sufixo'), T('O que vem depois do radical?'), T('{-dade} em {lealdade}')],
        [T('desinência'), T('O que flexiona na frase?'), T('{-ão} em {salvação}')],
      ],
    },
    {
      caption: T('Nominal and verbal inflection'),
      head: [T('Forma'), T('O que marca'), T('Decomposição')],
      rows: [
        [T('{casa}'), T('substantivo singular'), T('radical {cas-} + {-a}')],
        [T('{casas}'), T('substantivo plural regular'), T('{casa} + {-s}')],
        [T('{salvação}'), T('substantivo singular'), T('radical {salv-} + {-ção}')],
        [T('{salvações}'), T('substantivo plural irregular'), T('{salvação} + {-ões}')],
        [T('{falou}'), T('verbo, 3.ª pessoa do singular'), T('radical {fal-} + {-ou}')],
        [T('{falamos}'), T('verbo, 1.ª pessoa do plural'), T('radical {fal-} + {-amos}')],
      ],
    },
    {
      caption: T('When the word does not inflect'),
      head: [T('Palavra'), T('Camada visível'), T('Teste')],
      rows: [
        [T('{Deus}'), T('radical {deus} sem terminação'), T('não recebe plural de uso corrente')],
        [T('{Jesus}'), T('radical {jesus} sem terminação'), T('nome próprio de pessoa')],
        [T('{hoje}'), T('radical {hoj-} de advérbio'), T('não varia com o resto da frase')],
        [T('{ontem}'), T('radical {ontem} invariável'), T('não se flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {cansado}, what is the final {o}?'),
    options: [
      T('a suffix, together with {-ado}'),
      T('an ending, because the word inflects'),
      T('a prefix, because it comes before the root'),
      T('the vocalic nucleus of the word'),
    ],
    answer: 0,
    hint: T('Replace {cansado} with {cansar} and see whether the {o} survives.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which of these pairs shares the same root?'),
      options: [
        T('{permanece} and {permanecer}'),
        T('{casa} and {causa}'),
        T('{leal} and {lealdade}'),
        T('{cansado} and {cansar}'),
      ],
      answer: 0,
      hint: T('Compare what is left after removing the affixes.'),
    },
    {
      kind: 'match',
      prompt: T('Match each word to the layer it exemplifies.'),
      pairs: [
        { a: T('{salvação}'), b: T('root plus suffix') },
        { a: T('{desleal}'), b: T('root plus prefix') },
        { a: T('{casas}'), b: T('number ending') },
        { a: T('{guarda-chuva}'), b: T('two roots, no affix') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The prefix goes ______ of the root, and the suffix after it.'),
      answer: 'antes',
      hint: T('{des-} comes before {leal}, and {-dade} after it.'),
    },
  ],
};
