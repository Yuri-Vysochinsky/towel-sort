
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  matrix.forEach((value, index) => {
      if(index%2 !== 0) {
          value.reverse()
          result.push(...value)
      }
      else {
          result.push(...value)
      }
  })
  
  return(result)

}
