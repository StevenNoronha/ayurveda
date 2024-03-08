const express = require('express')
const cors = require('cors')
const app = express()
const port = 5001
const mongoDB = require('./db')

app.use(cors({origin: 'http://localhost:3000'}));

mongoDB();

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.use(express.json())

app.use('/api', require('./DisplayData'));

app.listen(process.env.PORT || port, () => {
    console.log(`App running on port ${port}`)
})
