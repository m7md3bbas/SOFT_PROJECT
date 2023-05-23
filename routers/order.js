const router = require("express").Router();
const ordersModul = require("../models/orders")

//Add Cart
router.post('/add',async(req,res)=>{
  const newOrdes = new ordersModul(req.body);

  try {
    const saveOrder = await newOrdes.save();
    res.status(200).json(saveOrder)
  } catch (err) {
    res.status(500).json(err)
    
  }
})
//get All Orders
router.get('/',async(req,res)=>{
  const orders = await ordersModul.find();

  try {
    res.status(200).json(orders)
    
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// delete order
router.delete('/delete/:id',async(req,res)=>{
    const deleteOrder = req.params.id;
    try {
        const remove = await ordersModul.remove({_id:deleteOrder})
        res.status(200).json(remove)
    } catch (err) {
        res.status(500).json(err)
        
    }
} )

module.exports=router