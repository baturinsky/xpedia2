import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import open from "open";
import { copyFile } from 'node:fs/promises';

let options = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  sourcemap: true,
  outfile: "./xpedia.js",
  minify: false,
  plugins: [
    esbuildSvelte({
      compilerOptions:{ css: true },
      preprocess: sveltePreprocess()
    }),
  ],
};

let builder;
let keys = new Set(process.argv.filter(k=>k.substring(0,2)=="--").map(k=>k.substring(2)));
if (keys.has("serve")) {
  builder = esbuild.serve(
    {
      servedir: "..",
      port: 3100,
      onRequest: (r) => {
        console.log(r);
      }
    }, {...options, watch:false})
} else if(keys.has("minify")){
  builder = esbuild.build({...options, minify: true});
} else {
  builder = esbuild.build(options);
}

builder
  .catch(error => {
    console.error(error);
    process.exit(1)
  })
  .then(result => {
    console.log(result);
    //copyFile('xpedia.js', 'resources/js/xpedia.js');
    if (keys.has("serve"))
      open("http://localhost:3100/xpedia2/")
  });


