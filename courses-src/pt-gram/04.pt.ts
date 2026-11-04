import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('As palavras e suas classes'),
  title: T('Pronome, numeral e verbo'),
  subtitle: T('Substituição, contagem e ação'),
  body: C(`**Visão geral.** O {pronome} substitui o nome e ocupa a função dele: em {todos viram}, {todos} vale por {todos os discípulos}, e o sujeito é {todos}, não {viram}.

**Regra 1.** O {numeral cardinal} diz quantidade ({três}) e o {ordinal} diz ordem ({terceiro}): {três testemunhas} conta, {a terceira testemunha} localiza.

**Regra 2.** O {verbo} é o núcleo da oração e flexiona-se em pessoa, número, tempo e modo: em {Jesus chorou}, o verbo {chorou} está na 3.ª pessoa do singular.

**Regra 3.** O {verbo transitivo} exige complemento ({amou os seus amigos}) e o {intransitivo} não ({Jesus chorou}); o {auxiliar} faz tempo ou voz, não sentido próprio.

**Regra 4.** O grego dispensa o pronome sujeito porque {a forma do verbo} já diz quem age: em {ἐλθόντες} a pessoa está na terminação, e o português às vezes repete {eles}.

**Aplicação.** Em {Jesus chorou, e todos viram}, o verbo {chorou} é {intransitivo} no grego original (κλαίω não leva objeto), e {viram} é {transitivo} implícito: só o contexto diz o que viram. Repare no par {todos}/{viram}: o pronome {todos} é sujeito de {viram}, e é a forma verbal {viram} que diz que é plural. Em grego, {πάντες} εἶδαν e {εἶδον} dizem a mesma coisa com formas diferentes, e a escolha depende de quem é o sujeito.

**Verificação.** Quatro perguntas resolvem a classe gramatical: a palavra **concorda** com algo? Se concorda, ela nomeia ou caracteriza, e é substantivo ou adjetivo. Se não, ela **modifica**, **substitui**, **conta**, **liga** ou **ação**? E o verbo é {transitivo}, {intransitivo}, {auxiliar} ou {de ligação}? A pergunta da concordância elimina metade das dez classes de uma vez.`),
  vocab: [
    V('pronome', 'pronome', 'pronome'),
    V('numeral cardinal', 'numeral cardinal', 'numeral cardinal'),
    V('numeral ordinal', 'numeral ordinal', 'numeral ordinal'),
    V('verbo', 'verbo', 'verbo'),
    V('pessoal', 'pessoal', 'pronome pessoal'),
    V('possessivo', 'possessivo', 'pronome possessivo'),
    V('demonstrativo', 'demonstrativo', 'pronome demonstrativo'),
    V('relativo', 'relativo', 'pronome relativo'),
    V('todos', 'todos', 'pronome que substitui o nome'),
    V('chorou', 'chorou', 'verbo intransitivo no grego'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {pronome} substitui o nome e ocupa a função dele: em {todos viram}, {todos} vale por {todos os discípulos}, e o sujeito é {todos}, não {viram}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {numeral cardinal} diz quantidade ({três}) e o {ordinal} diz ordem ({terceiro}): {três testemunhas} conta, {a terceira testemunha} localiza.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {verbo} é o núcleo da oração e flexiona-se em pessoa, número, tempo e modo: em {Jesus chorou}, o verbo {chorou} está na 3.ª pessoa do singular.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {verbo transitivo} exige complemento ({amou os seus amigos}) e o {intransitivo} não ({Jesus chorou}); o {auxiliar} faz tempo ou voz, não sentido próprio.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego dispensa o pronome sujeito porque {a forma do verbo} já diz quem age: em {ἐλθόντες} a pessoa está na terminação, e o português às vezes repete {eles}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O pronome que o grego não escreve'),
      text: T(
        'O grego antigo quase nunca escreve pronome sujeito: {ἐλθόντες} quer dizer {eles vieram} porque a terminação {-οντες} já traz a pessoa. O português costuma precisar do pronome explícito, e é por isso que as traduções biblicas gregas trazem pronomes onde o grego não tem. Traduzir o que o grego marca pela forma seria apagar a informação.',
      ),
    },
    {
      label: T('Contar e localizar'),
      text: T(
        '{um}, {dois}, {três} contam e {primeiro}, {segundo}, {terceiro} localizam. Um ordinal traz quase sempre artigo, porque precisa de um nome para se apoiar: {o terceiro dia}. Um cardinal pode vir sozinho, como em {três contra ele}, em que o substantivo fica no singular e o numeral faz as vezes dele.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus chorou, e todos viram.',
      gloss: T(
        '{chorou} é intransitivo e {viram} transitivo implícito; {todos} é sujeito elícito de {viram}.',
      ),
    },
    {
      text: 'três testemunhas',
      gloss: T('Numeral cardinal {três} com substantivo no plural: o numeral concorda com o nome.'),
    },
    {
      text: 'a terceira testemunha',
      gloss: T(
        'Numeral ordinal {terceiro} com artigo {a}: o ordinal precisa do nome para se apoiar.',
      ),
    },
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Verbo {amou} transitivo direto, com objeto {o mundo}; o sujeito {Deus} vem posposto.',
      ),
    },
    {
      text: 'ele mesmo',
      gloss: T('Pronome {ele} em forma enfática, com {mesmo} funcionando como predicativo.'),
    },
    {
      text: 'os seus amigos',
      gloss: T('Pronome {seus} possessivo concordando com {amigos} em gênero e número.'),
    },
    {
      text: 'este é o meu Filho',
      gloss: T(
        'Duas ocorrências de {ser} e dois pronomes: {este} demonstrativo, {meu} possessivo.',
      ),
    },
    {
      text: 'havia muitos',
      gloss: T('{havia} é verbo auxiliar e {muitos} quantifica o sujeito elícito, que é {gente}.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{Verbo} substantivo próprio em maiúscula; {se} pronome reflexivo de {fez}.'),
    },
  ],
  tables: [
    {
      caption: T('Pronomes pessoais'),
      head: [T('Pessoa'), T('Reto'), T('Oblíquo'), T('Reflexivo')],
      rows: [
        [T('1.ª'), T('{eu}'), T('{me}'), T('{me}')],
        [T('2.ª'), T('{tu}'), T('{te}'), T('{te}')],
        [T('3.ª'), T('{ele}'), T('{o}, {lhe}'), T('{se}')],
        [T('1.ª plural'), T('{nós}'), T('{nos}'), T('{nos}')],
        [T('2.ª plural'), T('{vós}'), T('{vos}'), T('{vos}')],
        [T('3.ª plural'), T('{eles}'), T('{os}, {lhes}'), T('{se}')],
      ],
    },
    {
      caption: T('Numeral cardinal e ordinal'),
      head: [T('Número'), T('Cardinal'), T('Ordinal')],
      rows: [
        [T('1'), T('{um}'), T('{primeiro}')],
        [T('2'), T('{dois}'), T('{segundo}')],
        [T('3'), T('{três}'), T('{terceiro}')],
        [T('4'), T('{quatro}'), T('{quarto}')],
        [T('10'), T('{dez}'), T('{décimo}')],
      ],
    },
    {
      caption: T('O verbo pela flexão'),
      head: [T('Tempo'), T('Forma'), T('Pessoa e número')],
      rows: [
        [T('presente'), T('{ama}'), T('3.ª do singular')],
        [T('pretérito'), T('{amou}'), T('3.ª do singular')],
        [T('futuro'), T('{amará}'), T('3.ª do singular')],
        [T('presente'), T('{amamos}'), T('1.ª do plural')],
        [T('pretérito'), T('{amastes}'), T('2.ª do plural')],
        [T('infinitivo'), T('{amar}'), T('não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {três testemunhas}, o numeral {três} é:'),
    options: [
      T('cardinal, porque diz quantidade'),
      T('ordinal, porque vem antes do nome'),
      T('pronome, porque substitui o nome'),
      T('adjetivo, porque caracteriza o nome'),
    ],
    answer: 0,
    hint: T('Se diz quantos são, é cardinal; se diz em que posição, é ordinal.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual verbo é {intransitivo}?'),
      options: [T('{chorou}'), T('{amou}'), T('{viu}'), T('{ouviu}')],
      answer: 0,
      hint: T('Pergunte o que o verbo completa: se nada, é intransitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à função que ele exerce.'),
      pairs: [
        { a: T('{todos}'), b: T('sujeito elícito') },
        { a: T('{me}'), b: T('objeto indireto') },
        { a: T('{se}'), b: T('pronome reflexivo') },
        { a: T('{os}'), b: T('artigo definido') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Em {Jesus chorou}, o verbo {chorou} está na ______ pessoa do singular.'),
      answer: 'terceira',
      hint: T('A forma {chorou} termina em {-ou}, a terminação da 3.ª pessoa.'),
    },
  ],
};
