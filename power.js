function digitnPowers(n) {

    let res = 0
    let limit = Math.pow(10,n)
    for (let i = 2; i < 355000 ; i++) {
      if(isvalid(i,n)) res+= i
    }
    return res
  }
  
  function isvalid(number, pow) {
    let realdigit = number.toString().split('').map(Number)
  
    const sum = realdigit.reduce((acc,curr)=> acc+ Math.pow(curr, pow), 0)
    return number == sum
  }
  
  
  digitnPowers(5);