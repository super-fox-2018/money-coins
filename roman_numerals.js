function convertToCoin (money) {
  // your implementation code here
 var uang = money;
 var pecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var disp = [];
  for(let a=0; a<=money; a++){
    
    for(let b=0; b<=pecahan.length-1; b++){
      if(uang >= pecahan[b]){
        uang -= pecahan[b];
        disp.push(pecahan[b])
        break;
      }
    }

    if(uang === 0 ){
      return disp;
    }
  }
 

}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
