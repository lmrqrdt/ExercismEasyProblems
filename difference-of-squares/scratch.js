class Squares {
  constructor(n) {
    this.n = n
  }

  get sumOfSquares() {
    let n = this.n
    let sum = 0
    while (n > 0) {
      sum += Math.pow(n, 2)
      n--
    }
    return sum
  }

  get squareOfSum() {
    let n = this.n
    let sum = 0
    while (n > 0) {
      sum += n
      n--
    }
    return Math.pow(sum, 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}

const Squares5 = new Squares(5)

console.log(Squares5.difference)
