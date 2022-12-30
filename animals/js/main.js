import { Utils } from "./utils.js";
import { animalArray } from "./runners.js";
const animalShowCase = document.getElementById("animal-show-case");
const btnStart = document.getElementById("btn-start");
let id;
let chooseAnim = document.getElementById("choose-p");
let randomChoose = document.getElementById("random-btn");
function resetGame() {
    return document.location.reload();
}
btnStart.addEventListener("click", () => {
    chooseAnim.classList.remove("d-none");
    randomChoose.classList.remove("d-none");
    animalShowCase.classList.remove("d-none");
    setTimeout(() => {
        btnStart.innerText = "Restart";
        btnStart.style.marginTop = "10px";
    }, 10);
    if ((btnStart.innerText = "Restart")) {
        btnStart.addEventListener("click", () => {
            resetGame();
        });
    }
});
//randomly chosen animal
randomChoose.addEventListener("click", () => {
    randomChoose.style.visibility = "hidden";
    //remove chosen from all animals
    animalArray.forEach((a) => {
        a.isChosen = false;
        a.translateX = 0;
    });
    //remove the border from all img tags
    //select all img tags in the document
    document
        .querySelectorAll("#animal-show-case img")
        .forEach((img) => img.classList.remove("chosen-animal"));
    const random = Utils.random(0, 4);
    const chosenAnimal = animalArray[random];
    chosenAnimal.isChosen = true;
    const img = document.getElementById(chosenAnimal.id);
    img.classList.add("chosen-animal");
    setTimeout(() => {
        const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
        audio.play();
        id = setInterval(() => {
            chosenAnimal.translateX += chosenAnimal.step * 5;
            img.style.transform = `translateX(${chosenAnimal.translateX}px)`;
            img.style.border = "3px dashed green";
            img.style.borderRadius = "50%";
            img.style.padding = "10px";
            if (img.getBoundingClientRect().x + chosenAnimal.step * 5 >
                document.body.getBoundingClientRect().width) {
                clearInterval(id);
                setTimeout(() => { }, 6000);
            }
        }, 1000);
    }, 1000);
});
/*  */
/*  */
/*  */
/*  */
/*  */
animalArray
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .map((animal) => {
    const image = document.createElement("img");
    image.src = `images/${animal.img}`;
    image.classList.add("row");
    image.id = animal.id;
    image.style.margin = "30px";
    image.addEventListener("click", () => {
        randomChoose.style.visibility = "hidden";
        animalArray.forEach((a) => {
            a.isChosen = false;
            a.translateX = 0;
        });
        //remove the border from all img tags
        //select all img tags in the document
        document
            .querySelectorAll("#animal-show-case img")
            .forEach((img) => img.classList.remove("chosen-animal"));
        const random = Utils.random(0, 4);
        //ИСПРАВИТЬ!!!!
        const chosenAnimal = animal;
        chosenAnimal.isChosen = true;
        let isChosen = (chosenAnimal.isChosen = true);
        const chosenAnimalImg = document.getElementById(chosenAnimal.id);
        chosenAnimalImg.classList.add("chosen-animal");
        chosenAnimalImg.style.border = "3px dashed green";
        chosenAnimalImg.style.borderRadius = "50%";
        chosenAnimalImg.style.padding = "10px";
        chosenAnimalImg.style.transition = ".2s";
        animalArray.forEach((animal) => {
            let animalImage = document.getElementById(animal.id);
            setTimeout(() => {
                const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
                audio.play();
                let id = setInterval(() => {
                    animal.translateX += animal.step * 5;
                    animalImage.style.transform = `translateX(${animal.translateX}px)`;
                    animalImage.style.padding = "10px";
                    animalImage.style.transition = ".2s";
                    if (animalImage.getBoundingClientRect().x + animal.step * 11 >=
                        document.body.getBoundingClientRect().width) {
                        animal.translateX =
                            document.body.getBoundingClientRect().width - animal.step * 5;
                        clearInterval(id);
                        clearTimeout(6000);
                        setTimeout(() => {
                            let winnerP = document.getElementById("winner");
                            if (chosenAnimal.id == "horse") {
                                winnerP.innerHTML = `You are the winner!`;
                            }
                            else {
                                winnerP.innerHTML = `You lose! Try again!`;
                            }
                        }, 5000);
                    }
                }, 1000);
            }, 1000);
        });
    });
    return image;
})
    .forEach((img) => {
    animalShowCase.appendChild(img);
});
