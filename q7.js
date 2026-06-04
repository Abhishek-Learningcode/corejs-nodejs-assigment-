const mongoose = require('mongoose');
const { studentdb } = require('./db1');

const stdData = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
        max:40,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    fees:{
        type:Number,
        required:true,
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true,
    }
})

const alldata = mongoose.model("student",stdData);
studentdb();

// async function insertData() {
//     try {
//         const data =  new alldata({
//                 id:8,
//                 name:"ritesh",
//                 email:"ritesh@gmail.com",
//                 course:"btech",
//                 age:25,
//                 city:"mumbai",
//                 fees:21000,
//                 isActive:true

//         })

//         const result = await data.save();
//         console.log(result);
        



//     } catch (error) {
//         console.log(error);
        
//     }
// }
// insertData();

async function allView() {
    try {
        const result = await alldata.find();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
allView();

// async function delteAll() {
//     try {
//         const result = await alldata.deleteOne({id:{$gt:1,$lt:3}});
//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// delteAll();

async function updataAll() {
    try {
        const result = await alldata.updateOne({name:"abhi"},{$set:{city:"malad"}});
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
updataAll();