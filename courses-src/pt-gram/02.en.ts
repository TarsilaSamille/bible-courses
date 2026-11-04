import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('The words and their classes'),
  title: T('Word formation'),
  subtitle: T('Derivation, compounding and meaning change'),
  body: C(`**Overview.** There are four word formation processes, separated by how many roots and what kind of joint they use: {prefixation}, {suffixation}, {composition} and {agglutination}.

**Rule 1.** In {prefixation} the meaning inverts without touching the category: {des-} + {leal} = {desleal}, and {anti-} + {social} = {antisocial}.

**Rule 2.** In {suffixation} the category changes and the meaning stays: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.

**Rule 3.** In {composition} both roots are whole and the hyphen marks the joint: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.

**Rule 4.** The test that separates {prefix} from {suffix}: the prefix **inverts the meaning** and the suffix **changes the category**; {deslealdade} negates, {lealdade} names.

**Application.** In {the Word became flesh}, the noun {Verbo} is {verbo} + {-o}: root {verb-}, suffix {-o}, and no visible ending, because a proper noun does not take one. It is {suffixation} that made the noun. Compare {passatempo}, which is {composition}: {passa} and {tempo} are two whole roots, and neither became a noun on its own. The same paragraph uses both processes, and the number of roots tells you which one it is.

**Check.** Ask three questions: how many roots appear? Did the **meaning** invert, or did only the **category** change? And is the base, on its own, already a noun? One root with an inverted meaning is {prefixation}; one root with a new category is {suffixation}; two whole roots are {composition}. With those three, an unfamiliar word can be analysed without a dictionary.`),
  vocab: [
    V('derivação', 'derivação', 'derivation'),
    V('prefixação', 'prefixação', 'prefixation'),
    V('sufixação', 'sufixação', 'suffixation'),
    V('composição', 'composição', 'composition'),
    V('justaposição', 'justaposição', 'juxtaposition'),
    V('aglutinação', 'aglutinação', 'agglutination'),
    V('guarda-chuva', 'guarda-chuva', 'two whole roots'),
    V('passatempo', 'passatempo', 'two roots, no hyphen'),
    V('-dade', '-dade', 'suffix forming a noun'),
    V('desleal', 'desleal', '{des-} plus {leal}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'There are four word formation processes, separated by how many roots and what kind of joint they use: {prefixation}, {suffixation}, {composition} and {agglutination}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'In {prefixation} the meaning inverts without touching the category: {des-} + {leal} = {desleal}, and {anti-} + {social} = {antisocial}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'In {suffixation} the category changes and the meaning stays: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'In {composition} both roots are whole and the hyphen marks the joint: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test that separates {prefix} from {suffix}: the prefix **inverts the meaning** and the suffix **changes the category**; {deslealdade} negates, {lealdade} names.',
      ),
    },
  ],
  notes: [
    {
      label: T('The hyphen that is not an affix joint'),
      text: T(
        '{passatempo} and {guarda-chuva} are written without a hyphen because neither base needs one. {anti-} does require it in {antisocial}, because of a vowel collision. The hyphen therefore marks {composition} in one case and avoids a sound clash in the other: two different jobs, and only the second concerns the joint.',
      ),
    },
    {
      label: T('The root that comes from elsewhere'),
      text: T(
        'Latin left roots that Portuguese no longer inflects: {fides} in {fé}, {panis} in {pão}. In such cases the inherited root appears alone, without suffix and without visible ending, and the lexicon holds the word up. Not every Portuguese word has a visible affix; some are the bare root.',
      ),
    },
  ],
  examples: [
    {
      text: 'deslealdade',
      gloss: T('Prefix {des-} and suffix {-dade} in one word: two formations on the root {leal}.'),
    },
    {
      text: 'lealdade',
      gloss: T(
        '{Suffixation} only: the root {leal} stays positive and {-dade} merely names the quality.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefix {anti-} with a required hyphen; the prefix final vowel would clash with the root initial one.',
      ),
    },
    { text: 'vaporoso', gloss: T('Suffix {-oso} makes an adjective out of the noun {vapor}.') },
    {
      text: 'guarda-chuva',
      gloss: T(
        'Composition: {guarda} and {chuva} are two whole roots, and the hyphen marks the joint.',
      ),
    },
    {
      text: 'passatempo',
      gloss: T('Composition without a hyphen: {passa} and {tempo} do not clash in writing.'),
    },
    {
      text: 'fé',
      gloss: T('Root inherited from Latin {fides}, with no suffix and no visible ending.'),
    },
    {
      text: 'pão',
      gloss: T('From Latin {panis}, with a sound adaptation: {a} in place of the Latin {i}.'),
    },
    {
      text: 'livraria',
      gloss: T('Suffix {-aria} forming the place where the trade of {livro} is exercised.'),
    },
  ],
  tables: [
    {
      caption: T('The four processes'),
      head: [T('Processo'), T('Radicais'), T('O que muda'), T('Exemplo')],
      rows: [
        [T('{prefixação}'), T('um'), T('o sentido inverte'), T('{desleal}')],
        [T('{sufixação}'), T('um'), T('a categoria muda'), T('{lealdade}')],
        [T('{composição}'), T('dois inteiros'), T('nasce um sentido novo'), T('{guarda-chuva}')],
        [
          T('{aglutinação}'),
          T('dois, um perdido'),
          T('a base perde a forma'),
          T('{homem} de {hominem}'),
        ],
      ],
    },
    {
      caption: T('Suffixes that change the category'),
      head: [T('Sufixo'), T('Base'), T('Categoria que sai')],
      rows: [
        [T('-dade'), T('{leal}'), T('substantivo: {lealdade}')],
        [T('{-oso}'), T('{vapor}'), T('adjetivo: {vaporoso}')],
        [T('{-mente}'), T('{rápido}'), T('advérbio: {rapidamente}')],
        [T('{-ável}'), T('{amigar}'), T('adjetivo: {amigável}')],
        [T('{-aria}'), T('{livro}'), T('substantivo: {livraria}')],
        [T('{-eiro}'), T('{padre}'), T('substantivo: {padeiro}')],
      ],
    },
    {
      caption: T('Prefixes and what they invert'),
      head: [T('Prefixo'), T('Base'), T('Resultado')],
      rows: [
        [T('{des-}'), T('{leal}'), T('tira a qualidade: {desleal}')],
        [T('{in-}'), T('{numerável}'), T('nega: {inumerável}')],
        [T('{anti-}'), T('{social}'), T('inverte: {antisocial}')],
        [T('{re-}'), T('{fazer}'), T('repete: {refazer}')],
        [T('{pre-}'), T('{ver}'), T('antecipa: {prever}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which word is formed by {composition}?'),
    options: [T('{deslealdade}'), T('{guarda-chuva}'), T('{vaporoso}'), T('{antisocial}')],
    answer: 1,
    hint: T('Count the whole roots: {guarda} and {chuva} are two.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What does the prefix {des-} do in {desleal}?'),
      options: [
        T('inverts the sense of the root without changing the category'),
        T('turns the root into a noun'),
        T('adds a number ending'),
        T('joins two whole roots'),
      ],
      answer: 0,
      hint: T('{leal} is still an adjective in {desleal}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each process to the word that illustrates it.'),
      pairs: [
        { a: T('{desleal}'), b: T('{prefixation}') },
        { a: T('{lealdade}'), b: T('{suffixation}') },
        { a: T('{passatempo}'), b: T('{composition}') },
        { a: T('{rapidamente}'), b: T('suffix creating an adverb') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'There are ______ whole roots in {guarda-chuva}, which is why it is called composition.',
      ),
      answer: 'dois',
      hint: T('{guarda} and {chuva}.'),
    },
  ],
};
