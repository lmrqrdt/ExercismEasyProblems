function transform (orig) {
  var count = 0

  for (const key in orig) {
    console.log(key)
    count ++
  }

  for (let i = 1; i <= count; i++) {
    console.log(orig[i])
    for (let j = 0; j < orig[i].length; j++) {
      orig[i][j].toLowerCase()
      console.log(orig[i][j].toLowerCase())
    }
  }
}


// function transform (old) {
//
//   var letters = ''
//   var transformed = ''
//   lettersLower = ''
//   var splitScore = ''
//   var splitLetters = ''
//
//   for (const item in old) {
//     letters = [`${old[item]} : ${item}`]
//     console.log(letters)
//     lettersLower = letters.map(item => item.toLowerCase())
//     splitScore = lettersLower[0].split(':')
//     splitLetters = splitScore[0].split(',')
//     console.log(splitLetters)
//     for (let i = 0; i < splitLetters.length; i++) {
//         transformed += splitLetters[i] + ':' + splitScore[1] + ' '
//     }
//   }
//   console.log(transformed)
// }

orig = { 1: ['A', 'E'], 2: ['D', 'G'] }
// orig = { 1: ['A', 'E', 'I', 'O', 'U'],
//         2: ['D', 'G'],
//         3: ['B', 'C', 'M', 'P'],
//         4: ['F', 'H', 'V', 'W', 'Y'],
//         5: ['K'],
//         8: ['J', 'X'],
//         10: ['Q', 'Z']}

transform(orig)
