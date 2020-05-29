
function steps(num) {
  var steps = 0

  if (num > 0) {
    if (num == 1) {
      console.log('this is num = 1 ', steps)
    }
    while (num != 1) {
      if (num % 2 == 0) {

        console.log('this num/2 if even ', num/2)
        num = num/2
        console.log('this is num ', num)
        steps += 1
        // console.log('this is steps ', steps)
      } else if (num % 2 == 1) {

        console.log('this is (3*num + 1)/2 if odd ', (3*num) + 1)
        num = (3*num) + 1
        console.log('this is num ', num)
        steps += 1
      }
    }
  } else {
    throw 'Only positive numbers are allowed'
  }
  console.log('this is steps', steps)
}

var num = 1

steps(num)
