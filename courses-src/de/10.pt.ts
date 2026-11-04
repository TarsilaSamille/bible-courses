import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('O nominativo'),
  subtitle: T('sujeito e predicativo'),
  section: T('Os casos'),
  body: C(`O nominativo tem duas funções. A primeira é a de sujeito: é o termo que concorda com o verbo em número e pessoa. Wer kommt? responde quem faz a ação. Em Der Schlüssel steckt im Schloss, o nominativo é der Schlüssel, e o dativo im Schloss indica apenas onde.

A segunda função é a de complemento nominal, ou predicativo, ligado a verbos que expressam identidade ou estado: sein, werden, bleiben, heißen, scheinen. Esses verbos admitem dois nominativos: Er ist Arzt, Er heißt Peter, Sie wird Lehrerin. Quando a qualidade é um adjetivo, o complemento não é mais nominativo, mas predicativo sem caso: Er ist ein guter Arzt.

Observe a diferença entre os doisEmployment modelos. Com substantivo, o caso se flexiona junto: Er ist der Arzt (identidade, com artigo definido). Com adjetivo + substantivo, é a construção de qualidade: Er ist ein guter Arzt. O primeiro identifica, o segundo caracteriza. Em português a distinção também existe, mas o alemão mantém a marca morfológica: der Arzt é nominativo, ein guter Arzt também.

O nominativo pode ainda aparecer depois de um verbo de movimento ou de um impessoal: Es regnet (a chuva, o tempo), Es sind zehn Leute gekommen (impessoal com sentido existencial), Mir ist kalt, Mir graut (impessoais). Nesses casos es não é sujeito verdadeiro: é um sujeito vazio que ocupa a posição e deixa a informação para o dativo ou para o resto da oração.

Por último, existe um segundo nominativo em construções do tipo Er ist ein Arzt und Lehrer, e o singular valendo para o plural: Die Kinder sind Schüler. Essa concordância existe porque a oração inteira é o sujeito, e o que se flexiona é o verbo.`),
  vocab: [
    V('der Nominativ', 'Nominativ', 'o nominativo'),
    V('das Subjekt', 'Subjekt', 'o sujeito'),
    V('das Prädikat', 'Prädikat', 'o predicado'),
    V('sein', 'sein', 'ser'),
    V('werden', 'werden', 'tornar-se, ficar'),
    V('heißen', 'heißen', 'chamar-se'),
    V('bleiben', 'bleiben', 'ficar, permanecer'),
    V('scheinen', 'scheinen', 'parecer'),
    V('das Wetter', 'Wetter', 'o tempo (atmosfera)'),
    V('es regnen', 'regnen', 'chover'),
    V('mir sein', 'sein', 'ser impersonal (dativo)'),
    V('der Arzt', 'Arzt', 'o médico'),
    V('die Lehrerin', 'Lehrerin', 'a professora'),
    V('ein guter Arzt', 'gut', 'um bom médico (qualidade)'),
    V('es sein', 'sein', 'haver (impessoal existencial)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "Er ist der Arzt", qual é a função de der Arzt?'),
    options: [T('sujeito apenas'), T('complemento do nominativo'), T('objeto direto'), T('dativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o sujeito: ___ Kinder spielen.'),
      answer: 'Die',
      hint: T('No plural o artigo é sempre die.'),
    },
    {
      kind: 'fill',
      prompt: T('Dê o verbo para "die Kinder": die Kinder ___ (jogar).'),
      answer: 'spielen',
      hint: T('Plural termina sempre em -n.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase flexiona o adjetivo?'),
      options: [
        T('Er ist ein guter Arzt.'),
        T('Der gute Arzt kommt.'),
        T('Er ist gut.'),
        T('Er bleibt gut.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione o verbo à sua função.'),
      pairs: [
        { a: T('heißen'), b: T('chamar-se') },
        { a: T('werden'), b: T('tornar-se') },
        { a: T('scheinen'), b: T('parecer') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O sujeito concorda com o verbo em número: Das Kind spielt, die Kinder spielen. Se o sujeito vem plural, o verbo obrigatoriamente vai para -n.',
      ),
    },
    {
      n: '2',
      text: T(
        'Com sein, werden, bleiben, heißen e scheinen, o substantivo que completa a oração é nominativo, não acusativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Quando o complemento de identidade é um adjetivo, esse adjetivo não flexiona: Er ist ein gutER Arzt, mas Der gute Arzt kommt.',
      ),
    },
    {
      n: '4',
      text: T(
        'O sujeito es (impessoal) só é realmente vazio quando está presente: Heute wird es kalt — em Die Temperatur ist niedrig, o substantivo assume o lugar.',
      ),
    },
  ],
  notes: [
    {
      label: T('O sujeito vazio'),
      text: T(
        'Em Es regnet, o es não designa nada. Ele existe porque o alemão exige um elemento na primeira posição e porque o verbo precisa de um sujeito explícito. Todo verboimpessoal do clima e das sensações (es regnet, es friert, mir ist warm) segue esse molde, e por isso se pode invertê-lo: Regnet es? = está chovendo?',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 1:1, das Wort war bei Gott. Note a construção war bei: em vez de neben (que exigiria dativo), o verbo ser recebe um dativo, e é por isso que o substantivo bei Gott não é genitivo. O caso vem da preposição, nunca do substantivo.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Schlüssel steckt im Schloss.',
      gloss: T('A chave está na fechadura (nominativo + dativo).'),
    },
    { text: 'Kommt der Mann?', gloss: T('O homem vem? (sujeito posposto).') },
    { text: 'Er ist der Arzt.', gloss: T('Ele é o médico (identidade, dois nominativos).') },
    {
      text: 'Er ist ein guter Arzt.',
      gloss: T('Ele é um bom médico (qualidade, predicado sem caso).'),
    },
    {
      text: 'Sie heißt Anna und ist Studentin.',
      gloss: T('Ela se chama Anna e é estudante (dois nominativos).'),
    },
    { text: 'Es regnet seit gestern.', gloss: T('Chove desde ontem (es = sujeito vazio).') },
    {
      text: 'Es sind zwölf Leute gekommen.',
      gloss: T('Vieram doze pessoas (es impersonal existencial).'),
    },
    { text: 'Mir ist kalt.', gloss: T('Estou com frio (impessoal com dativo).') },
    {
      text: 'Die Kinder sind Schüler.',
      gloss: T('As crianças são estudantes (singular no plural).'),
    },
  ],
  tables: [
    {
      caption: T('Nominativo como sujeito e como predicativo'),
      head: ['Função', 'Estrutura', 'Exemplo', 'O que marca'],
      rows: [
        ['sujeito', 'N + verbo', 'Der Mann kommt.', 'concordância com o verbo'],
        ['sujeito posposto', 'verbo + N', 'Kommt der Mann?', 'verbo na primeira posição'],
        ['complemento de identidade', 'sein + N', 'Er ist der Arzt.', 'dois nominativos'],
        [
          'complemento de qualidade',
          'sein + adj + N',
          'Er ist ein guter Arzt.',
          'predicado sem caso',
        ],
        ['atribuição nominal', 'heißen + N', 'Sie heißt Anna.', 'dois nominativos'],
        ['tornar-se', 'werden + N', 'Sie wird Ärztin.', 'dois nominativos'],
        ['impessoal', 'es + verbo', 'Es regnet.', 'sujeito vazio'],
        ['impessoal existencial', 'es + sein + N', 'Es sind zehn Leute da.', 'sujeito vazio'],
      ],
    },
    {
      caption: T('Verbos que admitem dois nominativos'),
      head: ['Verbo', 'Significado', 'Frase'],
      rows: [
        ['sein', 'ser, estar', 'Das Buch ist ein Geschenk.'],
        ['werden', 'tornar-se', 'Er wird Lehrer.'],
        ['bleiben', 'ficar, permanecer', 'Er bleibt mein Freund.'],
        ['heißen', 'chamar-se', 'Der Berg heißt Brocken.'],
        ['scheinen', 'parecer', 'Sie scheint krank zu sein.'],
        ['werden', 'virar (algo)', 'Es wurde Abend.'],
      ],
    },
  ],
};
