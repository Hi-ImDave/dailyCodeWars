function solution(firstArray, secondArray) {
    let res = [];
    let int;
    for(let i = 0; i < firstArray.length; i++){
        if(firstArray[i] > secondArray[i]){
            int = firstArray[i] - secondArray[i]
            
        } else{
            int = secondArray[i] - firstArray[i]
        }
        res.push(int)
    }
    return res.map(num=>num**2).reduce((a,b)=>a+b,0) / res.length
};