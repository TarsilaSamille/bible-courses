import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('A flexão da palavra e a concordância'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    'Os irregulares que sustentam quase todo o texto: {ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}',
  ),
  body: C(`**Visão geral.** Um verbo regular flexiona-se por terminação: em {criou}, {cria} e {criaram}, o radical {cria-} é constante e só o {-ou} muda. Um verbo irregular não tem radical constante nenhum, e por isso não se aprende por regra, mas por inteiro.

São poucos e pesam muito. {ser}, {estar}, {ter}, {haver}, {ir}, {vir}, {ver}, {fazer}, {dizer}, {saber}, {poder} e {querer} cobrem quase todas as orações que dizem algo sobre alguém. Os demais irregulares se agrupam por radical: {dormir}, {morrer}, {partir} e {abrir} perdem o {i} no particípio e são um problema bem menor.

**Regra 1.** Os irregulares do presente são doze formas que precisam ser memorizadas: {sou, és, é, somos, são}, {estou, estás, está, estamos, estão}, {tenho, tens, tem, temos, têm}, {vou, vais, vai, vamos, vão}, {venho, vens, vem, viemos, vêm}, {faço, fazes, faz, fazemos, fazem}, {digo, dizes, diz, dizemos, dizem}, {vejo, vês, vê, vemos, veem}, {sei, sabes, sabe, sabemos, sabem}, {posso, podes, pode, podemos, podem}, {quero, queres, quer, queremos, querem} e {há} com {hei}. É a lista mais longa e mais usada da língua.

**Regra 2.** Duas formas pertencem a dois verbos. {fui} é de {ser} e de {ir}: em {Eu fui ao templo} o verbo é {ir}, em {Eu fui fiel} é {ser}, e a forma não diz qual. {vou} é {ir} na 1.ª pessoa do presente e também {ir} mais infinitivo: {vou partir} é futuro, {vou à cidade} é presente, e o que vem depois do verbo é o que separa os dois usos.

**Regra 3.** O imperativo de {tu} perde o {s} final em três verbos: {vai}, {vê} e {diz}. O português antigo e o português europeu guardam o {s} em {vais}, {ves} e {dizes}, e é essa forma que a Almeida usa. Em {Vai e diz a eles}, {vai} e {diz} são formas verbais de 2.ª pessoa, modo imperativo, tempo presente.

**Regra 4.** {estar} tem pretérito próprio: {estive, estiveste, esteve, estivemos, estiveram}. {Eu estive lá} e {Eu fui lá} não são sinônimos, e o segundo é {ir}. Já {ser} e {fazer} compartilham o pretérito, e {fora} é a 3.ª pessoa dos dois: {ela fora útil} é {ser}, {ela fora a obra} é {fazer}.

**Aplicação.** Em {No princípio {era} o Verbo, e o Verbo {estava} com Deus, e o Verbo {era} Deus}, há quatro verbos essenciais em uma frase. {era} duas vezes, de {ser} no imperfecto, e {estava}, de {estar} no imperfecto. O grego tem um verbo só, {ἦν}, e a tradução repartiu um em dois; a distinção que o português brasileiro aplica entre {ser} e {estar} é recente e não estava disponível para quem traduziu.

**Verificação.** Diante de uma forma irregular, pergunte: qual é o **radical** ({vou}, {venho})? Em qual **tempo** está ({fui} ou {vou} ou {vai})? A **pessoa** é {tu}, {ele} ou {eles}? A forma é **comum** ou **exclusiva de um verbo**, como {estive}? E a **frase** confirma? Sem a última pergunta, {fui} continua sem dono.`),
  vocab: [
    V('ir', 'ir', 'verbo de movimento'),
    V('vir', 'vir', 'verbo de movimento'),
    V('ser', 'ser', 'verbo de identidade'),
    V('estar', 'estar', 'verbo de estado'),
    V('ter', 'ter', 'verbo de posse'),
    V('haver', 'haver', 'verbo de existência e de tempo'),
    V('fazer', 'fazer', 'verbo de ação'),
    V('dizer', 'dizer', 'verbo de fala'),
    V('ver', 'ver', 'verbo de percepção'),
    V('saber', 'saber', 'verbo de conhecimento'),
    V('poder', 'poder', 'verbo de possibilidade'),
    V('querer', 'querer', 'verbo de vontade'),
    V('fui', 'ser', 'forma de {ser} e de {ir}'),
    V('estive', 'estar', 'pretérito de {estar}'),
    V('vai', 'ir', 'presente e imperativo de {ir}'),
    V('diz', 'dizer', 'presente e imperativo de {dizer}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Os doze irregulares do presente são {sou}, {estou}, {tenho}, {vou}, {venho}, {faço}, {digo}, {vejo}, {sei}, {posso}, {quero} e {há}. Nenhum se deduz de outro.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{fui} pertence a {ser} e a {ir}: {Eu fui ao templo} é {ir}, {Eu fui fiel} é {ser}. {vou} é {ir} na 1.ª pessoa e {ir} mais infinitivo, e o que vem depois do verbo separa os dois usos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O imperativo de {tu} de {ir}, {ver} e {dizer} é {vai}, {vê} e {diz}, sem {s}. Com {s} ({vais}, {ves}, {dizes}) é a forma do português antigo e da Almeida.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{estar} no pretérito é {estive}, {estiveste}, {esteve}, e nunca {fui}: {Eu estive lá} é {estar}, {Eu fui lá} é {ir}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Em {No princípio era o Verbo}, os dois {era} são {ser} e o {estava} é {estar}. O grego tem um único verbo, {ἦν}, e a repartição em dois é portuguesa.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {fora} que serve a dois verbos'),
      text: T(
        '{fora} é a 3.ª pessoa do pretérito perfeito tanto de {ser} ({ela fora útil}) quanto de {fazer} ({ela fora a obra}). Nas traduções antigas o verbo {fazer} seguido de {obras} aparece quase tanto quanto o substantivo, e tratar {fora} como {ser} muda o que a frase diz que aconteceu.',
      ),
    },
    {
      label: T('{ser} no passado com numeral'),
      text: T(
        'No português antigo, {ser} no passado diante de numeral expressa a soma: {fora cinquenta}, "cinquenta". Daí o latim {fuit} aparecer nas traduções dos Salmos antes de qualquer substantivo. O numeral vem antes do nomeado, e é a forma do verbo que o revela.',
      ),
    },
  ],
  examples: [
    { text: 'No princípio era o Verbo.', gloss: T('{era}: {ser} no imperfecto, 3.ª do singular.') },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('{estava}: {estar} no imperfecto, 3.ª do singular.'),
    },
    { text: 'Eu fui ao templo.', gloss: T('{fui} de {ir}: o lugar responde a {aonde?}.') },
    { text: 'Eu fui fiel.', gloss: T('{fui} de {ser}: o que se afirma é uma qualidade.') },
    {
      text: 'Eu estive com eles.',
      gloss: T('{estive} é de {estar}, e o lugar é o mesmo de {fui}.'),
    },
    { text: 'Vai e diz a eles.', gloss: T('Dois imperativos de {tu} sem {s}, como na Almeida.') },
    { text: 'vou partir', gloss: T('{ir} mais infinitivo: valor de futuro.') },
    { text: 'Haja luz.', gloss: T('{haja} é o subjuntivo de {haver}, Gn 1:3.') },
    {
      text: 'Não tenho mais nada.',
      gloss: T('{tenho} no presente; no pretérito seria {não tive}.'),
    },
  ],
  tables: [
    {
      caption: T('Os irregulares do presente, pessoa a pessoa'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{sou}'), T('{é}'), T('{somos}'), T('{são}')],
        [T('{estar}'), T('{estou}'), T('{está}'), T('{estamos}'), T('{estão}')],
        [T('{ter}'), T('{tenho}'), T('{tem}'), T('{temos}'), T('{têm}')],
        [T('{ir}'), T('{vou}'), T('{vai}'), T('{vamos}'), T('{vão}')],
        [T('{vir}'), T('{venho}'), T('{vem}'), T('{viemos}'), T('{vêm}')],
        [T('{fazer}'), T('{faço}'), T('{faz}'), T('{fazemos}'), T('{fazem}')],
        [T('{dizer}'), T('{digo}'), T('{diz}'), T('{dizemos}'), T('{dizem}')],
        [T('{ver}'), T('{vejo}'), T('{vê}'), T('{vemos}'), T('{veem}')],
      ],
    },
    {
      caption: T('O pretérito dos mesmos'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{ir}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{estar}'), T('{estive}'), T('{esteve}'), T('{estivemos}'), T('{estiveram}')],
        [T('{ter}'), T('{tive}'), T('{teve}'), T('{tivemos}'), T('{tiveram}')],
        [T('{fazer}'), T('{fiz}'), T('{fez}'), T('{fizemos}'), T('{fizeram}')],
        [T('{dizer}'), T('{disse}'), T('{disse}'), T('{dissemos}'), T('{disseram}')],
      ],
    },
    {
      caption: T('Imperativo de {tu}: onde o {s} some'),
      head: [T('Verbo'), T('Almeida'), T('Português europeu'), T('Erro comum no Brasil')],
      rows: [
        [T('{ir}'), T('{vai}'), T('{vais}'), T('Com {s}')],
        [T('{ver}'), T('{vê}'), T('{ves}'), T('Com {s}')],
        [T('{dizer}'), T('{diz}'), T('{dizes}'), T('Com {s}')],
        [T('{fazer}'), T('{faz}'), T('{fazes}'), T('Com {s}')],
        [T('{comer}'), T('{come}'), T('{comes}'), T('Com {s}')],
        [T('{dar}'), T('{dá}'), T('{dás}'), T('Com {s}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Eu fui ao templo}, o verbo {fui} é:'),
    options: [
      T('{ir}, porque há um lugar de destino'),
      T('{ser}, porque é pretérito perfeito'),
      T('{ir} e {ser} ao mesmo tempo, sem forma de decidir'),
      T('{ficar}, por causa do {templo}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O pretérito de {estar} na 1.ª pessoa do singular é ______.'),
      answer: 'estive',
      hint: T('Não é {fui}: {fui} é de {ser} e de {ir}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao verbo irregular que a produz.'),
      pairs: [
        { a: T('{viemos}'), b: T('{vir}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{estivemos}'), b: T('{estar}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'choose',
      prompt: T('Qual é o imperativo de {tu} de {ir} na Almeida?'),
      options: [T('{vais}'), T('{vai}'), T('{vá}'), T('{vou}')],
      answer: 1,
      hint: T('Três verbos perdem o {s} final, e {ir} é um deles.'),
    },
  ],
};
