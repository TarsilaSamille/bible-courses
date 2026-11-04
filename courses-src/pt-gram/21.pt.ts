import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('A estrutura do período'),
  title: T('Período composto por coordenação'),
  subtitle: T('Relações entre orações independentes'),
  body: C(`**Visão geral.** A coordenação {sindética} usa conectivo: em {Vinde e segui-me}, o {e} é conectivo, e as duas orações ficam marcadas pela sua presença.

**Regra 1.** A coordenação {assindética} dispensa conectivo: em {Saiu, tomou o manto, saiu}, as vírgulas separam as orações, e nenhuma palabra as liga.

**Regra 2.** A relação semântica da coordenação é uma de cinco: {adição}, {oposição}, {alternativa}, {conclusão} ou {explicação}, e é ela que escolhe o conectivo.

**Regra 3.** A {alternativa} exige {ou} e nega o que se nega em {não ... ou}; a {explicativa} usa {que} e {pois}, que significa {por isso} e não {porque}.

**Regra 4.** O {polissíndeto} é a repetição do conectivo: em {O amor é paciente, o amor é bondoso}, o {é} se repete e a vírgula aparece a cada vez.

**Aplicação.** Em {Não mates, e não cometas adultério}, as duas orações são coordenadas por {e} com valor **aditivo negativo**. Em {O amor é paciente, o amor é bondoso} (1Cor 13, 4), são quatro orações coordenadas, e o verbo {é} se repete por **polissíndeto**. E a frase grega ({Ἡ ἀγάπη μακροθυμεῖ}) traz verbo apenas na primeira, e as demais o omitem: é o que o português compensa repetindo.

**Verificação.** Para duas orações coordenadas, pergunte: a segunda **soma**, **escolhe**, **opõe**, **conclui** ou **explica** a primeira? A resposta dá a relação e a conjunção. Depois: há **vírgula** antes da conjunção? E há **sujeito** nas duas orações, ou o segundo é elícito? Três perguntas fecham a análise.`),
  vocab: [
    V('coordenação', 'coordenação', 'junção de orações independentes'),
    V('sindética', 'sindética', 'com conectivo'),
    V('assindética', 'assindética', 'sem conectivo'),
    V('aditiva', 'aditiva', 'a segunda soma'),
    V('adversativa', 'adversativa', 'a segunda opõe'),
    V('alternativa', 'alternativa', 'a segunda escolhe'),
    V('conclusiva', 'conclusiva', 'a segunda conclui'),
    V('explicativa', 'explicativa', 'a segunda explica'),
    V('polissíndeto', 'polissíndeto', 'conectivo repetido'),
    V('pois', 'pois', 'conectivo conclusivo, não causal'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A coordenação {sindética} usa conectivo: em {Vinde e segui-me}, o {e} é conectivo, e as duas orações ficam marcadas pela sua presença.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A coordenação {assindética} dispensa conectivo: em {Saiu, tomou o manto, saiu}, as vírgulas separam as orações, e nenhuma palabra as liga.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A relação semântica da coordenação é uma de cinco: {adição}, {oposição}, {alternativa}, {conclusão} ou {explicação}, e é ela que escolhe o conectivo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {alternativa} exige {ou} e nega o que se nega em {não ... ou}; a {explicativa} usa {que} e {pois}, que significa {por isso} e não {porque}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O {polissíndeto} é a repetição do conectivo: em {O amor é paciente, o amor é bondoso}, o {é} se repete e a vírgula aparece a cada vez.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {pois} que não é {porque}'),
      text: T(
        'Em {Cheguei, pois era tarde}, o {pois} significa {por isso}, e a segunda oração explica a primeira. Em {Não fui, pois era tarde}, o mesmo {pois} significa {porque}, e a segunda oração explica a primeira. A forma é idêntica e o sentido muda; é por isso que a gramática normativa trata {pois} como conclusivo e reserva {porque} para o causal.',
      ),
    },
    {
      label: T('O verbo que o grego omite'),
      text: T(
        'A coordenação grega quase nunca repete o verbo: {ἐλθὼν δὲ προσευξάμενος} traz um só verbo para duas orações. O português precisa repetir porque não tem essa economia sintática, e a repetição é o que produz a leitura bíblica polissíndética: {Vinde, e adorai, e crede}, em que cada verbo novo é uma oração nova.',
      ),
    },
  ],
  examples: [
    {
      text: 'Vinde e segui-me.',
      gloss: T('Coordenação sindética aditiva: {e} liga duas orações independentes.'),
    },
    {
      text: 'Não mates, e não cometas adultério.',
      gloss: T('Sindética aditiva negativa: a negação vale para as duas orações.'),
    },
    {
      text: 'Veio, mas não viu.',
      gloss: T('Sindética adversativa: {mas} opõe a segunda oração à primeira.'),
    },
    {
      text: 'Ficou ou saiu.',
      gloss: T('Sindética alternativa: {ou} oferece duas possibilidades, e só uma se realiza.'),
    },
    {
      text: 'Choveu, logo ficou.',
      gloss: T('Sindética conclusiva: {logo} tira a conclusão da primeira oração.'),
    },
    {
      text: 'Saiu, tomou o manto, saiu.',
      gloss: T('Assindética: três orações sem conectivo, separadas por vírgula.'),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polissíndeto: o verbo {é} se repete em cada oração coordenada.'),
    },
    {
      text: 'Não fui, pois era tarde.',
      gloss: T('O {pois} aqui é causal: a segunda oração explica a primeira.'),
    },
    {
      text: 'Cheguei, pois era tarde.',
      gloss: T('O mesmo {pois} é conclusivo: tira {portanto} e explica.'),
    },
  ],
  tables: [
    {
      caption: T('As cinco relações da coordenação'),
      head: [T('Relação'), T('Conectivos'), T('O que a segunda oração faz'), T('Exemplo')],
      rows: [
        [T('{adição}'), T('{e}, {nem}, {mas também}'), T('soma'), T('{veio e viu}')],
        [T('{oposição}'), T('{mas}, {porém}, {contudo}'), T('opõe'), T('{veio, mas não viu}')],
        [T('{alternativa}'), T('{ou}'), T('escolhe ou nega'), T('{ficou ou saiu}')],
        [
          T('{conclusão}'),
          T('{logo}, {portanto}, {pois}'),
          T('conclui'),
          T('{choveu, logo ficou}'),
        ],
        [T('{explicação}'), T('{que}, {porque}'), T('explica'), T('{ficou, porque era tarde}')],
      ],
    },
    {
      caption: T('Sindética e assindética'),
      head: [T('Tipo'), T('Conectivo'), T('O que separa'), T('Exemplo')],
      rows: [
        [T('{sindética}'), T('presente'), T('vírgula antes do conectivo'), T('{Vinde e segui-me}')],
        [
          T('{sindética adversativa}'),
          T('presente'),
          T('vírgula obrigatória'),
          T('{veio, mas não viu}'),
        ],
        [T('{sindética sem vírgula}'), T('presente'), T('nenhuma vírgula'), T('{veio e viu}')],
        [
          T('{assindética}'),
          T('ausente'),
          T('vírgula ou ponto e vírgula'),
          T('{saiu, tomou, saiu}'),
        ],
        [
          T('{polissíndeto}'),
          T('repetido'),
          T('vírgula a cada oração'),
          T('{é paciente, é bondoso}'),
        ],
      ],
    },
    {
      caption: T('Os conectivos e o que eles dizem'),
      head: [T('Conectivo'), T('Relação'), T('Equivale a'), T('Exemplo')],
      rows: [
        [T('{e}'), T('adição'), T('{além disso}'), T('{veio e viu}')],
        [T('{mas}'), T('oposição'), T('{porém}'), T('{veio, mas não viu}')],
        [T('{contudo}'), T('oposição'), T('{mas}'), T('{contudo, não veio}')],
        [T('{pois}'), T('conclusão ou causa'), T('{portanto} ou {porque}'), T('{pois era tarde}')],
        [T('{logo}'), T('conclusão'), T('{portanto}'), T('{choveu, logo ficou}')],
        [T('{porque}'), T('causa'), T('{visto que}'), T('{não fui, porque era tarde}')],
        [T('{portanto}'), T('conclusão'), T('{logo}'), T('{era tarde, portanto ficou}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Cheguei, pois era tarde}, o {pois} é:'),
    options: [
      T('conclusivo, e vale por {portanto}'),
      T('causal, e vale por {porque}'),
      T('adversativo, e vale por {mas}'),
      T('alternativo, e vale por {ou}'),
    ],
    answer: 0,
    hint: T('A resposta é {portanto}, e não {porque}: o {pois} vem depois da consequência.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {Saiu, tomou o manto, saiu}, a coordenação é:'),
      options: [
        T('assindética, porque não há conectivo'),
        T('sindética, porque as vírgulas são conectivos'),
        T('adversativa, porque as orações se opõem'),
        T('subordinada, porque não há sujeito na segunda'),
      ],
      answer: 0,
      hint: T('Coordenação sem conectivo é, por definição, assindética.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a relação ao conectivo que a abre.'),
      pairs: [
        { a: T('{e}'), b: T('adição') },
        { a: T('{mas}'), b: T('oposição') },
        { a: T('{ou}'), b: T('alternativa') },
        { a: T('{logo}'), b: T('conclusão') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A coordenação ______ não usa conectivo e separa as orações por vírgula.'),
      answer: 'assindética',
      hint: T('A {sindética} sempre traz conectivo.'),
    },
  ],
};
