import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verbo'),
  title: T('Os três registros do verbo: plano, polido e honorífico'),
  subtitle: T(
    'O japonês marca distância com um auxiliar grudado na raiz do verbo — e é por isso que ele se parece com o coreano sem ser igual a ele',
  ),
  body: C(`
## O verbo não muda: muda o auxiliar

A lição do verbo mostrou os dois primeiros registros, o plano ({naru}, {taberu}) e o polido (*narimasu*, *tabimasu*). O sistema se fecha com o terceiro, e o fechamento revela a diferença mais nítida entre o japonês e o coreano.

No coreano o honorífico é a palavra: *meokda*, *meokneunda*, *meogeora*, três verbos distintos para a mesma ação, escolhidos pela posição do outro. No japonês é o **auxiliar**: a raiz {taberu} "comer" é a mesma nos três registros, e o que muda é a peça colada na ponta. Mesmo raciocínio, mesma distância, duas engenharias distintas para a mesma ideia.

O **plano** é entre iguais, e é também o registro do texto escrito: caderno, e-mail, catálogo, receita. Ele não é grosseiro, é apenas direto. Não marca posição porque não precisa marcar.

O **polido** ({naru} mais {masu}) é o padrão da fala e dos documentos comuns. É a forma que quase todo mundo usa o dia inteiro sem pensar, e é por isso que o japonês falante soa cortês mesmo sem nenhuma fórmula de polidez. O final {desu} fecha a frase.

O **honorífico**, esse, é para quem está acima de você: o cliente, o professor, um ancião, Deus.

## Os dois sabores do honorífico

O honorífico tem duas metades, e elas não se misturam. O {keigo} honra o outro: quem diz "o cliente já chegou" com {irassharu} está falando do cliente e falando dele com respeito. O {kenjōgo} rebaixa a si mesmo: quem diz "comprei para o senhor" está falando de si e falando de si com respeito.

A construção é a mesma nos dois casos, e é isso que trava o iniciante: ele vê uma peça só e conclui que existe um único honorífico. Existem dois, e usar um no lugar do outro soa errado sem que ele saiba dizer por quê.

## Como se forma

O {keigo} funciona por auxiliar colado na raiz. Para {taberu}, a forma honrosa é *tabete irassharu*, e a mesma peça serve ao verbo "ir" e ao verbo "vir", porque os três passam por ali.

O {kenjōgo} usa verbos próprios. Para {suru}, a forma humilde é *mōsu*, e a polida dela é *mōshimasu*. Para {taberu}, é *itadaku*, que é a palavra que todo japonês diz ao sentar para comer.

E há duas exceções que o leitor precisa conhecer, porque são os dois casos em que o honorífico japonês não é um auxiliar. A primeira é {nasaru}, o honorífico de {suru}: a raiz muda inteira, e não há peça alguma para colar. A segunda é {osshharu}, o honorífico de "dizer": a raiz também muda, e o som inicial dobra. Nenhum outro verbo se comporta assim.

Há ainda um terceiro caso, à parte: {irassharu} é ele próprio um verbo completo, que significa "estar, estar aqui". Por isso ele aparece sozinho, sem nenhuma raiz na frente, "o professor está aqui". Todos os outros honoríficos são peça colada; este é palavra.

## O erro que não é erro

O engano mais comum de quem começa é usar o humilde falando de si mesmo. "Eu fui à igreja ontem" é registro neutro: narrar não exige rebaixamento. O {kenjōgo} é para quando você age como servidor do outro, você compra e ele entrega, você prepara e ele recebe.

A diferença entre "eu comprei" e "comprei para o senhor" não está no verbo, e sim no destinatário. A fórmula é a mesma; muda para quem o gesto se dirige. E é por isso que *itasu*, a forma humilde de "fazer", aparece quase sempre com alguém ao lado: "eu faço para o senhor". Nunca é "eu faço" e nada mais.

Nada disso é polidez decorativa. O honorífico é o modo como o japonês marca distância e posição sem nunca dizer que existe distância. Um catálogo de preços não usa honorífico, porque ninguém está acima de quem lê a lista. Uma carta de negócio usa, porque o cliente está acima de quem escreve.

## O gancho bíblico

A tradução japonesa da Bíblia lida em igreja costuma aparecer no registro polido, porque é o que soa bem em voz alta. No texto escrito o padrão é outro: {keigo} para Deus, polido para os humanos, plano na narrativa. O mesmo contraste se vê no coreano, e é o que amarra os dois cursos.

E o ponto mais bonito de tudo isto, que é teologicamente exato: **Deus é tratado com o {keigo} mais alto e nunca com o {kenjōgo}**. Ninguém ora no registro que rebaixa a si mesmo pedindo a Deus. A gramática da distância já coloca Deus acima sem que ninguém precise ensinar isso, e é por isso que o ponto teológico e o ponto gramatical são o mesmo ponto.
`),
  vocab: [
    V('naru', 'なる', 'ser; tornar-se (naru) — a raiz dos exemplos da lição'),
    V('taberu', '食べる', 'comer (taberu) — a raiz que atravessa os três registros'),
    V('masu', 'ます', 'auxiliar do registro polido: mesma raiz, distância marcada'),
    V('desu', 'です', 'final de frase do registro polido: "é"'),
    V('keigo', '敬語', 'o honorífico que honra o outro (keigo)'),
    V('irassharu', 'いらっしゃる', 'honorífico de "estar, vir, estar aqui"; auxiliar de respeito'),
    V('nasaru', 'なさる', 'honorífico de {suru}: a primeira exceção, a raiz muda inteira'),
    V(
      'osshharu',
      'おっしゃる',
      'honorífico de "dizer": a segunda exceção, a raiz muda e o s dobra',
    ),
    V('kenjōgo', '謙譲語', 'o honorífico que rebaixa a si mesmo (kenjōgo)'),
    V('mōsu', '申す', 'humble de "dizer": falar de si a quem está acima'),
    V('itadaku', 'いただく', 'humble de "comer": receber de alguém (a palavra da refeição)'),
    V('itasu', 'いたす', 'humble de "fazer": fazer para o senhor, sempre com destinatário'),
    V('suru', 'する', 'fazer, dizer (suru) — a raiz que o honorífico troca por outro verbo'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo não muda entre registros: o que muda é o auxiliar grudado na raiz. No coreano muda a palavra; no japonês muda a peça colada na ponta.',
      ),
    },
    {
      n: '2',
      text: T(
        'O plano é entre iguais e é o registro do texto escrito; o polido ({masu}) é o padrão da fala; o honorífico é para quem está acima de você.',
      ),
    },
    {
      n: '3',
      text: T(
        '{keigo} honra o outro e {kenjōgo} rebaixa a si mesmo. A construção é a mesma nas duas metades, e as duas não se misturam.',
      ),
    },
    {
      n: '4',
      text: T(
        'Narrar o que você mesmo fez não exige humildade. O {kenjōgo} é para quando você age como servidor do outro, e a diferença entre "eu comprei" e "comprei para o senhor" está no destinatário, não no verbo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Duas exceções ao padrão do auxiliar: {nasaru}, o honorífico de {suru}, e {osshharu}, o honorífico de "dizer", trocam a raiz inteira. E {irassharu} não é auxiliar nenhum: é verbo completo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O honorífico é informação, não decoração'),
      text: T(
        'Ele existe para marcar a distância e a posição entre as duas pessoas da frase, e nada mais. Um catálogo de preços não usa honorífico porque ninguém está acima de quem lê a lista; uma carta de negócio usa porque o cliente está acima de quem escreve. O japonês diz assim quem está em cima, sem nunca usar a palavra "em cima".',
      ),
    },
    {
      label: T('Deus recebe o keigo e nunca o kenjōgo'),
      text: T(
        'Nas traduções japonesas de 1987 e de 2003 o tratamento de Deus é o honorífico que honra o outro, e o polido para os seres humanos. Ninguém ora no registro que rebaixa a si mesmo pedindo a Deus: a gramática da distância coloca Deus acima de qualquer instrução, e o ponto teológico e o ponto gramatical acabam no mesmo lugar.',
      ),
    },
  ],
  examples: [
    {
      text: '先生いらっしゃいます',
      gloss: T(
        'sensei wa irasshaimasu — o professor está aqui (honorífico, e {irassharu} é verbo completo)',
      ),
    },
    {
      text: 'なさいます',
      gloss: T('nasaimasu — o senhor faz (honorífico de {suru}; a primeira exceção, a raiz muda)'),
    },
    {
      text: 'おっしゃいます',
      gloss: T('osshahaimasu — o senhor diz (honorífico de "dizer"; a segunda exceção, o s dobra)'),
    },
    {
      text: 'いただきます',
      gloss: T('itadakimasu — eu como (humble; é a palavra dita ao sentar para comer)'),
    },
    {
      text: 'いたします',
      gloss: T(
        'itashimasu — eu faço, para o senhor (humble de {suru}; o {itasu} sempre tem destinatário)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Os três registros e o que cada um diz'),
      head: [T('Registro'), T('Auxiliar'), T('Para quem'), T('Onde aparece')],
      rows: [
        [
          T('plano'),
          T('nenhum'),
          T('um igual, e o texto escrito'),
          T('caderno, catálogo, receita, narrativa bíblica'),
        ],
        [
          T('polido'),
          T('{masu}'),
          T('qualquer pessoa, por omissão'),
          T('a fala comum; {desu} fecha a frase'),
        ],
        [
          T('honorífico'),
          T('{irassharu} no {keigo}, {mōsu} no {kenjōgo}'),
          T('quem está acima de você'),
          T('carta de negócio, tratar por nome, oração'),
        ],
      ],
    },
    {
      caption: T('As duas metades do honorífico, com a construção idêntica'),
      head: [T('Metade'), T('O que faz'), T('Sobre quem fala'), T('Verbo típico')],
      rows: [
        [
          T('{keigo}'),
          T('honra o outro'),
          T('o cliente, o professor, Deus'),
          T('{irassharu}, "estar, vir"'),
        ],
        [
          T('{kenjōgo}'),
          T('rebaixa a si mesmo'),
          T('você mesmo, na condição de servo'),
          T('{mōsu}, "dizer"'),
        ],
      ],
    },
    {
      caption: T('Onde o padrão do auxiliar falha'),
      head: [T('Verbo de origem'), T('Forma honrosa'), T('O que acontece'), T('Por que é exceção')],
      rows: [
        [
          T('{suru}'),
          T('{nasaru}'),
          T('a raiz muda inteira'),
          T('não há peça para colar na ponta'),
        ],
        [
          T('"dizer"'),
          T('{osshharu}'),
          T('a raiz muda e o som inicial dobra'),
          T('o som não se deduz do resto do verbo'),
        ],
        [
          T('"estar"'),
          T('{irassharu}'),
          T('é verbo completo, não auxiliar'),
          T('aparece sozinho, sem raiz na frente'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Quando você diz "comprei para o senhor", qual metade do honorífico está em uso?'),
    options: [
      T('{keigo}, que honra o outro'),
      T('{kenjōgo}, que rebaixa a si mesmo'),
      T('nenhuma: é registro neutro'),
      T('as duas ao mesmo tempo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete o honorífico de {suru} "fazer", cuja raiz muda inteira e não usa auxiliar: ______',
      ),
      answer: 'nasaru',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao que ela faz'),
      pairs: [
        { a: T('{irassharu}'), b: T('honra o outro: "o senhor está aqui"') },
        { a: T('{mōsu}'), b: T('rebaixa a si mesmo: "eu digo com reverência"') },
        { a: T('{itasu}'), b: T('fazer para o senhor, com destinatário') },
        { a: T('{masu}'), b: T('o auxiliar do polido, que não marca distância') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas afirmações está correta?'),
      options: [
        T('contar o que você mesmo fez exige o registro humilde'),
        T('o honorífico japonês troca a raiz do verbo, como o coreano troca a palavra'),
        T('as duas metades do honorífico têm a mesma construção e não podem se misturar'),
        T('Deus é tratado no registro humilde nas traduções de 1987 e de 2003'),
      ],
      answer: 2,
    },
  ],
};
