// create a function to return the amount of potatoes there are in a string

const potato=(str)=>{
let count =str.split("potatoes");
console.log(count.length-1)
}
potato("potatoes potatoes potatoes");