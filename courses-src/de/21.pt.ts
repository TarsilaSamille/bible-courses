import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Os verbos inseparáveis'),
  subtitle: T('besuchen, verstehen, erklären — o prefixo que nunca se solta'),
  section: T('Os verbos'),
  body: C(`## Nem todo prefixo é separável

A lição anterior mostrou verbos em que o prefixo viaja para o fim da oração. Este capítulo é o reverso da moeda: há verbos em que o prefixo **não sai do lugar**, nunca, em nenhum tempo verbal, por mais longa que seja a frase.

{besuchen} «visitar» é inseparável. Nunca {be*suchen} no fim da oração, nunca {ich besuche zu dir hin}. O {be-} é parte da raiz. E há um aviso por trás disso: **um verbo inseparável nunca aceita o {zu} da direção**.

Esse é o teste prático. Em {Ich sehe dich} «eu te vejo», o {zu} é impossível — seria {Ich sehe zu dich}, que soa errado. Já {Ich gehe zu dir} «eu vou até você» é impossível pela razão oposta: {gehen} é separável e exige {zu}.

## Três famílias

Os inseparáveis se organizam em três grupos, e cada grupo tem seu sufixo característico:

**1. Prefixo + verbo sem {te}.** {besuchen} {be-} + {suchen}, {verstehen} {ver-} + {stehen}, {erklären} {er-} + {klären}, {erzählen} {er-} + {zählen}, {empfehlen} {emp-} + {fehlen}. Aqui o prefixo se solda ao verbo base, que perde ou troca a própria terminação.

**2. Prefixo + verbo com {t} ou {d} intercalado.** {entstehen} {ent-} + {stehen}, {verstehen} {ver-} + {stehen}, {empfehlen} {emp-} + {fehlen}, {enthalten} {ent-} + {halten}, {erhalten} {er-} + {halten}. O {t} ou {d} entra entre o prefixo e o radical — {ent-ste-hen} — e a palavra continua inseparável como um todo.

**3. Prefixo + {ieren}.** {studieren}, {probieren}, {telefonieren}, {notieren}. Aqui o final {ieren} é o que torna o verbo fácil de reconhecer, e o primeiro {i} é sempre longo, [iː].

O único jeito de reconhecer um inseparável é **conhecer o verbo**. Não há regra de pronúncia nem de escrita que os separe dos separáveis. Por isso esta lição é, na prática, uma lista — e uma lista bem escolhida, com os verbos que você realmente vai encontrar.

## Os prefixos que importam

Os prefixos dos inseparáveis carregam sentido, e o mesmo prefixo reaparece em toda uma família:

- {be-} «por, para dentro»: {bekommen} «receber», {beginnen} «começar», {besuchen} «visitar», {bezahlen} «pagar», {betrachten} «observar»
- {ver-} «mal, fora de»: {verstehen} «entender», {verlieren} «perder», {verkaufen} «vender», {verbringen} «passar», {vergessen} «esquecer»
- {ent-} «separação, origem»: {entstehen} «originar-se», {entscheiden} «decidir», {entwickeln} «desenvolver», {enthalten} «conter»
- {er-} «alcançar um resultado»: {erzählen} «contar», {erklären} «explicar», {erfahren} «saber», {erinnern} «lembrar»
- {emp-} / {ent-} / {ver-} com negação: {empfehlen} «recomendar», {enthalten} «não conter»
- {zer-} «destruição total»: {zerbrechen} «quebrar», {zerstören} «destruir», {zerfallen} «desmoronar»
- {miss-} «erro, frustração»: {missverstehen} «entender errado», {missbilligen} «reprovar»

Repare em {er-}: significa «chegar a um fim». {Er erklärt die Regel} «ele explica a regra» — ele chegou aclareza. {Er zählt} «ele conta» — sem {er-}, não há resultado, apenas a ação bruta.

## O acento faz parte da regra

A pronúncia é o critério final. Um separável tem o acento no **radical** ({ˈaʊ̯fˌʃteːən}), e o prefixo é uma sílula fraca, quase engolida. Um inseparável tem o acento **no prefixo** ({bəˈzuːxən} em {besuchen}, [vɛɐ̯ˈʃteːən] em {verstehen}). Essa é a impressão sonora que o ouvido registra antes de qualquer análise.

Um teste rápido: fale a palavra bem devagar. Se a primeira sílaba é fraca e a segunda forte, provavelmente é separável. Se a primeira é a mais forte, provavelmente é inseparável.

## Onde eles aparecem

Inseparáveis dominam o escrito alemão e o vocabulário técnico, exatamente onde o composition é complexo: {erklären}, {beschreiben}, {verstehen}, {verbinden}. Na fala cotidiana há menos, e é por isso que um falante iniciante reconhece {besuchen} e {verstehen} antes de {aufstehen}: os dois primeiros nunca se soltam, e o terceiro é a imagem mesma da flexão.

## O essencial

Um verbo é inseparável quando o prefixo faz parte da raiz; a prova prática é que ele **recusa o {zu}** da direção; o {er-} significa «alcançar um resultado»; e o acento dos inseparáveis cai sobre o prefixo, não sobre o radical.`),
  vocab: [
    V('besuchen', 'besuchen', 'visitar (inseparável: ich besuche dich)'),
    V('verstehen', 'verstehen', 'entender, compreender (er versteht mich)'),
    V('erklären', 'erklären', 'explicar (er erklärt die Regel)'),
    V('erzählen', 'erzählen', 'contar, narrar (er erzählt eine Geschichte)'),
    V('bekommen', 'bekommen', 'receber, obter (ich bekomme ein Geschenk)'),
    V('beginnen', 'beginnen', 'começar (wir beginnen jetzt)'),
    V('verlieren', 'verlieren', 'perder (er verliert den Schlüssel)'),
    V('verkaufen', 'verkaufen', 'vender (sie verkauft das Haus)'),
    V('vergessen', 'vergessen', 'esquecer (ich habe es vergessen)'),
    V('entscheiden', 'entscheiden', 'decidir (er entscheidet sich)'),
    V('entstehen', 'entstehen', 'originar-se, nascer (das Gerücht ist entstanden)'),
    V('erfahren', 'erfahren', 'saber, ficar a saber (ich habe davon erfahren)'),
    V('erinnern', 'erinnern', 'lembrar (ich erinnere mich an dich)'),
    V('bezahlen', 'bezahlen', 'pagar (er bezahlt die Rechnung)'),
    V('zerbrechen', 'zerbrechen', 'quebrar, partir (die Glasscherbe zerbricht)'),
    V('missverstehen', 'missverstehen', 'entender errado (er hat mich missverstanden)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase é correta?'),
    options: [
      T('{Ich verstehe ihn.} — {verstehen} é inseparável e recusa o {zu}'),
      T('{Ich verstehe zu ihn.} — o {zu} localiza a direção'),
      T('{Ich stehe zu ihn auf.} — o prefixo {auf} não sai do lugar'),
      T('{Ich zu verstehe ihn.} — o {zu} vem antes do verbo conjugado'),
    ],
    answer: 0,
    hint: T('Regra §1: o {zu} da direção só existe com verbos separáveis.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Prefixo de {erklären} que significa «alcançar um resultado»: ___'),
      answer: 'er-',
      hint: T('{erklären} = {er-} + {klären} «clarear».'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu prefixo.'),
      pairs: [
        { a: T('bekommen'), b: T('be- «por, para dentro»') },
        { a: T('vergessen'), b: T('ver- «fora do certo»') },
        { a: T('entstehen'), b: T('ent- «origem, separação»') },
        { a: T('zerbrechen'), b: T('zer- «destruição»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual verbo é inseparável?'),
      options: [
        T('erzählen — o {er-} nunca se solta do {zählen}'),
        T('anrufen — o {an-} vai para o fim da oração'),
        T('mitbringen — o {mit-} se separa em {Ich bringe es mit}'),
        T('aufstehen — o {auf-} soa [ˈaʊ̯f] no fim'),
      ],
      answer: 0,
      hint: T('Regra §3: o acento do inseparável cai sobre o prefixo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um verbo é inseparável quando o prefixo faz parte da raiz. A prova prática: ele **recusa o {zu}** da direção. {Ich sehe zu ihm} é impossível, {Ich sehe ihn} é correto.',
      ),
    },
    {
      n: '2',
      text: T(
        'A separação em um verbo inseparável destrói a palavra: {besuchen} escrito com o {be-} no fim não é uma forma, é um erro. Não existe flexão que permita isso.',
      ),
    },
    {
      n: '3',
      text: T(
        'O acento distingue os dois tipos sem análise morfológica: o separável estresa o radical ({ˈaʊ̯fˌʃteːən}), o inseparável estresa o prefixo ([bəˈzuːxən] em {besuchen}).',
      ),
    },
    {
      n: '4',
      text: T(
        'O prefixo {er-} significa «alcançar um resultado»: {erklären} «explicar», {erzählen} «contar», {erfahren} «saber», {erinnern} «lembrar», {erreichen} «alcançar». Sem {er-}, {zählen} é só contar.',
      ),
    },
    {
      n: '5',
      text: T(
        'O particípio de um separável é inseparável: {aufgestanden}, {angekommen}. O particípio de um inseparável também: {verstanden}, {erklärt}, {besucht}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Como saber sem decorar'),
      text: T(
        'Um aluno que não conhece {empfehlen} não tem como inferir que ele é inseparável — e é melhor não tentar, porque a tentativa erra. O caminho seguro é o dicionário: se a forma do particípio ({empfohlen}) contém {ge-} no meio, com o prefixo antes dele, o verbo é inseparável. É a única regra morfológica de confiança, e ela funciona mesmo em verbos que você nunca viu. A segunda é fonética: fale a palavra devagar e escute qual sílaba bate mais forte. Em {empfehlen} [ɛmˈpfeːlən] e em {aufstehen} [ˈaʊ̯fˌʃteːən], a resposta chega antes da análise.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'A Bíblia em Luther é, em boa parte, um catálogo de inseparáveis — e isso não é acaso. A teologia cristã precisa de verbos que expressem **atos completos**, não movimentos: {erschaffen} «criar», {erlösen} «redimir», {erwählen} «escolher», {verheißen} «prometer», {vollenden} «consumar». Em Gênesis 1:1, {Am Anfang schuf Gott Himmel und Erde} «No princípio, Deus criou os céus e a terra»: o {schuf} é {erschaffen} no passado, e o {er-} marca exatamente isso — a mão de Deus chegou a um resultado. Em João 3:16, {so hat Gott die Welt geliebt} «Deus amou o mundo»: {geliebt} é o particípio de {lieben}, que não tem prefixo, e {hat} é o auxiliar do presente, com sentido de perfectivo. Reconhecer inseparáveis é reconhecer ações vistas como inteiras.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich verstehe diese Regel nicht.',
      gloss: T('Não entendo esta regra ({nicht} no fim, negando o verbo).'),
    },
    {
      text: 'Er besucht uns im Sommer.',
      gloss: T('Ele nos visita no verão ({besuchen} nunca se separa).'),
    },
    {
      text: 'Sie erklärt den Text gut.',
      gloss: T('Ela explica bem o texto ({er-} = alcançar um resultado).'),
    },
    {
      text: 'Wir haben ein Geschenk bekommen.',
      gloss: T('Recebemos um presente ({bekommen} no fim da oração, indecomponível).'),
    },
    {
      text: 'Ich sehe ihn, nicht zu ihm.',
      gloss: T('Eu o vejo, não vou até ele (o {zu} recusa o inseparável {sehen}).'),
    },
    { text: 'Ich gehe zu ihm.', gloss: T('Eu vou até ele ({gehen} é separável e exige o {zu}).') },
    {
      text: 'Er hat den Schlüssel verloren.',
      gloss: T('Ele perdeu a chave ({ver-} = sair do caminho certo).'),
    },
    {
      text: 'Die Sache ist schnell entstanden.',
      gloss: T('A coisa originou-se rapidamente ({ent-} indica origem).'),
    },
    { text: 'Du hast mich missverstanden.', gloss: T('Você me entendeu errado ({miss-} = erro).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Separável contra inseparável'),
      head: [T('Critério'), T('Separável'), T('Inseparável')],
      rows: [
        ['posição do prefixo', 'no fim da oração', 'sempre colado'],
        ['acento', 'no radical', 'no prefixo'],
        ['aceita {zu} de direção', 'sim', 'não'],
        ['particípio', 'inseparável', 'inseparável'],
        ['exemplo', 'aufstehen / ich stehe auf', 'verstehen / ich verstehe'],
        ['significado do prefixo', 'direção ou finalidade', 'ação pontuada'],
      ],
    },
    {
      caption: T('Tabela 2 — As três famílias de inseparáveis'),
      head: [T('Família'), T('Forma'), T('Exemplos')],
      rows: [
        ['prefijo + verbo', 'be- + suchen', 'besuchen, bezahlen, betrachten'],
        ['prefijo + t/d', 'ent- + stehen', 'entstehen, enthalten, verstehen'],
        ['prefijo + ieren', 'stud- + ieren', 'studieren, probieren, notieren'],
        ['prefijo de resultado', 'er- + klären', 'erklären, erzählen, erfahren'],
        ['prefijo de negação', 'ver- + lieren', 'verlieren, verhindern, verachten'],
      ],
    },
  ],
};
