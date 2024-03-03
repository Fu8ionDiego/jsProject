const numbers = [1,2,3,4,5,7,8,9,10,11,12];
const primeNumbers = [];

for(i = 0; i < numbers.length; i++){
    if(numbers[i] === 2){
        primeNumbers.push(2);
    } else if (!(numbers[i]%2 == 0 && numbers[i] !== 2) && (numbers[i] !== 1)){
        primeNumbers.push(numbers[i]);
    }
}

for(i = 0; i < primeNumbers.length; i++){
    console.log(primeNumbers[i])
}