// this is NOT my code - I was completly stumpted! Thanks to Emilily

export const transform = (old) => {
  const newObject = {}

  Object.keys(old).forEach((key) => {
    old[key].forEach((value) => {
      newObject[value.toLowerCase()] = parseInt(key, 10)
    })
  })

  return newObject
}
