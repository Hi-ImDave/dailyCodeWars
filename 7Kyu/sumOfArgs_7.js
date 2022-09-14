function findSum(...args){
    return args.some(x=>x<0) ? -1 : args.reduce((a,b)=>a+b,0)
}

