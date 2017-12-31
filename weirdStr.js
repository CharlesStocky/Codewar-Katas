/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

function toWeirdCase(str){
  let weirdStr = ''
  for(var i = 0; i < str.length; i++){
    if(i % 2 === 0 || i === 0){
      weirdStr += str[i].toUpperCase()   
    }else if(str[i].match([/[a-zA-Z]/])){
      weirdStr += ' '
    }else{
      weirdStr += str[i].toLowerCase() 
    }
    console.log(weirdStr)
  }
}

toWeirdCase('this is')
