const express = require('express');
const app = express();
const DataBase = require('./Database/db')
const authRouter = require('./routers/auth')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const cartRouter = require('./routers/cart')
require('dotenv').config()
app.use(express.json())
DataBase()

app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/products',productRouter)
app.use('/api/orders',orderRouter)
app.use('/api/carts',cartRouter)


const port = 3000
app.listen((port),()=>{
    console.log(`server connected to http://localhost${port}`)
})