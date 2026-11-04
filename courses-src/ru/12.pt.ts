import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Os pronomes e os numerais'),
  title: T('Pronomes: o que quase nunca aparece escrito'),
  subtitle: T('Даня e Маша no lugar de ele e dela, e o relativo que concorda com o que substitui'),
  body: C(`
## O pronome de terceira pessoa raramente aparece

Em português a frase "ele foi à cidade" obriga a repetir o pronome quando o sujeito volta. Em russo não há essa obrigação, e a regra prática é: **pronome de terceira pessoa só aparece quando é preciso**.

Quando o sujeito já foi mencionado, o verbo basta. Даня пришёл. Он был устал. traz o pronome porque se refere a uma frase inteira. Mas Даня пришёл и ушёл não traz, porque o verbo já diz de quem se trata. Quem traduz do português costuma colocar um ele onde o russo não põe, e a frase fica mais longa e mais emphática do que era.

O pronome de terceira pessoa também é o único que se declina com n inicial depois de uma preposição. у него, с ним, о нём; e o feminino é у неё, с ней, о ней. Sem preposição, é его e её, e essas duas formas são ao mesmo tempo genitivo e acusativo. Todo o resto do sistema é mais claro do que isso.

## Даня e Маша ocupam o lugar de ele e dela

A segunda regra é a que mais aparece na fala: em vez do pronome, usa-se o nome. Маша пришла no lugar de Она пришла. E como o nome também declina, a frase inteira funciona: Я вижу Даню, Я говорю с Машей, Я думаю о Дане.

Isso tem uma consequência para a leitura que ninguém espera: o nome funciona como pronome sem nenhuma marca. Uma frase com Иоанн pode ter Иоанн como sujeito ou como objeto, e o que decide é o verbo. Em вижу Иоанна o nome está em acusativo; em Иоанн видит está em nominativo. A mesma palavra, dois casos, e a diferença está no verbo, como sempre.

Os demonstrativos seguem a mesma lógica e raramente são usados em prosa. Это é o mais comum, e тот aparece o tempo todo em narração antiga. Этот concorda com o substantivo: этот человек, эта книга, это слово, эти люди. E такой faz o mesmo, com sentido de qualidade: такой большой.

## O relativo concorda com o que substitui, e o caso vem da oração

O pronome relativo russo tem duas séries. Который substitui qualquer substantivo, e concorda em gênero e número: который человек, которая книга, которое слово, которые люди. Кто substitui pessoas e что substitui coisas, e não há o que flexionar.

A parte que trava é o caso. **O relativo concorda com o substantivo em gênero e número, mas o caso dele vem da função que ele cumpre dentro da sua própria oração, não da posição do substantivo que ele substitui.**

Em Который берёт на Себя грех мира, o substantivo substituído é o Cordeiro, masculino singular. O relativo está no masculino singular, sim, e o caso é nominativo, porque берёт é o verbo e Который é o sujeito dele. Se o relativo fosse o objeto de берёт, seria Которого, porque masculino animado em acusativo é genitivo.

O mesmo vale com quem e o quê: которые приняли Его traz которые no nominativo plural, porque приняли é o verbo e os que aceitaram são o sujeito. Se fossem o objeto, seria которых, e a forma seria visivelmente diferente.

## O gancho: três pronomes, três casos, uma oração

**А тем, которые приняли Его, дал власть стать чадами Божиими.** Uma oração com três pronomes e três casos, e nenhum deles repetido.

Тем é dativo plural, porque é a quem se dá o poder: дал власть pede dativo. Которые é nominativo plural, porque é o sujeito de приняли, e um masculino animado em acusativo teria sido которых. Его é genitivo singular, porque é o objeto de приняли, e a forma é a mesma do genitivo de animate e da possessive.

Os três estão no mesmo caso gramatical do que o pronome do sujeito e o pronome do objeto numa frase portuguesa, e nenhum deles tem marca visível. Um leitor que não conhece o relativo vai ler которые como objeto de приняли, porque está mais perto, e chega ao sentido invertido sem perceber o quão longe estava da gramática.
`),
  vocab: [
    V('Даня', 'Даня', 'Danya; nome próprio masculino no lugar de ele'),
    V('Маша', 'Маша', 'Masha; nome próprio feminino no lugar de ela'),
    V('его', 'он', 'dele, ou o dele; genitivo e acusativo'),
    V('её', 'она', 'dela, ou o dela'),
    V('него', 'он', 'dele, depois de preposição'),
    V('нём', 'он', 'sobre ele; н inicial depois de preposição'),
    V('ней', 'она', 'dela, depois de preposição'),
    V('Этот', 'этот', 'este; demonstrativo'),
    V('такой', 'такой', 'tal, tão; com sentido de qualidade'),
    V('который', 'который', 'que, o qual; relativo'),
    V('которая', 'который', 'que; relativo feminino'),
    V('которые', 'который', 'que; relativo plural nominativo'),
    V('которых', 'который', 'que; relativo plural em genitivo ou acusativo'),
    V('кто', 'кто', 'quem; relativo e interrogativo'),
    V('тем', 'тот', 'aos que; dativo plural do demonstrativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em которые приняли Его, qual caso é которые?'),
    options: [T('Acusativo'), T('Nominativo'), T('Genitivo')],
    answer: 1,
    hint: T(
      'Se fosse objeto, o relativo seria которых. Como приняли é o verbo, os que aceitaram são o sujeito, e sujeito é nominativo.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: у ___ (junto de Deus)'), answer: 'Бога' },
    {
      kind: 'choose',
      prompt: T('Qual pronome substitui uma pessoa em uma oração relativa?'),
      options: [T('которое'), T('кто'), T('которое')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: о ___ (sobre ele)'), answer: 'нём' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O pronome de terceira pessoa só aparece quando é preciso; o verbo já diz de quem se trata.',
      ),
    },
    {
      n: '2',
      text: T(
        'Depois de uma preposição, o pronome masculino e o neutro recebem n: {у него}, {с ним}, {о нём}.',
      ),
    },
    {
      n: '3',
      text: T('Fora de preposição, {его} e {её} são ao mesmo tempo genitivo e acusativo.'),
    },
    {
      n: '4',
      text: T(
        'Um nome próprio ocupa o lugar do pronome e declina como substantivo: {Я} {вижу} {Даню}, {Я} {говорю} {с} {Машей}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O relativo concorda em gênero e número com o que substitui, mas o caso vem da função dele dentro da sua própria oração.',
      ),
    },
  ],
  notes: [
    {
      label: T('Который ou кто'),
      text: T(
        'Который substitui qualquer substantivo e flexiona em gênero e número. Кто e что não flexionam: quem é sempre quem e o que é sempre o que. Em português o relativo é único, e é essa variedade que faz um texto russo parecer mais repetição do que é. Traduzir com um só relativo é correto; traduzir com o relativo no caso errado é erro de leitura.',
      ),
    },
    {
      label: T('A forma que não diz o caso'),
      text: T(
        'Его é genitivo e acusativo ao mesmo tempo, e isso acontece porque o masculino animado tem as duas formas iguais. Em или vier pessoas, или aceito Его, a segunda leitura, com Ele como sujeito, é impossível: o sujeito seria Ele e não o genitivo. É a regra da lição anterior operando dentro de um pronome.',
      ),
    },
  ],
  examples: [
    { text: 'Даня пришёл', gloss: T('Danya chegou; o nome faz o trabalho de um pronome') },
    { text: 'Маша пришла', gloss: T('Masha chegou; mesmo, feminino') },
    { text: 'Я вижу Даню', gloss: T('Eu vejo Danya; o nome está em acusativo') },
    { text: 'Я говорю с Машей', gloss: T('Eu falo com Masha; instrumental') },
    { text: 'у него', gloss: T('com ele; n inicial depois da preposição') },
    { text: 'о ней', gloss: T('sobre ela; n inicial depois da preposição') },
    { text: 'Его книга', gloss: T('o livro dele; a mesma forma do genitivo e do acusativo') },
    { text: 'Этот человек', gloss: T('este homem; o demonstrativo concorda') },
    {
      text: 'Который берёт на Себя грех мира',
      gloss: T('que tira o pecado do mundo; o relativo está no nominativo, então é o sujeito'),
    },
    {
      text: 'тем, которые приняли Его',
      gloss: T('aos que o receberam; dativo, nominativo plural e genitivo numa oração'),
    },
  ],
  tables: [
    {
      caption: T('Os pronomes pessoais, com a forma de preposição'),
      head: [T('Caso'), T('я'), T('ты'), T('он'), T('она')],
      rows: [
        [T('nominativo'), T('я'), T('ты'), T('он'), T('она')],
        [T('genitivo'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('dativo'), T('мне'), T('тебе'), T('ему'), T('ей')],
        [T('acusativo'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('instrumental'), T('мной'), T('тобой'), T('им'), T('ей')],
        [T('com preposição'), T('обо мне'), T('о тебе'), T('о нём'), T('о ней')],
      ],
    },
    {
      caption: T('O relativo em concordância'),
      head: [T(''), T('masculino'), T('feminino'), T('neutro'), T('plural')],
      rows: [
        [T('nominativo'), T('который'), T('которая'), T('которое'), T('которые')],
        [T('genitivo'), T('которого'), T('которой'), T('которого'), T('которых')],
        [T('dativo'), T('которому'), T('которой'), T('которому'), T('которым')],
        [T('acusativo'), T('которого'), T('которую'), T('которое'), T('которых')],
        [T('instrumental'), T('которым'), T('которой'), T('которым'), T('которыми')],
        [T('prepositivo'), T('о котором'), T('о которой'), T('о котором'), T('о которых')],
      ],
    },
    {
      caption: T('Quem substitui o quê'),
      head: [T('Substitui'), T('Pronome'), T('Flexiona'), T('Exemplo')],
      rows: [
        [T('uma pessoa'), T('кто'), T('não'), T('Кто пришёл, тот и судит')],
        [T('uma coisa'), T('что'), T('não'), T('Что он сделал, не знаю')],
        [
          T('qualquer substantivo'),
          T('который'),
          T('sim, em gênero e número'),
          T('Который берёт, который видит'),
        ],
        [T('lugar'), T('где'), T('não'), T('Где он живёт, там и работает')],
        [T('direção'), T('куда'), T('não'), T('Куда идёшь, туда и иди')],
        [T('um substantivo genérico'), T('какой'), T('sim'), T('Какой дом, такая и жизнь')],
      ],
    },
  ],
};
