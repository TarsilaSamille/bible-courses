import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Pessoas do verbo e as duas negações'),
  subtitle: T('كَتَبْتُ، أَكْتُبُ، لَمْ يَكُنْ'),
  section: T('O verbo'),
  body: C(`## Duas séries, dois jeitos de marcar a pessoa

O verbo árabe flexiona a pessoa de duas maneiras, e a escolha entre elas depende da voz. **O perfeito flexiona por sufixos, colados no fim da palavra; o imperfeito flexiona por prefixos, colados no começo.**

No perfeito, a primeira pessoa é {كَتَبْتُ}, a segunda {كَتَبْتَ} ou {كَتَبْتِ}, a terceira {كَتَبَ} e {كَتَبَتْ}, e o plural {كَتَبْنَا}, {كَتَبْتُمْ}, {كَتَبُوا}. No imperfeito, os mesmos lugares são ocupados por prefixos: {أَكْتُبُ}, {تَكْتُبُ}, {تَكْتُبُ}, {نَكْتُبُ}, {تَكْتُبُونَ}, {يَكْتُبُونَ}.

A terceira pessoa do perfeito é o ponto que interessa. Não há sufixo nenhum, e é por isso que {كَتَبَ} e {كَتَبَتْ} quase se escrevem igual: a diferença está na {تْ} final e no gênero do substantivo. Uma regra basta para ler quase todas as formas do perfeito sem decorar nada.

## O passado negativo tem uma forma que não flexiona

E aqui está a exceção, que é a mais bonita e a mais ingrata do verbo árabe.

O passado negativo é {لَمْ} mais o verbo no **jussivo**, não no indicativo. {لَمْ يَكُنْ} é "não estava", e não {لَمْ يَكُونُ} nem {لَمْ يَكُونَ}. O que acontece com o jussivo é que a vogal final cai, e é por isso que a negação do passado tem um som diferente da positiva em quase toda forma.

Dois verbos quebram a série, e é o que torna o grupo instrutivo. **{لَمْ يَكُنْ} e {لَمْ يَأْتِ} perdem letras depois de {لَمْ}.** O {كَانَ} perde o {و}, o {جَاءَ} perde o {أ} e troca o {ت} final por {تْ}. Quem flexiona por regra escreve {لَمْ يَكُونْ}, e essa forma não aparece em nenhum texto.

A flexão da negação também é menor que a do positivo, e isso é uma regra só: a pessoa do passado negativo aparece no **pronome**, não no verbo. {لَمْ أَكُنْ} é a primeira pessoa, {لَمْ نَكُنْ} é a primeira do plural, {لَمْ يَكُنْ} é a terceira. São três formas para seis lugares, e a redução é real.

## As duas negações

Reunindo o que já vem de {لا} com o que vem de {لَمْ}, o quadro fecha e fica pequeno o bastante para ser memorizado inteiro.

O passado é {لَمْ} mais jussivo. O presente é {لا} mais indicativo. O futuro é {لَنْ} mais subjuntivo. E {مَا} mais indicativo é a negação sem referência de tempo, que é a mais antiga das quatro e a que aparece nos textos mais velhos.

Cada negação traz seu próprio modo verbal, e essa é a parte que se memoriza: **jussivo com {لَمْ}, indicativo com {لا} e {مَا}, subjuntivo com {لَنْ}.** O resto da flexão é o mesmo do positivo. Um leitor que conhece a negação e a voz lê qualquer forma negativa do verbo.

## Critério de leitura

Em {لَا تَأْتِ فِيَنَا تَجْرِيَةً} a negação traz uma das duas formas que ninguém flexiona por regra. {لَا} manda o verbo para o jussivo, e o jussivo de {أَتى} é {يَأْتِ}, com o {أ} caído e o {ت} trocado. Uma pessoa que está aprendendo escreve {لَا يَأْتِي}, que é uma forma que existe e significa outra coisa: "não éEle que vem".

É por isso que o jussivo das raízes fracas merece atenção: as duas formas ficam perto o bastante para se confundirem, e a confusão troca uma prohibition por uma afirmação negada.`),
  vocab: [
    V('كَتَبْتُ', 'كتب', 'eu escrevi'),
    V('كَتَبْتَ', 'كتب', 'tu escreveste'),
    V('كَتَبْتِ', 'كتب', 'tu escreveste'),
    V('كَتَبَتْ', 'كتب', 'ela escreveu'),
    V('كَتَبْنَا', 'كتب', 'nós escrevemos'),
    V('كَتَبْتُمْ', 'كتب', 'vós escrevestes'),
    V('كَتَبُوا', 'كتب', 'eles escreveram'),
    V('أَكْتُبُ', 'كتب', 'eu escrevo'),
    V('تَكْتُبُ', 'كتب', 'tu escreves'),
    V('يَكْتُبُ', 'كتب', 'ele escreve'),
    V('تَكْتُبِينَ', 'كتب', 'tu escreves'),
    V('نَكْتُبُ', 'كتب', 'nós escrevemos'),
    V('يَكْتُبُونَ', 'كتب', 'eles escrevem'),
    V('لَمْ أَكُنْ', 'كان', 'eu não estava'),
    V('لَمْ يَكُنْ', 'كان', 'não estava'),
    V('لَمْ يَأْتِ', 'أتى', 'não veio'),
    V('كَانَ', 'كان', 'era; estava'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como o perfeito flexiona a pessoa?'),
    options: [T('Por prefixos'), T('Por sufixos'), T('Por partículas'), T('Não flexiona')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o passado negativo: “não estava” é {لَمْ ___}.'),
      answer: 'يَكُنْ',
      hint: T('O {و} do verbo {يَكُون} cai depois de {لَمْ}.'),
    },
    {
      kind: 'match',
      prompt: T('Associe pessoa e forma do perfeito.'),
      pairs: [
        { a: T('كَتَبْتُ'), b: T('primeira pessoa') },
        { a: T('كَتَبْتَ'), b: T('segunda pessoa') },
        { a: T('كَتَبَتْ'), b: T('terceira pessoa feminina') },
        { a: T('كَتَبُوا'), b: T('plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é o jussivo de {يَكُون} depois de {لَمْ}?'),
      options: [T('يَكُونُ'), T('يَكُونَ'), T('يَكُنْ'), T('يَكُونُوا')],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('Como o imperfeito flexiona a pessoa?'),
      options: [T('Por prefixos'), T('Por sufixos'), T('Por partículas'), T('Não flexiona')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('**O perfeito flexiona por sufixos e o imperfeito por prefixos.**') },
    {
      n: '2',
      text: T(
        'A terceira pessoa do perfeito não tem sufixo: {كَتَبَ} e {كَتَبَتْ} só diferem na {تْ} final e no gênero do nome.',
      ),
    },
    { n: '3', text: T('O dual e o jussivo cortam o padrão: {كَتَبْتُمَا} e {لَمْ يَكْتُبْ}.') },
    { n: '4', text: T('O passado negativo é {لَمْ} mais o jussivo, não mais o indicativo.') },
    { n: '5', text: T('{يَكُون} e {يَأْتِي} perdem letras depois de {لَمْ}: {لَمْ يَكُنْ}, {لَمْ يَأْتِ}.') },
  ],
  notes: [
    {
      label: T('Os dois verbos que quebram a série'),
      text: T(
        '{كَانَ} e {جَاءَ} são os únicos que perdem letras na forma negativa. A perda é visível e irregular: {لَمْ يَكُنْ} perde o {و}, e {لَمْ يَأْتِ} perde o {أ} e troca o {ت}. Quem flexiona por regra escreve {لَمْ يَكُونْ}, e ninguém pronuncia isso.',
      ),
    },
    {
      label: T('Por que o negativo flexiona menos'),
      text: T(
        'A pessoa do passado negativo aparece no pronome, não no verbo: {لَمْ أَكُنْ} é a primeira pessoa e {لَمْ نَكُنْ} a primeira do plural. São três formas para seis lugares, e a redução é real.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبْتُ', gloss: T('eu escrevi; sufixo {ـتُ}') },
    { text: 'كَتَبْتَ', gloss: T('tu escreveste; sufixo {ـتَ}') },
    { text: 'كَتَبَتْ', gloss: T('ela escreveu; sufixo {ـتْ}') },
    { text: 'كَتَبُوا', gloss: T('eles escreveram; sufixo {ـوا}') },
    { text: 'أَكْتُبُ', gloss: T('eu escrevo; prefixo {أَ}') },
    { text: 'يَكْتُبُونَ', gloss: T('eles escrevem; prefixo {يَ}') },
    { text: 'لَمْ أَكُنْ', gloss: T('eu não estava') },
    { text: 'لَمْ يَكُنْ', gloss: T('não estava; o {و} caiu') },
    { text: 'لَمْ يَأْتِ', gloss: T('não veio; o {أ} caiu') },
  ],
  tables: [
    {
      caption: T('O perfeito por sufixos'),
      head: [T('Pessoa'), T('Sufixo'), T('Forma'), T('Glosa')],
      rows: [
        [T('1ª'), 'ـتُ', 'كَتَبْتُ', T('eu escrevi')],
        [T('2ª masc.'), 'ـتَ', 'كَتَبْتَ', T('tu escreveste')],
        [T('2ª fem.'), 'ـتِ', 'كَتَبْتِ', T('tu escreveste')],
        [T('3ª masc.'), T('nenhum'), 'كَتَبَ', T('ele escreveu')],
        [T('3ª fem.'), 'ـتْ', 'كَتَبَتْ', T('ela escreveu')],
        [T('1ª plural'), 'ـنَا', 'كَتَبْنَا', T('nós escrevemos')],
        [T('2ª plural'), 'ـتُمْ', 'كَتَبْتُمْ', T('vós escrevestes')],
        [T('3ª plural'), 'ـوا', 'كَتَبُوا', T('eles escreveram')],
      ],
    },
    {
      caption: T('O imperfeito por prefixos'),
      head: [T('Pessoa'), T('Prefixo'), T('Forma'), T('Glosa')],
      rows: [
        [T('1ª'), 'أَ', 'أَكْتُبُ', T('eu escrevo')],
        [T('2ª masc.'), 'تَ', 'تَكْتُبُ', T('tu escreves')],
        [T('2ª fem.'), 'تَ', 'تَكْتُبِينَ', T('tu escreves')],
        [T('3ª masc.'), 'يَ', 'يَكْتُبُ', T('ele escreve')],
        [T('3ª fem.'), 'تَ', 'تَكْتُبُ', T('ela escreve')],
        [T('1ª plural'), 'نَ', 'نَكْتُبُ', T('nós escrevemos')],
        [T('3ª plural'), 'يَ', 'يَكْتُبُونَ', T('eles escrevem')],
      ],
    },
    {
      caption: T('As quatro negações'),
      head: [T('Tempo'), T('Partícula'), T('Modo do verbo'), T('Exemplo')],
      rows: [
        [T('passado'), 'لَمْ', T('jussivo'), 'لَمْ يَكُنْ'],
        [T('presente'), 'لا', T('indicativo'), 'لا يَكْتُبُ'],
        [T('futuro'), 'لَنْ', T('subjuntivo'), 'لَنْ يَكْتُبَ'],
        [T('sem tempo'), 'مَا', T('indicativo'), 'مَا كَانَ'],
      ],
    },
  ],
};
