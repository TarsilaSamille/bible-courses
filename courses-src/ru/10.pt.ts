import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Os casos'),
  title: T('Animado e inanimado'),
  subtitle: T('Бога e стол: duas palavras, uma diferença de flexão que o verbo denuncia'),
  body: C(`
## Animado é vivo, e isso muda a forma

Animado é o que está vivo: pessoa, animal, e por extensão uma figura que o costume trata como pessoa. Inanimado é o resto: mesa, livro, luz, uma ideia. A distinção parece semântica e é morfológica, e ela aparece em dois lugares do paradigma: no acusativo do masculino singular e no plural.

O caso mais visível é o acusativo do masculino singular. Num substantivo masculino inanimado, acusativo e nominativo têm a mesma forma: вижу стол é o que eu vejo, e вижу стола é de quem é o dono da mesa. As duas frases têm a mesma palavra e verbos diferentes. Num masculino animado, o acusativo toma a forma do genitivo: вижу Бога, com o генitivo de Deus. As letras são as mesmas no primeiro par e diferentes no segundo, e a animacidade é o que as separa.

Nos outros gêneros nada disso acontece. O feminino tem forma própria de acusativo em -у e em -а, seja animal ou não: собака, вода, душа. O neutro tem nominativo e acusativo sempre iguais: слово, окно. A única categoria em que a animacidade muda alguma coisa é o masculino singular, e é por isso que ela é decorada como se fosse um caso.

## O plural inverte a regra

No plural, a situação é outra, e o padrão é limpo: **o acusativo do plural animado é igual ao genitivo plural**, e **o acusativo do plural inanimado é igual ao nominativo plural**.

вижу собак é acusativo plural, e tem a forma do genitivo. вижу людей é a mesma coisa com gente. вижу столы é acusativo plural inanimado, e tem a forma do nominativo. вижу окна é o mesmo com janelas, e é também a forma do genitivo, o que é outra coincidência que não atrapalha ninguém.

O resumo cabe numa frase: no plural, o caso do substantivo masculino animado é invisível porque o acusativo copiou o genitivo. Quem traduz ganha ou perde aqui, e o que se perde é a distinção entre um verbo que tem dois objetos e um verbo que tem um.

## As exceções que ninguém adivinha

A primeira é человек, e é a mais importante. Homem é masculino animado, e no singular funciona como você espera: Я вижу человека, com acusativo igual ao genitivo. Mas no plural, o acusativo de homem é **человек**, não людей. Isso vale dentro de uma contagem: Я вижу пяти человек? Não: Я вижу пять человек, e o substantivo fica no nominativo porque o acusativo plural de humano não se distingue. É o único substantivo do russo com esse comportamento, e é o mais comum depois de день.

A segunda é кукла. Uma boneca tem rosto e mãos, e é inanimada: Я вижу куклу, com o -у do acusativo feminino. O mesmo vale para робот. O critério é o que a línguafee considera vivo, e uma coisa que se parece com uma pessoa não é uma pessoa.

A terceira é мертвец. Um cadáver está morto e é animado: Я вижу мертвеца. A palavra define o gênero e a animacidade ao mesmo tempo, e é por isso que ela é usada nos exercícios.

E há o caso inverso, mais raro e mais produtivo: посол, ambassador, e судья, juiz, são masculino animado e levam o sinal -л ou -ья justamente para isso.NOMINATIVO посол, ACUSATIVO посла. São as duas palavras mais longas do russo com -л que não são particípios.

## O gancho: quem é o sujeito em João 1:29

**На другой день видит Иоанн идущего к нему Иисуса и говорит: вот Агнец Божий, Который берёт на Себя грех мира.** Um leitor procura o objeto de берёт e encontra Который. Se Который fosse objeto, seria Которого: masculino animado em acusativo é genitivo. O texto traz Который, que é nominativo, e portanto Который é o sujeito.

O objeto está em грех, que é masculino inanimado, e por isso o acusativo dele é o nominativo: grepха грех, sem marca nenhuma. Um verso, dois substantivos, e a animacidade de cada um é o que distribui o sujeito e o objeto. Quem não souber a regra lê Который como objeto e chega ao sentido invertido sem perceber onde errou.
`),
  vocab: [
    V('собака', 'собака', 'cão; feminino'),
    V('стол', 'стол', 'mesa; masculino inanimado'),
    V('Бога', 'бог', 'a Deus; acusativo de masculino animado'),
    V('людей', 'человек', 'gente; genitivo e acusativo plural'),
    V('человек', 'человек', 'ser humano; a única exceção no plural'),
    V('пять человек', 'человек', 'cinco pessoas; substantivo no nominativo'),
    V('кукла', 'кукла', 'boneca; feminino apesar de ter forma de gente'),
    V('робот', 'робот', 'robô; inanimado'),
    V('мертвец', 'мертвец', 'cadáver; masculino animado'),
    V('посол', 'посол', 'embaixador; masculino animado em -л'),
    V('судья', 'судья', 'juiz; masculino animado em -ья'),
    V('Агнец', 'агнец', 'o Cordeiro; masculino'),
    V('Который', 'который', 'o qual; nominativo masculino'),
    V('грех', 'грех', 'pecado; masculino inanimado'),
    V('вижу собак', 'собака', ' vejo cães; acusativo igual ao genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em вижу Бога, Бога está em que caso?'),
    options: [T('Acusativo, porque é masculino'), T('Genitivo, não acusativo'), T('Nominativo')],
    answer: 1,
    hint: T(
      'Masculino animado tem acusativo igual ao genitivo. Бога é a forma do genitivo de бог.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (o cachorro)'), answer: 'собаку' },
    {
      kind: 'choose',
      prompt: T('Em Я вижу пять ___, o substantivo está no...'),
      options: [T('genitivo plural'), T('nominativo'), T('acusativo plural')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (o Ambassador)'), answer: 'посла' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No masculino singular, o acusativo do animado é o genitivo: {вижу Бога}. No inanimado, é o nominativo: {вижу стол}.',
      ),
    },
    {
      n: '2',
      text: T(
        'No plural, o acusativo do animado é o genitivo plural ({вижу собак}) e o do inanimado é o nominativo plural ({вижу столы}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Nos outros gêneros a animacidade não muda nada: o feminino tem -{у} de acusativo e o neutro tem acusativo igual ao nominativo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{человек} é a exceção: no plural o acusativo é {человеку} igual ao nominativo, e aparece em contagens ({пять} {человек}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Кукла} e {робот} são inanimados; {мертвец}, {посол} e {судья} são animados. O critério é o que a língua considera vivo, não a aparência.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que só o masculino singular'),
      text: T(
        'A regra parece arbitrária porque ela é resultado de duas decisões independentes. O feminino já tinha um sinal de acusativo próprio, o -у, e o neutro já tinha a mesma forma no nominativo e no acusativo. Só o masculino não tinha nada, e foi aí que a animacidade entrou para dar um sinal. É por isso que ela só aparece ali.',
      ),
    },
    {
      label: T('A exceção que trava a tradução'),
      text: T(
        'Пять человек é um contador de gente: o substantivo vai ao nominativo plural e o numeral.cmd é que marca o caso por posição. Uma tradução para uma língua com artigo tem de decidir se escreve cinco pessoas ou cinco pessoa, e essa decisão é do tradutor, não do texto. Quem lêajo lado do grego encontra o mesmo phenomenon no genitivo grego, e o mesmo impasse.',
      ),
    },
  ],
  examples: [
    {
      text: 'вижу стол',
      gloss: T('vejo a mesa; masculino inanimado, acusativo igual ao nominativo'),
    },
    { text: 'вижу Бога', gloss: T('vejo Deus; masculino animado, acusativo igual ao genitivo') },
    { text: 'вижу собаку', gloss: T('vejo o cão; feminino, o -у é o acusativo') },
    { text: 'вижу слово', gloss: T('vejo a palavra; neutro, acusativo igual ao nominativo') },
    { text: 'вижу собак', gloss: T('vejo cães; acusativo plural animado, igual ao genitivo') },
    { text: 'вижу столы', gloss: T('vejo mesas; acusativo plural inanimado, igual ao nominativo') },
    {
      text: 'Я вижу пять человек',
      gloss: T('vejo cinco pessoas; o substantivo fica no nominativo'),
    },
    { text: 'Я вижу посла', gloss: T('vejo o embaixador; masculino animado em -л') },
    { text: 'Я вижу куклу', gloss: T('vejo a boneca; inanimada apesar da aparência') },
    {
      text: 'вот Агнец Божий, Который берёт на Себя грех мира',
      gloss: T('eis o Cordeiro de Deus, que tira o pecado do mundo (Jo 1:29)'),
    },
  ],
  tables: [
    {
      caption: T('Os três casos que se confundem no masculino singular'),
      head: [
        T('Substantivo'),
        T('Gênero e animacidade'),
        T('Nominativo'),
        T('Genitivo'),
        T('Acusativo'),
      ],
      rows: [
        [T('стол, mesa'), T('masculino inanimado'), T('стол'), T('стола'), T('стол')],
        [T('Бог, Deus'), T('masculino animado'), T('Бог'), T('Бога'), T('Бога')],
        [T('посол, embaixador'), T('masculino animado em -л'), T('посол'), T('посола'), T('посла')],
        [T('собака, cão'), T('feminino'), T('собака'), T('собаки'), T('собаку')],
        [T('вода, água'), T('feminino'), T('вода'), T('воды'), T('воду')],
        [T('слово, palavra'), T('neutro'), T('слово'), T('слова'), T('слово')],
        [T('окно, janela'), T('neutro'), T('окно'), T('окна'), T('окно')],
      ],
    },
    {
      caption: T('O plural, que inverte a regra'),
      head: [
        T('Substantivo'),
        T('Nominativo plural'),
        T('Genitivo plural'),
        T('Acusativo plural'),
        T('Qual dos dois?'),
      ],
      rows: [
        [T('стол'), T('столы'), T('столов'), T('столы'), T('o nominativo, porque é inanimado')],
        [T('собака'), T('собаки'), T('собак'), T('собак'), T('o genitivo, porque é animada')],
        [
          T('окно'),
          T('окна'),
          T('окон'),
          T('окна'),
          T('o nominativo, e o genitivo não se distingue'),
        ],
        [T('слово'), T('слова'), T('слов'), T('слова'), T('o nominativo')],
        [T('человек'), T('люди'), T('людей'), T('человек'), T('a exceção: o nominativo')],
      ],
    },
    {
      caption: T('Quem é animado e quem não é'),
      head: [T('Animado'), T('Inanimado')],
      rows: [
        [T('Бог, человек, собака, лошадь, Иисус'), T('стол, книга, слово, свет, дом')],
        [T('посол, судья, мертвец, старец'), T('кукла, робот, идол, манекен')],
        [T('рыба, птица, бабочка'), T('камень, дерево, река, звезда')],
      ],
    },
  ],
};
