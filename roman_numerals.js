function convertToCoin(money) {
  let coins = [];
  let coinArray = [10000, 5000, 1000, 500, 200, 100, 50, 20, 10, 1];

  while (money > 0) {
    for (var i = 0; i < coinArray.length; i++) {
      if (money / coinArray[i] >= 1) {
        coins.push(coinArray[i]);
        money -= coinArray[i];
        break;
      }
    }
  }
  return coins;
}

// Drive code
console.log(convertToCoin(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
