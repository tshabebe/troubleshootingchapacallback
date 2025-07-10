const express = require('express')
const app = express()

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log('GET / - Body:', req.body)
  res.send('Hello, world!')
})

app.post('/', (req, res) => {
  console.log('POST / - Body:', req.body)
  res.send('Hello from post!')
})

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check requested')
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
  console.log(`📝 Try: curl http://localhost:${PORT}/`)
  console.log(`🏥 Health: curl http://localhost:${PORT}/health`)
})
