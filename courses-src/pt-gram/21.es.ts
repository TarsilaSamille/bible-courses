import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('La estructura del período'),
  title: T('Períodos coordinados'),
  subtitle: T('Relaciones entre oraciones independientes'),
  body: C(`**Visión general.** La coordinación {sintética} usa conectivo: en {Venid y seguidme}, la {y} es conectivo, y las dos oraciones quedan marcadas por su presencia.

**Regla 1.** La coordinación {asindética} prescinde de conectivo: en {Salió, tomó el manto, salió}, las comas separan las oraciones, y ninguna palabra las une.

**Regla 2.** La relación semántica de la coordinación es una de cinco: {adición}, {oposición}, {alternativa}, {conclusión} o {explicación}, y es ella la que elige el conectivo.

**Regla 3.** La {alternativa} exige {o} y niega lo que niega {no ... o}; la {explicativa} usa {que} y {pois}, donde {pois} significa {por eso} y no {porque}.

**Regla 4.** El {polisíndeton} es la repetición del conectivo: en {El amor es paciente, el amor es bondadoso}, el {es} se repite y la coma aparece cada vez.

**Aplicación.** En {No mates, y no cometas adulterio}, las dos oraciones están coordinadas por {y} con valor **aditivo negativo**. En {El amor es paciente, el amor es bondadoso} (1 Cor 13, 4), hay cuatro oraciones coordinadas, y el verbo {es} se repite por **polisíndeton**. Y la frase griega ({Ἡ ἀγάπη μακροθυμεῖ}) trae verbo solo en la primera, y las demás lo omiten: es lo que el portugués compensa repitiendo.

**Verificación.** Para dos oraciones coordinadas, pregunta: ¿la segunda **suma**, **elige**, **se opone**, **concluye** o **explica** la primera? La respuesta da la relación y la conjunción. Luego: ¿hay **coma** antes de la conjunción? Y ¿hay **sujeto** en las dos oraciones, o el segundo es elíptico? Tres preguntas cierran el análisis.`),
  vocab: [
    V('coordenação', 'coordenação', 'unión de oraciones independientes'),
    V('sindética', 'sindética', 'con conectivo'),
    V('assindética', 'assindética', 'sin conectivo'),
    V('aditiva', 'aditiva', 'la segunda suma'),
    V('adversativa', 'adversativa', 'la segunda se opone'),
    V('alternativa', 'alternativa', 'la segunda elige'),
    V('conclusiva', 'conclusiva', 'la segunda concluye'),
    V('explicativa', 'explicativa', 'la segunda explica'),
    V('polissíndeto', 'polissíndeto', 'conectivo repetido'),
    V('pois', 'pois', 'conectivo conclusivo, no causal'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La coordinación {sintética} usa conectivo: en {Venid y seguidme}, la {y} es conectivo, y las dos oraciones quedan marcadas por su presencia.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La coordinación {asindética} prescinde de conectivo: en {Salió, tomó el manto, salió}, las comas separan las oraciones, y ninguna palabra las une.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La relación semántica de la coordinación es una de cinco: {adición}, {oposición}, {alternativa}, {conclusión} o {explicación}, y es ella la que elige el conectivo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La {alternativa} exige {o} y niega lo que niega {no ... o}; la {explicativa} usa {que} y {pois}, donde {pois} significa {por eso} y no {porque}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El {polisíndeton} es la repetición del conectivo: en {El amor es paciente, el amor es bondadoso}, el {es} se repite y la coma aparece cada vez.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {pois} que no es {porque}'),
      text: T(
        'En {Llegué, pues era tarde}, el {pois} significa {por eso}, y la segunda oración explica la primera. En {No fui, pues era tarde}, el mismo {pois} significa {porque}, y la segunda oración explica la primera. La forma es idéntica y el sentido cambia, y por eso la gramática normativa trata {pois} como conclusivo y reserva {porque} para el causal.',
      ),
    },
    {
      label: T('El verbo que el griego omite'),
      text: T(
        'La coordinación griega casi nunca repite el verbo: {ἐλθὼν δὲ προσευξάμενος} trae un solo verbo para dos oraciones. El portugués tiene que repetir porque no tiene esa economía sintáctica, y la repetición es lo que produce la lectura bíblica polisindética: {Venid, y adorad, y creed}, donde cada verbo nuevo es una oración nueva.',
      ),
    },
  ],
  examples: [
    {
      text: 'Vinde e segui-me.',
      gloss: T('Coordinación sintética aditiva: {y} liga dos oraciones independientes.'),
    },
    {
      text: 'Não mates, e não cometas adultério.',
      gloss: T('Sintética aditiva negativa: la negación vale para las dos oraciones.'),
    },
    {
      text: 'Veio, mas não viu.',
      gloss: T('Sintética adversativa: {mas} opone la segunda oración a la primera.'),
    },
    {
      text: 'Ficou ou saiu.',
      gloss: T('Sintética alternativa: {o} ofrece dos posibilidades, y solo una ocurre.'),
    },
    {
      text: 'Choveu, logo ficou.',
      gloss: T('Sintética conclusiva: {luego} saca la conclusión de la primera oración.'),
    },
    {
      text: 'Saiu, tomou o manto, saiu.',
      gloss: T('Asindética: tres oraciones sin conectivo, separadas por comas.'),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polisíndeton: el verbo {es} se repite en cada oración coordinada.'),
    },
    {
      text: 'Não fui, pois era tarde.',
      gloss: T('El {pois} aquí es causal: la segunda oración explica la primera.'),
    },
    {
      text: 'Cheguei, pois era tarde.',
      gloss: T('El mismo {pois} es conclusivo: saca {por eso} y explica.'),
    },
  ],
  tables: [
    {
      caption: T('Las cinco relaciones de la coordinación'),
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
      caption: T('Sintética y asindética'),
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
      caption: T('Los conectivos y lo que dicen'),
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
    prompt: T('En {Llegué, pues era tarde}, el {pois} es:'),
    options: [
      T('conclusivo, y vale por {por eso}'),
      T('causal, y vale por {porque}'),
      T('adversativo, y vale por {pero}'),
      T('alternativo, y vale por {o}'),
    ],
    answer: 0,
    hint: T('La respuesta es {por eso}, y no {porque}: el {pois} va después de la consecuencia.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Salió, tomó el manto, salió}, la coordinación es:'),
      options: [
        T('asindética, porque no hay conectivo'),
        T('sintética, porque las comas son conectivos'),
        T('adversativa, porque las oraciones se oponen'),
        T('subordinada, porque la segunda no tiene sujeto'),
      ],
      answer: 0,
      hint: T('La coordinación sin conectivo es, por definición, asindética.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada relación con el conectivo que la abre.'),
      pairs: [
        { a: T('{y}'), b: T('adición') },
        { a: T('{pero}'), b: T('oposición') },
        { a: T('{o}'), b: T('alternativa') },
        { a: T('{luego}'), b: T('conclusión') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La coordinación ______ no usa conectivo y separa las oraciones con coma.'),
      answer: 'assindética',
      hint: T('La coordinación {sintética} siempre trae conectivo.'),
    },
  ],
};
