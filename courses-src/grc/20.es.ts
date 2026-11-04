import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Líquidos y aoristo pasivo'),
  subtitle: T('ἤγγειλα, ἔμεινα — y el -θη- que vuelve pasivo todo verbo'),
  section: T('El verbo'),
  body: C(`## Líquidos: futuro sin sigma y aoristo

Los verbos de raíz líquida ({λ, μ, ν, ρ}) rechazan el futuro/aoristo {σ}: en lugar de eso, alargan la vocal de la raíz.{ἀγγέλλω} → futuro {ἀγγελῶ}, aoristo {ἤγγειλα};{μένω} → {μενῶ}, {ἔμεινα};{σπείρω} → {σπερῶ}, {ἔσπειρα};{κρίνω} → {κρινῶ}, {ἔκρινα};{ἀποστέλλω} → {ἀποστελῶ}, {ἀπέστειλα}.

El alargamiento sigue la receta: {ε} se convierte en {ει} ({στέλλω} → {ἔστειλα}), {α} se convierte en {η} ({φαίνω} → {ἔφηνα}).El futuro, sin σ que lo sostenga, se contrae como en el cap.17 ({μενῶ}).En lectura, futuro circunflejo + aoristo de vocal larga sin σ = verbo líquido.

## El aoristo pasivo -θη-

La voz pasiva aoristo usa el sufijo {-θη-} + terminaciones secundarias activas: {ἐλύθην, ἐλύθης, ἐλύθη, ἐλύθημεν, ἐλύθητε,ἐλύθησαν} "Me soltaron...".Sin sigma, sin kappa: {θ} es la firma.

El aoristo pasivo lleva los eventos teológicos centrales: {ἐγεννήθη} "nació" (toda la genealogía de Mateo 1), {ἐγράφη} "fue escrito" (Juan 20:31), {ἠγέρθη} "resucitó" (Mateo 28:6),{ἐσώθη} "fue salvo", {ἐβαπτίσθη} "fue bautizado" (Marcos 1:9).

El agente de la pasiva viene con {ὑπό} + genitivo: {ἐβαπτίσθη ὑπὸ Ἰωάννου} "fue bautizado por Juan".Sin agente expresado, el griego prefiere la pasiva donde el inglés usa "-self" o intransitivo: {ἠγέρθη} = "él se levantó / fue resucitado".

## El segundo aoristo pasivo (en -η-)

Algunos verbos hacen el aoristo pasivo sin {θ}, con {-η-} solo: {γράφω} → {ἐγράφην} "Fui escrito", {στέλλω} → {ἐστάλην} "Fui enviado", {χαίρω} →{ἐχάρην} "Me alegré", {σπείρω} → {ἐσπάρην} "Fui sembrado".Las terminaciones coinciden con el conjunto -θη-.

En la práctica, memorice las formas tal como vienen: {ἐγράφη} (Juan 20:31), {ἀπεστάλην} "fui enviado" (Juan 5:36), {ἐφάνη} "apareció" (de {φαίνω}, Marcos 16:12).Pocos formularios cubren casi todos los sucesos.`),
  vocab: [
    V('ἐλύθην', 'λύω', 'I was loosed'),
    V('ἐλύθη', 'λύω', 'he was loosed'),
    V('ἐλύθησαν', 'λύω', 'they were loosed'),
    V('ἤγγειλα', 'ἀγγέλλω', 'I announced'),
    V('ἔμεινα', 'μένω', 'I remained'),
    V('ἔσπειρα', 'σπείρω', 'I sowed'),
    V('ἔκρινα', 'κρίνω', 'I judged'),
    V('ἐγεννήθη', 'γεννάω', 'he was born'),
    V('ἐγράφη', 'γράφω', 'it was written'),
    V('ἠγέρθη', 'ἐγείρω', 'he rose'),
    V('ἐσώθη', 'σῴζω', 'he was saved'),
    V('ἐβαπτίσθη', 'βαπτίζω', 'he was baptized'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'he answered'),
    V('ἐφάνη', 'φαίνω', 'he appeared'),
    V('ὑπό', 'ὑπό', 'by (agent)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἐλύθησαν" es…'),
    options: [
      T('Aorist passive, 3rd pl.'),
      T('Active aorist, 3rd pl.'),
      T('Middle imperfect'),
      T('Active perfect'),
    ],
    answer: 0,
    hint: T('θ + terminaciones activas = pasiva — regla §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 3er singular: ἐλύ___ ("fue desatado").'),
      answer: 'θη',
      hint: T('Sufijo aoristo pasivo: -θη-.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἤγγειλα" carece de σ porque…'),
      options: [
        T('It is a liquid verb: it lengthens instead of sigmatizing'),
        T('It is 2nd aorist'),
        T('It is historical present'),
        T('It lost σ by error'),
      ],
      answer: 0,
      hint: T('Vástago λ: los líquidos se alargan — regla §1.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su voz/tiempo.'),
      pairs: [
        { a: 'ἔλυσα', b: 'aoristo ativo' },
        { a: 'ἐλύθην', b: 'aoristo passivo' },
        { a: 'ἐγράφη', b: 'passivo 2º' },
        { a: 'ἤγγειλα', b: 'aoristo líquido' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Líquidos (λ, μ, ν, ρ): sin σ;alargan la vocal (ε→ει, α→η);Futuro circunflejo contratado.',
      ),
    },
    {
      n: '2',
      text: T('Aoristo pasivo = raíz + θη + terminaciones secundarias activas.θ traiciona la voz.'),
    },
    {
      n: '3',
      text: T(
        'Agente pasivo: ὑπό + genitivo ({ὑπὸ Ἰωάννου}).Sin agente, traducido por contexto (a menudo reflexivo en inglés).',
      ),
    },
    {
      n: '4',
      text: T(
        '2do aoristo pasivo: desnudo -η-, no θ ({ἐγράφην}, {ἐστάλην}).Pocas formas, memorizar en bloque.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἠγέρθη} covers "he rose" and "he was raised": the ambiguity is theological, not grammatical — keep both.',
      ),
    },
  ],
  notes: [
    {
      label: T('Deponency:'),
      text: T(
        'Los verbos declarantes usan formas pasivas con sentido activo: {ἀπεκρίθη} "respondió", {ἐφοβήθη} "temió", {ἠρνήσατο} "negó".El aoristo pasivo es la puerta de entrada a la deponencia — cap.20 lo profundiza.',
      ),
    },
    {
      label: T('θ vs σ:'),
      text: T(
        '{ἐλύθην} (pasivo, con θ) vs {ἔλυσα} (activo, con σ): las dos consonantes dividen las voces del aoristo.Frente a θ + terminaciones activas, lee pasiva sin dudarlo.',
      ),
    },
  ],
  examples: [
    { text: '{ἠγέρθη ἀπὸ τῶν νεκρῶν}', gloss: T('he rose from the dead (Matt 28:6)') },
    { text: '{ἐγεννήθη ἐν Βηθλεέμ}', gloss: T('he was born in Bethlehem (Matt 2:1)') },
    { text: '{ἐγράφη εἰς μαρτυρίαν}', gloss: T('it was written for testimony (John 20:31)') },
    { text: '{ἐβαπτίσθη ὑπὸ Ἰωάννου}', gloss: T('he was baptized by John (Mark 1:9; ὑπό agent)') },
    { text: '{ἐσώθη ἀπὸ τῶν ἐχθρῶν}', gloss: T('he was saved from enemies') },
    { text: '{ἤγγειλαν αὐτοῖς}', gloss: T('they announced to them (liquid aorist)') },
    { text: '{ἔμεινεν μετ᾽ αὐτῶν}', gloss: T('he remained with them (John 1:39)') },
    { text: '{ἀπεστάλην}', gloss: T('I was sent (2nd passive; John 5:36)') },
    { text: '{ἐφάνη αὐτοῖς}', gloss: T('he appeared to them (Mark 16:12)') },
    { text: '{ἐσπάρη εἰς τὰς ἀκάνθας}', gloss: T('it was sown among thorns (Matt 13:7)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Aorist passive of λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{ἐλύθην}', 'fui libertado'],
        ['2ª sg.', '{ἐλύθης}', 'foste libertado'],
        ['3ª sg.', '{ἐλύθη}', 'foi libertado'],
        ['1ª pl.', '{ἐλύθημεν}', 'fomos libertados'],
        ['2ª pl.', '{ἐλύθητε}', 'fostes libertados'],
        ['3ª pl.', '{ἐλύθησαν}', 'foram libertados'],
      ],
    },
    {
      caption: T('Tabla 2 — Líquidos: alargamiento en futuro y aoristo'),
      head: [T('Presente'), T('Futuro'), T('Aoristo')],
      rows: [
        ['{ἀγγέλλω}', '{ἀγγελῶ}', '{ἤγγειλα}'],
        ['{μένω}', '{μενῶ}', '{ἔμεινα}'],
        ['{σπείρω}', '{σπερῶ}', '{ἔσπειρα}'],
        ['{κρίνω}', '{κρινῶ}', '{ἔκρινα}'],
        ['{ἀποστέλλω}', '{ἀποστελῶ}', '{ἀπέστειλα}'],
      ],
    },
    {
      caption: T('Tabla 3 — Segundo aoristo pasivo (sin θ)'),
      head: [T('Verbo'), T('Forma'), T('Sentido')],
      rows: [
        ['{γράφω}', '{ἐγράφην}', 'fui escrito'],
        ['{στέλλω}', '{ἐστάλην}', 'fui enviado'],
        ['{φαίνω}', '{ἐφάνη}', 'apareci'],
        ['{σπείρω}', '{ἐσπάρην}', 'fui semeado'],
        ['{χαίρω}', '{ἐχάρην}', 'alegrei-me'],
      ],
    },
  ],
};
