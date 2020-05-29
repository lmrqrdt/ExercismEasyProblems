//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

  var current = date
  var seconds = 1000000000

  var parsedDate = new Date(Date.parse(current))
  var newDate = new Date(parsedDate.getTime() + (1000 * seconds))

  return newDate

};
