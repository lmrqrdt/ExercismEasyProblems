
export const isPangram = (sentence) => {
  let sentenceLower = sentence.toLowerCase()
  let letters = ('abcdefghijklmnopqrstuvwxys')
  let lettersContained = ''

  for (let i = 0; i < sentenceLower.length; i++) {
    if (sentenceLower.includes(letters.charAt(i))) {
      lettersContained += letters.charAt(i)
    }
  }

  if (lettersContained.includes(letters)) {
    return true
  } else {
    return false
  }
};
