function arrayReplace (inputArray,elementToReplace,subStrationElem){
inputArray.forEach((element ,index)=> {

    if(element === elementToReplace){
        inputArray[index]=subStrationElem;
    }
});
console.log(inputArray)
}
arrayReplace([2,3,2],2,4);