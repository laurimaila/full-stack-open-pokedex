const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('11.14 done')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
