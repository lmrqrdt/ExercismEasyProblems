function isPaired(string) {
  // open = string.replace(/[^\(\[\{]+/g, '')
  // close = string.replace(/[^\)\]\}]+/g, '')
  // console.log(string)
  string = string.replace(/[^\(\[\{\)\]\}]+/g, '')
                  .replace(/({})/g, '')
                  .replace(/\[]/g, '')
                  .replace(/\(\)/g, '')
  console.log(string)
  if (string.length % 2 != 0
      || string[0] == ')'
      || string[0] == ']'
      || string[0] == '}') {
    return false
  }
  for (let i = 0; i < string.length/2; i++) {
    console.log(string[i], string[string.length + (-i - 1)])
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

// string = '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
// string = '(((185 + 223.85) * 15) - 543)/2'
// string = '([{}({}[])])'
string = '([{()}()]'
// string = '}{'
// string = '[['

// function negNum(string) {
//   for (let i = 0; i < string.length; i++) {
//     console.log(i, -Math.abs(i))
//   }
// }
//
// string = 'abccba'
// console.log(negNum(string))

//
console.log(isPaired(string))
