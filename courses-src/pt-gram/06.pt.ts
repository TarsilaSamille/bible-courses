import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('A oração e seus termos'),
  title: T('Termos essenciais da oração'),
  subtitle: T('Sujeito e predicado'),
  body: C(`**Visão geral.** O {sujeito} é aquilo de que se declara algo: em {No princípio criou Deus os céus e a terra}, {Deus} é o sujeito, e a resposta à pergunta {quem?} o confirma.

**Regra 1.** O sujeito tem quatro formas: {simples} ({Deus}), {composto} ({Deus e a sua palavra}), {oculto} ({os discípulos}) e {indeterminado} ({se diz que}).

**Regra 2.** O {predicado} é o que se declara do sujeito, e o verbo é o seu núcleo: em {Deus criou os céus}, o predicado é {criou os céus}, e a forma {criou} diz o que aconteceu.

**Regra 3.** O {verbo de ligação} junta o {predicativo} ao sujeito: em {Deus é bom}, {é} liga, e {bom} diz o que se declara de {Deus}, sem verbo haver.

**Regra 4.** A posição do sujeito não define a função: em {E, logo, disse o SENHOR a Moisés}, o sujeito {o SENHOR} vem depois do verbo {disse}, e ainda assim é sujeito.

**Aplicação.** Em {No princípio criou Deus os céus e a terra}, a ordem grega (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) traz o sujeito {Deus} depois do verbo {criou}, e a análise não muda por isso. O predicado é {criou os céus e a terra}, com os objetos {os céus} e {a terra}. E {no princípio} é adjunto adverbial de tempo: pode ir para o fim da frase sem quebrar nada, o que já denuncia o que é acessório.

**Verificação.** Faça três perguntas, sempre nesta ordem: qual é o **verbo** e que pessoa e número ele exige? Qual é o substantivo que **aceita** esse verbo, e não o primeiro que aparece? O que resta depois do sujeito e do verbo é **predicado**? E o sujeito é simples, composto, oculto, indeterminado ou inexistente? Quatro perguntas, e o núcleo da oração está montado.`),
  vocab: [
    V('sujeito', 'sujeito', 'sujeito'),
    V('predicado', 'predicado', 'predicado'),
    V('sujeito simples', 'sujeito simples', 'um só núcleo'),
    V('sujeito composto', 'sujeito composto', 'dois ou mais núcleos'),
    V('sujeito oculto', 'sujeito oculto', 'presumido pela forma do verbo'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'não identificado na frase'),
    V('verbo de ligação', 'verbo de ligação', 'liga sujeito e predicativo'),
    V('predicativo', 'predicativo', 'atributo do sujeito via verbo de ligação'),
    V('Deus', 'Deus', 'sujeito posposto em {criou Deus}'),
    V('o SENHOR', 'o SENHOR', 'sujeito posposto em {disse o SENHOR}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {sujeito} é aquilo de que se declara algo: em {No princípio criou Deus os céus e a terra}, {Deus} é o sujeito, e a resposta à pergunta {quem?} o confirma.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O sujeito tem quatro formas: {simples} ({Deus}), {composto} ({Deus e a sua palavra}), {oculto} ({os discípulos}) e {indeterminado} ({se diz que}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {predicado} é o que se declara do sujeito, e o verbo é o seu núcleo: em {Deus criou os céus}, o predicado é {criou os céus}, e a forma {criou} diz o que aconteceu.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {verbo de ligação} junta o {predicativo} ao sujeito: em {Deus é bom}, {é} liga, e {bom} diz o que se declara de {Deus}, sem verbo haver.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A posição do sujeito não define a função: em {E, logo, disse o SENHOR a Moisés}, o sujeito {o SENHOR} vem depois do verbo {disse}, e ainda assim é sujeito.',
      ),
    },
  ],
  notes: [
    {
      label: T('O sujeito que o grego escreve depois'),
      text: T(
        'O grego antigo quase sempre põe o sujeito depois do verbo, como em {ὁ θεὸς ἐποίησεν}, e o português antigo fazia o mesmo. O português atual antepõe o sujeito por hábito, e é por isso que many readers marcam {Deus} errado em {criou Deus os céus}: a posição mudou de século, e não de regra.',
      ),
    },
    {
      label: T('A pergunta que separa sujeito de objeto'),
      text: T(
        'Em {Jesus amou os seus amigos}, {Jesus} responde a {quem amou?} e {os seus amigos} responde a {o que amou?}. Em {Jesus foi amado}, não há o que, e o sujeito vai para a pergunta do agente. Os dois casos usam a mesma pessoa do verbo; o que muda é a pergunta que faz sentido.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Sujeito {Deus} posposto; predicado {criou os céus e a terra}; {no princípio} é adjunto de tempo.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('A mesma frase com o sujeito antecipado: a estrutura interna é idêntica.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T('Sujeito composto {Deus e a sua palavra}, ligado por {e}, com o verbo no plural.'),
    },
    {
      text: 'Os discípulos ouviram a palavra.',
      gloss: T('Sujeito simples {os discípulos}, posposto ao verbo {ouviram}.'),
    },
    {
      text: 'Vinde a mim, todos os que credem.',
      gloss: T('O sujeito {todos os que suffer} vem expresso, e o verbo {Vinde} é o da principal.'),
    },
    {
      text: 'Diz-se que a palavra foi escrita.',
      gloss: T('Sujeito indeterminado: a forma {se} com verbo {diz-se} não diz quem diz.'),
    },
    {
      text: 'Deus é bom.',
      gloss: T(
        'Verbo de ligação {é} e predicativo {bom}: o que se declara é a qualidade, não ação.',
      ),
    },
    {
      text: 'O Verbo ficou carne.',
      gloss: T(
        'Verbo de ligação {ficou} com predicativo {carne}, que é o que o Verbo passou a ser.',
      ),
    },
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Sujeito {o SENHOR} posposto, verbo {disse} na 3.ª do singular, {a Moisés} objeto indireto.',
      ),
    },
  ],
  tables: [
    {
      caption: T('As quatro espécies de sujeito'),
      head: [T('Espécie'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('um só núcleo'), T('{Deus}')],
        [T('{composto}'), T('dois núcleos unidos por {e} ou {nem}'), T('{Deus e a sua palavra}')],
        [T('{oculto}'), T('não está escrito; a forma do verbo o dá'), T('{os discípulos ouviram}')],
        [
          T('{indeterminado}'),
          T('presente na frase, mas não identificado'),
          T('{se diz que veio}'),
        ],
        [T('{inexistente}'), T('não existe; o verbo é impessoal'), T('{choveu}')],
        [
          T('{oracional}'),
          T('uma oração inteira ocupa o lugar do sujeito'),
          T('{É necessário que venhas}.'),
        ],
      ],
    },
    {
      caption: T('As três espécies de predicado'),
      head: [T('Espécie'), T('Núcleo'), T('Tem predicativo?'), T('Exemplo')],
      rows: [
        [T('{verbal}'), T('o verbo'), T('não'), T('{os discípulos viram}')],
        [T('{nominal}'), T('o nome'), T('sim'), T('{A festa foi alegre}')],
        [T('{verbo-nominal}'), T('verbo e nome'), T('sim'), T('{Ohipping foi alegre}')],
      ],
    },
    {
      caption: T('Verbos de ligação'),
      head: [T('Verbo'), T('O que liga'), T('Frase')],
      rows: [
        [T('{ser}'), T('identidade, qualidade, estado'), T('{Deus é amor}')],
        [T('{estar}'), T('estado passageiro'), T('{a portas estão fechadas}')],
        [T('{ficar}'), T('resultado atingido'), T('{o barco ficou parado}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu em silêncio}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {E, logo, disse o SENHOR a Moisés}, quem é o sujeito?'),
    options: [
      T('{o SENHOR}, porque responde a quem disse'),
      T('{a Moisés}, porque vem depois do verbo'),
      T('{logo}, porque é um advérbio'),
      T('{disse}, porque é o verbo principal'),
    ],
    answer: 0,
    hint: T('A posição depois do verbo não impede que seja sujeito.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {Deus é bom}, o predicativo {bom} é:'),
      options: [
        T('predicativo do sujeito, ligado pelo verbo {é}'),
        T('objeto direto de {é}'),
        T('adjunto adnominal de {Deus}'),
        T('agente da passiva'),
      ],
      answer: 0,
      hint: T('Sem verbo de ligação, {bom} seria adjetivo atributivo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a oração à espécie de sujeito que ela tem.'),
      pairs: [
        { a: T('{Deus e a sua palavra}'), b: T('sujeito composto') },
        { a: T('{os discípulos ouviram}'), b: T('sujeito oculto') },
        { a: T('{se diz que veio}'), b: T('sujeito indeterminado') },
        { a: T('{É necessário que venhas}'), b: T('sujeito oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O {verbo} é o núcleo do {predicado}: o ______.'),
      answer: 'verbo',
      hint: T('Em {criou os céus}, o núcleo é {criou}.'),
    },
  ],
};
