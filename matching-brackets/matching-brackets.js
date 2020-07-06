
export const isPaired = (string) => {
string = string.replace(/[^\(\[\{\)\]\}]+/g, '')
                .replace(/({})/g, '')
                .replace(/\[]/g, '')
                .replace(/\(\)/g, '')
    if (string.length % 2 != 0
        || string[0] == ')'
        || string[0] == ']'
        || string[0] == '}')  {
            return false
    }
    for (let i = 0; i < string.length/2; i++) {
      if (string[i] == '(' && string[string.length + (-i - 1)] != ')') {
        return false
      }
      if (string[i] == '[' && string[string.length + (-i - 1)] != ']') {
        return false
      }
      if (string[i] == '{' && string[string.length + (-i - 1)] != '}') {
        return false
      }
    }
    return true
}
