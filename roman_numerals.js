function convertToCoin (money) {
  
  var result =[]
  var coin=[]
  var uang=money

  for(x=0; x<100; x++) {

    if (uang>=10000) {
      result.push(10000)
      uang -= 10000
    } else if (uang>=5000) {
      result.push(5000)
      uang -= 5000
    } else if (uang>=2000) {
      result.push(2000)
      uang -= 2000
    } else if (uang>=1000) {
      result.push(1000)
      uang -= 1000
    } else if (uang>=500) {
      result.push(500)
      uang -= 500
    } else if (uang>=200) {
      result.push(200)
      uang -= 200
    } else if (uang>=100) {
      result.push(100)
      uang -= 100
    } else if (uang>=50) {
      result.push(50)
      uang -= 50
    } else if (uang>=20) {
      result.push(20)
      uang -= 20
    } else if (uang>=10) {
      result.push(10)
      uang -= 10
    } else if (uang>=1) {
      result.push(1)
      uang -= 1
    }
  }

  return result
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
