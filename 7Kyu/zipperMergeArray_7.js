function mergeArrays(a, b) {
    let array3 = [];
    let count = 0;
    let pos = 0;
    if(a.length > b.length){
        while(pos < a.length * 2){
            array3[pos]=a[count];
            pos++;
            array3[pos]=b[count];
            count++;
            pos++;
        }
    } else{
        while(pos < b.length * 2){
            array3[pos]=a[count];
            pos++;
            array3[pos]=b[count];
            count++;
            pos++;
        }
    }
    return array3.filter(item => item !== undefined);
}
