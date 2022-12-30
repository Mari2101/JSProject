const input = document.getElementById("input") as HTMLInputElement;
const inputTwo = document.getElementById("input2") as HTMLInputElement;
const unsortArr = document.getElementById("unsortArr") as HTMLDivElement;
const sortArr = document.getElementById("sortArr") as HTMLDivElement;
const add = document.getElementById("add") as HTMLButtonElement;
const rand = document.getElementById("rand") as HTMLButtonElement;
/* const addTwo = document.getElementById("add2") as HTMLButtonElement;
const randTwo = document.getElementById("rand2") as HTMLButtonElement; */
const sort = document.getElementById("sort") as HTMLButtonElement;
const clear = document.getElementById("clear") as HTMLButtonElement;
/* const clearTWo = document.getElementById("clear2") as HTMLButtonElement;
 */
let unsortedArray: Number[] = [];

add.addEventListener("click", () => {
  unsortedArray.push(Number(input.value));
  unsortArr.innerHTML = `${unsortedArray}`;
});

//random
function random(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}

rand.addEventListener("click", () => {
  unsortedArray.push(random(0, 100));

  unsortArr.innerHTML = `${unsortedArray}`;
});

clear.addEventListener("click", () => {
  let a: Number[] = [];
  unsortedArray = a;
  unsortArr.innerHTML = `${unsortedArray}`;
  sortArr.innerHTML = `${unsortedArray}`;
});

sort.addEventListener("click", () => {
  for (let j = 0; j < unsortedArray.length; j++) {
    for (let i = 0; i < unsortedArray.length - 1; i++) {
      if (unsortedArray[i] > unsortedArray[i + 1]) {
        //swap:
        let temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[i + 1];
        unsortedArray[i + 1] = temp;
      }
    }
  }
  sortArr.innerHTML = `${unsortedArray}`;
});

/* //sort by blocks
let sm: Number[] = [];
let md: Number[] = [];
let lg: Number[] = [];
let smId = document.getElementById("sm") as HTMLDivElement;
let mdId = document.getElementById("md") as HTMLDivElement;
let lgId = document.getElementById("lg") as HTMLDivElement;
let sortBlocks = document.getElementById("sortBlocks") as HTMLButtonElement;
sortBlocks.addEventListener("click", () => {
  unsortedArray.forEach((n) => {
    if (n >= 0 && n <= 30) {
      sm.push(n);
      for (let j = 0; j < sm.length; j++) {
        for (let i = 0; i < sm.length - 1; i++) {
          if (sm[i] > sm[i + 1]) {
            //swap:
            let temp = sm[i];
            sm[i] = sm[i + 1];
            sm[i + 1] = temp;
          }
        }
      }
      smId.innerText = `${sm}`;
    } else if (n >= 31 && n <= 60) {
      md.push(n);
      mdId.innerText = `${md}`;
    } else if (n >= 61 || n <= 100) {
      lg.push(n);
      console.log(sm);
    }
  });
});
 */
