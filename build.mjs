import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import open from "open";

esbuild
  .serve(
    {
      servedir: "..",
      port: 8200,
      onRequest:(r)=>{
        console.log(r);
      }
    },
    {
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
    })
  .catch(error => {
    console.error(error);
    process.exit(1)
  })
  .then(result=>{
    console.log(result);
    open("http://localhost:8200/xpedia2/")
  });