
export class Series {
  constructor(nums) {
    this._nums = nums
  }

  get digits() {
    return this._nums.split('').map(Number)
  }

  slices(n) {
    var series = []
    if (this.digits.length >= n) {
      for (let i = 0; i < this.digits.length - n + 1; i++) {
        series.push(this.digits.slice(i, i + n))
      }
      return series
    }
    throw new Error ('Slice size is too big.')
  }
}
