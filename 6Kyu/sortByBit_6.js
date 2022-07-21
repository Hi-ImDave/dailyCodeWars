// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr){
    bitCount = numToBit(arr);
    for(let i = 0; i < arr.length; i++){
    arr[i] = bitCount[i].num;
    }
    return arr
}

function numToBit(array, bitCount = []){
    for(num of array){
        let numOfOn = num.toString(2);
        bitCount.push({'num': num, 'bit': bitToNum(numOfOn)});
    }
    bitCount.sort(function(a,b){
        if(a.bit > b.bit) return 1;
        if(a.bit < b.bit) return -1;
        if(a.num > b.num) return 1;
        if(a.num < b.num) return -1;
    })
    return bitCount
}

function bitToNum([...bits]){
    reduced = bits.map(Number).reduce((a,b)=>a+b, 0);
    return reduced
}
  
sortByBit([3, 8, 3, 6, 5, 7, 9, 1])
sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0])
