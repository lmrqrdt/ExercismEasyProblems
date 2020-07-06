
function isIsogram (word) {
  word = word.replace(/[- ]/g, '').toLowerCase()
  let baseLength = word.length
  console.log(word)

  for (let i = 0; i < baseLength; i++) {
    console.log('i ', i)
    // console.log('word length ', word.length)
    console.log(word.substring(i))
    // console.log(word.charAt(i))
    if (baseLength > 0 && word.substring(i + 1)
      .includes(word.charAt(i))) {
      return false
    }
  }
  return true
}

word = 'isogram'

console.log(isIsogram(word))
