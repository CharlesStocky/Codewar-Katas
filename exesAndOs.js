/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.*/




function XO(str){
  let xCount = 0
  let oCount = 0
	for(var i = 0; i < str.length; i++){
    if(str[i].toLowerCase() === 'x'){
	    xCount++	
		}	
	  if(str[i].toLowerCase() === 'o'){
	    oCount++	
		}	
	}
  if(xCount !== oCount){
    return console.log(true) 
  }
  return console.log(false)
}

XO('Xo')
