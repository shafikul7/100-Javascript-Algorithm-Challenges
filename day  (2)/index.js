function sum(input1,input2) {
return input1 + input2;
}

console.log(sum(21,22))

function totalsum(...params1){
     let sum = 0;
params1.forEach((element)=>{
   sum += element;

})
return sum;
}
console.log(totalsum(1,2,3,4,5,6,7,8,9,10))