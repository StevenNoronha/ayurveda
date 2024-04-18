const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecretKey = "MyNameIsStevenNoronha23456789012"
const User = require("./User")

router.post("/createuser", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            weight: req.body.weight,
            age: req.body.age,
            gender: req.body.gender
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    } 
});


router.post("/loginuser",
    async (req, res) => {
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Email not found" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
            if (!pwdCompare){
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecretKey)
            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;
