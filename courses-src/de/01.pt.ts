import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Alfabeto e pronúncia'),
  subtitle: T('A–Z, ä, ö, ü e ß'),
  section: T('Fundamentos'),
  body: C(`O alemão tem 26 letras básicas, às quais se acrescentam os três sons com diéresis (ä, ö, ü) e o eszett (ß), que conta como uma letra própria. O sistema é transparente, mas a grafia nem sempre revela o comprimento da vogal.

Os sons mais delicados são os agrupamentos consonantais. sch vale sempre /ʃ/ (Schule). ch soa /ç/ depois de ä, ö, ü e às vezes depois de ie, e soa /x/ nos demais casos (Buch, Milch). Não existe contexto em que sch valha /ʃ/ + x.

A letra r tem três pronúncias: no início da palavra ou antes de vogal, /ʁ/ (rotina); no fim de sílaba ou antes de consoante, /ɐ/ (Vater); dobrada, /ʁ/ (Herr). O w soa /v/ (Wasser) e o v soa /f/ nas palavras nativas (Vater), mas /v/ nas estrangeiras (Vase). O s inicial de sílaba soa /z/ (Sonne, Psalm) e o z vale sempre /ts/.

Por fim, o desconsoamento final: uma consoante final deixa de sonorizar, embora conserve a grafia. Tag soa [taːk], Hund soa [hʊnt], Kind soa [kɪnt].`),
  vocab: [
    V('A', 'A', 'a (vogal aberta, /a/)'),
    V('E', 'E', 'e (vogal fechada, /eː/)'),
    V('I', 'I', 'i (vogal, /ɪ/)'),
    V('O', 'O', 'o (vogal, /ɔ/)'),
    V('U', 'U', 'u (vogal, /ʊ/)'),
    V('Ä', 'A', 'diéresis, /ɛː/ (Mädchen)'),
    V('Ö', 'O', 'diéresis, /øː/ (schön)'),
    V('Ü', 'U', 'diéresis, /yː/ (Bücher)'),
    V('ß', 'ß', 'eszett, /s/ (Straße)'),
    V('ch', 'ch', 'sombral após ä, ö, ü e ie'),
    V('sch', 'sch', 'som grave, /ʃ/ (Schule)'),
    V('r', 'r', 'tres sons: rotárico, vocálico e dobrado'),
    V('w', 'w', '/v/ (Wasser)'),
    V('z', 'z', '/ts/ (Zeit) e inicial (Zahl)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Que som tem ch em Bücher?'),
    options: [T('/x/'), T('/ç/'), T('/k/'), T('/ʃ/')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva com eszett: groß, ela → ___'),
      answer: 'große',
      hint: T('A vogal o é longa, portanto leva ß.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione a letra com o som.'),
      pairs: [
        { a: T('w'), b: T('/v/ (Wasser)') },
        { a: T('sch'), b: T('/ʃ/ (Schule)') },
        { a: T('s inicial de sílaba'), b: T('/z/ (Sonne)') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra tem a vogal u longa?'),
      options: [T('Hund'), T('Tut'), T('Mutter'), T('Buch')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete a palavra: Mädch___ (menina)'),
      answer: 'en',
      hint: T('São seis letras, a última é n.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Vogais longas e curtas não se distinguem pela grafia: apenas o ouvido e o contexto revelam o valor.',
      ),
    },
    {
      n: '2',
      text: T(
        'O comprimento marca-se com h depois da vogal (Tee) ou com a repetição da vogal (See); o ß indica que a vogal anterior é longa.',
      ),
    },
    {
      n: '3',
      text: T('A vogal inicial da palavra forma sílaba aberta e é longa: Arbeit, Bruder, Erde.'),
    },
    {
      n: '4',
      text: T(
        'Antes de r, l, m, n, w é obrigatória a semivogal u ou ü: führen, Löwe, du, neu. Depois de r apenas w exige vogal: Bräutigam.',
      ),
    },
  ],
  notes: [
    {
      label: T('Eszett contra ss'),
      text: T(
        'O ß aparece depois de vogal longa ou diptongo: Straße, Fuß, heißt, groß. O ss aparece depois de vogal curta: Wasser, Klasse, lassen. Com três consoantes, o ß passa a ss: Weiß → weiße, fließen → fließt.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em 1 João 1:1, Im Anfang war das Wort. A aliteração em W mostra que o texto começa por uma vogal aberta e longa, exatamente o que o alfabeto já permite reconhecer.',
      ),
    },
  ],
  examples: [
    { text: 'Wasser /ˈvasɐ/', gloss: T('água (a curto; ss depois de vogal curta)') },
    { text: 'Vater /ˈfaːtɐ/', gloss: T('pai (a longo; r final soa /ɐ/)') },
    { text: 'Arbeit /ˈarbaɪt/', gloss: T('trabalho (a inicial aberto e longo; ei = /aɪ/)') },
    { text: 'Bücher /ˈbyːçɐ/', gloss: T('livros (ü longo; ch soa /ç/)') },
    { text: 'Groß /ɡʁoːs/', gloss: T('grande (o longo; ß marca a vogal longa)') },
    { text: 'Kirche /ˈkɪʁçə/', gloss: T('igreja (ch após i soa /ç/; r inicial soa /ʁ/)') },
  ],
  tables: [
    {
      caption: T('Vogais longas e curtas'),
      head: ['Vogal', 'Longa', 'Curta'],
      rows: [
        ['a', 'Tee /teː/', 'Wasser /ˈvasɐ/'],
        ['e', 'See /zeː/', 'Bett /bɛt/'],
        ['i', 'vier /fiːɐ̯/', 'Bild /bɪlt/'],
        ['o', 'Boot /boːt/', 'Sonne /zɔnə/'],
        ['u', 'Tut /tuːt/', 'Hund /hʊnt/'],
        ['ä', 'Mädchen /mɛːtçən/', 'Bär /bɛːɐ̯/'],
        ['ö', 'schön /ʃøːn/', 'Höhle /høːlə/'],
        ['ü', 'Bücher /ˈbyːçɐ/', 'Müller /ˈmʏlɐ/'],
        ['y', 'Cyklop /tsyːklɔp/', 'System /zʏsteːm/'],
      ],
    },
    {
      caption: T('Os sons de ch'),
      head: ['Contexto', 'Som', 'Exemplos'],
      rows: [
        ['após ä, ö, ü, ie', '/ç/ palatal', 'ich, Bücher, Mädchen, Kirsche'],
        ['após a, e, i, o, u', '/x/ velar', 'Buch, Milch, Nacht, Schnitt'],
        ['início de palavra', '/k/ ou /ç/', 'Charme, Chaos, Chiemsee'],
      ],
    },
  ],
};
