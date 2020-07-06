
export const findAnagrams = (word, list) => {
  var wordArray = []
  var alphaList = new Array
  var truthTable = new Array
  var flag = false
  var anagrams = []
  wordArray = word.toLowerCase().split('').sort()
  list.map((w) => alphaList.push(w.toLowerCase()
                                .split('').sort()))
  for (let i = 0; i < alphaList.length; i++) {
    for (let j = 0; j < wordArray.length; j++) {
      if (alphaList[i][j] == wordArray[j]
          && alphaList[i].length == word.length) {
        flag = true
      } else {
        flag = false
        break
      }
    }
    truthTable.push(flag)
  }
  for (let i = 0; i < truthTable.length; i++) {
    if (truthTable[i] == true
        && list[i].toLowerCase() != word.toLowerCase()) {
        anagrams.push(list[i])
    }
  }
  return anagrams
}
