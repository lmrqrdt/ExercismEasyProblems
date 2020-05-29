// my solution
// export const steps = (num) => {
//   var steps = 0
//
//   if (num > 0) {
//     if (num == 1) {
//       return steps
//     }
//     while (num != 1) {
//       if (num % 2 == 0) {
//         num = num/2
//         steps += 1
//       } else if (num % 2 == 1) {
//         num = (3*num) + 1
//         steps += 1
//       }
//     }
//   } else {
//     throw 'Only positive numbers are allowed'
//   }
//   return steps
// };

// best solution
export const steps = num => {
    if (num <= 0) throw new Error("Only positive numbers are allowed")
    let steps = 0
    while (num != 1) {
        num = num % 2 == 0 ? num / 2 : num * 3 + 1
        steps++
    }
    return steps
}
