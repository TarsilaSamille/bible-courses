import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('A conjugação no presente'),
  subtitle: T('ich, du, er — e o segredo está no fim'),
  section: T('Os verbos'),
  body: C(`## A pessoa some no fim

O português diz «eu falo» e o substantivo fica visível. O alemão diz {ich spreche} e o pronome absorveu o sentido: não há mais «-o» de pessoa. A informação de quem faz a ação migrou para a **terminação**.

É por isso que o presente é a forma mais barata do sistema: basta olhar o final do verbo para saber quem age. E é também por isso que ele é tão gasto. O {ich spreche} e o {sie sprechen} podem significar «eu falo» e «eles falam» — e, num texto sobre um manuscrito, «fala-se». O contexto decide.

## O verbo regular

Tome {machen} «fazer» e retire o {en} do infinitivo: sobra {mach-}. Agora acrescente as terminações do presente:

- {ich mach-e} «eu faço»
- {du mach-st} «tu fazes»
- {er / sie / es mach-t} «ele faz»
- {wir mach-en} «nós fazemos»
- {ihr mach-t} «vós fazeis»
- {sie / Sie mach-en} «eles / você fazem»

Três regras curtas e uma exceção bastam para cobrir tudo:

**1. O {e} só aparece na primeira pessoa do singular.** {ich spreche}, {ich mache}, {ich lerne}. Nas outras formas desaparece: {du sprichst}.

**2. Depois de {s} ou {ß}, o {e} cai.** {du heißt} «você se chama» e {er reist} «ele viaja» perdem o {e}, porque {s} ou {ß} já ocupa o lugar.

**3. Se o radical terminar em {d} ou {t}, insere-se um {e} antes da terminação.** {du arbeitest}, {ihr findet}, {er wartet}, {sie rechnet}. É um {e} de apoio, e a pronúncia o denuncia: {du sprichst} [ˈʃpʁɪçst] contra {du rechnest} [ˈʁɛçnəst].

**A exceção: os verbos em {eln}.** {sammeln} dá {ich sammle}, {du sammelst} — sem {e} intermediário. O {l} já vem antes e o {e} disappearia: {sammele} soa formal demais, {sammle} é o natural.

## O verbo {sein}

{Sein} «ser» não segue nada disso, e é o único que você precisa decorar no presente: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}. Perceba a irregularidade dupla: {ist} no singular, {sind} no plural.

O {ist} merece atenção à pronúncia: é {ɪst} «ist», com o {i} curto e sibilante. Muita gente o alonga por influência do português e produz {iːst}, que soa pedante e errado.

## O verbo {haben}

{Haben} «ter» é quase regular, com uma única troca: o {a} do radical vira {i} na primeira e na terceira pessoa do singular. {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}. Compare com {geben} «dar», que faz o mesmo: {ich gebe}, {du gibst}, {er gibt}.

A forma {er hat} [hat] merece atenção: o {h} é aspirado em quase toda a Alemanha, [h], e o {a} é aberto. Quem não aspira soa imediatamente estrangeiro.

## A ordem das palavras

Na frase afirmativa, o verbo ocupa a **segunda posição**, sem exceção:

- {Ich spreche heute Deutsch.} «Eu falo alemão hoje.» (sujeito, verbo, resto)
- {Heute spreche ich Deutsch.} «Hoje eu falo alemão.» (advérbio, verbo, sujeito)
- {Mein Bruder spricht heute Deutsch.} (sujeito, verbo, resto)

Na pergunta, o verbo vai para o **primeiro** lugar: {Sprichst du Deutsch?} «Você fala alemão?»; {Hast du Zeit?} «Você tem tempo?».

E na imperativa, o verbo abre a frase e perde a terminação de {du}: {Sprich!} «Fala!», {Sei still!} «Cala-te!».

## O essencial

O presente regular é {radical} + terminação, com {e} só na primeira pessoa, {e} de apoio antes de {d}/{t} e nenhuma coisa nos verbos em {eln}; {sein} e {haben} são os dois a decorar; e o verbo fica sempre na segunda posição da frase.`),
  vocab: [
    V('sprechen', 'sprechen', 'falar (ich spreche, du sprichst, er spricht)'),
    V('machen', 'machen', 'fazer (regular: ich mache, du machst, er macht)'),
    V('lernen', 'lernen', 'aprender (er lernt Deutsch)'),
    V('arbeiten', 'arbeiten', 'trabalhar (e de apoio: ich arbeite, er arbeitet)'),
    V('warten', 'warten', 'esperar (er wartet auf + acusativo)'),
    V('finden', 'finden', 'encontrar, achar (ihr findet)'),
    V('sammeln', 'sammeln', 'juntar, colecionar (sem e: ich sammle)'),
    V('heißen', 'heißen', 'chamar-se (du heißt, er heißt)'),
    V('sein', 'sein', 'ser (ich bin, du bist, er ist, wir sind)'),
    V('haben', 'haben', 'ter (ich habe, du hast, er hat, wir haben)'),
    V('geben', 'geben', 'dar (a > i: ich gebe, du gibst, er gibt)'),
    V('lesen', 'lesen', 'ler (du liest, er liest, wir lesen)'),
    V('schreiben', 'schreiben', 'escrever (du schreibst, er schreibt)'),
    V('ich', 'ich', 'eu (sempre minúsculo, mesmoalone)'),
    V('er/sie/es', 'er', 'ele/ela/isso ({sie} = ela ou eles; {es} = coisa)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta de {er} + {arbeiten} no presente?'),
    options: [
      T(
        'er arbeitet — o {e} de apoio entra antes da terminação {t}, pois o radical termina em {t}',
      ),
      T('er arbeit — o {e} de apoio entra sempre, mesmo sem terminação'),
      T('er arbeitst — a terminação de {du} foi trocada'),
      T('er arbeiten — o infinitivo foi usado como forma verbal'),
    ],
    answer: 0,
    hint: T('Regra §3: radical em {d} ou {t} recebe {e} de apoio antes da terminação.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o presente de {sein} na terceira pessoa do singular: er ___'),
      answer: 'ist',
      hint: T('A forma curta do {i} soa [ɪst], nunca [iːst].'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à forma de {sein}.'),
      pairs: [
        { a: T('ich'), b: T('bin') },
        { a: T('du'), b: T('bist') },
        { a: T('er'), b: T('ist') },
        { a: T('wir'), b: T('sind') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em qual frase o verbo está corretamente na segunda posição?'),
      options: [
        T('{Heute spreche ich mit ihm.} — advérbio, verbo, sujeito'),
        T('{Spreche heute ich mit ihm.} — verbo, advérbio, sujeito'),
        T('{Heute ich spreche mit ihm.} — advérbio, sujeito, verbo'),
        T('{Ich heute spreche mit ihm.} — sujeito, advérbio, verbo'),
      ],
      answer: 0,
      hint: T('Regra §5: o verbo nunca é o primeiro elemento na frase afirmativa.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O presente regular é o infinitivo menos {en} ou {ern} mais a terminação: {mach-} + {e}, {lern-} + {t}, {spiel-} + {en}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O {e} da terminação aparece apenas em {ich}: {ich spreche}, {ich lerne}. Nas outras pessoas desaparece: {du sprichst}, {er lernt}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Radical em {d} ou {t} recebe {e} de apoio antes da terminação: {ich arbeite}, {du arbeitest}, {ihr findet}, {er wartet}. Sem esse {e}, o som seria duro demais.',
      ),
    },
    {
      n: '4',
      text: T(
        'Exceção: os verbos em {eln} não recebem {e} intermediário: {ich sammle}, {du sammelst}, {er sammelt}, {wir sammeln}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Na frase afirmativa o verbo fica na segunda posição, qualquer que seja o primeiro elemento; na pergunta ele vai para a primeira posição: {Sprichst du Deutsch?}',
      ),
    },
  ],
  notes: [
    {
      label: T('O {e} que ninguém vê'),
      text: T(
        'O {e} de apoio é a marca mais discreta do alemão, e a pronúncia é o que a denuncia. {ich rechn-e} soa [ˈʁɛçnə], com um {ə} claramente perceptível: [ˈʁɛçnəst] em {du rechnest}. O mesmo {e} aparece em {sammle} [ˈzamlə] e em {schnelle} [ˈʃnɛlə]. Quem o suprime produz grupos de consoantes duros, comparáveis ao {gn} do italiano. Para a leitura bíblica isso é irrelevante, porque o texto escrito não guarda o som; para a leitura em voz alta é tudo.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'O presente domina o texto bíblico em Luther justamente porque o narrador costuma falar no presente. Em João 1:1, {Im Anfang war das Wort} «No princípio era o Verbo»: o {war} é a forma de 3ª pessoa de {sein}, e o «era» do português não tem contrapartida ali. Em 1 João 1:9, {Wenn wir unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt} «se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar»: o {ist} se repete, e o padrão {so ist} — a oração de resultado traduz o «então» — é a marca estilística do versículo. Em Gálatas 5:1, {So seid ihr durch Christus freigesprochen} «estão livres por Cristo»: a frase termina no presente porque o efeito do evangelho é permanente. Reconhecer o presente é reconhecer que o texto fala de algo que continua valendo.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich spreche jeden Tag Deutsch.',
      gloss: T('Eu falo alemão todos os dias (regra §2: {e} só no {ich}).'),
    },
    {
      text: 'Du sprichst sehr gut.',
      gloss: T('Você fala muito bem ({sprichst}: o {e} do {ich} desapareceu).'),
    },
    {
      text: 'Er arbeitet bei einer Bank.',
      gloss: T('Ele trabalha num banco ({arbeitet}: {e} de apoio após {t}).'),
    },
    {
      text: 'Ihr findet die Tür.',
      gloss: T('Vocês encontram a porta ({findet}: {e} de apoio após {d}).'),
    },
    {
      text: 'Wir sammeln die Reste.',
      gloss: T('Nós juntamos os restos (verbo em {eln}: sem {e} intermediário).'),
    },
    { text: 'Wie heißt du?', gloss: T('Como te chamas? ({heißt}: sem {e} após {ß}).') },
    { text: 'Er ist mein Bruder.', gloss: T('Ele é meu irmão ({ist} curto, [ɪst]).') },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('Não tenho tempo ({habe}: o {a} do radical vira {i} no {ich}).'),
    },
    {
      text: 'Sprichst du Englisch?',
      gloss: T('Você fala inglês? (pergunta: verbo na primeira posição).'),
    },
    {
      text: 'Heute lese ich einen Brief.',
      gloss: T('Hoje leio uma carta (verbo na segunda posição, depois do advérbio).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente indicativo dos seis lugares'),
      head: [T('Pessoa'), T('machen'), T('arbeiten'), T('lernen'), T('sammeln')],
      rows: [
        ['ich', 'mache', 'arbeite', 'lerne', 'sammle'],
        ['du', 'machst', 'arbeitest', 'lernst', 'sammelst'],
        ['er/sie/es', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['wir', 'machen', 'arbeiten', 'lernen', 'sammeln'],
        ['ihr', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['sie/Sie', 'machen', 'arbeiten', 'lernen', 'sammeln'],
      ],
    },
    {
      caption: T('Tabela 2 — Os três verbos que precisam de memória'),
      head: [T('Pessoa'), T('sein'), T('haben'), T('werden')],
      rows: [
        ['ich', 'bin', 'habe', 'werde'],
        ['du', 'bist', 'hast', 'wirst'],
        ['er/sie/es', 'ist', 'hat', 'wird'],
        ['wir', 'sind', 'haben', 'werden'],
        ['ihr', 'seid', 'habt', 'werdet'],
        ['sie/Sie', 'sind', 'haben', 'werden'],
      ],
    },
  ],
};
