export const transpose = (strArray) => {
  if (strArray == '') {
    return []
  }

    var place = []
    var transposed = []
    var strLength = 0

    let baseArray = strArray.map(str => str.split(''))

    for (let i = 0; i < baseArray.length; i++) {
      if (baseArray[i].length > strLength) {
        strLength = baseArray[i].length
      }
    }

    let n = 0

    while (n < strLength) {
      for (let i = 0; i < baseArray.length; i++) {
          place.push(baseArray[i].shift())
      }

      for (let i = 0; i < place.length; i++) {
        if (place[i] == undefined && i != place.length - 1) {
          place[i] = ' '
        }
      }

      transposed.push(place.join(''))

      place = []
      n++
    }
    let end = transposed.slice(-1).toString().trimEnd()
    transposed.pop()
    transposed.push(end)
    return transposed
};
