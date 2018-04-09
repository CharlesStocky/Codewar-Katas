/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

*/

function pigIt(str){
  let splitStr = str.split(' ');  
  let pigStr = ''
  for(var i = 0; i < splitStr.length; i++){
    let firstLetter = splitStr[i].slice(0, 1)
    splitStr[i] = splitStr[i].slice(1) + firstLetter + 'ay'
  }
  console.log(splitStr.join(' '))
}

let [blah, bleh, byah] = [1, 2, 3] 

console.log(blah, bleh, byah)

pigIt('Pig latin is cool')
