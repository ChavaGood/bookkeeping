const { MongoOperations } = require("../services/db/mongo-operation")

const mongoConnection=new MongoOperations("Bookkeeping")

async function getAllExpenses(){
    try {
        mongoConnection.Collection = 'expenses'
        const response = await mongoConnection.find()
        if (response.length > 0)
            return response
        else
            return null
    }
    catch (error) {
        throw error
    }
}
async function getExpenseById (id){
    try {
        mongoConnection.Collection = 'expenses'
        const response = await mongoConnection.findOne({ filter: {expenseId:id } })
        if (response)
            return response
        else
            throw new Error('expense not found')    }
    catch (error) {
        throw error
    }
}

async function addExpense(expense){
    try{
        const expenses=await getAllExpenses()
        if(!expenses){
            expense.id=1
        }
        else{
            const ids=expenses.map(({id})=>id)
            const max=Math.max(...ids)
            expense.id=max+1
        }
        expense.date=new Date(expense.date)
        await mongoConnection.insertItem(expense)
        return expense
    }
    catch(err){
        throw err
    }
}
async function getExpensesByYear(year=new Date().getFullYear()){
    try{
        const expenses=await getAllExpenses()
        const expenseWithYear=expenses.map((item)=>{return {...item,year:item.date.getFullYear()}})
        const expensesInYear=expenseWithYear.filter(item=>item.year===year)
        if(!expensesInYear.length)
            throw new Error('no expense in year')
        return expensesInYear
    }
    catch(err){
        throw err
    }
}
async function getExpensesBetweenDates(d1,d2){
    console.log({d1},{d2});
    try{
        const expenses=await getAllExpenses()
        const expensesBetween=expenses.filter(item=>item.date>d1&&item.date<d2)
        if(!expensesBetween.length)
            throw new Error('no expense between dates')
        return expensesBetween
    }
    catch(err){
        throw err
    }
}


module.exports={
    getAllExpenses,getExpenseById,addExpense,getExpensesByYear,getExpensesBetweenDates
}


