import { exec } from 'child_process';
import fs from 'fs';

const pkgJsonPath: string = '../package.json';

try {
  const pkg: any = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  exec('git rev-parse --short HEAD', (err: Error | null, stdout: string) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    pkg.version = '0.0.0-beta.' + stdout.trim();
    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, '\t') + '\n');
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
