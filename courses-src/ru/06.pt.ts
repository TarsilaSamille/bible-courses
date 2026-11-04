import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('O nome: gênero, número e adjetivo'),
  title: T('Gênero e número'),
  subtitle: T('стол é masculino, вода é feminina, e nada na palavra diz por quê'),
  body: C(`
## O gênero é gramatical, não natural

O gênero russo não segue o sexo nem a natureza. Uma mesa é masculina e uma água é feminina; o sol é neutro e a lua é feminina; uma árvore é neutra e uma montanha é feminina. Nada disso decorre da coisa, e é por isso que o gênero precisa ser aprendido com a palavra, como o acento.

O que o gênero faz é concreto. Ele decide a concordância do adjetivo, a forma do passado, o formato do plural e a terminação de meia dúziaia de casos. Um erro de gênero não é um erro de som: é um erro de flexão que se repete em toda a frase.

A coisa mais importante que se pode dizer sobre o gênero é esta: **no nominativo singular, nenhuma terminação o denuncia.** Não há -а para o feminino e -о para o neutro como há em outras línguas eslavônicas. Você não descobre o gênero lendo o substantivo, e sim pelo adjetivo que vem com ele, ou pelo dicionário.

## O teste está no adjetivo

O teste cabe numa linha. Ponha o adjetivo no nominativo singular: светлый é masculino, светлаa é feminino, светлое é neutro, светлые é plural. O radical é o mesmo nos quatro; só a terminação muda. E a terminação do adjetivo segue o gênero do substantivo, então o adjetivo é o relógio que diz que horas são.

Na prática, o que o leitor faz é o inverso. Ele sabe que a palavra é feminina porque já a viu em uma frase com adjetivo, ou porque o dicionário diz. A partir daí, tudo se deduce: книга é feminina, então plural é книги, passado é читала, instrumental é книгой.

O mesmo caminho vale para o número. Um substantivo neutro tem um só plural, em -а: слово faz слова, окно faz окна. Um feminino tem dois, em -ы depois de consoante dura e em -и depois de mole: книга faz книги, ночь faz ночи. E um masculino tem três: стол faz столы, день faz дни, музей faz музеи.

## O -ь final não diz nada

O sinal mais tentador do nominativo masculino é o -ь, porque ele aparece em uma família enorme de substantivos: день, ключ, меч, врач, муж, дождь. E em uma família igualmente enorme de femininos: мать, дочь, ночь, любовь, печаль, радость, страсть. As duas listas são do mesmo tamanho e nenhuma terminação separa uma da outra.

Depois há os neutros, que são outra armadilha. пламя, время, имя, письмо, золото terminam todos de uma maneira que não corresponde a nada em nenhum dos outros dois gêneros. E os neutros em -о formam uma família à parte: слово, окно, дерево, солнце, тело, слово. O que os reúne é a terminação, e essa é a única pista disponível: um substantivo que termina em -о pode ser neutro, e não há nenhuma autre pista.

Quando o padrão falha de vez, ocasionalmente, a palavra está no dicionário e em nenhum outro lugar. Mas o número de casos em que o padrão funciona é grande o bastante para que ele valha como método: substantivo neutro termina em -о, substantivo feminino termina em -а, e quase sempre é isso.

## O plural denuncia o gênero

Depois de a terminação do singular falhar, a terminação do plural costuma entregar a resposta. Três famílias bastam:

- стол faz столы, com -ы: o original era masculino, porque o masculino duro faz -ы e o neutro faz -а.
- ночь faz ночи, com -и: o original era feminino, porque o feminino mole também faz -и.
- слово faz слова, com -а: o original era neutro, porque só o neutro faz -а.

É esse o truque que resolve a maioria dos casos. E o gancho biblical está em João 1:14, onde os dois gêneros aparecem na mesma oração e nenhum deles denuncia o outro. **И Слово стало плотию, и обитало с нами, полное благодати и истины.** Слово é neutro, e é por isso que o passado é стало e não стал. Плотию é instrumental, e plоть é feminino. São duas palavras de raiz biblica, na mesma frase, com gêneros que não se parecem em nada, e a única pista para cada uma está na palavra vizinha: полное é neutro e concorda com Слово, e o substantivo que rege благодати é feminino sem que nada o diga.`),
  vocab: [
    V('воды', 'вода', 'da água; genitivo singular'),
    V('стол', 'стол', 'mesa; masculino'),
    V('окно', 'окно', 'janela; neutro'),
    V('дерево', 'дерево', 'árvore; neutro'),
    V('солнце', 'солнце', 'sol; neutro'),
    V('мать', 'мать', 'mãe; feminino, com -ь final'),
    V('страсть', 'страсть', 'paixão; feminino, com -ь final'),
    V('день', 'день', 'dia; masculino, com -ь final'),
    V('ключ', 'ключ', 'chave; masculino'),
    V('ночь', 'ночь', 'noite; feminino'),
    V('любовь', 'любовь', 'amor; feminino'),
    V('пламя', 'пламя', 'chama; neutro'),
    V('письмо', 'письмо', 'carta; neutro'),
    V('слово', 'слово', 'palavra; neutro'),
    V('книга', 'книга', 'livro; feminino'),
    V('музей', 'музей', 'museu; masculino em -й'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O gênero é gramatical: {стол} é masculino, {вода} é feminina, {окно} é neutro. O sexo da coisa não entra.',
      ),
    },
    {
      n: '2',
      text: T(
        'O teste do gênero é a forma do adjetivo no nominativo singular: {светлый}, {светлая}, {светлое}, {светлые}.',
      ),
    },
    {
      n: '3',
      text: T(
        'O -{ь} final não diz nada: {мать}, {страсть} e {ночь} são femininas; {день}, {ключ} e {муж} são masculinos.',
      ),
    },
    {
      n: '4',
      text: T(
        'No nominativo singular nenhuma terminação denuncia o gênero. O plural denuncia: -{ы} é masculino duro, -{а} é neutro, -{и} é feminino mole ou masculino mole.',
      ),
    },
    {
      n: '5',
      text: T(
        'Um substantivo neutro faz um só plural, em -{а}: {слово} faz {слова}, {окно} faz {окна}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O truque do plural'),
      text: T(
        'Se você não sabe o gênero de uma palavra, faça o plural mentalmente. Male duro em -ы, neutro em -а, feminino mole em -и. Ночь faz ночи, e portanto é feminina; стол faz столы, e portanto é masculino; слово faz слова, e portanto é neutro. O truque falha quando o substantivo já é plural, e é por isso que ele é um truque e não uma regra.',
      ),
    },
    {
      label: T('A palavra que ninguém deduz'),
      text: T(
        'A grande maioria dos neutros em -о é previsível: слово, окно, дерево, тело, слово. Mas пламя, время, имя e письмо não se parecem com nada, e a terminação do plural é igual em todos os casos. Essas precisam de dicionário. Nenhum idioma tem um caminho mais curto.',
      ),
    },
  ],
  examples: [
    { text: 'стол', gloss: T('mesa; masculino duro, o plural é столы') },
    { text: 'воды', gloss: T('da água; genitivo singular do feminino') },
    { text: 'окно', gloss: T('janela; neutro, faz окна') },
    { text: 'мать', gloss: T('mãe; feminino com -ь final') },
    { text: 'день', gloss: T('dia; masculino com -ь final') },
    { text: 'страсть', gloss: T('paixão; feminino com -ь final') },
    { text: 'любовь', gloss: T('amor; feminino, faz любви') },
    { text: 'пламя', gloss: T('chama; neutro, faz пламени') },
    { text: 'музей', gloss: T('museu; masculino em -й, faz музеи') },
    {
      text: 'И Слово стало плотию',
      gloss: T('E o Verbo se fez carne (Jo 1:14); Слово é neutro, por isso стало e não стал'),
    },
  ],
  tables: [
    {
      caption: T('O gênero pela forma do adjetivo'),
      head: [T('Substantivo'), T(' masc.'), T(' fem.'), T(' neutro')],
      rows: [
        [T('слово, palavra'), T('новое слово'), T('—'), T('новое слово')],
        [T('вода, água'), T('—'), T('чистая вода'), T('—')],
        [T('окно, janela'), T('—'), T('—'), T('чистое окно')],
      ],
    },
    {
      caption: T('O -ь final não denuncia nada'),
      head: [T('Grupo'), T('Exemplos')],
      rows: [
        [T('femininos em -ь'), T('мать, страсть, ночь, любовь, печаль, радость')],
        [T('masculinos em -ь'), T('день, ключ, меч, врач, муж, дождь')],
        [T('neutros sem padrão'), T('пламя, время, имя, письмо, золото')],
        [T('neutros em -о'), T('слово, окно, дерево, тело, солнце')],
      ],
    },
    {
      caption: T('O plural como pista de gênero'),
      head: [T('Singular'), T('Plural'), T('Terminação'), T('Gênero que denuncia')],
      rows: [
        [T('стол'), T('столы'), T('-ы'), T('masculino duro')],
        [T('книга'), T('книги'), T('-и'), T('feminino mole')],
        [T('ночь'), T('ночи'), T('-и'), T('feminino mole')],
        [T('день'), T('дни'), T('-и'), T('masculino mole')],
        [T('музей'), T('музеи'), T('-и'), T('masculino em -й')],
        [T('слуга'), T('слуги'), T('-и'), T('masculino em -а')],
        [T('слово'), T('слова'), T('-а'), T('neutro')],
        [T('окно'), T('окна'), T('-а'), T('neutro')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra é neutra?'),
    options: [T('вода'), T('окно'), T('ключ')],
    answer: 1,
    hint: T(
      'Água é feminino e chave é masculino. Só a janela faz окна, com a terminação do neutro.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o plural: слово faz ___'), answer: 'слова' },
    {
      kind: 'choose',
      prompt: T('мать, страсть, ночь e день têm em comum...'),
      options: [T('o -ь final'), T('o plural em -и'), T('o gênero feminino')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete o passado: И Слово ___ плотию (Jo 1:14)'),
      answer: 'стало',
    },
  ],
};
