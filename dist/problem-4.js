"use strict";
{
    const calculateShapeArea = ({ shape, radius, width, height }) => {
        let calculate = 0;
        if (shape === "circle") {
            if (radius !== undefined) {
                // circle = πr2
                const π = 3.1416;
                calculate = π * radius * radius;
            }
        }
        if (shape === "rectangle") {
            if (width !== undefined && height !== undefined) {
                // rectangle = width*height 
                calculate = width * height;
            }
        }
        return calculate;
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea);
    console.log(rectangleArea);
    //
}
