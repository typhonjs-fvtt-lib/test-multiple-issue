import resolve             from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import svelte              from 'rollup-plugin-svelte';

// Generate two separate Svelte app bundles.
export default () =>
{
   return [
      {
         input: 'src/app1/App.js',
         output: {
            file: 'public/App1.js',
            format: 'es',
         },
         plugins: [
            svelte({ include: 'src/app1/**/*.svelte' }),
            resolve({ browser: true, dedupe: ['svelte'] }),
         ]
      },
      {
         input: 'src/app2/App.js',
         output: {
            file: 'public/App2.js',
            format: 'es',
         },
         plugins: [
            svelte({ include: 'src/app2/**/*.svelte' }),
            resolve({ browser: true, dedupe: ['svelte'] }),
         ]
      }
   ];
};
