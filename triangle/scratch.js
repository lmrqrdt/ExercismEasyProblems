class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  isTriangle() {
    if ((this.a > 0 && this.b > 0 && this.c > 0)
        && (this.a + this.b > this.c)
        && (this.b + this.c > this.a)
        && (this.a + this.c > this.b)
      ) {
      return true
    }
    return false
  }

  isEquilateral() {
    if (this.isTriangle()
        && this.a == this.b
        && this.b == this.c) {
        return true
      }
        return false
  }

  isIsosceles() {
    if(this.isTriangle()
        && (this.a == this.b
          || this.a == this.c
          || this.b == this.c)
        ) {
          return true
        }
          return false
  }

  isScalene() {
    if(this.isTriangle()
      && this.a != this.b
      && this.b != this.c
      && this.c != this.a) {
        return true
      }
        return false
  }
}

triangle = new Triangle(1, 1, 3)

console.log(triangle.isTriangle())
