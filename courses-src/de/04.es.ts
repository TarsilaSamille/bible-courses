import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Los artículos indefinidos y kein'),
  subtitle: T('ein, eine y kein'),
  section: T('Los artículos'),
  body: C(`El artículo indefinido alemán tiene una sola forma, ein, que se declina exactamente como el artículo definido. En nominativo concuerda en género: ein Mann, eine Frau, ein Kind. A partir de ahí, ein toma exactamente las mismas formas que der: einen (acusativo masculino), einem (dativo), einer (femenino en los casos oblicuos) y einem (neutro).

Lo que no existe es una forma de plural: ein exige un sustantivo contable y singular, porque el sustantivo es quien lleva el plural. En una frase como Heute ist ein Gewitter, el lector deduce que se trata de una sola tormenta.

El sistema de negación es una joya del alemán. Se niega con kein: Ich habe kein Buch. La forma kein no cambia de posición respecto al indefinido, pero cuando la negación recae sobre otra palabra (el sujeto, por ejemplo), el artículo indefinido desaparece por completo: Nicht ein Mensch hilft ihm = ningún ser humano le ayuda. Con nicht, por tanto, el indefinido solo sobrevive como cuantificador, nunca como simple artículo.

Un cuidado: kein significa «ninguno» y ya contiene la negación, así que no se combina con nicht. Ich habe nicht kein Buch es incorrecto, salvo que la negación sea correctiva (Nicht ein einziger kam = ni uno siquiera vino).`),
  vocab: [
    V('ein', 'ein', 'un (masc./neut. nom.)'),
    V('eine', 'ein', 'una (nom. fem.)'),
    V('einen', 'ein', 'un (masc. acc.)'),
    V('einem', 'ein', 'a un (dat. masc./neut.)'),
    V('einer', 'ein', 'a una (dat./gen. fem.)'),
    V('kein', 'kein', 'ningún (masc./neut. nom.)'),
    V('keine', 'kein', 'ninguna (fem. y plural)'),
    V('einen Baum', 'Baum', 'un árbol'),
    V('eine Blume', 'Blume', 'una flor'),
    V('ein Buch', 'Buch', 'un libro'),
    V('kein Brot', 'Brot', 'ningún pan'),
    V('keine Zeit', 'Zeit', 'ningún tiempo'),
    V('ein wenig', 'wenig', 'un poco'),
    V('ein Mensch', 'Mensch', 'un ser humano'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta de «de una ciudad» en dativo?'),
    options: [T('einer Stadt'), T('ein Stadt'), T('einem Stadt'), T('eines Stadt')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la negación: Wir haben ___ Zeit.'),
      answer: 'keine',
      hint: T('Zeit es femenino y el sustantivo está en plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el acusativo: Er hat ___ Hund (un perro).'),
      answer: 'einen',
      hint: T('Masculino acusativo: -en.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
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
      prompt: T('Relaciona la forma con el caso.'),
      pairs: [
        { a: T('eines'), b: T('genitivo masculino') },
        { a: T('einer'), b: T('genitivo femenino') },
        { a: T('keine'), b: T('negativo plural') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('ein se declina como der, no como un sustantivo neutro: einen, einem, eines.'),
    },
    {
      n: '2',
      text: T(
        'kein es la única forma de negación que se declina; en todo se comporta como ein, salvo que admite plural (keine Bücher).',
      ),
    },
    {
      n: '3',
      text: T(
        'kein niega solo una cantidad contable o una unidad; para una cualidad (no frío sino caliente) se usa nicht + adjetivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'nicht con el indefinido solo es legítimo en lectura correctiva o de contraste, normalmente reforzada por ni siquiera: Nicht einmal ein Wort sagte er.',
      ),
    },
  ],
  notes: [
    {
      label: T('El artículo que desaparece'),
      text: T(
        'Cuando nicht niega un elemento ya determinado, el indefinido se retira sin dejar rastro gramatical: kein Freund hilft (ningún amigo ayuda) es posible, pero nicht ein Freund hilft solo significa «ni un amigo ayudó». La diferencia entre las dos frases es de alcance, no de corrección.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 1:3, Alle haben ihn nicht empfangen. El plural sin artículo ni pronombre funciona como sujeto, y el verbo plural revela que la negación abarca a personas, no una cosa. La construcción Alle ... nicht es el opuesto exacto de kein.',
      ),
    },
  ],
  examples: [
    { text: 'Ein Mann kommt.', gloss: T('Viene un hombre (nominativo masculino).') },
    {
      text: 'Ich sehe eine Blume.',
      gloss: T('Veo una flor (ein → eine en el nominativo femenino).'),
    },
    { text: 'Er hat einen Freund.', gloss: T('Tiene un amigo (acusativo masculino: einen).') },
    {
      text: 'Sie spricht mit einem Arzt.',
      gloss: T('Habla con un médico (mit exige dativo: einem).'),
    },
    { text: 'Ich habe kein Brot.', gloss: T('No tengo pan (kein en lugar de ein).') },
    { text: 'Wir haben keine Zeit.', gloss: T('No tenemos tiempo (plural negativo: keine).') },
    {
      text: 'Nicht ein Mensch blieb.',
      gloss: T('No quedó ni un solo ser humano (nicht + sin artículo).'),
    },
  ],
  tables: [
    {
      caption: T('ein, eine y kein en todos los casos'),
      head: ['Caso', 'masc. sg.', 'fem. sg.', 'neut. sg.', 'plural'],
      rows: [
        ['Nominativo', 'ein Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Acusativo', 'einen Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Dativo', 'einem Mann', 'einer Frau', 'einem Kind', 'keinen Kindern'],
        ['Genitivo', 'eines Mannes', 'einer Frau', 'eines Kindes', 'keiner Kinder'],
      ],
    },
    {
      caption: T('Negación con kein y con nicht'),
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
