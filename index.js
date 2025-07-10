const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
  console.log(req.body)
})

app.post('/', (req, res) => {
  res.send('Hello from post!')
  console.log(req.body)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
