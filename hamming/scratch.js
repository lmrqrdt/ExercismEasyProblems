function compute (str1, str2) {

  var count = 0
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i) == str2.charAt(i)) {
        // cnext i
      } else {
        count ++
      }
    }
      console.log(count)
    } else if(str1.length == 0){
      console.log('left strand must not be empty')
    } else if(str2.length == 0) {
      console.log('right strand must not be empty')
    } else {
      console.log('left and right strands must be of equal length')
    }
}

str1 = 'GGACGGATTCTG'
str2 = 'AGGACGGAT'

compute(str1, str2)
