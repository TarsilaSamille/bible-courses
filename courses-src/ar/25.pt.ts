import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('A partícula de posse e as suas vizinhas'),
  subtitle: T('لِـ، وَ، بَيْنَ، ضِدّ، دُونَ، عِنْدَ، نَحْوَ'),
  section: T('Partículas'),
  body: C(`## A partícula que faz três coisas

{لِـ} é a partícula mais flexível do sistema, e ela se separa em três usos antes de olhar para as outras. Com um substantivo ela é de posse: {لَهُ} quer dizer "dele" e também "ele tem". Com um substantivo que nomeia uma pessoa ela é de destino: {لَكَ} é "para você".

O terceiro uso é o que interessa a quem lê. **{لِـ} mais um nome verbal indica finalidade.** {لِشُكْرِكَ} é "para agradecer-te", {لِقَوْلِهِ} é "para dizer". O português resolve isso com "para" mais um infinitivo, e o árabe resolve com uma partícula mais um substantivo, e é por isso que essas formas aparecem tanto no texto bíblico.

O uso de posse tem uma forma abreviada que é a origem de todos os pronomes anexos. Onde o nome está escrito, a frase diz {كِتَابُ لَهُ}; onde o nome não está, ela diz só {كِتَابُهُ}, e o {لَهُ} virou sufixo. Quem vê {رَأْسُهُ} está vendo um nome sem nome.

## Bَيْنَ, ضِدّ, دُونَ, عِنْدَ, نَحْوَ

As cinco vizinhas fazem trabalho mais especial, e cada uma tem o complemento que a define.

{بَيْنَ} é "entre", e o complemento é um lugar ou um grupo. A sua construção mais famosa é {بَيْنَ يَدَيْهِ}, que literalmente significa "entre as duas mãos dele" e é traduzido por "diante dele": as mãos são o que está à frente. {بَيْنَكُمْ} significa "entre vocês", e {مِنْ بَيْنِكُمْ} significa "de entre vocês".

{ضِدّ} é "contra", e exige alguém ou alguma força: {ضَدَّ الظَّالِمِينَ}. {دُونَ} estabelece um limite e não uma separação: {دُونَ أَبَاءٍ} é literalmente "abaixo de pais" e vale "sem pais". A diferença entre {مِنْ} e {دُونَ} é a diferença entre cortar e medir.

{عِنْدَ} é "junto a" e, quando o complemento é um preço, vira "por": {عِنْدَ دِينَارِ} é "por um dinar". {نَحْوَ} é "em direção a" quando o complemento é um lugar e "cerca de" quando é um número: {نَحْوَ سِتَّةِ}.

## {وَ} não é uma partícula

A {وَ} é conjunção, e a diferença não é de nome, é de função. Uma partícula governa o caso do nome que vem depois; a conjunção não governa nada. {وَ} liga palavras, liga orações e pode ainda suprir um elemento que foi omitido.

Em {جَاءَ مُوسَى وَهَارُونُ} a {وَ} liga dois sujeitos. Em {كَانَ الرَّجُلُ فِي الْبَيْتِ وَالْمَرْأَةُ فِي الْبَيْتِ} ela repete o verbo omitido na segunda oração, e o verbo omitido é {كَانَتْ}. Em {وَالْمَلَكُ وَالْقَارِنُ} ela retoma o que ficou subentendido.

E junto dela vivem três partículas que parecem com ela e não têm nada a ver: {بِـ}, {لِـ} e {كَـ}. Todas três ligam um verbo a um nome, todas três regem genitivo, e todas três têm uma forma que só aparece na fala. {وَ} não liga verbo a nome nenhum: ela liga nome a nome.

## Critério de leitura

Em {لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ} há uma partícula, duas preposições e uma conjunção, e as quatro fazem trabalhos diferentes. {لَهُ} é posse ou destino, e a terminação {ـُ} mostra que o nome que vem depois está no genitivo por causa da partícula. {فِي} e {مَا} se repetem, e a repetição é o que dá o parallelismo. {وَ} liga as duas metades e não se traduz por nada em português além do "e" que já está na palavra "e" da segunda metade.

O que o leitor ganha aqui é o hábito de separar. {وَ} liga, {لِـ} possuí, {فِي} localiza, {بَـ} instrumenta. Cada uma tem uma terminação que a denuncia, e uma frase em que as quatro aparecem é uma frase em que quatro relações estão escritas.`),
  vocab: [
    V('لِـ', 'إلى', 'partícula de posse e de destino'),
    V('لَهُ', 'له', 'dele; ele has'),
    V('لَكَ', 'لك', 'for you'),
    V('لِشُكْرِكَ', 'شكر', 'in order to thank you'),
    V('وَ', 'و', 'and; and also'),
    V('بَيْنَ', 'بين', 'between; among'),
    V('يَدَيْهِ', 'يد', 'his two hands; "between his hands"'),
    V('ضِدّ', 'ضد', 'against'),
    V('دُونَ', 'دون', 'without; below'),
    V('عِنْدَ', 'عند', 'with; in the presence of'),
    V('نَحْوَ', 'نحو', 'towards; about'),
    V('بِـ', 'في', 'por; instrumento'),
    V('مَعَنَا', 'نحن', 'with us'),
    V('السَّمَاوَات', 'سماوات', 'os céus'),
    V('مِلَكُوت', 'ملكوت', 'reino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {لِشُكْرِكَ}, o que {لِـ} indica?'),
    options: [T('Posse'), T('Destino'), T('Finalidade'), T('Origem')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete {بَيْنَ ___}: “diante dele” é {بَيْنَ يَدَيْهِ}, e “entre” é {بَيْنَ ___}.'),
      answer: 'يَدَيْهِ',
      hint: T('São as duas mãos dele.'),
    },
    {
      kind: 'choose',
      prompt: T('{بَيْنَ يَدَيْهِ} significa...'),
      options: [T('Entre as mãos dele'), T('Sobre ele'), T('Contra ele'), T('A partir dele')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe partícula e sentido.'),
      pairs: [
        { a: T('ضِدّ'), b: T('contra') },
        { a: T('دُونَ'), b: T('sem; abaixo de') },
        { a: T('عِنْدَ'), b: T('junto a; por um preço') },
        { a: T('نَحْوَ'), b: T('em direção a; cerca de') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a diferença entre {وَ} e {لِـ}?'),
      options: [
        T('Nenhuma'),
        T('{وَ} é conjunção e {لِـ} é partícula'),
        T('{وَ} é partícula e {لِـ} é conjunção'),
        T('{لِـ} nunca liga verbo a nome'),
      ],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**{لِـ} faz três coisas: posse, destino e finalidade.**') },
    { n: '2', text: T('Finalidade é {لِـ} mais um nome verbal: {لِقَوْلِهِ}, "para dizer".') },
    { n: '3', text: T('{عِنْدَ} com um preço significa "por": {عِنْدَ دِينَارِ}, "por um dinar".') },
    { n: '4', text: T('{بَيْنَ} com {يَدَ} significa "diante": {بَيْنَ يَدَيْهِ}.') },
    {
      n: '5',
      text: T(
        '{وَ} é conjunção e não governa caso; as partículas {بِـ}, {لِـ} e {كَـ} ligam verbo a nome.',
      ),
    },
  ],
  notes: [
    {
      label: T('A partícula que virou sufixo'),
      text: T(
        'A {لِـ} do genitivo é marca de posse: {كِتَابُ لَهُ} é a forma por extenso, e {كِتَابُهُ} é a forma abreviada. Onde o nome aparece, a partícula aparece; onde o nome some, fica só o sufixo.',
      ),
    },
    {
      label: T('Por que {دُونَ} não é como {مِنْ}'),
      text: T(
        '{مِنْ} separa e {دُونَ} mede. {دُونَ أَبَاءٍ} é literalmente "abaixo de pais", e o limite é que dá o sentido de "sem". Trocar as duas produz uma frase que continua compreensível e não é a que o texto disse.',
      ),
    },
  ],
  examples: [
    { text: 'لَهُ', gloss: T('dele; he has') },
    { text: 'لَكَ', gloss: T('for you') },
    { text: 'لِشُكْرِكَ', gloss: T('in order to thank you') },
    { text: 'بَيْنَ يَدَيْهِ', gloss: T('between his two hands; before him') },
    { text: 'ضَدَّ الظَّالِمِينَ', gloss: T('against the oppressors') },
    { text: 'دُونَ أَبَاءٍ', gloss: T('without parents; below parents') },
    { text: 'عِنْدَ اللهِ', gloss: T('with God; in his presence') },
    { text: 'نَحْوَ سِتَّةِ', gloss: T('about six') },
    { text: 'مَعَنَا', gloss: T('with us') },
  ],
  tables: [
    {
      caption: T('{لِـ} e os seus três usos'),
      head: [T('Uso'), T('Complemento'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('posse'), T('substantivo'), 'لَهُ', T('dele; ele tem')],
        [T('destino'), T('substantivo ou pessoa'), 'لَكَ', T('para você')],
        [T('finalidade'), T('nome verbal'), 'لِشُكْرِكَ', T('para agradecer-te')],
        [T('comparação'), T('substantivo'), 'مَثْلِي', T('como eu')],
      ],
    },
    {
      caption: T('As cinco vizinhas'),
      head: [T('Partícula'), T('Glosa'), T('Complemento típico'), T('Exemplo')],
      rows: [
        ['بَيْنَ', T('entre; no meio de'), T('lugar ou grupo'), 'بَيْنَ يَدَيْهِ'],
        ['ضِدّ', T('contra'), T('pessoa ou força'), 'ضَدَّ الظَّالِمِينَ'],
        ['دُونَ', T('sem; abaixo de'), T('limite'), 'دُونَ أَبَاءٍ'],
        ['عِنْدَ', T('junto a'), T('pessoa, lugar ou preço'), 'عِنْدَ دِينَارِ'],
        ['نَحْوَ', T('em direção a; cerca de'), T('lugar ou número'), 'نَحْوَ سِتَّةِ'],
      ],
    },
    {
      caption: T('Ligação e regência'),
      head: [T('Forma'), T('Função'), T('O que liga'), T('Exemplo')],
      rows: [
        ['وَ', T('conjunção; governa nada'), T('nome a nome, oração a oração'), 'مُوسَى وَهَارُونُ'],
        ['بـ', T('partícula; rege o genitivo'), T('verbo a nome'), 'بِالْقُوَّةِ'],
        ['لـ', T('partícula; rege o genitivo'), T('verbo a nome'), 'لِشُكْرِكَ'],
        ['كـ', T('partícula; rege o genitivo'), T('verbo a nome'), 'كَمَثْلِهِ'],
      ],
    },
  ],
};
