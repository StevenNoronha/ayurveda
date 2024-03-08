const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://camraobro:kktRuTIi1LK6wyDn@cluster0.r0r8nqw.mongodb.net/ayurveda?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {  
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");
        const fetched_data = mongoose.connection.db.collection("doshas");
        const data = await fetched_data.find({}).toArray();

    }
    catch (error){
        console.log("Error in connection", error);
    }
}

module.exports = mongoDB;