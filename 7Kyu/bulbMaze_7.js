function bulbMaze(maze){
    let res = maze.split('').map((el, ind)=>el == 'o' && ind % 2 == 1 || el == 'x' && ind % 2 == 0 || el == ' ')
    return res.every(el=>el==true)
}