// Question 

// My answer
function adjacentElementsProduct(array) {
    let maxProduct = array[0] * array[1] 
      for (let i = 1; i < array.length; i++) {
        product = array[i] * array[i+1]
        if (product > maxProduct) {
          maxProduct = product
        }
    }
    return maxProduct;
  }

// Other answer
function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}
