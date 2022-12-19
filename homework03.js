function createText(strings) {
    let text = "";
    for (let i = 0; i < strings.length; i++) {
        text += strings[i] + " ";
    }
    return text;
}


let strings = ["Hello", "there", "students", "of", "SEDC", "!"];

//1
console.log(createText(strings));

//2
let result = createText(strings);
console.log(result);