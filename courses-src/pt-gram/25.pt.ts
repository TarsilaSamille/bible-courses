import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('O sentido e a subordinação'),
  title: T('Variações linguísticas'),
  subtitle: T('Variação regional, social, histórica e diastrática'),
  body: C(`**Visão geral.** A variação {diatópica} é geográfica: em Portugal, {autocarro} onde no Brasil se diz {ônibus}, e nenhuma das duas formas está errada.

**Regra 1.** A variação {diastrática} é social, e o que muda é o {registro}: em {Vinde} de um rei e em {vem} de um amigo, a forma é a mesma e o tom muda.

**Regra 2.** A variação {diafásica} é a do falante numa situação: em {Está bom} para o médico e em {Como vai?} para o amigo, o mesmo sentido recebe formas diferentes.

**Regra 3.** Forma {arcaica} não é erro: em {Ele vos falando, assim}, o {falando} é {gerúndio} e não {particípio}, e a forma é a do português antigo.

**Regra 4.** O teste para distinguir {arcaísmo} de {erro} é o uso: se a forma aparece em três traduções antigas e em nenhum texto contemporâneo, é {arcaísmo}.

**Aplicação.** Em {Se tu fores perfeito, ninguém te condenaria}, o {condicional} {fores} é uma forma que o português do século XVI usava como {subjuntivo}, e é por isso que a tradução de João 3, 21 aparece como {se, depois que, fordes}. O texto bíblico preserva um tempo verbal que o português atual não tem, e é o que a tradução antigua preserva sem perceber.

**Verificação.** Para um texto antigo, pergunte: a forma que parece estranha é {arcaísmo} ou {erro}? A palavra é {regional} ou {desusada}? E o meu objetivo é {traduzir a forma} ou {traduzir o sentido}? Três perguntas, e a decisão deixa de ser arbitrária: no texto bíblico, o mais certo é traduzir o sentido e deixar a marca da forma antiga apenas quando ela carrega ênfase.`),
  vocab: [
    V('diatópica', 'diatópica', 'variação geográfica'),
    V('diastrática', 'diastrática', 'variação social'),
    V('diafásica', 'diafásica', 'variação por situação'),
    V('estilística', 'estilística', 'variação por estilo'),
    V('registro', 'registro', 'nível de formalidade'),
    V('coloquial', 'coloquial', 'registro da conversa'),
    V('formal', 'formal', 'registro escrito e solene'),
    V('arcaísmo', 'arcaísmo', 'forma de um tempo anterior'),
    V('fores', 'fores', 'condicional arcaico de João 3, 21'),
    V('autocarro', 'autocarro', 'forma portuguesa de {ônibus}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A variação {diatópica} é geográfica: em Portugal, {autocarro} onde no Brasil se diz {ônibus}, e nenhuma das duas formas está errada.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A variação {diastrática} é social, e o que muda é o {registro}: em {Vinde} de um rei e em {vem} de um amigo, a forma é a mesma e o tom muda.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A variação {diafásica} é a do falante numa situação: em {Está bom} para o médico e em {Como vai?} para o amigo, o mesmo sentido recebe formas diferentes.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Forma {arcaica} não é erro: em {Ele vos falando, assim}, o {falando} é {gerúndio} e não {particípio}, e a forma é a do português antigo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste para distinguir {arcaísmo} de {erro} é o uso: se a forma aparece em três traduções antigas e em nenhum texto contemporâneo, é {arcaísmo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A forma antiga que carrega ênfase'),
      text: T(
        'O {fores} de João 3, 21 não é uma forma que o português deixou de usar por descuido: ela marca o tempo do verbo principal em uma leitura antiga, e ogrego {ἐάν τις ἰδίῳ αὐτοῦ τηρῇ} usa o {ἐάν}, que é condicional. Onde a tradução antiga escreve {fores}, ela está marcando uma coisa que o {se} do português atual não marca, e é por isso que a forma antiga não é simplesmente supérflua.',
      ),
    },
    {
      label: T('O que não é variação e é erro'),
      text: T(
        'Nem toda forma diferente é variação: se o texto moderno apresenta {vós} num contexto em que a norma do século não usava, isso é {erro} de publicação, não {diatopia}. O critério é o uso documentado do período, e é por isso que a leitura de um texto antigo exige saber em que século ele foi escrito.',
      ),
    },
  ],
  examples: [
    {
      text: 'Se tu fores perfeito',
      gloss: T('{fores} é o condicional arcaico de João 3, 21, e não uma forma comum.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T(
        '{Vinde} é o imperativo de {vir}, e é também o tratamento antigo que o português atual perdeu.',
      ),
    },
    {
      text: 'o pão da vida',
      gloss: T(
        '{Pão} vem do latim {panis}, e o plural {pães} é um arcaísmo do número, não um erro.',
      ),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'O {o} antes de {Filho} é a forma do grego {τοῦ υἱοῦ}, que o português antigo traduzia literalmente.',
      ),
    },
    {
      text: '{autocarro}, {ônibus}',
      gloss: T(
        'Forma {diatópica}: {autocarro} em Portugal e {ônibus} no Brasil, sem que nenhuma esteja errada.',
      ),
    },
    {
      text: 'Oxalá',
      gloss: T(
        'Forma {arcaica} ainda viva na fala: significa {oxalá que}, e o uso corrente é mais raro.',
      ),
    },
    {
      text: 'Está bom, disse o médico',
      gloss: T('Registro {formal} com o médico e registro {coloquial} com o amigo, no mesmo dia.'),
    },
    {
      text: 'Vós estais salvos',
      gloss: T('Forma biblica de tratamento, e a norma atual só a usa na Europa do Sul.'),
    },
    {
      text: 'Κύριε, σῶσον',
      gloss: T(
        'A forma grega {κύριε} é vocativo, e o português antigo escrevia {Senhor} com maiúscula.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Os quatro tipos de variação'),
      head: [T('Tipo'), T('O que varia'), T('Exemplo'), T('Onde se nota')],
      rows: [
        [T('{diatópica}'), T('o lugar'), T('{autocarro}, {ônibus}'), T('Portugal contra o Brasil')],
        [T('{diastrática}'), T('o grupo social'), T('{tu}, {vós}'), T('família contra escola')],
        [T('{diafásica}'), T('a situação'), T('{Está bem}, {E aí}'), T('médico contra amigo')],
        [T('{estilística}'), T('o estilo'), T('{em uso}'), T('literário contra técnico')],
      ],
    },
    {
      caption: T('Arcaísmo e erro: o que os separa'),
      head: [T('Caso'), T('O que é'), T('Exemplo'), T('Veredito')],
      rows: [
        [T('{forma antiga viva}'), T('arcaísmo'), T('{vós}, {fores}'), T('não corrigir')],
        [
          T('{forma de outro dialeto}'),
          T('diatopia'),
          T('{ônibus} em Portugal'),
          T('não corrigir'),
        ],
        [
          T('{forma de nenhum período}'),
          T('erro de publicação'),
          T('{nós} no texto grego'),
          T('corrigir'),
        ],
        [
          T('{forma do tradutor}'),
          T('opção de tradução'),
          T('{carne} por {corpo}'),
          T('decidir pela força'),
        ],
        [
          T('{desvio de sentido}'),
          T('erro de tradução'),
          T('{verbo} trocado por {substantivo}'),
          T('corrigir'),
        ],
      ],
    },
    {
      caption: T('Registros e o que cada um espera'),
      head: [T('Registro'), T('Pessoa'), T('Tratamento'), T('Exemplo')],
      rows: [
        [T('{coloquial}'), T('intima'), T('{tu}'), T('Ei, vem cá}')],
        [T('{familiar}'), T('família'), T('{você}'), T('Vemhere,}')],
        [T('{formal}'), T('instituição'), T('{você}'), T('Solicito a presença')],
        [T('{literário}'), T('texto antigo'), T('{tu} ou {vós}'), T('Amigo, chamado Senhor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Se tu fores perfeito}, a forma {fores} é:'),
    options: [
      T('um arcaísmo, e não um erro: é o condicional do português antigo'),
      T('um erro de digitação, porque {fores} não existe'),
      T('uma dialeta hoje falada no Norte'),
      T('um erro de regência, porque o verbo {ser} foi trocado'),
    ],
    answer: 0,
    hint: T('A forma aparece em traduções antigas e em nenhuma contemporânea: é arcaísmo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('A variação entre {autocarro} e {ônibus} é:'),
      options: [
        T('diatópica, porque muda com o lugar'),
        T('diastrática, porque muda com a classe social'),
        T('diafásica, porque muda com a situação'),
        T('estilística, porque muda com o estilo'),
      ],
      answer: 0,
      hint: T('O que muda aqui é o país de quem fala.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o caso ao veredito correto.'),
      pairs: [
        { a: T('{vós} numa tradução antiga'), b: T('arcaísmo, não corrigir') },
        { a: T('{fores} em João 3, 21'), b: T('arcaísmo que carrega ênfase') },
        { a: T('{ônibus} em Portugal'), b: T('diatopia, não corrigir') },
        { a: T('forma que não é de nenhum período'), b: T('erro de publicação') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A variação que muda com o {lugar} do falante é a ______.'),
      answer: 'diatópica',
      hint: T('{autocarro} contra {ônibus}.'),
    },
  ],
};
