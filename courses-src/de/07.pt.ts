import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('O gênero dos substantivos'),
  subtitle: T('regras, pares e exceções'),
  section: T('Os substantivos'),
  body: C(`O gênero do substantivo alemão é gramatical, não natural. Não há correspondência entre o gênero e o sexo do referente: die Sonne é feminino e o sol é masculino em português; die Mutter é feminino, mas o rio (der Fluss) também é masculino. Não existe, portanto, caminho seguro para deduzir o gênero pela lógica do significado.

Existem, porém, regularidades fortes. O masculino cobre as pessoas e os animais de sexo masculino (der Mann, der Hund, der Hahn), os dias, meses e estações (der Montag, der Mai, der Herbst), as bebidas alcoólicas (der Wein, der Sekt, der Schnaps) e os substantivos terminados em -er que designam homens (der Lehrer, der Maler).

O feminino é a maior classe e reúne um conjunto amplo de terminações: -ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur e -in (a mulher que exerce: die Königin, die Ärztin). Recebem também o feminino os nomes de mulher (die Frau, die Schwester) e os substantivos terminados em -e que designam coisas sem vida: die Straße, die Farbe, die Größe, die Butter.

O neutro reúne os infinitivos e adjetivos nominalizados (das Essen, das Gute), os coletivos de pessoas (das Volk, die Familie — mas este é feminino, exceção), os nomes de idiomas e continentes (das Deutsch, das Europa) e os substantivos com prefixo ge-, be-, ver-, er-, ent-, emp-, zer- ou de origem grega/latina (das Getränk, das Problem, das Studium).

Atenção a duas excepciones frequentes. Os diminutivos em -chen e -lein são sempre neutros: das Mädchen, das Bärchen; mas fazem o plural em -chen, sem nasal: die Mädchen. E os pares Claude: sempre que existe um par masculino e feminino, memorize os dois de uma vez — der Vater e die Mutter, der Sohn e die Tochter —, porque um puxa o outro na memória.`),
  vocab: [
    V('der Mann', 'Mann', 'o homem (masculino)'),
    V('die Frau', 'Frau', 'a mulher, a esposa (feminino)'),
    V('der Vater', 'Vater', 'o pai (masculino)'),
    V('die Mutter', 'Mutter', 'a mãe (feminino)'),
    V('der Sohn', 'Sohn', 'o filho (masculino)'),
    V('die Tochter', 'Tochter', 'a filha (feminino)'),
    V('die Sonne', 'Sonne', 'o sol (feminino, contra a expectativa)'),
    V('die Größe', 'Größe', 'o tamanho (feminino em -e)'),
    V('die Übung', 'Übung', 'o exercício (feminino em -ung)'),
    V('die Freiheit', 'Freiheit', 'a liberdade (feminino em -heit)'),
    V('die Universität', 'Universität', 'a universidade (feminino em -ität)'),
    V('die Königin', 'Königin', 'a rainha (feminino em -in)'),
    V('das Mädchen', 'Mädchen', 'a menina (neutro em -chen)'),
    V('das Getränk', 'Getränk', 'a bebida (neutro em ge-)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destes substantivos é feminino?'),
    options: [T('das Problem'), T('die Forschung'), T('der Frühling'), T('das Bauernhaus')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Dê o gênero de "Lehrer": ___ Lehrer'),
      answer: 'der',
      hint: T('Terminação -er que designa um homem.'),
    },
    {
      kind: 'fill',
      prompt: T('Dê o gênero de "Sonntag": ___ Sonntag'),
      answer: 'der',
      hint: T('Todos os dias da semana são masculinos.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o gênero de "das Verstehen"?'),
      options: [T('feminino'), T('masculino'), T('neutro'), T('varia com o referente')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relacione o substantivo ao gênero.'),
      pairs: [
        { a: T('die Forschung'), b: T('feminino (-ung)') },
        { a: T('das Studium'), b: T('neutro (-um)') },
        { a: T('der Bauer'), b: T('masculino (-er)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Os substantivos masculino e feminino de profissões formam par regular: der Arzt / die Ärztin, der Student / die Studentin.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os diminutivos em -chen e -lein são neutros e fazem o plural sem alteração: das Mädchen, die Mädchen; das Bärchen, die Bärchen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os idiomas e os continentes são neutros: das Deutsch, das Englisch, das Europa, das Afrika.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nomes de cidades e de países são neutros quando aparecen com artigo: das Berlin, das Deutschland, das Bayern; sem artigo, nada muda: in Berlin, in Deutschland.',
      ),
    },
  ],
  notes: [
    {
      label: T('Mnemônico do gênero'),
      text: T(
        'Nenhuma lista de regras substitui o vocabulário. A prática eficiente é sempre a mesma: anote o artigo junto do substantivo, memorize o plural e marque o gênero com uma cor. Quem escreve o gênero ao lado, mesmo que errado, corrige em três repetições; quem não escreve, decora errado por anos.',
      ),
    },
    {
      label: T('Origem do gênero'),
      text: T(
        'Os três gêneros herdaram o sistema do grego antigo, que classifica o que tem movimento (masculino) e o que é inerte (neutro), com o feminino como categoria do vivo e do par. É por isso que die Sonne é feminino: a palavra latina sōl foi classificada com as outras coisas luminosas, e não com o sol macho grego hēlios.',
      ),
    },
  ],
  examples: [
    {
      text: 'Die Sonne scheint.',
      gloss: T('O sol brilha (die = feminino, contra a expectativa).'),
    },
    {
      text: 'Der Vater und die Mutter kommen.',
      gloss: T('O pai e a mãe vêm (par que se aprende junto).'),
    },
    { text: 'Sie ist Ärztin.', gloss: T('Ela é médica (feminino de Arzt em -in).') },
    {
      text: 'Das Mädchen spielt mit dem Hund.',
      gloss: T('A menina brinca com o cão (diminutivo neutro).'),
    },
    {
      text: 'Die Mädchen spielen im Garten.',
      gloss: T('As meninas brincam no jardim (plural sem nasal).'),
    },
    {
      text: 'Er studiert in Berlin.',
      gloss: T('Ele estuda em Berlim (cidade neutra, sem artigo).'),
    },
    {
      text: 'Die Größe des Hauses ist beträchtlich.',
      gloss: T('O tamanho da casa é considerável (feminino em -e).'),
    },
    { text: 'Das Getränk ist kalt.', gloss: T('A bebida está fria (neutro com ge-).') },
  ],
  tables: [
    {
      caption: T('Pistas de gênero por terminação'),
      head: ['Terminação', 'Gênero', 'Exemplos'],
      rows: [
        [
          '-ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur',
          'feminino',
          'die Übung, die Freiheit, die Nation',
        ],
        ['-in (profissão feminina)', 'feminino', 'die Ärztin, die Lehrerin'],
        ['-e (objeto sem vida)', 'feminino', 'die Straße, die Farbe'],
        ['-chen, -lein (diminutivo)', 'neutro', 'das Mädchen, das Bärchen'],
        ['-er (homem)', 'masculino', 'der Lehrer, der Bauer'],
        ['-ling, -ig, -ich', 'masculino', 'der Frühling, der König'],
        ['-ismus, -um, -ment, -tion, -ität', 'neutro', 'das Christentum, das Studium'],
        ['ge-, be-, ver-, er-, ent-, emp-, zer-', 'em geral neutro', 'das Getränk, das Gebäude'],
        ['-chen / -lein: plural', 'sem nasal', 'die Mädchen, die Tassen'],
      ],
    },
    {
      caption: T('Pares que se aprendem juntos'),
      head: ['Masculino', 'Feminino', 'Gloss'],
      rows: [
        ['der Vater', 'die Mutter', 'pai / mãe'],
        ['der Sohn', 'die Tochter', 'filho / filha'],
        ['der Bruder', 'die Schwester', 'irmão / irmã'],
        ['der Hahn', 'die Henne', 'galo / galinha'],
        ['der Stier', 'die Kuh', 'touro / vaca'],
        ['der Hengst', 'die Stute', 'cavalo / égua'],
        ['der Junggeselle', 'die Junggesellin', 'solteiro / solteira'],
        ['der Poet', 'die Dichterin', 'poeta / poetisa'],
      ],
    },
  ],
};
