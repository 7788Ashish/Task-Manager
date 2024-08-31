const mongoose = require('mongoose')
const URL =  process.env.MongoURL

mongoose.connect(URL).then(()=>{
console.log("Connected with Database");
}).catch((error)=>{
  console.log(`Error in  connecting with DB ${error}`)
})