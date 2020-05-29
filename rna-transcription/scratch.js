
function toRna(strand) {

  // var stringDna = "GTCA"
  // var stringRna = "CGAU"
  console.log(strand)

  let str1 = ''

  for(let i = 0; i < strand.length; i++) {
    if (strand.charAt(i) == 'G') {
      str1 += 'C'
    } else if (strand.charAt(i) == 'T') {
      str1 += 'G'
    } else if (strand.charAt(i) == 'C') {
      str1 += 'A'
    } else if (strand.charAt(i) == 'A') {
      str1 += 'U'
    }
  }
  console.log(str1)
}

toRna('ACTGTTAGC')
