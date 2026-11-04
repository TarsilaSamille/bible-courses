import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Sintaxe'),
  title: T('Conectivos: {而}, {但}{是}, {所}{以}, {因}{为}'),
  subtitle: T('Quatro palavras que ligam orações, e uma delas faz dois trabalhos ao mesmo tempo'),
  body: C(`
## O mesmo caractere faz dois papéis

Em português "e" e "mas" são palavras distintas, e você escolhe entre elas sem pensar muito. No Mandarin há um caractere que cobre os dois: **{ér}**. Ele significa "e" numa oração e "mas" na próxima, e é o **contexto**, não a forma, que decide qual das duas você está lendo.

O par mais limpo mostra isso: {ér jīn} é "e agora", soma, continua. {rán'ér} é "mas, no entanto", interrompe e corrige o que veio antes. O segundo usa o mesmo {ér} com um prefixo na frente, e isso basta para virar contraste. Não há partícula, não há flexão, nada que diga "aqui é contradição": a posição do resto da frase diz.

Por isso o Mandarin tem menos uma palavra para o que o português resolve com duas, e por isso a leitura bíblica em chinês exige uma decisão a cada {ér}. Tradutor que escreve {ér} por hábito produz um texto mais plano do que o original grego, que era habilidoso em oposições.

## O "mas" explícito: {但是}

Quando o contraste é forte e deliberado, o Mandarin usa {dànshì}, duas sílabas, sem ambiguidade possível, "mas". É a palavra do segundo plano, escrita por extenso: {wǒ hěn lèi, dànshì wǒ yào qù} é "estou muito cansado, mas eu quero ir". Compare com {wǒ hěn lèi, ér wǒ yào qù}, que é a mesma ideia com o {ér} e soa mais leve, mais literário.

A regra prática para o leitor: se a frase é prosa corrente e o contraste é o ponto principal, {dànshì}. Se o texto é poético, ou se a linha anterior e a seguinte já estão cheias de paralelismo, {ér} ou {rán'ér}, porque ali o peso de um {dànshì} de duas sílabas quebraria o ritmo.

Repare na vírgula: ela vem antes de {dànshì} e de {ér} de contraste, sempre. Conectivo de contraste é uma pausa, e pausa em Mandarin se marca com vírgula.

## Porque e portanto: o par fixo

**{yīnwèi}** é "porque" e **{suǒyǐ}** é "portanto". Os dois vêm no início da oração que governam, e quase sempre aparecem juntos: {yīnwèi} … {suǒyǐ} é um par fixo, tão natural quanto "porque… portanto" em português.

Aqui a notícia é boa, depois de tanta inversão: português e Mandarin concordam nessa. "Portanto eu vou" e {suǒyǐ wǒ qù} põem a mesma palavra na mesma posição. O que muda é a direção: em português o "porque" é uma subordinação e o "portanto" também começa a frase principal; em Mandarin os dois são simétricos, cada um abrindo sua própria oração. {yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}, "porque eu estou cansado, portanto eu não vou", é uma frase Mandarin perfeitamente bem formada, com os dois conectivos em paralelo.

E {suǒyǐ} sozinho, sem {yīnwèi} antes, é perfeitamente normal: {suǒyǐ} {wǒ} {dào le}, "portanto eu cheguei". O {yīnwèi} é o que precisa de justificativa; o {suǒyǐ} é o que pode abrir a frase.

## Conectivo, sujeito, verbo

Este é o erro que todo falante de português comete na segunda frase em Mandarin. Um conectivo não entra em posição livre como no português: o "porque" e o "portanto" do Mandarin têm posição fixa, e essa posição é **antes do sujeito**.

{yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}.

Conectivo, sujeito, verbo. O conectivo precede o sujeito, não o verbo. Escrever {wǒ} {yīnwèi} {lèi} soa errado pelo mesmo motivo que {wǒ} {suǒyǐ} {qù} soa errado: você pôs a preposição atrás do sujeito. Quem traduz do português por correspondência palavra a palavra escreve "porque eu cansado" e descobre que nada funciona, porque o grego e o português têm a liberdade sintática que o Mandarin não tem.

Dois segundos de atenção à pontuação: a vírgula entra depois de {yīnwèi}, não antes. {yīnwèi} {wǒ} {lèi}, não {yīnwèi}, {wǒ} {lèi}. E a {和合本} pontua diferente do padrão ocidental em vários versículos com {yīnwèi}; se a sua cópia tem uma vírgula onde a outra não tem, não é erro seu nem erro dela, é convenção de edição.

O gancho para fixar tudo: em João 3:16 a {和合本} abre o versículo com o conectivo. {yīnwèi} {shén} {ài} {shìrén}, "porque Deus amou o mundo". O versículo inteiro começa com "porque", e o "amou" vem três palavras depois. Quem lê grego reconhece a abertura com o ὅτι; quem lê português reconhece o "porque" no começo. As duas línguas estão de acordo, e o Mandarin deixa isso visível logo na primeira linha. E em Provérbios 3:5, {nǐ} {yào} {zhuānxīn} {yǐkào} {Yēhéhuá}, "confia no Senhor", {yǐkào} é o verbo, "apoiar-se em": nada disso funciona se o conectivo não vier no lugar certo da oração.`),
  vocab: [
    V('ér', '而', 'e, mas (depende do contexto)'),
    V('dànshì', '但是', 'mas (contraste explícito)'),
    V("rán'ér", '然而', 'mas, no entanto (contraste formal)'),
    V('suǒyǐ', '所以', 'portanto, por isso'),
    V('yīnwèi', '因为', 'porque (vem no início da oração)'),
    V('yǐkào', '倚靠', 'apoiar-se em, confiar em (yǐkào)'),
    V('lèi', '累', 'cansado (lèi)'),
    V('qù', '去', 'ir (qù)'),
    V('ài', '爱', 'amar (ài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} significa "e" ou "mas" conforme o contexto; {rán\'ér} força o sentido de contraste.',
      ),
    },
    {
      n: '2',
      text: T(
        '{dànshì} é o "mas" explícito e vem sempre depois de vírgula: {wǒ hěn lèi, dànshì wǒ yào qù}.',
      ),
    },
    { n: '3', text: T('{yīnwèi} e {suǒyǐ} abrem a oração, no início, e formam um par fixo.') },
    {
      n: '4',
      text: T('Ordem obrigatória: conectivo, sujeito, verbo — nunca conectivo depois do sujeito.'),
    },
    { n: '5', text: T('A vírgula entra antes de conectivo de contraste e depois de {yīnwèi}.') },
  ],
  notes: [
    {
      label: T('O "e" que vira "mas"'),
      text: T(
        '{ér jīn} é "e agora", soma; {rán\'ér} é "mas, no entanto", corta. Mesmo caractere, função oposta — quem traduz precisa escolher a cada ocorrência.',
      ),
    },
    {
      label: T('Atenção à pontuação da {和合本}'),
      text: T(
        'A {和合本} às vezes pontua de maneira diferente do padrão ocidental em versículos com {yīnwèi}. Compare duas edições antes de concluir que há erro.',
      ),
    },
  ],
  examples: [
    {
      text: '我很累但是我要去',
      gloss: T('wǒ hěn lèi dànshì wǒ yào qù — estou muito cansado, mas eu quero ir'),
    },
    { text: '因为神爱世人', gloss: T('yīnwèi shén ài shìrén — porque Deus amou o mundo') },
    { text: '所以我今天不去', gloss: T('suǒyǐ wǒ jīntiān bù qù — portanto eu não vou hoje') },
    { text: '然而他依然来了', gloss: T("rán'ér tā yīrán lái le — mas ele veio assim mesmo") },
  ],
  tables: [
    {
      caption: T('Os quatro conectivos lado a lado'),
      head: [T('Palavra'), T('Glosa'), T('Posição'), T('Observação')],
      rows: [
        [T('{ér}'), T('e / mas'), T('início ou meio'), T('o contexto decide')],
        [T('{dànshì}'), T('mas'), T('início da 2ª oração'), T('vírgula antes')],
        [T('{suǒyǐ}'), T('portanto'), T('início da oração'), T('vem antes do sujeito')],
        [T('{yīnwèi}'), T('porque'), T('início da oração'), T('vírgula depois')],
      ],
    },
    {
      caption: T('A ordem que não se negocia'),
      head: [T('Passo'), T('Forma correta'), T('Erro do falante de português')],
      rows: [
        [T('1º'), T('{yīnwèi} {wǒ} {lèi}'), T('{wǒ} {yīnwèi} {lèi}')],
        [T('2º'), T('{suǒyǐ} {wǒ} {bù} {qù}'), T('{wǒ} {suǒyǐ} {bù} {qù}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我很累，但是我要去}, qual conectivo é o "mas" explícito?'),
    options: [T('{而}'), T('{所以}'), T('{但是}'), T('{因为}')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Abra a oração com o conectivo: ____神爱世人'),
      answer: '因为',
    },
    {
      kind: 'match',
      prompt: T('Ligue o conectivo à sua função'),
      pairs: [
        { a: T('{而}'), b: T('e ou mas, conforme o contexto') },
        { a: T('{但是}'), b: T('mas explícito, com vírgula antes') },
        { a: T('{所以}'), b: T('portanto, no início da oração') },
        { a: T('{因为}'), b: T('porque, no início da oração') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a ordem correta para "estou cansado, portanto não vou"?'),
      options: [
        T('{wǒ} {lèi}, {suǒyǐ} {bù} {qù}'),
        T('{lèi} {wǒ}, {suǒyǐ} {bù} {qù}'),
        T('{suǒyǐ} {wǒ} {bù} {qù}'),
        T('{wǒ} {suǒyǐ} {bù} {qù}'),
      ],
      answer: 2,
    },
  ],
};
