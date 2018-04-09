/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique*/

function findUnique(arr){
  const commonNum = [arr[0], arr[1], arr[2]]
	let number 
	for(var i = 0; i < commonNum.length; i++){
    if(commonNum[i] < number || commonNum[i] > number){
	    return console.log(commonNum[i])
		}
		number = commonNum[i] 
  }
  if(Math.max(arr) !== number){
    return console.log(Math.max(arr)) 
  }
  return console.lo(number)
}

function blah(arr){
  const commonNum = [arr[0], arr[1], arr[2]]
	let number 
	for(var i = 0; i < commonNum.length; i++){
    if(commonNum[i] < number || commonNum[i] > number){
	    return console.log(commonNum[i])
		}
		number = commonNum[i] 
  }
  console.log(Math.max(arr))
}

findUnique([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2])

