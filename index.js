const eles = document.querySelectorAll("name");
Array.from(eles).map(item => {
  item.addEventListener(
    "click",
    function(e) {
      if (!document.body.classList.contains("dark")) {
        return;
      }
      const target = e.target || e.srcElement;
      console.log(target);
      const child = target.nextElementSibling;
      target.remove();
      child.remove();
    },
    false
  );
});

Array.from(document.querySelectorAll("inline")).map(item => {
  item.addEventListener(
    "click",
    function(e) {
      const target = e.target || e.srcElement;
      if (!document.body.classList.contains("dark")) {
        var anchor = document.createElement("a");
        anchor.setAttribute("target", "_blank");
        anchor.href = target.href;
        anchor.click();
      } else {
        target.remove();
      }
    },
    false
  );
});

document.querySelector(".export").addEventListener(
  "click",
  () => {
    var aTag = document.createElement("a");
    var shallow = document.createElement("html");
    shallow.innerHTML = document.documentElement.innerHTML;
    shallow.querySelector("link").href = "./index.css";
    shallow.querySelector(".mode").remove();
    Array.from(shallow.querySelectorAll("script")).map(i => i.remove());
    const html = shallow.innerHTML
      .replace(/<dir>/gi, "<DL><p>")
      .replace(/<name>(.+)<\/name>/gi, "<DT><H3>$1</H3>")
      .replace(/<item([^>]+)>(.+)<\/item>/gi, "<DT><A$1>$2</A>")
      .replace(/<\/dir>/gi, "</DL><p>")
      .replace(/href=/g, "HREF=");
    var blob = new Blob([html]);
    aTag.download = "bookmark.html";
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
  },
  false
);

document.querySelector(".delete").addEventListener(
  "click",
  () => {
    document.body.classList.toggle("dark");
  },
  false
);
