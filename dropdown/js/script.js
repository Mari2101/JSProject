import cities from "../cities.json" assert { type: "json" };
let ulList = document.getElementById("ulList");
let navmenu = document.getElementById("navmenu");
let dropbtn = document.getElementById("dropBtn");
let inputCity = document.getElementById("inputCity");
let showAll = document.getElementById("myDropdown");
/* const obj = JSON.parse(cities); */
let listOfCities = cities.map(function (list) {
  let li = document.createElement("li");
  li.innerHTML = `${list.name}`;
  li.classList = "listItem";
  ulList.appendChild(li);
});

showAll.addEventListener("click", () => {
  ulList.style.display = "block";
});
//dropdown

dropbtn.addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// input
inputCity.addEventListener("input", () => {
  ulList.style.display = "block";
  let filter, li, i;
  filter = inputCity.value.toUpperCase();
  li = ulList.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  // Mari es adgili shevcvale mxolod, txtValue-s magivrad chavsvi inputCity.value, txtValue-s iyenebdi mxolod for loopshi da magis garet ver xedavda magis mnishvnelobas.
  if (inputCity.value == "") {
    ulList.style.display = "none";
  }
});

var section = document.getElementById("content");

let body = document.querySelector("body");
let arr = [];
body.addEventListener("click", function (e) {
  let el = e.target.closest(".listItem");
  if (el) {
    let elem = el.innerText;
    arr.push(elem);
    let sorted = arr.sort();
    section.innerHTML = null;
    sorted.forEach((e) => {
      section.innerHTML += `${e}  <br>`;
    });
    /* let sectionUnsort = (section.innerHTML += `${elem} <br/>`);
     sectionUnsort.sort(); */
  }
});
/* ul.forEach(() => {}).addEventListener("click", function (e) {
  let el = e.target.closest(ul);
  let value = el.value;
  console.log("Clicked index: " + value);
}); */

/* let listItem = document.querySelectorAll(".listItem");

listItem.addEventListener("click", () => {
  let listItem = document.querySelectorAll(".listItem");

  let arrOfDivs = [];
  listItem = e.target.closest(listItem);
  if (listItem) {
    arrOfDivs.push(listItem);
    console.log(arrOfDivs);
  }
}); */

// следующий шаг:
/* -	בעט לחיצה על אחת הערים, האפליקציה תציג מתחת לחלון ניווט את שם העיר הנבחר. 
-	בלחיצה על כפתור האפליקציה תציג את כל הערים אשר שמורות במערכת. 
o	ההצגה כמובן תהיה לפי אותיות האלף בית
 */
