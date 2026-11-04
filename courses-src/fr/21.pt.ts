import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('O subjuntivo'),
  subtitle: T('{que je parle, que tu parles} — necessidade, desejo, finalidade e contraste'),
  section: T('Os verbos'),
  body: C(`## O presente é o presente menos {-s}

Para a maioria dos verbos, o presente do subjuntivo é a forma mais barata que existe: você pega o **indicativo** e apaga o {s} da 3.ª pessoa do plural. Nada mais. {Ils parlent} dá {que je parle}, {que nous parlions}, {qu’ils parlent}.

| Infinitivo | je | tu | il / elle | nous | vous | ils / elles |
|---|---|---|---|---|---|---|
| parler | parle | parles | parle | parlions | parliez | parlent |
| finir | finisse | finisses | finisse | finissions | finissiez | finissent |
| prendre | prenne | prennes | prenne | prenions | preniez | prennent |
| vendre | vende | vendes | vende | vendions | vendiez | vendent |

Só a terminação muda: {-e, -es, -e, -ions, -iez, -ent}. Repare que a 3.ª do singular é igual à 1.ª, e que o {je} não ganha nada em {je parle}, {je vends} ou {je prenne}. A forma mais famosa do subjuntivo regular é {parle}, idêntica ao imperativo.

## Irregulares: mais um fossil

Os mesmos verbos que dão o condicional irregular aparecem aqui, e por uma razão partilhada: o latim formava o subjuntivo com o presente de {essere} e de {habere} ({sim, sīs, sit, sīmus, sītis, sint}). Daí saíram exatamente as formas que você já viu:

| Infinitivo | je | tu | il | nous | vous | ils |
|---|---|---|---|---|---|---|
| être | sois | sois | soit | soyons | soyez | soient |
| avoir | aie | aies | ait | ayons | ayez | aient |
| aller | aille | ailles | aille | allions | alliez | aillent |
| faire | fasse | fasses | fasse | fassions | fussiez | fassent |
| pouvoir | puisse | puisses | puisse | puissions | puissiez | puissent |
| savoir | sache | saches | sache | sachions | sachiez | sachent |
| vouloir | veuille | veuilles | veuille | veuillions | veuilliez | veuillent |
| venir | vienne | viennes | vienne | venions | veniez | viennent |

Leve os três primeiros inteiros ({être}, {avoir}, {pouvoir}) e os outros você adivinha pelo contexto.

## O que dispara o subjuntivo

O subjuntivo não aparece por gosto: aparece depois de um pequeno número de **gatilhos**, e o mais produtivo é {que} ligado a um verbo principal. O mapa vale mais que qualquer regra solta:

| Gatilho | Exemplo | Glosa |
|---|---|---|
| necessidade | {Il faut que je prie} | é preciso que eu ore |
| desejo | {Je veux qu’il vienne} | quero que ele venha |
| finalidade | {Parlez pour qu’ils comprennent} | falem para que entendam |
| sentimento | {Je sens qu’il a raison} | eu sinto que ele tem razão |
| medo | {J’ai peur qu’il ne vienne} | tenho medo de que ele venha |
| contraste | {Bien qu’il soit fatigué} | embora ele esteja cansado |
| absurdo | {Il est important qu’il soit prêt} | é importante que ele esteja pronto |

Dois grupos deserves atenção especial. O primeiro é o par {avant que} / {après que} e {pendant que} / {depuis que}: em {avant que}, o verbo é subjuntivo ({avant qu’il vienne}); nos outros, é indicativo ({après qu’il est venu}, {pendant qu’il parle}). O segundo é {il ne faut pas que} + subjuntivo, que é justamente o negativo de {il faut que}.

## Os tempos do subjuntivo

O perfeito do subjuntivo é o auxiliar no presente mais o particípio: {qu’il ait prié} «que ele tenha orado», {qu’il soit venu} «que ele tenha vindo». Ele vale como passado recente e como futuro do ponto de vista do sujeito — {Je crois qu’il est déjà arrivé} pode ser «creio que ele chegou» ou «creio que ele chegará».

O mais-que-perfeito completo {qu’il eût prié} aparece na escrita literária antiga e é raro fora dela.

E há um truque que vai te salvar nos textos antigos: quando o verbo principal é no passado, o que era presente do subjuntivo vira **imperfeito** e o perfeito vira **mais-que-perfeito**. Uma frase de Segond como {Je ne savais pas qu’il eût dit cela} tem duas camadas de passado sobrepostas.

## A negação em duas posições

Há uma diferença que os gramáticos debatem e que a leitura bíblica mostra com clareza: {avant que} pode levar a negação restritiva {ne … point}, mais rara e mais firme, escrita como um bloco só — {avant qu’il ne vienne} —, ou nenhum {ne}, e essa é a forma padrão desde o século XVIII.

O mesmo vale para {sans que}, {sans quoi}, {à moins que}, {en sorte que} com ideia de consequência. O português traduz tudo isso com o subjuntivo; o francês faz a escolha aparecer na superfície.`),
  vocab: [
    V('que je parle', 'parler', 'que eu fale (subjuntivo regular)'),
    V('il faut que', 'falloir', 'é preciso que (gatilho de necessidade)'),
    V('pour que', 'pour', 'para que (finalidade)'),
    V('bien que', 'bien', 'embora que (contraste)'),
    V('avant que', 'avant', 'antes de que (exige subjuntivo)'),
    V('après que', 'après', 'depois que (indicativo)'),
    V('soit', 'être', 'seja (3.ª sing., irregular)'),
    V('soyons', 'être', 'sejamos (1.ª pl., irregular)'),
    V('aient', 'avoir', 'tenham (3.ª pl., irregular)'),
    V('puisse', 'pouvoir', 'possa (irregular)'),
    V('fasse', 'faire', 'faça (irregular)'),
    V('vienne', 'venir', 'venha (irregular)'),
    V('qu’il ait prié', 'prier', 'que ele tenha orado (perfeito do subjuntivo)'),
    V('qu’il soit venu', 'venir', 'que ele tenha vindo'),
    V('il est important que', 'important', 'é importante que (avaliação)'),
    V('j’ai peur qu’il vienne', 'avoir', 'tenho medo de que ele venha'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «Attendez qu’il vienne» a forma {vienne} é subjuntivo. Por quê?'),
    options: [
      T('Porque {avant que} está na lista dos gatilhos que exigem subjuntivo'),
      T('Porque o futuro de {venir} tem {vien-} no radical'),
      T('Porque a frase é negativa e o negativo exige o subjuntivo'),
      T('Porque depois de {que} nunca pode aparecer o indicativo'),
    ],
    answer: 0,
    hint: T('Regra §3: {avant que} é gatilho; {après que} e {pendant que} não são.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Subjuntivo de {être} em «{Il faut qu’il ___ là}» (il / elle), s___t'),
      answer: 'soit',
      hint: T('É a forma irregular da 3.ª do singular, e não tem acento circunflexo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o gatilho ao exemplo que o confirma'),
      pairs: [
        { a: T('necessidade'), b: T('{Il faut que je prie}') },
        { a: T('desejo'), b: T('{Je veux qu’il vienne}') },
        { a: T('finalidade'), b: T('{pour qu’ils comprennent}') },
        { a: T('contraste'), b: T('{Bien qu’il soit fatigué}') },
        { a: T('medo'), b: T('{J’ai peur qu’il vienne}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase mantém o indicativo onde o francês usaria o subjuntivo?'),
      options: [
        T('{Après qu’il est venu}, nous avons parlé'),
        T('{Après qu’il soit venu}, nous avons parlé'),
        T('{Bien qu’il est fatigué}, il continue'),
        T('{Il faut qu’il est prêt}'),
      ],
      answer: 0,
      hint: T('Depois de {après que} e {pendant que} o verbo fica no indicativo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O presente do subjuntivo regular é o presente do indicativo sem o {s} da 3.ª do plural: {ils parlent} → {qu’ils parlent}, {que je parle}, {que nous parlions}. Só mudam as terminações: {-e, -es, -e, -ions, -iez, -ent}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os irregulares são poucos e vêm do presente latim de {essere} e {habere}: {soit, soyons, soient}, {aie, ayons, aient}, {aille}, {fasse}, {puisse}, {sache}, {veuille}, {vienne}. São os mesmos verbos do condicional irregular.',
      ),
    },
    {
      n: '3',
      text: T(
        'O subjuntivo é obrigatório depois de {il faut que}, {vouloir que}, {pour que}, {bien que}, {avant que}, {de peur que}, {pour que}, e em {il est important que}, {il vaut mieux que}. Já depois de {après que}, {pendant que}, {si}, {quand}, {dès que} o indicativo é obrigatório.',
      ),
    },
    {
      n: '4',
      text: T(
        'O perfeito do subjuntivo é o auxiliar no presente do subjuntivo mais o particípio: {qu’il ait prié}, {qu’elle soit venue}. Ele cobre o passado recente e o futuro do ponto de vista do sujeito.',
      ),
    },
    {
      n: '5',
      text: T(
        'Se o verbo principal está no passado, o presente do subjuntivo vira **imperfeito** e o perfeito vira **mais-que-perfeito**: {qu’il eût dit}. É por isso que {Je ne savais pas qu’il eût dit cela} tem duas camadas de passado.',
      ),
    },
  ],
  notes: [
    {
      label: T('O latim por baixo do subjuntivo'),
      text: T(
        'O latim formava o presente do subjuntivo com o presente de {essere} e de {habere}: {sim, sīs, sit, sīmus, sītis, sint} e {habeam, habeās, habeat, habeāmus, habeātis, habeant}. Desses doze saíram {sois, sois, soit, soyons, soyez, soient} e {aie, aies, ait, ayons, ayez, aient} — literalmente as mesmas sílabas que você aprendeu no capítulo do condicional ({serais}, {aurais}). Essa strange regularização ({parle}, {finisse}, {prenne}) veio só depois, e é uma invenção medieval. Ou seja: o que parece «irregular» é o resto do sistema antigo, e o que parece «regular» é a newcomer que tomou conta.',
      ),
    },
    {
      label: T('Um gatilho que virou flexão'),
      text: T(
        'Em muitos casos nem dá para dizer se o que manda é o gatilho ou o verbo. Em {Il est important qu’il soit prêt}, tanto {il est important que} como {soit} são fixos: se você trocar um dos dois, a frase quebra. É a marca de uma estrutura fossilizada. Compare com o português, que flexiona o verbo e dispensa o gatilho: «É importante que ele esteja pronto» é o mesmo {soit}, visto de outro ângulo. Por isso, ao ler um texto antigo em francês, procure sempre o par — gatilho mais verbo — e não o verbo sozinho.',
      ),
    },
  ],
  examples: [
    { text: 'Il faut que je prie.', gloss: T('é preciso que eu ore (necessidade)') },
    { text: 'Je veux qu’il vienne.', gloss: T('quero que ele venha (desejo)') },
    { text: 'Parlez pour qu’ils comprennent.', gloss: T('falem para que entendam (finalidade)') },
    { text: 'Bien qu’il soit fatigué.', gloss: T('embora ele esteja cansado (contraste)') },
    {
      text: 'Attendez qu’il vienne.',
      gloss: T('esperem que ele venha ({avant que} + subjuntivo)'),
    },
    { text: 'Après qu’il est venu.', gloss: T('depois que ele veio ({après que} + indicativo)') },
    {
      text: 'Il ne faut pas qu’il vienne.',
      gloss: T('não é preciso que ele venha (negativo do gatilho)'),
    },
    { text: 'Je crois qu’il est déjà arrivé.', gloss: T('creio que ele já chegou (ou chegará)') },
    {
      text: 'Je ne savais pas qu’il eût dit cela.',
      gloss: T('eu não sabia que ele tivesse dito isso (mais-que-perfeito)'),
    },
    {
      text: 'C’est une occasion qu’il ne faut pas manquer.',
      gloss: T('é uma oportunidade que não se deve perder ({faut} + subjuntivo + relativo)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — presente do subjuntivo regular'),
      head: [T('Infinitivo'), T('je'), T('il / elle'), T('nous'), T('ils / elles')],
      rows: [
        ['parler', 'parle', 'parle', 'parlions', 'parlent'],
        ['finir', 'finisse', 'finisse', 'finissions', 'finissent'],
        ['vendre', 'vende', 'vende', 'vendions', 'vendent'],
        ['prendre', 'prenne', 'prenne', 'prenions', 'prennent'],
        ['attendre', 'attende', 'attende', 'attendions', 'attendent'],
        ['partir', 'parte', 'part', 'partions', 'partent'],
      ],
    },
    {
      caption: T('Tabela 2 — os gatilhos do subjuntivo'),
      head: [T('Categoria'), T('Marca'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('necessidade'), 'il faut', T('{Il faut que je prie}'), T('é preciso que eu ore')],
        [
          T('desejo'),
          'vouloir que, demander',
          T('{Je veux qu’il vienne}'),
          T('quero que ele venha'),
        ],
        [
          T('finalidade'),
          'pour que',
          T('{Parlez pour qu’ils comprennent}'),
          T('falem para que entendam'),
        ],
        [T('tempo'), 'avant que', T('{Attendez qu’il vienne}'), T('esperem que ele venha')],
        [T('tempo'), T('après que, pendant que'), T('{Après qu’il est venu}'), T('{indicativo}')],
        [
          T('contraste'),
          'bien que, quoique',
          T('{Bien qu’il soit fatigué}'),
          T('embora ele esteja cansado'),
        ],
      ],
    },
  ],
};
