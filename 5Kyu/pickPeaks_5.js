function pickPeaks(arr){
    let res = {pos: [], peaks: []};
    if(arr.length > 2) {
      let position = -1;
      for(let i=1; i<arr.length;i++){
        if(arr[i] > arr[i-1]) {
          position = i;
        } else if(arr[i] < arr[i-1] && position != -1) {
          res.pos.push(position);
          res.peaks.push(arr[position]);
          position = -1;
        }
      }
    }
    return res;
  }