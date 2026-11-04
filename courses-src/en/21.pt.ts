import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('O advérbio: comparação e a posição do not'),
  subtitle: T('greater, the best, I do not think so — o que se compara'),
  section: T('Advérbio'),
  body: C(`## Comparar com mais e com menos

O comparativo de uma sílaba acrescenta {er} e o superlativo acrescenta {est}: {fast → faster → fastest}, {hard → harder → hardest}. Para duas ou mais sílabas entram {more} e {most}: {slowly → more slowly → most slowly}, {carefully → more carefully → most carefully}.

A regra do **superlativo com {the}** vem logo depois: um superlativo de mais de uma sílaba exige o artigo definido antes. Diz-se {the most careful}, {the most slowly}, e a forma sem {the} só aparece dentro de expressões fixas, como {He is one of the most careful teachers in the school}. Um superlativo curto dispensa o artigo, e é por isso que {fastest} aparece sozinho e {most carefully} não.

João 15:13 na KJV traz o comparativo irregular: {Greater love hath no man than this}. A forma {greater} não sai de {great} por nenhuma regra visível, e quem traduz precisa tratá-la como palavra.

## Os irregulares e os que não comparam

{Hardly}, {barely} e {lately} **não** são comparativos: não existe {more hardly}, nem {the most lately}. São advérbios de sentido fixo, e o aluno que os compara produz {He hardly ever comes mais hardly}, que não é inglês.

O que é irregular de verdade é outra lista, curta: {well → better → best}, {badly → worse → worst}, {little → less → least}, {far → farther/further → farthest/furthest}. E {late} tem {later} e {latest}, que significam "depois" e "o mais recente", não "mais tarde".

A prática com **well** é a que mais aparece em teste: {She sings well}, {She sings better than her sister}, {She sings the best of anyone}.

## A posição do not

A negação em inglês não vai antes do verbo. Ela entra **depois do auxiliar**: {I do not think so}, {He did not come}, {They have not seen it}. Quem escreve {I not think} quebra a frase, e quem escreve {I think not} na fala americana soa a formal.

Quando o verbo principal vem depois do auxiliar, o {not} fica entre os dois: {I think he is right} vira {I think he is not right}, e nunca {I think he is not right} com {not} depois do verbo.

A KJV usa a mesma distribuição: Marcos 4:38 traz {carest thou not that we perish?}, com {not} depois do verbo e antes do pronome. O português também coloca a negação depois do verbo, e é a relação entre {not} e o pronome que produz a leitura errada.

## Quando não há auxiliar

Com {be} e com os modais não há problema: o {not} entra depois deles ({He is not here}, {She cannot come}). Com os verbos comuns o inglês **cria** um auxiliar: {I do not believe}, {He does not know}, {They did not come}.

É a mesma partícula {do} em três tempos — {do not}, {does not}, {did not} —, e ela é a chave de toda a negação. Quem entende isso entende também a pergunta, porque a pergunta inverte exatamente o mesmo par.`),
  vocab: [
    V('faster', 'fast', 'mais rápido'),
    V('fastest', 'fast', 'o mais rápido'),
    V('more slowly', 'slowly', 'mais devagar'),
    V('most carefully', 'carefully', 'o mais cuidadosamente'),
    V('greater', 'great', 'maior'),
    V('the highest', 'high', 'o mais alto'),
    V('hardly', 'hardly', 'dificilmente'),
    V('barely', 'barely', 'mal'),
    V('lately', 'lately', 'ultimamente'),
    V('better', 'well', 'melhor'),
    V('the best', 'well', 'o melhor'),
    V('worse', 'badly', 'pior'),
    V('the worst', 'badly', 'o pior'),
    V('further', 'far', 'mais longe'),
    V('farthest', 'far', 'o mais longe'),
  ],
  rules: [
    {
      n: '1',
      text: T('Uma sílaba compara com -er e -est; duas ou mais sílabas comparam com more e most.'),
    },
    {
      n: '2',
      text: T(
        'O superlativo de mais de uma sílaba exige o artigo definido antes: the most careful, the most quietly.',
      ),
    },
    { n: '3', text: T('Hardly, barely e lately não têm forma comparativa nem superlativa.') },
    {
      n: '4',
      text: T(
        'Well, badly, little e far têm comparativos irregulares: better/best, worse/worst, less/least, farther/farthest.',
      ),
    },
    {
      n: '5',
      text: T('A negação vem depois do auxiliar, nunca antes do verbo: I do not think so.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 15:13 traz greater, comparativo irregular que não segue nenhuma regra visível. Marcos 4:38 traz carest thou not, com a negação depois do verbo e antes do pronome.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve "I not think" ou "he not came", o problema não é vocabulário: é que ele traduziu a posição da negação do português, onde ela vem depois do verbo.',
      ),
    },
  ],
  examples: [
    { text: '{Greater love hath no man than this}', gloss: T('maior amor ninguém tem que este') },
    { text: '{She sings better than her sister}', gloss: T('ela canta melhor que a irmã') },
    { text: '{She sings the best of anyone}', gloss: T('ela canta melhor que ninguém') },
    {
      text: '{He is one of the most careful teachers}',
      gloss: T('ele é um dos professores mais cuidadosos'),
    },
    { text: '{It is farther than I thought}', gloss: T('é mais longe do que eu pensava') },
    { text: '{I do not think so}', gloss: T('não acho assim') },
    { text: '{I think he is not right}', gloss: T('eu acho que ele não está certo') },
    { text: '{carest thou not that we perish}', gloss: T('não te importas que pereçamos?') },
    { text: '{He does not know}', gloss: T('ele não sabe') },
    { text: '{They did not come}', gloss: T('eles não vieram') },
  ],
  tables: [
    {
      caption: T('Comparação do advérbio'),
      head: [T('Tipo'), T('Forma'), T('Exemplo')],
      rows: [
        [T('uma sílaba'), T('{+er} / {+est}'), '{faster, hardest}'],
        [T('duas ou mais sílabas'), T('{more} / {most}'), '{more slowly, most carefully}'],
        [T('irregular'), T('—'), '{better/best, worse/worst, less/least}'],
        [T('superlativo longo'), T('{the most + advérbio}'), '{the most carefully}'],
      ],
    },
    {
      caption: T('Não comparam'),
      head: [T('Palavra'), T('O que é'), T('O que escrever em vez disso')],
      rows: [
        ['{hardly}', T('advérbio de escassez'), '{almost never}'],
        ['{barely}', T('advérbio de escassez'), '{just, hardly}'],
        ['{lately}', T('advérbio de tempo recente'), '{recently}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('I not think so'),
      T('I do not think so'),
      T('I not do think so'),
      T('I think not so much'),
    ],
    answer: 1,
    hint: T('A negação vai depois do auxiliar, não antes do verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete o comparativo: 'She sings ___ than her sister.'"),
      answer: 'better',
    },
    {
      kind: 'fill',
      prompt: T("Complete o superlativo com artigo: 'He is ___ most careful of them.'"),
      answer: 'the',
    },
    {
      kind: 'match',
      prompt: T('Ligue a base ao par completo.'),
      pairs: [
        { a: 'well', b: T('better / the best') },
        { a: 'badly', b: T('worse / the worst') },
        { a: 'little', b: T('less / the least') },
        { a: 'far', b: T('farther / the farthest') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('She hardly ever comes more hardly than me'),
        T('She comes later than me'),
        T('She comes lately than me'),
        T('She comes the lately than me'),
      ],
      answer: 1,
    },
  ],
};
