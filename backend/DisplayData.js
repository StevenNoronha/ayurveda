const express = require("express");
const router = express.Router();
const doshaData = require('./data');
const mealplanData = require('./meals.js');
const doctorData = require('./doctorData.js');
const axios = require('axios');
const jwt = require('jsonwebtoken')
const jwtSecretKey = "MyNameIsStevenNoronha23456789012";
const User = require("./User")



router.get('/questionData', (req,res) =>{
    try {
        res.send([doshaData]);   
    } catch (error) {
        console.error(error.message);
        res.send("Serve Error")
    } 
})

router.get('/doctorData', (req,res) =>{
    try {
        res.send(doctorData);   
    } catch (error) {
        console.error(error.message);
        res.send("Serve Error")
    } 
})



router.post('/mealplan', async (req, res) => {
    try {
        const authToken = req.headers['authorization'];
        const token = authToken && authToken.split(' ')[1];
        jwt.verify(token, jwtSecretKey, async (err, decodedToken) => {
            if (err) {
                console.error('Error verifying token:', err);
                return res.status(401).send('Unauthorized');
            }

            const userId = decodedToken.user.id;

            try {
                // Find the user by ID
                const user = await User.findById(userId);
                if (!user) {
                    return res.status(404).send('User not found');
                }

                // Retrieve the user's dosha
                const doshareq = user.doshas.toString();
                const doshareqTrimmed = doshareq.trim();
                const user_data = {"name": user.name, "weight": user.weight, "age": user.age, "gender": user.gender};
    

                // Retrieve the meal plan based on the dosha
                const mealplan = mealplanData[doshareqTrimmed];
                const res_data = [mealplan, user_data, doshareqTrimmed];
                res.send(res_data);  
            } catch (error) {
                console.error('Error fetching user data:', error);
                res.status(500).send('Internal Server Error');
            }
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
    } 
}); 


async function sendDataToFlask(qna_data) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', qna_data);
        console.log('Prediction:', response.data);
        return response.data; // Return the prediction data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


router.post('/submitData', async (req, res) => {
    try {
        let qna_data = req.body.qna_data;
        const authToken = req.headers['authorization'];
        const token = authToken && authToken.split(' ')[1];
        
        jwt.verify(token, jwtSecretKey, async (err, decodedToken) => {
            if (err) {
                console.error('Error verifying token:', err);
                return res.status(401).send('Unauthorized');
            }
            
            const userId = decodedToken.user.id; 

            // Call sendDataToFlask function and send data to Flask
            const prediction = await sendDataToFlask(qna_data);
            console.log(prediction);
            
            const updatedDoshas = prediction["predicted_label"] === "0"
                ? " Vata"
                : prediction["predicted_label"] === "1"
                ? " Kapha"
                : prediction["predicted_label"] === "2"
                ? " Pitta"
                : "";

            // Update the user document in the database with the updated doshas
            try {
                await User.findByIdAndUpdate(userId, { doshas: updatedDoshas });
                console.log('User doshas updated successfully');
            } catch (updateError) {
                console.error('Error updating user doshas:', updateError);
                return res.status(500).send('Error updating user doshas');
            }

            res.send(prediction);
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error');
    }
});
 

module.exports = router;