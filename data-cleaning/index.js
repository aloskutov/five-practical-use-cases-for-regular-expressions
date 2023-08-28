const dataset = [
  'Product A - $99.99',
  'Product B: 50% off!',
  'Product C - *Limited Stock*',
  'Product D (New Arrival)'
]

const cleanPattern = /[^a-zA-Z0-9\s]/g
const cleanedData = dataset.map(description =>
  description.replace(cleanPattern, '')
)

console.log('Cleaned Data:')
console.log(cleanedData)
