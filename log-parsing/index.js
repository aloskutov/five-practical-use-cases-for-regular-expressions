const fs = require('fs')

const logFilePath = 'sample.log'

fs.readFile(logFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${logFilePath}: ${err.message}`)
    return
  }

  const errorLines = data.match(/^\[.*\] ERROR:.*/gm)

  console.log('Log entries with "ERROR" label:')
  console.log(errorLines.join('\n'))
})
