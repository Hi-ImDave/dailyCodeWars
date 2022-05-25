function getSize(width, height, depth){
    return [2*(height * width) + 2*(height * depth) + 2*(width * depth), height*width*depth]
}

