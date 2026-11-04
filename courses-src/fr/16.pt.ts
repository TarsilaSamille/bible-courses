import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('O passé composé'),
  subtitle: T(
    '{avoir} ou {être} no presente + particípio passado — a única forma de falar do passado em conversa',
  ),
  section: T('Os verbos'),
  body: C(`## A fórmula

O passé composé é uma **construção**, não um tempo morfológico. Ela se monta sempre com as mesmas três peças: um auxiliar no presente de indicativo, o **particípio passado** do verbo principal e, às vezes, um substantivo que o acompanha.

Em resumo: **auxiliar (presente) + particípio passado**. Nada mais. O que muda de um verbo para outro é (a) qual auxiliar e (b) qual particípio.

| Verbo principal | Frase | Glosa |
|---|---|---|
| parler | j’ai parlé | eu falei |
| {avoir} (aux.) | j’ai eu peur | eu tive medo |
| aller | je suis allé | eu fui |
| se laver | je me suis lavé | eu me lavei |

Repare numa coisa importante: em {j’ai eu peur} o {avoir} é auxiliar e o {eu} é particípio, não o contrário. A palavra {peur} «medo» fica no meio, e a frase traduz literalmente «eu tive medo».

## Os dois auxiliares

O auxiliar **não** é escolhido pelo sujeito nem pelo objeto: é escolhido pelo **verbo principal**. A regra prática:

- {avoir} na maioria esmagadora dos casos;
- {être} com verbos de **deslocação** e de **mudança de estado}: {aller, venir, arriver, partir, sortir, entrer, monter, descendre, rester, tomber, naître, mourir, passer};
- {être} com **todos os verbos pronominais**: {se lever, s’appeler, se tromper, se méfier}.

A lista com {être} tem um mnemônico em francês: **devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, retourner, tomber, rentrer, arriver, mourir, partir**. São dezesseis verbos, quase todos da 3.ª conjugação — {partir, sortir, entrer, monter, descendre, rester, tomber, revenir, devenir, rentrer, retourner} — mais {aller, venir, naître, mourir, arriver}. O padrão salta aos olhos: a maioria é de deslocação, e os poucos que não são são de mudança de estado.

A lista tem furos e excessos, e é por isso que ninguém confia só nela:

- {monter} e {descendre} usam {être} quando vão de um lugar a outro ({je suis monté} «subi») e {avoir} quando mudam de estado ({j’ai monté la bagage} «carreguei a mala»);
- {sortir} usa {être} quando significa «sair» ({il est sorti} «ele saiu») e {avoir} quando significa «tirar algo» ({il a sorti son billet} «ele tirou o bilhete»);
- {entrer} e {rentrer} usam {avoir} em certas construções ({j’ai entré la voiture} «entrei no carro»);
- {passer} pode usar os dois: {je suis passé chez lui} «fui lá em casa dele» (movimento) e {j’ai passé l’après-midi} «passei a tarde» (duração).

Ou seja: a lista diz por onde começar, mas o **sentido** decide. Sempre que um verbo estiver na zona cinzenta, pergunte «o sentido mudou o estado do sujeito?»

## Particípios irregulares

O segundo problema é o particípio passado. Os verbos do primeiro grupo formam com {-é} ({parlé}, {aimé}, {chanté}), os do segundo com {-i} ({fini}, {choisi}, {réussi}), os do terceiro com {-u} ({vendu}, {attendu}, {répondu}). E há cerca de vinte que não seguem nada:

| Infinitivo | Particípio irregular |
|---|---|
| être | été |
| avoir | eu |
| faire | fait |
| dire | dit |
| prendre | pris |
| mettre | mis |
| voir | vu |
| vouloir | voulu |
| pouvoir | pu |
| devoir | dû |
| écrire | écrit |
| lire | lu |
| savoir | su |
| boire | bu |
| recevoir | reçu |

A boa notícia é que quase todos os irregulares são do 3.º grupo, ou seja, terminam em {-re} no infinitivo. E há uma regra que cobre metade deles: quando o radical termina em {-v}, o particípio costuma ser o radical sozinho, sem {u}: {mouvoir → mû}, {pleuvoir → plu}, {recevoir → reçu}, {devoir → dû}. Em resumo, memorize pela lista, não por regra — a regra é uma rede, não um sistema.

## Concordância no participo

Aqui está a regra mais malvista por quem aprende: a concordância do participo **só existe com {être}**, e só quando o particípio é um **adjetivo**.

Com {avoir}, o particípio é **invariável**, mesmo que o objeto venha antes:

- {les lettres que j’ai écrites} ✗ → correto é {les lettres que j’ai écrit};
- {les photos que j’ai prises} ✗ → correto é {les photos que j’ai pris};
- {les fleurs qu’il a achetées} ✗ → o correto é {les fleurs qu’il a acheté}, sem {s}.

Com {être}, concorda com o **sujeito**: {elle est arrivée}, {ils sont venus}, {elles sont parties}. E há um caso intermediário: quando o objeto vem antes do verbo, o particípio pode concordar com o **objeto** — mas só se o sujeito for {je}, {tu}, {on} ou {qui}. É a regra 2, detalhada logo abaixo.

Vamos por partes. Três situações, três regras:

1. **{être} + sujeito.** O particípio concorda com o sujeito: {je suis parti / elle est partie / ils sont partis / elles sont parties}.
2. **{avoir} + objeto anteposto.** O particípio concorda com o objeto **se** o verbo é do 3.º grupo **e** o sujeito é {je} ou {tu} ou {on} ou {qui}: {les lettres que j’ai écrites} ✓ porque o sujeito é {je} e {écrire} é do 3.º grupo. A mesma frase com outro sujeito fica sem {s}: {les lettres qu’il a écrit} (ele escreveu) e {les lettres qu’elle a écrit}.
3. **{pronominal}.** O particípio concorda com o sujeito **quando o pronome {se} é direto**: {elle s’est levée} «levantou-se», {ils se sont parlé} «falaram entre si». Se o pronome {me, te, nous, vous} é indireto, não há concordância: {elle s’est lavé les mains} «lavou as mãos», {elle s’est lavé} «lavou-se» (o pronome é direto, com o sentido reflexivo próprio).

Atenção: em {elle s’est lavé les mains}, o {se} é indireto porque há um outro objeto ({les mains}), e o particípio fica no masculino singular — é o {se} que manda. Em {elle s’est lavé}, o {se} é direto, porque o sujeito faz a ação a si mesmo, e o {é} é o feminino dela.

Quando {se} é indireto, há um truque de pronúncia: o {t} do auxiliar **soa** antes do {s} do {se}, e é esse {s} que você ouve: {elle s’est lavé} soa como {elle sé lavé}, {ils se sont parlé} soa como {ils se son parlé}. O som mente, a escrita não.

## Verbos pronominais

Merecem um parágrafo próprio, porque são a origem de muita confusão. Um verbo pronominal tem {se} (ou {me, te, nous, vous, se}) antes do auxiliar: {se lever}, {s’appeler}, {se rendre compte}, {se plaindre}. O {se} é um pronome, não um pronome indefinido: representa o sujeito ou o objeto.

Há dois valores de {se}:

- **reflexivo** — a ação recai sobre o sujeito: {elle se lave} «ela se lava» (ela lava a si mesma);
- **pronominal** — a ação recai sobre outro, mas o verbo é pronominal por uma razão histórica: {elle se lave les mains} «ela lava as mãos», {elle s’appelle la porte} «ela tranca a porta».

Em todos os casos o auxiliar é {être}: {je me suis levé}, {tu t’es reposé}, {il s’est trompé}, {nous nous sommes rencontrés}, {vous vous êtes agenouillés}, {ils se sont parlé}.

## Aplicação: leitura bíblica

O texto Segond põe o passé composto em três funções diferentes, e vale separar as três.

**(a) AÇÃO NARATIVA, o passado por excellence.** {Et le Verbe s’est fait chair, et il a habité parmi nous} (Jean 1:14) — {s’est fait} é {être} com verbo pronominal, {a habité} é {avoir} com verbo do 2.º grupo. No mesmo versículo, os dois auxiliares.

{Dieu a tant aimé le monde qu’il a donné son Fils unique} (Jean 3:16) — dois {avoir}, com os particípios irregulares {aimé} e {donné}.

**Jésus est né à Bethléem** (Matthieu 2:1) — {est né} com {être}, particípio regular {né} «nascido» que não sabemos classificar; o contexto basta.

**Puis il est mort, et a été enseveli** — {est mort} e {a été enseveli}: o mesmo verbo {être} como principal no primeiro caso e como **particípio** no segundo. {a été} é a primeira forma do passé composé que você já tinha visto: {avoir} + {été}.

**(b) PASSADO CONTINUADO, um estado inacabado que dura.** {Ceux qui ont faim et soif de la justice} (Matthieu 5:6) — {ont} é presente, não passado; o mesmo {ont faim} de «ter fome» que você aprendeu com {avoir}.

{Vous avez les paroles de la vie éternelle} (Jean 6:68) — {avez} é presente: «vocês têm», não «vocês tiveram».

**(c) A LEI E A HISTÓRIA, o passado do que fica registrado.** {C’est pourquoi la loi a été donnée par Moïse} — {a été donnée} é {avoir} + {été donné}: o mais-que-perfeito, que o francês constrói como passé composé de {avoir} com {été} (ou de {être} com {eu}, em frases fixas).

{La Pâque a été mangée} — o mesmo esquema: «a Páscoa foi comida», com {été} no lugar do particípio.

Nenhuma dessas formas é um tempo novo: são todas auxiliar + particípio. O que muda é o **verbo** que ocupa o lugar do particípio, e é por isso que o mesmo {a été} significa ora «houve», ora «está», ora «terá estado».

## O essencial

O passé composé é auxiliar no presente + particípio passado. O auxiliar segue o verbo principal: {avoir} quase sempre, {être} com deslocação, mudança de estado e pronominais. A lista dos 16 é atalho, não lei: quando houver dúvida, pergunte pelo **sentido** do verbo, não pela letra do nome. O particípio com {avoir} é invariável; com {être} concorda com o sujeito; com pronome direto, também; com pronome indireto, não.`),
  vocab: [
    V('parlé', 'parler', 'falei (particípio de 1.º grupo)'),
    V('fini', 'finir', 'terminei (particípio de 2.º grupo)'),
    V('vendu', 'vendre', 'vendi (particípio de 3.º grupo)'),
    V('eu', 'avoir', 'tido (particípio irregular)'),
    V('été', 'être', 'sido (particípio irregular)'),
    V('fait', 'faire', 'feito (particípio irregular)'),
    V('pris', 'prendre', 'pego, tomado (particípio irregular)'),
    V('vu', 'voir', 'visto (particípio irregular)'),
    V('écrit', 'écrire', 'escrito (particípio irregular)'),
    V('reçu', 'recevoir', 'recebido (particípio irregular)'),
    V('suis allé', 'aller', 'fui (auxiliar {être})'),
    V('est née', 'naître', 'nasceu (feminino, com concordância)'),
    V('se laver', 'laver', 'lavar-se (verbo pronominal)'),
    V('s’est levé', 'lever', 'levantou-se (pronominal direto)'),
    V('s’est lavé les mains', 'laver', 'lavou as mãos (pronominal indireto)'),
    V('a été', 'être', 'teve; fora (mais-que-perfeito)'),
    V('a eu peur', 'avoir', 'teve medo (auxiliar + particípio + nome)'),
    V('DR MRS VANDERTRAMP', 'être', 'lista mnemônica dos verbos com {être}'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Por que a frase «{je suis monté}» («subi») usa {être}, enquanto «{j’ai monté la voiture}» («embarquei na») usa {avoir}?',
    ),
    options: [
      T('O auxiliar mede se o sujeito mudou de lugar, não se a ação foi feita'),
      T('Porque {monter} é um verbo do 2.º grupo, e o 2.º grupo pede sempre {être}'),
      T('Porque há um objeto ({la voiture}) depois do verbo, e com objeto o auxiliar vira {avoir}'),
      T('Porque «montre» é um substantivo e substantivos pedem {avoir}'),
    ],
    answer: 0,
    hint: T('Teste do sentido: houve **movimento** do sujeito ou apenas **ação sobre algo**?'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Reescreva com concordância de sujeito feminino: «il est venu» → «elle est ___»'),
      answer: 'venue',
      hint: T(
        '{venu} ganha {e} final: o particípio concorda com o sujeito porque o auxiliar é {être}.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('{les lettres qu’il a écrit} — ele escreveu as cartas'),
        T('{les lettres qu’il a écrites} — com objeto anteposto e {avoir}, não há {s}'),
        T('{elle s’est lavé les mains} — pronome indireto, sem concordância'),
        T('{elle s’est lavée les mains} — só {se} direto concorda'),
      ],
      answer: 0,
      hint: T(
        'Con {avoir}, o particípio é invariável. Pense no {!} do particípio, não na pessoa verbal.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu particípio passado'),
      pairs: [
        { a: T('être'), b: T('été') },
        { a: T('faire'), b: T('fait') },
        { a: T('prendre'), b: T('pris') },
        { a: T('voir'), b: T('vu') },
        { a: T('recevoir'), b: T('reçu') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O passé composé é auxiliar no **presente de indicativo** + **particípio passado**. Nenhuma forma muda essa ordem.',
      ),
    },
    {
      n: '2',
      text: T(
        'O auxiliar é escolhido pelo **verbo principal**, nunca pelo sujeito: {avoir} quase sempre; {être} com deslocação, mudança de estado e todos os pronominais.',
      ),
    },
    {
      n: '3',
      text: T(
        'Participios do 1.º grupo em {-é}, do 2.º em {-i}, do 3.º em {-u}; cerca de vinte são irregulares e todos pertencem, quase sem exceção, ao 3.º grupo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Com {avoir} o particípio é **invariável**. Com {être} concorda com o sujeito. Com pronome direto {se} também; com pronome indireto ({me, te, nous, vous}), não.',
      ),
    },
    {
      n: '5',
      text: T(
        'A lista dos 16 verbos com {être} é atalho de memória, não regra: {monter, descendre, sortir, entrer, passer} trocam de auxiliar conforme o **sentido** que assumem.',
      ),
    },
  ],
  notes: [
    {
      label: T('O particípio pode ser substantivo'),
      text: T(
        'Em {j’ai eu peur}, {eu} é particípio de {avoir} e {peur} é um substantivo comum. O mesmo esquema aparece em {j’ai faim}, {j’ai soif}, {j’ai raison}, {j’ai tort}, {j’ai besoin} e {j’ai envie}. É por isso que o français diz «eu tive um medo» com o {un}/article tanto em português quanto em francês: o nome precisa de artigo. Compare {j’ai peur} e {j’ai la peur} — este último é «estou com medo de algo específico».',
      ),
    },
    {
      label: T('O som mente, a escrita não'),
      text: T(
        'Nos pronominais indiretos, o {t} do auxiliar {s’est} de {lavé} pronuncia-se como {s} diante do {s} do pronome: você ouve {sé}. Por isso falantes de português-e-spanhol costumam escrever {elle s’est lavé} e ouvir {elle s’est lavé} concordando com o que ouviram. Bata o nó do {t}: a escrita {lavé} sem {e} está certa justamente porque o {se} era indireto.',
      ),
    },
  ],
  examples: [
    { text: 'j’ai parlé', gloss: T('eu falei (regular, 1.º grupo)') },
    { text: 'j’ai eu peur', gloss: T('eu tive medo (auxiliar + particípio + nome)') },
    { text: 'je suis allé', gloss: T('eu fui (deslocação, auxiliar {être})') },
    { text: 'elles sont parties', gloss: T('elas partiram (concordância no particípio)') },
    { text: 'il a mangé les pommes', gloss: T('comeu as maçãs (particípio invariável)') },
    {
      text: 'les pommes que j’ai mangées',
      gloss: T('as maçãs que comi ({je} + 3.º grupo: com {s})'),
    },
    { text: 'elle s’est levée', gloss: T('levantou-se ({se} direto, concorda)') },
    { text: 'elle s’est lavé les mains', gloss: T('lavou as mãos (pronombre indireto)') },
    { text: 'a été', gloss: T('foi (particípio de {être} com {avoir}: mais-que-perfeito)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — formation du passé composé por grupo'),
      head: [T('Grupo'), T('Terminação'), T('Com {avoir}'), T('Com {être}')],
      rows: [
        [T('1.º (-er)'), '-é', 'j’ai parlé', 'je suis allé'],
        [T('2.º (-ir)'), '-i', 'j’ai fini', T('—')],
        [T('3.º (-re)'), '-u', 'j’ai vendu', 'je suis venu'],
        [T('irregular'), T('—'), 'j’ai eu', 'je suis né'],
        [T('pronominal'), T('—'), T('—'), 'je me suis levé'],
      ],
    },
    {
      caption: T('Tabela 2 — concordância do particípio'),
      head: [T('Situação'), T('Exemplo'), T('Concorda?')],
      rows: [
        [T('{avoir}, sujeito normal, objeto depois'), T('{il a mangé les pommes}'), T('não')],
        [
          T('{avoir}, sujeito {je/tu/on/qui}, objeto antes'),
          T('{les pommes que j’ai mangées}'),
          T('sim'),
        ],
        [T('{avoir}, outro sujeito, objeto antes'), T('{les pommes qu’il a mangé}'), T('não')],
        [T('{être}, sem objeto'), T('{elle est arrivée}'), T('com o sujeito')],
        [T('{pronominal}, {se} direto'), T('{elle s’est levée}'), T('com o sujeito')],
        [T('{pronominal}, pronome indireto'), T('{elle s’est lavé les mains}'), T('não')],
      ],
    },
  ],
};
