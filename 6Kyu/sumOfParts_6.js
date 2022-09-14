// function partsSum(ls){
// 	let results = [];
// 	while(ls.length){
// 	let sum = ls.reduce((a, b)=> a + b ,0);
// 	results.push(sum);
// 	ls.shift();
// }
// results.push(0);
// return results;
// }

function partsSum(ls){
    let sum = ls.reduce((a,b)=>a+b, 0); // O(n)
    let results = [] // O(1)
    while(ls.length){
        let reduction = ls.shift()
        sum = sum - reduction
        results.push(sum)
    }
    return results
}


partsSum([1, 3, 6, 10])

// [20, 20, 19, 16, 10, 0]



[1, 3, 6, 2]

