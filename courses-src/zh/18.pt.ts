import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Verbo'),
  title: T('O passivo: {被} e {把}'),
  subtitle: T('A passiva que o Mandarin quase evita, e a construção que ele usa no lugar dela'),
  body: C(`
## {被} marca o passivo, e o agente vem depois

O português faz a passiva com o verbo *ser*: "ele foi batido". O Mandarin não tem essa forma. Em vez dela usa a partícula {bèi} ({被}) colada ao verbo: {tā bèi dǎ le}, "ele foi batido". A posição é fixa, **sujeito + {bèi} + verbo**, e o {bèi} não é uma preposição de regência: é uma etiqueta.

O ponto que quase todo mundo perde está no fim da frase. Em português o agente vem antes do particípio, "ele foi batido por João". Em Mandarin ele vem depois de toda a locução verbal, ou não vem: {tā bèi dǎ le}, ponto final, "ele foi batido", e ninguém sabe por quem. Quando o agente aparece, aparece no fim: {shū bèi tā dǎ le}, "o livro foi batido por ele".

Ou seja: a mesma informação cabe nos dois idiomas, em posições opostas. O português antecipa o agente; o Mandarin o adia. Quem traduz do português para o Mandarin e mantém o agente no começo produz uma frase que soa a tradução.

## {把}: o par com {被}

E aqui está a razão de {bèi} ser raro na fala: o Mandarin quase sempre diz a mesma coisa de outro jeito. Onde o português recorreria ao passivo, o Mandarin usa {bǎ} ({把}), que puxa o objeto para a frente e transforma a coisa tratada no ponto da frase.

{wǒ bǎ shū kàn le}, "eu li o livro". Sujeito + {bǎ} + objeto + verbo. O objeto é o que está sendo tratado, e o Mandarin prefere mostrar a coisa a mostrar a passão do sujeito.

Compare com a passiva equivalente: {shū bèi wǒ kàn le}, "o livro foi lido por mim". As duas frases dizem a mesma coisa. A segunda marca que o livro sofreu a ação; a primeira marca que o livro é o objeto em foco. O Mandarin prefere a primeira quase sempre, e é por isso que {bèi} aparece tanto em texto escrito e expositivo, em comentário teológico, e pouco na fala cotidiana.

São dois membros de um par, e a escolha entre eles é uma escolha de **foco**, não de sentido:

- **{bǎ}** destaca o objeto: {wǒ bǎ shū kàn le}, "eu li o livro".
- **{bèi}** destaca a passagem do sujeito: {shū bèi wǒ kàn le}, "o livro foi lido por mim".

Usa-se {bǎ} quando o objeto é conhecido e já está em foco, o que na prática é quase sempre. Usa-se {bèi} quando o sujeito sofre a ação, ou quando o agente é a informação importante e precisa ser nomeado. As duas construções podem coexistir na mesma frase com sujeitos diferentes: {wǒ bǎ shū kàn le, tā bèi wǒ qù le háng}, "eu li o livro; ele foi ao banco por mim". Uma oração com {bǎ}, outra com {bèi}: a frase não fica desequilibrada, porque cada metade destaca o que precisa destacar.

## {被} que faz: o uso causative

O ponto mais delicado é que {bèi} também significa "fazer algo", e as duas leituras são quase idênticas na superfície.

{bèi} + substantivo = "ser algo feito por alguém": {bèi tā kànjiàn}, "ser visto por ele". {wǒ bèi tā pīpíng le}, "eu fui elogiado por ele". Mesma palavra, mesma posição, e nada na forma escrita diz se a frase é passiva ou causative. O que decide é a **natureza do verbo**: em {bèi tā kànjiàn}, {tā} é o agente e {kànjiàn}, "ver", é a ação, e o sujeito da frase é o alvo. Com substantivo em vez de verbo, a construção {bèi} é quase sempre causative: {bèi nà lóu} é literalmente "ser o resultado de derrubar alguém", isto é, "ser derrubado por alguém"; {bèi shā rén}, "ser morto assassino", quer dizer "ser assassinado por alguém", e o agente pode ser omitido.

E é esse uso que a {和合本} prefere quando traduz a passiva bíblica. Em Isaías 53:3, {tā bèi wǒmen de zuì suǒ kǔ}, "ele foi angustiado pelas nossas pecados". O {bèi} é passivo; o agente, {wǒmen de zuì}, está no meio, dentro de um substantivo, e não no fim como o português colocaria. O {suǒ} transforma o verbo {kǔ}, "sofrer", em substantivo agentivo, e é essa construção, {bèi} mais agente nominalizado mais {suǒ} mais verbo, que o chinês bíblico usa para dizer "foi atormentado por". Compare com Mateus 27:46, {bèi dīng le}, "foi crucificado": o mesmo {bèi}, sem agente nenhum, porque o cruzamento é o agente implícito e nomeá-lo seria um escândalo.

## A negação com {被} e {把}

A negação vem antes do verbo, e a posição é fixa: {wǒ bù chī}, a partícula colada no verbo. Com {bèi} e {bǎ} a situação é outra, porque essas duas palavras deslocam o verbo de lugar. Em {tā bèi dǎ le}, o {dǎ} já não está colado ao sujeito: há uma partícula entre os dois. Em {wǒ bǎ shū kàn le}, o {kàn} foi empurrado para depois do objeto. E a negação se adapta: continua sendo {méi} ({没}), não {bù}, e ela entra antes do {bèi} ou do {bǎ}, {tā méi bèi dǎ}, "ele não foi batido", {wǒ méi bǎ shū kàn wán}, "eu não li o livro todo". Quem escreve {bù} por hábito onde o Mandarin exige {méi} produz uma frase que soa estranha sem que ninguém consiga dizer por quê.`),
  vocab: [
    V('被', '被', 'partícula passiva; com substantivo, "ser feito por" (bèi)'),
    V('把', '把', 'partícula que destaca o objeto e vem antes do verbo (bǎ)'),
    V('打', '打', 'bater; fazer (dǎ)'),
    V('书', '书', 'livro (shū)'),
    V('看', '看', 'ver; ler (kàn)'),
    V('罪', '罪', 'pecado (zuì)'),
    V('所', '所', 'nominalizador "aquilo que"; forma agente de um verbo (suǒ)'),
    V('苦', '苦', 'sofrer; ser angustiado (kǔ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O passivo é sujeito + {bèi} + verbo: {tā bèi dǎ le}. O {bèi} é etiqueta, não preposição.',
      ),
    },
    { n: '2', text: T('O agente vem DEPOIS da locução verbal, ou não vem: {shū bèi tā dǎ le}.') },
    {
      n: '3',
      text: T(
        'A construção {bǎ} é sujeito + {bǎ} + objeto + verbo, e substitui o passivo na fala: {wǒ bǎ shū kàn le}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{bǎ} destaca o objeto; {bèi} destaca a passão do sujeito. A escolha é de foco, não de sentido.',
      ),
    },
    {
      n: '5',
      text: T(
        '{bèi} + substantivo é causative, "ser feito por": {bèi tā kànjiàn} é "ser visto por ele".',
      ),
    },
  ],
  notes: [
    {
      label: T('O agente nunca vem antes'),
      text: T(
        'O português escreve "foi batido por João" e põe o agente à frente. O Mandarin escreve {shū bèi tā dǎ le} e põe o agente no fim. A informação nova no português é antecipada; em Mandarin é adiada.',
      ),
    },
    {
      label: T('Com {bèi} a negação é {méi}'),
      text: T(
        '{tā méi bèi dǎ} — "ele não foi batido". O {méi} entra antes do {bèi}, não colado ao verbo como na lição 9, e {bù} aqui soa errado: {bèi} e {bǎ} deslocam o verbo, e o Mandarin fica com a negação de passado.',
      ),
    },
  ],
  examples: [
    { text: '他被打了', gloss: T('tā bèi dǎ le — ele foi batido') },
    { text: '書被他看了', gloss: T('shū bèi tā kàn le — o livro foi lido por ele') },
    { text: '我把書看了', gloss: T('wǒ bǎ shū kàn le — eu li o livro') },
    {
      text: '他被我們的罪所苦',
      gloss: T(
        'tā bèi wǒmen de zuì suǒ kǔ — ele foi angustiado pelas nossas pecados (Isaías 53:3)',
      ),
    },
  ],
  tables: [
    {
      caption: T('A mesma ação em três construções'),
      head: [T('Frase'), T('Construção'), T('O que é destacado'), T('Português')],
      rows: [
        [
          T('{wǒ kàn le shū}'),
          T('sujeito — verbo — objeto, a forma neutra'),
          T('a ação'),
          T('eu li o livro'),
        ],
        [
          T('{wǒ bǎ shū kàn le}'),
          T('{bǎ}: o objeto sobe para antes do verbo'),
          T('o objeto'),
          T('eu li o livro, com o livro em foco'),
        ],
        [
          T('{shū bèi wǒ kàn le}'),
          T('{bèi}: passiva com agente explícito'),
          T('a passão do sujeito'),
          T('o livro foi lido por mim'),
        ],
      ],
    },
    {
      caption: T('{bèi} e {bǎ} lado a lado'),
      head: [T('Partícula'), T('Posição'), T('Realce'), T('Quando se usa')],
      rows: [
        [
          T('{bèi}'),
          T('sujeito + {bèi} + verbo'),
          T('o sujeito sofre a ação'),
          T('quando o agente precisa ser nomeado, ou dito depois'),
        ],
        [
          T('{bǎ}'),
          T('sujeito + {bǎ} + objeto + verbo'),
          T('o objeto é tratado'),
          T('quando o objeto já está em foco — quase sempre'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {書被我看了}, o que marca o {bèi}?'),
    options: [
      T('O objeto, puxado para a frente'),
      T('A passagem do sujeito, que sofre a ação'),
      T('A negação da ação'),
      T('O tempo da ação'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ele foi batido" com a partícula do passivo: 他____打了'),
      answer: '被',
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao que ela destaca'),
      pairs: [
        { a: T('{bèi}'), b: T('a passão do sujeito') },
        { a: T('{bǎ}'), b: T('o objeto em foco') },
        { a: T('agente no fim da locução'), b: T('só é possível com {bèi}') },
        { a: T('{méi} antes do {bèi}'), b: T('a negação do passivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para dizer "eu li o livro" do jeito mais natural do Mandarin, qual forma?'),
      options: [T('{書被我看了}'), T('{我把書看了}'), T('{被書我看了}'), T('{我書看了}')],
      answer: 1,
    },
  ],
};
