function toFreud(string) {
    str = ''
    if(string == undefined || !string.length){
        return str
    }
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        str += 'sex '
    }
    return str.trim()
}