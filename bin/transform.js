#!/usr/bin/env node
const fs = require("fs");
const shell = require("shelljs");
const getFile = require("../lib/getFile");

(async function () {
  let file = await getFile();
  console.log(file);
  let data = fs.readFileSync(file, "utf8");
  data = data
    .replace(/\<\!DOCTYPE[^>]+>/gi, "")
    .replace(/\<META[^>]+>/gi, "")
    .replace(/<TITLE>.+<\/TITLE>/gi, "")
    .replace(/<h1>.+<\/h1>/gi, "")
    .replace(/<DL><p>/gi, "<dir>")
    .replace(/<DT><H3[^>]+>(.+)<\/H3>/gi, "<name>$1</name>")
    .replace(/<DT><A([^>]+)>(.+)<\/A>/gi, "<item$1><inline>$2</inline></item>")
    .replace(/<\/DL><p>/gi, "</dir>");

  const template = `
    <!DOCTYPE html>
    <html lang="zh-cn">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>书签编辑器</title>
      <link rel="stylesheet" href="./index.pcss"/>
    </head>
    <body>
      <div class="mode">
        <div class="export">📥</div>
        <div class="delete">🗑</div>
      </div>
      <div id="app">${data}</div>
      <script src="./index.js"></script>
    </body>
    </html>
  `;

  fs.writeFileSync("./src/index.html", template);
  shell.exec("npm run dev");
})();
