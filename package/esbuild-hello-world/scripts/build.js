import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'public/main.js',
    tsconfig: 'tsconfig.json',
    plugins: [pnpPlugin()],
  })
  .catch(() => process.exit(1));
