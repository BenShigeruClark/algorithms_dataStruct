// function pyramid(n) {
  //   const midpoint = Math.floor((2 * n - 1) / 2);
  
  //   for (let row = 0; row < n; row++) {
  //     let level = '';
  
  //     for (let column = 0; column < 2 * n - 1; column++) {
  //       if (midpoint - row <= column && midpoint + row >= column) {
  //         level += '#';
  //       } else {
  //         level += ' ';
  //       }  
  //     }
  //     console.log(level);
  //   }
  // }



function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

steps(10);