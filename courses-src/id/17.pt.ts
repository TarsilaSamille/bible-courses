import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('O nome'),
  title: T('Genitivo, posse e relativo'),
  subtitle: T('os cinco empregos de -nya, o afixo mais produtivo do indonésio'),
  body: C(`## Cinco empregos, uma sílaba

{-nya} é o sufixo mais produtivo do indonésio, e é o que substitui quase tudo o que o português faz com preposição e com artigo. Ele se junta ao fim de uma base e faz cinco coisas: posse, objeto, lugar, beneficiário e nominalização.

O motivo de ele fazer tantas é que o indonésio não tem caso. Onde o português mudaria a preposição ({de}, {em}, {a}), o indonésio põe {-nya} e o leitor descobre a função pelo verbo que está em volta. O risco do sistema é o oposto do que se imagina: não é que a informação falte, é que ela se repete.

Quem não conhece {-nya} lê {rumahnya} como se fosse um substantivo novo. Quem conhece lê {-nya} como uma pergunta: posse de quem, para quem, onde, de quê.

## A posse: o possessor vem antes

O português põe o possuidor depois da preposição: {o livro de Maria}. O indonésio põe o possessor **antes** do substantivo, colado: {buku Maria}. Não há preposição, não há artigo, e a ordem é invertida em relação ao português.

Isso vale para pronome e para nome. {rumah saya} «a minha casa», {buku Petrus» «o livro de Pedro», {nama Tuhan» «o nome de Deus».

E há uma segunda via, que é o clítico. Em vez de um possessor separado, {-nya} vira {-ku}, {-mu} ou {-nya} e se cola diretamente ao substantivo: {rumahku} «a minha casa», {namamu} «o teu nome», {kitabnya} «o livro dele». O {-nya} de terceira pessoa é idêntico ao sufixo nominal, e é por isso que {kitabnya} pode ser tanto «o livro dele» quanto «o livro» de que a frase fala.

O clítico plural é raro, e a forma normal é o possessor por extenso: {rumah kami}, {rumah mereka}. Quem escreve {buku mereka} está certo; quem escreve {bukunya} com sujeito plural está trocando o número sem querer.

## Objeto, lugar e beneficiário

Aqui está a parte que parece três trabalhos e é um só mecanismo: {-nya} fechado com uma preposição. O português escreve {a ele}, {para ele}, {dele}, {nele}, quatro palavras; o indonésio escreve {padanya}, {untuknya}, {darinya}, {di dalamnya}, quatro palavras em que o {-nya} é sempre o mesmo pronome de terceira pessoa.

{1} Objeto. {-nya} colado ao verbo é o objeto direto cliticizado: {melihatnya} «vê-lo», {membacanya} «lê-lo», {menulisnya} «escrevê-lo». Em português o pronome {o} ou {a} vem solto depois do verbo; em indonésio ele vira sufixo e desaparece. É a operação mais invisível da língua, e é a razão de {melihat} e {melihatnya} serem verbos diferentes para o leitor.

{2} Lugar. Com substantivos de lugar e de tempo, o {-nya} marca a posse do lugar, não a direção: {bulannya} «no mês dele», {tahunnya} «no ano dele», {rumahnya} «na casa dele». Compare {di rumah} «em uma casa» com {dirumahnya} «na casa dele», que é a mesma preposição com o pronome colado.

{3} Beneficiário. É a preposição {pada} ou {untuk} mais o clítico: {kepadamu} «a ti», {untuknya} «para ele», {beri padanya} «dar a ele». O padrão mais comum do Novo Testamento é um verbo de transferência seguido de {pada} mais clítico: {memberikan kepadamu}, {mempersembahkan kepadanya}.

E há um quarto uso, que é a nominalização, e é o mais produtivo de todos. {-nya} depois de um verbo transforma a oração em substantivo: {datangnya} «a vinda», {keluarannya} «a saída», {perjalanannya} «a sua ida», {pemakaiannya} «o uso». O grego faz o mesmo com {-sis}, e é por isso que o grego do Novo Testamento cheio de substantivos abstratos encontra o indonésio preparado.

Um detalhe que faz o sistema fechar: quando o {-nya} é de posse sobre um nome próprio, o nome pode vir depois, não antes. {Allah-nya} é «o Deus dele» e é comum em orações de vocativo, como {Allah-ku}.

## Di mana hatimu, di situ juga bendaharaanmu

{Matius 6:21} repete o mesmo par duas vezes, e o par é {di} mais clítico: {Di mana hatimu, di situ juga bendaharaanmu}. A segunda ocorrência é {Perbendaharaanmu}, com o clítico de segunda pessoa em {-mu}.

O versículo em português precisa de uma construção que a locução nominal não resolve bem. O indonésio repete a estrutura e deixa o sentido passar do abstrato para o concreto: o tesouro que está onde está o coração. O que o grego distinguia com duas palavras e o português com uma locução, o indonésio faz repetindo o padrão.

O padrão é: {X-ku} é «o meu X», e a pergunta que o leitor faz antes de cada {X} é sempre a mesma, quem é o dono. Quem esqueceu que {hatimu} é «o meu coração» lê {bendaharaanmu} como dois substantivos sem relação, e perde o verso inteiro.`),
  vocab: [
    V('-nya', 'nya', 'de, em, para (sufixo de posse e objeto)'),
    V('-ku', 'ku', 'meu, de mim'),
    V('-mu', 'mu', 'teu, de ti'),
    V('rumah', 'rumah', 'casa'),
    V('buku', 'buku', 'livro'),
    V('nama', 'nama', 'nome'),
    V('Tuhan', 'Tuhan', 'Senhor, Deus'),
    V('kami', 'kami', 'nós'),
    V('mereka', 'mereka', 'eles, elas'),
    V('melihat', 'lihat', 'ver'),
    V('melihatnya', 'lihat', 'vê-lo'),
    V('membaca', 'baca', 'ler'),
    V('membacanya', 'baca', 'lê-lo'),
    V('kepadamu', 'pada', 'a ti'),
    V('untuknya', 'untuk', 'para ele'),
    V('datangnya', 'datang', 'a vinda (dele)'),
    V('hatimu', 'hati', 'o teu coração'),
    V('bendaharaan', 'bendaharaan', 'tesouro'),
  ],
  rules: [
    {
      n: '1',
      text: T('{-nya} faz cinco trabalhos: posse, objeto, lugar, beneficiário e nominalização.'),
    },
    {
      n: '2',
      text: T('O possessor vem antes do substantivo, sem preposição: {rumah saya}, {buku Petrus}.'),
    },
    {
      n: '3',
      text: T(
        'Como clítico, o possessor vira {-ku}, {-mu} ou {-nya} e se cola: {rumahku}, {namamu}, {kitabnya}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{-nya} colado ao verbo é o objeto cliticizado: {melihatnya} «vê-lo». Depois de preposição é o pronome de 3.ª pessoa: {kepadanya}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Depois de um verbo, {-nya} nominaliza a oração: {datangnya} «a vinda», {keluarannya} «a saída».',
      ),
    },
  ],
  notes: [
    {
      label: T('O clítico e o possessor'),
      text: T(
        'Em geral é preferível o clítico ({namamu}) ao possessor separado ({nama kamu}), porque o clítico marca a relação como colada. O possessor por extenso aparece quando o referente precisa de destaque: {nama Allah yang baik}.',
      ),
    },
    {
      label: T('Onde o -nya some'),
      text: T(
        'Depois de {akan} a cliticização é opcional em alguns verbos: {akan datang} e {akan datangnya} são ambos possíveis, com diferença de registro. Em orações com {sudah} e {sedang} o clítico é mais raro.',
      ),
    },
  ],
  examples: [
    { text: 'Rumah saya dekat pasar.', gloss: T('A minha casa fica perto do mercado.') },
    { text: 'Buku Petrus hilang.', gloss: T('O livro de Pedro desapareceu.') },
    { text: 'Namamu siapa?', gloss: T('Qual é o teu nome?') },
    { text: 'Melihatnya di sudut itu.', gloss: T('Vi-o naquele canto.') },
    { text: 'Dia akan memberikannya kepadamu.', gloss: T('Ele vai dar-to.') },
    { text: 'Datangnya Nabi sudah dekat.', gloss: T('A vinda do profeta está próxima.') },
    { text: 'Untuknya kita berkumpul.', gloss: T('Para ele nos reunimos.') },
    { text: 'Rumahnya dekat.', gloss: T('A casa dele fica perto.') },
    { text: 'Kita menunggu dia datang.', gloss: T('Esperamos que ele venha.') },
  ],
  tables: [
    {
      caption: T('Os cinco empregos de -nya'),
      head: ['Emprego', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['posse', 'X + nya', 'rumahnya', 'a casa dele'],
        ['objeto', 'verbo + nya', 'melihatnya', 'vê-lo'],
        ['lugar', 'di + clítico', 'bulannya', 'no mês dele'],
        ['beneficiário', 'pada + clítico', 'padanya', 'a ele'],
        ['nominalização', 'verbo + nya', 'datangnya', 'a vinda'],
      ],
    },
    {
      caption: T('Posse por extenso e por clítico'),
      head: ['Via', 'Pronome', 'Exemplo', 'Leia como'],
      rows: [
        ['por extenso', 'saya', 'rumah saya', 'a minha casa'],
        ['por extenso', 'kamu', 'rumahmu atau rumah kamu', 'a tua casa'],
        ['por clítico', '-ku', 'rumahku', 'a minha casa'],
        ['por clítico', '-mu', 'namamu', 'o teu nome'],
        ['por clítico', '-nya', 'kitabnya', 'o livro dele'],
        ['plural por extenso', 'mereka', 'rumah mereka', 'a casa deles'],
      ],
    },
    {
      caption: T('Preposição mais clítico'),
      head: ['Preposição', 'Significado', 'Com -nya', 'Português'],
      rows: [
        ['pada', 'a, para', 'padanya', 'a ele'],
        ['untuk', 'para', 'untuknya', 'para ele'],
        ['dari', 'de', 'darinya', 'dele'],
        ['di', 'em, no', 'di dalamnya', 'neles'],
        ['ke', 'a, para', 'kepadanya', 'a eles'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {-nya} faz em {melihatnya}?'),
    options: [
      T('objeto cliticizado: «vê-lo»'),
      T('posse: «a visão dele»'),
      T('lugar: «na visão»'),
      T('nominalização: «o ver»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o clítico: «o teu nome» = ___.'),
      answer: 'namamu',
      hint: T('Base + clítico de segunda pessoa.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «o livro de Pedro» sem preposição?'),
      options: [
        T('Buku Petrus'),
        T('Buku dari Petrus'),
        T('Buku untuk Petrus'),
        T('Buku di Petrus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o emprego de {-nya} ao exemplo'),
      pairs: [
        { a: T('{kitabnya}'), b: T('posse') },
        { a: T('{membacanya}'), b: T('objeto') },
        { a: T('{bulannya}'), b: T('lugar') },
        { a: T('{keluarannya}'), b: T('nominalização') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
