import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Caso'),
  title: T('Os quatro casos que sobraram'),
  subtitle: T('του πατρός — τον πατέρα — Πατέρα'),
  body: C(`## Quatro, e não seis

O grego antigo tinha seis casos. O grego moderno tem quatro, e a perda não foi aleatória: saíram o dativo e o vocativo como posições livres, e o que ficou foi o que a frase não consegue fazer sem.

O **nominativo** é o sujeito e o que se oferece ao verbo: {ο φίλος μιλάει}. O genitivo é a posse e a relação: {του φίλου το σπίτι}, «a casa do amigo». O **acusativo** é o objeto direto e o complemento das preposições: {βλέπω τον φίλο}, {μιλάω με τον φίλο}. O vocativo é só o endereçamento, sem verbo: {φίλε}, «amigo».

O nominativo e o acusativo são idênticos em quase todo substantivo: {ο φίλος} e {τον φίλο} são a mesma palavra com o artigo trocado. Quem traduz não precisa saber qual é qual no substantivo; o verbo diz.

## O genitivo se prende ao substantivo

O genitivo é o único caso que se prende a uma palavra e não a outra. {του φίλου} é uma peça só: preposição mais genitivo, e o par não se separa. A palavra que vem depois de {του} pode ser um substantivo, um pronome ou um adjetivo, e o que está depois dela já não pertence ao genitivo.

É por isso que {το σπίτι του φίλου} é «a casa do amigo» e {το σπίτι φίλου} é o que se pode dizer em registre elevado, sem a preposição. O grego antigo fazia isso o tempo todo, e a Bíblia faz. Quem traduz e deita fora o {του} sem querer apaga a posse.
O mesmo genitivo marca a parte de um todo, e é por isso que ele vem depois do numeral: {δύο ανθρώπων}, «de duas pessoas». Não é uma construção que o português tenha: em português se diz «duas pessoas», e o grego diz «duas, de pessoas». O substantivo vai para o genitivo porque está sendo contado, e o numeral fica sozinho, sem flexionar.

O genitivo marca também origem e separação, e é o que faz {από της Αθήνας} dizer «de Atenas» e {μακριά από την Αθήνα} dizer «longe de Atenas». O mesmo caso, com o sentido dado pela preposição.

## O acento denuncia a mudança

Nos dois casos que sobraram flexão, o acento se mexe, e é o único sinal por onde se sabe. {ο φίλος} no nominativo, {του φίλου} no genitivo: o acento desce uma sílaba porque o substantivo ficou mais longo. {ο πατέρας} no nominativo, {του πατέρα} no genitivo: a descida é a mesma, e o final {-ας} do nominativo some.

No vocativo o movimento é o mesmo, e às vezes o dobro: {Σοφοκλῆς} dá {Σοφοκλεῖς}, três sílabas viram duas e o acento sobe para a última. Quem aprendeu a prestar atenção no acento está lendo o caso sem fazer conta.

## Onde a flexão ainda é inteira

> Πατέρα μου, ἠλθεν ὁ ἀγγελιοφόρος· καὶ εἶπεν αὐτῷ· Ἀββᾶ ὁ Πατήρ.

O vocativo de {πατέρας} é {πατέρα} no grego moderno, sem mudança nenhuma, e é assim que se fala a Deus em português. O grego antigo tem {Πατήρ} no nominativo e {Πάτερ} no vocativo, com {Πατέρα} como intermédio. As duas formas vivem lado a lado: a moderna é indireclinável, a antiga continua na liturgia. `),
  vocab: [
    V('ο φίλος', 'ο φίλος', 'o amigo'),
    V('του φίλου', 'ο φίλος', 'do amigo (genitivo)'),
    V('τον φίλο', 'ο φίλος', 'o amigo (acusativo)'),
    V('το σπίτι', 'το σπίτι', 'a casa'),
    V('μιλάω', 'μιλάω', 'falo'),
    V('βλέπω', 'βλέπω', 'vejo'),
    V('ο πατέρας', 'πατέρας', 'o pai'),
    V('του πατέρα', 'πατέρας', 'do pai (genitivo)'),
    V('φίλε', 'φίλος', 'amigo (vocativo)'),
    V('Σοφοκλής', 'Σοφοκλής', 'Sófocles'),
    V('Σοφοκλείς', 'Σοφοκλής', 'Sófocles (vocativo)'),
    V('Πατέρα', 'πατέρας', 'Pai (vocativo moderno)'),
    V('δύο ανθρώπων', 'δύο', 'de duas pessoas'),
    V('από', 'από', 'de; a partir de'),
    V('η Αθήνα', 'η Αθήνα', 'Atenas'),
    V('μακριά από', 'μακριά', 'longe de'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'São quatro casos: nominativo (sujeito), genitivo (posse), acusativo (objeto e preposição) e vocativo (endereço).',
      ),
    },
    {
      n: '§2',
      text: T(
        'O genitivo prende-se à palavra que vem depois de του, de της, de του: é uma peça só e não se separa.',
      ),
    },
    {
      n: '§3',
      text: T('Depois do numeral o substantivo vai ao genitivo: δύο ανθρώπων, «de duas pessoas».'),
    },
    {
      n: '§4',
      text: T('O genitivo e o vocativo mudam o acento: é o sinal de que a palavra mudou de caso.'),
    },
  ],
  notes: [
    {
      label: T('Dativo'),
      text: T(
        'O dativo não tem caso próprio no grego moderno: ele foi absorvido pelo acusativo. Sobraram quatro palavras do dativo, que são clíticos: μου, σου, μας, σας. E o του vem de εἰς τοῦ, que era uma preposição com genitivo.',
      ),
    },
    {
      label: T('Leitura'),
      text: T(
        'Quando uma frase grega tem dois nomes seguidos e só um artigo, o segundo nome é quase sempre genitivo: φίλου ἀνθρώπου é «de um homem amigo». É o aparelho mais antigo da língua, e continua vivo em expressões fixas.',
      ),
    },
  ],
  examples: [
    { text: 'ο φίλος μιλάει', gloss: T('o amigo fala') },
    { text: 'βλέπω τον φίλο', gloss: T('vejo o amigo') },
    { text: 'το σπίτι του φίλου', gloss: T('a casa do amigo') },
    { text: 'μιλάω με τον φίλο', gloss: T('falo com o amigo') },
    { text: 'φίλε, έλα εδώ', gloss: T('amigo, vem aqui') },
    { text: 'του πατέρα το σπίτι', gloss: T('a casa do pai') },
    { text: 'δύο ανθρώπων παρέστησαν', gloss: T('compareceram duas pessoas') },
    { text: 'μακριά από την Αθήνα', gloss: T('longe de Atenas') },
  ],
  tables: [
    {
      caption: T('Os quatro casos'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο φίλος', 'η γυναίκα', 'το παιδί'],
        ['γενική', 'του φίλου', 'της γυναίκας', 'του παιδιού'],
        ['αἰτιατική', 'τον φίλο', 'την γυναίκα', 'το παιδί'],
        ['κλητική', 'φίλε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('O genitivo com preposição'),
      head: ['Μορφή', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική άρθρου', 'τού', 'της', 'τού'],
        ['γενική ουσιαστικού', 'φίλου', 'γυναίκας', 'παιδιού'],
        ['αἰτιατική άρθρου', 'τον', 'την', 'το'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «το σπίτι του φίλου», que caso é «του φίλου»?'),
    options: [T('nominativo'), T('genitivo'), T('acusativo'), T('vocativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ φίλου το σπίτι (artigo do genitivo masculino)'),
      answer: 'του',
      hint: T('Artigo no genitivo'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «de duas pessoas»?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δύο του ανθρώπων'), T('δύο ανθρώπων')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Caso de cada forma'),
      pairs: [
        { a: 'ο φίλος', b: T('nominativo') },
        { a: 'του φίλου', b: T('genitivo') },
        { a: 'τον φίλο', b: T('acusativo') },
        { a: 'φίλε', b: T('vocativo') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('Πατέρα ___ (vocativo de πατέρας, em grego moderno)'),
      answer: 'μου',
      hint: T('A forma não muda: escreva o possessivo enclítico'),
    },
  ],
};
