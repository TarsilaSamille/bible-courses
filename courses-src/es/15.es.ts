import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Los verbos irregulares'),
  subtitle: T('tener, decir, ir — los gigantes'),
  section: T('Los verbos'),
  body: C(`## Radicales totalmente nuevos

El yo de ciertos verbos cambia la terminación por {-go}: {tengo} «tengo» · {digo} «digo» · {vengo} «vengo» · {salgo} «salgo» · {pongo} «pongo» · {hago} «hago» · {oigo} «oigo» · {pido} «pido».

## Cambios vocálicos (presente)

**-e → -ie** (verbos con el radical acentuado, solo en el singular y en la 3.ª persona): {pienso} «pienso» · {quiero} «quiero» · {viene} «viene» · {miento} «miento». Pero **nosotros y vosotros conservan**: {pensamos}, {queremos} — esa excepción los delata.

**-o → -ue**: {puedo} «puedo» · {duermo} «duermo» · {vuelvo} «vuelvo» · {muero} «muero» · {recuerdo} «recuerdo».

**-e → -i** (solo en los verbos de {-ir}): {pido} «pido» · {sirvo} «sirvo» · {sigo} «sigo».

## Los tres gigantes

• {ser}: {soy}, {eres}, {es}, {somos}, {sois}, {son}
• {ir}: {voy}, {vas}, {va}, {vamos}, {vais}, {van} — ¡{vamos} es idéntico al de {ser}!
• {haber} (auxiliar): {he}, {has}, {ha}, {hemos}, {habéis}, {han} — {he orado} «he orado» (perfecto, cap. 15).

## Verbos vitales para el Nuevo Testamento

{tener} → {tengo} · {hacer} → {hago} · {decir} → {digo} · {poder} → {puedo} · {saber} → {se} · {querer} → {quiero} · {dar} → {doy} · {ver} → {veo} · {venir} → {vengo}.

Ej.: {Todo lo puedo en Cristo} «todo lo puedo en Cristo» (Fil 4.13).`),
  vocab: [
    V('tengo', 'tener', 'tengo (¡-go!)'),
    V('digo', 'decir', 'digo (¡-go!)'),
    V('quiero', 'querer', 'quiero (¡e→ie!)'),
    V('puedo', 'poder', 'puedo (¡o→ue!)'),
    V('pido', 'pedir', 'pido (¡e→i!)'),
    V('voy', 'ir', 'voy'),
    V('he orado', 'orar', 'he orado'),
    V('hago', 'hacer', 'hago (¡-go!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «pensamos» no se convierte en «piensamos»?'),
    options: [
      T('Error'),
      T('Nosotros/vosotros CONSERVAN la vocal (¡solo el singular y la 3.ª cambian!)'),
      T('Es regular'),
      T('Futuro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «yo ___ (decir)» «digo»'),
      answer: 'digo',
      hint: T('Regla §1: la primera persona cambia a -go.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo hace o→ue en el presente?'),
      options: [
        T('{pedir} → {pido}'),
        T('{dormir} → {duermo}'),
        T('{seguir} → {sigo}'),
        T('{tener} → {tengo}'),
      ],
      answer: 1,
      hint: T('Regla §2: la -o del radical pasa a -ue.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su irregular del presente'),
      pairs: [
        { a: T('{ir}'), b: T('{voy}') },
        { a: T('{haber}'), b: T('{he}') },
        { a: T('{querer}'), b: T('{quiero}') },
        { a: T('{venir}'), b: T('{vengo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Primera persona con -go: tengo, digo, vengo, salgo, pongo, hago, oigo.') },
    {
      n: '2',
      text: T(
        'Los cambios e→ie y o→ue solo ocurren en el singular y la 3.ª persona: hablamos, no hablo.',
      ),
    },
    { n: '3', text: T('El cambio e→i solo existe en los verbos de -ir: pido, sirvo, sigo.') },
  ],
  notes: [
    {
      label: T('La i es el único sitio'),
      text: T(
        'Los verbos irregulares cambian solo en la raíz, nunca en las terminaciones: {tuve} + {tuviste}, {tuviste} + {tuve}. No hace falta memorizar el verbo entero, solo la raíz y el presente irregular.',
      ),
    },
  ],
  examples: [
    { text: '{tengo}', gloss: T('Tengo (radical nuevo: -go).') },
    { text: '{puedo}', gloss: T('Puedo (o→ue).') },
    { text: '{pido}', gloss: T('Pido (e→i).') },
    { text: '{he orado}', gloss: T('He orado (auxiliar haber).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los tres cambios'),
      head: [T('Cambio'), T('Ejemplos'), T('Excepción')],
      rows: [
        ['-e → -ie', '{pienso}, {quiero}, {viene}', '{pensamos}, {queremos}'],
        ['-o → -ue', '{puedo}, {duermo}, {vuelvo}', '{podemos}, {dormimos}'],
        ['-e → -i', '{pido}, {sirvo}, {sigo}', T('solo en -ir')],
        ['-ir → -go', '{tengo}, {digo}, {vengo}', T('solo el yo')],
      ],
    },
    {
      caption: T('Tabla 2 — Los gigantes irregulares'),
      head: [T('Verbo'), T('Presente'), T('Nota')],
      rows: [
        ['{ser}', '{soy}, {eres}, {es}, {somos}, {sois}, {son}', T('ser')],
        ['{ir}', '{voy}, {vas}, {va}, {vamos}, {vais}, {van}', T('¡{vamos} = {somos}!')],
        ['{haber}', '{he}, {has}, {ha}, {hemos}, {habéis}, {han}', T('auxiliar y «tener»')],
        ['{estar}', '{estoy}, {estás}, {está}, {estamos}, {estáis}, {están}', T('verbo de estado')],
      ],
    },
  ],
};
