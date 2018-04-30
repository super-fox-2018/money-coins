function convertToCoin (money) {
  // your implementation code here
  var pecahan = [10000,5000,2000,500,200,50,20,1]
  var output=[]
  var current=money

  
  	for(var i=0;i<pecahan.length;i++) {
  		while(current>=pecahan[i]) {
  			current=current-pecahan[i]
  			output.push(pecahan[i])	
  		}
  	}
  	return output
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
