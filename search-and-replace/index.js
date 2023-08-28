const text = 'Hello, [name]! How are you, [name]?'
const namePattern = /\[name\]/g
const replacement = 'John'

const replacedText = text.replace(namePattern, replacement)
console.log(replacedText)

// Hello, John! How are you, John?
