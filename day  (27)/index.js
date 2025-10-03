// clone an array
// arr([1,1]) -> [1,1,[1,1]]

const CloneArray =(arr)=>[...arr,arr];
console.log(CloneArray([1,11,7,9]))