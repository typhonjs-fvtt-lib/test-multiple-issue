import css     from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import svelte  from 'rollup-plugin-svelte';

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
            css({ output: 'app1.css'}),
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
            css({ output: 'app2.css'}),
            resolve({ browser: true, dedupe: ['svelte'] }),
         ]
      }
   ];
};
