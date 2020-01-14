#!/usr/bin/env node
const fs = require("fs");
const shell = require("shelljs");
const path = require("path");
const glob = require("glob");
let file;

if (process.argv && process.argv.length >= 3) {
  file = path.resolve(process.cwd(), process.argv[2]);
} else {
  const exist = glob.sync("./bookmarks_*.html");
  if (exist.length) {
    file = exist[0];
  }
}

let data = fs.readFileSync(file, "utf8");
data = data
  .replace(/\<p\>/gi, "")
  .replace(/\<\/a\>/gi, "</A></DT>")
  .replace(/\<\/h3\>/gi, "</H3></DT>")
  .replace(/\<\!DOCTYPE[^>]+>/gi, "")
  .replace(/\<META[^>]+>/gi, "")
  .replace(/<TITLE>.+<\/TITLE>/gi, "")
  .replace(/<h1>.+<\/h1>/gi, "");

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

fs.writeFileSync("./index.html", template);
shell.exec("npm run dev");
