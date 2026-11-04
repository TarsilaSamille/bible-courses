import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Pronombres y posesivos'),
  subtitle: T('εγώ — μου, σου, του'),
  section: T('El nombre'),
  body: C(`## El verbo ya dice quién

En griego el pronombre sujeto casi siempre se omite, porque la forma verbal ya lleva la persona: λέω «digo», λέεις «dices», λέει «dice». El griego solo muestra el pronombre cuando la persona tiene que destacarse: **ἐγώ** πολυ ἀγαπῶ «yo amo mucho», en contraste con quien no ama.

Los pronombres personales son: ἐγώ, σύ, αὐτός/αὐτή/αὐτό, ἡμεῖς, ὑμεῖς, αὐτοί/αὐτές/αὐτά. En griego moderno, σύ y αὐτός son raros en el habla; lo coloquial usa ένας/μία («alguien») o solo el verbo. Pero en la escritura y en el griego bíblico aparecen todos.

## Los posesivos son enclíticos, no palabras sueltas

μου, σου, του, μας, σας, τους no son palabras: se pegan al final de la palabra anterior. **το παιδί μου** «mi hijo»: μου va pegado al sustantivo. **δώσε μου** «dame»: pegado al verbo. Si la palabra siguiente empieza por vocal, el acento se desplaza: μου τοῦ παιδίο.

El griego antiguo es distinto: ἡμῶν, σοῦ, αὐτοῦ, ἡμῶν, ὑμῶν, αὐτῶν son palabras completas, y por eso pueden ir antes del sustantivo — Πάτερ ἡμῶν «Padre nuestro». En griego moderno esa construcción suena bíblica o litúrgica, y por eso aparece en la oración y no en la conversación.

## Objeto indirecto y directo

El objeto indirecto usa με, σε, μας, σας: Μου λες την αλήθεια «me dices la verdad». El objeto directo usa τον, την, το, τους, τις, τα: Βλέπω τον φίλο «veo al amigo». Los dos juntos: **μου** το δίνεις «me lo das»: el indirecto (μου) va antes del directo (το), porque el indirecto es enclítico y ocupa el primer hueco disponible.

## Criterio de lectura

Si una frase griega lleva pronombre sujeto explícito, o la persona está en contraste o la forma verbal no deja duda. Si lleva pronombre posesivo al final, ese pronombre pertenece a la palabra anterior. Y si dos traducciones colocan el pronombre en sitios distintos, es por el orden enclítico, no por un error.`),
  vocab: [
    V('εγώ', 'εγώ', 'yo'),
    V('εσύ', 'εσύ', 'tú'),
    V('μου', 'εγώ', 'mi; a mí'),
    V('σου', 'εσύ', 'tu; a ti'),
    V('μας', 'εμείς', 'nuestro; a nosotros'),
    V('του', 'αυτός', 'su; a él'),
    V('τη', 'αυτός', 'la; a ella'),
    V('με', 'εγώ', 'me; a mí'),
    V('εμείς', 'εμείς', 'nosotros'),
    V('εσείς', 'εσείς', 'vosotros'),
    V('σας', 'εσείς', 'su; a ustedes'),
    V('τους', 'αυτός', 'de ellos; los (artículo masc. pl.)'),
    V('αλήθεια', 'αλήθεια', 'verdad'),
    V('φίλος', 'φίλος', 'amigo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Dónde va μου?'),
    options: [
      T('antes del nombre'),
      T('después del nombre'),
      T('antes del verbo'),
      T('solo al final'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('___ γυναίκα'), answer: 'μου', hint: T('posesivo de εγώ') },
    {
      kind: 'choose',
      prompt: T('Completa: ___ dice la verdad.'),
      options: [T('μou'), T('σε'), T('τον'), T('τη')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relacionar pronombre y persona'),
      pairs: [
        { a: 'εγώ', b: '1ª sg.' },
        { a: 'εσείς', b: '2ª pl.' },
        { a: 'αυτός', b: '3ª sg.' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('El posesivo sigue al sustantivo en el uso moderno corriente.') }],
  notes: [
    {
      label: T('Registro'),
      text: T('Πάτερ ημών pertenece al registro elevado de la oración; no es la forma cotidiana.'),
    },
  ],
  examples: [
    { text: 'ο πατέρας μου', gloss: T('mi padre') },
    { text: 'σε αγαπώ', gloss: T('te amo') },
  ],
  tables: [
    {
      caption: T('Pronombres'),
      head: ['Singular', 'Plural'],
      rows: [
        ['αυτός/αυτή/αυτό', 'αυτοί/αυτές/αυτά'],
        ['του/της/τους', 'τους/των/τους'],
      ],
    },
  ],
};
