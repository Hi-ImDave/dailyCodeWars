let greet = function(name) {
    console.log(name)
      name = name.toLowerCase()
      name = name.split(' ').map((letter, index) => letter[0].toUpperCase() + letter.slice(1)).join('')
      return `Hello ${name}!`
  };