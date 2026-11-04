import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('O sentido e a subordinação'),
  title: T('As oito orações subordinadas'),
  subtitle: T('O valor que o conectivo abre'),
  body: C(`**Visão geral.** Toda subordinada abre com um conectivo, e é ele que diz o valor: o {que} de {Creio que isto é verdade} é {substantiva}, e o {que} de {O barco que vias} é {adjetiva}.

**Regra 1.** Substantiva, adjetiva e adverbial dizem o nome da função que exercem; as adverbiais se dividem em oito: causal, consecutiva, condicional, final, concessiva, comparativa, conformativa e proporcional.

**Regra 2.** O {se} é condicional com verbo conjugado e partícula apassivadora com verbo intransitivo: em {Se eu visse} há verbo; em {sei que ele sabe} o {se} é o verbo {sei}.

**Regra 3.** O teste da {substantiva} é a substituição por {isto}: em {Creio que isto é verdade}, {Creio isto} continua correto; em {Sabe que isto}, também, e é por isso que ela é substantiva.

**Regra 4.** O teste da {adverbial} é a substituição por {ontem de manhã}, e não por {isto}: em {Saiu ontem de manhã}, a oração pode ser trocada por um advérbio, e é por isso que não é substantiva.

**Aplicação.** Em {Se eu visse o barco, navegaria}, {Se eu visse o barco} é adverbial condicional de primeiro grau, e {navegaria} é o verbo da principal. Em {Sei que ele sabe}, o mesmo {se} acompanha um verbo intransitivo, não deixa nada por sujeito nem por objeto, e a subordinada {que ele sabe} ocupa o lugar de sujeito: é {substantiva subjetiva}. Romanos 8, 31 traz o primeiro tipo em forma de pergunta retórica: «Se Deus é conosco, quem será contra nós?»

**Verificação.** Três perguntas, sempre nesta ordem. Primeira: qual é o conectivo? Segunda: a subordinada pode ser trocada por um sintagma, e por qual? Por {isto} ou {aquilo}, é {substantiva}; por {o barco que vias}, é {adjetiva}; por {ontem de manhã}, é {adverbial}. Terceira, e só quando for adverbial: qual das oito? A segunda é a que mais engana, porque uma adverbial também pode ser trocada por um sintagma no {isso}.`),
  vocab: [
    V('substantiva', 'substantiva', 'cumpre função de substantivo'),
    V('adjetiva', 'adjetiva', 'cumpre função de adjetivo'),
    V('adverbial', 'adverbial', 'indica circunstância'),
    V('conectivo', 'conectivo', 'palavra que abre a subordinada'),
    V('relativa', 'relativa', 'sinônimo de adjetiva restritiva'),
    V('restritiva', 'restritiva', 'a que vem sem vírgula e limita o nome'),
    V('explicativa', 'explicativa', 'a que vem entre vírgulas e acrescenta'),
    V('causal', 'causal', 'a que indica causa'),
    V('consecutiva', 'consecutiva', 'a que indica consequência'),
    V('condicional', 'condicional', 'a que indica condição'),
    V('final', 'final', 'a que indica finalidade'),
    V('concessiva', 'concessiva', 'a que admite um fato apesar do qual outro acontece'),
    V('comparativa', 'comparativa', 'a que estabelece comparação'),
    V('conformativa', 'conformativa', 'a que indica conformidade'),
    V('proporcional', 'proporcional', 'a que indica proporção'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Toda subordinada abre com um conectivo, e é ele que diz o valor: o {que} de {Creio que isto é verdade} é {substantiva}, e o {que} de {O barco que vias} é {adjetiva}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Substantiva, adjetiva e adverbial dizem o nome da função que exercem; as adverbiais se dividem em oito: causal, consecutiva, condicional, final, concessiva, comparativa, conformativa e proporcional.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {se} é condicional com verbo conjugado e partícula apassivadora com verbo intransitivo: em {Se eu visse} há verbo; em {sei que ele sabe} o {se} é o verbo {sei}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O teste da {substantiva} é a substituição por {isto}: em {Creio que isto é verdade}, {Creio isto} continua correto; em {Sabe que isto}, também, e é por isso que ela é substantiva.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste da {adverbial} é a substituição por {ontem de manhã}, e não por {isto}: em {Saiu ontem de manhã}, a oração pode ser trocada por um advérbio, e é por isso que não é substantiva.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {se} que o grego resolve de outro modo'),
      text: T(
        'O grego antigo não tem partícula apassivadora: o que o português marca com {se}, o grego marca pelo caso ou pela voz média. Em {εἶπεν}, o aoristo ativo é traduzido por {disse} sem {se} nenhum; em {ἐγένετο}, o médio vira {se fez}. O tradutor decide se leva o {se} do português ou a forma grega, e a decisão muda o modo da oração.',
      ),
    },
    {
      label: T('O {como} com três valores'),
      text: T(
        'O mesmo {como} abre três subordinadas de valores diferentes: em {Correu como o cavalo}, é {comparativa}; em {Faz como lhe mandaram}, é {conformativa}; em {Caminhou como anak}, é {causal}, porque a consequência vem depois. O conectivo não decide sozinho: quem classifica sem olhar a principal classifica errado.',
      ),
    },
  ],
  examples: [
    {
      text: 'Creio que isto é verdade.',
      gloss: T('{substantiva direta}: troque por {isto} e a frase continua correta.'),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('{substantiva subjetiva}: a subordinada ocupa o lugar de sujeito de {é}.'),
    },
    {
      text: 'O barco que vias era o dele.',
      gloss: T('{adjetiva restritiva}: o {que} limita {barco} a um só barco.'),
    },
    {
      text: 'O barco, que era velho, adormeceu.',
      gloss: T('{adjetiva explicativa}: entre vírgulas, acrescenta sem limitar.'),
    },
    {
      text: 'Não navegou porque não tinha fé.',
      gloss: T('{adverbial causal}: a causa está dentro da subordinada.'),
    },
    {
      text: 'A tempestade foi tão forte que o barco se encheu.',
      gloss: T('{adverbial consecutiva}: a subordinada traz o resultado do que se afirma.'),
    },
    {
      text: 'Se o vento cessar, embarcaremos.',
      gloss: T('{adverbial condicional}: o verbo principal está no futuro.'),
    },
    {
      text: 'Vai a Nazaré para que se cumpram as Escrituras.',
      gloss: T('{adverbial final}: o {para que} indica finalidade, e finalidade não é fato.'),
    },
    {
      text: 'Embora chovesse, saiu.',
      gloss: T('{adverbial concessiva}: o fato principal acontece apesar da subordinada.'),
    },
  ],
  tables: [
    {
      caption: T('O conectivo e o valor que ele abre'),
      head: [T('Tipo'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{substantiva}'), T('{que}, {se}, {qual}'), T('{Creio que isto é verdade}')],
        [T('{substantiva objetiva direta}'), T('{que}, {o qual}'), T('{Disse que viria}')],
        [T('{substantiva subjetiva}'), T('{que}, {se}'), T('{Sei que ele sabe}')],
        [T('{substantiva predicativa}'), T('{que}'), T('{É necessário que venhas}')],
        [T('{adjetiva restritiva}'), T('{que}, {o qual}, {quem}'), T('{o barco que vias}')],
        [T('{adjetiva explicativa}'), T('{que}, {o qual}, {quem}'), T('{o barco, que era velho}')],
        [T('{adverbial causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [
          T('{adverbial consecutiva}'),
          T('{logo que}, {de modo que}'),
          T('{tão forte foi que se encheu}'),
        ],
        [T('{adverbial condicional}'), T('{se}, {caso}, {contanto que}'), T('{Se o vento cessar}')],
        [T('{adverbial final}'), T('{para que}, {a fim de que}'), T('{para que se cumpram}')],
        [T('{adverbial concessiva}'), T('{embora}, {ainda que}'), T('{Embora chovesse, saiu}')],
        [T('{adverbial comparativa}'), T('{como}, {quanto a}'), T('{Correu como o cavalo}')],
        [
          T('{adverbial conformativa}'),
          T('{conforme}, {segundo}'),
          T('{Caminhou conforme a palavra}'),
        ],
        [
          T('{adverbial proporcional}'),
          T('{à medida que}, {quanto mais}'),
          T('{À medida que crescia}'),
        ],
      ],
    },
    {
      caption: T('O mesmo conectivo em dois valores'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Porquê')],
      rows: [
        [
          T('{Disse que viria}'),
          T('{que}'),
          T('{substantiva direta}'),
          T('completa o verbo {disse}'),
        ],
        [
          T('{O homem que vi era judeu}'),
          T('{que}'),
          T('{adjetiva restritiva}'),
          T('caracteriza o nome {homem}'),
        ],
        [
          T('{Se ele vier, sairei}'),
          T('{se}'),
          T('{condicional}'),
          T('o verbo traz sujeito expresso'),
        ],
        [
          T('{Sei que ele sabe}'),
          T('{se}'),
          T('{substantiva subjetiva}'),
          T('o verbo {sei} é intransitivo'),
        ],
        [
          T('{Correu como o cavalo}'),
          T('{como}'),
          T('{comparativa}'),
          T('os dois termos postulam a mesma qualidade'),
        ],
        [
          T('{Faz como lhe mandaram}'),
          T('{como}'),
          T('{conformativa}'),
          T('indica conformidade com uma ordem'),
        ],
      ],
    },
    {
      caption: T('O teste da substituição'),
      head: [
        T('O que se coloca no lugar'),
        T('O que a substituição revela'),
        T('Tipo'),
        T('Cuidado'),
      ],
      rows: [
        [
          T('{isto}, {aquilo}'),
          T('função de substantivo'),
          T('{substantiva}'),
          T('serve para todas'),
        ],
        [
          T('{que}, {o qual}'),
          T('função de adjetivo'),
          T('{adjetiva}'),
          T('só para as que têm relativo'),
        ],
        [
          T('{ontem de manhã}'),
          T('função de advérbio'),
          T('{adverbial}'),
          T('a causal também aceita {isso}'),
        ],
        [
          T('{nessa hora}'),
          T('função de tempo'),
          T('{adverbial temporal}'),
          T('algumas substantivas também'),
        ],
        [
          T('{muito}'),
          T('função de intensidade'),
          T('{comparativa}'),
          T('pouco usada em biblical'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Sei que ele sabe}, a subordinada {que ele sabe} é:'),
    options: [
      T('substantiva subjetiva, porque ocupa o lugar de sujeito de {sei}'),
      T('adverbial condicional, porque começa por {se}'),
      T('adjetiva explicativa, porque vem entre vírgulas'),
      T('substantiva direta, porque vem depois do verbo'),
    ],
    answer: 0,
    hint: T('Substitua a subordinada por {isto}: {Sei isso} continua correto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {E disse-lhes: «Por que tendes por foro?»}, a oração entre aspas é:'),
      options: [
        T('substantiva direta de primeiro grau, objeto de {disse-lhes}'),
        T('oração coordenada assindética, por não ter conectivo'),
        T('oração principal, porque tem sujeito próprio'),
        T('adverbial final, porque vem no fim do período'),
      ],
      answer: 0,
      hint: T('Uma fala reproduzida costuma completar o verbo que a introduz.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a subordinada ao seu valor.'),
      pairs: [
        { a: T('{Embora chovesse, saiu}'), b: T('concessiva') },
        { a: T('{Caminhou conforme a palavra}'), b: T('conformativa') },
        { a: T('{para que se cumpram as Escrituras}'), b: T('final') },
        { a: T('{À medida que avançava, crescia}'), b: T('proporcional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'O {conectivo} abre a subordinada, mas quem diz o valor é a ______ principal. The connector opens the subordinate clause, but what says the value is the main ______.',
      ),
      answer: 'oração',
      hint: T('Em {Sei que ele sabe}, o {que} abre e a principal decide.'),
    },
  ],
};
