
export class HighScores {
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
    return this._scores.sort((a, b) => {return a - b})
      .pop()
  }

  get personalTopThree() {
    // this is a simpler solution
    return this._scores
        .sort((a, b) => {return a - b})
        .slice(-3)
        .reverse()

    // this was my working code thinking slice(-3) would
    // return undefined for _scores.length < 3
    // if (this._scores.length > 2) {
    //   return this._scores
    //       .sort((a, b) => {return a - b})
    //       .slice(this._scores.length - 3, this._scores.length)
    //       .reverse()
    // } else {
    //   return this._scores.sort((a, b) => {return b - a})
    // }
  }
}
