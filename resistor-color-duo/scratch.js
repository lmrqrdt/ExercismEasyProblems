const COLORS = [
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

// const dict = new Map;
// let j = 0;
// for(let i of COLORS) {
//   dict.set(i, j++);
// }

// console.log(dict)

// function test(arrayColor) {
//
//   const dict = new Map;
//   let j = 0;
//   for(let i of COLORS) {
//     dict.set(i, j++);
//   }

//   var first = dict.get(arrayColor[0].toLowerCase())
//   var second = dict.get(arrayColor[1].toLowerCase())
//   var valString = first.toString() + second.toString()
//   var valStringNum = Number(valString)
//
//
//
//   console.log(valStringNum)
// }

function test(arrayColor) {
  for(i = 0; i < arrayColor.length; i++) {
    arrayColor[i] = arrayColor[i].toLowerCase()
  }

  var first = COLORS.indexOf(arrayColor[0]).toString()
  var second = COLORS.indexOf(arrayColor[1]).toString()

  console.log(Number(first + second))
}

test(["Orange", "black", "violet"])
