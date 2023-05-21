require('dotenv').config()
const mongoose = require('mongoose')

const connnectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("CONNECTED...")
  }catch(err){
    console.log(err)
  }
}


module.exports = connnectDB
