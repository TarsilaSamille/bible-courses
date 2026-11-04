import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('A oração e seus termos'),
  title: T('Análise do sujeito e do predicado'),
  subtitle: T('Procedimento e casos complexos'),
  body: C(`**Visão geral.** Localiza-se primeiro o verbo e pergunta-se **quem** faz ou **do que** se fala: em {E disse Jesus}, o verbo {disse} aponta para o sujeito {Jesus}.

**Regra 1.** O sujeito pode vir antes ou depois, e a posição não define a função: em {E, logo, disse o SENHOR a Moisés}, o {o SENHOR} é sujeito mesmo posposto.

**Regra 2.** No verbo de ligação, o predicativo atribui qualidade ao sujeito: em {Deus é bom}, {bom} é o predicativo e {é} o verbo de ligação.

**Regra 3.** O sujeito {oracional} é uma oração inteira: em {É necessário que venhas}, a subordinada {que venhas} ocupa o lugar do sujeito e o verbo fica na 3.ª do singular.

**Regra 4.** O sujeito {indeterminado} se reconhece pela ausência de um substantivo que o verbo aceite: em {Choveu}, não há quem, e o verbo fica na 3.ª do singular.

**Aplicação.** Em {E, logo, disse o SENHOR a Moisés}, o sujeito é {o SENHOR}, posposto, e o verbo {disse} está na 3.ª pessoa do singular. O {a Moisés} é objeto indireto, e o {E} liga as duas orações do período. Note que o sujeito vem **depois** do verbo: é a ordem grega, e quem analisa com a gramática do português vai marcar {o SENHOR} errado por estar fora de lugar, quando a posição grega é que é regular.

**Verificação.** Quatro perguntas, sempre nesta ordem: qual é o **verbo** e que pessoa e número ele exige? Qual é o primeiro substantivo que **aceita** esse verbo, e não o primeiro que aparece? O que resta depois do sujeito e do verbo é **predicado**? E o sujeito é simples, composto, indeterminado, oculto ou inexistente? Quatro perguntas, e o núcleo está garantido.`),
  vocab: [
    V('localização do verbo', 'localização do verbo', 'primeiro passo da análise'),
    V('sujeito', 'sujeito', 'termo que responde a quem'),
    V('sujeito deslocado', 'sujeito deslocado', 'sujeito que veio depois do verbo'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'presente mas não identificado'),
    V('predicado', 'predicado', 'o que se declara do sujeito'),
    V('verbo de ligação', 'verbo de ligação', 'liga sujeito e predicativo'),
    V('predicativo', 'predicativo', 'atributo do sujeito pelo verbo de ligação'),
    V('ordem inversa', 'ordem inversa', 'sujeito depois do verbo'),
    V('o SENHOR', 'o SENHOR', 'sujeito posposto em {disse o SENHOR}'),
    V('É necessário', 'É necessário', 'verbo com sujeito oracional'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Localiza-se primeiro o verbo e pergunta-se **quem** faz ou **do que** se fala: em {E disse Jesus}, o verbo {disse} aponta para o sujeito {Jesus}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O sujeito pode vir antes ou depois, e a posição não define a função: em {E, logo, disse o SENHOR a Moisés}, o {o SENHOR} é sujeito mesmo posposto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'No verbo de ligação, o predicativo atribui qualidade ao sujeito: em {Deus é bom}, {bom} é o predicativo e {é} o verbo de ligação.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O sujeito {oracional} é uma oração inteira: em {É necessário que venhas}, a subordinada {que venhas} ocupa o lugar do sujeito e o verbo fica na 3.ª do singular.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O sujeito {indeterminado} se reconhece pela ausência de um substantivo que o verbo aceite: em {Choveu}, não há quem, e o verbo fica na 3.ª do singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('A posição grega do sujeito'),
      text: T(
        'Em {εἶπεν ὁ κύριος}, o sujeito {ὁ κύριος} vem depois do verbo {εἶπεν}, e essa é a ordem mais comum do grego antigo. O português antigo fazia o mesmo, e o português atual antepõe o sujeito por hábito de leitura. A análise não muda: o que muda é a expectativa do leitor, e é ela que produz o erro de leitura.',
      ),
    },
    {
      label: T('O sujeito que é uma oração'),
      text: T(
        'Em {É necessário que venhas}, o sujeito é {que venhas}, e o verbo {é} fica na 3.ª pessoa do singular mesmo havendo duas orações. Isso acontece porque o sujeito é uma unidade só. O mesmo vale para {É tempo de partir}, em que a oração aparece depois de {tempo}: a função é a mesma, e a forma é que mudou.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Sujeito {o SENHOR} posposto; {a Moisés} é objeto indireto; {logo} é adjunto adverbial.',
      ),
    },
    {
      text: 'Disse o SENHOR a Moisés.',
      gloss: T('A mesma frase sem {E} e sem {logo}: só o essencial da oração.'),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Sujeito {Deus} simples; predicado verbal {criou os céus e a terra}.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T('Sujeito composto e verbo no plural: os dois núcleos contam.'),
    },
    {
      text: 'Deus é bom.',
      gloss: T('Verbo de ligação {é} e predicativo {bom}: o predicado é nominal.'),
    },
    {
      text: 'Alegrarei-te com alegria.',
      gloss: T(
        'Verbo {alegrarei} em futuro, com objeto indireto {te} e objeto direto {com alegria}.',
      ),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('Sujeito oracional {que venhas}; o verbo {é} fica na 3.ª do singular.'),
    },
    {
      text: 'Choveu durante a noite.',
      gloss: T('Sujeito {Choveu} inexistente: o verbo {choveu} é impessoal e não tem quem.'),
    },
    {
      text: 'Falar é Deus obedecer.',
      gloss: T('Dois infinitivos como sujeito composto: {falar} e {obedecer}.'),
    },
  ],
  tables: [
    {
      caption: T('Os quatro passos da análise do núcleo'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('qual é o verbo?'), T('a forma verbal e sua pessoa'), T('{disse}')],
        [T('2'), T('quem faz ou o que é?'), T('o substantivo que o verbo aceita'), T('{o SENHOR}')],
        [T('3'), T('o que sobra?'), T('o predicado'), T('{a Moisés} e {logo}')],
        [
          T('4'),
          T('que espécie de sujeito?'),
          T('simples, composto, oculto ou indeterminado'),
          T('{simples}'),
        ],
      ],
    },
    {
      caption: T('O sujeito e sua posição'),
      head: [T('Posição'), T('Exemplo'), T('Efeito na análise'), T('Chamada')],
      rows: [
        [T('antes do verbo'), T('{Deus criou}'), T('nenhuma'), T('sujeito antecipado')],
        [T('depois do verbo'), T('{criou Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('entre o verbo e o objeto'),
          T('{Deu o mundo a seu Filho}'),
          T('nenhuma'),
          T('sujeito intercalado'),
        ],
        [
          T('dentro do período'),
          T('{Jesus, que criou, ama}'),
          T('a oração é adjetiva'),
          T('sujeito posposto e relativo'),
        ],
        [T('após o verbo de ligação'), T('{é bom Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('como oração inteira'),
          T('{É necessário vir}'),
          T('o verbo não pluraliza'),
          T('sujeito oracional'),
        ],
      ],
    },
    {
      caption: T('Verbos de ligação e o que eles tram'),
      head: [T('Verbo'), T('Valor que acrescenta'), T('Frase'), T('Predicativo')],
      rows: [
        [T('{ser}'), T('identidade ou qualidade permanente'), T('{Deus é amor}'), T('{amor}')],
        [T('{estar}'), T('estado passageiro'), T('{Deus está aqui}'), T('{aqui}')],
        [T('{ficar}'), T('resultado atingido'), T('{ficou sozinho}'), T('{sozinho}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu fiel}'), T('{fiel}')],
        [T('{parecer}'), T('aparência, não certeza'), T('{parece bom}'), T('{bom}')],
        [T('{tornar-se}'), T('mudança de estado'), T('{tornou-se claro}'), T('{claro}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {É necessário que venhas}, o sujeito é:'),
    options: [
      T('a subordinada {que venhas}, que ocupa o lugar do sujeito'),
      T('{necessário}, que é um adjetivo'),
      T('{venhas}, o verbo da subordinada'),
      T('nenhum, porque {É} é impessoal'),
    ],
    answer: 0,
    hint: T('Substitua por {isso}: {É necessário isso} continua correto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {E, logo, disse o SENHOR a Moisés}, {a Moisés} é:'),
      options: [
        T('objeto indireto, introduzido pela preposição {a}'),
        T('sujeito, porque vem depois do verbo'),
        T('adjunto adverbial de lugar'),
        T('complemento nominal de {SENHOR}'),
      ],
      answer: 0,
      hint: T('O verbo {disse} exige a preposição {a} para o objeto indireto.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a oração ao tipo de sujeito que ela tem.'),
      pairs: [
        { a: T('{criou Deus}'), b: T('sujeito posposto, mas simples') },
        { a: T('{Deus e a sua palavra amaram}'), b: T('sujeito composto') },
        { a: T('{Choveu}'), b: T('sujeito inexistente') },
        { a: T('{É necessário vir}'), b: T('sujeito oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'A posição do sujeito não define a sua ______. The position of the subject does not define its ______.',
      ),
      answer: 'função',
      hint: T('Em {disse o SENHOR}, o sujeito vem depois e continua sujeito.'),
    },
  ],
};
