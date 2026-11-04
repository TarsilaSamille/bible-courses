import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Os artigos definidos'),
  subtitle: T('der, die, das nos quatro casos'),
  section: T('Os artigos'),
  body: C(`O artigo definido alemão não indica apenas um objeto conhecido: ele carrega a informação de caso e, portanto, a função da oração. São três palavras, uma por gênero: der (masculino), die (feminino), das (neutro). Ao plural, todas colapsam em die.

Cada caso tem um sufixo próprio. No nominativo nada muda. No acusativo, o masculino troca -er por -en (der → den) e os demais não mudam. No dativo, todas as formas recebem -e (der → dem, die → der, das → dem). No genitivo, todas recebem -s ou -es, e o substantivo masculino acrescenta -es ou um -n: des Mannes, des Vaters.

É a terminação do artigo que revela a função, e não a ordem das palavras. Em Der Mann sieht das Kind vêem-se um nominativo e um acusativo, mas em Der Mann sieht das Kind liegt a mesma informação; em Das Kind sieht der Mann, o neutro inicial é sujeito.

Depois de uma preposição, o substantivo pode aparecer sem artigo: nach Berlin, bei Maria, zu Hause. Nesse caso o caso vem marcado pela preposição: nach exige dativo, por isso nach dem Mann e nach dem Kind concordam em forma, embora os substantivos sejam de gêneros diferentes.`),
  vocab: [
    V('der', 'der', 'o (masc. nom. sing.)'),
    V('die', 'die', 'a (fem. nom. sing.)'),
    V('das', 'das', 'o (neut. nom. sing.)'),
    V('den', 'der', 'o (masc. acc. sing.)'),
    V('dem', 'der', 'ao (masc./neut. dat. sing.)'),
    V('des', 'der', 'do (masc./neut. gen. sing.)'),
    V('die', 'die', 'os/as (plural, todos os gêneres)'),
    V('den', 'die', 'os/as (plural, acc. e dat.)'),
    V('der Vater', 'Vater', 'o pai'),
    V('die Mutter', 'Mutter', 'a mãe'),
    V('das Kind', 'Kind', 'a criança'),
    V('die Stadt', 'Stadt', 'a cidade'),
    V('das Buch', 'Buch', 'o livro'),
    V('des Mannes', 'Mann', 'do homem (genitivo forte)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Que caso expressa "der Mutter" em Die Mutter des Kindes kommt?'),
    options: [T('Nominativo'), T('Acusativo'), T('Dativo'), T('Genitivo')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo: mit ___ Mann (com o homem)'),
      answer: 'dem',
      hint: T('Toda forma de dativo termina em -e.'),
    },
    {
      kind: 'fill',
      prompt: T('Transforme em plural: das Kind → ___'),
      answer: 'die Kinder',
      hint: T('No plural o artigo é die para todos os gêneres.'),
    },
    {
      kind: 'choose',
      prompt: T('Em Ich sehe den Mann, qual é a função de den?'),
      options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione o artigo à sua função.'),
      pairs: [
        { a: T('des'), b: T('genitivo masculino') },
        { a: T('dem'), b: T('dativo masculino') },
        { a: T('der'), b: T('genitivo feminino') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O nominativo é a única forma que coincide nos três gêneros; por isso a frase mais neutra possível é Das Kind spielt.',
      ),
    },
    {
      n: '2',
      text: T(
        'O dativo marca a pessoa a quem algo é dado, dito ou enviado: Ich gebe dem Mann das Buch.',
      ),
    },
    {
      n: '3',
      text: T(
        'No genitivo, o substantivo masculino normalmente ganha -s ou -es (des Vaters), e o neutro -es (des Kindes); o feminino permanece igual (der Frau).',
      ),
    },
    {
      n: '4',
      text: T(
        'A forma die do plural serve para nominativo e acusativo; por isso a posição do verbo é que desambigua: Die Kinder kommen (nominativo), Ich sehe die Kinder (acusativo).',
      ),
    },
  ],
  notes: [
    {
      label: T('Artigo ou zero'),
      text: T(
        'Opcionalmente, uma Wechselpräposition pode eliminar o artigo: bei dem Arzt → beim Arzt, von dem Meer → vom Meer, zu dem Haus → zum Haus. A fusão em -m revela o dativo e evita a repetição, mas só é possível porque o artigo do dativo já termina em -m.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em 1 João 1:1, Im Anfang war das Wort: o neutro das é nominativo e sujeito, e war é o verbo. O artigo cumpre aqui a mesma função que em grego, mas em alemão o gênero é gramatical, não herdado do grego.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest das Buch.',
      gloss: T('O homem lê o livro (der = nom. masc., das = acc. neut.).'),
    },
    {
      text: 'Das Kind sieht der Mann.',
      gloss: T('O homem vê a criança (o neutro inicial passou a ser sujeito).'),
    },
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('Eu dou o livro ao homem (dativo = pessoa, acusativo = coisa).'),
    },
    { text: 'Die Mutter des Kindes kommt.', gloss: T('A mãe da criança vem (dois genitivos).') },
    {
      text: 'Die Kinder spielen im Garten.',
      gloss: T('As crianças brincam no jardim (im = in dem, dativo por causa de lugar (onde)).'),
    },
    { text: 'Nach Berlin fahren wir.', gloss: T('Vamos para Berlim (destino sem artigo).') },
  ],
  tables: [
    {
      caption: T('Declinação do artigo definido'),
      head: ['Caso', 'masc. sing.', 'fem. sing.', 'neut. sing.', 'plural'],
      rows: [
        ['Nominativo', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Acusativo', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Dativo', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern'],
        ['Genitivo', 'des Mannes', 'der Frau', 'des Kindes', 'der Kinder'],
      ],
    },
    {
      caption: T('Como se lê a informação de caso'),
      head: ['Forma observada', 'Leitura', 'Pergunta que responde'],
      rows: [
        ['der / die / das', 'nominativo', 'quem ou o quê faz a ação?'],
        ['den / die / das', 'acusativo', 'quem ou o quê recebe a ação?'],
        ['dem / der / dem', 'dativo', 'a quem ou para quem?'],
        ['des / der / des', 'genitivo', 'de quem ou de quê?'],
        ['die (plural)', 'nominativo ou acusativo', 'ambos possíveis'],
        ['den (plural)', 'dativo ou acusativo', 'ambos possíveis'],
      ],
    },
  ],
};
