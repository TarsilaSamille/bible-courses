import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Gerundio y gerundivo'),
  subtitle: T('{amandī, amandus} — el infinitivo declinado y el participio de obligación'),
  section: T('El ablativo absoluto'),
  body: C(`## El gerundio es un infinitivo declinado

El latín no tiene «gerundio» en el sentido romance: lo que los gramáticos llaman gerundio es el **infinitivo declinado**, y por eso tiene cuatro casos y solo número singular. En {amandī} tenemos gerundio; en {amandum}, infinitivo.

| Caso | Forma | Valor típico | Ejemplo |
|---|---|---|---|
| genitivo | \`{amandī}\` | complemento del sustantivo | \`{ars amandī}\` «el arte de amar» |
| dativo | \`{amandō}\` | finalidad antigua, sujeto | \`{est mihi amandum}\` «tengo que amar» |
| acusativo | \`{amandum}\` | con preposición | \`{ad amandum}\` «para amar» |
| ablativo | \`{amandō}\` | medio o simultaneidad | \`{cum docendo}\` «al enseñar» |

Compara: {amō} «amo», {amāre} «amar» (infinitivo), {amandī} «de amar» (gerundio), {amāns, amantis} «amando» (participio). Son cuatro cosas distintas, y el latín trata las cuatro con cuidado.

## El gerundivo: participio futuro pasivo

El gerundivo es el participio futuro pasivo en {-ūndus, -a, -um}: {amandus, -a, -um} «que debe ser amado», {legendus, -a, -um} «que debe ser leído», {faciendus} «que debe ser hecho». Sin {esse}, funciona como adjetivo.

Con {esse}, la construcción es el **gerundivo impersonal**: el sujeto va en dativo y el gerundivo concuerda con el sustantivo que lo rige.

| Persona | Forma | Glosa |
|---|---|---|
| 3.ª sing. | \`{amandum est}\` | «debe ser amado» |
| 3.ª pl. | \`{amanda sunt}\` | «deben ser amados» |
| con dativo | \`{mihi legenda est}\` | «tengo que leer» |

Fíjate en la concordancia: {legendus} con {liber} (masc. sing.) da {liber legendus est} «el libro debe ser leído»; el mismo gerundivo con {lībra} da {lībra legenda est} «el libro (f.) debe ser leído».

## Gerundivo impersonal × gerundivo personal

- **Impersonal** (mucho más común en la Vulgata): {portāre est mihi} «tengo que llevar».
- **Personal**: {puerī portāre discunt} «los niños aprenden a llevar», {nōn est tibi currere in stadiō} «no tienes por qué correr en el estadio».

La diferencia es la misma que hay entre «tengo que leer» y «el libro debe ser leído»: la primera vacía el sujeto, la segunda lo devuelve.

## Gerundivo de finalidad

El gerundivo de finalidad expresa el fin sin {ut}: {flōrida sunt causa legenda esse} = «las flores están para ser leídas» — es literalmente la Vulgata, Proverbios 1,1: {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} «flores son las obras de Salomón: no en parábolas, sino en las enseñanzas más sabias».

Con el sustantivo en gerundio, el sentido es aún más directo: {nihil tam crassum neque tam contrārium sensūs nostrī, nisi orātōrīs īnventum} «nada tan tosco ni tan contrario a nuestros sentidos, sino que fue inventado por el orador».

## Aplicación en la Vulgata

En Efesios 2,10, {ipsius enim sumus factura, in Christō Iesū ad bonum opus ēlabōrātos} «somos obra suya, creados en Cristo Jesús para las buenas obras»: el gerundivo {ēlabōrātos} con {ad} marca finalidad sin necesidad de {ut}.

En 1 Timoteo 2,4, {qui vult omnes hominēs salvōs fieri et ad cognitionem vēritatis venīre} — el verbo {fierī} es un infinitivo de finalidad regido por {vult}.

## Resumen

| Forma | Categoría | Sinopsis | Ejemplo |
|---|---|---|---|
| \`{amāre}\` | infinitivo | amar | \`{amāre volō}\` «quiero amar» |
| \`{amandī}\` | gerundio | de amar | \`{amandī mē miserēre}\` «ten piedad de mí» |
| \`{amāns}\` | participio presente | amando | \`{amāns legit}\` «leyendo» |
| \`{amandus}\` | gerundivo | que debe ser amado | \`{amanda esse}\` «deber ser amado» |

El gerundio es la pieza más flexible del sistema: sustituye un AcI (§16), nombra la finalidad y, en el ablativo absoluto (§17), llega a hacer de predicado de una oración entera.`),
  vocab: [
    V('amare', 'amo', 'amar (infinitivo)'),
    V('amandus', 'amo', 'que debe ser amado (gerundivo)'),
    V('amans', 'amo', 'amando (participio presente)'),
    V('amatus', 'amo', 'amado (participio pasado)'),
    V('legendus', 'lego', 'que debe ser leído (gerundivo)'),
    V('faciendus', 'facio', 'que debe ser hecho (gerundivo)'),
    V('docere', 'doceo', 'enseñar'),
    V('discere', 'disco', 'aprender'),
    V('portare', 'porto', 'llevar, cargar'),
    V('salvus', 'salvus', 'salvo, a salvo'),
    V('veritas', 'veritas', 'verdad'),
    V('cognitio', 'cognitio', 'conocimiento'),
    V('opus', 'opus', 'obra, trabajo'),
    V('parabola', 'parabola', 'parábola'),
    V('miserere', 'miseror', 'tener piedad, apiadarse'),
    V('Iesus', 'Iesus', 'Jesús'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {mihi legenda est}, ¿qué está en dativo?'),
    options: [
      T('El objeto directo de {legere}'),
      T('El sujeto del gerundivo impersonal'),
      T('El agente de la pasiva'),
      T('La preposición regida por el verbo'),
    ],
    answer: 1,
    hint: T('Regla §2: en el gerundivo impersonal el sujeto es dativo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Gerundio de {legere}: legend_ («de leer»)'),
      answer: 'legendī',
      hint: T('El gerundio es el infinitivo en genitivo: -ī.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las formas es un gerundivo?'),
      options: [
        T('{amandī} «de amar»'),
        T('{amāns} «amando»'),
        T('{amātūrus} «que amará»'),
        T('{amandus} «que debe ser amado»'),
      ],
      answer: 3,
      hint: T('Regla §1: el gerundivo es el participio futuro pasivo en -ndus.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma latina con su categoría'),
      pairs: [
        { a: T('{amāre}'), b: T('infinitivo') },
        { a: T('{amandī}'), b: T('gerundio (infinitivo declinado)') },
        { a: T('{amāns}'), b: T('participio presente') },
        { a: T('{amandus}'), b: T('gerundivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {ad bonum opus ēlabōrātos} (Ef 2,10), ¿qué indica {-ōs}?'),
      options: [
        T('Que es un dativo de agente'),
        T('Que es un gerundivo de finalidad, sin {ut}'),
        T('Que es el agente de la pasiva'),
        T('Que es un ablativo absoluto'),
      ],
      answer: 1,
      hint: T('Regla §4: el gerundivo de finalidad dispensa con el {ut}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El gerundio es el infinitivo declinado: {amandī}, {amandō}, {amandum}, {amandō}. Solo existe en singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el gerundivo impersonal el sujeto va en dativo y {esse} es impersonal: {portāre est mihi} «tengo que llevar».',
      ),
    },
    {
      n: '3',
      text: T(
        'El gerundivo concuerda con el sustantivo que lo rige: {liber legendus} «el libro que debe ser leído», {lībra legenda} «el libro (f.) que debe ser leído».',
      ),
    },
    {
      n: '4',
      text: T(
        'El gerundivo con {ad} y finalidad dispensa con el {ut}: {ad bonum opus ēlabōrātos} «para las buenas obras».',
      ),
    },
    {
      n: '5',
      text: T(
        'El gerundio en genitivo sustituye al AcI: {spes salūtis vestrae} «esperanza de que habéis sido salvados» en lugar de {spes vōs salūtōs esse}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué hay cuatro palabras'),
      text: T(
        'El latín distingue lo que el portugués y el español han fundido en un solo verbo. {amāre} es el infinitivo (la acción entera), {amandī} nombra la acción como sustantivo («de amar»), {amāns} describe al sujeto mientras actúa, y {amandus} describe lo que hay que hacer. Traducirlo todo por «amar» borra la información que el latín está marcando.',
      ),
    },
    {
      label: T('Proverbios 1,1 en la Vulgata'),
      text: T(
        'La Vulgata abre Proverbios con {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} — «flores son las obras de Salomón: no en parábolas, sino en las enseñanzas más sabias». Es la primera frase del libro, y funciona como definición del método: el latín prefiere el término técnico al poético.',
      ),
    },
  ],
  examples: [
    { text: 'amāre', gloss: T('amar (infinitivo)') },
    { text: 'amandī', gloss: T('de amar (gerundio, genitivo)') },
    { text: 'amandō', gloss: T('amando; al amar (ablativo o dativo)') },
    { text: 'amandum', gloss: T('para amar; que debe ser amado') },
    { text: 'amāns', gloss: T('amando (participio presente, con el sujeto)') },
    { text: 'amandus est', gloss: T('debe ser amado (gerundivo impersonal)') },
    { text: 'mihi legenda est', gloss: T('tengo que leer (gerundivo con dativo)') },
    { text: 'liber legendus est', gloss: T('el libro debe ser leído (gerundivo personal)') },
    {
      text: 'ad bonum opus ēlabōrātos',
      gloss: T('para las buenas obras (gerundivo de finalidad)'),
    },
    { text: 'cum docendo', gloss: T('al enseñar, en el acto de enseñar') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El gerundio (infinitivo declinado) de {amandus}'),
      head: [T('Caso'), T('Forma'), T('Uso'), T('Ejemplo')],
      rows: [
        ['Nominativo', '—', T('no existe'), '—'],
        ['Genitivo', 'amandī', T('con sustantivo'), '{ars amandī}'],
        ['Dativo', 'amandō', T('sujeto del gerundivo'), '{amandum est mihi}'],
        ['Acusativo', 'amandum', T('con preposición'), '{ad amandum}'],
        ['Ablativo', 'amandō', T('medio, circunstancia'), '{cum docendo}'],
      ],
    },
    {
      caption: T('Tabla 2 — Gerundivo impersonal y personal'),
      head: [T('Tipo'), T('Estructura'), T('Glosa')],
      rows: [
        [T('impersonal'), '{amandum est} (sem sujeito expresso)', T('«debe ser amado»')],
        [T('impersonal con dativo'), '{mihi legenda est}', T('«tengo que leer»')],
        [T('personal'), '{liber legendus est}', T('«el libro debe ser leído»')],
        [T('personal sin essere'), '{nōn est tibi currere}', T('«no tienes por qué correr»')],
      ],
    },
  ],
};
