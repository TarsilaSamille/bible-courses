import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('O verbo: forma e tempo'),
  title: T('Os verbos essenciais do texto bíblico'),
  subtitle: T(
    '{ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}: os sete que sustentam quase toda frase',
  ),
  body: C(`## O verbete que sustenta quase tudo

Um verbete regular de {-ar}, {-er} ou {-ir} serve para muita coisa, porque a terminação faz o resto. Um verbete irregular não serve para nada: {ser}, {ter}, {ir}, {ver}, {fazer}, {dizer} e {saber} precisam ser aprendidos um por um, e nenhum deles produz os outros.

É um número pequeno para o peso que tem. Nos Salmos e nos Evangelhos, quase toda proposição que diz algo sobre alguém passa por um destes sete. Quem os tem resolve metade do texto antes de olhar a sintaxe.

O preço é que eles não formam sistema. Não há regra que produza {fiz} a partir de {fazer}, nem {disse} a partir de {dizer}. A forma {faze} do português antigo e o português de Portugal ainda existentes são vestígio disso, e quem vai ler uma tradução antiga vai esbarrar com eles.

## {ser} e {estar}: a distinção que o português novo inventou

O português tem dois verbos onde o grego e o hebraico do texto antigo têm um só. {εἰμί} e {ἦν} viram {ser} e {estar}, e a regra que o português brasileiro segue é esta: {ser} para o que o sujeito é, {estar} para o estado em que ele se encontra.

{Deus é amor} (1 Jo 4.8) usa {ser}, porque o que se afirma é o que Deus é. {Jesus está na sinagoga} usaria {estar}, porque o que se afirma é onde ele está. A escolha não é de estilo: é a diferença entre uma identidade e uma circunstância.

O problema é que essa regra é recentíssima: o português antigo quase não a tem. João 1:1 traz {era}, {estava} e {era} na mesma frase:

{No princípio {era} o Verbo, e o Verbo {estava} com Deus, e o Verbo {era} Deus.}

O {era} da primeira e da terceira posição é {ser}; o do meio é {estar}. A tradução não está aplicando a regra do português brasileiro, está transmitindo o grego, em que os três são a mesma palavra em tempos diferentes. Traduzir os dois {era} por {era} e o {estava} por {estava} mantém a cadeia; trocar o terceiro por {estava} produziria "e o Verbo estava Deus", que é errado por construção.

## {ir} e {vir}: o par que se completa e o imperativo que se aprende errado

{ir} e {vir} são o par mais fácil de confundir e o mais fácil de errar na forma. {ir} faz {vou}, {vais}, {vai}, {vamos}, {vão}, e {vir} faz {venho}, {vens}, {vem}, {viemos}, {vêm}. A assimetria é a pista: {ir} perde o {r} e ganha {v}, {vir} troca o {r} por {n}.

No pretérito perfeito os dois se desempatam de um jeito que parece erro e não é: {fui} é de {ser} e de {ir}, e o contexto diz qual. {Eu fui ao templo} tem {ir}; {Eu fui bom} tem {ser}.

O imperativo de {tu} de {ir}, {ver} e {dizer} é **{vai}**, **{vê}** e **{diz}**, sem {s}. O português antigo e o português europeu guardam o {s}: {vais}, {ves}, {dizes}. Quem lê a Bíblia de Almeida com o ouvido do português brasileiro ouve um erro onde não há; quem escreve seguindo o instinto do {vai} e do {diz} acerta o biblical e estranha o {vós}.

O pretérito de {ir} e {vir} é o par mais curto de toda a língua: {fui}, {fomos}, {foram}, e {vim}, {viemos}, {vieram}. Quem decorou dois verbos decorou metade do pretérito irregular.

## Na Bíblia, e o que ler

Gênesis 1:3 tem {Haja luz}, e {haja} é o subjuntivo de {haver}, não de {ser}. É o primeiro verbo da narrativa e continua sendo o mais estranho para quem vem do português comum, onde {haver} quase não aparece.

Em um versículo, pergunte quais dos verbos essenciais entrou: se a forma é {foi} ou {vi} ou {disse}, o verbo é irregular e vale a forma exata; se é {havia}, o verbo é {haver} e o tempo é o imperfecto; se é {está} ou {estava}, a escolha entre {ser} e {estar} já está feita pela forma.`),
  vocab: [
    V('era', 'ser', 'ele era (imperfeito de ser)'),
    V('fui', 'ser', 'eu fui (de ser ou de ir)'),
    V('fomos', 'ser', 'nós fomos (de ser ou de ir)'),
    V('seja', 'ser', 'que seja (subjuntivo de ser)'),
    V('estava', 'estar', 'ele estava (imperfeito de estar)'),
    V('estive', 'estar', 'eu estive (pretérito de estar)'),
    V('havia', 'haver', 'havia (de haver)'),
    V('vou', 'ir', 'eu vou (de ir)'),
    V('vou partir', 'ir', 'vou + infinitivo'),
    V('vim', 'vir', 'eu vim (de vir)'),
    V('vieram', 'vir', 'eles vieram'),
    V('faz', 'fazer', 'ele faz'),
    V('diz', 'dizer', 'ele diz'),
    V('vê', 'ver', 'ele vê'),
    V('come', 'comer', 'ele come'),
    V('haja', 'haver', 'que haja'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{fui} e {fomos} servem a {ser} e a {ir}: {Eu fui ao templo} é {ir}, {Eu fui bom} é {ser}, e a forma não diz qual.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{estar} no pretérito é {estive}, {estiveste}, {esteve}. {Eu estive lá} e {Eu fui lá} não são sinônimos, e o segundo é {ir}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Imperativo de {tu} sem {s} final em {ir}, {ver} e {dizer}: {vai}, {vê}, {diz}. Com {s} é o português antigo: {vais}, {ves}, {dizes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{vou} é {ir} na 1ª pessoa e {ir} mais infinitivo: {vou à cidade} vai, {vou partir} vai fazer. O contexto depois do verbo é o que separa.',
      ),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 traz {era}, {estava} e {era}. Os dois {era} são de {ser} e o do meio é de {estar}; a distinção vem do grego, não da regra brasileira de {ser} e {estar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {fora} que serve a dois verbos'),
      text: T(
        '{fora} é a 3ª pessoa do pretérito perfeito tanto de {ser} ({ela fora útil}) quanto de {fazer} {ela fora a obra}. Nas traduções mais antigas o verbo {fazer} com {obras} aparece quase tanto quanto o substantivo, e ler {fora} como {ser} muda a ação.',
      ),
    },
    {
      label: T('{ser} que conta'),
      text: T(
        'No português antigo {ser} no passado com numeral diz a soma: {fora cinquenta}, "cinquenta". Por isso o latim {fuit} aparece nas traduções dos Salmos antes de qualquer substantivo. O número vem antes do que ele nomeia, e é a forma do verbo que o marca.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('Imperfeito de {ser}: o que já valia antes de tudo começar.'),
    },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('Imperfeito de {estar}: onde ele estava, não o que ele era.'),
    },
    {
      text: 'O Verbo era Deus.',
      gloss: T('Imperfeito de {ser} de novo, e a afirmação é sobre o que ele é.'),
    },
    { text: 'Haja luz.', gloss: T('Subjuntivo de {haver}, Gn 1:3.') },
    { text: 'Eu fui à cidade.', gloss: T('Pretérito de {ir}.') },
    { text: 'Eu fui chamado.', gloss: T('Pretérito de {ser}, e a forma é idêntica.') },
    {
      text: 'Eu estive com eles.',
      gloss: T('Pretérito de {estar}: o mesmo lugar, estado temporário.'),
    },
    {
      text: 'Vai e diz a eles.',
      gloss: T('Imperativo de {tu} sem {s}, como no grego e em Almeida.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('Presente de {brilhar}, o que está acontecendo na cena (Jo 1:5).'),
    },
    {
      text: 'Não tive mais nada.',
      gloss: T('Pretérito de {ter}: o presente {tenho} não o substitui.'),
    },
  ],
  tables: [
    {
      caption: T('Os oito irregulares do presente'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'vou', 'vai', 'vamos', 'vão'],
        ['vir', 'venho', 'vem', 'viemos', 'vêm'],
        ['ser', 'sou', 'é', 'somos', 'são'],
        ['estar', 'estou', 'está', 'estamos', 'estão'],
        ['ter', 'tenho', 'tem', 'temos', 'têm'],
        ['fazer', 'faço', 'faz', 'fazemos', 'fazem'],
        ['dizer', 'digo', 'diz', 'dizemos', 'dizem'],
        ['ver', 'vejo', 'vê', 'vemos', 'veem'],
      ],
    },
    {
      caption: T('Os mesmos no pretérito perfeito'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'fui', 'foi', 'fomos', 'foram'],
        ['ser', 'fui', 'foi', 'fomos', 'foram'],
        ['estar', 'estive', 'esteve', 'estivemos', 'estiveram'],
        ['ter', 'tive', 'teve', 'tivemos', 'tiveram'],
        ['fazer', 'fiz', 'fez', 'fizemos', 'fizeram'],
        ['dizer', 'disse', 'disse', 'dissemos', 'disseram'],
        ['ver', 'vi', 'viu', 'vimos', 'viram'],
      ],
    },
    {
      caption: T('O imperativo de {tu} e o erro do {s}'),
      head: ['Infinitivo', 'Almeida', 'Erro do brasileiro'],
      rows: [
        ['ir', 'vai', 'vais'],
        ['ver', 'vê', 'ves'],
        ['dizer', 'diz', 'dizes'],
        ['fazer', 'faz', 'fazes'],
        ['comer', 'come', 'comes'],
        ['ser', 'sê', 'ses'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "o Verbo estava com Deus", qual verbo e qual tempo?'),
    options: [
      T('{ser}, presente'),
      T('{estar}, imperfeito'),
      T('{ir}, pretérito'),
      T('{ter}, perfeito'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "e o Verbo ___ Deus" com o verbo {ser} no imperfeito.'),
      answer: 'era',
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao verbo'),
      pairs: [
        { a: T('{estive}'), b: T('{estar}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{viemos}'), b: T('{vir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa {estar} com o valor certo?'),
      options: [
        T('Deus está amor.'),
        T('O Verbo está com Deus.'),
        T('Jesus está Deus.'),
        T('O templo está em Getsêmani.'),
      ],
      answer: 1,
    },
  ],
};
