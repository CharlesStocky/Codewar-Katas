/*
Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.  
*/


function findMissingNumber(seq){
  let num = seq.replace(/, /g, '')
  let numArr = num.split('')
  let letIndx = seq.search('a')
  if(seq.search(/[a-zA-Z]/g + 1)){ //-1 & 0 are false, search returns index or -1 if not found
    return 1
  }
  let max = numArr.reduce((accu, b)=>{
    return Math.max(accu, b)
  })
  let missingNum = []
  numArr.forEach((num)=>{
    if(!numArr.includes(num + 1) && num !== max){
      missingNum.push(num + 1)
    }
  }) 
  if(missingNum.length > 1){
    return Math.min(missingNum)  
  }
  return missingNum
}

findMissingNumber('2, 1, 3, 5')
