function dataReverse(data) {
    const chunkSize = 8;
    let chunk = []
    for (let i = 0; i < data.length; i += chunkSize) {
    chunk.push(data.slice(i, i + chunkSize));
    }
    return chunk.reverse().flat()
}