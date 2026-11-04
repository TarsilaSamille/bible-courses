import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('El sustantivo'),
  title: T('El sustantivo y la derivación'),
  subtitle: T('casa, caseiro, livraria, y el re- de reconciliou'),
  body: C(`## Sufijo sobre sustantivo

El sufijo se junta a un nombre y produce otro nombre, casi siempre pasando de {-ário} a {-eiro}, o de {-o} a {-ura}. {Livro} da {livraria}, {papel} da {papelaria}, {fruta} da {frutaria}, {açúcar} da {açucararia}. {Pão} da {padeiro}, y {-eiro} forma a quien trabaja con la cosa.

La regla que vale es esta: {-ário} forma el lugar donde se compra o se guarda la cosa, {-eiro} forma a quien trabaja con ella, y {-ura} forma el resultado de una acción. {Casa} da {casarão} por el camino de {-ão}, y {casa} da {caseiro} por el camino de {-eiro}.

## Sufijo sobre verbo

El verbo también pasa a sustantivo, y hay dos caminos. El primero es el más productivo: el sustantivo es la primera o la segunda persona del presente, con {-o} en su lugar. {Cantar} da {canto}, {estudar} da {estudo}, {governar} da {governo}, {pensar} da {pensamento}. El segundo camino usa {-mento} o {-ura} y ya no tiene relación con la persona: {mover} da {movimento}, {escrever} da {escritura}, {lavar} da {lavanderia}.

Cuando los dos caminos existen para el mismo verbo, decide el sentido: {o estudo} es la actividad, y {os estudos} son los libros y las investigaciones; {o banho} es el acto y {os banhos} son las ocasiones de bañarse.

## Prefijo: dirección y negación

El prefijo entra delante y cambia la dirección del verbo o del nombre. El grupo de {des-} deshace: {desfazer}, {descartar}, {descobrir}. El grupo de {in-} y {-im-} niega o vuelve hacia dentro: {inútil}, {imenso}, {imortal}. El grupo de {re-} trae de vuelta: {rever}, {refazer}, {reconciliar}. Y están los que marcan posición: {sublinhado}, {superior}, {antecedente}, {entregar}, {transportar}.

Esa última familia es la que más aparece en el texto, porque {ante-}, {entre-}, {trans-} y {circum-} dicen posición en relación a algo, y quien conoce la familia lee la palabra sin parar.

## Criterio de lectura

Con cualquier palabra que no conoces, parte en dos o tres trozos y pregunta qué hace cada uno. {Reconciliar} es {re-} más {-ciliar}: vuelve al estado anterior. {Sobrelevar} es {sobre-} más {-levar}: pone por encima. {Contra-} es {contra-} más {-r}, y dice lo contrario.

En 2 Cor 5.19, el verbo del texto es {reconciliou}. El prefijo {re-} dice que algo vuelve al estado en que estaba, y eso es lo que hace la reconciliación: las dos partes vuelven a aceptarse. Quien conoce el prefijo ya leyó el versículo antes de llegar al verbo, y así una palabra desconocida deja de ser un obstáculo.`),
  vocab: [
    V('o sufixo', 'sufixo', 'el sufijo'),
    V('o prefixo', 'prefixo', 'el prefijo'),
    V('a derivação', 'derivação', 'la derivación'),
    V('o livro', 'livro', 'el libro'),
    V('a livraria', 'livraria', 'la librería'),
    V('o papel', 'papel', 'el papel'),
    V('a papelaria', 'papelaria', 'la papelería'),
    V('o padeiro', 'padeiro', 'el panadero'),
    V('o canto', 'canto', 'el canto'),
    V('o estudo', 'estudo', 'el estudio'),
    V('o movimento', 'movimento', 'el movimiento'),
    V('inútil', 'inútil', 'inútil'),
    V('reconciliou', 'reconciliar', 'reconcilió'),
    V('desfazer', 'desfazer', 'deshacer'),
    V('antecedente', 'antecedente', 'antecedente'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El sufijo {-ário} forma el lugar donde se compra o se guarda la cosa; {-eiro}, quien trabaja con ella; {-ura}, el resultado de la acción.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Muchos sustantivos verbales son la primera o la segunda persona del presente: {cantar} da {canto}, {governar} da {governo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{-mento} y {-ura} forman sustantivos de acción sin relación con la persona del verbo: {mover} da {movimento}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El prefijo cambia la dirección o niega: {des-} deshace, {in-} niega, {re-} trae de vuelta, {sub-} pone debajo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Una palabra desconocida se lee por partes: la raíz dice qué es, el prefijo y el sufijo dicen qué se le hace.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'Los prefijos del Nuevo Testamento son pocos y productivos: {reconciliar}, {anunciar}, {entregar}, {advogar}. Los mismos prefijos forman media docena de palabras en cualquier portugués.',
      ),
    },
    {
      label: T('Lo que la sufijación no hace'),
      text: T(
        'No toda palabra transparente es intuitiva: {livraria} no es el lugar donde vive el libro, y {lavanderia} no es el lugar donde se lava, sino donde se lava la ropa. La forma ayuda, y el sentido sigue viniendo del contexto.',
      ),
    },
  ],
  examples: [
    {
      text: 'Comprou o livro na livraria.',
      gloss: T('{-ário} forma el lugar donde se compra el libro.'),
    },
    { text: 'O padeiro assou o pão.', gloss: T('{-eiro} forma quien trabaja con el pan.') },
    {
      text: 'O canto da assembleia.',
      gloss: T('El verbo {cantar} que pasó a sustantivo en {-o}.'),
    },
    {
      text: 'Estudou a lei a vida inteira.',
      gloss: T('{o estudo} como actividad, no como libro.'),
    },
    {
      text: 'A água está em movimento.',
      gloss: T('{-mento} sin relación con la persona del verbo.'),
    },
    { text: 'Nada era inútil.', gloss: T('El prefijo {in-} niega la cualidad.') },
    { text: 'Refizeram a viagem.', gloss: T('El prefijo {re-} trae de vuelta lo ya hecho.') },
    {
      text: 'Entregaram o livro a ele.',
      gloss: T('El prefijo {entre-} marca posición en relación a alguien.'),
    },
  ],
  tables: [
    {
      caption: T('Sufijo sobre sustantivo'),
      head: ['Sufixo', 'Resultado', 'Exemplos'],
      rows: [
        ['-ário', 'lugar de compra ou guarda', 'livraria, papelaria, açucararia'],
        ['-eiro', 'quem trabalha com', 'padeiro, atravessador, lancheiro'],
        ['-ura', 'resultado da ação', 'escultura, pintura, costura'],
      ],
    },
    {
      caption: T('Sufijo sobre verbo'),
      head: ['Sufixo', 'Exemplo', 'O que produz'],
      rows: [
        ['-o', 'canto, estudo, governo', 'primeira ou segunda pessoa do presente'],
        ['-mento', 'movimento, nascimento', 'ação considerada em si'],
        ['-ura', 'escritura, lavanderia', 'resultado ou lugar da ação'],
      ],
    },
    {
      caption: T('Prefijos'),
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
    prompt: T('¿Qué sufijo forma el lugar donde se compran libros?'),
    options: [T('-ário'), T('-eiro'), T('-ura'), T('-mento')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cantar} da el sustantivo ______.'),
      answer: 'canto',
      hint: T('Primera persona del presente.'),
    },
    {
      kind: 'choose',
      prompt: T('El prefijo {re-} en {reconciliou} significa:'),
      options: [T('trae de vuelta'), T('deshace'), T('niega'), T('marca posición abajo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el prefijo con su valor.'),
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
