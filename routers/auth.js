const router = require('express').Router()

const UserModels = require('../models/users');
const bcrypt = require('bcrypt')


router.post('/register', async (req,res)=>{
    try{
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(req.body.password,salt);
        const newUser= new UserModels({
          username:req.body.username,
          email:req.body.email,
          password: hashpass,
        });
        const user =  newUser.save();
        //console.log(user)
        res.status(200).send(user)

    }catch(err){
    res.status(401).json(err)
    console.log(err)
    }
})

//Login
router.post('/login', async (req,res)=>{
  try{
    const user = await UserModels.findOne({email:req.body.email});
    !user && res.status(400).json("Worng");

    const validated = await bcrypt.compare(req.body.password , user.password);
    !validated && res.status(200).json("Incorrect Password");

   const {password,...others} = user._doc;
   res.status(200).json(others);
  }
  catch(err){
    res.status(500).json(err);
    console.log(err)
  
  }
})


module.exports=router;