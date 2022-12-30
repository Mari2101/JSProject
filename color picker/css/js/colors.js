import { Utils } from "./utils.js";
export class Color {
    // props:
    r;
    g;
    b;
    timeStamp;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.timeStamp = Utils.currentDateString();
    }
    //methods:
    hex() {
        const redHex = this.r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
        const greenHex = this.g.toString(16).padStart(2, "0");
        const blueHex = this.b.toString(16).padStart(2, "0");
        const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
        return hexColor;
    }
    //methods:
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
