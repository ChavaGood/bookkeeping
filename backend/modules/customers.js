const { MongoOperations } = require("../services/db/mongo-operation")

const mongoConnection=new MongoOperations("Bookkeeping")

async function getAllCustomers(){
    try {
        mongoConnection.Collection = 'customers'
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
async function getCustomerById (id){
    try {
        mongoConnection.Collection = 'customers'
        const response = await mongoConnection.findOne({ filter: {id:id } })
        
        if (response)
            return response
        else
            throw new Error('customer not found')    }
    catch (error) {
        throw error
    }
}

async function addCustomer(customer){
    try{
        const customers=await getAllCustomers()
        if(!customers){
            customer.id=1
        }
        else{
            const ids=customers.map(({id})=>id)
            const max=Math.max(...ids)
            customer.id=max+1
        }
        await mongoConnection.insertItem(customer)
        return customer
    }
    catch(err){
        throw err
    }
}

module.exports={
    getAllCustomers,getCustomerById,addCustomer
}


