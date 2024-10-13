const express=require('express')
const { getAllExpenses, getExpenseById, addExpense, getExpensesByYear, getExpensesBetweenDates } = require('../modules/expenses')
const router=express.Router()


router.get('/all',async(req,res)=>{
    try{
        const data=await getAllExpenses()
        res.status(200).send(data)
    }
    catch(arr){
        res.status(500).send(err.message)
    }
})
router.get('/one/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const data=await getExpenseById(Number(id))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='expense not found')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})
router.get('/between/:dates',async (req,res)=>{
    try{
        const {dates}=req.params
        const arrdates=dates.split(',')
        const data=await getExpensesBetweenDates(new Date(arrdates[0]),new Date(arrdates[1]))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='no expense between dates')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})


router.post('/add',express.json(),async (req,res)=>{
    try{
        console.log(req.body);
        const data=await addExpense(req.body)
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
        const data=await getExpensesByYear(Number(year))
        res.status(200).send(data)
    }
    catch(err){
        if(err.message.trim()==='no expense in year')
            res.status(404).send(err.message)
        else
            res.status(500).send(err.message)

    }
})
module.exports=router