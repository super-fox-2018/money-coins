function convertToCoin (money) {
  // your implementation code here
  var coin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var receivedCoins = [];

  while (money > 0) {
    if (money >= 10000) {
      receivedCoins.push(10000);
      money -= 10000;
    }
    else if (money >= 5000 && money < 10000) {
      receivedCoins.push(5000);
      money -= 5000;
    }
    else if (money >= 2000 && money < 5000) {
      receivedCoins.push(2000);
      money -= 2000;
    }
    else if (money >= 1000 && money < 2000) {
      receivedCoins.push(1000);
      money -= 1000;
    }
    else if (money >= 500 && money < 1000) {
      receivedCoins.push(500);
      money -= 500;
    }
    else if (money >= 200 && money < 500) {
      receivedCoins.push(200);
      money -= 200;
    }
    else if (money >= 100 && money < 200) {
      receivedCoins.push(100);
      money -= 100;
    }
    else if (money >= 50 && money < 100) {
      receivedCoins.push(50);
      money -= 50;
    }
    else if (money >= 20 && money < 50) {
      receivedCoins.push(20);
      money -= 20;
    }
    else if (money >= 10 && money < 20) {
      receivedCoins.push(10);
      money -= 10;
    }
    else if (money >= 1 && money < 10) {
      receivedCoins.push(1);
      money -= 1;
    }
  }

  return receivedCoins;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
