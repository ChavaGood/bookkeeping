require('dotenv').config()
const http=require('http')

const app=require('./app')
const { openConnection } = require('./services/db/mongo-connection')

const {  TEST_MONGO_SERVER } = process.env

openConnection(TEST_MONGO_SERVER||"mongodb://127.0.0.1:27017").then(_ => {
    app.listen(process.env.PORT,process.env.HOST,()=>{
        console.log(`http://${process.env.HOST}:${process.env.PORT}`)
    })

const server=http.createServer(app)
}).catch(ex => {
    console.log('could not open a connection to mongo db server');
    console.log(ex);
})




