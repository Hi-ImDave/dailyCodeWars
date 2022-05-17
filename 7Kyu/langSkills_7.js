function myLanguages(results) {
    let res = [];
    let sortable = [];
    for(word in results){
        sortable.push([word, results[word]])
    };
    let sorted = sortable.sort((a,b)=>b[1]-a[1])
    for(let i = 0; i < sorted.length; i++){
        sorted[i][1] >= 60 ? res.push(sorted[i][0]) : 0
    };
    return res;
}
