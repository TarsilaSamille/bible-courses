import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Partículas'),
  title: T('Partículas: a mesma palavra com duas formas, e o motivo de isso existir'),
  subtitle: T(
    'Depois de consoante final uma forma, depois de vogal outra — e por baixo dessa regra está a razão de o coreano não ter artigo nem plural',
  ),
  body: C(`## A regra que parece impossível e não é

Toda partícula do coreano tem duas formas, e a escolha entre elas é mecânica: conta a última consoante do nome. {haksang} termina em ng e por isso recebe {i}; {cha} termina em a e por isso recebe {gwa}. São a mesma partícula: a do sujeito. O mesmo vale para {eul} {reul}, do objeto direto, para {eun} {neun}, do tópico, e para {wa}, que faz a conjunção e.

O que o iniciante não enxerga é que {i} e {gwa} não são duas palavras: são uma palavra com duas formas. Um leitor de português ouve duas palavras e conclui que há duas palavras; são a mesma partícula, pronunciada de dois modos.

E a diferença com o português aparece já na escolha. O artigo de português muda com o gênero, que é uma propriedade da coisa. A partícula coreana muda com a última letra escrita do nome, que é uma propriedade do som. Não há gênero em coreano nem há número: um só vale para um e para muitos. Não há artigo nem plural.

## Por que isso existe: a partícula também avisa se o nome tem consoante final

O português resolve tudo isso com artigo, com número e com preposição, e nada disso é escrito no nome: o artigo vai colado, a preposição separada. O coreano fez outra escolha. Não tem artigo, não distingue plural, e por isso a partícula carrega duas informações ao mesmo tempo: qual é a função do nome na frase e se o nome tem ou não consoante final. Por isso a partícula é a chave que torna a frase legível, mais do que a posição das palavras.

O erro típico do iniciante é escrever o nome separado da partícula, como se fossem duas palavras de português. Em coreano é UMA palavra escrita colada: {haksang}-i, o aluno, três letras. O substantivo e a sua partícula formam um único bloco ortográfico, do mesmo jeito que em português ninguém escreve o artigo separado com espaço. Quem escreve {haksang} {i} separado produz uma frase que o ouvinte não reconhece, e a causa é ortográfica, não de vocabulário: falta a regra da colagem.

O mecanismo completo cabe numa frase: conte a última consoante do nome, escolha a forma dura ou a macia, cole no substantivo, escreva tudo junto. Quatro passos, sem exceção e sem gosto.

## Tópico e sujeito: a diferença mais profunda do coreano

{eun} {neun} marca o tópico, aquilo de que a frase comenta; {i} {gwa} aponta para o sujeito gramatical, quem executa o verbo. Um nome pode receber as duas em frases diferentes, e escolher uma em vez da outra muda o sentido, não o estilo. Este é o contraste mais fundo do coreano, e o japonês tem algo muito parecido com {wa} e {ga}.

O exemplo mínimo mostra a diferença sem ruído. Em "eu sou aluno" o pronome {nan} com {eun} dá {nan-eun haksang-imnida}, quanto a mim, sou aluno: eu é o assunto comentado, e o aluno é o que se diz desse assunto. Trocando para {na} com {gwa}, o mesmo substantivo, eu vira o foco da asserção: a pergunta implícita passa a ser o que eu sou, e não o que se está falando de mim. Nada mudou de posição no texto; mudou a partícula.

É por isso que "eu sou aluno" em coreano não é a frase que o português sugere. O português só tem uma forma para dizer, e ela é ambígua entre assunto e sujeito; o coreano é obrigado a escolher, e a escolha é informação.

## Objeto, indireto e a ordem da frase

{eul} {reul} marca o objeto direto. O objeto indireto tem três partículas que o iniciante confunde o tempo todo porque o português resolve com três preposições diferentes: {eseo} é origem, de onde, "de casa"; {e} é destino, lugar ou tempo, "à escola"; {hante} é destinatário, a alguém, "a um amigo". Quando os dois objetos aparecem, o indireto vem antes do direto.

E a pilha fecha. A ordem é objeto indireto, objeto direto, verbo, sujeito, e as partículas viajam coladas aos nomes, sempre antes do verbo. São elas que declaram a função de cada peça, mesmo quando a posição mente: é o que permite a frase coreana ser objeto, verbo, sujeito e ainda assim ser lida sem ambiguidade.

Três partículas menores aparecem o tempo todo: {hago} faz a conjunção e escrita, {cheoreom} é como, igual a, e {man} restringe, só, apenas. {man} combina com qualquer outra partícula, porque não substitui nenhuma: ele se soma.

O gancho bíblico está na primeira linha de João 1:1, no princípio ERA o Verbo. O substantivo Palavra, {mal}, é sujeito do verbo ser, e em coreano moderno todo sujeito recebe partícula: {mal}-i, a Palavra, por exemplo em {mal}-i-seo. A tradução coreana de 1917, a primeira em coreano, é escrita quase toda em hanja, e o coreano escrito em hanja do começo não trazia as partículas escritas: a partícula era entendida pela forma do substantivo e pelo contexto, não pelos caracteres. Ou seja, os tradutores de 1917 tiveram de DECIDIR se mostravam ou não as partículas. Cada partícula que aparece hoje nas Bíblias coreanas é uma decisão editorial tomada há mais de um século, e é uma decisão gramatical, não estilística.
`),
  vocab: [
    V('eun', '은', 'tópico depois de palavra com consoante final (eun)'),
    V('neun', '는', 'tópico depois de palavra terminada em vogal (neun)'),
    V('i', '이', 'sujeito depois de palavra com consoante final (i)'),
    V('gwa', '가', 'sujeito depois de palavra terminada em vogal (gwa)'),
    V('eul', '을', 'objeto direto depois de palavra com consoante final (eul)'),
    V('reul', '를', 'objeto direto depois de palavra terminada em vogal (reul)'),
    V('wa', '와', 'e; junto com (wa)'),
    V('hago', '하고', 'e; junto com (hago)'),
    V('e', '에', 'destino, lugar ou tempo (e)'),
    V('eseo', '에서', 'origem; de; a partir de (eseo)'),
    V('hante', '한테', 'a alguém; destinatário (hante)'),
    V('cheoreom', '처럼', 'como; igual a (cheoreom)'),
    V('man', '만', 'só; apenas (man)'),
    V('haksang', '학생', 'aluno; estudante (haksang)'),
    V('nan', '나', 'eu; a primeira pessoa, forma de tópico (nan)'),
    V('na', '나', 'eu; a primeira pessoa, forma de sujeito (na)'),
    V('mal', '말', 'palavra (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda partícula tem duas formas e a escolha é mecânica: conta a última consoante do nome. Palavra com consoante final recebe a forma dura, palavra terminada em vogal recebe a forma macia. Nunca por gosto.',
      ),
    },
    {
      n: '2',
      text: T(
        'O substantivo e a partícula escrevem-se juntos: {haksang}-i é uma palavra, o aluno. Escrever separados é erro de ortografia, não de vocabulário.',
      ),
    },
    {
      n: '3',
      text: T(
        'O coreano não tem artigo nem distingue plural. Por isso a partícula faz duas coisas ao mesmo tempo: declara a função do nome e diz se ele tem consoante final.',
      ),
    },
    {
      n: '4',
      text: T(
        '{eun} {neun} é tópico, aquilo que se comenta; {i} {gwa} é sujeito, quem executa o verbo. Trocar as duas muda o sentido da frase, não o estilo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{eul} {reul} é objeto direto; {eseo} é origem, {e} é destino, lugar ou tempo e {hante} é destinatário. O indireto vem antes do direto, e toda partícula fica antes do verbo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Uma partícula, não duas palavras'),
      text: T(
        'O iniciante ouve {i} e {gwa} como duas palavras e não entende o idioma. São a mesma palavra com duas formas, como o artigo português tem duas — mas a escolha no coreano é fonética, feita pela última letra do nome, e não de gênero.',
      ),
    },
    {
      label: T('A Bíblia coreana de 1917 e as partículas'),
      text: T(
        'A tradução coreana de 1917 é quase toda hanja, e o coreano em hanja do começo não escrevia as partículas: elas eram recoveridas da forma do substantivo e do contexto. Os tradutores tiveram de decidir se as mostravam, e cada partícula que aparece hoje nas Bíblias coreanas é essa decisão, que é gramatical e não estilística.',
      ),
    },
  ],
  examples: [
    { text: '학생이', gloss: T('haksang-i — o aluno (sujeito após consoante ng: i)') },
    { text: '말이', gloss: T('mal-i — a Palavra (sujeito após consoante l: i)') },
    { text: '말을', gloss: T('mal-eul — a Palavra (objeto direto após consoante l: eul)') },
    { text: '친구한테', gloss: T('chin-gu-han-te — a um amigo (destinatário: hante)') },
    { text: '집에서', gloss: T('jib-e-seo — de casa (origem: eseo)') },
  ],
  tables: [
    {
      caption: T('A partícula muda com a última consoante do nome'),
      head: [
        T('Nome (romanização)'),
        T('Última letra'),
        T('Tem consoante final'),
        T('Tópico'),
        T('Sujeito'),
        T('Objeto direto'),
        T('E'),
      ],
      rows: [
        [T('haksang'), T('ng'), T('sim'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('sarang'), T('ng'), T('sim'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('mul'), T('l'), T('sim'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('guk'), T('k'), T('sim'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('nan'), T('n'), T('sim'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('cha'), T('a'), T('não'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
        [T('uri'), T('i'), T('não'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
      ],
    },
    {
      caption: T('O que cada partícula aponta, e o que o português faz no lugar dela'),
      head: [
        T('Caso'),
        T('Partícula'),
        T('Para que aponta'),
        T('O que o português faz no lugar dela'),
      ],
      rows: [
        [
          T('Quem executa o verbo'),
          T('{i} {gwa}'),
          T('o sujeito gramatical'),
          T('nada: o português não marca o sujeito'),
        ],
        [
          T('Assunto já conhecido'),
          T('{eun} {neun}'),
          T('aquilo que se comenta'),
          T('também nada: o português não distingue assunto de sujeito'),
        ],
        [
          T('Destino, lugar, tempo'),
          T('{e}'),
          T('para onde, onde, quando'),
          T('a preposição a, em, para'),
        ],
        [T('Origem'), T('{eseo}'), T('de onde, a partir de'), T('a preposição de, desde')],
        [T('Destinatário'), T('{hante}'), T('a quem se dirige a ação'), T('a preposição a')],
        [
          T('Alvo direto'),
          T('{eul} {reul}'),
          T('o objeto direto'),
          T('nada: o substantivo objeto não recebe marca alguma'),
        ],
      ],
    },
    {
      caption: T('A ordem fixa que amarra a lição 1'),
      head: [T('Passo'), T('O que aparece'), T('Que partícula marca'), T('O que o texto faz')],
      rows: [
        [
          T('1'),
          T('objeto indireto'),
          T('{eseo} {hante} {e}'),
          T('diz de onde, a quem, para onde'),
        ],
        [T('2'), T('objeto direto'), T('{eul} {reul}'), T('diz o que a ação alcança')],
        [T('3'), T('verbo'), T('nenhuma'), T('diz o que acontece')],
        [T('4'), T('sujeito'), T('{i} {gwa}'), T('diz quem executa a ação')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('A palavra cha termina em vogal. Qual partícula de sujeito ela recebe?'),
    options: [T('{gwa}'), T('{i}'), T('{eul}'), T('{wa}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "a Palavra" como sujeito, depois de uma consoante final (l): 말____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao caso que ela marca'),
      pairs: [
        { a: T('{i} {gwa}'), b: T('sujeito: quem executa o verbo') },
        { a: T('{eun} {neun}'), b: T('tópico: aquilo que se comenta') },
        { a: T('{eul} {reul}'), b: T('objeto direto: o alvo da ação') },
        { a: T('{eseo}'), b: T('origem: de onde') },
        { a: T('{hante}'), b: T('destinatário: a quem') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em "quanto a mim, sou aluno", o pronome eu é assunto comentado, não sujeito gramatical. Qual partícula ele recebe?',
      ),
      options: [T('{eun}'), T('{i}'), T('{eul}'), T('{eseo}')],
      answer: 0,
    },
  ],
};
