const list = [1,2,3,4,5,6,7,8,9,10];
target = 7;

function linearSearch (array, target){
    let finalTarget = -1;
    for(i = 0; i < array.length; i++){
        if(array[i] === target){
            finalTarget = list[i];
        } 
    }
    return finalTarget;
}

console.log(linearSearch(list, target));
