import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('A ortografia'),
  subtitle: T('Maiúsculas, hífen e vírgula'),
  section: T('Fundamentos'),
  body: C(`Na escrita alemã, a maiúscula tem função gramatical e não decorativa. Levam maiúscula: todos os substantivos (der Mann, die Stadt), os pronomes pessoais e possessivos (ich, du, mein, dein), os demonstrativos que funcionam como artigo (dieser, jede, welcher), o pronome de tratamento Sie e o artigo definido quando substitui o substantivo (der Mann → Der ist mein Freund). Também levam maiúscula os nomes próprios, as nacionalidades (der Deutsche, ein Österreicher) e os substantivos derivados de adjetivos (das Gute, das Schönste).

O hífen une os componentes de um composto quando se quer preservar a leitura dos elementos: heute-morgen, blau-weiß, Sowohl-als-auch. Fora desse uso, o composto escreve-se unido: Krankenhaus, Arbeitgeber.

A vírgula tem uma função precisa: separa o verbo conjugado do sujeito quando ambos abrem a oração, separa elementos coordenados, isola apostos e marca o início de uma oração subordinada. Aqui, a oração principal é Die Liebe ist lang, e a subordinada aparece depois: Die Liebe ist lang, weil sie ewig bleibt. A ordem dos dois verbos já basta para mostrar onde começa a subordinada.

Por fim, há um sinal que os alemães raramente omitem: os dois pontos antes de uma citação ou enumeração. E os pontos de interrogação e exclamação são obrigatórios, sem ponto final em nenhum dos dois casos.`),
  vocab: [
    V('der Mann', 'Mann', 'o homem'),
    V('die Stadt', 'Stadt', 'a cidade'),
    V('das Kind', 'Kind', 'a criança'),
    V('mein', 'mein', 'meu, meu'),
    V('Sie', 'Sie', 'você (formal); ela (pronome)'),
    V('das Gute', 'gut', 'o bem, o que é bom'),
    V('ein Österreicher', 'Österreicher', 'um austríaco'),
    V('der Punkt', 'Punkt', 'o ponto final'),
    V('das Komma', 'Komma', 'a vírgula'),
    V('der Doppelpunkt', 'Doppelpunkt', 'os dois pontos'),
    V('das Ausrufezeichen', 'Ausrufezeichen', 'o ponto de exclamação'),
    V('das Fragezeichen', 'Fragezeichen', 'o ponto de interrogação'),
    V('der Bindestrich', 'Bindestrich', 'o hífen'),
    V('heute-morgen', 'heute', 'hoje de manhã'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra está escrita corretamente?'),
    options: [T('das gute'), T('das Gute'), T('der gute'), T('die gute')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Qual pronome recebe maiúscula em todo o texto: sie ou ___?'),
      answer: 'Sie',
      hint: T('É a forma de tratamento polido.'),
    },
    {
      kind: 'choose',
      prompt: T('Onde a vírgula é obrigatória?'),
      options: [
        T('Wir kommen heute.'),
        T('Heute, wir kommen nicht.'),
        T('Weil wir kommen, freuen wir uns.'),
        T('Dass er kommt, ist gut.'),
      ],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relacione o substantivo à forma escrita.'),
      pairs: [
        { a: T('pessoa que ama'), b: T('die Liebe') },
        { a: T('sinal de pontuação'), b: T('das Ausrufezeichen') },
        { a: T('uma confederação suíça'), b: T('die Schweiz') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'fill',
      prompt: T('Ponha os dois pontos antes da citação: Er sagte ___ Ich komme.'),
      answer: ':',
      hint: T('Sinal de dois pontos em alemão.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo substantivo leva maiúscula, inclusive os nomes dos dias, meses, idiomas e países: der Montag, der Januar, der Deutsch.',
      ),
    },
    {
      n: '2',
      text: T(
        'O pronome Sie é a única forma que se escreve com maiúscula em todo o texto; sie minúsculo é o pronome feminino "ela".',
      ),
    },
    {
      n: '3',
      text: T(
        'A vírgula separa o sujeito do verbo quando o sujeito é retomado como elemento inicial: Liebe ist blind; Die Liebe ist blind. Não se escreve vírgula quando o sujeito vem depois do verbo.',
      ),
    },
    {
      n: '4',
      text: T('O ponto e vírgula é raro em alemão; prefira vírgula, ponto final ou período.'),
    },
  ],
  notes: [
    {
      label: T('Maiúscula do substantivo'),
      text: T(
        'Nas línguas germânicas antigas a regra era contrária: o acento estava na última palavra, não no substantivo. Foram os impressores do século XV que fixaram a maiúscula no substantivo, e o uso posterior apenas manteve o costume.',
      ),
    },
    {
      label: T('Vírgula antes do substantivo'),
      text: T(
        'A sintaxe alemã evita a aposição sem marca. Onde o português escribiria João, o irmão de Maria, o alemão prefere uma oração de relativo: Johann, der Bruder Mariens. A pausa antes do substantivo é a marca dessa oração.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest die Zeitung.',
      gloss: T('O homem lê o jornal (três substantivos com maiúscula).'),
    },
    { text: 'Sie kommt heute nicht.', gloss: T('Ela não vem hoje (Sie = ela).') },
    {
      text: 'Sie kommen bitte herein.',
      gloss: T('Por favor, entrem (Sie = você, tratamento formal).'),
    },
    {
      text: 'Das Gute ist noch nicht geschehen.',
      gloss: T('O bem ainda não aconteceu (adjetivo substantivado).'),
    },
    {
      text: 'Ich bleibe, weil es regnet.',
      gloss: T('Eu fico, porque está chovendo (vírgula antes de weil).'),
    },
    {
      text: 'Johann, der Bruder Mariens, kam.',
      gloss: T('João, o irmão de Maria, veio (aposto isolado por duas vírgulas).'),
    },
  ],
  tables: [
    {
      caption: T('O que leva maiúscula'),
      head: ['Categoria', 'Exemplos', 'Motivo'],
      rows: [
        ['Substantivos', 'der Baum, die Liebe, das Glück', 'regra geral: todo substantivo'],
        ['Pronomes', 'Ich, du, er, Sie', 'pronomes pessoais'],
        ['Pronomes possessivos', 'mein, dein, sein, ihr', 'sempre maiúsculos'],
        ['Pronome de tratamento', 'Sie kommen bitte herein', 'forma polida de você'],
        ['Artigo no lugar do substantivo', 'Der ist mein Lehrer.', 'substitui der Mann'],
        ['Substantivo de adjetivo', 'das Gute, das Bessere, das Schönste', 'substantivado'],
        [
          'Nomes próprios e nacionalidades',
          'Österreich, der Deutsche, die Schweiz',
          'nomes geográficos e de povos',
        ],
        ['Início de frase', 'Heute ist schönes Wetter.', 'posição inicial'],
      ],
    },
    {
      caption: T('A vírgula nos dois papéis'),
      head: ['Função', 'Exemplo', 'Porquê'],
      rows: [
        ['separa sujeito e verbo', 'Heute, 12. März, fährt der Zug ab.', 'sujeito abre a oração'],
        ['marca a subordinada', 'Ich bleibe, weil es regnet.', 'weil + verbo no fim'],
        ['separa coordenadas', 'Er kam, er sah, er Sieg.', 'três verbos paralelos'],
        ['isola o aposto', 'Herr Müller, der Chef, kommt.', 'substantivo explicativo'],
        ['não se usa', 'Er sieht, dass wir kommen.', 'dentro da subordinada'],
        ['não se usa', 'Ich habe, glaube ich, recht.', 'nunca antes do verbo que fecha a oração'],
      ],
    },
  ],
};
