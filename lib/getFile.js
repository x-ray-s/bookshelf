const path = require("path");
const glob = require("glob");

module.exports = function() {
  let file;
  if (process.argv && process.argv.length >= 3) {
    file = path.resolve(process.cwd(), process.argv[2]);
  } else {
    const exist = glob.sync("../bookmarks_*.html", {
      cwd: __dirname
    });
    if (exist.length) {
      file = exist[0];
    }
  }
  return path.resolve(__dirname, file);
};
