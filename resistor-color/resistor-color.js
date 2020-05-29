export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];

// export const colorCode = (color) => {
//   const dict = new Map;
//   let j = 0;
//   for(let i of COLORS) {
//     dict.set(i, j++);
//   }
//   return dict.get(color.toLowerCase())
// }

export const colorCode = (color) => {
  var lowerCaseColor = color.toLowerCase()
  return COLORS.indexOf(lowerCaseColor)
}
