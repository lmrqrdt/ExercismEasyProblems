function findAnagrams (word, list) {
  var wordArray = []
  var alphaList = new Array
  var truthTable = new Array
  var flag = false
  var anagrams = []
  wordArray = word.toLowerCase().split('').sort()
  // console.log(word)
  list.map((w) => alphaList.push(w.toLowerCase()
                                .split('').sort()))
  // console.log(alphaList)

  for (let i = 0; i < alphaList.length; i++) {
    // console.log('this is i ', i)
    // console.log('this is alphaList[i] ', alphaList[i])
    for (let j = 0; j < wordArray.length; j++) {

      if (alphaList[i][j] == wordArray[j]
          && alphaList[i].length == word.length) {
        // console.log('this is j ', j)
        // console.log('this is alphaList[i][j] ', alphaList[i][j])
        // console.log('this is word[j] ', word[j])
        flag = true
      } else {
        flag = false
        break
      }
    }
    truthTable.push(flag)
  }
  console.log(truthTable)
  for (let i = 0; i < truthTable.length; i++) {
    if (truthTable[i] == true
        && word.toLowerCase() != list[i].toLowerCase()) {
      console.log('this is word ', word)
      console.log('this is list[i] ', list[i])
      console.log(word != list[i])
      anagrams.push(list[i])
    }

  }
  console.log(anagrams)
}


var word = 'LISTEN'
var list = ['Listen', 'Silent', 'LISTEN']

findAnagrams(word, list)
