function findEvenNumbers(arr){
 let evenNumbers = [];

 for(i=0;i<arr.length; i++){
    if(arr[i] % 2 === 0){
        evenNumbers.push(arr[i]);
    }
 }

 return evenNumbers;
}

let num = [2,3,6,5,8,10];

let evens = findEvenNumbers(num);
console.log("Even Numbers:", evens);