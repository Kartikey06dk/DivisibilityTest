function isDivisibleBy30(A) {
    // return 1 or 0
    // do not console.log here
    // Check if the number is divisible by 2
    if (parseInt(A[A.length - 1]) % 2 !== 0) {
        return 0;
    }

    // Calculate the sum of digits
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += parseInt(A[i]);
    }

    // Check if the sum is divisible by 3
    if (sum % 3 !== 0) {
        return 0;
    }

    return 1;
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    //Exit Condition
    if (lineNumber == 0) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    //let n = parseInt(inputArr[0].trim());
    //let str1 = inputArr[1].trim();
    let str = inputArr[0].trim();
    console.log(isDivisibleBy30(str));
}
