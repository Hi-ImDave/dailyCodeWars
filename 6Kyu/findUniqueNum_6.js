function findUniq(arr) {
    let newArr = arr.sort((a,b) => a == b || a > b ? 1 : -1);
    return newArr[0] == newArr[1] ? newArr[newArr.length - 1] : newArr[0]
}