// my solution
export class Matrix {

  constructor(matrix) {
    this.matrix1 = matrix.split(/r?\n/)
    this.matrix2 = new Array
    this._rows = new Array
    this._columns = new Array

    for (let i = 0; i < this.matrix1.length; i++) {
      this.matrix2 = (this.matrix1[i].split(' ').map(Number));
      this._rows.push(this.matrix2)
    }
    let maxLength = 0;

    // for (let i = 0; i < array1.length; i++) {
    //   if (array1[i].length > maxLength) {
    //     maxLength = array1[i].length
    //   }
    // }

    // or use this
      maxLength = Math.max(...this._rows.map(item => item.length))
      // console.log(`maxLength = ${maxLength}`)
      for (let i = 0; i < maxLength; i++) {
        let columnsN = []
        for (let j = 0; j < this._rows.length; j++){
          if(this._rows[j][i]) {
            columnsN.push(this._rows[j][i])
          }
        }
        this._columns.push(columnsN)
      }
    // console.log(this.columns)
  }
  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }
}
