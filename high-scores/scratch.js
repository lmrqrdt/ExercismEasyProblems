
class HighScores {
  constructor(scores) {
    this._scores = scores
  }

  get scores() {
    return this._scores
  }

  get latest() {
    return this._scores.pop()
  }

  get personalBest() {
    return this._scores.sort((a, b) => {return a - b}).pop()
  }

  get personalTopThree() {
    if (scores.length > 2) {
      return this._scores
          .sort((a, b) => {return a - b})
          .slice(this._scores.length - 3, this._scores.length)
          .reverse()
    } else {
      return this._scores.sort((a, b) => {return b - a})
    }
  }
}

scores = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70]


const highScores = new HighScores(scores)

console.log(highScores.personalTopThree)

// function topThree (scores) {
//   console.log(scores)
//   if (scores.length > 2) {
//     console.log(scores.slice(scores.length - 3, scores.length))
//   } else {
//     console.log(scores)
//   }
//
// }
//
// topThree(scores)

// console.log(scores.sort(function (a, b) {return b - a}))
