
export const compute = (str1, str2) => {
  var count = 0
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i) == str2.charAt(i)) {
        // cnext i
      } else {
        count ++
      }
    }
      return count
    } else if(str1.length == 0){
      throw 'left strand must not be empty'
    } else if(str2.length == 0) {
       throw 'right strand must not be empty'
    } else {
      throw 'left and right strands must be of equal length'
    }
};
