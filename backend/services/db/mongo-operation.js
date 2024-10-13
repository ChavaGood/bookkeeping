const { getClient } = require("./mongo-connection")

class MongoOperations{
    constructor(dbname){
        this.databaseName=dbname
    }
    set Collection(value){
        this.myCollection = getClient().db(this.databaseName).collection(value)  
    }
    get Collection(){
       return this.myCollection.collectionName
    }

    async insertItem(document){
        const result=await this.myCollection.insertOne(document)
        return result
    }
    async insertList(documents){
        const result=await this.myCollection.insertMany(documents)
        return result
    }
    async find({filter={}}={}){
        const result=await this.myCollection.find(filter).toArray()
        return result
    }
    async findOne({filter={}}={}){
        const result=await this.myCollection.findOne(filter)
        return result
    }



}

module.exports={MongoOperations}
