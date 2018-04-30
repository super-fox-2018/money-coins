function convertToCoin (money) {
  var coin = [1,10,20,50,100,200,500,1000,2000,5000,10000];
  var convert = [];
  while(money>0){
    for (var i = 0; i < coin.length; i++) {
      if(money >= coin[coin.length-1]){
        convert.push(coin[coin.length-1]);
        money -= coin[coin.length-1];
      }
      else if(money >= coin[i]&&money < coin[i+1]){
        convert.push(coin[i]);
        money -= coin[i];
      }
    }
  }
  return convert;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
