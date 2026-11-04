import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('A flexão da palavra e a concordância'),
  title: T('Colocação pronominal'),
  subtitle: T('Próclise, ênclise e mesóclise'),
  body: C(`**Visão geral.** Há {próclise} quando o pronome encontra uma palavra atrativa à sua frente: em {não me veja}, o {não} puxa o {me} para antes do verbo.

**Regra 1.** Nos demais casos o pronome vai para depois do verbo, o que se chama {ênclise}: em {fala-me}, {viu-o}, o pronome fica colado ao verbo.

**Regra 2.** A {mesóclise} aparece quando o infinitivo e o auxiliar formam locução: em {dir-me-ás}, o pronome fica entre os dois, e o verbo é a locução inteira.

**Regra 3.** A palavra atrativa é sempre {negativa}, {interrogativa}, {relativa}, {conjunção} ou pronome: em {Quem me viu}, {me} é {none} por causa de {quem}.

**Regra 4.** O grego resolve a mesma frase por {enclise} e pela terminação do verbo: em {κλαίω} o pronome não aparece, e a forma verbal já diz a pessoa.

**Aplicação.** Em {Jesus amou-o}, o pronome {o} está em **ênclise** e é objeto direto de {amou}. Em {não me viu}, o mesmo pronome está em **próclise** por causa do {não}. No grego original, o pronome é **enclítico** e se gruda na primeira palavra acentuada da frase, que nem sempre é o verbo, e é por isso que a posição em português raramente coincide com a grega.

**Verificação.** Pergunte quatro coisas, nesta ordem. Há **negação**, **interrogação** ou **conjunção** antes do verbo? Há outro pronome, como em {me} e {te} juntos? O verbo é um dos de **ênclise obrigatória**? Se a resposta é não para as três e o verbo é um auxiliar de futuro, a {mesóclise} é possível. Em qualquer caso, a posição não é livre: ela é decidida pela estrutura, não pela fluência.`),
  vocab: [
    V('próclise', 'próclise', 'pronombre antes do verbo'),
    V('ênclise', 'ênclise', 'pronomere depois do verbo'),
    V('mesóclise', 'mesóclise', 'pronomere entre infinitivo e auxiliar'),
    V('pronome oblíquo', 'pronome oblíquo', 'forma átona de objeto'),
    V('não', 'não', 'palavra atrativa de próclise'),
    V('se', 'se', 'palavra atrativa de próclise'),
    V('amar-te-ei', 'amar-te-ei', 'mesóclise no futuro do indicativo'),
    V('dizer-me', 'dizer-me', 'mesóclise no infinitivo'),
    V('fala-me', 'fala-me', 'ênclise em verbo simples'),
    V('palavra atrativa', 'palavra atrativa', 'palavra que provoca próclise'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Há {próclise} quando o pronome encontra uma palavra atrativa à sua frente: em {não me veja}, o {não} puxa o {me} para antes do verbo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Nos demais casos o pronome vai para depois do verbo, o que se chama {ênclise}: em {fala-me}, {viu-o}, o pronome fica colado ao verbo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {mesóclise} aparece quando o infinitivo e o auxiliar formam locução: em {dir-me-ás}, o pronome fica entre os dois, e o verbo é a locução inteira.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A palavra atrativa é sempre {negativa}, {interrogativa}, {relativa}, {conjunção} ou pronome: em {Quem me viu}, {me} é {none} por causa de {quem}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego resolve a mesma frase por {enclise} e pela terminação do verbo: em {κλαίω} o pronome não aparece, e a forma verbal já diz a pessoa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Onde grego e português discordam'),
      text: T(
        'Em {Jesus amou-o}, o português põe o pronome depois do verbo; o grego antigo {ἠγάπησεν αὐτόν} também põe, mas a posição grega é a da última palavra acentuada da frase. Resultado: em várias frases o grego e o português divergem, e não por erro de nenhum dos dois, e sim porque as duas línguas fixaram regras diferentes para o mesmo problema.',
      ),
    },
    {
      label: T('A forma que o grego dispensa'),
      text: T(
        'O grego antigo tem pronome reflexivo {ἑαυτοῦ} e oblíquo {αὐτοῦ}, mas os usa pouco: a terminação do verbo já marca a pessoa, e o pronome aparece apenas quando a frase é ambígua. O português não tem essa econoria, e por isso a colocação pronominal é uma discussão longa em que cada exceção nova nasce do texto bíblico.',
      ),
    },
  ],
  examples: [
    { text: 'Jesus amou-o', gloss: T('Ênclise: o pronome {o} vem depois do verbo {amou}.') },
    { text: 'não me viu', gloss: T('Próclise: o {não} puxa o {me} para antes do verbo {viu}.') },
    {
      text: 'Quem me viu?',
      gloss: T('Pronome {me} em próclise por causa do pronome interrogativo {Quem}.'),
    },
    {
      text: 'dir-me-ás',
      gloss: T('Mesóclise: o pronome fica entre o infinitivo {dir} e o auxiliar {ás}.'),
    },
    {
      text: 'amá-lo-emos',
      gloss: T('Mesóclise com infinitivo e auxiliar {emos} forming one verb.'),
    },
    {
      text: 'falar-me',
      gloss: T('Mesóclise com auxiliar {ar}: o pronome fica entre {fal} e {ar}.'),
    },
    {
      text: 'não se diga',
      gloss: T('A {se} de cliticização não provoca próclise: {não} atrai o pronome, {se} fica.'),
    },
    {
      text: 'dou-lhes a lei',
      gloss: T('Ênclise com pronome {lhes}; a ordem indireto e direto segue a regência.'),
    },
    {
      text: 'Jesus, que me ama, deu-me',
      gloss: T(
        'A oração adjetiva traz {que} atrativa, e {me} fica em próclise mesmo em forma clítica.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Palavras que provocam próclise'),
      head: [T('Tipo'), T('Palavras'), T('Exemplo')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}, {jamás}'), T('{não me veja}')],
        [T('interrogativas'), T('{quem}, {que}, {qual}'), T('{Quem me viu}')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}')],
        [T('pronomes'), T('{me}, {te}, {nos}, {vos}'), T('{me diz que sim}')],
        [T('indefinidos'), T('{alguém}, {alguma coisa}'), T('{Alguém me viu}')],
        [T('virtuais'), T('{e}, {mas}, {nem}'), T('{E me chamaram}')],
        [T('pronome relativo'), T('{quem}, {que}'), T('{Quem me ouvir, seu é}')],
      ],
    },
    {
      caption: T('As três posições do pronome'),
      head: [T('Posição'), T('Onde fica'), T('Quando'), T('Exemplo')],
      rows: [
        [T('{próclise}'), T('antes do verbo'), T('com palavra atrativa'), T('{não me veja}')],
        [T('{ênclise}'), T('depois do verbo'), T('sem atrativa'), T('{fala-me}')],
        [
          T('{mesóclise}'),
          T('entre infinitivo e auxiliar'),
          T('com locução verbal'),
          T('{dir-me-ás}'),
        ],
      ],
    },
    {
      caption: T('Ênclise e mesóclise por tempo verbal'),
      head: [T('Tempo'), T('Forma simples'), T('Com auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{fala}'), T('{está falando}'), T('ênclise')],
        [T('pretérito'), T('{falou}'), T('{havia falado}'), T('ênclise')],
        [T('futuro'), T('{falará}'), T('{dir-me-ás}'), T('mesóclise possível')],
        [T('infinitivo'), T('{falar}'), T('{dizer-me}'), T('mesóclise')],
        [T('gerúndio'), T('{falando}'), T('{estou falando}'), T('ênclise')],
        [T('particípio'), T('{falado}'), T('{tendo falado}'), T('ênclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {não me viu}, o pronome {me} está em próclise por causa de:'),
    options: [
      T('do {não}, que é palavra atrativa'),
      T('da pessoa de {me}'),
      T('do verbo {viu}'),
      T('da forma de {me}, que é átona'),
    ],
    answer: 0,
    hint: T('Tire o {não} e o {me} passa a ênclise: {viu-me}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {dir-me-ás}, há mesóclise porque:'),
      options: [
        T('o infinitivo {dir} e o auxiliar {ás} formam uma locução verbal'),
        T('o pronome {me} é do tipo que gosta de mesóclise'),
        T('o {dir} é um verbo de parar, e o {ás} é o auxiliar'),
        T('a frase tem negação que empurra o pronome'),
      ],
      answer: 0,
      hint: T('Contando {dir} e {ás} separadamente, são dois verbos; juntos, um só.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase à posição do pronome.'),
      pairs: [
        { a: T('{não me veja}'), b: T('{próclise}') },
        { a: T('{fala-me}'), b: T('{ênclise}') },
        { a: T('{dir-me-ás}'), b: T('{mesóclise}') },
        { a: T('{Quem me viu}'), b: T('{próclise} por pronome') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O pronome que fica entre o infinitivo e o auxiliar está em ______.'),
      answer: 'mesóclise',
      hint: T('Em {dir-me-ás}, o {me} fica no meio do verbo.'),
    },
  ],
};
