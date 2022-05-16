function duplicateElements(m, n) {
    return m.some(x => n.some(y => x === y))
}