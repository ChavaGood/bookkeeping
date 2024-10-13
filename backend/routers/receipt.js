const express=require('express')
const { getAllReceipts, getReceiptById, addReceipt, getReceiptsByYear, getReceiptsBetweenDates } = require('../modules/receipts')
const router=express.Router()


router.get('/all',async(req,res)=>{
    try{
        const data=await getAllReceipts()
        res.status(200).send(data)
    }
    catch(arr){
        res.status(500).send(err.message)
    }
})
router.get('/one/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const data=await getReceiptById(Number(id))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='receipt not found')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})


router.post('/add',express.json(),async(req,res)=>{
    try{
        console.log(req.body);
        const data=await addReceipt(req.body)
        console.log(data);
        res.status(201).send(data)

    }
    catch(err){
        res.status(500).send(err.message)
    }
})


router.get('/forYear/:year',async (req,res)=>{
    try{
        const {year}=req.params
        const data=await getReceiptsByYear(Number(year))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='no receipt in year')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})
router.get('/between/:dates',async (req,res)=>{
    try{
        const {dates}=req.params
        const arrdates=dates.split(',')
        const data=await getReceiptsBetweenDates(new Date(arrdates[0]),new Date(arrdates[1]))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='no receipt between dates')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})
module.exports=router