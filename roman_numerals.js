function convertToCoin (money) {
  var resultCoin =[]
  var coin =[10000,5000,2000,500,200,50,20,1]
  for (let i = 0; i < coin.length; i++) {
    while (money >= coin[i]) {
      money = money - coin[i]
      resultCoin.push(coin[i])
    }
  }
  return resultCoin;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
