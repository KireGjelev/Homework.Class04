function sumMaxMin(numbers) {
    let max = -Infinity; //-99999
    let min = +Infinity; // +99999
    for (let i = 0; i<numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }

        if(numbers[i] < min) {
            min = numbers[i];
        }
    }
    let sum = max + min;
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Sum of max and min: " + sum);
}

let numbers = [3,5,6,8,11];
sumMaxMin(numbers);