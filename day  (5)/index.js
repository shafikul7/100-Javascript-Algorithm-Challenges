function sumAllPrime(number) {
  let sum = 0;

  for (let i = 2; i < number; i++) {
    for (let j = 2; j < number; j++) {
      if (i === j) {
        sum = sum + i;
      }
      if (i % j == 0) {
        break;
      }
    }
  }

  return sum;
}
console.log(sumAllPrime(977));
