const mongoose = require('mongoose');
const studentdb =()=> {
mongoose.connect("mongodb://127.0.0.1:27017/student").then(() => {
    console.log("connedted");
    
}).catch((err) => {
    console.log(err);
    
});
}

module.exports={studentdb};

