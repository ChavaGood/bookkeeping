const express=require('express')
const app=express()
const cors =require('cors')
const customer_router=require('./routers/customer')
const expense_router=require('./routers/expense')
const receipt_router=require('./routers/receipt')


app.get('/',(req,res)=>{
    res.status(200).send('server is running')
})

app.use(cors())
app.use('/customer',customer_router)
app.use('/expense',expense_router)
app.use('/receipt',receipt_router)


module.exports=app