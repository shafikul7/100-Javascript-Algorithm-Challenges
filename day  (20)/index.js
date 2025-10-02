// find the smallest and Biggest Number
//minMax ([1,2,3,4,5])-> [1,5]

const minMax = (num) => {
  let result = [];
  for (let index = 0; index < num.length; index++) {
    for (let j = index + 1; j < num.length; j++) {
      if (num[index] < num[j]) {
        let temp = num[index];
        // console.log(temp)
        num[index] = num[j];
         
        num[j] = temp;
        // console.log(num[j])
      }
    }
  }
  result[0] = num[num.length - 1];
  result[1] = num[0];
  console.log(result)
};

minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,0]);
