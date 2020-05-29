function gigasecond (date) {

  var current = date
  var seconds = 1000000000

  var parsedDate = new Date(Date.parse(current))
  var newDate = new Date(parsedDate.getTime() + (1000 * seconds))
    console.log(newDate)
}

gigasecond(new Date(Date.UTC(2011, 3, 25)))
