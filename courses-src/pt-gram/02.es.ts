import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Las palabras y sus clases'),
  title: T('Formación de palabras'),
  subtitle: T('Derivación, composición y cambio de sentido'),
  body: C(`**Visión general.** Hay cuatro procesos de formación, separados por cuántos radicales usan y qué tipo de unión: {prefijación}, {sufijación}, {composición} y {aglutinación}.

**Regla 1.** En la {prefijación} el sentido se invierte sin tocar la categoría: {des-} + {leal} = {desleal}, y {anti-} + {social} = {antisocial}.

**Regla 2.** En la {sufijación} cambia la categoría y se mantiene el sentido: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.

**Regla 3.** En la {composición} ambos radicales están enteros y el guion marca la unión: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.

**Regla 4.** La prueba que separa {prefijo} de {sufijo}: el prefijo **invierte el sentido** y el sufijo **cambia la categoría**; {deslealdade} niega, {lealdade} nombra.

**Aplicación.** En {el Verbo se hizo carne}, el sustantivo {Verbo} es {verbo} + {-o}: raíz {verb-}, sufijo {-o}, y ninguna terminación a la vista porque el nombre propio no la lleva. Es la {sufijación} la que hizo el nombre. Compárese con {passatempo}, que es {composición}: {passa} y {tempo} son dos radicales enteros, y ninguno se volvió nombre por separado. El mismo párrafo usa los dos procesos, y el número de radicales dice cuál es.

**Verificación.** Haz tres preguntas: ¿cuántos radicales aparecen? ¿El **sentido** se invirtió o solo cambió la **categoría**? Y la base, sola, ¿ya es nombre? Una raíz con sentido invertido es {prefijación}; una raíz con categoría nueva es {sufijación}; dos raíces enteras son {composición}. Con esas tres, cualquier palabra nueva se analiza sin diccionario.`),
  vocab: [
    V('derivação', 'derivação', 'derivación'),
    V('prefixação', 'prefixação', 'prefijación'),
    V('sufixação', 'sufixação', 'sufijación'),
    V('composição', 'composição', 'composición'),
    V('justaposição', 'justaposição', 'yuxtaposición'),
    V('aglutinação', 'aglutinação', 'aglutinación'),
    V('guarda-chuva', 'guarda-chuva', 'dos radicales enteros'),
    V('passatempo', 'passatempo', 'dos raíces, sin guion'),
    V('-dade', '-dade', 'sufijo que forma sustantivo'),
    V('desleal', 'desleal', '{des-} más {leal}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Hay cuatro procesos de formación, separados por cuántos radicales usan y qué tipo de unión: {prefijación}, {sufijación}, {composición} y {aglutinación}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'En la {prefijación} el sentido se invierte sin tocar la categoría: {des-} + {leal} = {desleal}, y {anti-} + {social} = {antisocial}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'En la {sufijación} cambia la categoría y se mantiene el sentido: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'En la {composición} ambos radicales están enteros y el guion marca la unión: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba que separa {prefijo} de {sufijo}: el prefijo **invierte el sentido** y el sufijo **cambia la categoría**; {deslealdade} niega, {lealdade} nombra.',
      ),
    },
  ],
  notes: [
    {
      label: T('El guion que no es unión de afijos'),
      text: T(
        '{passatempo} y {guarda-chuva} se escriben sin guion porque ninguna de las dos bases lo necesita. {anti-} sí lo exige en {antisocial}, por la colisión de vocales. El guion marca entonces {composición} en un caso y evita un encuentro fónico en el otro: dos papeles distintos, y solo el segundo tiene que ver con la unión.',
      ),
    },
    {
      label: T('La raíz que viene de fuera'),
      text: T(
        'El latín dejó raíces que el portugués ya no flexiona: {fides} en {fé}, {panis} en {pão}. En esos casos la raíz heredada aparece sola, sin sufijo y sin terminación visible, y es el léxico el que sostiene la palabra. No toda palabra portuguesa tiene afijo visible; algunas son la raíz pura.',
      ),
    },
  ],
  examples: [
    {
      text: 'deslealdade',
      gloss: T(
        'Prefijo {des-} y sufijo {-dade} en una misma palabra: dos formaciones sobre la raíz {leal}.',
      ),
    },
    {
      text: 'lealdade',
      gloss: T(
        'Solo {sufijación}: la raíz {leal} sigue positiva y el {-dade} solo nombra la cualidad.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefijo {anti-} con guion obligatorio; la vocal final del prefijo chocaría con la inicial de la raíz.',
      ),
    },
    {
      text: 'vaporoso',
      gloss: T('Sufijo {-oso} forma un adjetivo a partir del sustantivo {vapor}.'),
    },
    {
      text: 'guarda-chuva',
      gloss: T(
        'Composición: {guarda} y {chuva} son dos radicales enteros, y el guion marca la unión.',
      ),
    },
    {
      text: 'passatempo',
      gloss: T('Composición sin guion: {passa} y {tempo} no chocan por escrito.'),
    },
    {
      text: 'fé',
      gloss: T('Raíz heredada del latín {fides}, sin sufijo y sin terminación visible.'),
    },
    {
      text: 'pão',
      gloss: T('Del latín {panis}, con adaptación fónica: {a} en lugar de la {i} latina.'),
    },
    {
      text: 'livraria',
      gloss: T('Sufijo {-aria} que forma el lugar donde se ejerce el oficio de {livro}.'),
    },
  ],
  tables: [
    {
      caption: T('Los cuatro procesos'),
      head: [T('Processo'), T('Radicais'), T('O que muda'), T('Exemplo')],
      rows: [
        [T('{prefixação}'), T('um'), T('o sentido inverte'), T('{desleal}')],
        [T('{sufixação}'), T('um'), T('a categoria muda'), T('{lealdade}')],
        [T('{composição}'), T('dois inteiros'), T('nasce um sentido novo'), T('{guarda-chuva}')],
        [
          T('{aglutinação}'),
          T('dois, um perdido'),
          T('a base perde a forma'),
          T('{homem} de {hominem}'),
        ],
      ],
    },
    {
      caption: T('Sufijos que cambian de categoría'),
      head: [T('Sufixo'), T('Base'), T('Categoria que sai')],
      rows: [
        [T('-dade'), T('{leal}'), T('substantivo: {lealdade}')],
        [T('{-oso}'), T('{vapor}'), T('adjetivo: {vaporoso}')],
        [T('{-mente}'), T('{rápido}'), T('advérbio: {rapidamente}')],
        [T('{-ável}'), T('{amigar}'), T('adjetivo: {amigável}')],
        [T('{-aria}'), T('{livro}'), T('substantivo: {livraria}')],
        [T('{-eiro}'), T('{padre}'), T('substantivo: {padeiro}')],
      ],
    },
    {
      caption: T('Prefijos y lo que invierten'),
      head: [T('Prefixo'), T('Base'), T('Resultado')],
      rows: [
        [T('{des-}'), T('{leal}'), T('tira a qualidade: {desleal}')],
        [T('{in-}'), T('{numerável}'), T('nega: {inumerável}')],
        [T('{anti-}'), T('{social}'), T('inverte: {antisocial}')],
        [T('{re-}'), T('{fazer}'), T('repete: {refazer}')],
        [T('{pre-}'), T('{ver}'), T('antecipa: {prever}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra está formada por {composición}?'),
    options: [T('{deslealdade}'), T('{guarda-chuva}'), T('{vaporoso}'), T('{antisocial}')],
    answer: 1,
    hint: T('Cuenta los radicales enteros: {guarda} y {chuva} son dos.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué hace el prefijo {des-} en {desleal}?'),
      options: [
        T('invierte el sentido de la raíz sin cambiar la categoría'),
        T('convierte la raíz en sustantivo'),
        T('añade una terminación de número'),
        T('une dos radicales enteros'),
      ],
      answer: 0,
      hint: T('{leal} sigue siendo adjetivo en {desleal}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada proceso con la palabra que lo ilustra.'),
      pairs: [
        { a: T('{desleal}'), b: T('{prefijación}') },
        { a: T('{lealdade}'), b: T('{sufijación}') },
        { a: T('{passatempo}'), b: T('{composición}') },
        { a: T('{rapidamente}'), b: T('sufijo que crea adverbio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Hay ______ radicales enteros en {guarda-chuva}, y por eso se llama composición.'),
      answer: 'dois',
      hint: T('{guarda} y {chuva}.'),
    },
  ],
};
