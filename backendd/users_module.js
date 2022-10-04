//Step 1: Database connection using connection string
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb+srv://aditya:mamgai@cluster0.9kphjjm.mongodb.net/tcet?retryWrites=true&w=majority"

// here above the inside const conn_str paste your mongodb atlas link
// modify <password> = mamgai
//after .net/ =add tcet(database name)

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );

//Step 2: Create Schema (similar to Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String,
	event: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;
