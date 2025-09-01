function arrayReplace(inputArray,elementToReplace,subStationElem){
    inputArray.forEach((element ,index)=> {
        if(element==elementToReplace){
          inputArray[index]=subStationElem 
        }
    });
    console.log(inputArray)
}
arrayReplace([1,2,1],1,3)
// arrayReplace([1,2,3,4,5,1,1,1],1,3)


function arrayReplace(inputArray,arrayReplace,replaceElement){
    inputArray.forEach((element,index )=> {
        if(element == arrayReplace){
            inputArray[index]=replaceElement;
        }
    });
     console.log(inputArray)
}
arrayReplace([1,2,3,4,5,1,1,1],1,3)
