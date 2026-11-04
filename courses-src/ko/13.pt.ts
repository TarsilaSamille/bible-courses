import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Números'),
  title: T('Dois sistemas numéricos que não se misturam — e a hora do relógio'),
  subtitle: T(
    'A escolha não é de registro, é de tipo de coisa: pessoas levam numeral nativo, coisas levam sino-coreano, e a hora do relógio é a prova',
  ),
  body: C(`## Dois sistemas, e a escolha não é de registro

O coreano tem dois conjuntos completos de numerais, e a primeira coisa a entender é que a escolha entre eles não é de tom nem de elegância. Quem vem do mandarim espera um sistema só, o mandarim tem um, e descobre que o coreano tem dois. O critério não é o registro: é o TIPO DA COISA que se está a contar, e a pergunta é uma só. Isto é contável ou não é?

O sino-coreano conta coisas. São {il}, {i}, {sam} e assim por diante até {sip}: minutos, horas do relógio escrito, meses, dias, moedas, anos, distâncias. Veio do chinês pelos hanja, e é exatamente o mesmo sistema do mandarim e do japonês.

O nativo conta o que não se conta uma a uma, e conta as pessoas. São {hana}, {dul}, {se} e assim por diante até die. As pessoas em coreano usam o nativo, sem exceção: é o único uso em que o sistema é obrigatório e não opcional.

E aqui está a armadilha que faz o iniciante desistir. Quatro e cinco são a mesma palavra nos dois sistemas, sa e o; oito e nove também, pal e gu; e o um soa quase igual, {il} e {hana}. Um aluno que aprende só a primeira dezena conclui que existe um sistema só. Não existem dois, e eles separam exatamente no ponto em que a pessoa aparece.

## A regra prática: pessoa é nativo, coisa é sino

Se um numeral vai contar pessoas, é nativo: {se} {myeong} sarang, três pessoas, e o {myeong} é obrigatório pela regra dos contadores: numeral, contador, substantivo. Se vai contar coisas, é sino-coreano: seis porcos é yuk mari, seis moedas é yuk won.

A idade é nativo, e é o caso que quase ninguém adivinha, porque uma idade é ao mesmo tempo uma pessoa e um número de anos. Trinta e cinco anos começa com {se} e não com {sam}, mesmo sendo um número de anos, porque o que está a ser contado é o tempo de vida de alguém. O dol das dezenas, seoreundeoldol, é a mesma coisa: é o nativo, com a parte "dois" trocada de som.

E o contador continua com a regra de sempre: com numeral nativo, pronúncia curta; a partir de dez, pronúncia longa, mesma escrita. Três pessoas é {se} {myeong}; treze pessoas é {sip} {myeong}. A escrita do contador não mudou, e é por isso que ler coreano em silêncio pronuncia quase tudo errado.

## A hora do relógio: sino por escrito, nativo na fala

A hora é a prova mais limpa da regra, porque o mesmo número aparece nas duas formas na mesma frase. Escrito, o relógio usa sino-coreano: {sam} {si}, três horas. Falado, usa nativo: {se} {si}, as mesmas três horas. Nos dois casos o {si} entra logo depois do numeral e age como contador, sem substantivo nenhum.

Depois do número da hora vem {jeongal}, "em ponto", e ele concorda com a hora: yeoseol jeongal, seis em ponto; ilgop jeongal, sete em ponto. {jeongal} é o exato, o que bate na hora; a hora aproximada não leva partícula nenhuma. E a metade da hora também vem depois do número: {ohaseo} {hana} {si} ban, uma e meia da manhã.

De manhã e de tarde: {ohaseo}, manhã, e {gayo}, tarde. O que se diz na rua é {se} {si} {jeongal}; o que se escreve num quadro de horários é {sam} {si} {jeongal}. O mesmo relógio, dois sistemas, e nenhum deles errado.

## De onze em diante: o dez vem antes, e a primeira parte muda

Os números de dois dígitos constroem-se como em todas as línguas deste projeto: dez primeiro, unidade depois. Dezasseis é sim {nol}: dez antes, seis depois. É a mesma ordem posicional do mandarim e do japonês, com o mesmo absurdo aparente, dez e seis nunca é dez e seis.

A irregularidade real está no som. De onze a dezanove o "dez" não é {sip}: é {nol} quando a unidade é seis, como em sim {nol}, e hul quando a unidade é dois, como em {sip} hul para doze. Nas outras décadas o dez volta a {sip} normal, {i} {sip} vinte, {sam} {sip} trinta, gu {sip} noventa, e a parte "dois" vira dol, como em {sam} dol, trinta e dois. É a mesma mudança que faz o contador trocar de pronúncia depois de dez: uma regra só, vista de dois lados.

Quem se perde na aritmética perde por excesso de memorização. O resumo cabe numa frase: até dez, aprende-se; de onze a dezanove, são nove formas para não poder errar; de vinte a noventa e nove, o esquema acima já dá todas, e ninguém precisa decorar mais nada.

O versículo que amarra as duas metades está em João 18:18. Pedro nega Jesus e o texto marca a hora: {sam} {si}, por volta das três, no momento em que os guardas voltam para a sala e a luz do fogo acende o rosto dele. É um numeral sino-coreano numa hora de relógio, e o mesmo número na fala de quem contou a história é {se} {si}. A mesma noite, a mesma hora, dois sistemas: o escrito segue o sino-coreano porque hora de relógio é contagem de tempo, e a fala segue o nativo porque é gente falando. Quem pergunta qual dos dois é o verdadeiro não sabe coreano: os dois são.
`),
  vocab: [
    V('il', '일', 'um; numeral sino-coreano (il)'),
    V('i', '이', 'dois; numeral sino-coreano (i)'),
    V('sam', '삼', 'três; numeral sino-coreano (sam)'),
    V('sip', '십', 'dez; numeral sino-coreano (sip)'),
    V('hana', '하나', 'um; numeral nativo (hana)'),
    V('dul', '둘', 'dois; numeral nativo (dul)'),
    V('se', '세', 'três; numeral nativo (se)'),
    V('nol', '놀', 'a parte "dez" do dezasseis: sim {nol}'),
    V('si', '시', 'hora; entra logo depois do numeral e age como contador'),
    V('jeongal', '정각', 'em ponto; hora exata, e concorda com a hora (jeongal)'),
    V('ohaseo', '오전', 'manhã; antes do meio-dia (ohaseo)'),
    V('gayo', '오후', 'tarde; depois do meio-dia (gayo)'),
    V('myeong', '명', 'contador de pessoas (myeong)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O coreano tem dois sistemas numéricos e a escolha entre eles é de TIPO DE COISA, não de registro: a pergunta é se o que se conta é contável.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sino-coreano para coisas, minutos, horas escritas, meses, dias, moedas e anos ({il} a {sip}); nativo para o que é incontável, para as pessoas ({hana} a die) e para as idades.',
      ),
    },
    {
      n: '3',
      text: T(
        'Pessoas levam sempre o nativo e o contador {myeong} é obrigatório: {se} {myeong} sarang. A partir de dez o mesmo contador muda de pronúncia, {sip} {myeong}, sem mudar de escrita.',
      ),
    },
    {
      n: '4',
      text: T(
        'A hora do relógio é sino-coreana por escrito ({sam} {si}) e nativa na fala ({se} {si}); {jeongal} é o "em ponto" e concorda com a hora, e {ohaseo} e {gayo} separam manhã de tarde.',
      ),
    },
    {
      n: '5',
      text: T(
        'Nos números de dois dígitos o dez vem sempre antes: sim {nol} é dezasseis. De 11 a 19 o "dez" muda de som ({nol}, hul) e nas outras décadas vira {sip}, com dol no lugar do dois.',
      ),
    },
  ],
  notes: [
    {
      label: T('O sino-coreano é o mesmo do mandarim'),
      text: T(
        'Os dois sistemas coreanos não têm a mesma idade. O sino-coreano veio do chinês pelos hanja e é partilhado com o mandarim e com o japonês; o nativo é coreano e não tem equivalente fora da língua. Por isso quem já sabe mandarim reconhece de imediato a série dos dias e dos meses, e aprende duas vezes a mesma coisa para as pessoas.',
      ),
    },
    {
      label: T('A mesma hora, dois sistemas'),
      text: T(
        'Não há um coreano "certo" para a hora do relógio: há o sino-coreano dos horários escritos e o nativo da conversa, e os dois circulam no mesmo dia. Um tradutor que não souber qual escolher produz uma frase que nenhum falante diria — ou, pior, uma em que a pessoa que aparece no texto simplesmente desaparece.',
      ),
    },
  ],
  examples: [
    {
      text: '사람 세 명',
      gloss: T('sarang se myeong — três pessoas: numeral nativo, contador, substantivo'),
    },
    {
      text: '삼 시쯤',
      gloss: T('sam sijjeum — por volta das três horas: hora escrita em sino-coreano'),
    },
    { text: '세 시', gloss: T('se si — três horas: a mesma hora, dita com numeral nativo') },
    {
      text: '돼지 여섯 마리',
      gloss: T('dwaeji yeoseot mari — seis porcos: coisa, logo sino-coreano, mais contador'),
    },
  ],
  tables: [
    {
      caption: T('Os dois sistemas lado a lado, e onde cada um entra'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('Onde o nativo manda')],
      rows: [
        [T('1'), T('{il}'), T('{hana}'), T('pessoas e idades')],
        [T('2'), T('{i}'), T('{dul}'), T('pessoas e idades')],
        [T('3'), T('{sam}'), T('{se}'), T('pessoas')],
        [T('4'), T('sa'), T('sa'), T('palavra igual nos dois')],
        [T('5'), T('o'), T('o'), T('palavra igual nos dois')],
        [T('6'), T('yuk'), T('nul'), T('pessoas')],
        [T('7'), T('chil'), T('yil'), T('pessoas')],
        [T('8'), T('pal'), T('pal'), T('palavra igual nos dois')],
        [T('9'), T('gu'), T('gu'), T('palavra igual nos dois')],
        [T('10'), T('{sip}'), T('die'), T('meses, dias, moedas, anos')],
      ],
    },
    {
      caption: T('Onze a dezanove, onde o "dez" muda de som'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('Como se decompõe')],
      rows: [
        [T('11'), T('{sip} {il}'), T('yeol han'), T('dez e um, sem troca')],
        [T('12'), T('{sip} hul'), T('yeol dul'), T('o dois vira hul')],
        [T('13'), T('{sip} {sam}'), T('yeol set'), T('dez e três')],
        [T('14'), T('{sip} sa'), T('yeol net'), T('dez e quatro')],
        [T('15'), T('{sip} o'), T('yeol daseot'), T('dez e cinco')],
        [T('16'), T('sim {nol}'), T('yeol yeoseot'), T('o dez vira {nol}')],
        [T('17'), T('{sip} chil'), T('yeol ilgop'), T('dez e sete')],
        [T('18'), T('{sip} pal'), T('yeol yeodeol'), T('dez e oito')],
        [T('19'), T('{sip} gu'), T('yeol ahop'), T('dez e nove')],
      ],
    },
    {
      caption: T('De vinte a noventa e nove: o esquema basta'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('O que muda')],
      rows: [
        [T('20'), T('{i} {sip}'), T('seoreun'), T('dez normal; nas dezenas, o dois vira dol')],
        [T('21'), T('{i} hul'), T('seoreun hana'), T('o dois vira hul')],
        [T('32'), T('{sam} {i}'), T('seoreundol'), T('a dezena é {sam}, a unidade é {i}')],
        [T('40'), T('sa {sip}'), T('saeseun'), T('daqui em diante, nada muda')],
        [T('50'), T('o {sip}'), T('daseun'), T('igual ao padrão')],
        [T('60'), T('yuk {sip}'), T('yueseun'), T('igual ao padrão')],
        [T('70'), T('chil {sip}'), T('chilseun'), T('igual ao padrão')],
        [T('80'), T('pal {sip}'), T('palseun'), T('igual ao padrão')],
        [T('90'), T('gu {sip}'), T('auseun'), T('igual ao padrão')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz, na FALA, "três horas do relógio"?'),
    options: [T('{se} {si}'), T('{sam} {si}'), T('{se} {myeong}'), T('{sam} {jeongal}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "dezasseis" na forma sino-coreana escrita: sim ____'),
      answer: '놀',
    },
    {
      kind: 'match',
      prompt: T('Ligue o numeral ao que ele significa no sistema indicado'),
      pairs: [
        { a: T('{sam}'), b: T('três no sistema sino-coreano') },
        { a: T('{se}'), b: T('três no sistema nativo') },
        { a: T('{hana}'), b: T('um no sistema nativo') },
        { a: T('{sip}'), b: T('dez no sistema sino-coreano') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Quantas pessoas são, na forma correcta?'),
      options: [T('{se} {myeong}'), T('{sam} {myeong}'), T('{se}'), T('{sam} {myeong} sarang')],
      answer: 0,
    },
  ],
};
