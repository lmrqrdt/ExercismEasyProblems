function reverseString (string) {
  var stringOutput = ''
  for (let i = string.length -1; i >=0; i--) {
    stringOutput += string[i]
  }
  console.log(stringOutput)
}

string = '123'

reverseString(string)
