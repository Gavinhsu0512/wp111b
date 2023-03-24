function repeat(f, n) {
    let row = [];
    for (let i = 0; i < n; i++) {
      row.push(f());
    }
    return row;
  }

let number= repeat(Math.random, 10);
console.log(number);
