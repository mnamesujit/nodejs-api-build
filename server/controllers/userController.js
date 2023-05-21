const User = require('../models/userModel')


exports.createUser = async (req, res) => {
  try {
   const {name, email} = req.body
   if(!name || !email ) {
      throw new Error("Name and Email are required")
    }
    const userExists = await User.findOne({email})
    if(userExists) {
      throw new Error("Email already exists")
    }
    const user = await User.create({name, email})
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      user
    })
  } catch(err) {
      console.log(err)
      res.status(400).json({
      success: false,
      messsage: err.message
    })
  }


}
