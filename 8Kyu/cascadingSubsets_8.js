function eachCons(array, n) { 
    let res = []; //initializing an empty array
    for(let i = 0; i < array.length; i++){ // initializing for loop with an upper limit set to the length of array, incrementing by 1, starting from 0
        res.push(array.slice(i,i + n)); // each iteration is pushing a sliced array starting from index i, up to but not including index i + n to the array res. so in this case it is slicing 2 elements at a time at each index and pushing the pairs to res
    } //in this case it would be array.slice(0, 0 + 2)...array.slice(1, 1 + 2)...array.slice(2, 2 + 2)...etc until it reaches the upper limit of array.length which is 8 in this case
    return res.filter(e => e.length === n); //filters the new array, res, for elements that have a length equal to n and returns an array with only those items.
}
