import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Leitura: João 1:1 (KJV)'),
  subtitle: T('In the beginning was the Word — leitura KJV'),
  section: T('Leituras'),
  body: C(`## O texto e seu registro

KJV, 1611: {In the beginning was the Word, and the Word was with God, and the Word was God.}

Este verso reúne várias estruturas: {was} como verbo irregular, {the Word} com artigo definido e maiúscula, {with} para relação próxima e {was God} sem artigo diante de {God}. Esta última forma ecoa o grego e concentra a afirmação; não é apenas estilo arcaico. O registro é arcaizante, mas a gramática continua legível.

## Leitura em camadas

Primeiro localize o verbo: {was} se repete três vezes. Depois identifique o sujeito: {the Word} retorna nas três cláusulas. Os complementos alternam: {in the beginning}, {with God}, {God}. O movimento sintático paralelo mostra identidade: a Palavra estava no princípio, estava com Deus e era Deus.

Leia João 1:5 e 1:14: {the light shineth} usa {shineth} com terminação arcaica; {was made flesh} combina passiva com uma afirmação bíblica; {dwelt} significa “morou”, não necessariamente “construiu uma tenda”. A glosa traduz a palavra; uma nota mais ampla pode mencionar a imagem do “tabernáculo”.`),
  vocab: [
    V('beginning', 'beginning', 'princípio'),
    V('Word', 'word', 'Palavra'),
    V('with', 'with', 'com'),
    V('flesh', 'flesh', 'carne'),
    V('dwelt', 'dwell', 'morou'),
    V('light', 'light', 'luz'),
    V('grace', 'grace', 'graça'),
    V('truth', 'truth', 'verdade'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que dwelt significa em João 1:14?'),
    options: [T('Morreu'), T('Morou entre nós'), T('Subiu ao céu'), T('Falou em público')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: “the Word ___ God” (João 1:1).'), answer: 'was' },
    {
      kind: 'match',
      prompt: T('Relacione palavra e glosa.'),
      pairs: [
        { a: 'beginning', b: T('princípio') },
        { a: 'flesh', b: T('carne') },
        { a: 'truth', b: T('verdade') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Que função tem a repetição de the Word nas três cláusulas?'),
      options: [
        T('Reforçar a identidade e criar paralelismo'),
        T('Indicar três palavras diferentes'),
        T('Criar três novos tempos verbais'),
        T('Eliminar o verbo was'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Não leia cada was isoladamente: a repetição cria paralelismo e reforça a identidade do sujeito.',
      ),
    },
    { n: '2', text: T('KJV usa terminações em -eth; não as reproduzas no inglês contemporâneo.') },
    {
      n: '3',
      text: T(
        'Dwelt here means resided; the tabernacle image is a contextual resonance, not a literal building action.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'A KJV é arcaizante, não o registro da versão moderna. Use a leitura para reconhecer a gramática, não para imitar cada forma.',
      ),
    },
  ],
  examples: [
    { text: '{was the Word}', gloss: T('era a Palavra') },
    { text: '{with God}', gloss: T('com Deus: relação próxima') },
    { text: '{dwelt among us}', gloss: T('morou entre nós') },
    { text: '{was made flesh}', gloss: T('foi feito carne') },
  ],
  tables: [
    {
      caption: T('Mapa do verso'),
      head: [T('Elemento'), T('Forma'), T('Valor')],
      rows: [
        [T('tempo'), '{in the beginning}', T('ponto de origem')],
        [T('sujeito'), '{the Word}', T('referente determinado')],
        [T('verbo'), '{was}', T('pasado irregular')],
        [T('complemento'), '{with God}', T('relação')],
      ],
    },
  ],
};
