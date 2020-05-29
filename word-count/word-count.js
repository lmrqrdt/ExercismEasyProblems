
export const countWords = (string) => {
  var output = new Object

  string = string.match(/\w+('\w)?/g)
  string = string.map(item => item.toLowerCase())
  // console.log(string)

  for (let i = 0; i < string.length; i++) {
    output[string[i]] = (output[string[i]] || 0) + 1
  }
    return output
}
