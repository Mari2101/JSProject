import json_ar from "../json/vipList.json" assert { type: "json" };

let cont = document.getElementById("container");

let newElems = json_ar.map(function (list) {
  let a = `<div class="mycard card m-4" id="${list.image}">
  <img src="${list.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h4>${list.name}</h4>
    <p class="card-text">The Capital: ${list.worth}<br>The Source: ${list.source}</p>
  </div>
</div>`;
  return a;
});
cont.innerHTML = newElems;
let body = document.querySelector("body");
body.addEventListener("click", function (e) {
  let el = e.target.closest(".card");
  newElems = newElems.filter((val) => {
    let htmlElem = document.createElement("div");
    htmlElem.innerHTML = val;
    return htmlElem.firstChild.outerHTML !== el.outerHTML;
  });
  cont.innerHTML = newElems;
});
