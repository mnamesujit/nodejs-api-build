require('dotenv').config()
const app = require('./app')

console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`)
})
