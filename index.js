const eles = document.querySelectorAll("dt > h3");
Array.from(eles).map(item => {
  item.addEventListener(
    "click",
    function(e) {
      if (!document.body.classList.contains("dark")) {
        return;
      }
      const target = e.target || e.srcElement;
      const child = target.parentNode.nextElementSibling;
      target.remove();
      child.remove();
    },
    false
  );
});

Array.from(document.querySelectorAll("a")).map(item => {
  item.addEventListener(
    "click",
    function(e) {
      const target = e.target || e.srcElement;
      if (!document.body.classList.contains("dark")) {
        target.setAttribute("target", "_blank");
        return true;
      } else {
        e.preventDefault();
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
    var blob = new Blob([shallow.innerHTML]);
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
