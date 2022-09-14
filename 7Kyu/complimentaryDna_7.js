function DNAStrand(dna) {
    let rna = dna.split('')
    .map(elem =>  elem.replace('T', 'E')
    .replace('A', 'T')
    .replace('E', 'A')
    .replace('G', 'B')
    .replace('C', 'G')
    .replace('B', 'C')
    )
    return rna.join('')
  }
