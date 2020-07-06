function clean (num) {
  if(num.match(/[A-Za-z]/g)) {
    throw 'Letters not permitted'
  }
  if (num.match(/[^0-9\(\)\.\-\+ ]/g)) {
    throw 'Punctuations not permitted'
  }
  num = num.replace(/[^0-9]/g, '')
  if (num.length < 10) {
    throw 'Incorrect number of digits'
  }
  if (num.length > 11) {
    throw 'More than 11 digits'
  }
  if (num.length == 11 && num[0] != '1') {
    throw '11 digits must start with 1'
  }
  if (num[num.length - 10] == '0') {
    throw 'Area code cannot start with zero'
  }
  if (num[num.length -10] == 1) {
    throw 'Area code cannot start with one'
  }
  if (num[num.length - 7] == 0) {
    throw 'Exchange code cannot start with zero'
  }
  if (num[num.length - 7] == 1) {
    throw 'Exchange code cannot start with one'
  }
  return num.slice(-10)
}

num = '+1(234)-056.7890'

console.log(clean(num))
