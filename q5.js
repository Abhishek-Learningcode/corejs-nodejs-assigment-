const fs = require('fs');

// const data = "hello my name abhishek";

// fs.writeFile("./student.txt",data,(err)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("done");
        
//     }
// })

fs.readFile("./student.txt",(err,data)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log(data.toString());
        
    }
})