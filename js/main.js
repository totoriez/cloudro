const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const domaintag = document.querySelectorAll(".domain__tag");
for (let i = 0;i < domaintag.length; i++) {
  domaintag[i].onclick = function() {
    for (let i = 0;i < domaintag.length; i++) {
      domaintag[i].classList.remove("badge","badge--secondary");
    } 
    this.classList.add("badge","badge--secondary");
  }
}
