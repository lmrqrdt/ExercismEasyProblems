
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

export const decodedValue = (arrayColor) => {
  const dict = new Map;
  let j = 0;
  for(let i of COLORS) {
    dict.set(i, j++);
  }

  var first = dict.get(arrayColor[0].toLowerCase())
  var second = dict.get(arrayColor[1].toLowerCase())
  var valString = first.toString() + second.toString()
  var valStringNum = Number(valString)

  return valStringNum
};
