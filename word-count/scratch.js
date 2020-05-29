// word-count.js was submitted but this is better (not mine)

function countWords(string) {

  var output = new Object

  string
    .toLowerCase()
    .match(/\w+('\w)?/g)
    .forEach((w) => output[w]++ || (output[w] = 1))

  console.log(output)
}

string = ',\n,one,\n ,two \n \'three\''

countWords(string)
