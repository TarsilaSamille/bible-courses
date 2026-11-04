import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('A flexão da palavra e a concordância'),
  title: T('Flexão nominal'),
  subtitle: T('Gênero, número e grau'),
  body: C(`**Visão geral.** O {gênero} dos nomes é dado pela terminação, e é por isso que {amigo} é masculino e {amiga} é feminino: o {o} e o {a} são a marca.

**Regra 1.** O {plural regular} acrescenta {-s} ou {-es}: {livro} dá {livros}, {lápis} dá {lápis}, {pão} dá {pães}, e {Deus} dá {deuses}.

**Regra 2.** O {número} tem plurais irregulares: {homem} dá {homens}, {pão} dá {pães}, e {mão} dá {mãos}, onde o plural não acrescenta nada visível.

**Regra 3.** O {comparativo} sintético usa {-or} ou {-ior}: {alto} dá {mais alto} e {altíssimo}; o {superlativo} absoluto não leva expressão de comparação.

**Regra 4.** {Aumentativo} e {diminutivo} mudam de escala, não de sentido: {livro} dá {livrão} e {livrinho}, e o sentido continua sendo o mesmo.

**Aplicação.** Em {Deus amou o mundo}, o artigo {o} é masculino singular e {mundo} é substantivo masculino singular, e o plural {mundos} confirma a flexão. Em {as maiores profetas}, {as} é artigo feminino plural, {maiores} é comparativo de {grande}, e {profetas} é substantivo feminino plural. Note que o adjetivo {maiores} concorda com o substantivo {profetas} e **não** com o artigo {as}: os dois são femininos, mas a concordância é com o nome, sempre.

**Verificação.** Quatro perguntas resolvem a flexão nominal inteira: qual é o **gênero**, qual é o **número**, o comparativo é **sintético** ({-or, -ior}) ou **analítico** ({mais}), e o superlativo precisa de expressão de comparação? E uma quinta, a mais importante de todas: o adjetivo concorda com o **substantivo**, e é por isso que {os maiores} e {as maiores} têm o mesmo {maiores}.`),
  vocab: [
    V('gênero', 'gênero', 'marcação de sexo ou categoria'),
    V('número', 'número', 'marcação de quantidade'),
    V('grau', 'grau', 'comparação e escala'),
    V('comparativo', 'comparativo', 'compara dois termos'),
    V('superlativo', 'superlativo', 'compara três ou mais'),
    V('diminutivo', 'diminutivo', 'reduz a escala'),
    V('aumentativo', 'aumentativo', 'aumenta a escala'),
    V('coletivo', 'coletivo', 'nome que designa um grupo'),
    V('maiores', 'maiores', 'comparativo irregular de {grande}'),
    V('altíssimo', 'altíssimo', 'superlativo sintético de {alto}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {gênero} dos nomes é dado pela terminação, e é por isso que {amigo} é masculino e {amiga} é feminino: o {o} e o {a} são a marca.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {plural regular} acrescenta {-s} ou {-es}: {livro} dá {livros}, {lápis} dá {lápis}, {pão} dá {pães}, e {Deus} dá {deuses}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {número} tem plurais irregulares: {homem} dá {homens}, {pão} dá {pães}, e {mão} dá {mãos}, onde o plural não acrescenta nada visível.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {comparativo} sintético usa {-or} ou {-ior}: {alto} dá {mais alto} e {altíssimo}; o {superlativo} absoluto não leva expressão de comparação.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{Aumentativo} e {diminutivo} mudam de escala, não de sentido: {livro} dá {livrão} e {livrinho}, e o sentido continua sendo o mesmo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O superlativo que o grego acentuava mais'),
      text: T(
        'O grego antigo tinha um superlativo próprio, com terminação {-τος}: {μέγιστος} é {muito grande}, e {πιστότατος} é {muito fiel}. O português perdeu a terminação e guardou o sentido em {muito} ou no acento: {fidelíssimo}. Onde o grego dizia a escala na terminação, o português diz na forma da palavra, e a tradução perde o contraste entre {μέγιστος} e {μέγας}.',
      ),
    },
    {
      label: T('O aumentativo que muda o tom, não o sentido'),
      text: T(
        'Em {livrão}, o {ão} aumenta o objeto e muitas vezes acrescenta desprezo; em {casa-grande}, o {grande} aumenta sem mudar nada. O que o aumentativo faz é mudar a escala do nome, e a leitura bíblica depende disso: {cavalo} e {cavalo grande} não são a mesma coisa, e um pode ser elogio e o outro insulto.',
      ),
    },
  ],
  examples: [
    {
      text: 'o mundo',
      gloss: T('Substantivo masculino singular: o artigo {o} e o nome {mundo} concordam.'),
    },
    {
      text: 'os mundos',
      gloss: T('Plural regular de {mundo}: acrescenta {-s} e mantém o gênero.'),
    },
    {
      text: 'as maiores profetas',
      gloss: T('Comparativo {maiores} em feminino plural, por concordar com {profetas}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T('Superlativo relativo: o termo {dos mandamentos} delimita a comparação.'),
    },
    {
      text: 'altíssimo',
      gloss: T('Superlativo sintético de {alto}, com {-íssimo}: não leva {o mais}.'),
    },
    {
      text: 'o mais alto',
      gloss: T('Superlativo analítico: {mais} mais o adjetivo, e aqui não há terminação.'),
    },
    {
      text: 'um livrinho',
      gloss: T('Diminutivo com {-inho}: reduz a escala e acrescenta carinho.'),
    },
    {
      text: 'oIsrael',
      gloss: T('Nome próprio masculino singular: {Israel} não flexiona no uso corrente.'),
    },
    {
      text: 'o povo',
      gloss: T('Substantivo coletivo: no singular, designa muitos, e o verbo pode ir ao plural.'),
    },
  ],
  tables: [
    {
      caption: T('Gênero pela terminação'),
      head: [T('Gênero'), T('Terminações comuns'), T('Exceção'), T('Exemplo')],
      rows: [
        [T('masculino'), T('{-o}'), T('{mão}, {leão}'), T('{o dia}')],
        [T('feminino'), T('{-a}'), T('{dia}, {pó}, {mão}'), T('{a mão}')],
        [T('masculino'), T('{-ão}'), T('{irmã}, {viúva}'), T('{o irmão}')],
        [T('feminino'), T('{-ade}, {-esa}'), T('{poeta}, {princesa}'), T('{a poetisa}')],
        [T('feminino'), T('{-triz}'), T('{atriz}, {mistriz}'), T('{a matriz}')],
        [T('comum aos dois'), T('{-e}'), T('{jovem}, {feliz}'), T('{o jovem}, {a feliz}')],
      ],
    },
    {
      caption: T('Plurais irregulares'),
      head: [T('Singular'), T('Plural'), T('O que muda'), T('Origem')],
      rows: [
        [T('{homem}'), T('{homens}'), T('acréscimo de {-ens}'), T('radical {hom-}')],
        [T('{pão}'), T('{pães}'), T('acréscimo de {-ões}'), T('radical {pã-}')],
        [T('{mão}'), T('{mãos}'), T('apenas {s}'), T('radical {mã-}')],
        [T('{lápis}'), T('{lápis}'), T('apenas {s}'), T('radical {láp-}')],
        [T('{Deus}'), T('{deuses}'), T('acréscimo de {-es}'), T('radical {deus-}')],
        [T('{rei}'), T('{reis}'), T('perda do {u}'), T('radical {re-}')],
        [T('{obra}'), T('{obras}'), T('apenas {-s}'), T('radical {obr-}')],
      ],
    },
    {
      caption: T('Comparativo e superlativo'),
      head: [T('Tipo'), T('Como se forma'), T('Exemplo'), T('Frase')],
      rows: [
        [
          T('comparativo analítico'),
          T('{mais} + adjetivo'),
          T('{mais alto}'),
          T('{Ele é mais alto.}'),
        ],
        [T('comparativo sintético'), T('{-or} ou {-ior}'), T('{maior}'), T('{Ele é maior.}')],
        [
          T('superlativo analítico'),
          T('{o mais} + adjetivo'),
          T('{o mais alto}'),
          T('{Ele é o mais alto.}'),
        ],
        [T('superlativo sintético'), T('{-íssimo}'), T('{altíssimo}'), T('{Ele é altíssimo.}')],
        [
          T('superlativo relativo'),
          T('superlativo + {de}'),
          T('{o maior dos}'),
          T('{o maior dos sete}'),
        ],
        [T('aumentativo'), T('{-ão}, {-aço}'), T('{livrão}'), T('{um livrão}')],
        [T('diminutivo'), T('{-inho}, {-zinho}'), T('{livrinho}'), T('{um livrinho}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {as maiores profetas}, o que {maiores} concorda?'),
    options: [
      T('com o substantivo {profetas}'),
      T('com o artigo {as}'),
      T('com o verbo da oração principal'),
      T('com o numeral que vem depois'),
    ],
    answer: 0,
    hint: T('A concordância nominal é com o nome, nunca com o determinante.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o plural de {homem}?'),
      options: [
        T('{homens}, com acréscimo de {-ens}'),
        T('{homes}, sem marca de número'),
        T('{homens}, com troca de {o} por {e}'),
        T('{homena}, por analogia com {pão}'),
      ],
      answer: 0,
      hint: T('O plural de {homem} acrescenta {-ens} ao radical {hom-}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao que ela indica.'),
      pairs: [
        { a: T('{o mais alto}'), b: T('superlativo analítico') },
        { a: T('{altíssimo}'), b: T('superlativo sintético') },
        { a: T('{maior}'), b: T('comparativo sintético') },
        { a: T('{livrão}'), b: T('aumentativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'O {número} dos nomes é a marcação da ______. The {number} of nouns is the marking of ______.',
      ),
      answer: 'quantidade',
      hint: T('{livro} é um, {livros} são muitos.'),
    },
  ],
};
