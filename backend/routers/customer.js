const express=require('express')
const { getAllCustomers, getCustomerById, addCustomer } = require('../modules/customers')
const router=express.Router()


router.get('/all',async(req,res)=>{
    try{
        const data=await getAllCustomers()
        res.status(200).send(data)
    }
    catch(arr){
        res.status(500).send(err.message)
    }
})
router.get('/one/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const intid=Number(id)
        const data=await getCustomerById(intid)
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='customer not found')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})


router.post('/add',express.json(),async(req,res)=>{
    try{
        const data=await addCustomer(req.body)
        console.log({data});
        res.status(201).send(data)

    }
    catch(err){
        res.status(500).send(err.message)
    }
})
module.exports=router