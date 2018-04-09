/*
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/
function a(x){return x*2}
function b(x){return x+2}
function c(x){return Math.pow(x, 2)}

function chained(functions) {
  const funcArr = functions
  return function(){
    let result = funcArr.reduceRight((accumulator, currentValue, currentIndex, array)=>{
      console.log(accumulator)
      return currentValue(accumulator)
    }, arguments[0])
    console.log(result)
  } 
}


chained([a,b,c])(1)
console.log('called first')
chained([c,b,a])(2)
console.log('called second')
chained([a,b,c])(2)
console.log('called third')
