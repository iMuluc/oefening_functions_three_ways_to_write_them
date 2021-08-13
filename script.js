// Function declaration
const x = function (getal1, getal2) {
    let sum = getal1 * getal1 + getal2 * getal2;
    let antwoord = sum * sum;
    return antwoord;
};
console.log(x(2, 2));

console.log("");

// Function expression
function y(getal3, getal4) {
    let sum2 = getal3 * getal3 + getal4 * getal4;
    let antwoord2 = sum2 * sum2;
    return antwoord2;
};
console.log(y(2, 2));

console.log("");

// Arrow function
const z = (getal5, getal6) => {
    let sum3 = getal5 * getal5 + getal6 * getal6;
    let antwoord3 = sum3 * sum3;
    return antwoord3;
};
console.log(z(2, 2));