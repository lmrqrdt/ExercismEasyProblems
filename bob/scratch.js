// function hey (message) {
//
//   if (message.trim() == '' || message == /r\0 \b \t \n \r \v \f \\ \" /) {
//       console.log('Fine. Be that way!')
//   } else if (message === message.toUpperCase() && message.endsWith('?')) {
//       console.log('Calm down, I know what I\'m doing!')
//   } else if (message.trim().endsWith('?')) {
//     console.log(message.endsWith('?'))
//     // matching all caps
//       console.log('Sure.')
//   } else if (message === message.toUpperCase() && message.includes('0123456789')) {
//     // matching '1, 2, 3'
//       // console.log(message === message.toUpperCase() && message.includes('0123456789'))
//       console.log('Whoa, chill out!')
//   } else if (message.trim()) {
//      console.log('Whatever.')
//   }
// }

function hey (message) {
  message = message.trim()
  if(message === message.toUpperCase() && ! message.includes('1, 2, 3')) {
      console.log(true)
  } else {
    console.log(false)
  }

}

hey('1, 2, 3')
// hey('THIS IS A TEST TOO?')
