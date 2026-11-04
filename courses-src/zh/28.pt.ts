import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Verbo'),
  title: T('Advérbios: a classe aberta, {shèn} e o {-地} que vira substantivo'),
  subtitle: T(
    'O Mandarin cria advérbios à vontade, e o caractere que os faz é o mesmo que nomeia o chão',
  ),
  body: C(`
## Uma classe que não fecha

Substantivo, verbo, adjetivo e advérbio são as quatro classes abertas da língua: o Mandarin cria palavra nova nelas quando precisa, e a conta não fecha. As demais classes são curtas e contáveis, e é por isso que elas viram tabela. O advérbio está do lado aberto, e a prova é que metade dos advérbios do texto bíblico é uma sílaba só, colada a um adjetivo ou a um verbo.

O advérbio entra em duas posições e só duas. Antes do adjetivo, é grau: {hěn} {lěng}, {tài} {guì}, {zuì} {hǎo}. Antes do verbo, é tempo ou aspecto: {wèi} {lái}, {yǐ} {qù}, {huò} {shì} {huò}. E há uma terceira posição, a de depois do verbo, que existe para uma coisa só.

**O advérbio entra antes do verbo ou do adjetivo. A {de} de modo é a única que entra depois.**

## {-地}: o mesmo som, três papéis

O Mandarin tem duas peças que soam igual e não são a mesma peça — a partícula de posse e o advérbio de modo. A primeira se escreve {de}, com o caractere que significa "alvo", e o segundo se escreve {dì}, com o caractere que significa "lugar". A romanização apaga a diferença, e é por isso que qualquer explicação de advérbio em Mandarin parece mais complicada do que é: há duas peças, e a escrita diz qual é qual.

**O {dì} de modo faz o mesmo trabalho que a partícula de posse e ocupa a mesma casa.** Depois do verbo ou do adjetivo, o {dì}, e o complemento. {zǒu} {de} {kuài}, {dào} {de} {zhí}, {gōng} {zuò} {de} {hǎo}. O que muda é o que o complemento é: um advérbio no primeiro caso, um substantivo no segundo. Sem {dì} depois do verbo a frase está errada, e {zǒu kuài} não é Mandarin.

O segundo papel é o mais surpreendente e o mais útil. O mesmo {dì} transforma verbo ou adjetivo em substantivo, sem nada mudar de posição: {xīndì} é "o lugar do coração", isto é, o coração; {jìngdì} é "o lugar do silêncio", ou seja, a mente; {fúdì} é "lugar de felicidade". Quem encontra {xīndì} num livro e traduz "localização do coração" leu três palavras onde havia uma.

O terceiro papel é o substantivo de sempre: {dì} é a terra, o chão, o lugar. {quán dì} é "toda a terra", {dìfāng} é "lugar", {tiāndì} é "céu e terra". Os três convivem no mesmo caractere, e o que os separa é a posição: depois de um verbo ou de um adjetivo é marca de advérbio ou nome de ação; sozinho ou antes de outro substantivo é o chão.

## Advérbios de uma sílaba no texto antigo

O Mandarin falado usa {hěn}, {tài} e {zuì}, e a {和合本} quase não usa nenhum dos três: o tradutor bilíngue de 1919 traduzia para o Mandarin escrito, e o Mandarin escrito tem outros advérbios de grau. **O "muito" dele é {shèn}, o "bastante" é {pō} e o "extremamente" é {jí}.** Os três são uma sílaba, e nenhum deles é derivado de nada: não há verbo dentro, não há substantivo dentro.

Os advérbios temporais são o mesmo caso. {wèi} é "ainda não", {yǐ} é "já", e ambos vêm colados ao verbo: {wèi} {dào}, {yǐ} {jīng}. Os dois se combinam com a negação: {bù} {wèi} {lái} é o "ainda não", {bù} {yǐ} {qù} é o "já não", e quem monta a frase sem eles perde a informação.

O terceiro grupo é o que só aparece em texto escrito: {yì}, "também", e {fù}, "de novo", irmãos de {yě} e {zài} da fala. E {huò}, que pode ser "talvez" ou "ou", conforme o que vem depois. São eles que fazem o texto antigo soar antigo, e nenhum deles aparece numa conversa.

## O que o texto bíblico faz sem advérbio

O achado prático é que a {和合本} quase não usa o {-地} derivado. Onde o verbo já diz como, o advérbio é desnecessário, e o tradutor bilíngue sabia disso. Isaías 6:3 escreve {wàn jūn zhī Yēhéhuá chōngmǎn quán dì}: "o Senhor dos exércitos enche toda a terra", com o verbo {chōngmǎn}, "encher", e nenhum advérbio de modo, porque o verbo já contém o seu.

O que ele usa são os advérbios de grau do registro escrito e os quantificadores, que não são advérbios e fazem o mesmo trabalho. Salmo 19:1 abre com {zhū tiān shùshuō Shén de róngyào}: {zhū} é "todos os", o mesmo trabalho que fazem {fán} e {xián}, e nenhuma numeral entra na frase. Provérbios 14:23 traz {fán} e {bì}: "todo o que se esforça e carrega peso terá de que comer", e o advérbio é {bì}, "certamente", uma sílaba colada ao verbo {yǒu}.

A lição de leitura vale para os Salmos inteiros: quando o tradutor antigo escreve um advérbio de grau, está vertendo um intensifyador do hebraico e não acrescentando escudo retórico. Reconhecer a palavra como advérbio, e não como substantivo nem como verbo, é o que deixa a frase em português com a força certa.`),
  vocab: [
    V('shèn', '甚', 'muito, muito mais; advérbio de grau do Mandarin escrito (shèn)'),
    V('pō', '颇', 'bastante; advérbio de grau do Mandarin escrito (pō)'),
    V('jí', '极', 'extremamente; advérbio de grau (jí)'),
    V('yì', '亦', 'também; advérbio do Mandarin escrito, irmão de yě (yì)'),
    V('fù', '复', 'de novo, outra vez; Mandarin escrito (fù)'),
    V('huò', '或', 'talvez, ou; advérbio de dubitação (huò)'),
    V('wèi', '未', 'ainda não; advérbio temporal (wèi)'),
    V('yǐ', '已', 'já; advérbio temporal (yǐ)'),
    V('bì', '必', 'certamente; advérbio de necessidade (bì)'),
    V('xián', '咸', 'todos, cada um; quantificador do Mandarin escrito (xián)'),
    V('zhū', '诸', 'todos os; quantificador plural do Mandarin escrito (zhū)'),
    V('dì (modo)', '地', 'marca de advérbio de modo; o mesmo som da partícula de posse (dì)'),
    V('dì (nominalizador)', '地', 'transforma verbo ou adjetivo em substantivo (dì)'),
    V('dì (lugar)', '地', 'terra, chão, lugar; o substantivo de sempre (dì)'),
    V('xīndì', '心地', 'o coração; literalmente "lugar do coração" (xīndì)'),
    V('jìngdì', '境地', 'a mente, o estado de espírito; "lugar do silêncio" (jìngdì)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio entra antes do verbo ou do adjetivo. A {de} de modo é a única que entra depois.',
      ),
    },
    {
      n: '2',
      text: T(
        'A partícula de posse se escreve {de} e o advérbio de modo se escreve {dì}: o mesmo som, caracteres diferentes.',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de um verbo ou de um adjetivo, {dì} faz advérbio de modo ou nome de ação; sozinho, é a terra.',
      ),
    },
    {
      n: '4',
      text: T(
        '{shèn}, {pō} e {jí} são os advérbios de grau do Mandarin escrito, no lugar de {hěn}, {tài} e {zuì} da fala.',
      ),
    },
    { n: '5', text: T('{wèi} e {yǐ} são temporais e vêm colados ao verbo: {wèi dào}, {yǐ jīng}.') },
  ],
  notes: [
    {
      label: T('O {-地} que o texto antigo não usa'),
      text: T(
        'O derivador {-地} é produtivo na fala e quase ausente na {和合本}. A razão não é falta de meios: é registro. O tradutor bilíngue de 1919 vertia hebraico em Mandarin escrito, e nesse registro o verbo {chōngmǎn} já contém o seu advérbio. Onde o grego põe um particípio, o Mandarin escreve um verbo e nada mais.',
      ),
    },
    {
      label: T('Quantificadores que não são numeral'),
      text: T(
        '{zhū}, {xián}, {fán} e {jiē} dizem "todos" sem numeral nenhum: não há {yī}, nem {liǎng}, nem classificador. São a alternativa do Mandarin escrito à locução numeral, e aparecem onde o hebraico tem um plural que não é número.',
      ),
    },
  ],
  examples: [
    { text: '慢慢地走', gloss: T('mànmàn de zǒu — caminhar devagar: {dì} de modo') },
    {
      text: '心地',
      gloss: T('xīndì — o coração; literalmente "lugar do coração", com {dì} nominalizador'),
    },
    {
      text: '萬軍之耶和華充滿全地',
      gloss: T(
        'wàn jūn zhī Yēhéhuá chōngmǎn quán dì — o Senhor dos exércitos enche toda a terra (Isa 6:3): nenhum advérbio de modo',
      ),
    },
    {
      text: '諸天述說神的榮耀',
      gloss: T(
        'zhū tiān shùshuō Shén de róngyào — os céus contam a glória de Deus (Sl 19:1): {zhū} é "todos os"',
      ),
    },
    { text: '必', gloss: T('bì — de certeza, necessariamente: advérbio colado ao verbo {yǒu}') },
    { text: '尚', gloss: T('shàng — ainda; advérbio do Mandarin escrito, irmão de {hái} da fala') },
    {
      text: '境',
      gloss: T('jìng — limite, território; em {jìngdì} significa "estado de espírito", não lugar'),
    },
  ],
  tables: [
    {
      caption: T('Um caractere, três papéis'),
      head: [T('Papel'), T('O que faz'), T('Exemplo'), T('Glosa')],
      rows: [
        [
          T('advérbio de modo'),
          T('diz como o verbo acontece'),
          T('{zǒu} {de} {kuài}'),
          T('corre rápido'),
        ],
        [
          T('nome de ação'),
          T('transforma verbo ou adjetivo em substantivo'),
          T('{xīndì}, {jìngdì}'),
          T('o coração; a mente'),
        ],
        [T('substantivo'), T('nomeia a terra e o lugar'), T('{quán} {dì}'), T('toda a terra')],
      ],
    },
    {
      caption: T('Advérbios de grau: os da fala e os do texto'),
      head: [T('Advérbio'), T('Registro'), T('Entra'), T('Exemplo')],
      rows: [
        [T('{hěn}'), T('fala'), T('antes do adjetivo'), T('{hěn} {lěng}')],
        [T('{tài}'), T('fala e escrita'), T('antes do adjetivo'), T('{tài} {guì le}')],
        [T('{zuì}'), T('fala e escrita'), T('antes do adjetivo'), T('{zuì} {hǎo}')],
        [T('{shèn}'), T('escrito'), T('antes do adjetivo ou do verbo'), T('{shèn} {cháng}')],
        [T('{pō}'), T('escrito'), T('antes do adjetivo'), T('{pō} {wēn}')],
        [T('{jí}'), T('escrito'), T('antes do adjetivo'), T('{jí} {zhòng}')],
      ],
    },
    {
      caption: T('Quantificadores que dispensam o numeral'),
      head: [T('Palavra'), T('Significado'), T('Exemplo')],
      rows: [
        [T('{zhū}'), T('todos os, com plural'), T('{zhū} {tiān} todos os os céus')],
        [T('{xián}'), T('todos, sem plural'), T('{xián} {wú} {liǎngzhǎng}')],
        [T('{fán}'), T('todo, todo o que'), T('{fán} {yǒu} {xuèqì de rén}')],
        [T('{jiē}'), T('todos, fecha o par com {fán}'), T('{fán} … {jiē}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {心地}, o que está fazendo o {dì}?'),
    options: [
      T('transforma o substantivo {xīn} em nome de lugar: "o lugar do coração"'),
      T('marca o advérbio de modo depois do verbo'),
      T('indica que o substantivo é possessivo'),
      T('marca a negação do verbo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete com o advérbio de grau do Mandarin escrito: 我____想他, sinto muita falta dele',
      ),
      answer: '甚',
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao que ele é'),
      pairs: [
        { a: T('{shèn}'), b: T('grau do Mandarin escrito') },
        { a: T('{wèi}'), b: T('temporal: ainda não') },
        { a: T('{bì}'), b: T('necessidade: certamente') },
        { a: T('{dì}'), b: T('transforma verbo ou adjetivo em substantivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {萬軍之耶和華充滿全地}, onde está o advérbio de modo?'),
      options: [
        T('não existe: o verbo {chōngmǎn} já diz como'),
        T('está no {quán}, antes do substantivo'),
        T('está no {wàn}, antes do numeral'),
        T('está depois de {chōngmǎn}'),
      ],
      answer: 0,
    },
  ],
};
