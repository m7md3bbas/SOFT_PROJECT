const router = require("express").Router();
const bcrypt =  require("bcrypt")
const productModule = require("../models/products")

router.post("/create/new",async(req,res)=>{
    const newProducts =  new productModule(req.body)

    try {
        const saveProduct = await newProducts.save();
        res.status(201).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get All progucts
//use query in header=> product?new="name"  orproduct?categore="categ name"
router.get("/",async(req,res)=>{
    const qnew = req.query.new;
    const qcategories = req.query.categories;

    try {
        let product;
        if(qnew){
            product = await productModule.find().sort({creatAt : -1}).limit(1);
        }else if (qcategories){
            product= await productModule.find({
                categories:{
                    $in:[qcategories]
                }
            })
        }else{
            product = await productModule.find()
        }
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json( err)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const deleteProduct = req.params.id;
    try {
        const removeProduct =  await productModule.remove({_id:deleteProduct})
        res.status(200).json(removeProduct)
    } catch (err) {
        res.status(500).json(err)
        
    }
})

module.exports=router