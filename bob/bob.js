
export const hey = (message) => {
  message = message.trim()

  if (message == '' || message == /r\0 \b \t \n \r \v \f \\ \" /) {
      return 'Fine. Be that way!'
  }
  if (message === message.toUpperCase()
        && message.match(/\w/)
        && ! message.match(/\d/)
        && message.endsWith('?'))  {
      return 'Calm down, I know what I\'m doing!'
  }
  if (message.endsWith('?')) {
          return 'Sure.'
  }
  if (message === message.toUpperCase() && message.match(/[A-Za-z]/)) {
      return 'Whoa, chill out!'
  }
  if (message) {
      return 'Whatever.'
  }
}
