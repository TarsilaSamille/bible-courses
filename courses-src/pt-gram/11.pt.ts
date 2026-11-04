import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('A estrutura do período'),
  title: T('Sintaxe do período'),
  subtitle: T('Oração, período e independência sintática'),
  body: C(`**Visão geral.** Conta-se um verbo por oração: em {Disse Jesus: «Vinde a mim»}, há dois verbos, {disse} e {vinde}, e portanto duas orações.

**Regra 1.** O {período simples} tem uma só oração; o {composto} tem duas ou mais: em {Vinde e segui-me}, {vinde} e {segui-me} são duas.

**Regra 2.** A oração {coordenada} tem autonomia sintática e a {subordinada} depende de um termo da principal: em {Vinde, porque eu vou}, a segunda não se sustenta sozinha.

**Regra 3.** A {oração reduzida} não tem verbo conjugado próprio: em {Caminhando towards Ele}, {caminhando} é um gerúndio que depende do verbo principal.

**Regra 4.** O {período} é a sequência completa de uma ou mais orações, e o ponto final é o que fecha a contagem: em {E disse Jesus, e saíram}, são duas orações.

**Aplicação.** Em {E Jesus, chorando, saiu}, o período tem **uma** oração, com três adjuntos. Em {E disse Jesus: «Vinde a mim»}, o período tem **três** orações: {Disse Jesus} é a principal, {e} liga e {Vinde a mim} é o objeto do verbo {disse}. E em {Creio, porque tu és o Filho do Deus vivo}, há duas: a principal {Creio} e a subordinada causal {porque tu és...}.

**Verificação.** Conte as orações: quantas há? Se uma, é período simples. Se mais de uma, pergunte a cada uma: ela tem **sujeito próprio** e é **independente**? Se sim, é coordenada; se depende da outra, é subordinada. E identifique a **principal**, que é a que não é regida por nenhum termo. Duas perguntas, e o período se abre inteiro.`),
  vocab: [
    V('oração', 'oração', 'unidade sintática com verbo'),
    V('período', 'período', 'sequência completa de orações'),
    V('coordenação', 'coordenação', 'junção de orações independentes'),
    V('subordinação', 'subordinação', 'junção com dependência'),
    V('independente', 'independente', 'oração que se sustenta sozinha'),
    V('sindética', 'sindética', 'coordenação com conectivo'),
    V('assindética', 'assindética', 'coordenação sem conectivo'),
    V('oração reduzida', 'oração reduzida', 'oração sem verbo conjugado'),
    V('disse', 'disse', 'verbo da principal de {Disse Jesus}'),
    V('chorando', 'chorando', 'gerúndio que abre oração reduzida'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Conta-se um verbo por oração: em {Disse Jesus: «Vinde a mim»}, há dois verbos, {disse} e {vinde}, e portanto duas orações.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {período simples} tem uma só oração; o {composto} tem duas ou mais: em {Vinde e segui-me}, {vinde} e {segui-me} são duas.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A oração {coordenada} tem autonomia sintática e a {subordinada} depende de um termo da principal: em {Vinde, porque eu vou}, a segunda não se sustenta sozinha.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {oração reduzida} não tem verbo conjugado próprio: em {Caminhando towards Ele}, {caminhando} é um gerúndio que depende do verbo principal.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O {período} é a sequência completa de uma ou mais orações, e o ponto final é o que fecha a contagem: em {E disse Jesus, e saíram}, são duas orações.',
      ),
    },
  ],
  notes: [
    {
      label: T('A oração que o grego reduz mais'),
      text: T(
        'O grego antigo tem orações participiais hoje pouco usadas no português: {προσευχόμενος} e {ἐλθών} valem por {estando a orar} e {tendo ido}. Quem traduz do grego encontra essas formas a toda hora, e a escolha entre manter o participial ou expandi-lo em oração é a decisão mais difícil da tradução.',
      ),
    },
    {
      label: T('O ponto final conta'),
      text: T(
        'Um período tem um verbo a mais que outro quando chega ao ponto final. Em {E disse Jesus, e saíram}, são dois verbos e duas orações; em {E disse Jesus; e, saído, foi-se}, a segunda oração traz {saiu} e {foi}, e são três. A contagem é sempre verificável, e é por isso que ela é o ponto de partida de qualquer análise.',
      ),
    },
  ],
  examples: [
    {
      text: 'E Jesus, chorando, saiu.',
      gloss: T('Período simples: uma só oração, com {chorando} como oração reduzida.'),
    },
    {
      text: 'E disse Jesus: «Vinde a mim».',
      gloss: T('Período composto: {Disse Jesus} e a fala {Vinde a mim}, que é o objeto do verbo.'),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('Duas coordenadas unidas por {e}: cada uma tem sujeito próprio.'),
    },
    {
      text: 'Creio, porque tu és o Filho.',
      gloss: T('Principal {Creio} e subordinada causal {porque tu és}, que traz a causa.'),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polissíndeto: quatro orações coordenadas, com o verbo {é} repetido.'),
    },
    {
      text: 'Caminhando para Ele, Jesus saiu.',
      gloss: T('Gerúndio abre uma oração reduzida; o sujeito {Jesus} serve aos dois verbos.'),
    },
    {
      text: 'Não é a casa que quero.',
      gloss: T(
        'Negação anteposta ao sintagma, não ao verbo: destaca um elemento em vez de negar a oração.',
      ),
    },
    {
      text: 'Deus amou o mundo e deu o seu Filho.',
      gloss: T(
        'Duas coordenadas: a segunda completa a primeira pelo verbo {deu}, com o objeto indireto {lhe}.',
      ),
    },
    {
      text: 'O Filho do Homem veio à própria morte.',
      gloss: T('Sujeito posposto {O Filho do Homem}, verbo {veio}, adjunto {à própria morte}.'),
    },
  ],
  tables: [
    {
      caption: T('Período simples e composto'),
      head: [T('Tipo'), T('Orações'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('uma'), T('um só verbo conjugado'), T('{Jesus saiu}')],
        [
          T('{composto por coordenação}'),
          T('duas ou mais independentes'),
          T('cada uma com sujeito próprio'),
          T('{Vinde e segui-me}'),
        ],
        [
          T('{composto por subordinação}'),
          T('principal e subordinada'),
          T('a subordinada depende da principal'),
          T('{Creio porque tu és}'),
        ],
        [
          T('{composto por ambas}'),
          T('três ou mais'),
          T('coordenadas e subordinadas juntas'),
          T('{E disse Jesus: vinde}'),
        ],
      ],
    },
    {
      caption: T('Orações coordenadas e subordinadas'),
      head: [T('Tipo'), T('Autonomia'), T('Conectivo'), T('Exemplo')],
      rows: [
        [T('coordenada {aditiva}'), T('independente'), T('{e}'), T('{veio e viu}')],
        [T('coordenada {adversativa}'), T('independente'), T('{mas}'), T('{veio, mas não viu}')],
        [
          T('coordenada {explicativa}'),
          T('independente'),
          T('{porque}'),
          T('{ficou, porque era tarde}'),
        ],
        [
          T('subordinada {substantiva}'),
          T('dependente'),
          T('{que}'),
          T('{Creio que isto é verdade}'),
        ],
        [T('subordinada {adjetiva}'), T('dependente'), T('{que}'), T('{o barco que vias}')],
        [T('subordinada {adverbial}'), T('dependente'), T('{porque}, {se}'), T('{Se vier, saio}')],
      ],
    },
    {
      caption: T('A oração reduzida e o que a abre'),
      head: [T('Forma'), T('Que abre a reduzida'), T('Frase'), T('Verbo que falta')],
      rows: [
        [T('gerúndio'), T('{Caminhando}'), T('{Caminhando para Ele, saiu}'), T('{saiu}')],
        [T('infinitivo'), T('{Ao ver}'), T('{Ao ver Ele, chorou}'), T('{chorou}')],
        [T('particípio'), T('{Sentado}'), T('{Sentado à sombra, leu}'), T('{leu}')],
        [T(' substantivo'), T('{Isso dito}'), T('{Isso dito, partiu}'), T('{partiu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Quantas orações há em {E disse Jesus: «Vinde a mim»}?'),
    options: [
      T('duas: {Disse Jesus} e a fala {Vinde a mim}'),
      T('uma, porque há só um sujeito'),
      T('três, contando o conectivo {e}'),
      T('quatro, contando {Jesus} e {mim}'),
    ],
    answer: 0,
    hint: T('Conte os verbos conjugados: {disse} e {vinde}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {Caminhando para Ele, saiu}, {caminhando} é:'),
      options: [
        T('oração reduzida, porque não tem verbo conjugado próprio'),
        T('verbo principal, porque vem primeiro'),
        T('sujeito, porque se refere a quem caminha'),
        T('objeto direto de {saiu}'),
      ],
      answer: 0,
      hint: T('Gerúndio e infinitivo não têm pessoa nem número.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a oração à sua espécie.'),
      pairs: [
        { a: T('{Vinde e segui-me}'), b: T('duas coordenadas') },
        { a: T('{porque tu és o Filho}'), b: T('subordinada causal') },
        { a: T('{Vinde a mim}'), b: T('substantiva direta') },
        { a: T('{o barco que vias}'), b: T('adjetiva restritiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Conta-se um verbo por ______, e é assim que se descobre quantas orações há.'),
      answer: 'oração',
      hint: T('Dois verbos, duas orações.'),
    },
  ],
};
