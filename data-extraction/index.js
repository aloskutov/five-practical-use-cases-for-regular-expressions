const text =
  'Visit our website at https://www.example.com for more information. For online shopping, go to https://shop.example.com.'

const urlPattern = /https?:\/\/[^\s]+/g
const extractedURLs = text.match(urlPattern)

console.log('Extracted URLs:')
console.log(extractedURLs)
