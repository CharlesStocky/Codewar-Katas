function digital_root(n) {
  let nstr = n.toString() 
  const len = nstr.length
  let sum = 0
  let count = 1 
  if(count != len){
    digitalRoot(n, sum) 
  }
}

digital_root(165)
