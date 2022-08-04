import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import open from "open";

let options = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  sourcemap: true,
  outfile: "./bundle.js",
  minify: false,
  plugins: [
    esbuildSvelte({
      preprocess: sveltePreprocess()
    }),
  ],
};

let builder;
let serve = process.argv[2] == "--serve";
if (serve) {
  builder = esbuild.serve(
    {
      servedir: "..",
      port: 3100,
      onRequest: (r) => {
        console.log(r);
      }
    }, options)
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
    if (serve)
      open("http://localhost:8200/xpedia2/")
  });


