//@ts-check

import { GIFEncoder, quantize, applyPalette } from './gifenc.esm.js';
import { palettes } from "./palettes.js"

export function initPedipal() {

  function unpackPalette(s) {
    return s.trim().split(/\n/g).map(line => line.split(" ").map(n => Number(n))).slice(3)
  }

  let pedipalName = "PAL_UFOPAEDIA_SAFE.pal";

  palettes.CPAL = `JASC-PAL
0100
256
156 148 188
124 120 148
 92  92 108
 60  60  68
 28  28  32
140 204 184
104 164 152
 72 124 120
 44  80  84
 20  40  44
176  11  21
176  11  21
252 252 164
220 232 140
192 212 120
164 192 104`;

  for (let k in palettes) {
    if(typeof palettes[k] == "string")
      palettes[k] = unpackPalette(palettes[k]);
  }

  function download(buf, filename, type) {
    const blob = buf instanceof Blob ? buf : new Blob([buf], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
  };

  const form = document.getElementById("my-form");
  let paletteSelect = document.getElementById("palette-select");
  if(!paletteSelect){
    form.insertAdjacentHTML("afterend", `<select name="palette-select" id="palette-select">${Object.keys(palettes).map(k => `<option ${k == pedipalName && "selected"} value="${k}">${k}</option>`)}</select>`)
    paletteSelect = document.getElementById("palette-select");
  }
  const inputs = document.getElementById("inputs");
  const results = document.getElementById("results");
  const dropArea = document.getElementById('drop-area');
  const downloadButton = document.getElementById('download');

  let files = [], urls = [];

  downloadButton.onclick = () => {
    let images = results.children;
    for (let i = 0; i < images.length; i++) {
      const anchor = document.createElement("a");
      anchor.href = urls[i];
      let name = files[i]?.name || "pedipal.gif";
      let pos = name.lastIndexOf(".");
      name = name.substr(0, pos < 0 ? name.length : pos) + ".gif";
      anchor.download = name;
      anchor.click();
    }
  }


  function hasTransparency(data) {
    let yes = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) {
        yes = true;
        break;
      }
    }
    return yes;
  }

  async function encode(img) {
    const gif = GIFEncoder();

    const image = imgData(img);
    const { width, height, data } = image;

    const format = "rgba565";

    let palette;

    let transparent = hasTransparency(data);

    palette = palettes[paletteSelect.value || pedipalName];

    if (palette.length < 256) {
      let newPalette = quantize(data, 256 - palette.length - 1, { format, clearAlpha: transparent, oneBitAlpha: transparent });
      palette = [[0, 0, 0], ...newPalette, ...palette]
    }
    const index = applyPalette(data, palette, format);

    for (let i = 0; i < index.length; i++) {
      if (data[i * 4 + 3] < 127)
        index[i] = 0;
    }

    // Write frame into GIF
    gif.writeFrame(index, width, height, { palette, transparent: transparent, transparentIndex: 0 });

    // Finalize stream
    gif.finish();

    // Get a direct typed array view into the buffer to avoid copying it
    const buffer = gif.bytesView();
    //download(buffer, 'animation.gif', { type: 'image/gif' });

    const blob = buffer instanceof Blob ? buffer : new Blob([buffer], { type: 'image/gif' });
    let rimg = document.createElement("img");
    results.appendChild(rimg);
    let url = URL.createObjectURL(blob);
    rimg.src = url;
    urls.push(url)
  }

  encodeAll();

  async function encodeAll() {
    results.innerHTML = "";
    let images = inputs.children;
    for (let img of images)
      encode(img);
  }

  function imgData(img) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    /**@type {HTMLImageElement} */
    canvas.width = img.width;
    canvas.height = img.height;
    /*context.fillStyle="#ff00ff";
    context.fillRect(0,0,canvas.width, canvas.height);*/
    context.drawImage(img, 0, 0);
    const myData = context.getImageData(0, 0, img.width, img.height);
    return { data: myData.data, width: canvas.width, height: canvas.height };
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    [dropArea, results].forEach(e => e.addEventListener(eventName, preventDefaults, false));
  })

  function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function addInput(file) {
    return new Promise(done => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function () {
        let img = document.createElement("img");
        img.src = reader.result;
        inputs.appendChild(img)
        done(img)
      }
    });
  }

  async function handleFiles(_files) {
    files = _files;
    urls = [];
    inputs.innerHTML = "";
    await Promise.allSettled(([...files]).map(f => addInput(f)));
    encodeAll();
  }


  paletteSelect.onchange = encodeAll;

  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files)
  }

  dropArea.addEventListener('drop', handleDrop, false);

  document.getElementById("fileElem").onchange = function () {
    handleFiles(this.files)
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.onpaste = function (event) {
      const files = getFilesFromPasteEvent(event);

      if (files.length > 0)
        handleFiles(files)
    }
  });

  function getFilesFromPasteEvent(event) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    let files = [];
    for (let index in items) {
      const item = items[index];
      if (item.kind === 'file') {
        files.push(item.getAsFile());
      }
    }
    return files;
  }
}