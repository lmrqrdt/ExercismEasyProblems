
class Matrix {
  constructor(rows) {

// split the string rows on the newline character
    this.matrix1 = rows.split(/r?\n/)
    this.matrix2 = new Array
    this.rows = new Array
    this.columns = new Array
    // this.columnsBulk = new Array

// iterate over the split string
    for (let i = 0; i < this.matrix1.length; i++) {
      // map string values to Number and create an array
      this.matrix2 = (this.matrix1[i].split(' ').map(Number));
      // create an array of rows
      this.rows.push(this.matrix2)
    }
      for (let i of this.rows) {
        console.log(i)
      }
    // return this.rows
// create an array of column values

let maxLength = 0;

// for (let i = 0; i < array1.length; i++) {
//   if (array1[i].length > maxLength) {
//     maxLength = array1[i].length
//   }
// }

// or use this
    maxLength = Math.max(...this.rows.map(item => item.length))
    // console.log(`maxLength = ${maxLength}`)
    for (let i = 0; i < maxLength; i++) {
      let columnsBulk = []
      for (let j = 0; j < this.rows.length; j++){
        if(this.rows[j][i]) {
          columnsBulk.push(this.rows[j][i])
        }
        let maxLength = 0;
      }
      this.columns.push(columnsBulk)
    }

console.log(this.columns)
  }
}

// a much more compact solution
// class Matrix {
//   constructor(row) {
//     this.row = row.split('\n').map(item => item.split(' ').map(el => +el))
//     console.log(this.row)
//   }
//   get rows() {
//     return this.row
//   }
//   get columns() {
//     return this.row[0].map((item,index) => this.rows.map((el) => el[index]))
//   }
// }

const rows = '2 3 4\n4 5 6\n7 6 5\n3 7 9'

const test = new Matrix(rows)
