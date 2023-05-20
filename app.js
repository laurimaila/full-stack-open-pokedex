const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('20.5.2023 14:40')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
