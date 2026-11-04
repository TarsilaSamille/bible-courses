// check-integrity.mts — manifesto do repo de cursos bate com disquetes files.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const DIR = join(import.meta.dir, '..');
const manifest = JSON.parse(readFileSync(join(DIR, 'manifest.json'), 'utf8'));
const noDisco = new Set(readdirSync(join(DIR, 'courses')).map((f) => `courses/${f}`));
let erros = 0;

for (const c of manifest.courses) {
  const caminho = join(DIR, c.file);
  try {
    const buf = readFileSync(caminho);
    const sha = createHash('sha256').update(buf).digest('hex').slice(0, 16);
    if (sha !== c.sha256) {
      erros++;
      console.log(`${c.file}: sha256 ${sha} != ${c.sha256}`);
    }
    if (buf.length !== c.bytes) {
      erros++;
      console.log(`${c.file}: bytes ${buf.length} != ${c.bytes}`);
    }
    const curso = JSON.parse(buf.toString('utf8'));
    if (curso.lessons.length !== c.lessons) {
      erros++;
      console.log(`${c.file}: ${curso.lessons.length} lições != ${c.lessons}`);
    }
    noDisco.delete(c.file);
  } catch {
    erros++;
    console.log(`${c.file}: arquivo ausente`);
  }
}
for (const f of noDisco) {
  erros++;
  console.log(`${f}: fora do manifesto`);
}
if (erros) {
  console.log(`${erros} problema(s)`);
  process.exit(1);
}
console.log('manifesto íntegro: hash/bytes/lições batem para todos os cursos.');
