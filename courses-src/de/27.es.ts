import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('La voz pasiva'),
  subtitle: T('werden más el participio, el agente con von y el Passivsatz'),
  section: T('Los verbos'),
  body: C(`## La forma

La pasiva alemana se hace con **werden** en presente más el **participio** del verbo principal. *werden* va conjugado en segunda posición y el participio cierra la proposición: *Der Brief wird geschrieben*, *Die Fenster wurden gestrichen*, *Die Rechnung ist bezahlt worden*. No hay auxiliar: el propio *werden* lleva la acción, y el participio lleva aquello sobre lo que se actúa.

El agente entra con **von** más dativo: *Der Brief wird von meinem Bruder geschrieben*. En muchos casos, sin embargo, el agente importa tanto como la acción, y entonces el agente se convierte en un sustantivo con el sufijo **-ung** o **-er**: *die Übersetzung, die Lösung, der Verfasser, der Leser*. Eso es lo que se llama el **Passivsatz**: la persona que actúa se trata como una cosa.

El agente es facultativo. Sin *von*, sin sustantivo, la proposición simplemente no declara agente: *Das Haus wird gebaut*, *Es wurde viel gearbeitet*. Eso no es falta de información: es la información de que el agente no importa para lo que se quiere decir. Lutero usa el recurso constantemente, porque el texto bíblico interesa por el hecho, no por quién lo ejecuta.

Y la gran ventaja es la reordenación: el objeto puede ocupar la plaza que tenía el sujeto, el participio va al final, y la acción queda en primer plano. Una oración activa como *Ich habe das Buch gelesen* se vuelve *Das Buch ist von mir gelesen worden*.

## La doble pasiva

Hay una tercera posibilidad, más rara y muy alemana: **modal** + *werden* + participio. *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*, *Er soll entlassen werden*. Aquí la construcción no tiene agente ni objeto, y el sentido es de necesidad o de regla. Es la pasiva que las gramáticas escolares enseñan primero.

## Lo esencial

La pasiva alemana cambia el sujeto por el participio. Lo que era el sujeto en la activa pasa a ser aquello a que se refiere la pasiva, y el agente, si importa, se convierte en preposición con *von* o en sustantivo en *-er* o *-ung*.`),
  vocab: [
    V('werden', 'werden', 'auxiliar de la pasiva, sin sentido de volverse'),
    V('wird geschrieben', 'schreiben', 'es escrito (pasiva presente)'),
    V('wurde geöffnet', 'öffnen', 'fue abierto (pasiva en el Präteritum)'),
    V('ist bezahlt worden', 'bezahlen', 'ha sido pagado (Perfekt pasiva con worden)'),
    V('von meinem Bruder', 'Bruder', 'por mi hermano (agente con von)'),
    V('die Übersetzung', 'Übersetzung', 'la traducción (agente nominalizado en -ung)'),
    V('der Verfasser', 'Verfasser', 'el autor (agente en -er)'),
    V('muss bezahlt werden', 'bezahlen', 'tiene que ser pagado (modal más pasiva)'),
    V(
      'Der Brief wird von meinem Bruder geschrieben.',
      'schreiben',
      'La carta la escribe mi hermano.',
    ),
    V('Die Tür wurde geöffnet.', 'öffnen', 'La puerta fue abierta.'),
    V(
      'Die Rechnung ist bezahlt worden.',
      'bezahlen',
      'La factura ha sido pagada (estado resultante).',
    ),
    V('Es wurde viel geredet.', 'reden', 'Se habló mucho (agente anónimo).'),
    V('Er soll entlassen werden.', 'entlassen', 'Debe ser despedido (regla).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma el Perfekt pasivo de {schreiben}?'),
    options: [
      T('ist geschrieben worden'),
      T('hat geschrieben worden'),
      T('wird geschrieben werden'),
      T('ist geschrieben sein'),
    ],
    answer: 0,
    hint: T('Regla §2: ist + participio + worden.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la pasiva del Präteritum: Die Tür wurde ___.'),
      answer: 'geöffnet',
      hint: T('Präteritum de la pasiva: wurde + participio.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración conserva la información de que alguien actúa?'),
      options: [
        T('La carta la escribe mi hermano.'),
        T('La carta se escribe.'),
        T('Se escribe.'),
        T('La carta tiene que escribirse.'),
      ],
      answer: 0,
      hint: T('Regla §3: solo von más dativo declara el agente.'),
    },
    {
      kind: 'fill',
      prompt: T('Agente nominalizado de {übersetzen}: die ___'),
      answer: 'Übersetzung',
      hint: T('Regla §4: los sustantivos en -ung nominalizan el agente.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el tiempo con la construcción pasiva'),
      pairs: [
        { a: T('Presente'), b: T('wird geschrieben') },
        { a: T('Präteritum'), b: T('wurde geschrieben') },
        { a: T('Perfekt'), b: T('ist geschrieben worden') },
        { a: T('Futur I'), b: T('wird geschrieben werden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pasiva es werden en presente más el participio, y el participio cierra la proposición: Die Tür wird geöffnet.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el Perfekt el participio va seguido obligatoriamente por worden: ist geöffnet worden. Y el auxiliar es siempre ist, nunca hat.',
      ),
    },
    {
      n: '3',
      text: T(
        'El agente entra con von más dativo, o desaparece: Der Brief wird von meinem Bruder geschrieben.',
      ),
    },
    {
      n: '4',
      text: T(
        'Si el sujeto activo es una persona, no se convierte en von sino en un sustantivo en -er o -ung: der Verfasser, die Übersetzung.',
      ),
    },
    {
      n: '5',
      text: T(
        'En el imperativo y en los participios adjetivales la pasiva pierde el werden por completo: Öffne die Tür! / Sei gelobt, mein Gott!',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el Nuevo Testamento es un libro pasivo'),
      text: T(
        'La traducción del griego cambió lo que el texto dice. El griego traía la acción delante, con el verbo al principio y el sujeto marcado: *ἐλάβεν ὁ θεὸς τὸν Ἰσραήλ*. Lutero lo traduce con el orden alemán — verbo conjugado en segundo lugar, objeto en tercero — y el resultado es una proposición gramaticalmente activa: *Israel ist von Gott genommen worden*. El griego pone el verbo en evidencia y el sustantivo al final; el alemán pone el sustantivo delante y el verbo al final. La misma inversión del énfasis recorre todo el ritmo de Lucas, del *und es begab sich* al *und es geschah*.',
      ),
    },
    {
      label: T('El agente de la pasiva es humano; el paciente no'),
      text: T(
        'Cuando el agente es una persona, la pasiva recurre al **Agent Passiv** en *-er* o *-ung*: *der Verfasser, die Übersetzerin, die Schöpfung*. Cuando el agente es una cosa, una fuerza, un proceso, desaparece. De ahí la oración *Es wurde viel gearbeitet*, en la que nadie trabaja, y la traducción bíblica *alles, was ich euch geboten habe*, donde quien actúa es el mismo Jesús, y sin embargo el griego original usa un aoristo de sentido pasivo, *ἐνετειλάμην*, «fui enviado en misión». La pasiva es un modo de hablar en el que el sujeto queda sistemáticamente excluido.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Brief wird geschrieben.',
      gloss: T('La carta se está escribiendo (pasiva presente).'),
    },
    {
      text: 'Der Brief wird von meinem Bruder geschrieben.',
      gloss: T('La carta la escribe mi hermano (agente con von).'),
    },
    { text: 'Die Tür wurde geöffnet.', gloss: T('La puerta fue abierta (pasiva del Präteritum).') },
    {
      text: 'Die Rechnung ist bezahlt worden.',
      gloss: T('La factura ha sido pagada (Perfekt con worden).'),
    },
    {
      text: 'Die Fenster müssen gestrichen werden.',
      gloss: T('Las ventanas tienen que pintarse (modal más pasiva).'),
    },
    { text: 'Er soll entlassen werden.', gloss: T('Debe ser despedido (regla, no hecho).') },
    { text: 'Es wurde viel geredet.', gloss: T('Se habló mucho (agente omitido).') },
    {
      text: 'Das Buch wurde vom Autor geschrieben.',
      gloss: T('El libro fue escrito por el autor (agente nominalizado).'),
    },
    { text: 'Sei gelobt, mein Gott.', gloss: T('Bendito seas, mi Dios (imperativo sin werden).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los tiempos de la pasiva'),
      head: [T('Tiempo'), T('Construcción'), T('Ejemplo')],
      rows: [
        ['Presente', 'wird + Partizip II', 'Die Tür wird geöffnet.'],
        ['Präteritum', 'wurde + Partizip II', 'Die Tür wurde geöffnet.'],
        ['Perfekt', 'ist + Partizip II + worden', 'Die Tür ist geöffnet worden.'],
        ['Plusquamperfekt', 'war + Partizip II + gewesen', 'Die Tür war geöffnet gewesen.'],
        ['Futur I', 'wird + Partizip II + werden', 'Die Tür wird geöffnet werden.'],
        ['Imperativo', 'nur Partizip II', 'Öffne die Tür!'],
      ],
    },
    {
      caption: T('Tabla 2 — Activa y pasiva una al lado de la otra'),
      head: [T('Activa'), T('Pasiva'), T('Lo que cambia')],
      rows: [
        ['Ich schreibe den Brief.', 'Der Brief wird geschrieben.', 'o objeto vira sujeito'],
        ['Sie öffnet die Tür.', 'Die Tür wird geöffnet.', 'o objeto vira sujeito'],
        [
          'Mein Bruder hat es gemacht.',
          'Es ist von meinem Bruder gemacht worden.',
          'o sujeito vira agente explícito',
        ],
        [
          'Der Autor schrieb das Buch.',
          'Das Buch wurde vom Autor geschrieben.',
          'o sujeito vira agente explícito',
        ],
        ['Jemand hat gelogen.', 'Es wurde gelogen.', 'o agente desaparece'],
        [
          'Man kann das nicht beweisen.',
          'Das kann nicht bewiesen werden.',
          'modal + werden + particípio',
        ],
      ],
    },
  ],
};
