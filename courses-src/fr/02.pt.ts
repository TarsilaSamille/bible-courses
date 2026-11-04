import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Ortografia e acentos'),
  subtitle: T(
    '{é è ê à ù ç œ} — cinco sinais que umFrancês de português nunca usa, e um {i} que quase nunca aparece',
  ),
  section: T('Fundamentos'),
  body: C(`## O acento francês está no final da palavra, não no começo

Em português o acento marca a tonicidade e aparece em muitas posições. Em francês isso ocorre quase nunca: o que o acento marca é **a última vogal pronunciada da palavra**, e essa posição é estável. Uma palavra aguda é aguda; uma grave é grave. O resultado é uma das estruturas mais regulares da língua.

O acento tem duas funções, e elas não se misturam. O **acento grave** {è} só aparece em palavras graves, para dizer qual vogal é a última soada: {père, mère, frère, après, règlement, nível, ève, Noël}. O **acento circunflexo** {â, ê, î, ô, û} aparece em palavras agudas, com a mesma função: {hôtel, forêt, crêpe, goût, sûr, dû, tôt, saône}.

Note o que isso resolve. Em {père} e {mère} a última vogal é o {e} mudo, então o acento tem de apontar para o {è} antes dele. Em {hôtel} e {forêt} a última vogal é mesmo o {ê}/{ô}, e o acento confirma. Em nenhum caso o acento indica ênfase: em francês **não existe palavra oxítona acentuada por tonicidade**.

Há um único caso em que o acento circunflexo deixa de ser funcional: em muitas palavras herdadas do latim, ele marca hoje apenas o comprimento antigo de uma vogal que já encurtou. {fête} (latim *fēsta*), {hôtel} (*hostel*), {tête}, {bête}, {intègre}, {système}. Nessa função ele é etymológico, não fonético — some dele, e quase ninguém percebe.

## O acento circular {â}

Em {château}, {forêt}, {côte}, {hôpital}, {tête}, {fête}, {mâle} e {bâiller}, o {â} representa o som [ɑ], o {a} aberto. É a única vogal em que o acento muda o som, e é por isso que esses acentos são indispensáveis: {château} [ʃɑto] «castelo» e {châtau} não existem.

## O cedilha {ç}: uma vírgula que muda o som

O {ç} é a única outra marca que o português também usa, e segue exatamente a mesma regra: antes de {a, o, u} o {c} seria [k], e o {ç} o transforma em [s]. {ça} [sa], {cédez} [sede], {garçon} [ɡaʁsɔ̃], {reçu} [ʁəsy], {douce} [dus], {façon} [fasɔ̃] — o {c} de {façon} e {garçon} é o mesmo som, e a diferença de grafia é só Facil de leitura.

## A ligadura {œ} e a trema {ë}

O {œ} é o ligadouro de {oe}: soa [ø] como em {œuvre} [œvʁ] «obra», {cœur} [kœʁ] «coração», {sœur} [sœʁ] «irmã», {œuf} [œf] «ovo», {fœre} [fœʁ] «fogo». E atenção: {oe} sem o ligadouro, como em {soeur} e {oeuf}, soa [œ] **igual**. O ligadouro é um sinal de pronúncia, não de etimologia.

O {ë} é mais raro, mas segue a mesma lógica: {ë} = [ɛ] aberto, como {è}, e indica que o {e} sozinho seria mudo. {Noël} [nɔɛl], {Guëlma}, {Haïti}, {canoë}, {mael}, {reëlect}. O mais famoso é o nome próprio, não uma palavra comum — a maioria dos nomes restantes é de origem grega.

## O acento que não é acento: {i} tremido

Não espere encontrar {í} marcando tonicidade. Quando {i} aparece em posição tônica precedida por vogal, os frenchês escrevem {y}: {exil} [ɛɡzil], {pays} [pei] «país», {guyan**e**» [ɡɥijɛn]. A regra é: **vogal + {i} tônico = {y}**. Por isso {vrai} [vʁɛ], {essai} [ɛsɛ], {travail} [tʁavaj], {détail} [deta(j)], {soleil} [sɔlɛj] — e daí, por retroflexão practiced, *«il»* → *«il»* → *«ill»*.

O nome dessa regra é muta cum liquida, e vale para mais que o {i}: em {travail} o {ai} funciona como uma unidade, em {vraiment} o {ai} idem, em {father}…ops, em {faut} o {au} também. Quando dois sons se juntam numa sílaba, o contorno delas desaparece e nasce um som novo.

## Leitura aplicada

O texto de **Louis Segond** em {Jean 1:1} é, sem querer, um manifesto da ortografia francesa: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Repare que **não há um único acento de tonicidade** nas 24 sílabas. O que sustenta a frase são as terminações: {commencement} termina em schwa, {était} e {était} em {t} mudo, {avec} em {v} muda, {Parole} em {l} mudo, {Dieu} e {Dieu} em {œ} mudo. A frase parece sem acentos porque o francês não precisa deles.

Agora olhe as minúcias de {Jean 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. Aqui aparece {œ} mudo em {brille}? Não — {brille} tem {i} tônico depois de {e}, o que dá [ij]: [bʁij]. É o {y} escrito {i} que você já viu em {soleil}. E {reçue} leva cedilha, porque {ç} antes de {u}.

Compare com {Psaume 1:1}: { Heureux l’homme qui n’a pas walké dans le conseil des pécheurs}. Repare em {l’homme} — o {h} inicial de {homme} é mudo e portanto **não** há elisão, escrevemos {l’homme} e não {l’homme}, que seria errado pela mesma razão que {l’héros}.

## O essencial

O acento francês aponta para a última vogal soada, nunca para a tonicidade. E as marcas importantes para o som são poucas: {â} = [ɑ], {ç} = [s], {œ} = [ø], {ë} = [ɛ], e o {y} disfarçado de {i}.`),
  vocab: [
    V('père', 'père', 'pai; grave: última vogal é o {è}, não o {e} mudo'),
    V('mère', 'mère', 'mãe; o acento é obrigatório para revelar o som'),
    V('hôtel', 'hôtel', 'hotel; {ô} aberto [o] e {el} final mudo'),
    V('forêt', 'forêt', 'floresta; {ê} = [ɛ] e {t} final mudo'),
    V('château', 'château', 'castelo; {â} = [ɑ] aberto'),
    V('garçon', 'garçon', 'menino, garoto; {ç} = [s] antes de {o}'),
    V('reçu', 'recevoir', 'recebido; {ç} = [s] antes de {u}'),
    V('façon', 'façon', 'modo, maneira; {ç} = [s] antes de {a}'),
    V('sœur', 'sœur', 'irmã; {œ} = [ø] e {r} uvular final'),
    V('cœur', 'cœur', 'coração; {œ} = [ø]'),
    V('œuf', 'œuf', 'ovo; ligadouro {œ} = [ø]'),
    V('Noël', 'Noël', 'Natal; {ë} = [ɛ] aberto'),
    V('travail', 'travail', 'trabalho; {ai} tônico depois de vogal'),
    V('pays', 'pays', 'país; {y} = vogal + {i} tônico'),
    V('soleil', 'soleil', 'sol; {euil} = [œj] com {i} semivocal'),
    V('fête', 'fête', 'festa; {ê} de origem latina, som [fɛt]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {père}, o que o acento grave {è} está realmente marcando?'),
    options: [
      T('A última vogal soada da palavra, porque o {e} final é mudo'),
      T('A tonicidade da sílaba {père}'),
      T('Uma vogal longa do latim, e nada mais'),
      T('A ditongue, uma marca de som sem posição fixa'),
    ],
    answer: 0,
    hint: T('Regra §1: o acento é posicional — sempre antes da última vogal.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva a palavra com acento circunflexo: foret (floresta)'),
      answer: 'forêt',
      hint: T('A última vogal é a própria {e}, então o acento vai nela.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase respeita a regra do {y} por vogal + {i} tônica?'),
      options: [
        T('{Il a herida} — o {i} de {herida} é tônico e vira [i]'),
        T('{Le petit chien} — o {i} de {petit} está precedido de {t}'),
        T('{Une vie calme} — o {i} de {vie} é seguido de outra vogal'),
        T('{Il habite ici} — os dois {i} são átonos'),
      ],
      answer: 0,
      hint: T('Regra §2: a regra é vogal + {i}, não {t} + {i} nem vogal + {i} + vogal.'),
    },
    {
      kind: 'match',
      prompt: T('Associe a marca à sua função'),
      pairs: [
        { a: T('{â}'), b: T('vogal [ɑ] aberta em {château}') },
        { a: T('{ç}'), b: T('vogal [s] antes de {a, o, u}') },
        { a: T('{œ}'), b: T('vogal [ø] em {sœur}') },
        { a: T('{ë}'), b: T('vogal [ɛ] aberta em {Noël}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Em {il est mon berger}, quantos acentos de tonicidade há?'),
      answer: 'zero',
      hint: T(
        'Dica: o nome de Deus em francês é {Dieu} [djø] — a última vogal é muda, e ainda assim nada é acentuado.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O acento marca a última vogal soada, e sua posição é sempre a penúltima: {père, mère, frère, après, hôtel, forêt, goût, sûr}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O grave {è} aparece só em graves e o circunflexo {â ê î ô û} só em agudas; nenhum dos dois marca tonicidade.',
      ),
    },
    {
      n: '3',
      text: T(
        'O {â} é a única vogal em que o acento muda o som: [a] vira [ɑ] em {château}, {forêt}, {côte}, {tête}, {fête}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O {ç} dá [s] antes de {a, o, u} onde o {c} daria [k]: {ça, façon, garçon, reçu, douce, Lesson}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Vogal + {i} tônico escreve-se {y}: {travail, pays, exil,abilidade}; e {œ} = [ø] tanto ligado ({cœur}) quanto solto ({soeur}).',
      ),
    },
  ],
  notes: [
    {
      label: T('A palavra aguda que ninguém acentua'),
      text: T(
        'Um lusófono passa anos acentuando {cafe} e {livro} e um hispanohablante {café} e {casa}. No francês isso seria erro em ambos os casos. Uma palavra aguda como {café}, {idée}, {papier} já se revela aguda pelo seu final mudo, e uma grave como {maison}, {chaise} pelo {n} ou {s} final. Nada a fazer.',
      ),
    },
    {
      label: T('Quando o acento mente'),
      text: T(
        'Em {fête}, {hôtel}, {tête}, {bête}, {système}, {intègre} o circunflexo é uma fossilização: marca a vogal longa do latim, hoje pronunciada breve. Um aluno cuidadoso que tente alongar a vogal soará arcaico, não francês. O acento nem sempre é fonético — às vezes é um mapa.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('No princípio era o Verbo (Jo 1:1) — nenhum acento de tonicidade'),
    },
    {
      text: 'il était dans le monde',
      gloss: T('ele estava no mundo — {était} aguda, {o} fechado [o]'),
    },
    { text: 'un bon père', gloss: T('um bom pai — {père} grave, acento obrigatoriamente no {è}') },
    {
      text: 'la lumière brille',
      gloss: T('a luz brilha — {ill} = [j] e {i} semivocal, como {soleil}'),
    },
    { text: 'une tête de blé', gloss: T('uma cabeça de trigo — {ê} = [ɛ] aberto') },
    { text: 'le château de Paris', gloss: T('o castelo de Paris — {â} = [ɑ] aberto') },
    { text: 'un cœur pur', gloss: T('um coração puro — {œ} = [ø] e {r} uvular final') },
    { text: 'le garçon et sa sœur', gloss: T('o menino e sua irmã — {ç} e {œ} em uma frase só') },
    {
      text: 'le travail est court',
      gloss: T('o trabalho é curto — {ai} tônico funciona como unidade'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os acentos e o que eles marcam'),
      head: [T('Marca'), T('Tipo de palavra'), T('Som'), T('Exemplo')],
      rows: [
        ['{è}', 'grave', '[ɛ]', '{père}'],
        ['{ê}', 'aigue', '[ɛ]', '{forêt}'],
        ['{ô}', 'aigue', '[o]', '{hôtel}'],
        ['{û}', 'aigue', '[y]', '{sûr}'],
        ['{â}', 'circunflexo histórico', '[ɑ]', '{château}'],
        ['{ë}', 'trema', '[ɛ]', '{Noël}'],
      ],
    },
    {
      caption: T('Tabela 2 — Sinais que mudam o som'),
      head: [T('Par'), T('Com o sinal'), T('Sem o sinal'), T('Exemplo')],
      rows: [
        ['c / ç', '[s]', '[k]', '{façon} / {capot}'],
        ['e / è', '[ɛ]', '[ə]', '{père} / {pere}'],
        ['o / ô', '[ɔ]', '[o]', '{côte} / {cote}'],
        ['a / â', '[ɑ]', '[a]', '{château} / {chaton}'],
        ['i / y', '[i]', '[i]', '{travail} / {travaux}'],
      ],
    },
  ],
};
