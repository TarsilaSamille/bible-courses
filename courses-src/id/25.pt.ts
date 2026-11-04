import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Verbo'),
  title: T('Verbos de estado e ada'),
  subtitle: T('ada masalah, rumah itu besar, punya: três maneiras de dizer que algo é'),
  body: C(`## Ação e estado

O indonésio separa verbo que descreve ação de predicado que descreve estado, e a separação é visível na gramática.

{masuk} é ação: alguém entra, e o evento tem começo e fim. {Rumah itu masuk} só faz sentido num sentido específico, e normalmente a ação exige um agente.

{sakit} é estado: alguém está doente, e não há evento. O português resolve com {estar}, que é um verbo; o indonésio não precisa de nenhum, porque o adjetivo pode ser predicado diretamente: {Dia sakit} «ele está doente», {Rumah itu besar} «aquela casa é grande», {Pintu itu terbuka} «aquela porta está aberta».

Em registro escrito formal o {adalah} aparece e marca a cópula: {Rumah itu adalah besar}. A forma existe e não é errado, mas soa marcada, do mesmo jeito que em português soa marcado repetir a mesma forma. É um indício de que o {adalah} só é necessário quando o que vem depois é uma expressão que poderia ser lida como verbo.

E há um grupo de estados que usa {ber-}: {berdiri} «estar de pé», {berburu} «caçar», {bersekolah} «estudar». O {ber-} não significa estar em lugar nenhum: significa estar em um estado ou exercício, e a palavra que vem depois diz qual.

## O adjetivo como predicado

A regra cabe numa linha: **um adjetivo pode ocupar o lugar do verbo.**

{Ils sont occupés} está fora; {Dia sibuk} está dentro. {Ils ont raison} está fora; {Dia benar} está dentro. O que muda é que em português há um verbo copulativo e em indonésio pode não haver.

Isso vale para todas as posições. No sujeito, {Pintu terbuka}; no predicado, {Dia sakit}; na comparação, {Rumah ini lebih besar dari itu}; na negação, {Ini bukan rumah}; na pergunta, {Apakah dia sakit?}.

A exceção é quando o adjetivo precisa ser distinguido de um substantivo: {Yang sakit itu dia} «aquele que está doente é ele». Aí o {yang} é obrigatório, porque sem ele {sakit} seria lido como substantivo, «a doença».

E há um uso de {adalah} que vale registrar: ele **reforça** uma identidade já óbvia. {Dia adalah manusia} «ele é humano» soa enfático, quase ofendido, o que {Dia manusia} não soa. A linguagem religiosa e os textos teológicos usam esse {adalah} com frequência, e o leitor que traduz por {é} perde o peso.

## O estado entra pela porta de ada

O português diz {há um problema}, e o leitor reconhece logo a construção e acha que está lendo português. Está lendo outra coisa.

{ada} não identifica o sujeito: {Ada masalah} «há um problema» não diz de quem é o problema. {Ada perbedaan} «há uma diferença», {Ada pertanyaan} «há uma pergunta», {Ada yang salah} «há algo errado». O substantivo abstrato é o que está em estado, e {ada} é o verbo que o põe em estado.

Duas construções com {ada} são mais frequentes do que o tradutor percebe. {Ada yang ...} é existencial e significa «há alguém que»: {Ada yang datang} «veio alguém». E {ada} como verbo principal numa frase como {Kita hanya perlu satu hal} pede {saja} «basta».

Quanto a posse, o indonésio não usa {ada}. Ter é {punya}, {milik} ou o clítico {-nya}: {Saya punya rumah} «tenho uma casa», {Rumah itu milik saya} «aquela casa é minha», {Rumahnya besar} «a casa dele é grande». A confusão entre {ada} e {punya} inverte a direção da frase, e é o erro mais comum de quem escreve indonésio com synopse mental portuguesa.

A negation segue a mesma separação: {tidak ada} nega o estado («não há», «não existe»), e o negativo do {adalah} é {bukan} ({bukan masalah} «não é um problema»). Uma frase como {Ini bukan masalah} é uma identidade, e {Ini tidak ada masalah} é uma negação de existência. O português distingue «não é um problema» de «não há problema»; o indonésio distingue com palavras diferentes.

## Berbahagalah orang-orang yang...

{Matius 5:3} traz a estrutura de estado completa, e ela é o exemplo mais limpo que existe.

O verbo da oração é {berbahagia}, que é {ber-} mais o substantivo {bahagia} «felicidade». É um verbo de estado com o {ber-} do grupo de estado, e o grego faz o mesmo com {makarios}. Depois vem {orang-orang}, a redução integral que marca o plural, e depois {yang} ligado a um adjetivo, {miskin} «pobres».

Repare que em nenhum ponto da oração há {adalah}. O estado está no adjetivo {miskin}, e a estrutura é {berbahagia} mais sujeito mais {yang} mais adjetivo. Uma frase grega equivalente teria artigo, um verbo copulativo e talvez uma partícula; a frase indonésia não tem nenhum dos três.

É a razão de a bem-aventurança ser tão fácil de ler em indonésio e tão difícil de traduzir. O grego obriga o tradutor a decidir o que é predicado e o que é substantivo; o indonésio já decidiu, e o que sobra para o tradutor é só a escolha entre «pobres» e «desprivilegiados» e entre «felizes» e «bem-aventurados», que é uma escolha de dicionário e não de gramática.`),
  vocab: [
    V('ada', 'ada', 'haver, existir'),
    V('adalah', 'adalah', 'ser, é'),
    V('bukan', 'bukan', 'não (cópula e nome)'),
    V('tidak ada', 'ada', 'não haver, não existir'),
    V('sakit', 'sakit', 'doente; estar doente'),
    V('besar', 'besar', 'grande'),
    V('kecil', 'kecil', 'pequeno'),
    V('terbuka', 'buka', 'estar aberto'),
    V('masuk', 'masuk', 'entrar'),
    V('keluar', 'keluar', 'sair'),
    V('rumah', 'rumah', 'casa'),
    V('pintu', 'pintu', 'porta'),
    V('masalah', 'masalah', 'problema'),
    V('pertanyaan', 'pertanyaan', 'pergunta'),
    V('punya', 'punya', 'ter'),
    V('milik', 'milik', 'de, pertencer a'),
    V('berdiri', 'diri', 'estar de pé'),
    V('berbahagia', 'bahagia', 'ser feliz'),
    V('bahagia', 'bahagia', 'feliz, felicidade'),
    V('miskin', 'miskin', 'pobre'),
    V('salah', 'salah', 'errado; culpado'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O adjetivo pode ser predicado sem cópula: {Dia sakit}, {Rumah itu besar}, {Pintu terbuka}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ada} põe um substantivo em estado sem identificar sujeito: {Ada masalah}, {Ada pertanyaan}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Ter é {punya}, {milik} ou o clítico {-nya}; nunca {ada}. {Saya punya rumah}, nunca {ada rumah saya} para dizer «tenho uma casa».',
      ),
    },
    {
      n: '4',
      text: T(
        'A negação de {ada} é {tidak ada}; a de {adalah} é {bukan}: {Ini bukan masalah} e {Ini tidak ada masalah} são frases diferentes.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com {yang}, o adjetivo precisa de {yang} para não ser lido como substantivo: {Yang sakit itu dia}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O adalah enfático'),
      text: T(
        '{Dia adalah manusia} não é o mesmo que {Dia manusia}. O {adalah} marca uma identidade que o ouvinte talvez esperasse negar, e por isso soa perto de uma acusação. Em texto religioso e em traduções antigas ele aparece com frequência.',
      ),
    },
    {
      label: T('Onde o estado se disfarça de verbo'),
      text: T(
        'Verbos como {berdiri} e {berbahagia} parecem verbos de ação e não são: {berdiri} é estar de pé, {berbahagia} é ser feliz. O {ber-} marca estado, e é por isso que a oração de Mz 5:3 aceita {berbahagia} no lugar de um {adalah} que a língua dispensa.',
      ),
    },
  ],
  examples: [
    { text: 'Dia sakit.', gloss: T('Ele está doente.') },
    { text: 'Rumah itu besar.', gloss: T('Aquela casa é grande.') },
    {
      text: 'Rumah itu adalah besar.',
      gloss: T('Aquela casa é de fato grande (formal, enfático).'),
    },
    { text: 'Ada masalah besar di sini.', gloss: T('Há um grande problema aqui.') },
    { text: 'Ada pertanyaan yang belum terjawab.', gloss: T('Há uma pergunta sem resposta.') },
    { text: 'Saya punya dua buku.', gloss: T('Eu tenho dois livros.') },
    { text: 'Rumah itu milik saya.', gloss: T('Aquela casa é minha.') },
    { text: 'Ini bukan masalah.', gloss: T('Isto não é um problema.') },
    { text: 'Ini tidak ada masalah.', gloss: T('Não há problema.') },
    { text: 'Yang sakit itu dia.', gloss: T('Aquele que está doente é ele.') },
  ],
  tables: [
    {
      caption: T('Predicado de estado'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['adjetivo', 'S + adj', 'Dia sakit', 'ele está doente'],
        ['adjetivo', 'S + adj', 'Rumah itu besar', 'aquela casa é grande'],
        ['estado com ter-', 'S + ter-', 'Pintu terbuka', 'a porta está aberta'],
        ['estado com ber-', 'S + ber-', 'Dia berdiri di sana', 'ele está de pé ali'],
        ['identidade', 'S + adalah', 'Dia adalah manusia', 'ele é humano'],
        ['existência', 'ada + nome', 'Ada masalah', 'há um problema'],
        ['posse', 'S + punya', 'Dia punya rumah', 'ele tem uma casa'],
      ],
    },
    {
      caption: T('Existir, ser e ter'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada pertanyaan', 'há uma pergunta'],
        ['existe?', 'ada', 'Ada yang salah', 'há algo errado'],
        ['o que é?', 'adalah', 'Ini adalah buku', 'isto é um livro'],
        ['quem tem?', 'punya', 'Dia punya rumah', 'ele tem uma casa'],
        ['de quem?', 'milik', 'Rumah itu milik saya', 'aquela casa é minha'],
        ['de quem?', 'clítico -nya', 'Rumahnya besar', 'a casa dele é grande'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma mais natural de «ele está doente»?'),
    options: [T('Dia sakit'), T('Dia adalah sakit'), T('Dia ada sakit'), T('Dia sickness')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com o verbo de existir: «há um problema» = ___ masalah.'),
      answer: 'Ada',
      hint: T('O verbo que põe algo em estado sem identificar o sujeito.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «não há problema»?'),
      options: [
        T('Ini tidak ada masalah'),
        T('Ini bukan masalah'),
        T('Ini tidak masalah'),
        T('Ini ada masalah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a pergunta ao verbo'),
      pairs: [
        { a: T('existe?'), b: T('{ada}') },
        { a: T('o que é?'), b: T('{adalah}') },
        { a: T('quem tem?'), b: T('{punya}') },
        { a: T('de quem?'), b: T('{milik}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
