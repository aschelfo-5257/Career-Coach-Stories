const javascriptNeedsCommonWeb = (Node) => {
  if (Node === "http") {
    return true;
  } else {
    return false;
  }
};
javascriptNeedsCommonWeb("http");

console.log(javascriptNeedsCommonWeb("http"));

let rectangleLength = 10;
let rectangleWidth = 5;
let area = calculateRectangleArea(rectangleLength, rectangleWidth);
console.log(`The area of a rectangle with length ${rectangleLength} and width ${rectangleWidth} is: ${area}`);
