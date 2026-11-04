import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Os artigos indefinidos e kein'),
  subtitle: T('ein, eine e kein'),
  section: T('Os artigos'),
  body: C(`O indefinido alemão tem uma só forma, ein, que se flexiona como o artigo definido. No nominativo ele concorda em gênero: ein Mann, eine Frau, ein Kind. A partir daí, ein assume exatamente as mesmas formas de der: einen (acusativo masculino), einem (dativo), einer (feminino nos casos oblíquos) e einem (neutro).

O que não existe é uma forma plural: ein exige um substantivo contável e singular, porque o substantivo é que traz o plural. Numa frase como Heute ist ein Gewitter, o leitor deduz que se trata de uma única tempestade.

O sistema de negação é uma preciosidade do alemão. Negar com kein: Ich habe kein Buch. A forma kein não muda de posição em relação ao indefinido, mas se a negação recai sobre outra palavra (o sujeito, por exemplo), o artigo indefinido desaparece por completo: Nicht ein Mensch hilft ihm = nenhum ser humano o ajuda. Com nicht, portanto, o indefinido só sobrevive como quantificador, nunca como simples artigo.

Um cuidado: kein significa "nenhum" e já contém a negação, por isso não se combina com nicht. Ich habe nicht kein Buch é errado, salvo quando a negação é Cancelamento (Nicht ein einziger kam = nem um veio).`),
  vocab: [
    V('ein', 'ein', 'um (nom. masc./neut.)'),
    V('eine', 'ein', 'uma (nom. fem.)'),
    V('einen', 'ein', 'um (acc. masc.)'),
    V('einem', 'ein', 'a um (dat. masc./neut.)'),
    V('einer', 'ein', 'a uma (dat./gen. fem.)'),
    V('kein', 'kein', 'nenhum (masc./neut. nom.)'),
    V('keine', 'kein', 'nenhuma (fem. e plural)'),
    V('einen Baum', 'Baum', 'uma árvore'),
    V('eine Blume', 'Blume', 'uma flor'),
    V('ein Buch', 'Buch', 'um livro'),
    V('kein Brot', 'Brot', 'nenhum pão'),
    V('keine Zeit', 'Zeit', 'nenhum tempo'),
    V('ein wenig', 'wenig', 'um pouco'),
    V('ein Mensch', 'Mensch', 'um ser humano'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta de "de uma cidade" no dativo?'),
    options: [T('einer Stadt'), T('ein Stadt'), T('einem Stadt'), T('eines Stadt')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a negação: Wir haben ___ Zeit.'),
      answer: 'keine',
      hint: T('Zeit é feminino e o substantivo está no plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o acusativo: Er hat ___ Hund (um cachorro).'),
      answer: 'einen',
      hint: T('Masculino acusativo: -en.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é correta?'),
      options: [
        T('Ich habe nicht kein Brot.'),
        T('Ich habe kein Brot.'),
        T('Nicht ich habe kein Brot.'),
        T('Ich habe nicht ein Brot.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione a forma ao caso.'),
      pairs: [
        { a: T('eines'), b: T('genitivo masculino') },
        { a: T('einer'), b: T('genitivo feminino') },
        { a: T('keine'), b: T('negativo plural') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('ein flexiona-se como der, não como ein substantivo neutro: einen, einem, eines.'),
    },
    {
      n: '2',
      text: T(
        'kein é a única forma de negação que flexiona; überall se comporta como ein, com a diferença de que admite plural (keine Bücher).',
      ),
    },
    {
      n: '3',
      text: T(
        'kein nega apenas uma quantidade contável ou uma unidade; para uma qualidade (não frio, sim quente) usa-se nicht + adjetivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nicht com o indefinido só é legítimo em leitura corretiva ou de contraste, geralmente reforçada por mais nem: Nicht einmal ein Wort sagte er.',
      ),
    },
  ],
  notes: [
    {
      label: T('O artigo que desaparece'),
      text: T(
        'Quando nicht nega um elemento já determinado, o indefinido é retirado sem deixar vestígio gramatical: kein Freund hilft (nenhum amigo ajuda) é possível, mas nicht ein Freund hilft só significa "nem um amigo ajuda". A diferença entre as duas frases é de alcance, não de correção.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 1:3, Alle haben ihn nicht empfangen. O plural sem artigo nem pronome funciona como sujeito, e o verbo plural revela que a negação alcança pessoas, não uma coisa. A construção Alle ... nicht é o oposto exato de kein.',
      ),
    },
  ],
  examples: [
    { text: 'Ein Mann kommt.', gloss: T('Um homem vem (nominativo masculino).') },
    {
      text: 'Ich sehe eine Blume.',
      gloss: T('Eu vejo uma flor (ein → eine no nominativo feminino).'),
    },
    { text: 'Er hat einen Freund.', gloss: T('Ele tem um amigo (acusativo masculino: einen).') },
    {
      text: 'Sie spricht mit einem Arzt.',
      gloss: T('Ela fala com um médico (mit exige dativo: einem).'),
    },
    { text: 'Ich habe kein Brot.', gloss: T('Não tenho pão (kein no lugar de ein).') },
    { text: 'Wir haben keine Zeit.', gloss: T('Não temos tempo (plural negativo: keine).') },
    { text: 'Nicht ein Mensch blieb.', gloss: T('Nenhum ser humano ficou (nicht + sem artigo).') },
  ],
  tables: [
    {
      caption: T('ein, keine e kein em todos os casos'),
      head: ['Caso', 'masc. sg.', 'fem. sg.', 'neut. sg.', 'plural'],
      rows: [
        ['Nominativo', 'ein Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Acusativo', 'einen Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Dativo', 'einem Mann', 'einer Frau', 'einem Kind', 'keinen Kindern'],
        ['Genitivo', 'eines Mannes', 'einer Frau', 'eines Kindes', 'keiner Kinder'],
      ],
    },
    {
      caption: T('Negação com kein e com nicht'),
      head: ['Alvo da negação', 'Forma usada', 'Exemplo', 'Leitura'],
      rows: [
        ['o substantivo', 'kein', 'Ich habe kein Brot.', 'não tenho pão'],
        ['o adjetivo', 'kein', 'Das Wasser ist nicht kalt.', 'a água não é fria'],
        [
          'o sujeito inteiro',
          'nicht + sem artículo',
          'Nicht ein Mensch half ihm.',
          'nenhum ser humano o ajudou',
        ],
        ['o verbo', 'nicht', 'Ich gehe nicht.', 'eu não vou'],
        ['num substantivo plural', 'keine', 'Wir haben keine Zeit.', 'não temos tempo'],
      ],
    },
  ],
};
