// my solution
export const isIsogram = (word) => {
  word = word.replace(/[- ]/g, '').toLowerCase()
  let baseLength = word.length

  for (let i = 0; i < baseLength; i++) {
    if (baseLength > 0 && word.substring(i + 1)
      .includes(word.charAt(i))) {
      return false
    }
  }
  return true
};

// a much cleaner solution:
// export const isIsogram = (text) => {
//   let clean = text.toLowerCase().replace(/[^a-z]/g,'');
//   return clean.length == new Set(clean).size;
// };
