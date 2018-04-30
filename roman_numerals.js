function convertToCoin(money) {
  // your implementation code here
  const pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  // const pecahan = [10000]
  pecahan.sort(function (a, b) {
    return (b - a);
  })
  arrPecahan = [];
  sisa = 0;
  while (money > 0) {

    for (var i = 0; i < pecahan.length; i++) {
      if (money >= pecahan[i]) {
        money = money - pecahan[i];
        arrPecahan.push(pecahan[i]);
        break;
      }
    }
  }
  return arrPecahan;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
