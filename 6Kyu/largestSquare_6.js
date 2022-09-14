function max(wall){

    let rows = wall.length;
    let cols = rows ? wall[0].length : 0;
    let max = 0;
      for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            //get max squares from left, up, and top left
              let left = col === 0 ? 0 : wall[row][col - 1],
                  up = row === 0 ? 0 : wall[row - 1][col], 
                  topleft = row && col ? wall[row - 1][col - 1] : 0;
            //compute new max square upto index 
              if (wall[row][col] == " ") wall[row][col] = Math.min(left, up, topleft) + 1;
              else wall[row][col] = 0
            //update max if needed
              max = Math.max(wall[row][col], max)
          };
      };
      return max * max
  }