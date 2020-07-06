class Series {
  constructor(nums) {
    this._nums = nums
  }

  get digits() {
    return this._nums.split('').map(Number)
  }

  slices(n) {
    // var digits = this._nums.split('').map(Number)
    console.log(this.digits)
    var series = []
    if (this.digits.length >= n) {
      for (let i = 0; i < this.digits.length - n + 1; i++) {
        // console.log('this is i ', i, 'this is i + n ', i + n)
        series.push(this.digits.slice(i, i + n))
      }
      console.log(series)
    }
    throw 'Slice size is too big.'
  }
}

nums = '01234'
n = 2

series = new Series(nums)

console.log(series.slices(n))
