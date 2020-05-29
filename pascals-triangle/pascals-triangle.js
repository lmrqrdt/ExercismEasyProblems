
export const rows = (num) => {
  var triangle = [[1], [1, 1]]
  var arrayN = triangle[triangle.length -1]
  var guts = new Array
  var newRowArray = []
  var checkLen = 0

  if (num == 0) {
    return []
    // console.log([])
  }
  if (num == 1) {
    // console.log(triangle[num - 1])
    return [triangle[num - 1]]
  }
  if (num == 2) {
    // console.log(triangle)
    return triangle
  }
  if (num > 2) {
    for (let j = 0; j < num -2; j++) {
      checkLen = (arrayN.length - 1)
        for (let i = 0; i < checkLen; i++) {
          guts.push(arrayN[i] + arrayN[i + 1])
          newRowArray = [arrayN[0]].concat(guts).concat(arrayN[arrayN.length -1])
        }
    triangle.push(newRowArray)
    arrayN = triangle[triangle.length -1]
    newRowArray = []
    guts = []
    }
    return triangle
    // console.log(triangle)
  }
};
