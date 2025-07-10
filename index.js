const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
  console.log(req, res)
})

app.post('/', (req, res) => {
  res.send('Hello from post!')
  console.log(req, res)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
