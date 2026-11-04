import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Pronomes'),
  title: T('Pronome interrogativo e a partícula {嗎}'),
  subtitle: T('A pergunta não inverte nada: mesma ordem da afirmação, e uma partícula no fim'),
  body: C(`
## A pergunta não se mexe

O português e o inglês marcam a pergunta pela inversão. De "você gosta de maçã" sai "gosta de maçã?": o verbo sobe para o lugar do sujeito e a interrogação fica à mostra na forma da frase. O Mandarin não faz nada disso. {nǐ xǐhuan píngguǒ}, você gosta de maçã, e {nǐ xǐhuan píngguǒ ma} são a mesma frase: os mesmos quatro elementos, a mesma ordem, e uma partícula no fim. Não subiu nada, não desceu nada.

A prova aparece nos verbos em que a inversão mudaria o sentido. "Você come maçã?" e "Você gosta de maçã?" coincidem com o Mandarin porque os dois cabem na ordem direta; mas o Mandarin também rejeita "a maçã come?", {píngguǒ chī}, um substantivo colado num verbo e sem sujeito. Isso não é uma pergunta nem uma afirmação: é a frase sem verbo, com um verbo enfiado no meio, e continua errada pelo mesmo motivo.

O erro simétrico é o que quase todo mundo comete: trazer o sujeito para o fim. {xǐhuan píngguǒ nǐ ma} não é Mandarin, não é pergunta e não significa nada. O Mandarin não tem a frase de sujeito adiado que o português e o inglês construíram; tem a ordem fixa do sujeito- verbo-objeto e uma partícula que faz o trabalho da interrogação.

## {嗎}: uma partícula que faz tudo

{ma} é a partícula da pergunta de sim ou não, e ela é uma peça só. Veja a mesma frase em três estados:

- **afirmativa** — {nǐ xǐhuan píngguǒ}, "você gosta de maçã".
- **negativa** — {nǐ bù xǐhuan píngguǒ}, "você não gosta de maçã": a negação é {bù}, e nada mais muda.
- **interrogativa** — {nǐ xǐhuan píngguǒ ma}, "você gosta de maçã?": a mesma frase, com {ma} no fim.

O que muda não é a frase: é o tipo. E é por isso que {ma} é a partícula mais barata da língua, uma sílaba que não tem sentido próprio e mesmo assim faz toda a diferença.

Uma restrição decorre disso, e vem da posição: {ma} precisa de um verbo ou de um adjetivo onde se apoiar. {nǐ lái ma} funciona, {nǐ hěn lèi ma} funciona, e {nǐ shì ma}, "você é?", funciona também, porque {shì} é o verbo que mais aceita {ma} em Mandarin: liga dois sintagmas nominais, e a pergunta incide naturalmente sobre essa ligação. O que falha é {ma} sem apoio nenhum: {nǐ ma} não é pergunta, é ruído.

A segunda restrição é de tipo, não de posição: {ma} só fecha pergunta de sim ou não. {nǐ yào qù nǎlǐ ma} está errado, porque a resposta a uma pergunta de lugar não pode ser sim ou não. Esse é o teste prático: se a resposta puder começar com "sim" ou "não", use {ma}; se não puder, não use.

O Mandarin distingue o que o português distingue, mas pelos meios opostos. O português distingue invertendo; o Mandarin distingue escolhendo a partícula, ou não colocando partícula nenhuma.

## A pergunta neutra e as outras duas partículas

Uma pergunta que não espera sim ou não não precisa de {ma}. {nǐ yào qù nǎlǐ}, "para onde você vai?", está completa: o que marca a interrogação é a entonação, que sobe no fim da frase, e o fato de {ma} não estar ali. O mesmo vale para {nǐ chī shénme} e {tā shì shéi}.

Nesses casos o Mandarin dispõe de duas outras partículas que o português não tem:

- {ne} é a partícula da referência: entra quando a pergunta recai sobre algo já mencionado, sobre o que o outro acabou de dizer. {nǐ shì shénme?} pergunta o nome de alguém que se apresentou; {nǐ shì shénme ne?} pergunta o nome do *outro*. Ela aponta, não interroga.
- {ba} é a partícula da sugestão e da confirmação: {zǒu ba} propõe, {hǎo ba} fecha um acordo, {shì ba} pede que o ouvinte confirme o que se disse.

Com três partículas onde o português tem uma boca só, quem traduz a partir do português erra duas vezes no mesmo parágrafo: põe {ma} onde havia entonação, e põe a entonação onde havia partícula.

## Os pronomes, a posição, e a pergunta de Pedro

O pronome interrogativo ocupa o lugar que o substantivo ocuparia, e o lugar do substantivo é antes do verbo, como qualquer objeto. Por isso a posição não é um detalhe: é a posição do substantivo.

{wèishénme} é o único que carrega marca visível: é wèi mais shénme, "pelo quê" tornado "por quê". {duōshao} pergunta preço e quantidade que não se conta, como em {duōshao qián}, quanto custa; o parente que conta objetos é {jǐ}, em {jǐ běn shū}. Os dois moram na mesma posição, a do substantivo e antes do verbo, e nenhum dos dois pede {ma}.

O ganho bíblico é exato: João 6:68, {nǐ wǎng nǎlǐ qù}, "para onde você vai?", é a pergunta de Pedro a Jesus. É uma pergunta sem inversão, sem {ma}, com o pronome no lugar do substantivo e o verbo no fim. A fala do dia a dia acrescenta o verbo {yào} e diz {nǐ yào dào nǎlǐ qù}; João 6:71 repete o {yào}, {nǐ yào wǎng nǎlǐ qù}, e João 1:38 faz a mesma pergunta precedida de làbì, "rabino". Três perguntas, a mesma frase.

E a {和合本} mostra por que vale aprender a forma escrita: {shéi} tem forma longa falada, shuí; {nǎlǐ} tem a falada nǎr; {zěnme} tem a forma mais formal zěnyàng. A Bíblia imprime sempre a escrita. Quem aprendeu falando reconhece a frase e não reconhece o caractere, e quem só lê nunca teve o problema, porque a pergunta não muda.`),
  vocab: [
    V('ma', '吗', 'partícula da pergunta de sim ou não; sempre no fim (ma)'),
    V('ne', '呢', 'partícula de referência: pergunta recai sobre algo já dito (ne)'),
    V('ba', '吧', 'partícula de sugestão e de confirmação (ba)'),
    V('shéi', '谁', 'quem, alguém (forma escrita); falado shuí (shéi)'),
    V('shuí', '谁', 'forma falada de shéi, comum fora do norte (shuí)'),
    V('shénme', '什么', 'o quê, que (shénme)'),
    V('nǎlǐ', '哪里', 'onde (forma escrita); falado nǎr (nǎlǐ)'),
    V('nǎr', '哪儿', 'onde, na fala (nǎr)'),
    V('zěnme', '怎么', 'como (zěnme); a forma escrita mais formal é zěnyàng'),
    V('duōshao', '多少', 'quanto, que preço (duōshao)'),
    V('wèishénme', '为什么', 'por quê; é wèi mais shénme (wèishénme)'),
    V(
      '和合本',
      '和合本',
      'a tradução-union da Bíblia em chinês, a forma escrita que este curso segue',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A pergunta tem a ordem da afirmação: {nǐ xǐhuan píngguǒ ma} é {nǐ xǐhuan píngguǒ} mais {ma} no fim. Nada se inverte.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ma} fecha pergunta de sim ou não e precisa de um verbo ou adjetivo antes: {nǐ lái ma}, nunca {nǐ shì ma}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Pergunta de resposta aberta dispensa {ma}: {nǐ yào qù nǎlǐ}, nunca {nǐ yào qù nǎlǐ ma}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O pronome interrogativo ocupa o lugar do substantivo, que é antes do verbo: {nǐ yào qù nǎlǐ}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ma} é pergunta, {ne} é referência ao que já foi dito, {ba} é sugestão ou confirmação.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que {ma} não fecha pergunta aberta'),
      text: T(
        '{nǐ yào qù nǎlǐ ma} não é Mandarin: {nǎlǐ} pergunta por um lugar, e a resposta não pode ser sim ou não. Quem quiser {ma} tem de reformular a pergunta: {nǐ yào qù ma} — "você vai?".',
      ),
    },
    {
      label: T('A {和合本} escreve o que a fala encurta'),
      text: T(
        '{shéi} (falado shuí), {nǎlǐ} (falado nǎr), {zěnme} (que também se escreve zěnyàng). A Bíblia usa quase sempre a forma escrita, que é mais longa e mais clara. Quem lê reconhece o que já ouviu; quem só fala reconhece a frase e nunca o caractere.',
      ),
    },
  ],
  examples: [
    { text: '你喜歡蘋果嗎', gloss: T('nǐ xǐhuan píngguǒ ma — você gosta de maçã?') },
    { text: '你是誰', gloss: T('nǐ shì shéi — quem é você?') },
    { text: '你要吃什麼', gloss: T('nǐ yào chī shénme — o que você vai comer?') },
    { text: '你往哪裡去', gloss: T('nǐ wǎng nǎlǐ qù — para onde você vai? (João 6:68)') },
  ],
  tables: [
    {
      caption: T('Uma partícula, três frases'),
      head: [T('Tipo'), T('Frase'), T('Glosa')],
      rows: [
        [T('afirmativa'), T('{nǐ} {xǐhuan} {píngguǒ}'), T('você gosta de maçã')],
        [T('negativa'), T('{nǐ} {bù} {xǐhuan} {píngguǒ}'), T('você não gosta de maçã')],
        [T('interrogativa'), T('{nǐ} {xǐhuan} {píngguǒ} {ma}'), T('você gosta de maçã?')],
      ],
    },
    {
      caption: T('Três partículas onde o português tem uma'),
      head: [T('Partícula'), T('O que faz'), T('Onde entra'), T('Exemplo')],
      rows: [
        [
          T('{ma}'),
          T('pergunta de sim ou não'),
          T('no fim, depois do verbo'),
          T('{nǐ} {lái} {ma} você vem?'),
        ],
        [
          T('{ne}'),
          T('pergunta sobre algo já dito'),
          T('no fim, sobre o citado'),
          T('{nǐ} {shì} {shénme} {ne} e você?'),
        ],
        [
          T('{ba}'),
          T('sugere ou confirma'),
          T('no fim, sobre o proposto'),
          T('{wǒ} {men} {zǒu} {ba} vamos?'),
        ],
      ],
    },
    {
      caption: T('Pronomes interrogativos, todos antes do verbo'),
      head: [T('Pronome'), T('Pergunta'), T('Exemplo'), T('Observação')],
      rows: [
        [T('{shéi}'), T('quem'), T('{nǐ} {shì} {shéi}'), T('forma falada shuí')],
        [T('{shénme}'), T('o quê'), T('{nǐ} {chī} {shénme}'), T('também pergunta "qual"')],
        [T('{nǎlǐ}'), T('onde'), T('{nǐ} {qù} {nǎlǐ}'), T('falado nǎr')],
        [T('{zěnme}'), T('como'), T('{nǐ} {zěnme} {qù}'), T('escrito também zěnyàng')],
        [T('{duōshao}'), T('quanto'), T('{duōshao} {qián}'), T('preço e não contáveis')],
        [T('{wèishénme}'), T('por quê'), T('{wèishénme} {bù} {qù}'), T('é wèi mais shénme')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se pergunta "você gosta de maçã?" em Mandarin?'),
    options: [
      T('{nǐ xǐhuan píngguǒ ma}'),
      T('{xǐhuan píngguǒ nǐ ma}'),
      T('{ma nǐ xǐhuan píngguǒ}'),
      T('{nǐ ma xǐhuan píngguǒ}'),
    ],
    answer: 0,
    hint: T('A ordem não muda: a partícula entra no fim, e o sujeito fica onde estava.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a pergunta "você gosta de maçã?": 你喜歡蘋果____'),
      answer: '嗎',
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome interrogativo à pergunta'),
      pairs: [
        { a: T('{shéi}'), b: T('quem') },
        { a: T('{shénme}'), b: T('o quê') },
        { a: T('{nǎlǐ}'), b: T('onde') },
        { a: T('{zěnme}'), b: T('como') },
        { a: T('{duōshao}'), b: T('quanto') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas frases é uma pergunta correta de "para onde você vai?"?'),
      options: [
        T('{nǐ dào nǎlǐ ma}'),
        T('{nǐ wǎng nǎlǐ qù}'),
        T('{nǎlǐ nǐ qù}'),
        T('{qù nǐ nǎlǐ}'),
      ],
      answer: 1,
    },
  ],
};
