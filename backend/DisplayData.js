const express = require("express");
const router = express.Router();
const doshaData = require('./data');
const axios = require('axios');

router.get('/foodData', (req,res) =>{
    try {
        res.send([doshaData]);   
    } catch (error) {
        console.error(error.message);
        res.send("Serve Error")
    }
})


async function sendDataToFlask(qna_data) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', qna_data);
        console.log('Prediction:', response.data);
        return response.data; // Return the prediction data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to handle it elsewhere
    }
}
router.post('/submitData', async (req,res) => {
    try {
        let qna_data = req.body.qna_data;
        const prediction = await sendDataToFlask(qna_data);
        console.log(prediction);
        res.send(prediction)


    }
    catch(error){
        console.log(error)
        res.send("Server error", error.message);
    }
})

module.exports = router;