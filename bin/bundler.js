var SystemBuilder = require("systemjs-builder");
var argv = require("yargs").argv;
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

var builder = new SystemBuilder();

builder.loadConfig('./systemjs.config.js')
  .then(function(){
    var outputFile = argv.prod ? './public/js/bundle.min.js' : './public/js/bundle.js';
    return builder.buildStatic('app', outputFile, {
      minify: argv.prod,
      mangle: argv.prod,
      rollup: argv.prod
    });
  })
  .then(function() {

    const gzip = zlib.createGzip();

    const inp = fs.createReadStream(path.resolve(__dirname + '/../public/js/bundle.min.js'));
    const out = fs.createWriteStream(path.resolve(__dirname + '/../public/js/bundle.min.js.gz'));

    inp.pipe(gzip).pipe(out);

    console.log('bundle built successfully!');
  });
