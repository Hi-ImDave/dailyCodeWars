function parse(data){
    let res = [];
    let fish = 0;
    let arr = data.split('').filter(x => x == 'i' || x == 'd' || x == 's' || x == 'o');
    for(let y = 0; y < arr.length; y++){
        if(arr[y] == 'i'){
            fish += 1;
        } else if(arr[y] == 'd'){
            fish -= 1;
        } else if(arr[y] == 's'){
            fish = fish ** 2;
        } else{
            res.push(fish)
        }
    } 
    return res;
}
