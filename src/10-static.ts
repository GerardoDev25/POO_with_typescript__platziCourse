console.log(Math.PI);

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item), Number.MIN_SAFE_INTEGER);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
