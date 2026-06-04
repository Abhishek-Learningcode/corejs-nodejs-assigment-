const mongoose = require('mongoose');
const { connectDB } = require('./db');


const empSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
type:Number,
min:18,
max:35,
required:true},

city:{
    type:String,
    required:true,
}

})

 const moduledb= mongoose.model("emp",empSchema);
connectDB();

async function insertEmp() {
    try {
        const data = new moduledb({
            name:"abhi",
            age:22,
            city:"mumbai",
        });
        const result= await data.save();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
insertEmp();