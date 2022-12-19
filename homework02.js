function findSum(arr) {
    let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    return sum;
}

function findSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
        validateNumber(arr[i]);//2
        sum += arr[i]; // sum = sum + arr[i];
  } 
  alert(sum);
}  


function validateNumber(number) {
    let test = isNaN(number); //true ako ne e broj
    if(test) {
        console.log("Not a number");
    }
}

let arr = [2, 3, 1, 12, 5];
findSum(arr);