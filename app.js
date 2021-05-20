// A) Convert to Celsius Function

const convertFahrToCelsius = function (f) {
    let celsius = (5/9) * (f - 32);

    if (isNaN(f) || typeof f === "boolean") {
        return `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}`;
    } else if (Array.isArray(f)) {
        return `${JSON.stringify(f)}  is not a valid number but a/an array`;
    } else {
        return celsius.toFixed(4);
    }
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius("go"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));



// B) checkYuGiOh function

const checkYuGiOh = function (n) {
    let array = [];

    for (let i = 1; i <= n; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            array.push("yu-gi");
        } else if (i % 2 === 0 && i % 5 === 0) {
            array.push("yu-oh");
        } else if (i % 2 === 0) {
            array.push("yu");
        } else if (i % 3 === 0) {
            array.push("gi");
        } else if (i % 5 === 0) {
            array.push("oh");
        } else {
            array.push(i);
        }
    }

    return array;
}

console.log(checkYuGiOh(2));
console.log(checkYuGiOh(3));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(12));
console.log(checkYuGiOh(30));