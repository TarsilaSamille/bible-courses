import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('O substantivo'),
  title: T('O substantivo e a derivação'),
  subtitle: T('casa, caseiro, livraria, e o re- de reconciliou'),
  body: C(`## Sufixo sobre substantivo

O sufixo junta-se a um nome e produz outro nome, quase sempre mudando de {-ário} para {-eiro}, ou de {-o} para {-ura}. {Livro} dá {livraria}, {papel} dá {papelaria}, {fruta} dá {frutaria}, {açúcar} dá {açucararia}. {Pão} dá {padeiro} e {-eiro} forma quem trabalha com a coisa.

A regra que serve é esta: {-ário} forma o lugar onde a coisa se compra ou se guarda, {-eiro} forma quem trabalha com a coisa, e {-ura} forma o resultado de uma ação. {Casa} dá {casarão} pelo mesmo caminho de {-ão}, e {casa} dá {caseiro} pelo caminho de {-eiro}.

## Sufixo sobre verbo

O verbo também vira substantivo, e há dois caminhos. O primeiro é o mais productive: o substantivo é a primeira ou a segunda pessoa do presente, com o {-o} no lugar. {Cantar} dá {canto}, {estudar} dá {estudo}, {governar} dá {governo}, {pensar} dá {pensamento}. O segundo caminho usa {-mento} ou {-ura} e já não tem relação com a pessoa: {mover} dá {movimento}, {escrever} dá {escritura}, {lavar} dá {lavanderia}.

Quando os dois caminhos existem para o mesmo verbo, o que decide é o sentido: {o estudo} é a atividade, e {os estudos} são os livros e as pesquisas; {o banho} é o ato e {os banhos} são as ocasiões de se tomar banho.

## Prefixo: direção e negação

O prefixo entra na frente e muda a direção do verbo ou do nome. O grupo do {des-} desfaz: {desfazer}, {descartar}, {descobrir}. O grupo do {in-} e do {-im-} nega ou interioriza: {inútil}, {imenso}, {imortal}. O grupo do {re-} traz de volta: {rever}, {refazer}, {reconciliar}. E há os que marcam posição: {sublinhado}, {superior}, {antecedente}, {entregar}, {transportar}.

É essa última família que mais aparece em texto: {ante-}, {entre-}, {trans-}, {circum-} dizem posição em relação a algo, e quem conhece a família lê o nome sem parar.

## O que ler

Em qualquer palavra que não conhece, desmonte em duas ou três partes e pergunte o que cada uma faz. {Reconciliar} é {re-} mais {-ciliar}: volta ao estado anterior. {Sobrelevar} é {sobre-} mais {-levar}: põe por cima. {Contra-} é {contra-} mais {-r}, e diz o oposto.

Em 2 Cor 5.19, o verbo do texto é {reconciliou}. O prefixo {re-} diz que algo volta ao estado anterior, e é isso que a reconciliação faz: as duas partes voltam a se aceitar. Quem conhece o prefixo leu o versículo antes de chegar ao verbo, e é assim que uma palavra desconhecida deixa de ser um obstáculo.`),
  vocab: [
    V('o sufixo', 'sufixo', 'o sufixo'),
    V('o prefixo', 'prefixo', 'o prefixo'),
    V('a derivação', 'derivação', 'a derivação'),
    V('o livro', 'livro', 'o livro'),
    V('a livraria', 'livraria', 'a livraria'),
    V('o papel', 'papel', 'o papel'),
    V('a papelaria', 'papelaria', 'a papelaria'),
    V('o padeiro', 'padeiro', 'o padeiro'),
    V('o canto', 'canto', 'o canto'),
    V('o estudo', 'estudo', 'o estudo'),
    V('o movimento', 'movimento', 'o movimento'),
    V('inútil', 'inútil', 'inútil'),
    V('reconciliou', 'reconciliar', 'reconciliou'),
    V('desfazer', 'desfazer', 'desfazer'),
    V('antecedente', 'antecedente', 'antecedente'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Sufixo {-ário} forma o lugar onde a coisa se compra ou se guarda; {-eiro}, quem trabalha com a coisa; {-ura}, o resultado da ação.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Muitos substantivos verbais são a primeira ou a segunda pessoa do presente: {cantar} dá {canto}, {governar} dá {governo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{-mento} e {-ura} formam substantivos de ação sem relação com a pessoa do verbo: {mover} dá {movimento}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O prefixo muda a direção ou nega: {des-} desfaz, {in-} nega, {re-} traz de volta, {sub-} põe abaixo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Uma palavra desconhecida se lê em partes: o radical diz o que é, o prefixo e o sufixo dizem o que se faz com ela.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'Os prefixos do Novo Testamento são poucos e produtivos: {reconciliar}, {anunciar}, {entregar}, {advogar}. Os mesmos prefixos formam meia dúzia de palavras em qualquer português.',
      ),
    },
    {
      label: T('O que a sufixação não faz'),
      text: T(
        'Nem toda palavra transparente é intuitiva: {livraria} não é o lugar onde se vive a_LIBRAS, e {lavanderia} não é lugar onde se lava, mas onde se lava roupa. A forma ajuda, e o sentido continua vindo do contexto.',
      ),
    },
  ],
  examples: [
    {
      text: 'Comprou o livro na livraria.',
      gloss: T('{-ário} forma o lugar onde se compra o livro.'),
    },
    { text: 'O padeiro assou o pão.', gloss: T('{-eiro} forma quem trabalha com o pão.') },
    { text: 'O canto da assembleia.', gloss: T('Verbo {cantar} que virou substantivo em {-o}.') },
    {
      text: 'Estudou a lei a vida inteira.',
      gloss: T('{o estudo} como atividade, não como livro.'),
    },
    { text: 'A água está em movimento.', gloss: T('{-mento} sem relação com a pessoa do verbo.') },
    { text: 'Nada era inútil.', gloss: T('O prefixo {in-} nega a qualidade.') },
    { text: 'Refizeram a viagem.', gloss: T('O prefixo {re-} traz de volta o que já foi feito.') },
    {
      text: 'Entregaram o livro a ele.',
      gloss: T('O prefixo {entre-} marca posição em relação a alguém.'),
    },
  ],
  tables: [
    {
      caption: T('Sufixo sobre substantivo'),
      head: ['Sufixo', 'Resultado', 'Exemplos'],
      rows: [
        ['-ário', 'lugar de compra ou guarda', 'livraria, papelaria, açucararia'],
        ['-eiro', 'quem trabalha com', 'padeiro, atravessador, lancheiro'],
        ['-ura', 'resultado da ação', 'escultura, pintura, costura'],
      ],
    },
    {
      caption: T('Sufixo sobre verbo'),
      head: ['Sufixo', 'Exemplo', 'O que produz'],
      rows: [
        ['-o', 'canto, estudo, governo', 'primeira ou segunda pessoa do presente'],
        ['-mento', 'movimento, nascimento', 'ação considerada em si'],
        ['-ura', 'escritura, lavanderia', 'resultado ou lugar da ação'],
      ],
    },
    {
      caption: T('Prefixos'),
      head: ['Prefixo', 'Valor', 'Exemplos'],
      rows: [
        ['des-', 'desfaz', 'descartar, desfazer'],
        ['in-/im-', 'nega', 'inútil, imenso'],
        ['re-', 'traz de volta', 'rever, reconciliar'],
        ['sub-, super-', 'posição', 'sublinhado, superior'],
        ['ante-, entre-, trans-', 'posição em relação', 'antecedente, entregar, transportar'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual sufixo forma o lugar onde se compra livro?'),
    options: [T('-ário'), T('-eiro'), T('-ura'), T('-mento')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cantar} dá o substantivo ______.'),
      answer: 'canto',
      hint: T('Primeira pessoa do presente.'),
    },
    {
      kind: 'choose',
      prompt: T('O prefixo {re-} em {reconciliou} significa:'),
      options: [T('traz de volta'), T('desfaz'), T('nega'), T('marca posição abaixo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o prefixo ao valor.'),
      pairs: [
        { a: T('des-'), b: T('desfaz') },
        { a: T('in-'), b: T('nega') },
        { a: T('re-'), b: T('traz de volta') },
        { a: T('entre-'), b: T('posição em relação') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
