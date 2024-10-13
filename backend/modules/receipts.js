const { MongoOperations } = require("../services/db/mongo-operation")

const mongoConnection=new MongoOperations("Bookkeeping")

async function getAllReceipts(){
    try {
        mongoConnection.Collection = 'receipts'
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
async function getReceiptById (id){
    try {
        mongoConnection.Collection = 'receipts'
        const response = await mongoConnection.findOne({ filter: {receiptId:id } })
        if (response)
            return response
        else
            throw new Error('receipt not found')    }
    catch (error) {
        throw error
    }
}

async function addReceipt(receipt){
    try{
        const receipts=await getAllReceipts()
        if(!receipts){
            receipt.id=1
        }
        else{
            const ids=receipts.map(({id})=>id)
            const max=Math.max(...ids)
            receipt.id=max+1
        }
        receipt.date=new Date(receipt.date)
        await mongoConnection.insertItem(receipt)
        return receipt
    }
    catch(err){
        throw err
    }
}
async function getReceiptsByYear(year=new Date().getFullYear()){
    try{
        const receipts=await getAllReceipts()
        const receiptWithYear=receipts.map((item)=>{return {...item,year:item.date.getFullYear()}})
        const receiptsInYear=receiptWithYear.filter(item=>item.year===year)
        if(!receiptsInYear.length)
            throw new Error('no receipt in year')
        return receiptsInYear
    }
    catch(err){
        throw err
    }
}
async function getReceiptsBetweenDates(d1,d2){
    console.log({d1},{d2});
    try{
        const receipts=await getAllReceipts()
        console.log({receipts});
        const receiptsBetween=receipts.filter(item=>item.date>d1&&item.date<d2)
        console.log({receiptsBetween});
        if(!receiptsBetween.length)
            throw new Error('no receipt between dates')
        return receiptsBetween
    }
    catch(err){
        throw err
    }
}

module.exports={
    getAllReceipts,getReceiptById,addReceipt,getReceiptsByYear,getReceiptsBetweenDates
}



