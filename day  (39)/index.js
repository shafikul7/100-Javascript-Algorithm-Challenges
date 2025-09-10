function sum(prem1, prem2) {
  return prem1 + prem2;
}

function totalsum(...prems) {
  let total = 0;
  prems.forEach((Element) => {
    total = total + Element;
  });
  return total;
}
console.log(totalsum(1,23,4,5,6,7,89))