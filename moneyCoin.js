'use strict'

function convertToCoin (money) {
    var coinLeft = money;
    var nominalCoin = {
        ceban: 10000,
        goceng: 5000,
        noceng: 2000,
        ceceng: 1000,
        gope: 500,
        nope: 200,
        cepe: 100,
        gocap: 50,
        jicap: 20,
        captun: 10,
        cetun: 1,
    }
    var cent = [];

    for(let key in nominalCoin) {
        while(coinLeft >= nominalCoin[key]) {
            cent.push(nominalCoin[key]);
            coinLeft -= nominalCoin[key];
        }
    }
    return cent;
  }
  
  // Drive code
  console.log(convertToCoin(543))
  //output : [ 500, 20, 20, 1, 1, 1 ]
  
  console.log(convertToCoin(7752))
  //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]
  
  console.log(convertToCoin(37454))
  //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]