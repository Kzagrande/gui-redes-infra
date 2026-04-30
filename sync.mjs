import { watch } from 'fs';
import { execSync } from 'child_process';
import { existsSync } from 'fs';

const DEBOUNCE_MS = 3000;
let timer = null;

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', cwd: import.meta.dirname }).trim();
}

function sync() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    try {
      run('git add -A');
      const staged = run('git diff --cached --name-only');
      if (!staged) return;

      const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      run(`git commit -m "auto: ${date}"`);
      run('git push');
      console.log(`✓ [${date}] Sincronizado com GitHub (${staged.split('\n').length} arquivo(s))`);
    } catch (e) {
      console.error('✗ Erro ao sincronizar:', e.message.split('\n')[0]);
    }
  }, DEBOUNCE_MS);
}

const targets = ['src', 'public', 'astro.config.mjs', 'package.json', 'tsconfig.json'];

for (const target of targets) {
  if (existsSync(target)) {
    watch(target, { recursive: true }, (event, filename) => {
      if (filename && !filename.includes('node_modules')) {
        console.log(`~ Mudança detectada: ${filename}`);
        sync();
      }
    });
  }
}

console.log('👀 Monitorando mudanças... Push automático em 3s após cada alteração. Ctrl+C para parar.\n');
