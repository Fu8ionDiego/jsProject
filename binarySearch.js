const list = [1,2,3,4,5,6,7,8,9,10];
let target = 4;

let left = 0;
let right = list.length -1;
let mid = Math.floor(right/2);

function returTarget(){
if (target === mid){
    return mid;
} else {
    for(i = mid; i < list.length; i++){
        if(list[i] === target){
            return target;
        }
    }
    for(i = left; i < mid; i++){
        if(list[i] === target){
            return target;
        }
    }
} 
return -1

}
returTarget();