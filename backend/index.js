const express = require('express')
const cors = require('cors')
const app = express()
const port = 5001
const mongoDB = require('./db')

app.use(cors({origin: ['http://localhost:3000', 'http://192.168.163.251:3000']}));

mongoDB();

app.get('/', (req,res) => {
    res.send('Hello World')
}) 

app.use(express.json())

app.use('/api', require('./DisplayData'));
app.use('/api', require('./LoginUser'));


app.listen(process.env.PORT || port, () => {
    console.log(`App running on port ${port}`)
})
