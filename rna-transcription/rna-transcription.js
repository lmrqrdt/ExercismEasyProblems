
export const toRna = (strand) => {

  // `G` -> `C`
  // `C` -> `G`
  // `T` -> `A`
  // `A` -> `U`

  let str1 = ''

  for(let i = 0; i < strand.length; i++) {
    if (strand.charAt(i) == 'G') {
      str1 += 'C'
    } else if (strand.charAt(i) == 'C') {
      str1 += 'G'
    } else if (strand.charAt(i) == 'T') {
      str1 += 'A'
    } else if (strand.charAt(i) == 'A') {
      str1 += 'U'
    }
  }
  return str1
};
