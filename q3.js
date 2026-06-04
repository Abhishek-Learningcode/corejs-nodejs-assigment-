const mongoose = require('mongoose');
const { connectDB } = require('./db');

const empSchema= mongoose.Schema({
name:{
    type:String,
    required:true,
},
age:{
    type:Number,
    min:18,
    max:29,
    required:true,
},
salary:{
    type:Number,
    min:10000,
    max:2000000,
}

})
const moduledb = mongoose.model("emp1",empSchema);
connectDB();

// async function empInsert(){
//     try {
//         const data = new moduledb({
//             name:"abhi",
//             age:27,
//             salary:37000,
//         })
//         const result = await data.save();
//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// empInsert();

async function showData() {
  try {
      const result = await moduledb.find();
      console.log(result);
      
  } catch (error) {
    console.log(error);
    
  }
}
  showData();

  async function deleteInfo() {
    try {
        const result = await moduledb.deleteOne({name:"abhishek"});
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
  }
  deleteInfo();