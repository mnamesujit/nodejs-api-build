const express = require('express')
const app = express()
const PORT  = 3000

app.get('/', (req, res) => {
  res.send({
    1:{name:"john"},
    2:{name:"kriston"},
    3:{name:"martin"}
  })
})





























app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`)
})
