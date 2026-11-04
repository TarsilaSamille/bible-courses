import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('O futuro'),
  subtitle: T('werden mais o infinitivo, e o presente com sentido futuro'),
  section: T('Os verbos'),
  body: C(`## A forma

O futuro alemão forma-se com **werden** no presente mais o infinitivo inteiro do verbo, sem terminação: *ich werde kommen*, *du wirst gehen*, *er wird sprechen*, *wir werden sehen*, *ihr werdet hören*, *sie werden kommen*. Repare que *werden* é um verbo comum com a sua própria terminação; o que não tem terminação alguma é o segundo verbo.

A segunda forma verbal fica no fim da oração: *Morgen werde ich dich anrufen*. Note ainda que o futuro é o único tempo que não exige uma palavra de tempo: *Ich werde dich anrufen* já significa «ligar-te-ei».

## O presente como futuro

Na prática, o futuro simples é raro. O alemão diz quase sempre o futuro com o **presente** e uma indicação de tempo: *Ich komme morgen*, *Wir fahren am Sonntag*, *Sie kommt um halb acht*. Isso é natural com verbos de movimento, mas a construção serve para qualquer verbo: *Ich rufe dich an* (ligo-te amanhã). A única exigência é que o sentido futuro fique inconfundível pelo contexto.

Para o futuro **hipotético** — aquilo que talvez aconteça — a língua tem duas formas, e elas se confundem o tempo todo. O **Futur I** (*ich werde kommen*) é a forma antiga, quase literary: sobrevive em *Es wird nicht leicht sein*, «não vai ser fácil». O **Futur II** de valor conjetural, *ich werde gekommen sein*, é hoje mais comum: «terei chegado», usado sobretudo em perguntas e hipóteses. E o **Konjunktiv I** do *werden* aparece em notícia, para «dizem que»: *Er wird in Berlin sein* (segundo disseram).



## Obrigação e futuro

A obrigação tem vida própria em *haben* + *zu* + Infinitivo: *Ich habe etwas zu tun*, *Er hat nichts zu sagen*, *Wir haben viel zu lernen*. Aqui o valor já não é o de futuro: significa «haver». E é a parte com *zu* que dá a direção — *zu tun* «para fazer», *zu sagen* «para dizer». Compare *Ich werde kommen* (vou vir) com *Ich habe etwas zu tun* (tenho algo a fazer).

## O essencial

O futuro tem duas portas: o presente, quando a fala é comum, e *werden* + Infinitivo, quando se quer marcar a projeção, a previsão ou a ameaça. Em todo o caso, é a segunda forma da oração que guarda o sentido.`),
  vocab: [
    V('werden', 'werden', 'auxiliar do futuro e de tornar-se'),
    V('ich werde kommen', 'werden', 'virei (Futur I)'),
    V('wirst', 'werden', 'vais (2.ª pessoa do futuro)'),
    V('wird', 'werden', 'vai, fica, acontece'),
    V('rufe', 'rufen', 'telefono (presente com sentido de futuro)'),
    V('komme morgen', 'kommen', 'venho amanhã (futuro no presente)'),
    V('habe zu tun', 'tun', 'tenho algo a fazer (zu + Infinitivo)'),
    V('nichts zu sagen', 'sagen', 'nada a dizer'),
    V('Es wird nicht leicht sein.', 'sein', 'Não vai ser fácil.'),
    V('ich werde gekommen sein', 'werden', 'terei chegado (Futur II conjetural)'),
    V('Er wird in Berlin sein.', 'sein', 'Estará em Berlim (Konjunktiv I de notícia).'),
    V('Morgen werde ich dich anrufen', 'anrufen', 'Amanhã telefono-te (Infinitivo no fim).'),
    V('Wir haben viel zu lernen', 'lernen', 'Temos muito a aprender.'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma o futuro de {kommen} na 1.ª pessoa?'),
    options: [
      T('ich werde kommen'),
      T('ich werde gekommen'),
      T('ich werden kommen'),
      T('ich komme'),
    ],
    answer: 0,
    hint: T('Regra §1: werden no presente + Infinitivo sem terminação.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a expressão de obrigação: Ich habe etwas ___ tun.'),
      answer: 'zu',
      hint: T('Regra §4: zu marca finalidade e dispensa o futuro.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase soa mais natural na fala quotidiana?'),
      options: [
        T('Ich rufe dich morgen an.'),
        T('Ich werde dich morgen anrufen.'),
        T('Ich werde dich morgen angerufen.'),
        T('Ich worden dich morgen anrufen.'),
      ],
      answer: 0,
      hint: T('Regra §3: no presente futuro não há werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduza {Es wird nicht leicht sein}.'),
      answer: 'it will not be easy',
      hint: T('Futur I, a forma antiga que aparece em Marcos 4:24.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao seu valor'),
      pairs: [
        { a: T('ich werde kommen'), b: T('projeção, plano') },
        { a: T('ich habe etwas zu tun'), b: T('obrigação presente') },
        { a: T('ich werde gekommen sein'), b: T('conjetura') },
        { a: T('Sie sagen, er sei krank'), b: T('relato indireto') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O futuro é werden no presente + Infinitivo sem terminação: ich werde kommen. O Infinitivo vai para o fim da oração.',
      ),
    },
    {
      n: '2',
      text: T(
        'werden termina normalmente (wirst, wird, werdet); é o Infinitivo que perde a terminação. Ich werde, ihr werdet.',
      ),
    },
    {
      n: '3',
      text: T(
        'No presente com sentido futuro não há werden: Ich komme morgen. A palavra de tempo é obrigatória para evitar ambiguidade.',
      ),
    },
    {
      n: '4',
      text: T(
        'Zu + Infinitivo expressa finalidade ou obrigação e dispensa o futuro: Ich habe nichts zu sagen (não *werde nichts zu sagen haben*).',
      ),
    },
    {
      n: '5',
      text: T(
        'O Konjunktiv I de werden serve para o relato indireto: não afirma, mas transmite: Sie sagen, er sei krank. Na fala, quase ninguém o conjuga; repete-se werden + Infinitivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Um futuro sem forma própria'),
      text: T(
        'O alemão herdou o futuro do protoindoeuropeu, mas com pouca entusiase. Dessa época em diante, a forma *ich werde kommen* é a única construção realmente sintética do sistema, e ela sempre foi deixada de lado. Quem fala-projecta no passado faz Perfekt: *ich werde kommen* (vou vir) e *ich habe arbeiten müssen* (tive de trabalhar) pertencem ao mesmo registo muito diferente, e o Perfekt é o único que se expandiu. Alemão, por isso, é uma língua com um só passado e um só futuro de uso corrente — e o futuro é o presente mais uma palavra de tempo.',
      ),
    },
    {
      label: T('Leitura em Lutero'),
      text: T(
        'As profecias do Antigo Testamento trazem o futuro com frequência, e é notável como a tradução de Lutero o resolve. *Ich will, spricht der Herr, euch nicht lassen* (Jeremias 1:12) usa o Konjunktiv I de *wollen* e mantém a ameaça no presente: «não vos deixarei». Já *Es wird nicht leicht sein, ins Himmelreich einzugehen* (Marcos 4:24) usa o Futur I, a forma antiga que soa a sentença. Perceber qual das duas está em jogo é perceber se a frase anuncia ou consta.',
      ),
    },
  ],
  examples: [
    { text: 'Morgen werde ich dich anrufen.', gloss: T('Amanhã telefono-te (Infinitivo no fim).') },
    { text: 'Ich komme morgen.', gloss: T('Vou vir amanhã (presente com sentido futuro).') },
    { text: 'Wir fahren am Sonntag.', gloss: T('Vamos de carro no domingo (tempo marcado).') },
    {
      text: 'Es wird nicht leicht sein.',
      gloss: T('Não vai ser fácil (Futur I, tom de sentença).'),
    },
    { text: 'Ich werde gekommen sein.', gloss: T('Terei chegado (Futur II conjetural).') },
    {
      text: 'Sie sagen, er sei krank.',
      gloss: T('Dizem que ele está doente (Konjunktiv I de relato).'),
    },
    { text: 'Ich habe nichts zu sagen.', gloss: T('Não tenho nada a dizer (zu + Infinitivo).') },
    { text: 'Wir haben viel zu lernen.', gloss: T('Temos muito a aprender.') },
    {
      text: 'Ich will, spricht der Herr, euch nicht lassen.',
      gloss: T('Eu não vos deixarei, diz o Senhor (Jeremias 1:12).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Futuro ou presente, lado a lado'),
      head: [T('Pessoa'), T('Futur I (werden + Inf.)'), T('Presente com valor futuro')],
      rows: [
        ['ich', 'werde kommen', 'komme'],
        ['du', 'wirst kommen', 'kommst'],
        ['er / sie / es', 'wird kommen', 'kommt'],
        ['wir', 'werden kommen', 'kommen'],
        ['ihr', 'werdet kommen', 'kommt'],
        ['sie / Sie', 'werden kommen', 'kommen'],
      ],
    },
    {
      caption: T('Tabela 2 — {werden} com Infinitivo e {zu}'),
      head: [T('Construção'), T('Exemplo'), T('Valor')],
      rows: [
        ['werden + Infinitivo', 'Ich werde kommen.', 'projeção: vou vir'],
        [
          'werden + Infinitivo + zu',
          'Ich werde etwas zu tun haben.',
          'necessidade: vou ter algo a fazer',
        ],
        [
          'haben + zu + Infinitivo',
          'Ich habe etwas zu tun.',
          'obrigação atual: tenho algo a fazer',
        ],
        ['werden + sein', 'Es wird gut.', 'mudança: vai ficar bom'],
        [
          'werden + Infinitivo + modal',
          'Das wird dich interessieren.',
          'hipótese: isso deve ser interessante',
        ],
        ['werden + Präsens (Konjunktiv I)', 'Er wird krank sein.', 'relato: dizem que está doente'],
      ],
    },
  ],
};
