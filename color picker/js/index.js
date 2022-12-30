import { Color } from "./colors.js";
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const createBtn = document.getElementById("createBtn");
const bgcBtn = document.getElementById("bgcBtn");
const recent = document.getElementById("pickedColors");
const prefered = document.getElementById("preferedColors");
const c = new Color(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
let mArr = [];
let colorDivsArr = [];
function rgbColor() {
    const c = new Color(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const rgbColor = c.rgb();
    return rgbColor;
}
//Background Color Creator
bgcBtn.addEventListener("click", () => {
    document.body.style.background = rgbColor();
});
const allInputs = [redInput, greenInput, blueInput];
//Create Color area
let b = createBtn.addEventListener("click", () => {
    const c = new Color(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const hexClr = c.hex();
    const rgbClr = c.rgb();
    let сolorDiv = document.createElement("div");
    let a = (сolorDiv.style.backgroundColor = rgbColor());
    сolorDiv.style.width = "150px";
    сolorDiv.style.height = "150px";
    сolorDiv.style.margin = "10px";
    сolorDiv.style.textAlign = "center";
    сolorDiv.style.borderRadius = "10%";
    сolorDiv.style.backgroundColor = a;
    сolorDiv.innerHTML = `<span id=${c.timeStamp} class="star">★</span><br><div>${rgbClr}<br>${hexClr}<br></div><span class="del" id=del>&#215;</span>`;
    recent.appendChild(сolorDiv);
    colorDivsArr.push(сolorDiv);
    mArr.push(c);
    colorDivsArr.forEach((d) => {
        let del = d.querySelector(".del");
        del.addEventListener("click", () => {
            d.remove();
        });
    });
    let svgElem = document.querySelectorAll(".star");
    svgElem.forEach((el) => {
        el.addEventListener("click", (e) => {
            if (el.outerHTML == el.closest(".star")?.outerHTML) {
                let prefColorDiv = document.createElement("div");
                prefColorDiv.style.width = "150px";
                prefColorDiv.style.height = "150px";
                prefColorDiv.style.margin = "10px";
                prefColorDiv.style.textAlign = "center";
                prefColorDiv.style.borderRadius = "10%";
                prefColorDiv.style.backgroundColor = a;
                prefColorDiv.innerHTML = rgbClr + "<br>" + hexClr;
                prefered.appendChild(prefColorDiv);
                prefColorDiv.addEventListener("click", () => {
                    prefColorDiv.remove();
                    let index = mArr.findIndex((b) => b.timeStamp === c.timeStamp);
                    mArr.splice(index, 1);
                });
            }
        });
    });
});
