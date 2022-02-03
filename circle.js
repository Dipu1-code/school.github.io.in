// import using require

// import { Shape } from "./shape";
let Shape = require("./shape.js");

// declare class
class Circle extends Shape {
    constructor(color) {
        super();
    }

    calculateArea() {

    }
}
module.exports = Circle;
// export class using module.exports