import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('As palavras e suas classes'),
  title: T('Advérbio, preposição, conjunção e interjeição'),
  subtitle: T('Circunstância, relação, coordenação e emoção'),
  body: C(`**Visão geral.** O {advérbio} é invariável: em {correu rapidamente}, {rapidamente} não concorda com nada, e é esse teste que o separa do adjetivo {rápido}.

**Regra 1.** A {preposição} liga dois termos e não flexiona: em {com Deus}, {com} liga o verbo ao termo que faz de objeto indireto.

**Regra 2.** A {conjunção} liga palavras ou orações: em {Vinde e segui-me}, {e} liga duas orações independentes, e nenhuma das duas depende da outra.

**Regra 3.** A {interjeição} não se liga a nada: em {Aleluia}, a palavra vem solta, e é a pausa no lugar da vírgula que a marca.

**Regra 4.** O teste das quatro: a palavra {concorda} com algo? Se não, é {modifica}, {liga}, {coordena} ou {exprime}? E se liga orações, elas são {independentes} ou a segunda {depende} da primeira?

**Aplicação.** Em {Deus amou o mundo}, a frase tem {Deus}, {amou} e {mundo}, e nada liga os termos: é o período mais neutro que existe. Em {Deus amou este mundo}, o {este} é determinante, e a frase ganhou artigo sem verbo. Compare {muito} em {amou muito}, que modifica o verbo {amou}, e {muito bom}, em que {bom} é adjetivo: a mesma forma, a função decidida pelo que vem ao lado.

**Verificação.** Faça duas perguntas e a classe fica decidida. Primeira: a palavra **concorda** com algum nome? Se sim, é substantivo ou adjetivo, e acabou. Se não, ela **modifica**, **liga**, **coordena** ou **exprime**? E a segunda, a das orações: se ela liga orações, elas são **independentes** ou a segunda **depende** da primeira? A primeira elimina metade das classes e a segunda decide as quatro deste capítulo.`),
  vocab: [
    V('advérbio', 'advérbio', 'advérbio'),
    V('preposição', 'preposição', 'preposição'),
    V('conjunção', 'conjunção', 'conjunção'),
    V('interjeição', 'interjeição', 'interjeição'),
    V('circunstância', 'circunstância', 'circunstância'),
    V('coordenativa', 'coordenativa', 'conjunção coordenativa'),
    V('subordinativa', 'subordinativa', 'conjunção subordinativa'),
    V('aleluia', 'aleluia', 'interjeição de louvor'),
    V('com', 'com', 'preposição que liga verbo e objeto indireto'),
    V('rapidamente', 'rapidamente', 'advérbio formado com {-mente}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {advérbio} é invariável: em {correu rapidamente}, {rapidamente} não concorda com nada, e é esse teste que o separa do adjetivo {rápido}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {preposição} liga dois termos e não flexiona: em {com Deus}, {com} liga o verbo ao termo que faz de objeto indireto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {conjunção} liga palavras ou orações: em {Vinde e segui-me}, {e} liga duas orações independentes, e nenhuma das duas depende da outra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {interjeição} não se liga a nada: em {Aleluia}, a palavra vem solta, e é a pausa no lugar da vírgula que a marca.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste das quatro: a palavra {concorda} com algo? Se não, é {modifica}, {liga}, {coordena} ou {exprime}? E se liga orações, elas são {independentes} ou a segunda {depende} da primeira?',
      ),
    },
  ],
  notes: [
    {
      label: T('O advérbio que flexiona'),
      text: T(
        'A regra de que advérbio não flexiona vale para quase todo o português. As exceções são {hoje} e {amanhã}, que são advérbios e também flexionam: {hoje} contra {hojes}. São advérbios de tempo, e é por isso que a regra os excetua pelo nome.',
      ),
    },
    {
      label: T('A palavra que liga e a que só liga'),
      text: T(
        'Nem toda preposição liga da mesma maneira: em {caminhou com Deus}, {com} liga o verbo a um nome; em {caminhou durante a noite}, {durante} liga o verbo a outro advérbio. E a conjunção liga sempre duas unidades do mesmo tipo: duas orações, dois substantivos, dois adjetivos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Período mínimo: sujeito, verbo e objeto, sem nenhuma das quatro palavras deste capítulo.',
      ),
    },
    {
      text: 'correu rapidamente',
      gloss: T('{rapidamente} é advérbio: não concorda com {correu}, e por isso é invariável.'),
    },
    {
      text: 'um homem rápido',
      gloss: T('{rápido} é adjetivo: concorda em gênero e número com o substantivo {homem}.'),
    },
    { text: 'com Deus', gloss: T('Preposição {com} ligando o verbo ao objeto indireto {Deus}.') },
    {
      text: 'durante a noite',
      gloss: T('Preposição {durante} ligando o verbo a um advérbio de tempo.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T('Conjunção {e} entre duas orações independentes: {Vinde} e {segui-me}.'),
    },
    {
      text: 'não sei porque Ele me ama',
      gloss: T(
        'Conjunção {porque} abrindo subordinada e mostrando dependência: só a segunda oração obedece.',
      ),
    },
    {
      text: 'Aleluia',
      gloss: T('Interjeição: vem solta, entre o sinal de exclamação e o que vem depois.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('Verbo {fez} transitivo direto, com objeto {carne}; {se} pronome reflexivo.'),
    },
  ],
  tables: [
    {
      caption: T('As quatro classes que não flexionam'),
      head: [T('Classe'), T('O que faz'), T('Concorda?'), T('Exemplo')],
      rows: [
        [T('{advérbio}'), T('modifica verbo, adjetivo ou advérbio'), T('não'), T('{muito}')],
        [T('{preposição}'), T('liga termo a termo'), T('não'), T('{com}')],
        [T('{conjunção}'), T('liga palavras ou orações'), T('não'), T('{e}, {porque}')],
        [T('{interjeição}'), T('exprime emoção'), T('não'), T('{ai}, {aleluia}')],
      ],
    },
    {
      caption: T('Conectivos e o valor que abrem'),
      head: [T('Valor'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{aditivo}'), T('{e}, {nem}'), T('{veio e viu}')],
        [T('{adversativo}'), T('{mas}, {porém}'), T('{veio, mas não viu}')],
        [T('{alternativo}'), T('{ou}'), T('{ficou ou saiu}')],
        [T('{conclusivo}'), T('{logo}, {portanto}'), T('{choveu, logo ficou}')],
        [T('{explicativo}'), T('{porque}'), T('{ficou, porque era tarde}')],
        [T('{causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [T('{final}'), T('{para que}'), T('{vim para que vês}')],
      ],
    },
    {
      caption: T('Advérbios pela circunstância'),
      head: [T('Circunstância'), T('Advérbio'), T('Frase')],
      rows: [
        [T('tempo'), T('{ontem}'), T('{Ontem cheguei.}')],
        [T('lugar'), T('{aqui}'), T('{Aqui estou.}')],
        [T('modo'), T('{rapidamente}'), T('{Cheguei rapidamente.}')],
        [T('intensidade'), T('{muito}'), T('{É muito bom.}')],
        [T('negação'), T('{não}'), T('{Não vim.}')],
        [T('afirmação'), T('{sim}'), T('{Sim, eu sei.}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {correu rapidamente}, {rapidamente} é advérbio porque:'),
    options: [
      T('não concorda com {correu}, e a sua forma é única'),
      T('concorda em gênero com o sujeito'),
      T('é o núcleo da oração, ao lado de {correu}'),
      T('exige uma preposição que o ligar a {correu}'),
    ],
    answer: 0,
    hint: T('Compare {rapidamente} com {rápido}, que flexiona.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual palavra é {interjeição}?'),
      options: [T('{aleluia}'), T('{mas}'), T('{ontem}'), T('{contra}')],
      answer: 0,
      hint: T('Ela não se liga a nenhuma palavra da frase.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o conectivo ao valor que ele abre.'),
      pairs: [
        { a: T('{e}'), b: T('adição') },
        { a: T('{mas}'), b: T('oposição') },
        { a: T('{logo}'), b: T('conclusão') },
        { a: T('{porque}'), b: T('causa ou explicação') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A palavra que liga duas orações independentes é uma ______.'),
      answer: 'conjunção',
      hint: T('Se liga e não flexiona, é conjunção.'),
    },
  ],
};
