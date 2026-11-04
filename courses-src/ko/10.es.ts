import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Sintaxis'),
  title: T('Conectivos: las palabras que cosen las frases y revelan la mentalidad del texto'),
  subtitle: T(
    'En coreano el conectivo viene después del verbo, al final de la cláusula, y esa posición dice más sobre el texto que la propia palabra',
  ),
  body: C(`## El conectivo no entra donde uno espera

En portugués uno escribe "yo voy y como": la "y" queda en medio, entre las dos cláusulas, y es ella la que cose una con otra. El coreano hace lo contrario. Los conectivos que **suman**, {geureo} ("y, y entonces"), {hago} ("y, y también") y {hyeonchan} ("también, además"), entran **después del verbo**, al final de la cláusula que gobiernan. *Neoneun bap-eul meok-go hak-gyo-e ga-neun-da* quiere decir "yo como y voy al colegio": la {go} pegada a {meokgo} es el verbo "comer", y la {go} de la segunda cláusula es el mismo sonido del {hago}, ya con la función de conectivo.

Por eso el traductor tiene que montar la frase en el orden coreano y no en el portugués. En portugués el conectivo viene entre las cláusulas; en coreano **cierra** la primera. "Yo voy a comer y" ya es una frase coreana completa y bien formada, y la cláusula que viene después es la segunda mitad de la idea. El conectivo ata las cláusulas quedándose en medio de la frase, nunca entre ellas.

Y el mismo sonido {go} aparece dos veces con dos papeles, y solo la posición dice cuál es cuál: pegado a un sustantivo es verbo, pegado a una cláusula ya cerrada es conectivo. Quien aprende solo por el oído se equivoca; quien aprende por la posición acierta.

## Contraste: un "pero" y sus grados

{jiman} es el "pero" del corte: llega al final de la primera cláusula y desmiente lo que ella acababa de decir. {geureodo} hace el mismo trabajo con menos peso, es el "pero, aun así", el contraste que no interrumpe y solo desvía el rumbo. {geureona} es la forma más escrita y más antigua del mismo {geureodo}, e {imyeon} es el "mientras que", el contraste entre dos cosas que avanzaban en paralelo sin encontrarse jamás.

Los cuatro vienen al final de la cláusula, y esa es la parte que sorprende. En portugués el "pero" es un puente: uno lo cruza al llegar a la segunda cláusula. En coreano el contraste es un cierre; solo llega cuando la segunda cláusula ya empezó, ya dijo su sujeto y ya hizo su verbo, y entonces se vuelve atrás y corrige. El oyente de coreano no espera el contraste en la entrada de la cláusula, y por eso un texto traducido con {jiman} en el sitio equivocado suena mal antes de que se note ninguna palabra.

## Causa, consecuencia y el par fijo

{ttaeumane} es "porque", {georeumeuro} es "por tanto" y {deuraseo} es el "así que" del uso corriente. {eoseo} es el más elemental de todos: es el "porque" pegado al final del verbo, y *bi-ga o-seo* quiere decir "porque llueve", sin ni una palabra más. Fíjate en que los cuatro cierran la cláusula anterior en vez de abrir la siguiente: la causa se dice después del efecto, y el efecto se dice después de la causa.

El par {ttaeumane} ... {georeumeuro} es fijo, tan automático como "porque... por tanto" en portugués, y el par {ttaeumane} ... {deuraseo} es el mismo par en el habla corriente. {georeumeuro} es el miembro escrito, {deuraseo} es el popular, y ninguno de los dos necesita al otro para funcionar.

La comparación con los otros dos idiomas del proyecto muestra lo mismo. En mandarín, *yīnwèi* ("porque") y *suǒyǐ* ("por tanto") abren la cláusula: vienen **antes** del sujeto. En japonés, *kara* y *node* también cierran la cláusula. En coreano, {ttaeumane} y {georeumeuro} cierran. Hay dos posiciones para la misma idea, y es la posición, no el vocabulario, lo que separa las lenguas.

## Condición, concesión y lo que la posición revela

{myeon} es el "si": *bi-ga o-myeon an ga-yo*, "si llueve, yo no voy". {neunimyeon} es el "si fuera", el modo hipotético, más cuidadoso. {geureodo} vuelve aquí con otro sentido: como concesión, "aunque". {daui} es el "solo, únicamente", y corta el resto de la frase. La excepción es {ttak}: {ttak} va al **principio** de la cláusula y es raro, y quien encuentra un {ttak} en un texto sabe que ha encontrado algo fuera del patrón.

Y la conclusión no es análisis literario: es orden de habla. Conectivo al final de la cláusula significa que el hablante **organiza el discurso por el verbo**: primero dice lo que pasó y solo después comenta lo que eso significa. Conectivo al principio, que es el caso del mandarín, significa que el hablante **organiza por el contexto**: primero anuncia la intención, la causa o el contraste, y solo después dice lo que pasó. Las dos lenguas dicen lo mismo sobre el mundo; cambia por dónde empieza el hablante, y eso es automatismo, no estilo.

El gancho bíblico cierra la lección. La traducción coreana de 1917 fue literal y refleja el griego, que también cierra la cláusula con el conectivo, como todas las lenguas indoeuropeas, y por eso el coreano antiguo acumula "entonces... y... y" en casi toda línea. La traducción de 1961 modernizó la sintaxis y podó esos conectivos, y por eso suena distinta de las otras. Y el ejemplo más conocido muestra la regla funcionando: en Juan 3:16, "porque Dios amó el mundo", el "porque" del portugués abre el versículo, pero el {ttaeumane} coreano cierra la cláusula anterior, exactamente como lo hizo en griego. En 1 Corintios 13:4 a 13:8 el contraste es el tejido de todo el pasaje, y la lista de *sarang-eun ora-e cho-go*, "el amor es paciente", queda cortada por la mitad en el versículo siguiente, con el {jiman} llegando solo al final de la cláusula.
`),
  vocab: [
    V('geureo', '그리고', 'y, y entonces: conectivo de suma al final de la cláusula'),
    V('hago', '하고', 'y, y también: misma función, forma más corta'),
    V('hyeonchan', '또한', 'también, además: adición más formal'),
    V('jiman', '지만', 'pero: contraste fuerte, al final de la cláusula'),
    V('geureodo', '그래도', 'pero, aun así: contraste suave y concesión'),
    V('geureona', '그러나', 'sin embargo: forma escrita de geureodo'),
    V('imyeon', '이면', 'mientras que: contraste en paralelo'),
    V('myeon', '면', 'si, en caso de: condicional al final de la cláusula'),
    V('neunimyeon', '느니면', 'si, si fuera: condicional hipotético'),
    V('daui', '다만', 'solo, únicamente: corta el resto de la frase'),
    V('ttak', '딱', 'aun, exactamente: va al principio y es raro'),
    V('ttaeumane', '때문에', 'porque, a causa de: causa al final de la cláusula'),
    V('eoseo', '어서', 'porque: causa pegada al final del verbo'),
    V('deuraseo', '그래서', 'así que: consecuencia del uso corriente'),
    V('georeumeuro', '그러므로', 'por tanto: miembro escrito del par fijo'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los conectivos de suma ({geureo}, {hago}, {hyeonchan}) y de contraste ({jiman}, {geureodo}, {geureona}, {imyeon}) entran después del verbo, al final de la cláusula que gobiernan.',
      ),
    },
    {
      n: '2',
      text: T(
        '{jiman} es el corte fuerte; {geureodo} es la desviación suave y dobla como concesión. Los dos llegan cuando la segunda cláusula ya hizo su verbo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ttaeumane} y {georeumeuro} forman un par fijo; {deuraseo} y {eoseo} son las formas corrientes de causa y consecuencia, todas al final de la cláusula.',
      ),
    },
    {
      n: '4',
      text: T(
        'Condición y concesión: {myeon}, {neunimyeon} y {geureodo}, al final. La excepción es {ttak}, que va al principio y es raro.',
      ),
    },
    {
      n: '5',
      text: T(
        'En coreano el conectivo cierra la cláusula; en mandarín la abre. Los dos caminos son automáticos, y ese orden es el que el hablante ha interiorizado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un mismo sonido, dos papeles'),
      text: T(
        'El sonido {go} aparece dentro de {meokgo}, que es el verbo "comer", y dentro de {hago}, que es el conectivo "y". Nada en la palabra los distingue: es la posición la que dice cuál es cuál, y por eso la posición es lo primero que se enseña.',
      ),
    },
    {
      label: T('El griego también cierra la cláusula'),
      text: T(
        'La traducción coreana de 1917 fue literal y refleja el griego, donde los conectivos vienen al final de la cláusula como en todas las lenguas indoeuropeas. De ahí que el coreano antiguo acumule "entonces... y... y". La de 1961 podó esos conectivos, y por eso suena distinta.',
      ),
    },
  ],
  examples: [
    {
      text: '밥을 먹고 학교에 가요',
      gloss: T('ba-beul meok-go hak-gyo-e ga-yo — yo como y voy al colegio'),
    },
    {
      text: '비가 오지만 우산은 안 가져왔어요',
      gloss: T('bi-ga o-ji-man u-san-eun an ga-jeo-wa-sseo-yo — llueve, pero no traje paraguas'),
    },
    {
      text: '배가 아파서 병원에 갔어요',
      gloss: T(
        'bae-ga a-pa-seo byeong-won-e ga-sseo-yo — me dolía el estómago, así que fui al hospital',
      ),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — si llueve, yo no voy') },
    { text: '사랑은 오래 참고', gloss: T('sa-rang-eun o-ra-e cho-go — el amor es paciente') },
  ],
  tables: [
    {
      caption: T('Los conectivos de contraste y el grado del corte'),
      head: [T('Conectivo'), T('Glosa'), T('Posición'), T('Tono')],
      rows: [
        [T('{jiman}'), T('pero'), T('fin de la 1ª cláusula'), T('corte fuerte')],
        [
          T('{geureodo}'),
          T('pero, aun así'),
          T('fin de la 1ª cláusula'),
          T('desviación suave; también concesión'),
        ],
        [T('{geureona}'), T('sin embargo'), T('fin de la 1ª cláusula'), T('registro escrito')],
        [T('{imyeon}'), T('mientras que'), T('fin de la 1ª cláusula'), T('contraste en paralelo')],
      ],
    },
    {
      caption: T('Dónde entra el conectivo en cada una de las tres lenguas'),
      head: [T('Función'), T('Mandarín'), T('Japonés'), T('Coreano')],
      rows: [
        [
          T('y'),
          T('*ér*, al principio de la 2ª cláusula'),
          T('*to*, al final'),
          T('{geureo}, al final'),
        ],
        [T('pero'), T('*dànshì*, al principio'), T('*ga*, al principio'), T('{jiman}, al final')],
        [
          T('porque'),
          T('*yīnwèi*, al principio'),
          T('*kara*, al final'),
          T('{ttaeumane}, al final'),
        ],
        [
          T('por tanto'),
          T('*suǒyǐ*, al principio'),
          T('*node*, al final'),
          T('{georeumeuro}, al final'),
        ],
      ],
    },
    {
      caption: T('Condición, concesión y la excepción que rompe el patrón'),
      head: [T('Conectivo'), T('Glosa'), T('Posición'), T('Observación')],
      rows: [
        [T('{myeon}'), T('si, en caso de'), T('fin de la 1ª cláusula'), T('el condicional común')],
        [
          T('{neunimyeon}'),
          T('si, si fuera'),
          T('fin de la 1ª cláusula'),
          T('hipotético, más cuidadoso'),
        ],
        [
          T('{geureodo}'),
          T('aunque'),
          T('fin de la 1ª cláusula'),
          T('el mismo {geureodo}, en concesión'),
        ],
        [
          T('{daui}'),
          T('solo, únicamente'),
          T('fin de la 1ª cláusula'),
          T('corta el resto de la frase'),
        ],
        [
          T('{ttak}'),
          T('aun, exactamente'),
          T('principio de la cláusula'),
          T('raro; fuera del patrón'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En coreano, ¿dónde entra el conectivo {geureo}, la "y" que une dos cláusulas?'),
    options: [
      T('después del verbo, al final de la cláusula'),
      T('antes del sujeto, al principio de la cláusula'),
      T('entre las dos cláusulas'),
      T('donde el hablante quiera'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa el "pero" de contraste, al final de la cláusula: 비가 오____ 우산이 없다',
      ),
      answer: '지만',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el conectivo con su función'),
      pairs: [
        { a: T('{geureo}'), b: T('y, y entonces (fin de la cláusula)') },
        { a: T('{hago}'), b: T('y, y también (fin de la cláusula)') },
        { a: T('{jiman}'), b: T('pero, corte fuerte') },
        { a: T('{ttaeumane}'), b: T('porque, causa') },
        { a: T('{myeon}'), b: T('si, condición') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas afirmaciones sobre el conectivo coreano es verdadera?'),
      options: [
        T('los conectivos de suma y de contraste vienen después del verbo'),
        T('los conectivos vienen antes del sujeto, como en mandarín'),
        T('{ttak} es el conectivo más común del coreano'),
        T('el coreano no tiene conectivos de causa'),
      ],
      answer: 0,
    },
  ],
};
