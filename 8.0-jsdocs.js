// copied from jsdoc.app/about-getting-started.html

/** This function computes the amount of foo available in the system */
function foo() {
    // todo write me
}

/** A Rectangle has 2 sides of length 'height' and 2 sides of width 'width' */
class Rectangle {

    /**
     * Create a Rectangle
     * @param {number} height - Height of the Rectangle
     * @param {number} width - Width of the Rectangle
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    /**
     * Get the area of this rectangle
     * @return {number} the area
     */
    get area() {
        return calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}