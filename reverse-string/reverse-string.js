
export const reverseString = (string) => {
  var stringOutput = ''
  for (let i = string.length -1; i >=0; i--) {
    stringOutput += string[i]
  }
    return stringOutput
};
