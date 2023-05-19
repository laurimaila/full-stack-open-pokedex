const express = require('express')
var serveStatic = require('serve-static')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))
app.use(serveStatic('dist', { index: ['default.html'] }))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
