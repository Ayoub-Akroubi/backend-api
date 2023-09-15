require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT
const productRoute=require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/products', productRoute)
//routes
app.get('/',(req,res) => {
    throw new Error('fake error')
})

app.use(cors())

app.use(errorMiddleware)


mongoose.connect(MONGO_URL)
.then(()=> {
    app.listen(PORT, ()=>{
        console.log(`running on ${PORT}`);
    })
}).catch((error) => {
    console.log(error)
})