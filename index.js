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

document.querySelector(".export").addEventListener(
  "click",
  () => {
    var aTag = document.createElement("a");
    var blob = new Blob([document.documentElement.innerHTML]);
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
