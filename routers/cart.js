const router = require("express").Router();
const cartModels = require('../models/carts')

//create Cart

router.post('/create',async(req,res)=>{
    const newCart = new cartModels(req.body);

  try {
    const saveOrder = await newCart.save();
    res.status(200).json(saveOrder)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

router.get('/',async(req,res)=>{
    const Carts = await cartModels.find();
  
    try {
      res.status(200).json(Carts)
      
    } catch (err) {
      res.status(500).json(err)
      
    }
  })

module.exports= router