function madd(a, b) {

   let result = [];
    for (let i = 0; i < a.length; i++) {
      let row = [];
      for (let j = 0; j < a[i].length; j++) {
        row.push(a[i][j] + b[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  
  let a = [[1, 2]];
  let b = [[5, 6]];
  let c = madd(a, b);
  console.log(c);