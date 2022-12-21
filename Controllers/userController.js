const User = require('../Models/UserModel')
const createToken = require('../utils/token')
const loginUser = async (req, res) => {
   const {_id, email, password } = req.body
   try {
      const user = await User.login(email, password);


      // create Token
      const token = createToken(user._id)

      res.status(200).json({ email, password,token })

   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

// sign up user
const signupUser = async (req, res) => {
   const {_id, email, password } = req.body
   try {
      const user = await User.signup(email, password);


      // create Token
      const token = createToken(_id)

      res.status(200).json({ email, password,token })

   } catch (error) {
      res.status(400).json({ error: error.message })
   }

}
module.exports = {
   loginUser,
   signupUser
}