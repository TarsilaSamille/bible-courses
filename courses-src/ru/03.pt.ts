import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('A escrita'),
  title: T('A sílaba e a redução vocálica'),
  subtitle: T('через se escreve com duas vogais e se fala sem nenhuma delas'),
  body: C(`
## Toda sílaba tem um núcleo

Uma sílaba tem exatamente uma vogal, e essa vogal é o núcleo. As consoantes se agarram a ele, antes ou depois, e não formam núcleo sozinhas. Isso vale para o russo como vale para o latim, e é o que permite contar sílabas num texto sem saber falar a língua.

Em через a escrita mostra duas vogais, че e рез, e são duas sílabas: че-рез. Em Слово Твое são quatro: Сло-во Тво-е. A contagem de sílabas é sempre feita sobre a escrita, e é por isso que a leitura em voz alta começa por uma conta que o texto já fez.

O detalhe que muda tudo é que a vogal do núcleo não é sempre a mesma. Em через a primeira vogal é [e] cheia, e isso só é possível porque o acento está na segunda sílaba.

## A vogal fora do acento

O russo reduz as vogais que não recebem acento. Não é um acidente de dicção nem um efeito de dialecto: é o sistema, e ele é categórico. Uma vogal acentuada mantém o som que a letra anuncia; uma vogal não acentuada perde a identidade e vira o som mais genérico que o aparelho vocal permite naquela posição.

A consequência prática é grande. Compare слово, em que o o está no acento e soa [o], com слове, em que o mesmo o está fora do acento e soa curto e arredondado. É a mesma raiz. O que muda é o acento, e o que o acento faz é escolher entre duas vogais que a escrita distingue e a fala quase não distingue.

## Três sons que valem por cinco vogais

A redução é mais fácil de descrever contando. As dez vogais escritas caem, fora do acento, em três sons principais: o de а e о é um só, o de и e ы é um só, o de е, я e ю é um só. Fora do acento, trocar а por о numa palavra cuja sílaba tônica vem depois não muda o que se ouve.

**A ё é a exceção que confirma a regra.** Ela nunca reduz, porque está sempre no acento. Toda palavra com ё tem pelo menos uma sílaba falada com a vogal cheia, e é por isso que a transcrição fonética do russo não anota essa letra: ela é redundante para quem lê e indispensável para quem fala.

Uma palavra de uma sílaba não reduz nada, porque não há onde reduzir. Por isso свет se fala com o e cheio, e o mesmo som de vogal cheia aparece em пот e em рот, onde a consoante muda e a vogal não.

O gancho está em João 1:3, e o verso serve justamente por causa de через. **Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** A palavra через está escrita com duas vogais acentuáveis e é falada sem nenhuma delas. Quem pronuncia che-rez com as duas vogais abertas está falando uma língua que ninguém fala.

## O que a redução faz com quem lê

Para quem traduz, a redução importa pouco: ela é som, não sentido. Para quem lê em voz alta, ou para quem dita, ela é tudo. Uma palavra escrita com duas vogais pode ser falada com duas vogais mudas, e quem escreve não tem como saber quais.

A não ser que a palavra traga o acento escrito. Um acento marcado é a única coisa na ortografia russa que diz qual das vogais é real. É por isso que os dicionários russos o imprimem, e é por isso que o acento não é um detalhe.`),
  vocab: [
    V('слог', 'слог', 'sílaba'),
    V('ударный слог', 'ударный слог', 'sílaba acentuada'),
    V('ударение', 'ударение', 'acento'),
    V('редукция', 'редукция', 'redução vocálica'),
    V('гласная', 'гласная', 'vogal'),
    V('согласная', 'согласная', 'consoante'),
    V('через', 'через', 'por meio de; duas vogais reduzidas'),
    V('начало', 'начало', 'começo'),
    V('быть', 'быть', 'ser, estar'),
    V('слово', 'слово', 'palavra'),
    V('Твое', 'твой', 'teu'),
    V('свет', 'свет', 'luz'),
    V('слове', 'слово', 'na palavra (prepositivo)'),
    V('ещё', 'ещё', 'ainda; a ё nunca reduz'),
    V('вода', 'вода', 'água'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda sílaba tem exatamente um núcleo vocálico. As consoantes não formam núcleo sozinhas.',
      ),
    },
    {
      n: '2',
      text: T(
        'A redução só acontece nas vogais átonas. A vogal acentuada mantém o som que a letra anuncia.',
      ),
    },
    {
      n: '3',
      text: T(
        'Fora do acento, {а} e {о} caem no mesmo som, {и} e {ы} no mesmo, {е}, {я} e {ю} no mesmo.',
      ),
    },
    {
      n: '4',
      text: T(
        'A {ё} nunca reduz, porque está sempre no acento. Por isso as transcrições fonéticas não a anotam.',
      ),
    },
    { n: '5', text: T('Palavra de uma sílaba não reduz nada.') },
  ],
  notes: [
    {
      label: T('A palavra escrita mente'),
      text: T(
        'через está escrita com duas vogais e não tem nenhuma das duas na fala. A escrita registra o radical histórico; a fala registra o que a boca fez com ele. Nenhuma das duas informações é falsa, e nenhuma basta sozinha: quem lê precisa do texto, quem fala precisa do ouvido.',
      ),
    },
    {
      label: T('Três sons, dez letras'),
      text: T(
        'А е ё и о у ю я ы э são dez vogais escritas. Fora do acento sobram três sons principais: o arredondado de а e о, o central de и e ы, o anterior de е, я e ю. Trocar а por о numa palavra acentuada na segunda sílaba não muda nada para quem ouve, e muda tudo para quem lê.',
      ),
    },
  ],
  examples: [
    { text: 'через', gloss: T('por meio de; che-rez escrito, duas vogais reduzidas') },
    { text: 'Все чрез Него начало быть', gloss: T('Tudo veio a ser por meio dele (Jo 1:3)') },
    { text: 'слово', gloss: T('palavra, com o o no acento') },
    { text: 'о слове', gloss: T('sobre a palavra, com o mesmo o reduzido') },
    { text: 'свет', gloss: T('luz; uma sílaba, nenhuma redução') },
    { text: 'пот', gloss: T('seiva; uma sílaba, nenhuma redução') },
    { text: 'ещё', gloss: T('ainda; a ё está no acento') },
    { text: 'Твое', gloss: T('teu; o й faz o trabalho da vogal e a ё marca o acento') },
    { text: 'вода', gloss: T('água; o a final está no acento') },
  ],
  tables: [
    {
      caption: T('A vogal escrita e o que ela vale'),
      head: [T('Vogal escrita'), T('No acento'), T('Fora do acento')],
      rows: [
        [T('а'), T('[a]'), T('[ɐ]')],
        [T('о'), T('[o]'), T('[ɐ]')],
        [T('и'), T('[ʲi]'), T('[ɨ]')],
        [T('ы'), T('[ɨ]'), T('[ɨ]')],
        [T('е'), T('[ʲe]'), T('[ʲɪ]')],
        [T('я'), T('[ja]'), T('[ʲɪ]')],
        [T('ю'), T('[ju]'), T('[u]')],
        [T('у'), T('[u]'), T('[u]')],
        [T('ё'), T('[o]'), T('nunca, está sempre no acento')],
        [T('э'), T('[e]'), T('[ɛ]')],
      ],
    },
    {
      caption: T('Quantas sílabas na escrita, quantos sons na fala'),
      head: [T('Palavra'), T('Escrita'), T('Onde está o acento'), T('O que a fala faz')],
      rows: [
        [T('через'), T('че-рез'), T('segunda sílaba'), T('as duas vogais caem')],
        [T('слово'), T('сло-во'), T('primeira sílaba'), T('o o final vira [ɐ]')],
        [
          T('о слове'),
          T('о сло-ве'),
          T('a palavra não tem acento próprio'),
          T('o o continua curto'),
        ],
        [T('свет'), T('svet, uma sílaba'), T('não há'), T('nada reduz')],
        [T('ещё'), T('е-щё'), T('segunda sílaba'), T('o e inicial some no ё')],
        [T('Твое'), T('Тво-е'), T('segunda sílaba'), T('[tvojə], o e final é schwa')],
      ],
    },
    {
      caption: T('Onde a redução aparece'),
      head: [T('Situação'), T('O que se ouve'), T('Exemplos')],
      rows: [
        [T('palavra de uma sílaba'), T('nenhuma redução'), T('свет, пот, рот')],
        [
          T('acento na primeira sílaba'),
          T('as vogais seguintes caem em [ɐ] ou [ɪ]'),
          T('слово, окно'),
        ],
        [
          T('acento na segunda sílaba'),
          T('a primeira vogal cai em [ɐ] ou [ɪ]'),
          T('через, светильник'),
        ],
        [T('presença de ё'), T('aquela vogal não cai nunca'), T('Твое, ещё, всё')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em через, qual vogal mantém o som pleno?'),
    options: [T('A primeira'), T('A segunda'), T('Nenhuma: as duas estão fora do acento')],
    answer: 1,
    hint: T(
      'O acento de через cai na segunda sílaba. A primeira vogal fica sem acento e se reduz.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: в ___ было Слово (Jo 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('Qual vogal nunca reduz?'),
      options: [T('о'), T('е'), T('ё')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Complete: ещё — a letra acentuada é ___'), answer: 'ё' },
  ],
};
