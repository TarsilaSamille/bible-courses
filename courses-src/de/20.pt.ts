import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Os verbos separáveis'),
  subtitle: T('aufstehen, ankommen, einschlafen — o que se separa no meio da frase'),
  section: T('Os verbos'),
  body: C(`## Prefixo é lugar, não som

Muitos verbos alemães nascem de um verbo simples com um **prefixo** espacial: {stehen} «estar de pé» + {auf} = {aufstehen} «levantar-se». O prefixo não é grudado: ele indica **para onde** ou **para que lado** a ação vai. E é por isso que ele se destaca e se cola no fim da oração.

A consequência prática é a mais importante do capítulo: **um verbo separável nunca tem o acento no prefixo**. {Ich stehe auf} — acento em {auf}, no fim. {Ich stehe auf} e {auf ich stehe} significam coisas diferentes: o primeiro é «eu levanto»; o segundo significaria «levanto-me, eu». E o alemão marca essa inversão: o prefixo passa a ser adverbial e deixa de fazer parte do núcleo.

## Os três lugares

O verbo separável tem três posições possíveis, e a escolha depende do que a frase já tem na segunda posição:

**1. No fim da oração**, quando nada mais pode ocupá-la: {Ich stehe früh auf.} «Levanto cedo.» O {auf} é o último elemento.

**2. Depois do verbo conjugado**, quando há um elemento adverbial, um objeto ou um complemento na segunda posição: {Ich stehe jeden Morgen früh auf.} «Levanto toda manhã cedo.» Repare que {jeden Morgen früh} é o bloco que ocupa a segunda posição, e o {auf} fica grudado no fim.

**3. No meio da frase**, quando o verbo conjugado é {sein} ou {haben} num verbo composto, ou quando a frase tem elemento posicional: {Ich bin früh aufgestanden.} «Levantei cedo.» Aqui o particípio {aufgestanden} é **indivisível**.

O critério é simples: **procure um elemento que ocupe a segunda posição. Se existir, o {auf} vai para o fim. Se não existir, ele vai logo atrás do verbo.**

## O acento como diagnóstico

Na escrita, o acento some; na leitura, ele decide. Comparemos:

- {Ich stehe früh **auf}** [ˈaʊ̯f] «eu levanto cedo» — verbo separável
- {Ich **auf}stehe** — não existe como verbo

A mesma lógica vale para {durchschauen} [ˈdʊʁçˌʃaʊ̯ən] «enxergar através de» e [duːʁçˈʃaʊ̯ən] «enganar». A ortografia é a mesma nos dois casos; só a pronúncia revela qual deles você quer dizer.

## Particípio e direção

O particípio de um verbo separável **nunca** se separa: {aufstehen} dá {aufgestanden}, {ankommen} dá {angekommen}, {einschlafen} dá {eingeschlafen}. O prefixo volta a colar, e o verbo inteiro vira um adjetivo. Em {Ich bin früh aufgestanden}, o {auf} está preso no meio, e isso é o sinal de que a forma é um particípio, não um verbo em uso.

E note a preposição: {aufstehen} já contém a preposição {auf} «sobre, para cima». Por isso {aufstehen} não aceita um {auf} adicional — o prefixo **é** a preposição. O mesmo vale para {anrufen} «telefonar para» e {einkaufen} «comprar (ir buscar)».

## A lista útil

Os prefixos mais comuns dizem exatamente o que você esperaria:

- {an-} «a, para»: {ankommen} «chegar», {anrufen} «telefonar», {ansehen} «olhar», {antworten} «responder»
- {auf-} «para cima»: {aufstehen} «levantar-se», {aufmachen} «abrir», {aufhören} «parar de»
- {aus-} «fora, de»: {ausgehen} «sair», {aussuchen} «escolher», {ausstehen} «aguentar»
- {ein-} «dentro»: {eingehen} «entrar», {einschlafen} «adormecer», {einladen} «convidar»
- {mit-} «junto»: {mitkommen} «vir junto», {mitmachen} «participar», {mitnehmen} «levar junto»
- {nach-} «depois»: {nachdenken} «refletir», {nachfragen} «perguntar», {nachsehen} «verificar»
- {vor-} «antes»: {vorlesen} «ler em voz alta», {vormachen} "mostrar antes"
- {zu-} «para, fechado»: {zumachen} «fechar», {zuhören} «ouvir com atenção», {zusagen} «prometer»

## O essencial

Prefixo é posição no fim da oração, não parte do núcleo; o {auf} vai para o fim quando algo já ocupa a segunda posição e fica grudado no particípio; e nenhum verbo separável tem acento no prefixo.`),
  vocab: [
    V('aufstehen', 'aufstehen', 'levantar-se (stehe auf, stehst auf, ist aufgestanden)'),
    V('ankommen', 'ankommen', 'chegar, chegar (komme an, bist angekommen)'),
    V('anrufen', 'anrufen', 'telefonar para (rufe an, ruft an)'),
    V('aufhören', 'aufhören', 'parar de, cessar (höre auf, hört auf)'),
    V('ausgehen', 'ausgehen', 'sair (gehe aus, geht aus, ist ausgegangen)'),
    V('einschlafen', 'einschlafen', 'adormecer, pegar no sono (schlafe ein, schläft ein)'),
    V('mitkommen', 'mitkommen', 'vir junto, acompanhar (komme mit, kommt mit)'),
    V('nachdenken', 'nachdenken', 'refletir, pensar (denke nach, denkt nach)'),
    V('vorlesen', 'vorlesen', 'ler em voz alta (lese vor, liest vor)'),
    V('zumachen', 'zumachen', 'fechar (mache zu, macht zu)'),
    V('zuhören', 'zuhören', 'ouvir com atenção (höre zu, hört zu)'),
    V('ansehen', 'ansehen', 'olhar para, ver (sehe an, sieht an)'),
    V('einladen', 'einladen', 'convidar (lade ein, lädt ein, hat eingeladen)'),
    V('mitnehmen', 'mitnehmen', 'levar junto, levar consigo (nehme mit, nimmt mit)'),
    V('aufgestanden', 'aufstehen', 'levantado (particípio: nunca separável)'),
    V('auf', 'auf', 'prefixo e preposição «para cima, sobre» (aufstehen, aufmachen)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Ich stehe jeden Morgen früh ___}, o prefixo {auf} fica onde?'),
    options: [
      T(
        'No fim da oração, depois de {früh}, porque {jeden Morgen früh} já ocupa a segunda posição',
      ),
      T('Logo depois do verbo {stehe}, porque o presente exige adjunção'),
      T('Antes do sujeito {ich}, stressing the prefix'),
      T('No meio da oração, entre {Morgen} e {früh}'),
    ],
    answer: 0,
    hint: T('Regra §2: se algo já ocupa a segunda posição, o {auf} vai para o fim.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Particípio de {ankommen} em {Ich bin gerade ___}:'),
      answer: 'angekommen',
      hint: T('O particípio é inseparável: {an} + {ge} + {kommen}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu prefixo e sentido.'),
      pairs: [
        { a: T('einschlafen'), b: T('ein- «dentro»: dormir') },
        { a: T('ausgehen'), b: T('aus- «fora»: sair') },
        { a: T('mitnehmen'), b: T('mit- «junto»: levar') },
        { a: T('zumachen'), b: T('zu- «fechado»: fechar') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase tem o prefixo na posição correta?'),
      options: [
        T('{Nach der Schule gehe ich nach Hause.} — nada na segunda posição, prefixo no fim'),
        T('{Nach der Schule ich gehe nach Hause.} — o verbo conjugado sai da segunda posição'),
        T('{Ich gehe nach der Schule nach Hause.} — o primeiro {nach} não é prefixo'),
        T('{Nach der Schule nach Hause gehe ich.} — o prefixo abre a oração'),
      ],
      answer: 0,
      hint: T(
        'Regra §2: sem elemento na segunda posição, o {auf} fica logo depois do verbo conjugado.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um verbo com prefixo é **separável** quando o prefixo indica direção ou finalidade e pode ficar no fim da oração. O acento recai sempre sobre o radical, nunca sobre o prefixo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Se a frase já tem um elemento na segunda posição, o prefixo vai para o fim: {Ich stehe jeden Morgen früh auf.} Se não há nada, ele se cola ao verbo conjugado: {Ich stehe früh auf.}',
      ),
    },
    {
      n: '3',
      text: T(
        'O particípio e o infinitivo de um verbo separável são **inseparáveis**: {aufgestanden}, {aufstehen}, {angekommen}, {einzuschlafen}. O {auf} fica colado entre o radical e as terminações.',
      ),
    },
    {
      n: '4',
      text: T(
        'Muitos prefixos são ao mesmo tempo preposições: {aufstehen} já contém {auf}, e por isso não aceita outro {auf}. Vale o mesmo para {anrufen} «telefonar» e {zumachen} «fechar».',
      ),
    },
    {
      n: '5',
      text: T(
        'Na pergunta, o verbo conjugado sobe para a primeira posição e o prefixo continua no fim: {Wann stehst du auf?} «Quando você levanta?»',
      ),
    },
  ],
  notes: [
    {
      label: T('O texto escrito esconde o acento'),
      text: T(
        'Todo este capítulo é, na prática, um capítulo de **pronúncia**. A ortografia não distingue {aufstehen} «levantar-se» de {aufstehen} com o prefixo acentuado, que seria uma palavra diferente. Na leitura bíblica silenciosa, isso não importa: você lê {Er stand auf} e sabe, pela gramática, que o prefixo se deslocou. Na leitura em voz alta, porém, o acento resolve o que a gramática só sugere — e é por isso que as palavras de Marcos 5:41, {Talitha kumi} «Levanta-te, menina», soam tão diferentes quando lidos em voz alta do que quando apenas pronunciados por escrito.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'Os verbos separáveis dominam o texto de Luther justamente porque narram movimento — e a Bíblia é um texto que se move. Em Marcos 5:41, {Talitha kumi} «Levanta-te, menina»: {kumi} é o imperativo de {kommen}, o verbo mais separável da língua, e a frase se sustenta sem artigo nem pronome. Em João 20:1, {nahmen die Jüden ihre Speise mit sich und gingen hinaus} «os judeus levaram sua comida consigo e saíram»: o {mit} de {mitnehmen} «levar consigo» descola para o fim do grupo — em português a ideia seria «levaram consigo», sem nenhum radical visível. Em Atos 1:13, {und tratten in das Haus, wo sie gewöhnlich beieinander saßen} «e entraram na casa onde costumam estar sentados»: o {auf} de {auflagen} reteve a preposição {in}. É a prova mais clara de que o prefixo é um adverbio, não uma preposição.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich stehe früh auf.',
      gloss: T('Levanto cedo (nada na segunda posição: o {auf} gruda no verbo).'),
    },
    {
      text: 'Ich stehe jeden Morgen früh auf.',
      gloss: T('Levanto toda manhã cedo ({jeden Morgen früh} ocupa a segunda posição).'),
    },
    {
      text: 'Wann stehst du auf?',
      gloss: T('Quando você levanta? (pergunta: verbo em primeiro, prefixo no fim).'),
    },
    {
      text: 'Nach der Schule gehe ich nach Hause.',
      gloss: T('Depois da escola vou para casa (prefixo no fim da oração).'),
    },
    {
      text: 'Er steht nicht auf.',
      gloss: T('Ele não levanta ({nicht} fica entre o verbo e o prefixo).'),
    },
    {
      text: 'Ich bin früh aufgestanden.',
      gloss: T('Levantei cedo (particípio inseparável, regra §3).'),
    },
    {
      text: 'Sie kommt heute nicht mit.',
      gloss: T('Ela não vem hoje ({mit} no fim, depois de {nicht}).'),
    },
    {
      text: 'Wir treffen uns vor der Kirche.',
      gloss: T('Encontramo-nos diante da igreja ({vor} já é preposição aqui).'),
    },
    {
      text: 'Er ruft mich jeden Abend an.',
      gloss: T('Ele me telefona todas as noites ({an} no fim).'),
    },
    {
      text: 'Warum gehst du nicht mit?',
      gloss: T('Por que você não vem junto? (verbo no primeiro, {mit} no fim).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Três posições do verbo separável'),
      head: [T('Situação'), T('Frase'), T('Onde cai o {auf}')],
      rows: [
        ['nada na 2ª posição', 'Ich stehe früh auf.', 'no fim'],
        ['tempo na 2ª posição', 'Ich stehe jeden Morgen früh auf.', 'no fim'],
        ['sujeito na 2ª posição', 'Heute stehe ich früh auf.', 'no fim'],
        ['pergunta', 'Wann stehst du auf?', 'no fim'],
        ['particípio', 'Ich bin früh aufgestanden.', 'colado no meio'],
        ['infinitivo', 'Ich werde früh aufstehen.', 'colado no meio'],
      ],
    },
    {
      caption: T('Tabela 2 — Prefixos e o que indicam'),
      head: [T('Prefixo'), T('Direção'), T('Verbo'), T('Particípio')],
      rows: [
        ['an-', 'a, para', 'ankommen', 'angekommen'],
        ['an-', 'a, para', 'anrufen', 'angerufen'],
        ['auf-', 'para cima', 'aufstehen', 'aufgestanden'],
        ['auf-', 'para cima', 'aufhören', 'aufgehört'],
        ['aus-', 'fora', 'ausgehen', 'ausgegangen'],
        ['ein-', 'dentro', 'einschlafen', 'eingeschlafen'],
        ['mit-', 'junto', 'mitkommen', 'mitgekommen'],
        ['nach-', 'depois', 'nachdenken', 'nachgedacht'],
        ['vor-', 'antes', 'vorlesen', 'vorgelesen'],
        ['zu-', 'fechado', 'zumachen', 'zugemacht'],
      ],
    },
  ],
};
